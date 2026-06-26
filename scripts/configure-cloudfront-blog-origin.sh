#!/usr/bin/env bash

set -euo pipefail

ORIGIN_DOMAIN="${1:-}"
DISTRIBUTION_ID="${2:-E3QXXP918VA731}"
ORIGIN_ID="${3:-wordpress-blog-origin}"

if [[ -z "${ORIGIN_DOMAIN}" ]]; then
  echo "Usage: $0 <origin-domain> [distribution-id] [origin-id]" >&2
  exit 1
fi

if ! command -v aws >/dev/null 2>&1; then
  echo "aws CLI is required." >&2
  exit 1
fi

if ! command -v jq >/dev/null 2>&1; then
  echo "jq is required." >&2
  exit 1
fi

TMP_DIR="$(mktemp -d)"
trap 'rm -rf "${TMP_DIR}"' EXIT

DIST_FILE="${TMP_DIR}/distribution.json"
CONFIG_FILE="${TMP_DIR}/distribution-config.json"
UPDATED_FILE="${TMP_DIR}/distribution-config-updated.json"

aws cloudfront get-distribution --id "${DISTRIBUTION_ID}" > "${DIST_FILE}"

ETAG="$(jq -r '.ETag' "${DIST_FILE}")"
jq '.Distribution.DistributionConfig' "${DIST_FILE}" > "${CONFIG_FILE}"

jq \
  --arg originId "${ORIGIN_ID}" \
  --arg originDomain "${ORIGIN_DOMAIN}" \
  '
  .Origins.Items |= (
    if any(.[]; .Id == $originId) then
      map(
        if .Id == $originId then
          .DomainName = $originDomain
          | .CustomHeaders = {
              "Quantity": 1,
              "Items": [{
                "HeaderName": "X-Forwarded-Proto",
                "HeaderValue": "https"
              }]
            }
        else
          .
        end
      )
    else
      . + [{
        "Id": $originId,
        "DomainName": $originDomain,
        "OriginPath": "",
        "CustomHeaders": {
          "Quantity": 1,
          "Items": [{
            "HeaderName": "X-Forwarded-Proto",
            "HeaderValue": "https"
          }]
        },
        "CustomOriginConfig": {
          "HTTPPort": 80,
          "HTTPSPort": 443,
          "OriginProtocolPolicy": "http-only",
          "OriginSslProtocols": {
            "Quantity": 1,
            "Items": ["TLSv1.2"]
          },
          "OriginReadTimeout": 30,
          "OriginKeepaliveTimeout": 5
        },
        "ConnectionAttempts": 3,
        "ConnectionTimeout": 10,
        "OriginShield": {
          "Enabled": false
        },
        "OriginAccessControlId": ""
      }]
    end
  )
  | .Origins.Quantity = (.Origins.Items | length)
  | .CacheBehaviors.Items = (
    ((.CacheBehaviors.Items // []) | map(select(.PathPattern != "/blog*"))) + [{
      "PathPattern": "/blog*",
      "TargetOriginId": $originId,
      "TrustedSigners": {
        "Enabled": false,
        "Quantity": 0
      },
      "TrustedKeyGroups": {
        "Enabled": false,
        "Quantity": 0
      },
      "ViewerProtocolPolicy": "redirect-to-https",
      "AllowedMethods": {
        "Quantity": 7,
        "Items": ["GET", "HEAD", "OPTIONS", "PUT", "PATCH", "POST", "DELETE"],
        "CachedMethods": {
          "Quantity": 2,
          "Items": ["GET", "HEAD"]
        }
      },
      "SmoothStreaming": false,
      "Compress": true,
      "LambdaFunctionAssociations": {
        "Quantity": 0
      },
      "FunctionAssociations": {
        "Quantity": 0
      },
      "FieldLevelEncryptionId": "",
      "CachePolicyId": "4135ea2d-6df8-44a3-9df3-4b5a84be39ad",
      "OriginRequestPolicyId": "216adef6-5c7f-47e4-b989-5492eafa07d3",
      "GrpcConfig": {
        "Enabled": false
      }
    }]
  )
  | .CacheBehaviors.Quantity = (.CacheBehaviors.Items | length)
  ' "${CONFIG_FILE}" > "${UPDATED_FILE}"

aws cloudfront update-distribution \
  --id "${DISTRIBUTION_ID}" \
  --if-match "${ETAG}" \
  --distribution-config "file://${UPDATED_FILE}"

echo "Updated CloudFront distribution ${DISTRIBUTION_ID}."
echo "Origin domain: ${ORIGIN_DOMAIN}"
echo "Behavior: /blog* -> ${ORIGIN_ID}"
