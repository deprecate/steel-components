'use strict';

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

define(['exports', 'metal/src/core', 'metal/src/dom/dom', 'steel-alert/src/Alert.soy', 'metal-anim/src/Anim', 'metal/src/events/EventHandler', 'metal/src/dom/events'], function (exports, _core, _dom, _Alert, _Anim, _EventHandler) {
	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _core2 = _interopRequireDefault(_core);

	var _dom2 = _interopRequireDefault(_dom);

	var _Alert2 = _interopRequireDefault(_Alert);

	var _Anim2 = _interopRequireDefault(_Anim);

	var _EventHandler2 = _interopRequireDefault(_EventHandler);

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

	var Alert = (function (_AlertBase) {
		_inherits(Alert, _AlertBase);

		function Alert(opt_config) {
			_classCallCheck(this, Alert);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Alert).call(this, opt_config));

			_this.eventHandler_ = new _EventHandler2.default();
			return _this;
		}

		_createClass(Alert, [{
			key: 'detached',
			value: function detached() {
				_get(Object.getPrototypeOf(Alert.prototype), 'detached', this).call(this);

				this.eventHandler_.removeAllListeners();
				clearTimeout(this.delay_);
			}
		}, {
			key: 'close',
			value: function close() {
				_dom2.default.once(this.element, 'animationend', this.dispose.bind(this));

				_dom2.default.once(this.element, 'transitionend', this.dispose.bind(this));

				this.eventHandler_.removeAllListeners();
				this.syncVisible(false);
			}
		}, {
			key: 'handleDocClick_',
			value: function handleDocClick_(event) {
				if (!this.element.contains(event.target)) {
					this.hide();
				}
			}
		}, {
			key: 'hide',
			value: function hide() {
				this.visible = false;
			}
		}, {
			key: 'toggle',
			value: function toggle() {
				this.visible = !this.visible;
			}
		}, {
			key: 'syncDismissible',
			value: function syncDismissible(dismissible) {
				if (dismissible) {
					this.eventHandler_.add(_dom2.default.on(document, 'click', this.handleDocClick_.bind(this)));
				} else {
					this.eventHandler_.removeAllListeners();
				}

				_dom2.default[dismissible ? 'addClasses' : 'removeClasses'](this.element, 'alert-dismissible');
			}
		}, {
			key: 'syncVisible',
			value: function syncVisible(visible) {
				_dom2.default.removeClasses(this.element, this.animClasses[visible ? 'hide' : 'show']);

				_dom2.default.addClasses(this.element, this.animClasses[visible ? 'show' : 'hide']);

				_Anim2.default.emulateEnd(this.element);

				if (visible && _core2.default.isNumber(this.hideDelay)) {
					this.syncHideDelay(this.hideDelay);
				}
			}
		}, {
			key: 'syncHideDelay',
			value: function syncHideDelay(hideDelay) {
				if (_core2.default.isNumber(hideDelay) && this.visible) {
					clearTimeout(this.delay_);
					this.delay_ = setTimeout(this.hide.bind(this), hideDelay);
				}
			}
		}]);

		return Alert;
	})(_Alert2.default);

	Alert.ELEMENT_CLASSES = 'alert';
	Alert.ATTRS = {
		animClasses: {
			validator: _core2.default.isObject,
			value: {
				show: 'fade in',
				hide: 'fade'
			}
		},
		body: {
			value: ''
		},
		dismissible: {
			validator: _core2.default.isBoolean,
			value: true
		},
		elementClasses: {
			value: 'alert-success'
		},
		hideDelay: {},
		visible: {
			value: false
		}
	};

	_Alert2.default.setImpl(Alert);

	exports.default = Alert;
});
//# sourceMappingURL=Alert.js.map