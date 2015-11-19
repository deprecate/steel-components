'use strict';

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

define(['exports', 'metal/src/dom/dom', 'steel-tooltip/src/Tooltip', 'steel-tooltip-menu/src/TooltipMenu.soy', 'metal-jquery-adapter/src/JQueryAdapter'], function (exports, _dom, _Tooltip2, _TooltipMenu, _JQueryAdapter) {
	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _dom2 = _interopRequireDefault(_dom);

	var _Tooltip3 = _interopRequireDefault(_Tooltip2);

	var _TooltipMenu2 = _interopRequireDefault(_TooltipMenu);

	var _JQueryAdapter2 = _interopRequireDefault(_JQueryAdapter);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var _createClass = (function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];
				descriptor.enumerable = descriptor.enumerable || false;
				descriptor.configurable = true;
				if ("value" in descriptor) descriptor.writable = true;
				Object.defineProperty(target, descriptor.key, descriptor);
			}
		}

		return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);
			if (staticProps) defineProperties(Constructor, staticProps);
			return Constructor;
		};
	})();

	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}

		return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	var _get = function get(object, property, receiver) {
		if (object === null) object = Function.prototype;
		var desc = Object.getOwnPropertyDescriptor(object, property);

		if (desc === undefined) {
			var parent = Object.getPrototypeOf(object);

			if (parent === null) {
				return undefined;
			} else {
				return get(parent, property, receiver);
			}
		} else if ("value" in desc) {
			return desc.value;
		} else {
			var getter = desc.get;

			if (getter === undefined) {
				return undefined;
			}

			return getter.call(receiver);
		}
	};

	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		}

		subClass.prototype = Object.create(superClass && superClass.prototype, {
			constructor: {
				value: subClass,
				enumerable: false,
				writable: true,
				configurable: true
			}
		});
		if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var TooltipMenu = (function (_Tooltip) {
		_inherits(TooltipMenu, _Tooltip);

		function TooltipMenu(opt_config) {
			_classCallCheck(this, TooltipMenu);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(TooltipMenu).call(this, opt_config));
		}

		_createClass(TooltipMenu, [{
			key: 'attached',
			value: function attached() {
				_get(Object.getPrototypeOf(TooltipMenu.prototype), 'attached', this).call(this);

				this.eventHandler_.add(_dom2.default.on(document, 'click', this.handleDocClick_.bind(this)));
			}
		}, {
			key: 'handleDocClick_',
			value: function handleDocClick_(event) {
				if (this.element.contains(event.target)) {
					return;
				}

				this.visible = false;
			}
		}]);

		return TooltipMenu;
	})(_Tooltip3.default);

	TooltipMenu.ELEMENT_CLASSES_MERGED = 'tooltip-menu component';
	TooltipMenu.ELEMENT_TAG_NAME = 'nav';
	TooltipMenu.ATTRS = {
		delay: {
			validator: Array.isArray,
			value: [0, 0]
		},
		triggerEvents: {
			validator: Array.isArray,
			value: ['click', 'click']
		},
		content: {
			validator: Array.isArray,
			valueFn: function valueFn() {
				return [];
			}
		}
	};

	_TooltipMenu2.default.setImpl(TooltipMenu);

	exports.default = TooltipMenu;

	_JQueryAdapter2.default.register('tooltipMenu', TooltipMenu);
});
//# sourceMappingURL=TooltipMenu.js.map