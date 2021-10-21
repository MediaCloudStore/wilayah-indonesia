const fs = require('fs');
const path = require('path');
const query = require('./fuseQuery');
const { QueryTypes } = require('../lib/Enums');

module.exports = (searchQuery, inRegion) => {
	return new Promise((resolve, reject) => {
		fs.readFile(path.join(__dirname, `../data/${QueryTypes.KELURAHAN}.json`), (err, data) => {
			if (err) { reject(err); }
			let dataJSON = JSON.parse(data);
			if (inRegion) {
				let passedData = dataJSON
				if (inRegion.provinsi) {
					passedData = query(passedData, QueryTypes.PROVINSI, inRegion.provinsi)
				}
				if (inRegion.kota) {
					passedData = query(passedData, QueryTypes.KOTA, inRegion.kota)
				}
				if (inRegion.kecamatan) {
					passedData = query(passedData, QueryTypes.KECAMATAN, inRegion.kecamatan)
				}
				const dataConvertKelurahan = query(passedData, QueryTypes.KELURAHAN, searchQuery);
				resolve(dataConvertKelurahan);
			} else {
				const dataConvert = query(dataJSON, QueryTypes.KELURAHAN, searchQuery)
				resolve(dataConvert);
			}
		});
	});
};;
