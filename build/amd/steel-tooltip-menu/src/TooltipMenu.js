define(['exports', 'module', 'metal/src/dom/dom', 'steel-tooltip/src/Tooltip', 'metal/src/component/ComponentRegistry', 'steel-tooltip-menu/src/TooltipMenu.soy'], function (exports, module, _metalSrcDomDom, _steelTooltipSrcTooltip, _metalSrcComponentComponentRegistry, _steelTooltipMenuSrcTooltipMenuSoy) {
	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _dom = _interopRequireDefault(_metalSrcDomDom);

	var _Tooltip2 = _interopRequireDefault(_steelTooltipSrcTooltip);

	var _ComponentRegistry = _interopRequireDefault(_metalSrcComponentComponentRegistry);

	/**
  * TooltipMenu component.
  */

	var TooltipMenu = (function (_Tooltip) {
		/**
   * @inheritDoc
   */

		function TooltipMenu(opt_config) {
			_classCallCheck(this, TooltipMenu);

			_get(Object.getPrototypeOf(TooltipMenu.prototype), 'constructor', this).call(this, opt_config);
		}

		_inherits(TooltipMenu, _Tooltip);

		_createClass(TooltipMenu, [{
			key: 'attached',
			value: function attached() {
				_get(Object.getPrototypeOf(TooltipMenu.prototype), 'attached', this).call(this);
				this.eventHandler_.add(_dom['default'].on(document, 'click', this.handleDocClick_.bind(this)));
			}
		}, {
			key: 'syncContent',

			/**
    * @inheritDoc
    */
			value: function syncContent() {}
		}, {
			key: 'handleDocClick_',

			/**
    * Handles document click in order to hide menu.
    * @param {Event} event
    */
			value: function handleDocClick_(event) {
				if (this.element.contains(event.target)) {
					return;
				}
				this.visible = false;
			}
		}]);

		return TooltipMenu;
	})(_Tooltip2['default']);

	/**
  * Default tooltip elementClasses.
  * @default tooltip
  * @type {String}
  * @static
  */
	TooltipMenu.ELEMENT_CLASSES_MERGED = 'tooltip-menu component';

	/**
  * TooltipMenu attrbutes definition.
  * @type {Object}
  * @static
  */
	TooltipMenu.ATTRS = {
		/**
   * Delay showing and hiding the menu (ms).
   * @type {!Array.<number>}
   * @default [ 0, 0 ]
   */
		delay: {
			validator: Array.isArray,
			value: [0, 0]
		},

		/**
   * Trigger events used to bind handlers to show and hide tooltip.
   * @type {!Array.<string>}
   * @default ['click', 'mouseout']
   */
		triggerEvents: {
			validator: Array.isArray,
			value: ['click', 'click']
		},

		/**
   * Items to be placed inside tooltip menu. Each item must contain at least a
   * label key.
   * @type {!Array.<!object>}
   */
		content: {
			validator: Array.isArray,
			valueFn: function valueFn() {
				return [];
			}
		}
	};

	_ComponentRegistry['default'].register('TooltipMenu', TooltipMenu);

	module.exports = TooltipMenu;
});