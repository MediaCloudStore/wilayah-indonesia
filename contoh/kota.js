const wilayah = require('..');
const { QueryTypes } = require('../lib/Enums');
// Cari = kota: 'KOTA BANDA ACEH', provinsi: 'ACEH'

// kota atau kabupaten
const kota = wilayah('AC', QueryTypes.KOTA);

kota.then(value => {
	console.log('Data Kota/Kabupaten:', value);
});

// Dengan di dalam region
const kotaIn = wilayah('AC', QueryTypes.KOTA, {
	provinsi: 'aceh'
});

kotaIn.then(value => {
	console.log('Data Kota/Kabupaten[in]:', value);
});
