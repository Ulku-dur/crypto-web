const axios = require('axios');
const token = require('../middleware/tokenSalt');

const {domain, subdomain, id} = require('./constant');
const GET_RPCNODE_URL = `${domain}/${subdomain}/${id}`;
const getPassport = () => {
}

module.exports = getPassport;
