const mysql = require('mysql');

const connection = mysql.createConnection({

    host: 'localHost',
    port: '3360',
    user: 'root',
    password: 'ssTm@1722',
    database: 'playlist_db'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("you are connected at id " + connection.threadId);
    querySongs();
    queryPianoSongs();
  });

  function querySongs() {
    connection.query("SELECT * FROM songs", function(err, res) {
      
      for (var i = 0; i < res.length; i++) {
        console.log(res[i].id, res[i].title, res[i].artist, res[i].genre);
      }
      if (err) throw err;
    });
  };

  function queryPianoSongs() {
    var query = connection.query("SELECT * FROM songs WHERE genre=", ["Piano"], function(err, res) {
      
      for (var i = 0; i < res.length; i++) {
        console.log(res[i].id, res[i].title, res[i].artist, res[i].genre);
      }
      if (err) throw err;
    })
};

    console.log(query.sql);