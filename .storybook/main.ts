import path from 'path';

/** @type{import("@storybook/react-vite").StorybookConfig} */
module.exports = {
  stories: [
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],

  addons: ["@storybook/addon-links", {
    name: '@storybook/addon-react-native-web-vite',
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
    name: "@storybook/react-vite",
    options: {},
  },

  core: {
    builder: '@storybook/builder-vite',
  },

  async viteFinal(config) {
    // Add tailwind and autoprefixer support
    return {
      ...config,
      css: {
        postcss: {
          plugins: [require('tailwindcss'), require('autoprefixer')],
        },
      },
    };
  }
};
