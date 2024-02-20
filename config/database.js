const {Pool} = require('pg')

let dbConfig = {
    connectionString: process.env.DATABASE_URL
}
const pool = new Pool(dbConfig)

//For transaction, explicitly acquired a client by
//  const client = await pool.connect()
//  await client.query('SELECT NOW()')
//  client.release()
//Otherwise let the pool handle the acquiring and 
//releasing internally

//callback example
exports.getUsers = (req, res) => {
    pool.query('SELECT * from users limit 3', (err, results) => {
        if (err) throw err;
        for (let row of results.rows) {
            console.log(JSON.stringify(row));
        }
        res.status(200).json(results.rows);
    })
}

//async await example
exports.getUserById = async(req, res) => {
    const { id } = req.params;
    //Query config object
    const sqlConfig = {
        text: 'SELECT * from users where id = $1',
        values: [id],
    }
    const results = await pool.query(sqlConfig);
    if (results.rowCount == 0) {
        res.status(200).json({}); 
    }else {
        for (let row of results.rows) {
            console.log(JSON.stringify(row));
        }
        res.status(200).json(results.rows);
    }
    return {'id':results.rows[0].id, 'username' : results.rows[0].username}   
}