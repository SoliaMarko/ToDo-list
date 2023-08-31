const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "F427wO9GPfaWPoXD",
  host: "localhost",
  port: 5432,
  database: "todoDB",
});

module.exports = pool;
