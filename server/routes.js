const express = require('express');
const router = express.Router();
const knexConfig = require('../knexfile.js')[process.env.NODE_ENV];
const knex = require('knex')(knexConfig);
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/shows';

const getShows = () => knex('shows').select();
const query = {
  delete: (id) => getShows().where('id', parseInt(id)).del(),
  get: (id) => (!id ? getShows() : getShows().where('id', parseInt(id)).first()),
  post: (body) => knex('shows').insert(body, 'id'),
  update: (id, changes) => getShows().where('id', parseInt(id)).update(changes),
}

router.get('/shows', (req, res, next) => {
  query.get().then(shows => {
    res.status(200).json(shows);
  })
  .catch(error => {
    next(error);
  });
});

router.get('/shows/:id', (req, res, next) => {
  query.get(req.params.id).then(show => {
    res.status(200).json(show);
  })
  .catch(error => {
    next(error);
  });
});

router.post('/shows', (req, res, next) => {
  query.post(req.body).then(id => query.get(id))
    .then(show => {
      res.status(200).json(show);
    })
    .catch(error => {
      next(error);
    });
});

router.put('/shows/:id', (req, res, next) => {
  if (req.body.hasOwnProperty('id')) {
    return res.status(422).json({
      error: 'invalid id field',
    });
  }
  query.update(req.params.id, req.body).then(id => query.get(id))
    .then(show => {
      res.status(200).json(show);
    })
    .catch(error => {
      next(error);
    });
});

router.delete('/shows/:id', (req, res, next) => {
  query.get(req.params.id).then(show => {
    query.delete(req.params.id).then(show => {
      res.status(200).json(show);
    })
    .catch(error => {
      next(error);
    });
  })
  .catch(error => {
    next(error);
  });
});

module.exports = router;