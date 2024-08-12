const {Pool} = require('pg');
const connectionString = process.env.URI;

module.exports = new Pool({
    connectionString,
});