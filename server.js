require('babel-register');

const app = require('./src/app').app,
      PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('ISAL listening on port', PORT);
});
