'use strict';

const response = require('./commons/response');

// eslint-disable-next-line strict
module.exports = (app) => {
  let {Continent} = app.models;

  app.post('/api/continent', (req, res) => {
    let {name, as_known_as, total_area, population, description} = req.body;

    if (name === null) {
      let error_response = response.error('Name cannot be null', null);

      res.json(error_response);
    }

    Continent.create(req.body).then((data) => {
      let created_response = response.success('Created', data);

      res.json(created_response);
    })
      .catch(err => {
        let error_response = response.error("Error", err);

        res.json(error_response);
      });
  });
};
