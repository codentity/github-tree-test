'use strict';

const fs = require('fs');
const path = require('path');

for (let i = 1; i <= 1000; i++) {
  let filePath = path.resolve(__dirname, `./loads_of_files/file_${pad(i,4)}`);
  fs.writeFileSync(filePath, `I am file number ${i}`);
}

function pad (n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}
