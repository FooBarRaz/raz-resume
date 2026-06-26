# WordPress blog at `mehrazali.com/blog`

This repo already serves the resume from S3 through CloudFront:

- S3 bucket: `razweb`
- CloudFront distribution: `E3QXXP918VA731`
- Root domain: `mehrazali.com`

The clean way to add WordPress is to keep the resume exactly where it is and route only `/blog*` to a separate WordPress origin.

## Recommended architecture

- Keep the resume as the default CloudFront origin.
- Run WordPress on a separate server origin.
- Add a CloudFront cache behavior for `/blog*`.
- Point that behavior at the WordPress origin.
- Configure WordPress so its public URL is `https://mehrazali.com/blog`.

This avoids mixing PHP/MySQL into the static resume deployment and keeps the current GitHub Actions deploy flow unchanged.

## Practical hosting choice

Use a small AWS Lightsail instance for WordPress.

- Blueprint: `wordpress`
- Bundle to start with: `micro_3_0`
- Region: `us-east-1` to stay close to the existing stack

There are no running Lightsail or EC2 instances in this account as of March 21, 2026, so the blog origin still needs to be created.

## Required CloudFront behavior

The existing distribution only allows `GET` and `HEAD`. WordPress needs more than that for login, admin, post publishing, comments, and form submissions.

For `/blog*`, use:

- Path pattern: `/blog*`
- Allowed methods: `GET, HEAD, OPTIONS, PUT, PATCH, POST, DELETE`
- Cache policy: `Managed-CachingDisabled`
- Origin request policy: `Managed-AllViewer`
- Custom origin header: `X-Forwarded-Proto: https`
- Viewer protocol policy: `Redirect HTTP to HTTPS`

The helper script in [scripts/configure-cloudfront-blog-origin.sh](/Users/raz/dev/raz-resume/scripts/configure-cloudfront-blog-origin.sh) applies exactly that.

## WordPress origin requirements

Your WordPress origin must be able to serve the site from `/blog`, not `/`.

Two workable options:

1. Install WordPress so the application actually lives at `/blog` on the origin.
2. Put a reverse proxy in front of WordPress and make sure it preserves `/blog` publicly while WordPress is configured with:

```php
define('WP_HOME', 'https://mehrazali.com/blog');
define('WP_SITEURL', 'https://mehrazali.com/blog');
```

If you use the stock Lightsail WordPress blueprint, expect some extra origin-side work because that image is designed to serve WordPress from `/`, not from a subdirectory behind another origin.

## Suggested rollout

1. Create the Lightsail WordPress origin.
2. Attach a static IP.
3. Create a DNS name such as `blog-origin.mehrazali.com` for the instance.
4. Confirm the origin serves WordPress correctly at `/blog`.
5. Run the CloudFront helper script with that origin domain.
6. Wait for distribution deployment.
7. Validate:
   - `https://mehrazali.com/` still serves the resume.
   - `https://mehrazali.com/blog` serves WordPress.
   - `https://mehrazali.com/blog/wp-admin` loads and accepts login.

## Configure CloudFront

Run:

```bash
./scripts/configure-cloudfront-blog-origin.sh blog-origin.mehrazali.com
```

Optional arguments:

```bash
./scripts/configure-cloudfront-blog-origin.sh <origin-domain> <distribution-id> <origin-id>
```

Defaults:

- distribution id: `E3QXXP918VA731`
- origin id: `wordpress-blog-origin`

## Resume deploy impact

The existing deploy pipeline in [deploy.yml](/Users/raz/dev/raz-resume/.github/workflows/deploy.yml) will continue to publish only the static resume to S3. It will not overwrite the WordPress blog because the blog will sit behind a separate CloudFront behavior and origin.

## Recommended next step

Once the blog origin exists, run the helper script and then test `/blog` before making any content or theme changes.
