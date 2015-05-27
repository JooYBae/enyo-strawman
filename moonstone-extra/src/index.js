var
	strawman = require('../../src');

var
	kind = require('enyo/kind');

var
	oldSampler = require('../../src/moonstone-samples/lib/All');

var
	newSampler = kind({
		kind: oldSampler
	});

newSampler.samples = {
	ButtonSample: require('./ButtonAnimatedSample.js')
};

strawman.samples['MoonstoneExtra'] = newSampler;

module.exports = strawman;

