//exporta a funcao index deixando disponivel para ser usada
// em outras partes do projeto
module.exports.index = function (application, _req, res) {
    
    //cria uma instacia de modulo news que sera usado para acessar 
    //os dados da noticia
    var newsModel = new application.src.models.news();
    
    //chama o metodo getlastnews do modulo news model para buscar
    //as ultimas noticias, esse proximo metodo recebe a funcao callback 
    //que sera executada apois ser concluida
    newsModel.getLastNews(function (error, result) {
        
        //se consulta der certo o result tera as noticias recuperadas do 'banco de dados', o metodo 
        //res .render é chamado para renderizar a view - news/index e passa as 
        //noticias obtidas no result para a view, onde sera exibida para o usuario
        res.render('news/index', {news : result});

    })

}