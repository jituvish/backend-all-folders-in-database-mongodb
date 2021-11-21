var routes = require("express").Router();

routes.use("/api/dropdown", require("../routes/dropdown"));
// routes.use("/api/auth", require("../routes/Auth"));
// routes.use("/api/admin/login", require("../routes/AdminLogin"));

module.exports = routes;


