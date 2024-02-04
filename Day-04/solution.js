const path = require('path');

async function resolvePath(relativePath) {
    try {
        const absolutePath = await path.resolve(relativePath);
        console.log(`Resolved Path: ${absolutePath}`);
    } catch (error) {
        console.error(`Error resolving path: ${error.message}`);
    }
}

// Test Cases:
(async () => {
    await resolvePath('../test-files/file.txt');
    await resolvePath('nonexistent-folder/file.txt');
})();
