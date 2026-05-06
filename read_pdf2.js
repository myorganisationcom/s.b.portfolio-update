const { PdfReader } = require('pdfreader');
const fs = require('fs');

let text = '';
new PdfReader().parseFileItems('sarvanu.com Changes.pdf', function(err, item) {
    if (err) console.error(err);
    else if (!item) {
        fs.writeFileSync('pdf_content.txt', text);
        console.log('Done');
    }
    else if (item.text) {
        text += item.text + ' ';
    }
});
