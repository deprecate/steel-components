'use strict';

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

define(['exports', 'metal/src/core', 'metal/src/dom/dom', 'metal-promise/src/promise/Promise', 'metal/src/component/Component', 'metal/src/events/EventHandler'], function (exports, _core, _dom, _Promise, _Component2, _EventHandler) {
	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _core2 = _interopRequireDefault(_core);

	var _dom2 = _interopRequireDefault(_dom);

	var _Component3 = _interopRequireDefault(_Component2);

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

	var AutocompleteBase = (function (_Component) {
		_inherits(AutocompleteBase, _Component);

		function AutocompleteBase(opt_config) {
			_classCallCheck(this, AutocompleteBase);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AutocompleteBase).call(this, opt_config));

			_this.eventHandler_ = new _EventHandler2.default();

			_this.on('select', _this.select);

			return _this;
		}

		_createClass(AutocompleteBase, [{
			key: 'attached',
			value: function attached() {
				if (this.inputElement) {
					this.eventHandler_.add(_dom2.default.on(this.inputElement, 'input', this.handleUserInput_.bind(this)));
				}
			}
		}, {
			key: 'detached',
			value: function detached() {
				this.eventHandler_.removeAllListeners();
			}
		}, {
			key: 'handleUserInput_',
			value: function handleUserInput_() {
				this.request(this.inputElement.value);
			}
		}, {
			key: 'request',
			value: function request(query) {
				var self = this;

				if (this.pendingRequest) {
					this.pendingRequest.cancel('Cancelled by another request');
				}

				this.pendingRequest = _Promise.CancellablePromise.resolve().then(function () {
					return self.data(query);
				}).then(function (data) {
					if (Array.isArray(data)) {
						return data.map(self.format.bind(self)).filter(function (val) {
							return _core2.default.isDefAndNotNull(val);
						});
					}
				});
				return this.pendingRequest;
			}
		}, {
			key: 'setData_',
			value: function setData_(val) {
				if (!_core2.default.isFunction(val)) {
					return function () {
						return val;
					};
				}

				return val;
			}
		}]);

		return AutocompleteBase;
	})(_Component3.default);

	AutocompleteBase.ATTRS = {
		data: {
			setter: 'setData_'
		},
		format: {
			value: _core2.default.identityFunction,
			validator: _core2.default.isFunction
		},
		inputElement: {
			setter: _dom2.default.toElement
		},
		select: {
			value: function value(selectedValue) {
				this.inputElement.value = selectedValue.textPrimary;
				this.inputElement.focus();
			},
			validator: _core2.default.isFunction
		},
		visible: {
			validator: _core2.default.isBoolean,
			value: false
		}
	};
	exports.default = AutocompleteBase;
});
//# sourceMappingURL=AutocompleteBase.js.map