const path = require('path');
const postcss = require('postcss');
const tailwind = require('@tailwindcss/postcss');

async function testVariant(v) {
  const css = `
    @import "tailwindcss";
    ${v}
    @source "../src";
    .test-box {
      @apply bg-white dark:bg-black;
    }
  `;
  const result = await postcss([tailwind]).process(css, {
    from: path.join(__dirname, '..', 'src', 'app', 'globals.css'),
  });
  
  console.log('===', v, '===');
  const match = result.css.match(/(\.test-box[\s\S]*?)(?=\.test-box|\/\*|$)/g);
  if (match) {
    console.log(match.join('\n'));
  }
}

async function run() {
  await testVariant('@custom-variant dark (&:where(.dark, .dark *));');
  await testVariant('@variant dark (&:where(.dark, .dark *));');
  await testVariant('@custom-variant dark (.dark &);');
}

run();
