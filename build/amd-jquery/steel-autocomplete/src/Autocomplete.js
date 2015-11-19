'use strict';

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

define(['exports', 'steel-autocomplete/src/AutocompleteBase', 'metal/src/component/ComponentRegistry', 'metal-promise/src/promise/Promise', 'metal/src/core', 'metal/src/dom/dom', 'metal-position/src/Align', 'steel-list/src/List', 'metal-jquery-adapter/src/JQueryAdapter'], function (exports, _AutocompleteBase2, _ComponentRegistry, _Promise, _core, _dom, _Align, _List, _JQueryAdapter) {
	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _AutocompleteBase3 = _interopRequireDefault(_AutocompleteBase2);

	var _ComponentRegistry2 = _interopRequireDefault(_ComponentRegistry);

	var _core2 = _interopRequireDefault(_core);

	var _dom2 = _interopRequireDefault(_dom);

	var _Align2 = _interopRequireDefault(_Align);

	var _List2 = _interopRequireDefault(_List);

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

	var Autocomplete = (function (_AutocompleteBase) {
		_inherits(Autocomplete, _AutocompleteBase);

		function Autocomplete(opt_config) {
			_classCallCheck(this, Autocomplete);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Autocomplete).call(this, opt_config));

			_this.once('render', _this.handleRender_);

			return _this;
		}

		_createClass(Autocomplete, [{
			key: 'attached',
			value: function attached() {
				_get(Object.getPrototypeOf(Autocomplete.prototype), 'attached', this).call(this);

				this.list.attach(this.element);
				this.on('click', this.genericStopPropagation_);
				this.eventHandler_.add(_dom2.default.on(this.inputElement, 'focus', this.handleInputFocus_.bind(this)));
				this.eventHandler_.add(_dom2.default.on(document, 'click', this.handleDocClick_.bind(this)));

				if (this.visible) {
					this.align();
				}
			}
		}, {
			key: 'detached',
			value: function detached() {
				_get(Object.getPrototypeOf(Autocomplete.prototype), 'detached', this).call(this);

				this.list.detach();
			}
		}, {
			key: 'align',
			value: function align() {
				this.element.style.width = this.inputElement.offsetWidth + 'px';

				_Align2.default.align(this.element, this.inputElement, _Align2.default.Bottom);
			}
		}, {
			key: 'handleDocClick_',
			value: function handleDocClick_() {
				if (document.activeElement === this.inputElement) {
					return;
				}

				this.visible = false;
			}
		}, {
			key: 'handleInputFocus_',
			value: function handleInputFocus_() {
				this.request(this.inputElement.value);
			}
		}, {
			key: 'handleRender_',
			value: function handleRender_() {
				this.list = new _List2.default().render(this.element);
				this.list.on('itemSelected', this.onListItemSelected_.bind(this));
			}
		}, {
			key: 'request',
			value: function request(query) {
				var self = this;
				return _get(Object.getPrototypeOf(Autocomplete.prototype), 'request', this).call(this, query).then(function (data) {
					if (data) {
						data.forEach(self.assertItemObjectStructure_);
						self.list.items = data;
					}

					self.visible = !!(data && data.length > 0);
				});
			}
		}, {
			key: 'onListItemSelected_',
			value: function onListItemSelected_(item) {
				var selectedIndex = parseInt(item.getAttribute('data-index'), 10);
				this.emit('select', this.list.items[selectedIndex]);
				this.visible = false;
			}
		}, {
			key: 'genericStopPropagation_',
			value: function genericStopPropagation_(event) {
				event.stopPropagation();
			}
		}, {
			key: 'syncVisible',
			value: function syncVisible(visible) {
				_get(Object.getPrototypeOf(Autocomplete.prototype), 'syncVisible', this).call(this, visible);

				if (visible) {
					this.align();
				}
			}
		}, {
			key: 'assertItemObjectStructure_',
			value: function assertItemObjectStructure_(item) {
				if (!_core2.default.isObject(item)) {
					throw new _Promise.CancellablePromise.CancellationError('Autocomplete item must be an object');
				}

				if (!item.hasOwnProperty('textPrimary')) {
					throw new _Promise.CancellablePromise.CancellationError('Autocomplete item must be an object with \'textPrimary\' key');
				}
			}
		}]);

		return Autocomplete;
	})(_AutocompleteBase3.default);

	Autocomplete.ATTRS = {
		format: {
			value: function value(item) {
				return _core2.default.isString(item) ? {
					textPrimary: item
				} : item;
			}
		}
	};
	Autocomplete.ELEMENT_CLASSES = 'autocomplete autocomplete-list';

	_ComponentRegistry2.default.register(Autocomplete);

	exports.default = Autocomplete;

	_JQueryAdapter2.default.register('autocomplete', Autocomplete);
});
//# sourceMappingURL=Autocomplete.js.map