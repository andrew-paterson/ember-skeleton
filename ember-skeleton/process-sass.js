const sass = require('sass');
const fs = require('fs');
const path = require('path');

const inOut = [
  {
    input: './src/styles/scss/ember-skeleton.scss',
    output: ['./src/styles/ember-skeleton.css'],
    sourceMap: true,
  },
];

inOut.forEach((item) => {
  const result = sass.compile(item.input, {
    sourceMap: item.sourceMap,
    // outputStyle: 'compressed',
  });
  item.output.forEach((output) => {
    const outputPath = path.resolve(__dirname, output);
    const css = `${result.css}\n/*@ sourceMappingURL=${path.basename(outputPath)}.map*/`;
    fs.writeFileSync(outputPath, css);
    if (!item.sourceMap) {
      return;
    }
    console.log(`${outputPath}.map`);
    fs.writeFileSync(`${outputPath}.map`, JSON.stringify(result.sourceMap));
  });
});

console.log('Sass compiled to CSS.');
