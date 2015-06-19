define(['exports', 'module', 'metal/src/core', 'metal/src/component/ComponentCollector', 'metal/src/disposable/Disposable'], function (exports, module, _metalSrcCore, _metalSrcComponentComponentCollector, _metalSrcDisposableDisposable) {
	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _core = _interopRequireDefault(_metalSrcCore);

	var _ComponentCollector = _interopRequireDefault(_metalSrcComponentComponentCollector);

	var _Disposable2 = _interopRequireDefault(_metalSrcDisposableDisposable);

	/**
  * Collects inline events from a passed element, detaching previously
  * attached events that are not being used anymore.
  * @param {Component} component
  * @constructor
  * @extends {Disposable}
  */

	var EventsCollector = (function (_Disposable) {
		function EventsCollector(component) {
			_classCallCheck(this, EventsCollector);

			_get(Object.getPrototypeOf(EventsCollector.prototype), 'constructor', this).call(this);

			if (!component) {
				throw new Error('The component instance is mandatory');
			}

			/**
    * Holds the component intance.
    * @type {!Component}
    * @protected
    */
			this.component_ = component;

			/**
    * Holds the attached delegate event handles, indexed by the css selector.
    * @type {!Object<string, !DomEventHandle>}
    * @protected
    */
			this.eventHandles_ = {};

			/**
    * Holds flags indicating which selectors a group has listeners for.
    * @type {!Object<string, !Object<string, boolean>>}
    * @protected
    */
			this.groupHasListener_ = {};
		}

		_inherits(EventsCollector, _Disposable);

		_createClass(EventsCollector, [{
			key: 'attachListener_',

			/**
    * Attaches the listener described by the given params, unless it has already
    * been attached.
    * @param {string} eventType
    * @param {string} fnName
    * @param {boolean} permanent
    * @protected
    */
			value: function attachListener_(eventType, fnName, groupName) {
				var selector = '[data-on' + eventType + '="' + fnName + '"]';

				this.groupHasListener_[groupName][selector] = true;

				if (!this.eventHandles_[selector]) {
					var fn = this.getListenerFn(fnName);
					if (fn) {
						this.eventHandles_[selector] = this.component_.delegate(eventType, selector, this.onEvent_.bind(this, fn));
					}
				}
			}
		}, {
			key: 'attachListeners',

			/**
    * Attaches all listeners declared as attributes on the given element and
    * its children.
    * @param {string} content
    * @param {boolean} groupName
    */
			value: function attachListeners(content, groupName) {
				if (!_core['default'].isString(content)) {
					return;
				}
				this.groupHasListener_[groupName] = {};
				this.attachListenersFromHtml_(content, groupName);
			}
		}, {
			key: 'attachListenersFromHtml_',

			/**
    * Attaches listeners found in the given html content.
    * @param {string} content
    * @param {boolean} groupName
    * @protected
    */
			value: function attachListenersFromHtml_(content, groupName) {
				if (content.indexOf('data-on') === -1) {
					return;
				}
				var regex = /data-on([a-z]+)=['"]([^'"]+)['"]/g;
				var match = regex.exec(content);
				while (match) {
					this.attachListener_(match[1], match[2], groupName);
					match = regex.exec(content);
				}
			}
		}, {
			key: 'detachAllListeners',

			/**
    * Removes all previously attached event listeners to the component.
    */
			value: function detachAllListeners() {
				for (var selector in this.eventHandles_) {
					if (this.eventHandles_[selector]) {
						this.eventHandles_[selector].removeListener();
					}
				}
				this.eventHandles_ = {};
				this.listenerCounts_ = {};
			}
		}, {
			key: 'detachUnusedListeners',

			/**
    * Detaches all existing listeners that are not being used anymore.
    * @protected
    */
			value: function detachUnusedListeners() {
				for (var selector in this.eventHandles_) {
					if (this.eventHandles_[selector]) {
						var unused = true;
						for (var groupName in this.groupHasListener_) {
							if (this.groupHasListener_[groupName][selector]) {
								unused = false;
								break;
							}
						}
						if (unused) {
							this.eventHandles_[selector].removeListener();
							this.eventHandles_[selector] = null;
						}
					}
				}
			}
		}, {
			key: 'disposeInternal',

			/**
    * @inheritDoc
    */
			value: function disposeInternal() {
				this.detachAllListeners();
				this.component_ = null;
			}
		}, {
			key: 'getListenerFn',

			/**
    * Gets the listener function from its name. If the name is prefixed with a
    * component id, the function will be called on that specified component. Otherwise
    * it will be called on this event collector's component instead.
    * @param {string} fnName
    * @return {function()}
    */
			value: function getListenerFn(fnName) {
				var fnComponent;
				var split = fnName.split(':');
				if (split.length === 2) {
					fnName = split[1];
					fnComponent = _ComponentCollector['default'].components[split[0]];
					if (!fnComponent) {
						console.error('No component with the id "' + split[0] + '" has been collected' + 'yet. Make sure that you specify an id for an existing component when ' + 'adding inline listeners.');
					}
				}
				fnComponent = fnComponent || this.component_;
				if (_core['default'].isFunction(fnComponent[fnName])) {
					return fnComponent[fnName].bind(fnComponent);
				} else {
					console.error('No function named "' + fnName + '" was found in the component with id "' + fnComponent.id + '". Make sure that you specify valid function names when adding ' + 'inline listeners.');
				}
			}
		}, {
			key: 'onEvent_',

			/**
    * Fires when an event that was registered by this collector is triggered. Makes
    * sure that the event was meant for this component and calls the appropriate
    * listener function for it.
    * @param {!function(!Object)} fn
    * @param {!Object} event
    * @return {*} The return value of the call to the listener function, or undefined
    *   if no function was called.
    * @protected
    */
			value: function onEvent_(fn, event) {
				// This check prevents parent components from handling their child inline listeners.
				if (!event.handledByComponent || event.handledByComponent === this.component_) {
					event.handledByComponent = this.component_;
					return fn(event);
				}
			}
		}]);

		return EventsCollector;
	})(_Disposable2['default']);

	module.exports = EventsCollector;
});