'use strict';

const fs = require('fs');
const path = require('path');

for (let i = 0; i < 1500; i++) {
  let filePath = path.resolve(__dirname, `./loads_of_files/file_${i}`);
  fs.writeFileSync(filePath, `I am file number ${i}`);
}
