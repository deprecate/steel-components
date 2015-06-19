define(['exports', 'module', 'metal/src/dom/dom', 'metal/src/component/ComponentRegistry', 'metal/src/soy/SoyComponent', 'steel-dropdown/src/Dropdown.soy'], function (exports, module, _metalSrcDomDom, _metalSrcComponentComponentRegistry, _metalSrcSoySoyComponent, _steelDropdownSrcDropdownSoy) {
	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _dom = _interopRequireDefault(_metalSrcDomDom);

	var _ComponentRegistry = _interopRequireDefault(_metalSrcComponentComponentRegistry);

	var _SoyComponent2 = _interopRequireDefault(_metalSrcSoySoyComponent);

	var Dropdown = (function (_SoyComponent) {
		function Dropdown(opt_config) {
			_classCallCheck(this, Dropdown);

			_get(Object.getPrototypeOf(Dropdown.prototype), 'constructor', this).call(this, opt_config);
		}

		_inherits(Dropdown, _SoyComponent);

		_createClass(Dropdown, [{
			key: 'close',
			value: function close() {
				_dom['default'].removeClasses(this.element, 'open');
			}
		}, {
			key: 'open',
			value: function open() {
				_dom['default'].addClasses(this.element, 'open');
			}
		}, {
			key: 'toggle',
			value: function toggle() {
				_dom['default'].toggleClasses(this.element, 'open');
			}
		}, {
			key: 'syncPosition',
			value: function syncPosition(position, oldPosition) {
				if (oldPosition) {
					_dom['default'].removeClasses(this.element, 'drop' + oldPosition.toLowerCase());
				}
				_dom['default'].addClasses(this.element, 'drop' + position.toLowerCase());
			}
		}, {
			key: 'validatePosition_',
			value: function validatePosition_(position) {
				switch (position.toLowerCase()) {
					case 'up':
					case 'down':
						return true;
					default:
						return false;
				}
			}
		}]);

		return Dropdown;
	})(_SoyComponent2['default']);

	Dropdown.ATTRS = {
		body: {},

		header: {},

		position: {
			value: 'down',
			validator: 'validatePosition_'
		}
	};

	/**
  * Default dropdown elementClasses.
  * @default dropdown
  * @type {String}
  * @static
  */
	Dropdown.ELEMENT_CLASSES = 'dropdown';

	_ComponentRegistry['default'].register('Dropdown', Dropdown);

	module.exports = Dropdown;
});