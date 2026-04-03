const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // Let's replace any figma:asset imports with a generic image import from the img folder
  // Since we don't know the exact depth, we'll try to find out how many levels deep we are from /src
  const relativeFromSrc = path.relative(path.join(__dirname, 'src'), filePath);
  const depth = relativeFromSrc.split(path.sep).length;
  const backPath = Array(depth).fill('..').join('/');
  
  const imgPath = backPath ? `${backPath}/img/hero.png` : '../img/hero.png';

  if (content.includes('figma:asset')) {
    content = content.replace(/import (\w+) from "figma:asset\/[^"]+\.png";/g, `import $1 from "${imgPath}";`);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Fixed imports in:', filePath);
  }
}

function scanDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      scanDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      replaceInFile(fullPath);
    }
  }
}

scanDir(path.join(__dirname, 'src'));
