const wilayah = require('..');
const { QueryTypes } = require('../lib/Enums');

// Cari = provinsi: 'SULAWESI BARAT'

const provinsi = wilayah('sulawesi', QueryTypes.PROVINSI);

provinsi.then(value => {
	console.log('Data Provinsi:', value);
});
