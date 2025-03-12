var fs = require('fs');
function news() {};

news.prototype.getLastNews = function(callback) {

  fs.readFile('./data/noticias.json', 'utf8', function(error, result) {

    var data = [];

    if (!error) {
      var results = JSON.parse(result);

    if (results.noticias.length > 4) {
        var contNoticia = 4;
    }else {
        var contNoticia = (results.noticias.length - 1);
    }
    
    results.noticias.forEach(function(noticia) {
        if (contNoticia >=  0) {
          data[contNoticia] = noticia;
	        contNoticia--;
        }
      });
    }callback (error, data);	   
  });
};

module.exports = function(){
  return news;
};
