var path = require("path");
module.exports = function home(app) {
	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "survey.html"));
	});

	app.use(function(req, res) {
		res.sendFile(path.join(__dirname, "home.html"));
	});
};