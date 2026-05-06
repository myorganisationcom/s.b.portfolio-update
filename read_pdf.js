const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('sarvanu.com Changes.pdf');

pdf(dataBuffer).then(function(data) {
    fs.writeFileSync('pdf_content.txt', data.text);
}).catch(err => console.error(err));
