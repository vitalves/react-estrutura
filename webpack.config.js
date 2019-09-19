// para alterar o caminho de entry: 'src/index.js' para: path.resolve(__dirname, 'src', 'index.js'); 
const path = require('path');

module.exports = {
  // arquivo de entrada
  // entry: 'src/index.js' // alterado para compatibilidade com SOs
  entry: path.resolve(__dirname, 'src', 'index.js'),
  // onde ele vai jogar o bundle (codigo transpilado):
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  devServer: {
    // onde sera encontrado o index.html
    contentBase: path.resolve(__dirname, 'public'), //
  },
  // config: regras para tipos de arquivos
  module: {
    rules: [
      {
        test: /\.js$/, // encontre arquivo que termine em ".js"
        exclude: /node_modules/, // ignora tudo da pasta informada 
        use: {
          loader: 'babel-loader', // babel-loader -D 
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' }, // importa arquivo css
          { loader: 'css-loader' }, // possibilita import dentro do css
        ]
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: {
          loader: 'file-loader',
        }
      }
    ]
  }
}