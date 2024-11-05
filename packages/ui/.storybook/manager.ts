import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

addons.setConfig({
  // theme docs: https://storybook.js.org/docs/configure/user-interface/theming
  theme: create({
    base: 'light',

    fontBase: 'Outfit, "Open Sans", sans-serif',
    fontCode: 'monospace',

    brandTitle: 'dyllon-ui',
    brandUrl: '/',
    brandImage: '/logo.png',
    brandTarget: '_self',

    //
    // colorPrimary: '#000000',
    // colorSecondary: '#585C6D',
    
    // // UI
    // appBg: '#ffffff',
    // appContentBg: '#ffffff',
    // appPreviewBg: '#ffffff',
    // appBorderColor: '#585C6D',
    // appBorderRadius: 4,
    
    // // Text colors
    // textColor: '#10162F',
    // textInverseColor: '#ffffff',
    
    // // Toolbar default and active colors
    // barTextColor: '#9E9E9E',
    // barSelectedColor: '#585C6D',
    // barHoverColor: '#585C6D',
    // barBg: '#ffffff',
    
    // Form colors
    // inputBg: '#ffffff',
    // inputBorder: '#10162F',
    // inputTextColor: '#10162F',
    // inputBorderRadius: 1,
  })
});
