const Swup = require('swup').default;
const SwupOverlayTheme = require('@swup/overlay-theme');

const swup = new Swup({
  plugins: [new SwupOverlayTheme({
      direction: 'to-bottom'
  })],
});
