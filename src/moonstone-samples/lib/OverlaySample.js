var
	kind = require('enyo/kind'),
	Img = require('enyo/Image'),
	Divider = require('moonstone/Divider'),
	Icon = require('moonstone/Icon'),
	IconButton = require('moonstone/IconButton'),
	Marquee = require('moonstone/Marquee'),
	GridListImageItem = require('moonstone/GridListImageItem'),
	Scroller = require('moonstone/Scroller'),
	Button = require('moonstone/Button'),
	Input = require('moonstone/Input'),
	InputDecorator = require('moonstone/InputDecorator'),
	Overlay = require('moonstone/Overlay'),
	FittableRows = require('layout/FittableRows');

function img (w, h, text, color) {
	text = text || 'Image';
	color = color || Math.floor(Math.random()*0x1000000).toString(16);
	return 'http://placehold.it/' + w + 'x' + h + '/' + color + '/ffffff&text=' + text;
}

module.exports = kind({
	name: 'moon.sample.OverlaySupportSample',
	kind: FittableRows,
	classes: 'moon enyo-fit samples-moon-overlay moon-overlay-enabled',
	components: [
		{kind: Scroller, fit: true, components: [
			{kind: Divider, content: 'Action Overlay'},
			{kind: GridListImageItem, source: img(300, 300), caption: 'position-bottom', ontap: 'itemTapped',
				overlayShowing: 'spotlight', overlayPosition: 'bottom', overlayComponents: [
					{kind: Icon, icon: 'play', ontap: 'badgeTapped'}
				]
			},
			{kind: GridListImageItem, source: img(300, 300), caption: 'position-top', ontap: 'itemTapped',
				overlayShowing: 'spotlight', overlayPosition: 'top', overlayComponents: [
					{kind: Icon, icon: 'play', ontap: 'badgeTapped'}
				]
			},
			{kind: GridListImageItem, source: img(300, 300), caption: 'position-bottom', subCaption: 'align-right', ontap: 'itemTapped',
				overlayShowing: 'spotlight', overlayPosition: 'bottom', overlayAlign: 'right', overlayComponents: [
					{kind: Icon, icon: 'play', ontap: 'badgeTapped'}
				]
			},
			{kind: GridListImageItem, source: img(300, 300), caption: 'position-top', subCaption: 'align-right', ontap: 'itemTapped',
				overlayShowing: 'spotlight', overlayPosition: 'top', overlayAlign: 'right', overlayComponents: [
					{kind: Icon, icon: 'play', ontap: 'badgeTapped'}
				]
			},
			{kind: GridListImageItem, source: img(300, 300), caption: 'Multiple Icons', ontap: 'itemTapped',
				overlayShowing: 'spotlight', overlayPosition: 'bottom', overlayAlign: 'right', overlayComponents: [
					{kind: Icon, icon: 'flag', ontap: 'badgeTapped'},
					{kind: Icon, icon: 'star', ontap: 'badgeTapped'},
					{kind: Icon, icon: 'play', ontap: 'badgeTapped'}
				]
			},
			{kind: GridListImageItem, source: img(300, 300), caption: 'Icon Button', subCaption: 'Transparent BG', ontap: 'itemTapped',
				overlayShowing: 'spotlight', overlayPosition: 'bottom', overlayAlign: 'right', overlayTransparent: true, overlayComponents: [
					{kind: Icon, icon: 'play', classes: 'moon-icon-button', style: 'margin: 0; background-color: rgba(0,0,0,0.5)', ontap: 'badgeTapped'}
				]
			},
			{kind: GridListImageItem, source: img(300, 300), caption: 'Centered Icon Button', ontap: 'itemTapped',
				overlayShowing: 'spotlight', overlayPosition: 'centered', overlayComponents: [
					{kind: Icon, icon: 'play', small: false, classes: 'moon-icon-button', style: 'margin: 12px;background-color: rgba(0,0,0,0.5)', ontap: 'badgeTapped'}
				]
			},


			{kind: Divider, content: 'Selection Overlay'},
			// enyo/DataRepeater adds the `selection-enabled` class when selection is enabled
			// (appropriately enough). Simulating the same here.
			{classes: 'selection-enabled', components: [
				{kind: GridListImageItem, source: img(300, 300), caption: 'Unselected', subCaption: 'Scrimmed', ontap: 'toggleSelected',
					mixins: [Overlay.Selection], overlayTransparent: false
				},
				{kind: GridListImageItem, source: img(300, 300), caption: 'Unselected', subCaption: 'Transparent', ontap: 'toggleSelected',
					mixins: [Overlay.Selection]
				},
				{kind: GridListImageItem, selected: true, source: img(300, 300), caption: 'Selected', subCaption: 'Scrimmed', ontap: 'toggleSelected',
					mixins: [Overlay.Selection], overlayTransparent: false
				},
				{kind: GridListImageItem, selected: true, source: img(300, 300), caption: 'Selected', subCaption: 'Transparent', ontap: 'toggleSelected',
					mixins: [Overlay.Selection]
				}
			]},


			{kind: Divider, content: 'Text Overlay'},
			{kind: GridListImageItem, source: 'http://lorempixel.com/300/300/technics', caption: 'Text Only', ontap: 'itemTapped',
				mixins: [Overlay.Text], overlayShowing: 'spotlight', overlayTitle: 'Technics', overlaySubtitle: '12'
			},
			{kind: GridListImageItem, source: 'http://lorempixel.com/300/300/city', caption: 'Marquee Title', ontap: 'itemTapped',
				mixins: [Overlay.Marquee], overlayShowing: 'spotlight', overlayTitle: 'Some Important Information To Share', overlaySubtitle: '15'
			},
			{kind: GridListImageItem, source: 'http://lorempixel.com/300/300/abstract', caption: 'Marquee Both', subCaption: 'All 3 will marquee together',	ontap: 'itemTapped',
				mixins: [Overlay.Marquee], overlayShowing: 'spotlight', overlayTitle: 'Some Important Information To Share', overlaySubtitle: '1,000,000,000,000'
			},


			{kind: Divider, content: 'More Complex Overlays'},
			{name: 'tapOverlay', mixins: [Overlay.Support], ontap: 'showOverlay', style: 'width: 500px; height: 300px;', components: [
				{kind: Img, src: img(500, 300, 'Tap to Show')}
			], overlayShowing: false, overlayComponents: [
				{kind: InputDecorator, components: [
					{kind: Input, placeholder: 'Full Name'}
				]},
				{kind: Button, content: 'Continue', style: 'position: absolute; right: 0px; bottom: 12px;', ontap: 'hideOverlay'}
			]}
		]},
		{name: 'result', style: 'height: 50px;'}
	],
	itemTapped: function (sender, event) {
		this.$.result.set('content', 'Item Tapped: ' + sender.id);
	},
	badgeTapped: function (sender, event) {
		this.$.result.set('content', 'Badge Tapped: ' + sender.id);
		return true;
	},
	toggleSelected: function (sender, event) {
		sender.set('selected', !sender.selected);
	},
	showOverlay: function (sender, event) {
		this.$.tapOverlay.set('overlayShowing', true);
	},
	hideOverlay: function (sender, event) {
		this.$.tapOverlay.set('overlayShowing', false);
		return true;
	}
});

