const fs = require('fs');
let t = fs.readFileSync('src/data/blogContent.js', 'utf8');
t = t.replace('",\\n  "revenue-vanity', '",\n  "revenue-vanity');
fs.writeFileSync('src/data/blogContent.js', t);
console.log('Fixed blogContent.js syntax error.');
