require('dotenv-safe').load();
const express = require('express');
const app = express();         
const bodyParser = require('body-parser');
const port = 3000;
const sql = require('mssql');
const connStr = process.env.sqlConnection;

sql.connect(connStr)
   .then(conn => global.conn = conn)
   .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = express.Router();
router.get('/', (req, res) => res.json({ message: 'Working' }));
app.use('/', router);

app.listen(port);
	
function execSQLQuery(sqlQry, res){
    global.conn.request()
               .query(sqlQry)
               .then(result => res.json(result.recordset))
               .catch(err => res.json(err));
}

router.get('/usuario/login/:param1/:param2', (req, res) =>{
    var querySql = `SELECT * FROM TBL_USUARIO WHERE EMAIL = \'${req.params.param1}'
                    AND SENHA = \'${req.params.param2}'`
    execSQLQuery(querySql, res);
})

router.get('/usuario/maquina/:idUsuario?', (req, res) =>{
    let codUsuario = parseInt(req.params.idUsuario);
    var querySql = `SELECT * FROM TBL_MAQUINA WHERE COD_USUARIO = \'${codUsuario}'`
    execSQLQuery(querySql, res);
})

router.get('/usuario/maquina/leitura/:idMaquina?', (req, res) =>{
    let codMaquina = parseInt(req.params.idMaquina);
    var querySql = `SELECT TOP 1 * FROM TBL_LEITURA WHERE COD_MAQUINA = \'${codMaquina}' ORDER BY COD_LEITURA DESC`
    execSQLQuery(querySql, res);
})
