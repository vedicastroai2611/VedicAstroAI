# Building APK for Vedic Astro AI

## Prerequisites
1. Install Node.js (v18 or higher)
2. Install Android Studio
3. Install Java Development Kit (JDK 17)
4. Set up Android SDK

## Setup Instructions

### 1. Install Dependencies
\`\`\`bash
npm install
\`\`\`

### 2. Install Capacitor CLI globally
\`\`\`bash
npm install -g @capacitor/cli
\`\`\`

### 3. Initialize Capacitor (if not already done)
\`\`\`bash
npx cap init "Vedic Astro AI" "com.vedicastroai.app"
\`\`\`

### 4. Add Android Platform
\`\`\`bash
npx cap add android
\`\`\`

### 5. Build the Web App and Sync
\`\`\`bash
npm run build:mobile
\`\`\`

### 6. Open Android Studio
\`\`\`bash
npm run android:build
\`\`\`

## Building APK in Android Studio

1. Android Studio will open with your project
2. Wait for Gradle sync to complete
3. Go to **Build** → **Build Bundle(s) / APK(s)** → **Build APK(s)**
4. Wait for the build to complete
5. Click "locate" to find your APK file

## Alternative: Command Line Build
\`\`\`bash
cd android
./gradlew assembleDebug
\`\`\`

The APK will be located at: `android/app/build/outputs/apk/debug/app-debug.apk`

## Release Build (for Play Store)
\`\`\`bash
cd android
./gradlew assembleRelease
\`\`\`

## Troubleshooting
- Ensure Android SDK is properly installed
- Check that ANDROID_HOME environment variable is set
- Make sure Java 17 is installed and JAVA_HOME is set
- Run `npx cap doctor` to check for issues
