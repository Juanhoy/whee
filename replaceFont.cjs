const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.resolve(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('./src');
files.forEach(f => {
  let cnt = fs.readFileSync(f, 'utf8');
  let newCnt = cnt.replace(/'Plus_Jakarta_Sans',sans-serif/g, "'Poppins',sans-serif");
  // The user wants header menu list font to be Poppins too. 
  // Let's replace 'Manrope',sans-serif in Layout.tsx explicitly.
  if (f.endsWith('Layout.tsx')) {
    newCnt = newCnt.replace(/'Manrope',sans-serif/g, "'Poppins',sans-serif");
    // Add framer-motion imports to Layout if missing
    if (!newCnt.includes('framer-motion')) {
      newCnt = newCnt.replace('import { ScrollToTop } from "./ScrollToTop";', 'import { ScrollToTop } from "./ScrollToTop";\nimport { motion, AnimatePresence } from "framer-motion";');
    }
  }
  
  if (f.endsWith('Home.tsx')) {
    if (!newCnt.includes('framer-motion')) {
      newCnt = newCnt.replace('import { Link }', 'import { motion } from "framer-motion";\nimport { Link }');
    }
  }

  if (cnt !== newCnt) {
    fs.writeFileSync(f, newCnt);
  }
});
