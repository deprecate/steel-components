define(['exports', 'module', 'metal/src/component/ComponentRegistry', 'metal/src/core', 'metal/src/dom/dom', 'metal/src/events/EventHandler', 'metal-promise/src/promise/Promise', 'metal/src/soy/SoyComponent'], function (exports, module, _metalSrcComponentComponentRegistry, _metalSrcCore, _metalSrcDomDom, _metalSrcEventsEventHandler, _metalPromiseSrcPromisePromise, _metalSrcSoySoyComponent) {
	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _ComponentRegistry = _interopRequireDefault(_metalSrcComponentComponentRegistry);

	var _core = _interopRequireDefault(_metalSrcCore);

	var _dom = _interopRequireDefault(_metalSrcDomDom);

	var _EventHandler = _interopRequireDefault(_metalSrcEventsEventHandler);

	// TODO: Autocomplete must not be a SoyComponent, remove this extension when we have mixins ability.

	var _SoyComponent2 = _interopRequireDefault(_metalSrcSoySoyComponent);

	/*
  * AutocompleteBase component.
  */

	var AutocompleteBase = (function (_SoyComponent) {
		_inherits(AutocompleteBase, _SoyComponent);

		/**
   * @inheritDoc
   */

		function AutocompleteBase(opt_config) {
			_classCallCheck(this, AutocompleteBase);

			_get(Object.getPrototypeOf(AutocompleteBase.prototype), 'constructor', this).call(this, opt_config);

			this.eventHandler_ = new _EventHandler['default']();
			this.on('select', this.select);
		}

		_createClass(AutocompleteBase, [{
			key: 'attached',

			/**
    * @inheritDoc
    */
			value: function attached() {
				if (this.inputElement) {
					this.eventHandler_.add(_dom['default'].on(this.inputElement, 'input', this.handleUserInput_.bind(this)));
				}
			}
		}, {
			key: 'detached',

			/**
    * @inheritDoc
    */
			value: function detached() {
				this.eventHandler_.removeAllListeners();
			}
		}, {
			key: 'handleUserInput_',

			/**
    * Handles the user input.
    * @param {Event} event
    * @protected
    */
			value: function handleUserInput_() {
				this.request(this.inputElement.value);
			}
		}, {
			key: 'request',

			/**
    * Cancels pending request and starts a request for the user input.
    * @param {String} query
    * @return {CancellablePromise} Deferred request.
    */
			value: function request(query) {
				var self = this;

				if (this.pendingRequest) {
					this.pendingRequest.cancel('Cancelled by another request');
				}

				this.pendingRequest = _metalPromiseSrcPromisePromise.CancellablePromise.resolve().then(function () {
					return self.data(query);
				}).then(function (data) {
					if (Array.isArray(data)) {
						return data.map(self.format.bind(self));
					}
				});

				return this.pendingRequest;
			}
		}, {
			key: 'setData_',

			/**
    * Normalizes the provided data value. If the value is not a function, the
    * value will be wrapped in a function which returns the provided value.
    * @param {Array.<object>|Promise|function} val The provided value which
    *     have to be normalized.
    * @protected
    */
			value: function setData_(val) {
				if (!_core['default'].isFunction(val)) {
					return function () {
						return val;
					};
				}
				return val;
			}
		}]);

		return AutocompleteBase;
	})(_SoyComponent2['default']);

	/**
  * AutocompleteBase attributes definition.
  * @type {Object}
  * @static
  */
	AutocompleteBase.ATTRS = {
		/**
   * Function or array, which have to return the results from the query.
   * If function, it should return an `array` or a `Promise`. In case of
   * Promise, it should be resolved with an array containing the results.
   *
   * @type {Array.<object>|function}
   */
		data: {
			setter: 'setData_'
		},

		/**
   * Function that formats each item of the data.
   * @type {function}
   * @default Identity function.
   */
		format: {
			value: _core['default'].identityFunction,
			validator: _core['default'].isFunction
		},

		/**
   * The element which will be used source for the data queries.
   * @type {DOMElement|string}
   */
		inputElement: {
			setter: _dom['default'].toElement
		},

		/**
   * Handles item selection. It will receive two parameters - the selected
   * value from the user and the current value from the input element.
   * @type {function}
   * @default
   *   function(selectedValue) {
   *	   this.inputElement.value = selectedValue;
   *	   this.inputElement.focus();
   *   }
   */
		select: {
			value: function value(selectedValue) {
				this.inputElement.value = selectedValue.textPrimary;
				this.inputElement.focus();
			},
			validator: _core['default'].isFunction
		},

		/**
   * Indicates if the component is visible or not.
   * @type {boolean}
   */
		visible: {
			validator: _core['default'].isBoolean,
			value: false
		}
	};

	_ComponentRegistry['default'].register('AutocompleteBase', AutocompleteBase);

	module.exports = AutocompleteBase;
});