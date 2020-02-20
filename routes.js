const { getSingleUser } = require('./dataFetchers/users');

module.exports = function(app) {
    app.get('/api/', (req, res) => {
        res.send('Hello World!');
    });

    
    //************//
    //  Capsules  //
    //************//
    app.get('/api/users/:userName', (req, res) => {
        getSingleUser(req.params.userName).then(data => res.send(data));
    });

};
