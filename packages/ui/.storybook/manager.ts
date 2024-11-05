import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

addons.setConfig({
  // theme docs: https://storybook.js.org/docs/configure/user-interface/theming
  theme: create({
    base: 'light',

    fontBase: '"Open Sans", sans-serif',
    fontCode: 'monospace',

    brandTitle: 'dyllon-ui',
    brandUrl: '/',
    brandImage: '/logo.png',
  })
});
