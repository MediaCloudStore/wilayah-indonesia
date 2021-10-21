const select = require('./select');

module.exports = (query, type, inRegion) => {
	console.log(query, type, inRegion)
	const result = select[type](query, inRegion);
	return result ? result : select.kelurahan(query, inRegion)
};
