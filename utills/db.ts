import oracledb from 'oracledb';

// Oracle DB connection configuration
const dbConfig = {
  user: 'your_username',
  password: 'your_password',
  connectString: 'localhost/orclpdb1', // or "host:port/service_name"
};

async function runQuery() {
  let connection;

  try {
    // Create a connection to the database
    connection = await oracledb.getConnection(dbConfig);
    console.log('Successfully connected to Oracle Database');

    // SQL command to execute
    const result = await connection.execute(
      `SELECT * FROM employees WHERE ROWNUM <= 5`, // example query
      [], // bind parameters
      { outFormat: oracledb.OUT_FORMAT_OBJECT } // returns rows as JS objects
    );

    console.log('Query Result:', result.rows);
  } catch (err) {
    console.error('Error occurred:', err);
  } finally {
    // Always close the connection
    if (connection) {
      try {
        await connection.close();
        console.log('Connection closed');
      } catch (err) {
        console.error('Error closing connection:', err);
      }
    }
  }
}

runQuery();
