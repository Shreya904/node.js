
const fs = require('fs');

const files = fs.readdirSync('./');
console.log(files);


const log = require('./logger');

log('java');
