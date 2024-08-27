const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const config = {
  /* your config */
}

module.exports =mergeConfig(getDefaultConfig(__dirname), config);