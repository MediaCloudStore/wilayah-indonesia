const fs = require('fs');
const path = require('path');
const { QueryTypes } = require('../lib/Enums');
const query = require('./fuseQuery');

module.exports = (searchQuery, inRegion) => {
	return new Promise((resolve, reject) => {
		fs.readFile(path.join(__dirname, `../data/${QueryTypes.KOTA}.json`), (err, data) => {
			if (err) { return reject(err); }
			const dataJSON = JSON.parse(data);
			if (inRegion && inRegion.provinsi) {
				const dataConvertProvinsi = query(dataJSON, QueryTypes.PROVINSI, inRegion.provinsi)
				const dataConvertKota = query(dataConvertProvinsi, QueryTypes.KOTA, searchQuery)
				return resolve(dataConvertKota);
			}
			const dataConvertKota = query(dataJSON, QueryTypes.KOTA, searchQuery)
			return resolve(dataConvertKota);
		});
	});
};
