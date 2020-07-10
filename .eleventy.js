const moment = require('moment');
 
moment.locale('en');
 
module.exports = function (eleventyConfig) {
  
  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPassthroughCopy('assets');
  eleventyConfig.addPassthroughCopy('images');
};