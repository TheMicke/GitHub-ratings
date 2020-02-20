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
        const likes = await getLikes(userData.id);
        
        const data = {
            user: userData,
            likes: likes,
        };

        res.send(data);
    });

    app.post('/api/:userId', (req, res) => {
        addLike(req.params.userId);
        res.sendStatus(200);
    });
};
