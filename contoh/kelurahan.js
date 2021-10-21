const wilayah = require('..');
const { QueryTypes } = require('../lib/Enums');
// Kecamatan
const kelurahan = wilayah('malamas', QueryTypes.KELURAHAN);

kelurahan.then(value => {
	console.log('Data kelurahan[MIN]:', value);
});

// Dengan di dalam region
const kelurahanIn1 = wilayah('malamas', QueryTypes.KELURAHAN, {
	provinsi: 'papua'
});

kelurahanIn1.then(value => {
	console.log('Data kelurahan[in_1]:', value);
});

const kelurahanIn2 = wilayah('malamas', QueryTypes.KELURAHAN, {
	provinsi: 'papua',
	kota: 'sorong'
});

kelurahanIn2.then(value => {
	console.log('Data kelurahan[in_2]:', value);
});

const kelurahanIn3 = wilayah('malamas', QueryTypes.KELURAHAN, {
	provinsi: 'papua',
	kota: 'sorong',
	kecamatan: 'segun'
});

kelurahanIn3.then(value => {
	console.log('Data kelurahan[in_3]:', value);
});
