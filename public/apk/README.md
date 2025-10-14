# APK Files

This directory contains the Android APK files for the Aimora application.

## How to add a new APK:

1. Place your APK file in this directory
2. Update the `apkUrl` prop in the `DownloadButton` component in `MobileAppSection.tsx`
3. Update the version and size information if needed

## Current APK:
- **File**: `app-release.apk`
- **Version**: 1.0.0 (update as needed)
- **Size**: ~25 MB (update with actual size)

## Security Note:
APK files are served with proper headers to ensure they download as attachments rather than being displayed in the browser.
