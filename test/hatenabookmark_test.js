'use strict';

var expect = require('chai').expect

describe('hatenabookmark', function() {
    var hatenabookmark = require('../lib/hatenabookmark');
    var url = 'http://github.com';
    var title = 'github';
    var type = 'standard-balloon';
    var lang = 'ja';
    var tags;

    describe('url and title parameter given', function() {
        before(function(done) {
            tags = hatenabookmark(url, title, type, lang);
            done();
        });

        it('has html tags', function() {
            expect(tags).to.be.a('string');
        });

        it('has entry url', function() {
            expect(tags).to.include('<a href="http://b.hatena.ne.jp/entry/github.com"');
        });

        it('has correct title', function() {
            expect(tags).to.include('data-hatena-bookmark-title="github"');
        })

        it('sets correct type', function() {
            expect(tags).to.include('data-hatena-bookmark-layout="' + type + '"');
        });

        it('sets correct lang type', function() {
            expect(tags).to.include('data-hatena-bookmark-lang="' + lang + '"');
        });

        it('has button image tag', function() {
            expect(tags).to.include('<img src="https://b.st-hatena.com/images/entry-button/button-only@2x.png" alt="このエントリーをはてなブックマークに追加" width="20" height="20" style="border: none;">')
        });

        it('has hatenabookmark scripts tag', function() {
            expect(tags).to.include('<script src="https://b.st-hatena.com/js/bookmark_button.js" charset="utf-8" async="async"></script>')
        });
    });

    describe('one parameter given', function() {
        var params = [url, title, type, lang];

        before(function(done) {
            tags = hatenabookmark(params);
            done();
        });

        it('has html tags', function() {
            expect(tags).to.be.a('string');
        });

        it('has entry url', function() {
            expect(tags).to.include('<a href="http://b.hatena.ne.jp/entry/github.com"');
        });

        it('has correct title', function() {
            expect(tags).to.include('data-hatena-bookmark-title="github"');
        })

        it('sets correct type', function() {
            expect(tags).to.include('data-hatena-bookmark-layout="' + type + '"');
        });

        it('sets correct lang type', function() {
            expect(tags).to.include('data-hatena-bookmark-lang="' + lang + '"');
        });

        it('has button image tag', function() {
            expect(tags).to.include('<img src="https://b.st-hatena.com/images/entry-button/button-only@2x.png" alt="このエントリーをはてなブックマークに追加" width="20" height="20" style="border: none;">')
        });

        it('has hatenabookmark scripts tag', function() {
            expect(tags).to.include('<script src="https://b.st-hatena.com/js/bookmark_button.js" charset="utf-8" async="async"></script>')
        });
    });

});
