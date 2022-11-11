const path = require('path');
const { merge } = require('webpack-merge');
const figlet = require('figlet');
const common = require('./webpack.common.js');

const inspiration = ['you can do it', 'amazing', 'wow good job', 'you rock', 'wat a 1337 haxor'];
const fonts = ['Alligator', 'Crazy', 'Graffiti', 'Line Blocks', 'Relief', 'Train'];
const randy = yar => yar[Math.floor(Math.random()*yar.length)];

figlet.text(randy(inspiration), {
  font: randy(fonts),
  horizontalLayout: 'default',
  verticalLayout: 'default',
  whitespaceBreak: true
}, function(err, data) {
  console.log(data);
});

module.exports = merge(common, {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public'),
  },
});
