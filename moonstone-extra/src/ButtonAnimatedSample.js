var
	kind = require('enyo/kind'),
	Control = require('enyo/Control');

var
	FittableRows = require('layout/FittableRows');

var
	Scroller = require('moonstone/Scroller'),
	Divider = require('moonstone/Divider'),
	Icon = require('moonstone/Icon'),
	BodyText = require('moonstone/BodyText');

var
	ButtonAnimated = require('moonstone-extra/ButtonAnimated');

module.exports = kind({
	name: 'moon.sample.ButtonAnimatedSample',
	kind: FittableRows,
	classes: 'moon enyo-unselectable enyo-fit moon-button-sample',
	components: [
		{kind: Scroller, fit: true, components: [
			{kind: Control, classes: 'moon-button-sample-wrapper', components: [
				{kind: Divider, content: 'Animated Buttons:'},
				{name: 'animButton', kind: ButtonAnimated, minWidth: false, content: 'Animated!', ontap: 'buttonTapped'},
				{name: 'animButton2', kind: ButtonAnimated, minWidth: false, width: 516, content: 'Animated!', ontap: 'buttonTapped', components: [
					{kind: Icon, icon: 'play'},
					{name: 'animation', content: 'animation'}
				]}
			]}
		]},
		{kind: Divider, content: 'Result'},
		{kind: BodyText, name: 'result', allowHtml: true, content: 'No button pressed yet.'}
	],
	buttonTapped: function(inSender, inEvent) {
		this.$.result.setContent('&quot;' + inSender.name + '&quot; pressed.');
	}
});