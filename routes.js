const { getSingleUser, getLikes, addLike } = require('./dataFetchers/users');

module.exports = function(app) {
    app.get('/api/', (req, res) => {
        res.send('Hello World!');
    });

    //************//
    //    Users   //
    //************//
    app.get('/api/users/:username', async (req, res) => {
        const userData = await getSingleUser(req.params.username);


        const data = {
            user: userData,
            likes: getLikes(userData.id),
        };
        
        res.send(data);
    });

    app.post('/api/users/:username', (req, res) => {
        console.log('likey likey', req.params);
        addLike(req.params.username);
    });
};
