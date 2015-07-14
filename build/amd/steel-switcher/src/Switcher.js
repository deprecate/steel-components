define(['exports', 'module', 'metal/src/core', 'metal/src/dom/dom', 'metal/src/soy/SoyComponent', 'metal/src/component/ComponentRegistry', 'steel-switcher/src/Switcher.soy'], function (exports, module, _metalSrcCore, _metalSrcDomDom, _metalSrcSoySoyComponent, _metalSrcComponentComponentRegistry, _steelSwitcherSrcSwitcherSoy) {
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

	/**
  * Switcher component.
  */

	var Switcher = (function (_SoyComponent) {
		_inherits(Switcher, _SoyComponent);

		function Switcher(opt_config) {
			_classCallCheck(this, Switcher);

			_get(Object.getPrototypeOf(Switcher.prototype), 'constructor', this).call(this, opt_config);
		}

		_createClass(Switcher, [{
			key: 'attached',

			/**
    * @inheritDoc
    */
			value: function attached() {
				this.on('click', this.handleClick);
			}
		}, {
			key: 'handleClick',

			/**
    * Handles switcher click.
    */
			value: function handleClick() {
				this.checked = !this.checked;
			}
		}, {
			key: 'syncChecked',

			/**
    * @inheritDoc
    */
			value: function syncChecked(checked) {
				_dom['default'][checked ? 'addClasses' : 'removeClasses'](this.element, 'switcher-on');
			}
		}]);

		return Switcher;
	})(_SoyComponent2['default']);

	/**
  * Default switcher elementClasses.
  * @default list
  * @type {String}
  * @static
  */
	Switcher.ELEMENT_CLASSES = 'switcher';

	/**
  * Switcher attributes definition.
  * @type {Object}
  * @static
  */
	Switcher.ATTRS = {
		checked: {
			validator: _core['default'].isBoolean,
			value: false
		}
	};

	_ComponentRegistry['default'].register('Switcher', Switcher);

	module.exports = Switcher;
});