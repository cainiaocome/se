#!/usr/bin/env python2.7
# coding: utf-8

from flask import Flask
from flask import url_for
from flask import render_template
app = Flask(__name__)


@app.route('/')
@app.route('/index')
@app.route('/index.html')
def index():
    return render_template('index.html')
@app.route('/search/<keyword>')
def search(keyword):
    #print url_for('static', filename='style.css')
    return 'search {}'.format(keyword)

if __name__=='__main__':
    # be careful, remember to disable debug before taking online
    app.run('0.0.0.0', debug=True)
