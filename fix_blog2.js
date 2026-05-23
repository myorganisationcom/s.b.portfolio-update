const fs = require('fs');
let t = fs.readFileSync('src/data/blogContent.js', 'utf8');
t = t.replace(/",\\n  "/g, '",\n  "');
fs.writeFileSync('src/data/blogContent.js', t);
console.log('Fixed all syntax errors in blogContent.js.');
