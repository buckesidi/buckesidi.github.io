#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = 'Buč kesidi'
SITENAME = 'Buč kesidi'
SITEURL = 'https://buckesidi.com'
KEYWORDS = ''

PATH = 'content'

TIMEZONE = 'Europe/Belgrade'

DEFAULT_LANG = 'sr'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Theme
THEME = 'theme'

# Social widget
SOCIAL = (('You can add links in your config file', '#'),
          ('Another social link', '#'),)

DEFAULT_PAGINATION = 10

STATIC_PATHS = ['images', 'static', 'uploads']
READERS = {'html': None}

ARTICLE_SAVE_AS = 'vesti/{slug}.html'
ARTICLE_URL = 'vesti/{slug}.html'

PAGE_SAVE_AS = '{slug}.html'

MARKDOWN = {
    'extension_configs': {
        'markdown.extensions.codehilite': {'css_class': 'highlight'},
        'markdown.extensions.extra': {},
        'markdown.extensions.meta': {},
    },
    'output_format': 'html5',
}

from datetime import date
CURRENTYEAR = date.today().year

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True
