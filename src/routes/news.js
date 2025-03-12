//Exporta uma função que recebe o objetos 'application' como parametro
//essa funcao configura uma rota na aplicacao

module.exports = function (application) {
    console.log('route')
    //Define uma rota HTTP - GET para raiz da aplicacao ('/')
    application.get('/', function(req,res) {
        console.log('deu')
        //quando a rota raiz '/' é acessada, chama o metodo 'index' do controller 'news'
        //passa 'application'. 'req' (requisicao) e 'res' (resposta) para o metodo 'index'
        application.src.controllers.news.index(application, req, res)

    });
}