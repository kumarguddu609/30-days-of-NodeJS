const fs = require('fs').promises;

async function readFileContent(filePath) {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        console.log('File Content:');
        console.log(data);
    } catch (err) {
        if (err.code === 'ENOENT') {
            console.error(`Error reading file: ${err.code}: ${err.path} - ${err.message}`);
        } else {
            console.error(`Error reading file: ${err.message}`);
        }
    }
}

// Test Cases
(async () => {
    await readFileContent('test-files/file1.txt');
    await readFileContent('test-files/empty-file.txt');
    await readFileContent('test-files/nonexistent-file.txt');
})();
