

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const book = 'The Wind in the Willows (introductory fragment).txt';
const readStream = fs.createReadStream(path.join(__dirname, '/files', book));

//  1

readStream.on('data', (chunk) => { 
  const text = chunk.toString();
  const randomIndex = Math.floor(Math.random() * text.length); 
  const modifiedText = `${text.slice(0, randomIndex)}     INTRODUCRY FRAGMENT, COPYING IS PROHIBITED    ${text.slice(randomIndex)}`;
  console.log(modifiedText);
});





//  2
const log = (text) => {
    process.stdout.write(text)
}
log("Hello!!!");  



// 3

function ask(question) {
    return new Promise(resolve => {
      const { stdin } = process;
      stdin.resume();
      stdin.once('data', data => {
        resolve(data.toString().trim());
      });
      process.stdout.write(question);
    });
}

(async () => {
    const scss = await ask('Do you want to use SCSS? ');
    if (scss !== 'Y' && scss !== 'y' && scss !== 'yes' && scss !== 'YES' && scss !== 'N' && scss !== 'n' && scss !== 'no' && scss !== 'NO') {
        process.stdout.write('Invaliv response format')
        process.exit();
    }

    const eslint = await ask('Do you want to ESLint? ');
    if (eslint !== 'Y' && eslint !== 'y' && eslint !== 'yes' && eslint !== 'YES' && eslint !== 'N' && eslint !== 'n' && eslint !== 'no' && eslint !== 'NO') {
        process.stdout.write('Invaliv response format')
        process.exit();
    }    
})();






