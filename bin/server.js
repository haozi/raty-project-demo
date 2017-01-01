#!/usr/bin/env node

progress.env.NODE_ENV = 'production'
var App = require('raty').default
new App().start()
