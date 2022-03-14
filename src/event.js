const express = require('express');

function createRouter(db) {
  const router = express.Router();
  const product_id = '';
/** NOTE: 
 * By using router.post this route will only activate when the server receives an HTTP POST request
 */
  router.post('/event', (req, res, next) => {
    db.query(
      'INSERT INTO product (id, name) VALUES (?,?)',
      [product_id, req.body.name],
    //   [owner, req.body.name, req.body.description, new Date(req.body.date)],
      (error) => {
        if (error) {
          console.error(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

  router.get('/event', function (req, res, next) {
    db.query(
      'SELECT * FROM product WHERE id=? LIMIT 10 OFFSET ?',
      [product_id, 10*(req.params.page || 0)],
      (error, results) => { 
        if (error) {
          console.log(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json(results);
        }
      }
    );
  });

  router.delete('/event/:id', function (req, res, next) {
    db.query(
      'DELETE FROM product WHERE id=?',
      [req.params.id],
      (error) => {
        if (error) {
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

  return router;
}

module.exports = createRouter;