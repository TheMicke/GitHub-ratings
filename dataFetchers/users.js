const fetch = require('node-fetch');
const fs = require('fs');
const baseApiUrl = 'https://api.github.com/';

/******************************
 **       Node FS stuff       **
 ******************************/
const createFile = inputData => {
    const rawData = {
        userId: inputData.id,
        username: inputData.login,
        likes: 0,
    };

    let data = JSON.stringify(rawData, null, 2);

    if (!fs.existsSync('likes/' + inputData.id + '.json')) {
        fs.writeFile('likes/' + inputData.id + '.json', data, function(err) {
            if (err) throw err;
            console.log('File is created successfully.');
        });
    } else {
        console.log('File likes/' + inputData.id + '.json already exists');
    }
};

/******************************
 **       Get user data       **
 ******************************/
const getSingleUser = async username => {
    let data;
    data = await fetch(baseApiUrl + 'users/' + username).then(res => (data = res.json()));
    await createFile(data);
    return data;
};

const getLikes = userId => {
    fs.readFile('likes/' + userId +'.json', function read(err, data) {
        if (err) {
            throw err;
        }
        let content = JSON.parse(data);

        console.log(content.likes);
    });
};

const addLike = () => {};

module.exports = { getSingleUser, getLikes, addLike };
