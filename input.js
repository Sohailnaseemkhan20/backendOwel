// This is a simple Node.js script that logs the third command line argument passed to it.
// The process.argv array contains the command line arguments passed to the Node.js process.

// console.log(process.argv[2]);

const fs = require('fs');

const action = process.argv[2];
const fileName = process.argv[3];
const content = process.argv[4];

if (action === 'create') {
    fs.writeFileSync(fileName, content);
}

else if (action === 'delete') {
    fs.unlinkSync(fileName);
}
else {
    console.log('Invalid action. Please use "create" or "delete".');
}