var express = require('express');
var router = express.Router();
const { Pool, Client } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: '201901037_db',
  password: 'admin',
  port: 5432,
})

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: '201901037_db',
  password: 'admin',
  port: 5432,
})
/* GET users listing. */
router.get('/', function(req, res, next) {
  
  pool.query('SELECT * from tms_db.tour_package  natural left join tms_db.discount ', (err, ans) => {
    res.send(ans);
  })
  
});

router.get('/:id', function(req, res, next) {
  
  pool.query('SELECT * from tms_db.tour_destination as a  natural join  tms_db.destination natural join  tms_db.tour_package natural join  tms_db.discount where a.t_id='+req.params.id, (err, ans) => {
    res.send(ans);
  })
  
});

router.post('/customer', function(req, res, next) {
  const value=[req.body.fname,req.body.mname,req.body.lname,req.body.email,req.body.street,req.body.safe,req.body.c_pin,req.body.city,req.body.c_state];
  pool.query('SELECT tms_db.insert_customer($1,$2,$3,$4,$5,$6,$7,$8,$9)',value, (err, ans) => {
    console.log(err, ans)
    res.send(ans);
  })
  
});


router.post('/employee', function(req, res, next) {
  const value=[req.body.fname,req.body.mname,req.body.lname,req.body.pin,req.body.password,req.body.email,req.body.role,req.body.city,req.body.state];
  pool.query('SELECT tms_db.insert_employee($1,$2,$3,$4,$5,$6,$7,$8,$9)',value, (err, ans) => {
    console.log(err, ans)
    res.send(ans);
  })
  
});

router.post('/query', function(req, res, next) {
  pool.query(req.body.query, (err, ans) => {
    console.log(err, ans)
    if(err!== undefined)
    {
      console.log(err.error);
      res.send(err);
    }
    else
    {
      if(Array.isArray(ans)==false)
        return res.send(ans);
      else
        res.send(ans[ans.length-1]);
    }
    
  })
  
});

module.exports = router;
