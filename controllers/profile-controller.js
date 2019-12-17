var con = require("../config/config");

module.exports.profile = function(req, res) {

  console.log("test" + "nameworking");

  
  var sqls = "SELECT * FROM accounts";

  
    con.query(sqls, [id,username, first_name], function(err, result) {
      if (err) throw err;
      
      res.render("example", {
        id:result,
        username: result,
        name: result,
        name: req.body.username
      });
    });

};
