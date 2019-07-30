import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'ie11-test',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      baseUrl: 'http://test.com',
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
