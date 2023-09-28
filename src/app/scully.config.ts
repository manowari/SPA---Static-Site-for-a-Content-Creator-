import { ScullyConfig } from '@scullyio/scully';

export const config: ScullyConfig = {
  projectRoot: './src',
  routes: {
    '/': {
      type: 'content',
      postRenderers: ['content-to-html'],
    },
    '/merchandise': {
      type: 'content',
      postRenderers: ['content-to-html'],
    },
    '/about': {
      type: 'content',
      postRenderers: ['content-to-html'],
    },
    '/contact': {
      type: 'content',
      postRenderers: ['content-to-html'],
    },
    // Add more routes as needed
  },
};
