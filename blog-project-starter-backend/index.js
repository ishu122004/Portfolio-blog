require('dotenv').config();

const app = require('./server');

app.listen(process.env.PORT || 5000, () => {
  console.log('Server running on port 5000');
});