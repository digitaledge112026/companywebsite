const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const tailwind = require('@tailwindcss/postcss');

async function testScan() {
  const css = `
    @import "tailwindcss";
    @variant dark (&:where(.dark, .dark *));
    @source "../src";
  `;
  const result = await postcss([tailwind]).process(css, {
    from: path.join(__dirname, '..', 'src', 'app', 'globals.css'),
  });
  
  const hasDarkBg = result.css.includes('dark\\:bg-');
  const hasDarkText = result.css.includes('dark\\:text-');
  console.log('Result length:', result.css.length);
  console.log('Has dark:bg- ?', hasDarkBg);
  console.log('Has dark:text- ?', hasDarkText);
  
  const darkMatches = result.css.match(/:where\(\.dark[^{]*\{/g) || [];
  console.log('Total :where(.dark matches:', darkMatches.length);
  if (darkMatches.length > 0) {
    console.log('Sample:', darkMatches.slice(0, 3));
  }
}

testScan();
