define(['exports', 'module', 'metal/src/core', 'metal/src/dom/dom', 'metal/src/soy/SoyComponent', 'metal/src/component/ComponentRegistry', 'metal-anim/src/Anim', 'metal/src/dom/events', 'steel-alert/src/Alert.soy'], function (exports, module, _metalSrcCore, _metalSrcDomDom, _metalSrcSoySoyComponent, _metalSrcComponentComponentRegistry, _metalAnimSrcAnim, _metalSrcDomEvents, _steelAlertSrcAlertSoy) {
	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _core = _interopRequireDefault(_metalSrcCore);

	var _dom = _interopRequireDefault(_metalSrcDomDom);

	var _SoyComponent2 = _interopRequireDefault(_metalSrcSoySoyComponent);

	var _ComponentRegistry = _interopRequireDefault(_metalSrcComponentComponentRegistry);

	var _Anim = _interopRequireDefault(_metalAnimSrcAnim);

	/**
  * Alert component.
  */

	var Alert = (function (_SoyComponent) {
		function Alert(opt_config) {
			_classCallCheck(this, Alert);

			_get(Object.getPrototypeOf(Alert.prototype), 'constructor', this).call(this, opt_config);
		}

		_inherits(Alert, _SoyComponent);

		_createClass(Alert, [{
			key: 'close',
			value: function close() {
				_dom['default'].once(this.element, 'animationend', this.dispose.bind(this));
				_dom['default'].once(this.element, 'transitionend', this.dispose.bind(this));
				this.syncVisible(false);
			}
		}, {
			key: 'toggle',
			value: function toggle() {
				this.visible = !this.visible;
			}
		}, {
			key: 'syncDismissible',
			value: function syncDismissible(dismissible) {
				_dom['default'][dismissible ? 'addClasses' : 'removeClasses'](this.element, 'alert-dismissible');
			}
		}, {
			key: 'syncVisible',
			value: function syncVisible(visible) {
				_dom['default'].removeClasses(this.element, this.animClasses[visible ? 'hide' : 'show']);
				_dom['default'].addClasses(this.element, this.animClasses[visible ? 'show' : 'hide']);
				// Some browsers do not fire transitionend events when running in background
				// tab, see https://bugzilla.mozilla.org/show_bug.cgi?id=683696.
				_Anim['default'].emulateEnd(this.element);
			}
		}]);

		return Alert;
	})(_SoyComponent2['default']);

	/**
  * Default alert elementClasses.
  * @default alert
  * @type {String}
  * @static
  */
	Alert.ELEMENT_CLASSES = 'alert';

	/**
  * Alert attributes definition.
  * @type {Object}
  * @static
  */
	Alert.ATTRS = {
		animClasses: {
			validator: _core['default'].isObject,
			value: {
				show: 'fade in',
				hide: 'fade'
			}
		},

		body: {
			value: ''
		},

		elementClasses: {
			value: 'alert-success'
		},

		dismissible: {
			validator: _core['default'].isBoolean,
			value: true
		},

		visible: {
			value: false
		}
	};

	_ComponentRegistry['default'].register('Alert', Alert);

	module.exports = Alert;
});