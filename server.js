const app = require('./app').app;
const port = 3001;
const initRoutes = require('./routes');

initRoutes(app);

app.listen(port, () => console.log(`Server started and listening on port ${port}!`));
