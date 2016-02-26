var pg = require('pg');
var connectionString = 'postgres://localhost:5432/cities';
var client = new pg.Client(connectionString);
client.connect();

// client.query("SELECT * FROM cities_data", function(err, result) {
//     console.log("Query 1: ", result.rows);
// });

// // Create a query to add a new entry to city to your database
// client.query("INSERT INTO cities_data (name, country, rating) VALUES ('Auckland', 'New Zealand', 4);", function(err, result) {
//     console.log("Insert Auckland: ", result);
// });

// // Create a query to get all of the entries from your database, console.log the results
// client.query("SELECT * FROM cities_data", function(err, result) {
//     console.log("Query 2: ", result.rows);
// });

// // Create a query to just find one of your entries by id
// client.query("SELECT * FROM cities_data WHERE name = 'Tekamah'", function(err, result) {
//     console.log("Query 3: ", result.rows);
// });

// // Create a query to update one of your cities with new information
// client.query("UPDATE cities_data SET (name, country) = ('Venice', 'Italy') WHERE id = 3", function(err, result) {
//     if (err) {
//         console.log(err);
//     }
//     console.log("Update");
// });

// client.query("SELECT * FROM cities_data", function(err, result) {
//     console.log("Query 4: ", result.rows);
// });

// // Create a query to delete one of your cities

// client.query("DELETE FROM cities_data WHERE name = 'Tekamah'", function(err, result) {
//     if (err) {
//         console.log(err);
//     }
//     console.log("Delete");
// });

// client.query("SELECT * FROM cities_data", function(err, result) {
//     console.log("Query 5: ", result.rows);
//     client.end();
// });

// =============== CONNECTION POOL ============


pg.connect(connectionString, function(err, client, done) {
    if (err) {
        done();
        console.log("Error fetching Client : ", err);
    }
    var query1 = client.query('SELECT * FROM cities_data');
    var result1 = "Connection pool query 1: ";
    query1.on('row', function(row) {
        result1 += JSON.stringify(row)+'\n';
    });
    query1.on('end', function() {
        console.log(result1);
        done();
    });

    var query2 = client.query("SELECT * FROM cities_data WHERE name = 'Denver'");
    var result2 = "Connection pool query 2: ";
    query2.on('row', function(row) {
        result2 += JSON.stringify(row)+'\n';
    });
    query2.on('end', function() {
        console.log(result2);
        done();
    });

    var query3 = client.query("INSERT INTO cities_data (name, country, rating) VALUES ('Auckland', 'New Zealand', 4)");
    query3.on('end', function() {
        console.log("inserted");
        done();
    });

    var query4 = client.query('SELECT * FROM cities_data');
    var result4 = "Connection pool query 4: ";
    query4.on('row', function(row) {
        result4 += JSON.stringify(row)+'\n';
    });
    query4.on('end', function() {
        console.log(result4);
        done();
    });

    var query5 = client.query("UPDATE cities_data SET (name, country) = ('Venice', 'Italy')  WHERE id = 3");
    query5.on('end', function() {
        console.log("Updated!");
        done();
    });

    var query5 = client.query('SELECT * FROM cities_data');
    var result5 = "Connection pool query 5: ";
    query5.on('row', function(row) {
        result5 += JSON.stringify(row)+'\n';
    });
    query5.on('end', function() {
        console.log(result5);
        done();
    });

    var query6 = client.query("DELETE FROM cities_data WHERE name = 'Tekamah'");
    query6.on('end', function() {
        console.log("Deleted!");
        done();
    });

    var query7 = client.query('SELECT * FROM cities_data');
    var result7 = "Connection pool query 7: ";
    query7.on('row', function(row) {
        result7 += JSON.stringify(row)+'\n';
    });
    query7.on('end', function() {
        console.log(result7);
        done();
    });

    pg.end();
});








