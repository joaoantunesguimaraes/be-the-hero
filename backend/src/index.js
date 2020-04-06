const express = require('express');
const cors = require('./cors');
const routes = require('./routes');


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rota / Recursos
 */


/**
 * Métodos HTTP
 * 
 * GET: Buscar / listar uma informação do Back-end
 * POST: Cria uma informação do Back-end
 * PUT: Alterar uma informação do Back-end
 * DELETE: Apagar uma informação do Back-end
 * 
 */

 /**
app.get('/', (request,response) => {
    return response.json({
        evento: 'Semana Omnistack',
        aluno: 'diego Fernandes'
    });
});
**/


/** Tipos de parametros
 * 
 * Query Parms: Parâmetros nomeanos na rota após o simbolo ? (filtros, paginação)
 * 
 * Route params : Paâmetros para identificar recursos
 * 
 * Request Body: Corpo da Requisição, utilizado para criar ou alterar recursos
 * 
 */



 /**
  * SQL:
  * 
  * 
  */


/**
 * 
 * Driver:  SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 * 
 * 
 */





app.listen(3333);


