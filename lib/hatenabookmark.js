'use strict';

var util = require('hexo-util');

(function () {
  module.exports = function (url, title) {
    var type = arguments[2] === undefined ? 'standard-balloon' : arguments[2];
    var lang = arguments[3] === undefined ? 'ja' : arguments[3];

    if (!url) return;
    var htmlTag = util.htmlTag;
    var regex = /^(https?|ftp):\/\//;
    var types = ['simple', 'simple-balloon', 'standard-balloon', 'standard-noballoon', 'vertical-balloon'];

    if (typeof url !== 'string') {
      title = url[1], type = url[2], lang = url[3];
      if (!type) type = 'standard-balloon';
      if (!lang) lang = 'ja';
      if (title && type && lang) url = url[0];
    }

    url = url.replace(regex, '');

    if (types.indexOf(type) === -1) {
      console.error('incorrect type is set');
      return;
    }

    if (lang) {
      if (/^(simple)/.test(type) && lang === 'en') lang = 'ja';
    }

    var img = htmlTag('img', {
      src: 'https://b.st-hatena.com/images/entry-button/button-only@2x.png',
      alt: 'このエントリーをはてなブックマークに追加',
      width: '20',
      height: '20',
      style: 'border: none;'
    });

    var link = htmlTag('a', {
      href: 'http://b.hatena.ne.jp/entry/' + url,
      'class': 'hatena-bookmark-button',
      'data-hatena-bookmark-title': title,
      'data-hatena-bookmark-layout': type,
      'data-hatena-bookmark-lang': lang,
      title: 'このエントリーをはてなブックマークに追加'
    }, img);

    var hatenaScript = htmlTag('script', {
      src: 'https://b.st-hatena.com/js/bookmark_button.js',
      charset: 'utf-8',
      async: 'async'
    }, '');

    return link + hatenaScript;
  };
}).call(typeof global !== 'undefined' ? global : window);