require('./main.sass');

var Reveal = require('reveal.js');

Reveal.initialize({
  history: true,
  controls: false,
  transition: 'fade',
  transitionSpeed: 'fast',
});

require.ensure([], function() {
  require('script!reveal.js/plugin/highlight/highlight.js');
  window.hljs.initHighlightingOnLoad();
});
