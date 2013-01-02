var utils = require('../lib/utils');

var janvier1 = function(year){
	//1 january
	return new Date(year,0,1);
};

var mai1 = function(year){
	//1 may
	return new Date(year,4,1);
};

var mai8 = function(year){
	//8 may
	return new Date(year,4,1);
};

var juillet14 = function(year){
	//14 jully
	return new Date(year,6,14);
};

var novembre11 = function(year){
	//11 november
	return new Date(year,10,11);
};

var lundiPaque = function(year){
	var result = utils.easter(year);
	//One day after easter
	result.setDate(result.getDate()+1);
	return result;
};

var ascension = function(year){
	var result = utils.easter(year);
	//39 days after easter
	result.setDate(result.getDate()+39);
	return result;
};

var pentecote = function(year){
	var result = utils.easter(year);
	//50 days after easter
	result.setDate(result.getDate()+50);
	return result;
};

var assomption = function(year){
	//15 august
	return new Date(year,7,15);
}

var toussaint = function(year){
	//1 november
	return new Date(year,10,1);
};

var noel = function(year){
	//25 december
	return new Date(year,11,25);
};

exports.janvier1 = janvier1;
exports.mai1 = mai1;
exports.mai8 = mai8;
exports.juillet14 = juillet14;
exports.novembre11 = novembre11;
exports.lundiPaque = lundiPaque;
exports.ascension = ascension;
exports.pentecote = pentecote;
exports.assomption = assomption;
exports.toussaint = toussaint;
exports.noel = noel;


//TODO next