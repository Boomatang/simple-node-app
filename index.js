'strict';

const Hapi = require('hapi');

const server = Hapi.server({
  port: process.env.PORT || 3000,
});

async function init() {
  server.route({
    method: 'GET', 
    path: '/', 
    handler: function() {
      return 'Hello  World!';
    }
  });
  await server.start();
  console.log(`Server running at: ${server.info.uri}`)
}

process.on('unhandledRejection', err => {
  console.log(err);
  process.exit(1);
});

init();

