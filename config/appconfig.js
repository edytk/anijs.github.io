APP_CONFIG = {
	autoCompleteSources: {
		to: [
			'window',
			'.container-box',
			'.navbar',
			'ul li',
			'p',
			'.content-head',
			'.pure-u-1-2',
			'input',
			'button',
			'pre',
			'#welcome',
			'#tryit',
			'.splash-head',
			'.splash-subhead',
			'l-box-lrg',
			'.content-subhead'
		],
		if: [
			'click',
			'dblclick',
			'mousedown',
			'mouseenter',
			'mouseleave',
			'mouseover',
			'mouseup',
			'scroll',
			'resize',
			'focus',
			'change',
			'contextmenu',
			'keypress',
			'animationend',
			'orientationchange'
		],
		to: [

		],
		do: [
          'bounce',
          'flash',
          'pulse',
          'rubberBand',
          'shake',
          'swing',
          'tada',
          'wobble',
          'bounceIn',
          'bounceInLeft',
          'bounceInRight',
          'bounceOut',
          'bounceOutDown',
          'bounceOutUp',
          'fadeIn',
          'fadeInLeftBig',
          'fadeInUpBig',
          'fadeOut',
          'fadeOutDown',
          'fadeOutRight',
          'flip',
          'flipInX',
          'flipOutY',
          'lightSpeedIn',
          'rotateIn',
          'rotateInDownRight',
          'rotateInUpRight',
          'rotateOut',
          'rotateOutDownRight',
          'rotateOutUpRight',
          'slideInDown',
          'slideOutRight',
          'slideOutUp',
          'hinge',
          'rollIn',
          'rollOut'

		]
	},
  colorSquares: [
    'blue-bg tada animated infinite',
    'orange-bg',
    'pink-bg',
    'green-bg',
    'pink-bg',
    'green-bg',
    'gray-bg',
    'blue-bg',
    'orange-bg',
    'pink-lgh-bg',
    'blue-lgh-bg',
    'orange-lgh-bg',
    'green-lgh-bg',
    'orange-lgh-bg',
    'green-bg',
    'yellow-lgh-bg',
  ],
  behaviorSquares: [
    { do:'flipInY animated', to:'.container-box' },
    { do:'rollIn animated', to:'$children .container-box' },
    { do:'tada animated', to:'.container-box' },
    { do:'pulse animated', to:'$children .content-wrapper' },
    { do:'hinge animated', to:'$find body | .fa' },
    { do:'bounceIn animated', to:'$ancestors target | .container-box' },
    { do:'flip animated', to:'$closest target' },
    { do:'rubberBand animated', to:'.container-box' },
    { do:'wobble animated', to:'.container-box' },
    { do:'rollOut animated', to:'.demo1' },
    { do:'hinge animated', to:'h3' },
    { do:'rotateIn animated', to:'$parent target' },
    { do:'$toggleClass invisible', to:'.demo-toggle' },
    { do:'$toggleClass pink-lgh-bg', to:'.demo1' },
    { do:'$toggleClass gray-bg', to:'$ancestors target' },
    { do:'$removeClass gray-bg', to:'$ancestors target' },
  ]
};
