// Test script to validate CSS syntax
const fs = require('fs');
const path = require('path');

try {
  const cssContent = fs.readFileSync(path.join(__dirname, 'app/globals.css'), 'utf8');
  
  // Simple brace matching
  const openBraces = (cssContent.match(/\{/g) || []).length;
  const closeBraces = (cssContent.match(/\}/g) || []).length;
  
  console.log(`Open braces: ${openBraces}`);
  console.log(`Close braces: ${closeBraces}`);
  
  if (openBraces === closeBraces) {
    console.log('✅ CSS syntax appears valid - braces are balanced');
    process.exit(0);
  } else {
    console.log('❌ CSS syntax error - unbalanced braces');
    process.exit(1);
  }
} catch (error) {
  console.error('Error reading CSS file:', error.message);
  process.exit(1);
}