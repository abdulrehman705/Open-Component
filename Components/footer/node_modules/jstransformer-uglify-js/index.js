'use strict'

var uglifyJS = require('uglify-js')

exports.name = 'uglify-js'
exports.outputFormat = 'js'
exports.inputFormat = ['js']

exports.render = function (str, options) {
  options = options || {}
  options.fromString = true
  return uglifyJS.minify(str, options).code
}

exports.renderFile = function (file, options) {
  options = options || {}
  options.fromString = false
  return uglifyJS.minify(file, options).code
}
