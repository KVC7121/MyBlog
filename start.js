import { exec } from 'child_process';

// Command to start index.js (API server)
const apiProcess = exec('node index.js');

// Command to start server.js (frontend server)
const frontendProcess = exec('node server.js');

// Log any output from the child processes
apiProcess.stdout.on('data', (data) => {
  console.log(`[API] ${data}`);
});

frontendProcess.stdout.on('data', (data) => {
  console.log(`[Frontend] ${data}`);
});

// Log errors, if any
apiProcess.stderr.on('data', (data) => {
  console.error(`[API Error] ${data}`);
});

frontendProcess.stderr.on('data', (data) => {
  console.error(`[Frontend Error] ${data}`);
});

// Handle exit of child processes
apiProcess.on('exit', (code) => {
  console.log(`[API] Process exited with code ${code}`);
});

frontendProcess.on('exit', (code) => {
  console.log(`[Frontend] Process exited with code ${code}`);
});
