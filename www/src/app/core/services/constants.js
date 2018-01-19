'use strict';

export default function(app) {
  app.constant('ROUTE_ERRORS', {
    auth: 'Authorization has been denied.'
  });

  app.value('Tlps', [
    {
      key: 'WHITE',
      value: 0
    },
    {
      key: 'GREEN',
      value: 1
    },
    {
      key: 'AMBER',
      value: 2
    },
    {
      key: 'RED',
      value: 3
    }
  ]);
}
