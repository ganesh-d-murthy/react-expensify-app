console.log(__dirname);
const path = require('path');
console.log(path.join(__dirname, 'public', 'scripts'));
module.exports = function override(config, env) {
    //do stuff with the webpack config...
    console.log(config);
    return config;
  }