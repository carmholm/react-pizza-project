var React = require('react');
var ReactRouter = require('react-router');

var data = {};

function getData(key) {
  return data[key];
}

module.exports = {getData: getData};