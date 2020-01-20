const readline = require('readline');
const { encrypt, decrypt } = require('./lib/crypt');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const commandLineKeys = ['--enc', '--dec'];

const encryptUserMessage = message =>
  console.log('Your encrypted message: ', encrypt(message));
const decryptUserMessage = message =>
  console.log('Your message decrypted: ', decrypt(message));

const chooseModeCallback = mode => {
  switch (mode) {
  case '1':
    console.log('You choosen Encrypt mode');
    rl.question('Enter your message to encrypt: ', encryptUserMessage);
    break;
  case '2':
    console.log('You choosen Decrypt mode');
    rl.question('Enter message to decrypt: ', decryptUserMessage);
    break;
  default:
    console.log('Incorrect input');
  }
};

const chooseMethod = method => {
  switch (method) {
      case '1':
      console.log('You choosen RSA method');break;
      case '2':
      console.log('You choosen md5 method');break;
  
      default: 
      console.log('Incorrect input');
  }
  const entryMessage = 'Please, choose mode\n' +
        '1 - Encrypt, 2 - Decrypt\nYour mode: ';
    rl.question(entryMessage, chooseModeCallback);
};

// Entry Point //

((key, data) => {
  if (key && data) {
    if (commandLineKeys.includes(key)) {
      switch (key) {
      case '--enc':
        console.log(encrypt(data));
        break;
      case '--dec':
        console.log(decrypt(data));
        break;
      }
      rl.close();
    } else {
      console.log('Unknown command!');
    }
  } else {
    const entryMessage1 = 'Which method you would like to use?\n'+
      '1 - RSA, 2 - md5\n Your mode: ';
      rl.question(entryMessage1,chooseMethod);

  }
})(process.argv[2], process.argv[3]);
