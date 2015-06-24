hexo-tag-hatenabookmark plugin [![Build Status](https://drone.io/github.com/kazu69/hexo-tag-hatenabookmark/status.png)](https://drone.io/github.com/kazu69/hexo-tag-hatenabookmark/latest)
================

> [Hexo] embed code snippet [Hatena Bookmark](http://b.hatena.ne.jp/)

## Install

Install using [npm](https://npmjs.org/package/hexo-tag-hatenabookmark).

```
$ npm install hexo-tag-hatenabookmark --save
```
## Usage

### In theme file

```
# theme ejs file
<%- hatenabookmark(page.permalink, page.title, 'standard-balloon') %>
```
### In source file

```
# post markdown file
{% hatenabookmark permalink-your-post title-your-post standard-balloon %}
```

## Options

hatenabookmark(url, title, type, lang)

- url: Bookmarked url.
- title: Bookmarked title.
- type: Bookmark button type
- lang: Bookmark button language (```ja``` or ```en```)

Bookmark button type is ```simple```, ```simple-balloon```, ```standard-balloon```, ```standard-noballoon``` and ```vertical-balloon```.

If you chose ```simple``` or ```simple-balloon``` bookmark button , it is not possible to select a bookmark language. ( This will always be ```ja```)

More information see [Hatena Bookmark Button](http://b.hatena.ne.jp/guide/bbutton) page.

## License

MIT
