//Impoeta o modulo 'express', framework web para node.js
var express = require('express');

//importa o modulo para autoload (autocarregamento) de scripts, facilitando o gerenciamento 
//de rotas, ,pdels e controllers
var consign = require('consign');

//criar uma instancia do express
var app = express();

//configura a engine de visualização como 'ejs' para renderizar arquivos .ejs
app.set('view engine', 'ejs');

//configura o app para carregar arquivos estaticos (css)
app.use(express.static('public'));

//define o diretorio onde estao localizadas as views (template EJS)
app.set('views', './src/views');

//confiura o 'consign' para incluir automaticamente as rotas, models e controllers na aplicacao
consign()
    .include('src/routes') //inclui as rotas, carregando os arquivos para a pasta 'src/routes'
    .then('src/models') // inclui models, carregando os arquivos da pasta 'src/models'
    .then('src/controllers') //inclui os controllers, carregando os arquivos da pasta 'src/controllers'
    .into(app); //injeta essas dependências na instancia express(app)

app.listen(3000, () => {
    console.log('on')
})