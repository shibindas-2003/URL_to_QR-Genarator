const QRCode = require('qrcode');
const readlineSync = require('readline-sync');

// Ask user to enter the data (URL/text)
const userInput = readlineSync.question('🔗 Enter the URL or text to generate QR Code: ');

// Generate QR code image
QRCode.toFile('./qr.png', userInput, {
  color: {
    dark: '#000', // QR code color
    light: '#FFF' // Background color
  }
}, function (err) {
  if (err) throw err;
  console.log('✅ QR Code has been saved as "qr.png"');
});

// Optional: Print in terminal
QRCode.toString(userInput, { type: 'terminal' }, function (err, url) {
  if (err) throw err;
  console.log('\n🔳 QR Code Preview in Terminal:\n');
  console.log(url);
});
