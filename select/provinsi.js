const fs = require('fs');
const path = require('path');
const query = require('./fuseQuery');
const { QueryTypes } = require("../lib/Enums");

module.exports = searchQuery => {
	return new Promise((resolve, reject) => {
		fs.readFile(path.join(__dirname, `../data/${QueryTypes.PROVINSI}.json`), (err, data) => {
			if (err) { reject(err); }
			const dataConvert = query(data, QueryTypes.PROVINSI, searchQuery);
			resolve(dataConvert);
		});
	});
};
