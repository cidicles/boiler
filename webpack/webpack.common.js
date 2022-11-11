const ESLintPlugin = require('eslint-webpack-plugin');
const inspiration = ['you can do it', 'amazing', 'wow good job', 'you rock', 'wat a 1337 haxor'];
const fonts = ['Alligator', 'Crazy', 'Graffiti', 'Line Blocks', 'Relief', 'Train'];
const randy = yar => yar[Math.floor(Math.random()*yar.length)];
const figlet = require('figlet');

module.exports = {
  plugins: [
    new ESLintPlugin(),
    {
      apply: (compiler) => {
        compiler.hooks.afterEmit.tap('afterCompile', (compilation) => {
          figlet.text(randy(inspiration), {
            font: randy(fonts),
            horizontalLayout: 'default',
            verticalLayout: 'default',
            whitespaceBreak: true
          }, function(err, data) {
            console.log(data);
          });
        });
      }
    }
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
};