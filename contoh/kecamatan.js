const wilayah = require('..');
const { QueryTypes } = require('../lib/Enums');

// Cari =  kecamatan: 'Maladum Mes', provinsi: 'PAPUA BARAT', kota: 'KOTA SORONG'

// kecamatan
const kecamatan = wilayah('malad', QueryTypes.KECAMATAN);

kecamatan.then(value => {
	console.log('Data kecamatan[MIN]:', value);
});

// Dengan di dalam region
const kecamatanIn1 = wilayah('malad', QueryTypes.KECAMATAN, {
	provinsi: 'papua'
});

kecamatanIn1.then(value => {
	console.log('Data kecamatan[in_1]:', value);
});

const kecamatanIn2 = wilayah('malad', QueryTypes.KECAMATAN, {
	provinsi: 'papua',
	kota: 'sorong'
});

kecamatanIn2.then(value => {
	console.log('Data kecamatan[in_2]:', value);
});
