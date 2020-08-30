const Swup = require("swup").default;
const SwupOverlayTheme = require("@swup/overlay-theme");

const options = {
  linkSelector:
    'a[href^="' +
    window.location.origin +
    '"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup])',
  plugins: [
    new SwupOverlayTheme({
      direction: "to-bottom",
    }),
  ],
};

const swup = new Swup(options);
