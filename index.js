'use strict';

let recursive = require('recursive-readdir');

recursive(__dirname, (err, files) => {
  if (err) {
    console.error(err.stack);
    process.exit(1);
  } else {
    console.log(`${files.length} files found`);
  }
});
