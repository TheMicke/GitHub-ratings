const fetch = require('node-fetch');
const baseApiUrl ='https://api.github.com/';

const getSingleUser = async (userName) => {
    let data;
    await fetch(baseApiUrl + 'users/' + userName).then(res => (data = res.json()));
    return data;
};

module.exports = { getSingleUser };
