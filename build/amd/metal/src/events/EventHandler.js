define(['exports', 'module', 'metal/src/disposable/Disposable'], function (exports, module, _metalSrcDisposableDisposable) {
	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _Disposable2 = _interopRequireDefault(_metalSrcDisposableDisposable);

	/**
  * EventHandler utility. It's useful for easily removing a group of
  * listeners from different EventEmitter instances.
  * @constructor
  * @extends {Disposable}
  */

	var EventHandler = (function (_Disposable) {
		function EventHandler() {
			_classCallCheck(this, EventHandler);

			_get(Object.getPrototypeOf(EventHandler.prototype), 'constructor', this).call(this);

			/**
    * An array that holds the added event handles, so the listeners can be
    * removed later.
    * @type {Array.<EventHandle>}
    * @protected
    */
			this.eventHandles_ = [];
		}

		_inherits(EventHandler, _Disposable);

		_createClass(EventHandler, [{
			key: 'add',

			/**
    * Adds event handles to be removed later through the `removeAllListeners`
    * method.
    * @param {...(!EventHandle)} var_args
    */
			value: function add() {
				for (var i = 0; i < arguments.length; i++) {
					this.eventHandles_.push(arguments[i]);
				}
			}
		}, {
			key: 'disposeInternal',

			/**
    * Disposes of this instance's object references.
    * @override
    */
			value: function disposeInternal() {
				this.eventHandles_ = null;
			}
		}, {
			key: 'removeAllListeners',

			/**
    * Removes all listeners that have been added through the `add` method.
    */
			value: function removeAllListeners() {
				for (var i = 0; i < this.eventHandles_.length; i++) {
					this.eventHandles_[i].removeListener();
				}

				this.eventHandles_ = [];
			}
		}]);

		return EventHandler;
	})(_Disposable2['default']);

	module.exports = EventHandler;
});