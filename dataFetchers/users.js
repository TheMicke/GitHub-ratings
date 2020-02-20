const fetch = require('node-fetch');
const fs = require('fs');
const baseApiUrl = 'https://api.github.com/';

/*******************************
 **       Node FS stuff       **
 ******************************/

// Check if likes folder exist, if not create it.
if (!fs.existsSync('likes/')) {
    fs.mkdirSync('likes/');
}

// Create JSON file for each visited user
const createFile = inputData => {
    const rawData = {
        userId: inputData.id,
        username: inputData.login,
        likes: 0,
    };

    let data = JSON.stringify(rawData, null, 4);

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

// Fetch single user from GitHub
const getSingleUser = async username => {
    let data;
    data = await fetch(baseApiUrl + 'users/' + username).then(res => (data = res.json()));
    await createFile(data);
    return data;
};

// Local JSON file reader
const readFile = userId => {
    return new Promise(function(resolve, reject) {
        fs.readFile('likes/' + userId + '.json', function read(err, data) {
            if (err) {
                reject(err);
            } else {
                const jsonData = JSON.parse(data);
                resolve(jsonData);
            }
        });
    });
};

// Get likes from local JSON-file
const getLikes = userId => {
    return new Promise(function(resolve, reject) {
        fs.readFile('likes/' + userId + '.json', function read(err, data) {
            if (err) {
                reject(err);
            } else {
                const jsonData = JSON.parse(data);
                resolve(jsonData.likes);
            }
        });
    });
};




const addLike = async userId => {
    const fileContent = await readFile(userId);
    fileContent.likes += 1;
    console.log('Added like to ' + fileContent.username);

    let data = JSON.stringify(fileContent, null, 4);

    if (fs.existsSync('likes/' + userId + '.json')) {
        await fs.writeFile('likes/' + userId + '.json', data, function(err) {
            if (err) throw err;
            console.log('File updated: likes/' + userId + '.json');
        });
    } else {
        console.log('File likes/' + userId + '.json already exists');
    }

    return true;
};

module.exports = { getSingleUser, getLikes, addLike };
