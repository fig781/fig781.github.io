const fs = require('fs');
const path = require('path');

const articlesDir = './_articles';
const files = fs.readdirSync(articlesDir).filter(f => f.endsWith('.md'));

files.forEach(file => {
  const filePath = path.join(articlesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Find the end of frontmatter (second ---)
  const lines = content.split('\n');
  let frontmatterEnd = -1;
  let dashCount = 0;
  
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim() === '---') {
      dashCount++;
      if (dashCount === 2) {
        frontmatterEnd = i;
        break;
      }
    }
  }
  
  if (frontmatterEnd > 0) {
    // Insert layout before the closing ---
    lines.splice(frontmatterEnd, 0, 'layout: article.njk');
    content = lines.join('\n');
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file}`);
  }
});

console.log('Done!');
