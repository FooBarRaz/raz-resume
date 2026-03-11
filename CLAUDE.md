# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based resume application that uses the [JSON Resume](https://jsonresume.org/schema/) schema. The project displays resume data as both an interactive React application and generates a standard JSON Resume file for portability.

## Common Commands

### Development
```bash
npm start              # Compile TypeScript and start dev server (http://localhost:3000)
npm test               # Run Jest tests with jsdom environment
npm run gen            # Generate resume.json from raz-resume.ts data
```

### Build & Deploy
```bash
npm run build          # Compile TypeScript, build React app, and create static snapshot
npm run deploy         # Deploy build/ to AWS S3 (requires AWS credentials)
npm run predeploy      # Alias for build (runs before deploy)
npm run postdeploy     # Invalidate CloudFront cache after deploy
npm run eject          # Eject from react-scripts (irreversible)
```

## Architecture

### Data Flow
1. **Source Data**: `src/raz-resume.ts` - TypeScript object containing resume data following JSON Resume schema
2. **Transformation**: `src/dataTransformer.ts` - Transforms the source data:
   - Maps numeric skill levels (0-100) to descriptive levels (e.g., 90+ → "Master")
   - Removes `endDate: "Present"` from current positions
3. **Output**: Generated `resume.json` file (created by `npm run gen`)

### Project Structure
- `src/` - React application and core logic
  - `raz-resume.ts` - Resume data (single source of truth)
  - `dataTransformer.ts` - Data transformation logic
  - `App.tsx` - Main React component
  - `index.tsx` - React entry point
- `scripts/` - Build and generation scripts
  - `toJson.ts` - Script to generate resume.json
- `public/` - Static assets (profile image, index.html, etc.)
- `raz-resume/` - Legacy directory (may contain archived code)
- `scratch/` - Experimental scripts

### Key Dependencies
- **react** (15.x) - UI framework (note: relatively old version)
- **react-awesome-resume** (0.1.0) - Resume rendering component
- **@jsonresume/jsonresume-theme-class** - JSON Resume theme
- **semantic-ui-css** - UI styling
- **typescript** (5.3.3) - Type safety
- **react-snapshot** - Static site generation

## Resume Data Model

The `src/raz-resume.ts` file exports a `raz` object structured according to JSON Resume schema with these main sections:
- `basics` - Name, contact, location, summary, profiles
- `work` - Work experience entries
- `skills` - Skills with numeric levels (0-100) and keywords
- Other standard sections as needed

## Important Notes

### Skill Level Thresholds
Skills are mapped by numeric level to descriptions in `dataTransformer.ts`:
- 90+ → Master
- 80+ → Expert
- 70+ → Advanced
- 60+ → Proficient
- 50+ → Intermediate
- 40+ → Competent
- 30+ → Novice
- 20+ → Beginner
- <20 → Fundamental Awareness

### Deployment
- **Hosting**: AWS S3 bucket (razweb)
- **CDN**: CloudFront (Distribution ID: E3QXXP918VA731)
- **Trigger**: Pre-push git hook runs deploy automatically
- **Credentials**: Requires AWS CLI configured with appropriate permissions

### Updating Resume
1. Edit data in `src/raz-resume.ts`
2. Run `npm run gen` to generate `resume.json`
3. Commit both files
4. Push (automatically deploys via husky pre-push hook)
