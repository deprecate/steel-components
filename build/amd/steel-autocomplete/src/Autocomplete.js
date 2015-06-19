define(['exports', 'module', 'steel-autocomplete/src/AutocompleteBase', 'metal/src/component/ComponentRegistry', 'metal-promise/src/promise/Promise', 'metal/src/core', 'metal/src/dom/dom', 'metal-position/src/Align', 'steel-list/src/List'], function (exports, module, _steelAutocompleteSrcAutocompleteBase, _metalSrcComponentComponentRegistry, _metalPromiseSrcPromisePromise, _metalSrcCore, _metalSrcDomDom, _metalPositionSrcAlign, _steelListSrcList) {
	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _AutocompleteBase2 = _interopRequireDefault(_steelAutocompleteSrcAutocompleteBase);

	var _ComponentRegistry = _interopRequireDefault(_metalSrcComponentComponentRegistry);

	var _core = _interopRequireDefault(_metalSrcCore);

	var _dom = _interopRequireDefault(_metalSrcDomDom);

	var _Align = _interopRequireDefault(_metalPositionSrcAlign);

	var _List = _interopRequireDefault(_steelListSrcList);

	/*
  * Autocomplete component.
  */

	var Autocomplete = (function (_AutocompleteBase) {
		/**
   * @inheritDoc
   */

		function Autocomplete(opt_config) {
			_classCallCheck(this, Autocomplete);

			_get(Object.getPrototypeOf(Autocomplete.prototype), 'constructor', this).call(this, opt_config);
		}

		_inherits(Autocomplete, _AutocompleteBase);

		_createClass(Autocomplete, [{
			key: 'attached',

			/**
    * @inheritDoc
    */
			value: function attached() {
				_get(Object.getPrototypeOf(Autocomplete.prototype), 'attached', this).call(this);
				this.list.attach(this.element);
				this.on('click', this.genericStopPropagation_);
				this.eventHandler_.add(_dom['default'].on(this.inputElement, 'focus', this.handleInputFocus_.bind(this)));
				this.eventHandler_.add(_dom['default'].on(document, 'click', this.handleDocClick_.bind(this)));
			}
		}, {
			key: 'detached',

			/**
    * @inheritDoc
    */
			value: function detached() {
				_get(Object.getPrototypeOf(Autocomplete.prototype), 'detached', this).call(this);
				this.list.detach();
			}
		}, {
			key: 'renderInternal',

			/**
    * @inheritDoc
    */
			value: function renderInternal() {
				this.list = new _List['default']().render(this.element);
				this.list.on('itemSelected', this.onListItemSelected_.bind(this));
			}
		}, {
			key: 'align',

			/**
    * Aligns main element to the input element.
    */
			value: function align() {
				this.element.style.width = this.inputElement.offsetWidth + 'px';
				_Align['default'].align(this.element, this.inputElement, _Align['default'].Bottom);
			}
		}, {
			key: 'handleDocClick_',

			/**
    * Handles document click in order to hide autocomplete. If input element is
    * focused autocomplete will not hide.
    * @param {Event} event
    */
			value: function handleDocClick_() {
				if (document.activeElement === this.inputElement) {
					return;
				}
				this.visible = false;
			}
		}, {
			key: 'handleInputFocus_',

			/**
    * Handles input focus.
    * @param {Event} event
    */
			value: function handleInputFocus_() {
				this.request(this.inputElement.value);
			}
		}, {
			key: 'request',

			/**
    * @inheritDoc
    */
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

			/**
    * Emits a `select` event with the information about the selected item and
    * hides the element.
    * @param {Element} item The list selected item.
    */
			value: function onListItemSelected_(item) {
				var selectedIndex = parseInt(item.getAttribute('data-index'), 10);
				this.emit('select', this.list.items[selectedIndex]);
				this.visible = false;
			}
		}, {
			key: 'genericStopPropagation_',

			/**
    * Stops propagation of an event.
    * @param {Event} event
    * @protected
    */
			value: function genericStopPropagation_(event) {
				event.stopPropagation();
			}
		}, {
			key: 'syncVisible',

			/**
    * @inheritDoc
    */
			value: function syncVisible(visible) {
				_get(Object.getPrototypeOf(Autocomplete.prototype), 'syncVisible', this).call(this, visible);

				if (visible) {
					this.align();
				}
			}
		}, {
			key: 'assertItemObjectStructure_',

			/**
    * Asserts that formatted data is valid. Throws error if item is not in the
    * valid syntax.
    * @param {*} item
    * @protected
    */
			value: function assertItemObjectStructure_(item) {
				if (!_core['default'].isObject(item)) {
					throw new _metalPromiseSrcPromisePromise.CancellablePromise.CancellationError('Autocomplete item must be an object');
				}
				if (!item.hasOwnProperty('textPrimary')) {
					throw new _metalPromiseSrcPromisePromise.CancellablePromise.CancellationError('Autocomplete item must be an object with \'textPrimary\' key');
				}
			}
		}]);

		return Autocomplete;
	})(_AutocompleteBase2['default']);

	Autocomplete.ATTRS = {
		/**
   * @inheritDoc
   */
		format: {
			value: function value(item) {
				return _core['default'].isString(item) ? {
					textPrimary: item
				} : item;
			}
		}
	};

	/**
  * Provides a list of classes which have to be applied to the element's DOM element.
  * @type {string}
  * @static
  * @default 'autocomplete autocomplete-list'
  */
	Autocomplete.ELEMENT_CLASSES = 'autocomplete autocomplete-list';

	_ComponentRegistry['default'].register('Autocomplete', Autocomplete);

	module.exports = Autocomplete;
});