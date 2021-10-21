const fs = require('fs');
const path = require('path');
const Fuse = require('fuse.js');
const { QueryTypes } = require('../lib/Enums');
const query = require("./fuseQuery");

module.exports = (searchQuery, inRegion) => {
	return new Promise((resolve, reject) => {
		fs.readFile(path.join(__dirname, `../data/${QueryTypes.KECAMATAN}.json`), (err, data) => {
			if (err) { reject(err); }
			const dataJSON = JSON.parse(data);

			if (inRegion) {
				let passedData = dataJSON
				if (inRegion.provinsi) {
					passedData = query(passedData, QueryTypes.PROVINSI, inRegion.provinsi)
				}
				if (inRegion.kota) {
					passedData = query(passedData, QueryTypes.KOTA, inRegion.kota)
				}
				const dataConvertKecamatan = query(passedData, QueryTypes.KECAMATAN, searchQuery)
				resolve(dataConvertKecamatan);
			} else {
				const dataConvert = query(dataJSON, QueryTypes.KECAMATAN, searchQuery)
				resolve(dataConvert);
			}
		});
	});
};