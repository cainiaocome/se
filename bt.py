#!/usr/bin/env python2.7
# coding: utf-8

from whoosh.index import open_dir
from whoosh.query import Term
from flask import Flask
from flask import url_for
from flask import render_template
from flask import request
from flask import abort, redirect
import string
app = Flask(__name__)

whitelist = string.letters + string.digits + '!"#$%&()*+,-./:;<=>?@[]^_`{|}~'

@app.route('/')
@app.route('/index')
@app.route('/index.html')
def index():
    return render_template('index.html')

@app.route('/fuck')
def fuck():
    return 'get away, man, {}'.format(request.remote_addr)

@app.route('/search', methods=['get'])
def search():
    kw = request.args.get('kw', '')
    if kw=='':
        return redirect(url_for('fuck'))
    kw = kw.split()[0]
    #for x in kw:
    #    if x not in whitelist:
    #        return redirect(url_for('fuck'))
    ix = open_dir('/var/indexdir')
    searcher = ix.searcher()
    q = Term('name', kw)
    results = searcher.search(q)
    r = render_template('search.html', results=results)  # results depends on searcher
    searcher.close()

    return r

if __name__=='__main__':
    # be careful, remember to disable debug before taking online
    app.run('0.0.0.0', debug=False)
