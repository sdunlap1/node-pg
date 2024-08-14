/** Server startup for BizTime. */


const app = require("./app");


app.listen(3000, '10.0.4.23', function () {
  console.log("Listening on 10.0.4.23:3000");
});
