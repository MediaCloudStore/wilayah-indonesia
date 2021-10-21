const Fuse = require('fuse.js');

module.exports = (data, type, searchQuery) => {
	const fuseData = new Fuse(data, {
		threshold: 0.2,
		keys: [type]
	});
	const result = fuseData.search(searchQuery);
	const dataConvert = [];
	result.forEach(element => {
		dataConvert.push(element.item);
	});
	return dataConvert;
};