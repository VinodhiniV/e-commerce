
const app = require('./src/application-services/application').app;

const start = async () => {
    app.listen(4000, () => {
        console.log('Listening on 4000');
      });
}

start();