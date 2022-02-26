module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./app'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '*': '.',
          '@root': './',
          '@app': './app',
          '@components': './app/components',
          '@navigation': './app/navigation',
          '@redux': './app/redux',
          '@screens': './app/screens',
          '@constants': './app/constants',
          '@assets': './app/assets',
        },
      },
    ],
  ],
};