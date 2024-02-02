const fs = require('fs').promises;

async function writeToFile(filePath, content) {

  try{
    await fs.writeFile(filePath, content);
    console.log(`Data written to ${filePath}`);

  } catch(err){
    console.error(`Error writing to file: ${err.message}`);

  }
}

// Test Cases

(async () => {
  await writeToFile('test-files/output1.txt', 'Hello NodeJS!');
  await writeToFile('test-files/nonexistent-folder/output.txt', 'Content in a non-existent folder.');
})();
