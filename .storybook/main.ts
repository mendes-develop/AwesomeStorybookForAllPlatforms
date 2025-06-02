import path from 'path';

/** @type{import("@storybook/react-webpack5").StorybookConfig} */
module.exports = {
  stories: [
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],

  addons: ["@storybook/addon-links", {
    name: '@storybook/addon-react-native-web',
    options: {
      modulesToTranspile: [
        'react-native-reanimated',
        'nativewind',
        'react-native-css-interop',
        '@rn-primitives'
      ],
      babelPresets: ['nativewind/babel'],
      babelPresetReactOptions: { jsxImportSource: 'nativewind' },
      babelPlugins: [
        'react-native-reanimated/plugin',
        [
          '@babel/plugin-transform-react-jsx',
          {
            runtime: 'automatic',
            importSource: 'nativewind',
          },
        ],
      ],
    },
  }, '@storybook/addon-docs'],

  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },

  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [require('tailwindcss'), require('autoprefixer')]
            }
          }
        }
      ],
      include: path.resolve(__dirname, '../') // path to project root
    })

    return {
      ...config
    }
  }
};
