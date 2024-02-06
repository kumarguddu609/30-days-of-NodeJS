const fs = require('fs').promises;
const path = require('path');

async function checkFileExtension(filePath, expectedExtension) {
    try {
        const fileStats = await fs.stat(filePath);
        if (fileStats.isFile()) {
            const actualExtension = path.extname(filePath);
            if (actualExtension === expectedExtension) {
                console.log(`File has the expected extension: ${expectedExtension}`);
            } else {
                console.log(`File does not have the expected extension. Expected: ${expectedExtension}, Actual: ${actualExtension}`);
            }
        } else {
            console.log('Provided path does not point to a file.');
        }
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.log('File not found.');
        } else {
            console.error('Error:', error.message);
        }
    }
}

// Test Cases

(async () => {
    await checkFileExtension('test-files/file1.txt', '.txt');
    // Expected Output: File has the expected extension: .txt

    await checkFileExtension('test-files/image.png', '.jpg');
    // Expected Output: File does not have the expected extension. Expected: .jpg, Actual: .png
})();