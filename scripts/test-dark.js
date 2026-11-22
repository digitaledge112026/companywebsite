const postcss = require('postcss');
const tailwind = require('@tailwindcss/postcss');

async function test(variantDef) {
  const css = `
    @import "tailwindcss";
    ${variantDef}
  `;
  try {
    const res = await postcss([tailwind]).process(css, { from: 'src/app/globals.css' });
    const hasDark = res.css.includes('.dark');
    console.log(variantDef, '-> length:', res.css.length, 'has .dark?', hasDark);
  } catch (e) {
    console.error('Error:', e.message);
  }
}

async function run() {
  await test('@custom-variant dark (&:where(.dark, .dark *));');
  await test('@variant dark (&:where(.dark, .dark *));');
  await test('@custom-variant dark (&:is(.dark *));');
}

run();
