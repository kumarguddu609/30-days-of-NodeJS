const { exec } = require('child_process');

async function executeCommand(command) {
    try {
        const { stdout, stderr } = await execPromise(command);
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
        console.log(`Command Output:\n${stdout}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

function execPromise(command) {
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                reject(error);
                return;
            }
            resolve({ stdout, stderr });
        });
    });
}

// Test Cases:

(async () => {
  await executeCommand('ls -la');
  await executeCommand('echo "Hello, Node.js!"');
})();