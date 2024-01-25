const fs = require('fs');
const path = require('path');

function calculateFolderSize(directoryPath) {
    let totalSize = 0;

    function readDirectory(directory) {
        const files = fs.readdirSync(directory);

        for (const file of files) {
            const filePath = path.join(directory, file);
            const fileStats = fs.statSync(filePath);

            if (fileStats.isDirectory()) {
                readDirectory(filePath);
            }
            else {
                totalSize += fileStats.size;
            }
        }
    }

    readDirectory(directoryPath);
    return totalSize;
}

const packageName = '@fjrodafo/free-port';
const packageDirectory = './node_modules/' + packageName;
const sizeInBytes = calculateFolderSize(packageDirectory);
const sizeInKilobytes = sizeInBytes / 1024;

console.log(`'${packageName}' package size: \x1B[1m${sizeInKilobytes.toFixed(2)}\x1B[22m kB`);
