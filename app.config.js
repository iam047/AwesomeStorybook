export default ({ config }) => ({
  ...config,
  name: "AwesomeStorybook",
  slug: "expo-template-blank-typescript",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  extra: {
    storybookEnabled: process.env.STORYBOOK_ENABLED,
  },
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'com.anonymous.AwesomeStorybook',
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#FFFFFF",
    },
    package: 'com.anonymous.AwesomeStorybook',
  },
  web: {
    favicon: "./assets/favicon.png",
  },
});
