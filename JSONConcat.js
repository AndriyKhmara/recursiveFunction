var fs = require('fs');

function parse(path)
{
	var content = fs.readdirSync(path);
	var result = {};
	for (var i = 0; i < content.length; ++i) {
		var item = fs.statSync(path + "\\" + content[i]);
		if (item.isDirectory()) {
			result[content[i]] = parse(path + "\\" + content[i]);
		} else {
			var keys = content[i].split('.');
			result[keys[0]] = JSON.parse(fs.readFileSync(path + "\\" + content[i]));
		}	
	}
	return result;
};

module.exports = parse;