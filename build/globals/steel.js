this.steel = {};
this.steelNamed = {};
(function (global) {
  var babelHelpers = global.babelHelpers = {};

  babelHelpers.inherits = function (subClass, superClass) {
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
    if (superClass) subClass.__proto__ = superClass;
  };

  babelHelpers.createClass = (function () {
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

  babelHelpers.get = function get(object, property, receiver) {
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

  babelHelpers.classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };
})(typeof global === "undefined" ? self : global);
(function () {
	'use strict';

	/**
  * A collection of core utility functions.
  * @const
  */

	var core = (function () {
		function core() {
			babelHelpers.classCallCheck(this, core);
		}

		babelHelpers.createClass(core, null, [{
			key: 'abstractMethod',

			/**
    * When defining a class Foo with an abstract method bar(), you can do:
    * Foo.prototype.bar = core.abstractMethod
    *
    * Now if a subclass of Foo fails to override bar(), an error will be thrown
    * when bar() is invoked.
    *
    * @type {!Function}
    * @throws {Error} when invoked to indicate the method should be overridden.
    */
			value: function abstractMethod() {
				throw Error('Unimplemented abstract method');
			}
		}, {
			key: 'collectSuperClassesProperty',

			/**
    * Loops constructor super classes collecting its properties values. If
    * property is not available on the super class `undefined` will be
    * collected as value for the class hierarchy position.
    * @param {!function()} constructor Class constructor.
    * @param {string} propertyName Property name to be collected.
    * @return {Array.<*>} Array of collected values.
    * TODO(*): Rethink superclass loop.
    */
			value: function collectSuperClassesProperty(constructor, propertyName) {
				var propertyValues = [constructor[propertyName]];
				while (constructor.__proto__ && !constructor.__proto__.isPrototypeOf(Function)) {
					constructor = constructor.__proto__;
					propertyValues.push(constructor[propertyName]);
				}
				return propertyValues;
			}
		}, {
			key: 'getUid',

			/**
    * Gets an unique id. If `opt_object` argument is passed, the object is
    * mutated with an unique id. Consecutive calls with the same object
    * reference won't mutate the object again, instead the current object uid
    * returns. See {@link core.UID_PROPERTY}.
    * @type {opt_object} Optional object to be mutated with the uid. If not
    *     specified this method only returns the uid.
    * @throws {Error} when invoked to indicate the method should be overridden.
    */
			value: function getUid(opt_object) {
				if (opt_object) {
					return opt_object[core.UID_PROPERTY] || (opt_object[core.UID_PROPERTY] = core.uniqueIdCounter_++);
				}
				return core.uniqueIdCounter_++;
			}
		}, {
			key: 'identityFunction',

			/**
    * The identity function. Returns its first argument.
    * @param {*=} opt_returnValue The single value that will be returned.
    * @return {?} The first argument.
    */
			value: function identityFunction(opt_returnValue) {
				return opt_returnValue;
			}
		}, {
			key: 'isBoolean',

			/**
    * Returns true if the specified value is a boolean.
    * @param {?} val Variable to test.
    * @return {boolean} Whether variable is boolean.
    */
			value: function isBoolean(val) {
				return typeof val === 'boolean';
			}
		}, {
			key: 'isDef',

			/**
    * Returns true if the specified value is not undefined.
    * @param {?} val Variable to test.
    * @return {boolean} Whether variable is defined.
    */
			value: function isDef(val) {
				return val !== undefined;
			}
		}, {
			key: 'isDefAndNotNull',

			/**
    * Returns true if value is not undefined or null.
    * @param {*} val
    * @return {Boolean}
    */
			value: function isDefAndNotNull(val) {
				return core.isDef(val) && !core.isNull(val);
			}
		}, {
			key: 'isDocument',

			/**
    * Returns true if value is a document.
    * @param {*} val
    * @return {Boolean}
    */
			value: function isDocument(val) {
				return val && typeof val === 'object' && val.nodeType === 9;
			}
		}, {
			key: 'isElement',

			/**
    * Returns true if value is a dom element.
    * @param {*} val
    * @return {Boolean}
    */
			value: function isElement(val) {
				return val && typeof val === 'object' && val.nodeType === 1;
			}
		}, {
			key: 'isFunction',

			/**
    * Returns true if the specified value is a function.
    * @param {?} val Variable to test.
    * @return {boolean} Whether variable is a function.
    */
			value: function isFunction(val) {
				return typeof val === 'function';
			}
		}, {
			key: 'isNull',

			/**
    * Returns true if value is null.
    * @param {*} val
    * @return {Boolean}
    */
			value: function isNull(val) {
				return val === null;
			}
		}, {
			key: 'isNumber',

			/**
    * Returns true if the specified value is a number.
    * @param {?} val Variable to test.
    * @return {boolean} Whether variable is a number.
    */
			value: function isNumber(val) {
				return typeof val === 'number';
			}
		}, {
			key: 'isWindow',

			/**
    * Returns true if value is a window.
    * @param {*} val
    * @return {Boolean}
    */
			value: function isWindow(val) {
				return val !== null && val === val.window;
			}
		}, {
			key: 'isObject',

			/**
    * Returns true if the specified value is an object. This includes arrays
    * and functions.
    * @param {?} val Variable to test.
    * @return {boolean} Whether variable is an object.
    */
			value: function isObject(val) {
				var type = typeof val;
				return type === 'object' && val !== null || type === 'function';
			}
		}, {
			key: 'isString',

			/**
    * Returns true if value is a string.
    * @param {*} val
    * @return {Boolean}
    */
			value: function isString(val) {
				return typeof val === 'string';
			}
		}, {
			key: 'mergeSuperClassesProperty',

			/**
    * Merges the values of a static property a class with the values of that
    * property for all its super classes, and stores it as a new static
    * property of that class. If the static property already existed, it won't
    * be recalculated.
    * @param {!function()} constructor Class constructor.
    * @param {string} propertyName Property name to be collected.
    * @param {function(*, *):*=} opt_mergeFn Function that receives an array filled
    *   with the values of the property for the current class and all its super classes.
    *   Should return the merged value to be stored on the current class.
    * @return {boolean} Returns true if merge happens, false otherwise.
    */
			value: function mergeSuperClassesProperty(constructor, propertyName, opt_mergeFn) {
				var mergedName = propertyName + '_MERGED';
				if (constructor.hasOwnProperty(mergedName)) {
					return false;
				}

				var merged = core.collectSuperClassesProperty(constructor, propertyName);
				if (opt_mergeFn) {
					merged = opt_mergeFn(merged);
				}
				constructor[mergedName] = merged;
				return true;
			}
		}, {
			key: 'nullFunction',

			/**
    * Null function used for default values of callbacks, etc.
    * @return {void} Nothing.
    */
			value: function nullFunction() {}
		}]);
		return core;
	})();

	/**
  * Unique id property prefix.
  * @type {String}
  * @protected
  */
	core.UID_PROPERTY = 'core_' + (Math.random() * 1e9 >>> 0);

	/**
  * Counter for unique id.
  * @type {Number}
  * @private
  */
	core.uniqueIdCounter_ = 1;

	this.steel.core = core;
}).call(this);
(function () {
	'use strict';

	var core = this.steel.core;

	var object = (function () {
		function object() {
			babelHelpers.classCallCheck(this, object);
		}

		babelHelpers.createClass(object, null, [{
			key: 'mixin',

			/**
    * Copies all the members of a source object to a target object.
    * @param {Object} target Target object.
    * @param {...Object} var_args The objects from which values will be copied.
    * @return {Object} Returns the target object reference.
    */
			value: function mixin(target) {
				var key, source;
				for (var i = 1; i < arguments.length; i++) {
					source = arguments[i];
					for (key in source) {
						target[key] = source[key];
					}
				}
				return target;
			}
		}, {
			key: 'getObjectByName',

			/**
    * Returns an object based on its fully qualified external name.
    * @param {string} name The fully qualified name.
    * @param {object=} opt_obj The object within which to look; default is
    *     <code>window</code>.
    * @return {?} The value (object or primitive) or, if not found, null.
    */
			value: function getObjectByName(name, opt_obj) {
				var parts = name.split('.');
				var cur = opt_obj || window;
				var part;
				while (part = parts.shift()) {
					if (core.isDefAndNotNull(cur[part])) {
						cur = cur[part];
					} else {
						return null;
					}
				}
				return cur;
			}
		}]);
		return object;
	})();

	this.steel.object = object;
}).call(this);
(function () {
	'use strict';

	/**
  * Disposable utility. When inherited provides the `dispose` function to its
  * subclass, which is responsible for disposing of any object references
  * when an instance won't be used anymore. Subclasses should override
  * `disposeInternal` to implement any specific disposing logic.
  * @constructor
  */

	var Disposable = (function () {
		function Disposable() {
			babelHelpers.classCallCheck(this, Disposable);

			/**
    * Flag indicating if this instance has already been disposed.
    * @type {boolean}
    * @protected
    */
			this.disposed_ = false;
		}

		babelHelpers.createClass(Disposable, [{
			key: 'dispose',

			/**
    * Disposes of this instance's object references. Calls `disposeInternal`.
    */
			value: function dispose() {
				if (!this.disposed_) {
					this.disposeInternal();
					this.disposed_ = true;
				}
			}
		}, {
			key: 'disposeInternal',

			/**
    * Subclasses should override this method to implement any specific
    * disposing logic (like clearing references and calling `dispose` on other
    * disposables).
    */
			value: function disposeInternal() {}
		}, {
			key: 'isDisposed',

			/**
    * Checks if this instance has already been disposed.
    * @return {boolean}
    */
			value: function isDisposed() {
				return this.disposed_;
			}
		}]);
		return Disposable;
	})();

	this.steel.Disposable = Disposable;
}).call(this);
(function () {
	'use strict';

	var Disposable = this.steel.Disposable;

	/**
  * EventHandle utility. Holds information about an event subscription, and
  * allows removing them easily.
  * EventHandle is a Disposable, but it's important to note that the
  * EventEmitter that created it is not the one responsible for disposing it.
  * That responsibility is for the code that holds a reference to it.
  * @param {!EventEmitter} emitter Emitter the event was subscribed to.
  * @param {string} event The name of the event that was subscribed to.
  * @param {!Function} listener The listener subscribed to the event.
  * @constructor
  * @extends {Disposable}
  */

	var EventHandle = (function (_Disposable) {
		function EventHandle(emitter, event, listener) {
			babelHelpers.classCallCheck(this, EventHandle);

			babelHelpers.get(Object.getPrototypeOf(EventHandle.prototype), 'constructor', this).call(this);

			/**
    * The EventEmitter instance that the event was subscribed to.
    * @type {EventEmitter}
    * @protected
    */
			this.emitter_ = emitter;

			/**
    * The name of the event that was subscribed to.
    * @type {string}
    * @protected
    */
			this.event_ = event;

			/**
    * The listener subscribed to the event.
    * @type {Function}
    * @protected
    */
			this.listener_ = listener;
		}

		babelHelpers.inherits(EventHandle, _Disposable);
		babelHelpers.createClass(EventHandle, [{
			key: 'disposeInternal',

			/**
    * Disposes of this instance's object references.
    * @override
    */
			value: function disposeInternal() {
				this.removeListener();
				this.emitter_ = null;
				this.listener_ = null;
			}
		}, {
			key: 'removeListener',

			/**
    * Removes the listener subscription from the emitter.
    */
			value: function removeListener() {
				if (!this.emitter_.isDisposed()) {
					this.emitter_.removeListener(this.event_, this.listener_);
				}
			}
		}]);
		return EventHandle;
	})(Disposable);

	this.steel.EventHandle = EventHandle;
}).call(this);
(function () {
	'use strict';

	var EventHandle = this.steel.EventHandle;

	/**
  * This is a special EventHandle, that is responsible for dom events, instead
  * of EventEmitter events.
  * @param {!EventEmitter} emitter Emitter the event was subscribed to.
  * @param {string} event The name of the event that was subscribed to.
  * @param {!Function} listener The listener subscribed to the event.
  * @constructor
  * @extends {EventHandle}
  */

	var DomEventHandle = (function (_EventHandle) {
		function DomEventHandle(emitter, event, listener) {
			babelHelpers.classCallCheck(this, DomEventHandle);

			babelHelpers.get(Object.getPrototypeOf(DomEventHandle.prototype), 'constructor', this).call(this, emitter, event, listener);
		}

		babelHelpers.inherits(DomEventHandle, _EventHandle);
		babelHelpers.createClass(DomEventHandle, [{
			key: 'removeListener',

			/**
    * @inheritDoc
    */
			value: function removeListener() {
				this.emitter_.removeEventListener(this.event_, this.listener_);
			}
		}]);
		return DomEventHandle;
	})(EventHandle);

	this.steel.DomEventHandle = DomEventHandle;
}).call(this);
(function () {
	'use strict';

	var core = this.steel.core;
	var object = this.steel.object;
	var DomEventHandle = this.steel.DomEventHandle;

	var dom = (function () {
		function dom() {
			babelHelpers.classCallCheck(this, dom);
		}

		babelHelpers.createClass(dom, null, [{
			key: 'addClasses',

			/**
    * Adds the requested CSS classes to an element.
    * @param {!Element} element The element to add CSS classes to.
    * @param {string} classes CSS classes to add.
    */
			value: function addClasses(element, classes) {
				if (!core.isObject(element) || !core.isString(classes)) {
					return;
				}

				if ('classList' in element) {
					dom.addClassesWithNative_(element, classes);
				} else {
					dom.addClassesWithoutNative_(element, classes);
				}
			}
		}, {
			key: 'addClassesWithNative_',

			/**
    * Adds the requested CSS classes to an element using classList.
    * @param {!Element} element The element to add CSS classes to.
    * @param {string} classes CSS classes to add.
    * @protected
    */
			value: function addClassesWithNative_(element, classes) {
				classes.split(' ').forEach(function (className) {
					element.classList.add(className);
				});
			}
		}, {
			key: 'addClassesWithoutNative_',

			/**
    * Adds the requested CSS classes to an element without using classList.
    * @param {!Element} element The element to add CSS classes to.
    * @param {string} classes CSS classes to add.
    * @protected
    */
			value: function addClassesWithoutNative_(element, classes) {
				var elementClassName = ' ' + element.className + ' ';
				var classesToAppend = '';

				classes = classes.split(' ');

				for (var i = 0; i < classes.length; i++) {
					var className = classes[i];

					if (elementClassName.indexOf(' ' + className + ' ') === -1) {
						classesToAppend += ' ' + className;
					}
				}

				if (classesToAppend) {
					element.className = element.className + classesToAppend;
				}
			}
		}, {
			key: 'append',

			/**
    * Appends a child node with text or other nodes to a parent node. If
    * child is a HTML string it will be automatically converted to a document
    * fragment before appending it to the parent.
    * @param {!Element} parent The node to append nodes to.
    * @param {!Element|String} child The thing to append to the parent.
    * @return {!Element} The appended child.
    */
			value: function append(parent, child) {
				if (core.isString(child)) {
					child = dom.buildFragment(child);
				}
				return parent.appendChild(child);
			}
		}, {
			key: 'buildFragment',

			/**
    * Helper for converting a HTML string into a document fragment.
    * @param {string} htmlString The HTML string to convert.
    * @return {!Element} The resulting document fragment.
    */
			value: function buildFragment(htmlString) {
				var tempDiv = document.createElement('div');
				tempDiv.innerHTML = '<br>' + htmlString;
				tempDiv.removeChild(tempDiv.firstChild);

				var fragment = document.createDocumentFragment();
				while (tempDiv.firstChild) {
					fragment.appendChild(tempDiv.firstChild);
				}
				return fragment;
			}
		}, {
			key: 'delegate',

			/**
    * Listens to the specified event on the given DOM element, but only calls the
    * callback with the event when it triggered by elements that match the given
    * selector.
    * @param {!Element} element The container DOM element to listen to the event on.
    * @param {string} eventName The name of the event to listen to.
    * @param {string} selector The selector that matches the child elements that
    *   the event should be triggered for.
    * @param {!function(!Object)} callback Function to be called when the event is
    *   triggered. It will receive the normalized event object.
    * @return {!DomEventHandle} Can be used to remove the listener.
    */
			value: function delegate(element, eventName, selector, callback) {
				var customConfig = dom.customEvents[eventName];
				if (customConfig && customConfig.delegate) {
					eventName = customConfig.originalEvent;
					callback = customConfig.handler.bind(customConfig, callback);
				}
				return dom.on(element, eventName, dom.handleDelegateEvent_.bind(null, selector, callback));
			}
		}, {
			key: 'enterDocument',

			/**
    * Inserts node in document as last element.
    * @param {Element} node Element to remove children from.
    */
			value: function enterDocument(node) {
				dom.append(document.body, node);
			}
		}, {
			key: 'exitDocument',

			/**
    * Removes node from document.
    * @param {Element} node Element to remove children from.
    */
			value: function exitDocument(node) {
				if (node.parentNode) {
					node.parentNode.removeChild(node);
				}
			}
		}, {
			key: 'handleDelegateEvent_',

			/**
    * This is called when an event is triggered by a delegate listener (see
    * `dom.delegate` for more details).
    * @param {string} selector The selector or element that matches the child
    *   elements that the event should be triggered for.
    * @param {!function(!Object)} callback Function to be called when the event
    *   is triggered. It will receive the normalized event object.
    * @param {!Event} event The event payload.
    * @return {boolean} False if at least one of the triggered callbacks returns
    *   false, or true otherwise.
    */
			value: function handleDelegateEvent_(selector, callback, event) {
				dom.normalizeDelegateEvent_(event);

				var currentElement = event.target;
				var returnValue = true;

				while (currentElement && !event.stopped) {
					if (core.isString(selector) && dom.match(currentElement, selector)) {
						event.delegateTarget = currentElement;
						returnValue &= callback(event);
					}
					currentElement = currentElement.parentNode;
				}

				return returnValue;
			}
		}, {
			key: 'hasClass',

			/**
    * Checks if the given element has the requested css class.
    * @param {!Element} element
    * @param {string} className
    * @return {boolean}
    */
			value: function hasClass(element, className) {
				if ('classList' in element) {
					return dom.hasClassWithNative_(element, className);
				} else {
					return dom.hasClassWithoutNative_(element, className);
				}
			}
		}, {
			key: 'hasClassWithNative_',

			/**
    * Checks if the given element has the requested css class using classList.
    * @param {!Element} element
    * @param {string} className
    * @return {boolean}
    * @protected
    */
			value: function hasClassWithNative_(element, className) {
				return element.classList.contains(className);
			}
		}, {
			key: 'hasClassWithoutNative_',

			/**
    * Checks if the given element has the requested css class without using classList.
    * @param {!Element} element
    * @param {string} className
    * @return {boolean}
    * @protected
    */
			value: function hasClassWithoutNative_(element, className) {
				return (' ' + element.className + ' ').indexOf(' ' + className + ' ') >= 0;
			}
		}, {
			key: 'isEmpty',

			/**
    * Checks if the given element is empty or not.
    * @param {!Element} element
    * @return {boolean}
    */
			value: function isEmpty(element) {
				return element.childNodes.length === 0;
			}
		}, {
			key: 'match',

			/**
    * Check if an element matches a given selector.
    * @param {Element} element
    * @param {string} selector
    * @return {boolean}
    */
			value: function match(element, selector) {
				if (!element || element.nodeType !== 1) {
					return false;
				}

				var p = Element.prototype;
				var m = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector || p.oMatchesSelector;
				if (m) {
					return m.call(element, selector);
				}

				return dom.matchFallback_(element, selector);
			}
		}, {
			key: 'matchFallback_',

			/**
    * Check if an element matches a given selector, using an internal implementation
    * instead of calling existing javascript functions.
    * @param {Element} element
    * @param {string} selector
    * @return {boolean}
    * @protected
    */
			value: function matchFallback_(element, selector) {
				var nodes = document.querySelectorAll(selector, element.parentNode);
				for (var i = 0; i < nodes.length; ++i) {
					if (nodes[i] === element) {
						return true;
					}
				}
				return false;
			}
		}, {
			key: 'normalizeDelegateEvent_',

			/**
    * Normalizes the event payload for delegate listeners.
    * @param {!Event} event
    */
			value: function normalizeDelegateEvent_(event) {
				event.stopPropagation = dom.stopPropagation_;
				event.stopImmediatePropagation = dom.stopImmediatePropagation_;
			}
		}, {
			key: 'on',

			/**
    * Listens to the specified event on the given DOM element. This function normalizes
    * DOM event payloads and functions so they'll work the same way on all supported
    * browsers.
    * @param {!Element} element The DOM element to listen to the event on.
    * @param {string} eventName The name of the event to listen to.
    * @param {!function(!Object)} callback Function to be called when the event is
    *   triggered. It will receive the normalized event object.
    * @return {!DomEventHandle} Can be used to remove the listener.
    */
			value: function on(element, eventName, callback) {
				var customConfig = dom.customEvents[eventName];
				if (customConfig && customConfig.event) {
					eventName = customConfig.originalEvent;
					callback = customConfig.handler.bind(customConfig, callback);
				}
				element.addEventListener(eventName, callback);
				return new DomEventHandle(element, eventName, callback);
			}
		}, {
			key: 'once',

			/**
    * Listens to the specified event on the given DOM element once. This
    * function normalizes DOM event payloads and functions so they'll work the
    * same way on all supported browsers.
    * @param {!Element} element The DOM element to listen to the event on.
    * @param {string} eventName The name of the event to listen to.
    * @param {!function(!Object)} callback Function to be called when the event
    *   is triggered. It will receive the normalized event object.
    * @return {!DomEventHandle} Can be used to remove the listener.
    */
			value: function once(element, eventName, callback) {
				var domEventHandle = this.on(element, eventName, function () {
					domEventHandle.removeListener();
					return callback.apply(this, arguments);
				});
				return domEventHandle;
			}
		}, {
			key: 'registerCustomEvent',

			/**
    * Registers a custom event.
    * @param {string} eventName The name of the custom event.
    * @param {!Object} customConfig An object with information about how the event
    *   should be handled.
    */
			value: function registerCustomEvent(eventName, customConfig) {
				dom.customEvents[eventName] = customConfig;
			}
		}, {
			key: 'removeChildren',

			/**
    * Removes all the child nodes on a DOM node.
    * @param {Element} node Element to remove children from.
    */
			value: function removeChildren(node) {
				var child;
				while (child = node.firstChild) {
					node.removeChild(child);
				}
			}
		}, {
			key: 'removeClasses',

			/**
    * Removes the requested CSS classes from an element.
    * @param {!Element} element The element to remove CSS classes from.
    * @param {string} classes CSS classes to remove.
    */
			value: function removeClasses(element, classes) {
				if (!core.isObject(element) || !core.isString(classes)) {
					return;
				}

				if ('classList' in element) {
					dom.removeClassesWithNative_(element, classes);
				} else {
					dom.removeClassesWithoutNative_(element, classes);
				}
			}
		}, {
			key: 'removeClassesWithNative_',

			/**
    * Removes the requested CSS classes from an element using classList.
    * @param {!Element} element The element to remove CSS classes from.
    * @param {string} classes CSS classes to remove.
    * @protected
    */
			value: function removeClassesWithNative_(element, classes) {
				classes.split(' ').forEach(function (className) {
					element.classList.remove(className);
				});
			}
		}, {
			key: 'removeClassesWithoutNative_',

			/**
    * Removes the requested CSS classes from an element without using classList.
    * @param {!Element} element The element to remove CSS classes from.
    * @param {string} classes CSS classes to remove.
    * @protected
    */
			value: function removeClassesWithoutNative_(element, classes) {
				var elementClassName = ' ' + element.className + ' ';

				classes = classes.split(' ');

				for (var i = 0; i < classes.length; i++) {
					elementClassName = elementClassName.replace(' ' + classes[i] + ' ', ' ');
				}

				element.className = elementClassName.trim();
			}
		}, {
			key: 'replace',

			/**
    * Replaces the first element with the second.
    * @param {Element} element1
    * @param {Element} element2
    */
			value: function replace(element1, element2) {
				if (element1 && element2 && element1 !== element2) {
					element1.parentNode.insertBefore(element2, element1);
					element1.parentNode.removeChild(element1);
				}
			}
		}, {
			key: 'stopImmediatePropagation_',

			/**
    * The function that replaces `stopImmediatePropagation_` for events.
    * @protected
    */
			value: function stopImmediatePropagation_() {
				this.stopped = true;
				Event.prototype.stopImmediatePropagation.call(this);
			}
		}, {
			key: 'stopPropagation_',

			/**
    * The function that replaces `stopPropagation` for events.
    * @protected
    */
			value: function stopPropagation_() {
				this.stopped = true;
				Event.prototype.stopPropagation.call(this);
			}
		}, {
			key: 'supportsEvent',

			/**
    * Checks if the given element supports the given event type.
    * @param {!Element|string} element The DOM element or element tag name to check.
    * @param {string} eventName The name of the event to check.
    * @return {boolean}
    */
			value: function supportsEvent(element, eventName) {
				if (dom.customEvents[eventName]) {
					return true;
				}

				if (core.isString(element)) {
					if (!elementsByTag[element]) {
						elementsByTag[element] = document.createElement(element);
					}
					element = elementsByTag[element];
				}
				return 'on' + eventName in element;
			}
		}, {
			key: 'toElement',

			/**
    * Converts the given argument to a DOM element. Strings are assumed to
    * be selectors, and so a matched element will be returned. If the arg
    * is already a DOM element it will be the return value.
    * @param {string|Element|Document} selectorOrElement
    * @return {Element} The converted element, or null if none was found.
    */
			value: function toElement(selectorOrElement) {
				if (core.isElement(selectorOrElement) || core.isDocument(selectorOrElement)) {
					return selectorOrElement;
				} else if (core.isString(selectorOrElement)) {
					if (selectorOrElement[0] === '#' && selectorOrElement.indexOf(' ') === -1) {
						return document.getElementById(selectorOrElement.substr(1));
					} else {
						return document.querySelector(selectorOrElement);
					}
				} else {
					return null;
				}
			}
		}, {
			key: 'toggleClasses',

			/**
    * Adds or removes one or more classes from an element. If any of the classes
    * is present, it will be removed from the element, or added otherwise.
    * @param {!Element} element The element which classes will be toggled.
    * @param {string} classes The classes which have to added or removed from the element.
    */
			value: function toggleClasses(element, classes) {
				if (!core.isObject(element) || !core.isString(classes)) {
					return;
				}

				if ('classList' in element) {
					dom.toggleClassesWithNative_(element, classes);
				} else {
					dom.toggleClassesWithoutNative_(element, classes);
				}
			}
		}, {
			key: 'toggleClassesWithNative_',

			/**
    * Adds or removes one or more classes from an element using classList.
    * If any of the classes is present, it will be removed from the element,
    * or added otherwise.
    * @param {!Element} element The element which classes will be toggled.
    * @param {string} classes The classes which have to added or removed from the element.
    */
			value: function toggleClassesWithNative_(element, classes) {
				classes.split(' ').forEach(function (className) {
					element.classList.toggle(className);
				});
			}
		}, {
			key: 'toggleClassesWithoutNative_',

			/**
    * Adds or removes one or more classes from an element without using classList.
    * If any of the classes is present, it will be removed from the element,
    * or added otherwise.
    * @param {!Element} element The element which classes will be toggled.
    * @param {string} classes The classes which have to added or removed from the element.
    */
			value: function toggleClassesWithoutNative_(element, classes) {
				var elementClassName = ' ' + element.className + ' ';

				classes = classes.split(' ');

				for (var i = 0; i < classes.length; i++) {
					var className = ' ' + classes[i] + ' ';
					var classIndex = elementClassName.indexOf(className);

					if (classIndex === -1) {
						elementClassName = elementClassName + classes[i] + ' ';
					} else {
						elementClassName = elementClassName.substring(0, classIndex) + ' ' + elementClassName.substring(classIndex + className.length);
					}
				}

				element.className = elementClassName.trim();
			}
		}, {
			key: 'triggerEvent',

			/**
    * Triggers the specified event on the given element.
    * NOTE: This should mostly be used for testing, not on real code.
    * @param {!Element} element The node that should trigger the event.
    * @param {string} eventName The name of the event to be triggred.
    * @param {Object=} opt_eventObj An object with data that should be on the
    *   triggered event's payload.
    */
			value: function triggerEvent(element, eventName, opt_eventObj) {
				var eventObj = document.createEvent('HTMLEvents');
				eventObj.initEvent(eventName, true, true);
				object.mixin(eventObj, opt_eventObj);
				element.dispatchEvent(eventObj);
			}
		}]);
		return dom;
	})();

	var elementsByTag = {};
	dom.customEvents = {};

	this.steel.dom = dom;
}).call(this);
(function () {
	'use strict';

	var array = (function () {
		function array() {
			babelHelpers.classCallCheck(this, array);
		}

		babelHelpers.createClass(array, null, [{
			key: 'equal',

			/**
    * Checks if the given arrays have the same content.
    * @param {!Array<*>} arr1
    * @param {!Array<*>} arr2
    * @return {boolean}
    */
			value: function equal(arr1, arr2) {
				for (var i = 0; i < arr1.length; i++) {
					if (arr1[i] !== arr2[i]) {
						return false;
					}
				}
				return arr1.length === arr2.length;
			}
		}, {
			key: 'firstDefinedValue',

			/**
    * Returns the first value in the given array that isn't undefined.
    * @param {!Array} arr
    * @return {*}
    */
			value: function firstDefinedValue(arr) {
				for (var i = 0; i < arr.length; i++) {
					if (arr[i] !== undefined) {
						return arr[i];
					}
				}
			}
		}, {
			key: 'flatten',

			/**
    * Transforms the input nested array to become flat.
    * @param {Array.<*|Array.<*>>} arr Nested array to flatten.
    * @param {Array.<*>} opt_output Optional output array.
    * @return {Array.<*>} Flat array.
    */
			value: function flatten(arr, opt_output) {
				var output = opt_output || [];
				for (var i = 0; i < arr.length; i++) {
					if (Array.isArray(arr[i])) {
						array.flatten(arr[i], output);
					} else {
						output.push(arr[i]);
					}
				}
				return output;
			}
		}, {
			key: 'remove',

			/**
    * Removes the first occurrence of a particular value from an array.
    * @param {Array.<T>} arr Array from which to remove value.
    * @param {T} obj Object to remove.
    * @return {boolean} True if an element was removed.
    * @template T
    */
			value: function remove(arr, obj) {
				var i = arr.indexOf(obj);
				var rv;
				if (rv = i >= 0) {
					array.removeAt(arr, i);
				}
				return rv;
			}
		}, {
			key: 'removeAt',

			/**
    * Removes from an array the element at index i
    * @param {Array} arr Array or array like object from which to remove value.
    * @param {number} i The index to remove.
    * @return {boolean} True if an element was removed.
    */
			value: function removeAt(arr, i) {
				return Array.prototype.splice.call(arr, i, 1).length === 1;
			}
		}]);
		return array;
	})();

	this.steel.array = array;
}).call(this);
(function () {
	'use strict';

	var string = (function () {
		function string() {
			babelHelpers.classCallCheck(this, string);
		}

		babelHelpers.createClass(string, null, [{
			key: 'collapseBreakingSpaces',

			/**
    * Removes the breaking spaces from the left and right of the string and
    * collapses the sequences of breaking spaces in the middle into single spaces.
    * The original and the result strings render the same way in HTML.
    * @param {string} str A string in which to collapse spaces.
    * @return {string} Copy of the string with normalized breaking spaces.
    */
			value: function collapseBreakingSpaces(str) {
				return str.replace(/[\t\r\n ]+/g, ' ').replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, '');
			}
		}, {
			key: 'hashCode',

			/**
    * Calculates the hashcode for a string. The hashcode value is computed by
    * the sum algorithm: s[0]*31^(n-1) + s[1]*31^(n-2) + ... + s[n-1]. A nice
    * property of using 31 prime is that the multiplication can be replaced by
    * a shift and a subtraction for better performance: 31*i == (i<<5)-i.
    * Modern VMs do this sort of optimization automatically.
    * @param {String} val Target string.
    * @return {Number} Returns the string hashcode.
    */
			value: function hashCode(val) {
				var hash = 0;
				for (var i = 0, len = val.length; i < len; i++) {
					hash = 31 * hash + val.charCodeAt(i);
					hash %= 0x100000000;
				}
				return hash;
			}
		}, {
			key: 'replaceInterval',

			/**
    * Replaces interval into the string with specified value, e.g.
    * `replaceInterval("abcde", 1, 4, "")` returns "ae".
    * @param {string} str The input string.
    * @param {Number} start Start interval position to be replaced.
    * @param {Number} end End interval position to be replaced.
    * @param {string} value The value that replaces the specified interval.
    * @return {string}
    */
			value: function replaceInterval(str, start, end, value) {
				return str.substring(0, start) + value + str.substring(end);
			}
		}]);
		return string;
	})();

	this.steel.string = string;
}).call(this);
(function () {
	'use strict';

	var dom = this.steel.dom;
	var string = this.steel.string;

	/**
  * Class with static methods responsible for doing browser feature checks.
  */

	var features = (function () {
		function features() {
			babelHelpers.classCallCheck(this, features);
		}

		babelHelpers.createClass(features, null, [{
			key: 'checkAnimationEventName',

			/**
    * Some browsers still supports prefixed animation events. This method can
    * be used to retrieve the current browser event name for both, animation
    * and transition.
    * @return {object}
    */
			value: function checkAnimationEventName() {
				if (features.animationEventName_ === undefined) {
					features.animationEventName_ = {
						animation: features.checkAnimationEventName_('animation'),
						transition: features.checkAnimationEventName_('transition')
					};
				}
				return features.animationEventName_;
			}
		}, {
			key: 'checkAnimationEventName_',

			/**
    * @protected
    * @param {string} type Type to test: animation, transition.
    * @return {string} Browser event name.
    */
			value: function checkAnimationEventName_(type) {
				var prefixes = ['Webkit', 'MS', 'O', ''];
				var typeTitleCase = string.replaceInterval(type, 0, 1, type.substring(0, 1).toUpperCase());
				var suffixes = [typeTitleCase + 'End', typeTitleCase + 'End', typeTitleCase + 'End', type + 'end'];
				for (var i = 0; i < prefixes.length; i++) {
					if (features.animationElement_.style[prefixes[i] + typeTitleCase] !== undefined) {
						return prefixes[i].toLowerCase() + suffixes[i];
					}
				}
				return type + 'end';
			}
		}, {
			key: 'checkAttrOrderChange',

			/**
    * Some browsers (like IE9) change the order of element attributes, when html
    * is rendered. This method can be used to check if this behavior happens on
    * the current browser.
    * @return {boolean}
    */
			value: function checkAttrOrderChange() {
				if (features.attrOrderChange_ === undefined) {
					var originalContent = '<div data-component="" data-ref=""></div>';
					var element = document.createElement('div');
					dom.append(element, originalContent);
					features.attrOrderChange_ = originalContent !== element.innerHTML;
				}
				return features.attrOrderChange_;
			}
		}]);
		return features;
	})();

	features.animationElement_ = document.createElement('div');
	features.animationEventName_ = undefined;
	features.attrOrderChange_ = undefined;

	this.steel.features = features;
}).call(this);
(function () {
	'use strict';

	var core = this.steel.core;
	var string = this.steel.string;

	var html = (function () {
		function html() {
			babelHelpers.classCallCheck(this, html);
		}

		babelHelpers.createClass(html, null, [{
			key: 'compress',

			/**
    * Minifies given HTML source by removing extra white spaces, comments and
    * other unneeded characters without breaking the content structure. As a
    * result HTML become smaller in size.
    * - Contents within <code>, <pre>, <script>, <style>, <textarea> and
    *   conditional comments tags are preserved.
    * - Comments are removed.
    * - Conditional comments are preserved.
    * - Breaking spaces are collapsed into a single space.
    * - Unneeded spaces inside tags (around = and before />) are removed.
    * - Spaces between tags are removed, even from inline-block elements.
    * - Spaces surrounding tags are removed.
    * - DOCTYPE declaration is simplified to <!DOCTYPE html>.
    * - Does not remove default attributes from <script>, <style>, <link>,
    *   <form>, <input>.
    * - Does not remove values from boolean tag attributes.
    * - Does not remove "javascript:" from in-line event handlers.
    * - Does not remove http:// and https:// protocols.
    * @param {string} htmlString Input HTML to be compressed.
    * @return {string} Compressed version of the HTML.
    */
			value: function compress(htmlString) {
				var preserved = {};
				htmlString = html.preserveBlocks_(htmlString, preserved);
				htmlString = html.simplifyDoctype_(htmlString);
				htmlString = html.removeComments_(htmlString);
				htmlString = html.removeIntertagSpaces_(htmlString);
				htmlString = html.collapseBreakingSpaces_(htmlString);
				htmlString = html.removeSpacesInsideTags_(htmlString);
				htmlString = html.removeSurroundingSpaces_(htmlString);
				htmlString = html.returnBlocks_(htmlString, preserved);
				return htmlString.trim();
			}
		}, {
			key: 'collapseBreakingSpaces_',

			/**
    * Collapses breaking spaces into a single space.
    * @param {string} htmlString
    * @return {string}
    * @protected
    */
			value: function collapseBreakingSpaces_(htmlString) {
				return string.collapseBreakingSpaces(htmlString);
			}
		}, {
			key: 'lookupPossibleTagBoundary_',

			/**
    * Searches for first occurrence of the specified open tag string pattern
    * and from that point finds next ">" position, identified as possible tag
    * end position.
    * @param {string} htmlString
    * @param {string} openTag Open tag string pattern without open tag ending
    *     character, e.g. "<textarea" or "<code".
    * @return {string}
    * @protected
    */
			value: function lookupPossibleTagBoundary_(htmlString, openTag) {
				var tagPos = htmlString.indexOf(openTag);
				if (tagPos > -1) {
					tagPos += htmlString.substring(tagPos).indexOf('>') + 1;
				}
				return tagPos;
			}
		}, {
			key: 'preserveBlocks_',

			/**
    * Preserves contents inside any <code>, <pre>, <script>, <style>,
    * <textarea> and conditional comment tags. When preserved, original content
    * are replaced with an unique generated block id and stored into
    * `preserved` map.
    * @param {string} htmlString
    * @param {Object} preserved Object to preserve the content indexed by an
    *     unique generated block id.
    * @return {html} The preserved HTML.
    * @protected
    */
			value: function preserveBlocks_(htmlString, preserved) {
				htmlString = html.preserveOuterHtml_(htmlString, '<!--[if', '<![endif]-->', preserved);
				htmlString = html.preserveInnerHtml_(htmlString, '<code', '</code', preserved);
				htmlString = html.preserveInnerHtml_(htmlString, '<pre', '</pre', preserved);
				htmlString = html.preserveInnerHtml_(htmlString, '<script', '</script', preserved);
				htmlString = html.preserveInnerHtml_(htmlString, '<style', '</style', preserved);
				htmlString = html.preserveInnerHtml_(htmlString, '<textarea', '</textarea', preserved);
				return htmlString;
			}
		}, {
			key: 'preserveInnerHtml_',

			/**
    * Preserves inner contents inside the specified tag. When preserved,
    * original content are replaced with an unique generated block id and
    * stored into `preserved` map.
    * @param {string} htmlString
    * @param {string} openTag Open tag string pattern without open tag ending
    *     character, e.g. "<textarea" or "<code".
    * @param {string} closeTag Close tag string pattern without close tag
    *     ending character, e.g. "</textarea" or "</code".
    * @param {Object} preserved Object to preserve the content indexed by an
    *     unique generated block id.
    * @return {html} The preserved HTML.
    * @protected
    */
			value: function preserveInnerHtml_(htmlString, openTag, closeTag, preserved) {
				var tagPosEnd = html.lookupPossibleTagBoundary_(htmlString, openTag);
				while (tagPosEnd > -1) {
					var tagEndPos = htmlString.indexOf(closeTag);
					htmlString = html.preserveInterval_(htmlString, tagPosEnd, tagEndPos, preserved);
					htmlString = htmlString.replace(openTag, '%%%~1~%%%');
					htmlString = htmlString.replace(closeTag, '%%%~2~%%%');
					tagPosEnd = html.lookupPossibleTagBoundary_(htmlString, openTag);
				}
				htmlString = htmlString.replace(/%%%~1~%%%/g, openTag);
				htmlString = htmlString.replace(/%%%~2~%%%/g, closeTag);
				return htmlString;
			}
		}, {
			key: 'preserveInterval_',

			/**
    * Preserves interval of the specified HTML into the preserved map replacing
    * original contents with an unique generated id.
    * @param {string} htmlString
    * @param {Number} start Start interval position to be replaced.
    * @param {Number} end End interval position to be replaced.
    * @param {Object} preserved Object to preserve the content indexed by an
    *     unique generated block id.
    * @return {string} The HTML with replaced interval.
    * @protected
    */
			value: function preserveInterval_(htmlString, start, end, preserved) {
				var blockId = '%%%~BLOCK~' + core.getUid() + '~%%%';
				preserved[blockId] = htmlString.substring(start, end);
				return string.replaceInterval(htmlString, start, end, blockId);
			}
		}, {
			key: 'preserveOuterHtml_',

			/**
    * Preserves outer contents inside the specified tag. When preserved,
    * original content are replaced with an unique generated block id and
    * stored into `preserved` map.
    * @param {string} htmlString
    * @param {string} openTag Open tag string pattern without open tag ending
    *     character, e.g. "<textarea" or "<code".
    * @param {string} closeTag Close tag string pattern without close tag
    *     ending character, e.g. "</textarea" or "</code".
    * @param {Object} preserved Object to preserve the content indexed by an
    *     unique generated block id.
    * @return {html} The preserved HTML.
    * @protected
    */
			value: function preserveOuterHtml_(htmlString, openTag, closeTag, preserved) {
				var tagPos = htmlString.indexOf(openTag);
				while (tagPos > -1) {
					var tagEndPos = htmlString.indexOf(closeTag) + closeTag.length;
					htmlString = html.preserveInterval_(htmlString, tagPos, tagEndPos, preserved);
					tagPos = htmlString.indexOf(openTag);
				}
				return htmlString;
			}
		}, {
			key: 'removeComments_',

			/**
    * Removes all comments of the HTML. Including conditional comments and
    * "<![CDATA[" blocks.
    * @param {string} htmlString
    * @return {string} The HTML without comments.
    * @protected
    */
			value: function removeComments_(htmlString) {
				var preserved = {};
				htmlString = html.preserveOuterHtml_(htmlString, '<![CDATA[', ']]>', preserved);
				htmlString = html.preserveOuterHtml_(htmlString, '<!--', '-->', preserved);
				htmlString = html.replacePreservedBlocks_(htmlString, preserved, '');
				return htmlString;
			}
		}, {
			key: 'removeIntertagSpaces_',

			/**
    * Removes spaces between tags, even from inline-block elements.
    * @param {string} htmlString
    * @return {string} The HTML without spaces between tags.
    * @protected
    */
			value: function removeIntertagSpaces_(htmlString) {
				htmlString = htmlString.replace(html.Patterns.INTERTAG_CUSTOM_CUSTOM, '~%%%%%%~');
				htmlString = htmlString.replace(html.Patterns.INTERTAG_CUSTOM_TAG, '~%%%<');
				htmlString = htmlString.replace(html.Patterns.INTERTAG_TAG, '><');
				htmlString = htmlString.replace(html.Patterns.INTERTAG_TAG_CUSTOM, '>%%%~');
				return htmlString;
			}
		}, {
			key: 'removeSpacesInsideTags_',

			/**
    * Removes spaces inside tags.
    * @param {string} htmlString
    * @return {string} The HTML without spaces inside tags.
    * @protected
    */
			value: function removeSpacesInsideTags_(htmlString) {
				htmlString = htmlString.replace(html.Patterns.TAG_END_SPACES, '$1$2');
				htmlString = htmlString.replace(html.Patterns.TAG_QUOTE_SPACES, '=$1$2$3');
				return htmlString;
			}
		}, {
			key: 'removeSurroundingSpaces_',

			/**
    * Removes spaces surrounding tags.
    * @param {string} htmlString
    * @return {string} The HTML without spaces surrounding tags.
    * @protected
    */
			value: function removeSurroundingSpaces_(htmlString) {
				return htmlString.replace(html.Patterns.SURROUNDING_SPACES, '$1');
			}
		}, {
			key: 'replacePreservedBlocks_',

			/**
    * Restores preserved map keys inside the HTML. Note that the passed HTML
    * should contain the unique generated block ids to be replaced.
    * @param {string} htmlString
    * @param {Object} preserved Object to preserve the content indexed by an
    *     unique generated block id.
    * @param {string} replaceValue The value to replace any block id inside the
    * HTML.
    * @return {string}
    * @protected
    */
			value: function replacePreservedBlocks_(htmlString, preserved, replaceValue) {
				for (var blockId in preserved) {
					htmlString = htmlString.replace(blockId, replaceValue);
				}
				return htmlString;
			}
		}, {
			key: 'simplifyDoctype_',

			/**
    * Simplifies DOCTYPE declaration to <!DOCTYPE html>.
    * @param {string} htmlString
    * @return {string}
    * @protected
    */
			value: function simplifyDoctype_(htmlString) {
				var preserved = {};
				htmlString = html.preserveOuterHtml_(htmlString, '<!DOCTYPE', '>', preserved);
				htmlString = html.replacePreservedBlocks_(htmlString, preserved, '<!DOCTYPE html>');
				return htmlString;
			}
		}, {
			key: 'returnBlocks_',

			/**
    * Restores preserved map original contents inside the HTML. Note that the
    * passed HTML should contain the unique generated block ids to be restored.
    * @param {string} htmlString
    * @param {Object} preserved Object to preserve the content indexed by an
    *     unique generated block id.
    * @return {string}
    * @protected
    */
			value: function returnBlocks_(htmlString, preserved) {
				for (var blockId in preserved) {
					htmlString = htmlString.replace(blockId, preserved[blockId]);
				}
				return htmlString;
			}
		}]);
		return html;
	})();

	/**
  * HTML regex patterns.
  * @enum {RegExp}
  * @protected
  */
	html.Patterns = {
		/**
   * @type {RegExp}
   */
		INTERTAG_CUSTOM_CUSTOM: /~%%%\s+%%%~/g,

		/**
   * @type {RegExp}
   */
		INTERTAG_TAG_CUSTOM: />\s+%%%~/g,

		/**
   * @type {RegExp}
   */
		INTERTAG_CUSTOM_TAG: /~%%%\s+</g,

		/**
   * @type {RegExp}
   */
		INTERTAG_TAG: />\s+</g,

		/**
   * @type {RegExp}
   */
		SURROUNDING_SPACES: /\s*(<[^>]+>)\s*/g,

		/**
   * @type {RegExp}
   */
		TAG_END_SPACES: /(<(?:[^>]+?))(?:\s+?)(\/?>)/g,

		/**
   * @type {RegExp}
   */
		TAG_QUOTE_SPACES: /\s*=\s*(["']?)\s*(.*?)\s*(\1)/g
	};

	this.steel.html = html;
}).call(this);
(function () {
	'use strict';

	var core = this.steel.core;
	var Disposable = this.steel.Disposable;
	var EventHandle = this.steel.EventHandle;

	/**
  * EventEmitter utility.
  * @constructor
  * @extends {Disposable}
  */

	var EventEmitter = (function (_Disposable) {
		function EventEmitter() {
			babelHelpers.classCallCheck(this, EventEmitter);

			babelHelpers.get(Object.getPrototypeOf(EventEmitter.prototype), 'constructor', this).call(this);

			/**
    * Holds event listeners scoped by event type.
    * @type {!Object<string, !Array<!function()>>}
    * @protected
    */
			this.events_ = [];

			/**
    * The maximum number of listeners allowed for each event type. If the number
    * becomes higher than the max, a warning will be issued.
    * @type {number}
    * @protected
    */
			this.maxListeners_ = 10;

			/**
    * Configuration option which determines if an event facade should be sent
    * as a param of listeners when emitting events. If set to true, the facade
    * will be passed as the first argument of the listener.
    * @type {boolean}
    * @protected
    */
			this.shouldUseFacade_ = false;
		}

		babelHelpers.inherits(EventEmitter, _Disposable);
		babelHelpers.createClass(EventEmitter, [{
			key: 'addListener',

			/**
    * Adds a listener to the end of the listeners array for the specified events.
    * @param {!(Array|string)} events
    * @param {!Function} listener
    * @return {!EventHandle} Can be used to remove the listener.
    */
			value: function addListener(events, listener) {
				this.validateListener_(listener);

				events = this.normalizeEvents_(events);
				for (var i = 0; i < events.length; i++) {
					this.addSingleListener_(events[i], listener);
				}

				return new EventHandle(this, events, listener);
			}
		}, {
			key: 'addSingleListener_',

			/**
    * Adds a listener to the end of the listeners array for a single event.
    * @param {string} event
    * @param {!Function} listener
    * @param {Function=} opt_origin The original function that was added as a
    *   listener, if there is any.
    * @protected
    */
			value: function addSingleListener_(event, listener, opt_origin) {
				this.emit('newListener', event, listener);

				if (!this.events_[event]) {
					this.events_[event] = [];
				}
				this.events_[event].push({
					fn: listener,
					origin: opt_origin
				});

				var listeners = this.events_[event];
				if (listeners.length > this.maxListeners_ && !listeners.warned) {
					console.warn('Possible EventEmitter memory leak detected. %d listeners added ' + 'for event %s. Use emitter.setMaxListeners() to increase limit.', listeners.length, event);
					listeners.warned = true;
				}
			}
		}, {
			key: 'disposeInternal',

			/**
    * Disposes of this instance's object references.
    * @override
    */
			value: function disposeInternal() {
				this.events_ = [];
			}
		}, {
			key: 'emit',

			/**
    * Execute each of the listeners in order with the supplied arguments.
    * @param {string} event
    * @param {*} opt_args [arg1], [arg2], [...]
    * @return {boolean} Returns true if event had listeners, false otherwise.
    */
			value: function emit(event) {
				var args = Array.prototype.slice.call(arguments, 1);
				var listened = false;
				var listeners = this.listeners(event);

				if (this.getShouldUseFacade()) {
					var facade = {
						target: this,
						type: event
					};
					args.push(facade);
				}

				for (var i = 0; i < listeners.length; i++) {
					listeners[i].apply(this, args);
					listened = true;
				}

				if (event !== '*') {
					this.emit.apply(this, ['*', event].concat(args));
				}

				return listened;
			}
		}, {
			key: 'getShouldUseFacade',

			/**
    * Gets the configuration option which determines if an event facade should
    * be sent as a param of listeners when emitting events. If set to true, the
    * facade will be passed as the first argument of the listener.
    * @return {boolean}
    */
			value: function getShouldUseFacade() {
				return this.shouldUseFacade_;
			}
		}, {
			key: 'listeners',

			/**
    * Returns an array of listeners for the specified event.
    * @param {string} event
    * @return {Array} Array of listeners.
    */
			value: function listeners(event) {
				return (this.events_[event] || []).map(function (listener) {
					return listener.fn;
				});
			}
		}, {
			key: 'many',

			/**
    * Adds a listener that will be invoked a fixed number of times for the
    * events. After each event is triggered the specified amount of times, the
    * listener is removed for it.
    * @param {!(Array|string)} events
    * @param {number} amount The amount of times this event should be listened
    * to.
    * @param {!Function} listener
    * @return {!EventHandle} Can be used to remove the listener.
    */
			value: function many(events, amount, listener) {
				events = this.normalizeEvents_(events);
				for (var i = 0; i < events.length; i++) {
					this.many_(events[i], amount, listener);
				}

				return new EventHandle(this, events, listener);
			}
		}, {
			key: 'many_',

			/**
    * Adds a listener that will be invoked a fixed number of times for a single
    * event. After the event is triggered the specified amount of times, the
    * listener is removed.
    * @param {string} event
    * @param {number} amount The amount of times this event should be listened
    * to.
    * @param {!Function} listener
    * @protected
    */
			value: function many_(event, amount, listener) {
				var self = this;

				if (amount <= 0) {
					return;
				}

				function handlerInternal() {
					if (--amount === 0) {
						self.removeListener(event, handlerInternal);
					}
					listener.apply(self, arguments);
				}

				self.addSingleListener_(event, handlerInternal, listener);
			}
		}, {
			key: 'matchesListener_',

			/**
    * Checks if a listener object matches the given listener function. To match,
    * it needs to either point to that listener or have it as its origin.
    * @param {!Object} listenerObj
    * @param {!Function} listener
    * @return {boolean}
    * @protected
    */
			value: function matchesListener_(listenerObj, listener) {
				return listenerObj.fn === listener || listenerObj.origin && listenerObj.origin === listener;
			}
		}, {
			key: 'normalizeEvents_',

			/**
    * Converts the parameter to an array if only one event is given.
    * @param  {!(Array|string)} events
    * @return {!Array}
    * @protected
    */
			value: function normalizeEvents_(events) {
				return core.isString(events) ? [events] : events;
			}
		}, {
			key: 'off',

			/**
    * Removes a listener for the specified events.
    * Caution: changes array indices in the listener array behind the listener.
    * @param {!(Array|string)} events
    * @param {!Function} listener
    * @return {!Object} Returns emitter, so calls can be chained.
    */
			value: function off(events, listener) {
				this.validateListener_(listener);

				events = this.normalizeEvents_(events);
				for (var i = 0; i < events.length; i++) {
					var listenerObjs = this.events_[events[i]] || [];
					this.removeMatchingListenerObjs_(listenerObjs, listener);
				}

				return this;
			}
		}, {
			key: 'on',

			/**
    * Adds a listener to the end of the listeners array for the specified events.
    * @param {!(Array|string)} events
    * @param {!Function} listener
    * @return {!EventHandle} Can be used to remove the listener.
    */
			value: function on() {
				return this.addListener.apply(this, arguments);
			}
		}, {
			key: 'once',

			/**
    * Adds a one time listener for the events. This listener is invoked only the
    * next time each event is fired, after which it is removed.
    * @param {!(Array|string)} events
    * @param {!Function} listener
    * @return {!EventHandle} Can be used to remove the listener.
    */
			value: function once(events, listener) {
				return this.many(events, 1, listener);
			}
		}, {
			key: 'removeAllListeners',

			/**
    * Removes all listeners, or those of the specified events. It's not a good
    * idea to remove listeners that were added elsewhere in the code,
    * especially when it's on an emitter that you didn't create.
    * @param {(Array|string)=} opt_events
    * @return {!Object} Returns emitter, so calls can be chained.
    */
			value: function removeAllListeners(opt_events) {
				if (opt_events) {
					var events = this.normalizeEvents_(opt_events);
					for (var i = 0; i < events.length; i++) {
						this.events_[events[i]] = null;
					}
				} else {
					this.events_ = {};
				}
				return this;
			}
		}, {
			key: 'removeMatchingListenerObjs_',

			/**
    * Removes all listener objects from the given array that match the given
    * listener function.
    * @param {!Array.<Object>} listenerObjs
    * @param {!Function} listener
    * @protected
    */
			value: function removeMatchingListenerObjs_(listenerObjs, listener) {
				for (var i = listenerObjs.length - 1; i >= 0; i--) {
					if (this.matchesListener_(listenerObjs[i], listener)) {
						listenerObjs.splice(i, 1);
					}
				}
			}
		}, {
			key: 'removeListener',

			/**
    * Removes a listener for the specified events.
    * Caution: changes array indices in the listener array behind the listener.
    * @param {!(Array|string)} events
    * @param {!Function} listener
    * @return {!Object} Returns emitter, so calls can be chained.
    */
			value: function removeListener() {
				return this.off.apply(this, arguments);
			}
		}, {
			key: 'setMaxListeners',

			/**
    * By default EventEmitters will print a warning if more than 10 listeners
    * are added for a particular event. This is a useful default which helps
    * finding memory leaks. Obviously not all Emitters should be limited to 10.
    * This function allows that to be increased. Set to zero for unlimited.
    * @param {number} max The maximum number of listeners.
    * @return {!Object} Returns emitter, so calls can be chained.
    */
			value: function setMaxListeners(max) {
				this.maxListeners_ = max;
				return this;
			}
		}, {
			key: 'setShouldUseFacade',

			/**
    * Sets the configuration option which determines if an event facade should
    * be sent as a param of listeners when emitting events. If set to true, the
    * facade will be passed as the first argument of the listener.
    * @param {boolean} shouldUseFacade
    * @return {!Object} Returns emitter, so calls can be chained.
    */
			value: function setShouldUseFacade(shouldUseFacade) {
				this.shouldUseFacade_ = shouldUseFacade;
				return this;
			}
		}, {
			key: 'validateListener_',

			/**
    * Checks if the given listener is valid, throwing an exception when it's not.
    * @param  {*} listener
    * @protected
    */
			value: function validateListener_(listener) {
				if (!core.isFunction(listener)) {
					throw new TypeError('Listener must be a function');
				}
			}
		}]);
		return EventEmitter;
	})(Disposable);

	this.steel.EventEmitter = EventEmitter;
}).call(this);
(function () {
	/*!
  * Polyfill from Google's Closure Library.
  * Copyright 2013 The Closure Library Authors. All Rights Reserved.
  */

	'use strict';

	var core = this.steel.core;

	var async = {};

	/**
  * Throw an item without interrupting the current execution context.  For
  * example, if processing a group of items in a loop, sometimes it is useful
  * to report an error while still allowing the rest of the batch to be
  * processed.
  * @param {*} exception
  */
	async.throwException = function (exception) {
		// Each throw needs to be in its own context.
		async.nextTick(function () {
			throw exception;
		});
	};

	/**
  * Fires the provided callback just before the current callstack unwinds, or as
  * soon as possible after the current JS execution context.
  * @param {function(this:THIS)} callback
  * @param {THIS=} opt_context Object to use as the "this value" when calling
  *     the provided function.
  * @template THIS
  */
	async.run = function (callback, opt_context) {
		if (!async.run.workQueueScheduled_) {
			// Nothing is currently scheduled, schedule it now.
			async.nextTick(async.run.processWorkQueue);
			async.run.workQueueScheduled_ = true;
		}

		async.run.workQueue_.push(new async.run.WorkItem_(callback, opt_context));
	};

	/** @private {boolean} */
	async.run.workQueueScheduled_ = false;

	/** @private {!Array.<!async.run.WorkItem_>} */
	async.run.workQueue_ = [];

	/**
  * Run any pending async.run work items. This function is not intended
  * for general use, but for use by entry point handlers to run items ahead of
  * async.nextTick.
  */
	async.run.processWorkQueue = function () {
		// NOTE: additional work queue items may be pushed while processing.
		while (async.run.workQueue_.length) {
			// Don't let the work queue grow indefinitely.
			var workItems = async.run.workQueue_;
			async.run.workQueue_ = [];
			for (var i = 0; i < workItems.length; i++) {
				var workItem = workItems[i];
				try {
					workItem.fn.call(workItem.scope);
				} catch (e) {
					async.throwException(e);
				}
			}
		}

		// There are no more work items, reset the work queue.
		async.run.workQueueScheduled_ = false;
	};

	/**
  * @constructor
  * @final
  * @struct
  * @private
  *
  * @param {function()} fn
  * @param {Object|null|undefined} scope
  */
	async.run.WorkItem_ = function (fn, scope) {
		/** @const */
		this.fn = fn;
		/** @const */
		this.scope = scope;
	};

	/**
  * Fires the provided callbacks as soon as possible after the current JS
  * execution context. setTimeout(…, 0) always takes at least 5ms for legacy
  * reasons.
  * @param {function(this:SCOPE)} callback Callback function to fire as soon as
  *     possible.
  * @param {SCOPE=} opt_context Object in whose scope to call the listener.
  * @template SCOPE
  */
	async.nextTick = function (callback, opt_context) {
		var cb = callback;
		if (opt_context) {
			cb = callback.bind(opt_context);
		}
		cb = async.nextTick.wrapCallback_(cb);
		// Introduced and currently only supported by IE10.
		if (core.isFunction(window.setImmediate)) {
			window.setImmediate(cb);
			return;
		}
		// Look for and cache the custom fallback version of setImmediate.
		if (!async.nextTick.setImmediate_) {
			async.nextTick.setImmediate_ = async.nextTick.getSetImmediateEmulator_();
		}
		async.nextTick.setImmediate_(cb);
	};

	/**
  * Cache for the setImmediate implementation.
  * @type {function(function())}
  * @private
  */
	async.nextTick.setImmediate_ = null;

	/**
  * Determines the best possible implementation to run a function as soon as
  * the JS event loop is idle.
  * @return {function(function())} The "setImmediate" implementation.
  * @private
  */
	async.nextTick.getSetImmediateEmulator_ = function () {
		// Create a private message channel and use it to postMessage empty messages
		// to ourselves.
		var Channel = window.MessageChannel;
		// If MessageChannel is not available and we are in a browser, implement
		// an iframe based polyfill in browsers that have postMessage and
		// document.addEventListener. The latter excludes IE8 because it has a
		// synchronous postMessage implementation.
		if (typeof Channel === 'undefined' && typeof window !== 'undefined' && window.postMessage && window.addEventListener) {
			/** @constructor */
			Channel = function () {
				// Make an empty, invisible iframe.
				var iframe = document.createElement('iframe');
				iframe.style.display = 'none';
				iframe.src = '';
				document.documentElement.appendChild(iframe);
				var win = iframe.contentWindow;
				var doc = win.document;
				doc.open();
				doc.write('');
				doc.close();
				var message = 'callImmediate' + Math.random();
				var origin = win.location.protocol + '//' + win.location.host;
				var onmessage = (function (e) {
					// Validate origin and message to make sure that this message was
					// intended for us.
					if (e.origin !== origin && e.data !== message) {
						return;
					}
					this.port1.onmessage();
				}).bind(this);
				win.addEventListener('message', onmessage, false);
				this.port1 = {};
				this.port2 = {
					postMessage: function postMessage() {
						win.postMessage(message, origin);
					}
				};
			};
		}
		if (typeof Channel !== 'undefined') {
			var channel = new Channel();
			// Use a fifo linked list to call callbacks in the right order.
			var head = {};
			var tail = head;
			channel.port1.onmessage = function () {
				head = head.next;
				var cb = head.cb;
				head.cb = null;
				cb();
			};
			return function (cb) {
				tail.next = {
					cb: cb
				};
				tail = tail.next;
				channel.port2.postMessage(0);
			};
		}
		// Implementation for IE6-8: Script elements fire an asynchronous
		// onreadystatechange event when inserted into the DOM.
		if (typeof document !== 'undefined' && 'onreadystatechange' in document.createElement('script')) {
			return function (cb) {
				var script = document.createElement('script');
				script.onreadystatechange = function () {
					// Clean up and call the callback.
					script.onreadystatechange = null;
					script.parentNode.removeChild(script);
					script = null;
					cb();
					cb = null;
				};
				document.documentElement.appendChild(script);
			};
		}
		// Fall back to setTimeout with 0. In browsers this creates a delay of 5ms
		// or more.
		return function (cb) {
			setTimeout(cb, 0);
		};
	};

	/**
  * Helper function that is overrided to protect callbacks with entry point
  * monitor if the application monitors entry points.
  * @param {function()} callback Callback function to fire as soon as possible.
  * @return {function()} The wrapped callback.
  * @private
  */
	async.nextTick.wrapCallback_ = function (opt_returnValue) {
		return opt_returnValue;
	};

	this.steel.async = async;
}).call(this);
(function () {
	'use strict';

	var array = this.steel.array;
	var core = this.steel.core;
	var object = this.steel.object;
	var EventEmitter = this.steel.EventEmitter;
	var async = this.steel.async;

	/**
  * Attribute adds support for having object properties that can be watched for
  * changes, as well as configured with validators, setters and other options.
  * See the `addAttr` method for a complete list of available attribute
  * configuration options.
  * @constructor
  * @extends {EventEmitter}
  */

	var Attribute = (function (_EventEmitter) {
		function Attribute(opt_config) {
			babelHelpers.classCallCheck(this, Attribute);

			babelHelpers.get(Object.getPrototypeOf(Attribute.prototype), 'constructor', this).call(this);

			/**
    * Object with information about the batch event that is currently
    * scheduled, or null if none is.
    * @type {Object}
    * @protected
    */
			this.scheduledBatchData_ = null;

			/**
    * Object that contains information about all this instance's attributes.
    * @type {!Object<string, !Object>}
    * @protected
    */
			this.attrsInfo_ = {};

			this.setShouldUseFacade(true);
			this.mergeInvalidAttrs_();
			this.addAttrsFromStaticHint_(opt_config);
		}

		babelHelpers.inherits(Attribute, _EventEmitter);
		babelHelpers.createClass(Attribute, [{
			key: 'addAttr',

			/**
    * Adds the given attribute.
    * @param {string} name The name of the new attribute.
    * @param {Object.<string, *>=} config The configuration object for the new attribute.
    *   This object can have the following keys:
    *   setter - Function for normalizing new attribute values. It receives the new value
    *   that was set, and returns the value that should be stored.
    *   validator - Function that validates new attribute values. When it returns false,
    *   the new value is ignored.
    *   value - The default value for this attribute. Note that setting this to an object
    *   will cause all attribute instances to use the same reference to the object. To
    *   have each attribute instance use a different reference, use the `valueFn` option
    *   instead.
    *   valueFn - A function that returns the default value for this attribute.
    *   writeOnce - Ignores writes to the attribute after it's been first written to. That is,
    *   allows writes only when setting the attribute for the first time.
    * @param {*} initialValue The initial value of the new attribute. This value has higher
    *   precedence than the default value specified in this attribute's configuration.
    */
			value: function addAttr(name, config, initialValue) {
				this.buildAttrInfo_(name, config, initialValue);
				Object.defineProperty(this, name, this.buildAttrPropertyDef_(name));
			}
		}, {
			key: 'addAttrs',

			/**
    * Adds the given attributes.
    * @param {!Object.<string, !Object>} configs An object that maps the names of all the
    *   attributes to be added to their configuration objects.
    * @param {!Object.<string, *>} initialValues An object that maps the names of
    *   attributes to their initial values. These values have higher precedence than the
    *   default values specified in the attribute configurations.
    * @param {boolean|Object=} opt_defineContext If value is false
    *     `Object.defineProperties` will not be called. If value is a valid
    *     context it will be used as definition context, otherwise `this`
    *     will be the context.
    */
			value: function addAttrs(configs, initialValues, opt_defineContext) {
				initialValues = initialValues || {};
				var names = Object.keys(configs);

				var props = {};
				for (var i = 0; i < names.length; i++) {
					var name = names[i];
					this.buildAttrInfo_(name, configs[name], initialValues[name]);
					props[name] = this.buildAttrPropertyDef_(name);
				}

				if (opt_defineContext !== false) {
					Object.defineProperties(opt_defineContext || this, props);
				}
			}
		}, {
			key: 'addAttrsFromStaticHint_',

			/**
    * Adds attributes from super classes static hint `MyClass.ATTRS = {};`.
    * @param {!Object.<string, !Object>} configs An object that maps the names
    *     of all the attributes to be added to their configuration objects.
    * @protected
    */
			value: function addAttrsFromStaticHint_(config) {
				var ctor = this.constructor;
				var defineContext = false;
				if (Attribute.mergeAttrsStatic(ctor)) {
					defineContext = ctor.prototype;
				}
				this.addAttrs(ctor.ATTRS_MERGED, config, defineContext);
			}
		}, {
			key: 'assertValidAttrName_',

			/**
    * Checks that the given name is a valid attribute name. If it's not, an error
    * will be thrown.
    * @param {string} name The name to be validated.
    * @throws {Error}
    */
			value: function assertValidAttrName_(name) {
				if (this.constructor.INVALID_ATTRS_MERGED[name]) {
					throw new Error('It\'s not allowed to create an attribute with the name "' + name + '".');
				}
			}
		}, {
			key: 'buildAttrInfo_',

			/**
    * Builds the info object for the requested attribute.
    * @param {string} name The name of the attribute.
    * @param {Object} config The config object of the attribute.
    * @param {*} initialValue The initial value of the attribute.
    * @protected
    */
			value: function buildAttrInfo_(name, config, initialValue) {
				this.assertValidAttrName_(name);

				this.attrsInfo_[name] = {
					config: config || {},
					initialValue: initialValue,
					state: Attribute.States.UNINITIALIZED
				};
			}
		}, {
			key: 'buildAttrPropertyDef_',

			/**
    * Builds the property definition object for the requested attribute.
    * @param {string} name The name of the attribute.
    * @return {!Object}
    * @protected
    */
			value: function buildAttrPropertyDef_(name) {
				return {
					configurable: true,
					enumerable: true,
					get: function get() {
						return this.getAttrValue_(name);
					},
					set: function set(val) {
						this.setAttrValue_(name, val);
					}
				};
			}
		}, {
			key: 'callFunction_',

			/**
    * Calls the requested function, running the appropriate code for when it's
    * passed as an actual function object or just the function's name.
    * @param {!Function|string} fn Function, or name of the function to run.
    * @param {!Array} An optional array of parameters to be passed to the
    *   function that will be called.
    * @return {*} The return value of the called function.
    * @protected
    */
			value: function callFunction_(fn, args) {
				if (core.isString(fn)) {
					return this[fn].apply(this, args);
				} else if (core.isFunction(fn)) {
					return fn.apply(this, args);
				}
			}
		}, {
			key: 'callSetter_',

			/**
    * Calls the attribute's setter, if there is one.
    * @param {string} name The name of the attribute.
    * @param {*} value The value to be set.
    * @return {*} The final value to be set.
    */
			value: function callSetter_(name, value) {
				var info = this.attrsInfo_[name];
				var config = info.config;
				if (config.setter) {
					value = this.callFunction_(config.setter, [value]);
				}
				return value;
			}
		}, {
			key: 'callValidator_',

			/**
    * Calls the attribute's validator, if there is one.
    * @param {string} name The name of the attribute.
    * @param {*} value The value to be validated.
    * @return {boolean} Flag indicating if value is valid or not.
    */
			value: function callValidator_(name, value) {
				var info = this.attrsInfo_[name];
				var config = info.config;
				if (config.validator) {
					return this.callFunction_(config.validator, [value]);
				}
				return true;
			}
		}, {
			key: 'canSetAttribute',

			/**
    * Checks if the it's allowed to write on the requested attribute.
    * @param {string} name The name of the attribute.
    * @return {boolean}
    */
			value: function canSetAttribute(name) {
				var info = this.attrsInfo_[name];
				return !info.config.writeOnce || !info.written;
			}
		}, {
			key: 'disposeInternal',

			/**
    * @inheritDoc
    */
			value: function disposeInternal() {
				babelHelpers.get(Object.getPrototypeOf(Attribute.prototype), 'disposeInternal', this).call(this);
				this.attrsInfo_ = null;
				this.scheduledBatchData_ = null;
			}
		}, {
			key: 'emitBatchEvent_',

			/**
    * Emits the attribute change batch event.
    * @protected
    */
			value: function emitBatchEvent_() {
				if (!this.isDisposed()) {
					var data = this.scheduledBatchData_;
					this.scheduledBatchData_ = null;
					this.emit('attrsChanged', data);
				}
			}
		}, {
			key: 'get',

			/**
    * Returns the value of the requested attribute.
    * Note: this can and should be accomplished by accessing the attribute as a regular property.
    * This should only be used in cases where a function is actually needed.
    * @param {string} name
    * @return {*}
    */
			value: function get(name) {
				return this[name];
			}
		}, {
			key: 'getAttrConfig',

			/**
    * Gets the config object for the requested attribute.
    * @param {string} name The attribute's name.
    * @return {!Object}
    * @protected
    */
			value: function getAttrConfig(name) {
				return (this.attrsInfo_[name] || {}).config;
			}
		}, {
			key: 'getAttrs',

			/**
    * Returns an object that maps attribute names to their values.
    * @param {Array<string>=} opt_names A list of names of the attributes that should be
    *   returned. If none is given, all attributes will be returned.
    * @return {Object.<string, *>}
    */
			value: function getAttrs(opt_names) {
				var attrsMap = {};
				var names = opt_names || this.getAttrNames();

				for (var i = 0; i < names.length; i++) {
					attrsMap[names[i]] = this[names[i]];
				}

				return attrsMap;
			}
		}, {
			key: 'getAttrNames',

			/**
    * Returns an array with all attribute names.
    * @return {Array.<string>}
    */
			value: function getAttrNames() {
				return Object.keys(this.attrsInfo_);
			}
		}, {
			key: 'getAttrValue_',

			/**
    * Gets the value of the specified attribute. This is passed as that attribute's
    * getter to the `Object.defineProperty` call inside the `addAttr` method.
    * @param {string} name The name of the attribute.
    * @return {*}
    * @protected
    */
			value: function getAttrValue_(name) {
				this.initAttr_(name);

				return this.attrsInfo_[name].value;
			}
		}, {
			key: 'informChange_',

			/**
    * Informs of changes to an attributes value through an event. Won't trigger
    * the event if the value hasn't changed or if it's being initialized.
    * @param {string} name The name of the attribute.
    * @param {*} prevVal The previous value of the attribute.
    * @protected
    */
			value: function informChange_(name, prevVal) {
				if (this.shouldInformChange_(name, prevVal)) {
					var data = {
						attrName: name,
						newVal: this[name],
						prevVal: prevVal
					};
					this.emit(name + 'Changed', data);
					this.scheduleBatchEvent_(data);
				}
			}
		}, {
			key: 'initAttr_',

			/**
    * Initializes the specified attribute, giving it a first value.
    * @param {string} name The name of the attribute.
    * @protected
    */
			value: function initAttr_(name) {
				var info = this.attrsInfo_[name];
				if (info.state !== Attribute.States.UNINITIALIZED) {
					return;
				}

				info.state = Attribute.States.INITIALIZING;
				this.setInitialValue_(name);
				if (!info.written) {
					info.state = Attribute.States.INITIALIZING_DEFAULT;
					this.setDefaultValue_(name);
				}
				info.state = Attribute.States.INITIALIZED;
			}
		}, {
			key: 'mergeInvalidAttrs_',

			/**
    * Merges the values of the `INVALID_ATTRS` static for the whole hierarchy of
    * the current instance.
    * @protected
    */
			value: function mergeInvalidAttrs_() {
				core.mergeSuperClassesProperty(this.constructor, 'INVALID_ATTRS', function (values) {
					return array.flatten(values).reduce(function (merged, val) {
						if (val) {
							merged[val] = true;
						}
						return merged;
					}, {});
				});
			}
		}, {
			key: 'removeAttr',

			/**
    * Removes the requested attribute.
    * @param {string} name The name of the attribute.
    */
			value: function removeAttr(name) {
				this.attrsInfo_[name] = null;
				delete this[name];
			}
		}, {
			key: 'scheduleBatchEvent_',

			/**
    * Schedules an attribute change batch event to be emitted asynchronously.
    * @param {!Object} attrChangeData Information about an attribute's update.
    * @protected
    */
			value: function scheduleBatchEvent_(attrChangeData) {
				if (!this.scheduledBatchData_) {
					async.nextTick(this.emitBatchEvent_, this);
					this.scheduledBatchData_ = {
						changes: {}
					};
				}

				var name = attrChangeData.attrName;
				var changes = this.scheduledBatchData_.changes;
				if (changes[name]) {
					changes[name].newVal = attrChangeData.newVal;
				} else {
					changes[name] = attrChangeData;
				}
			}
		}, {
			key: 'set',

			/**
    * Sets the value of the requested attribute.
    * Note: this can and should be accomplished by setting the attribute as a regular property.
    * This should only be used in cases where a function is actually needed.
    * @param {string} name
    * @param {*} value
    * @return {*}
    */
			value: function set(name, value) {
				this[name] = value;
			}
		}, {
			key: 'setAttrs',

			/**
    * Sets the value of all the specified attributes.
    * @param {!Object.<string,*>} values A map of attribute names to the values they
    *   should be set to.
    */
			value: function setAttrs(values) {
				var names = Object.keys(values);

				for (var i = 0; i < names.length; i++) {
					this[names[i]] = values[names[i]];
				}
			}
		}, {
			key: 'setAttrValue_',

			/**
    * Sets the value of the specified attribute. This is passed as that attribute's
    * setter to the `Object.defineProperty` call inside the `addAttr` method.
    * @param {string} name The name of the attribute.
    * @param {*} value The new value of the attribute.
    * @protected
    */
			value: function setAttrValue_(name, value) {
				if (!this.canSetAttribute(name) || !this.validateAttrValue_(name, value)) {
					return;
				}

				var info = this.attrsInfo_[name];
				if (info.initialValue === undefined && info.state === Attribute.States.UNINITIALIZED) {
					info.state = Attribute.States.INITIALIZED;
				}

				var prevVal = this[name];
				info.value = this.callSetter_(name, value);
				info.written = true;
				this.informChange_(name, prevVal);
			}
		}, {
			key: 'setDefaultValue_',

			/**
    * Sets the default value of the requested attribute.
    * @param {string} name The name of the attribute.
    * @return {*}
    */
			value: function setDefaultValue_(name) {
				var config = this.attrsInfo_[name].config;

				if (config.value !== undefined) {
					this[name] = config.value;
				} else {
					this[name] = this.callFunction_(config.valueFn);
				}
			}
		}, {
			key: 'setInitialValue_',

			/**
    * Sets the initial value of the requested attribute.
    * @param {string} name The name of the attribute.
    * @return {*}
    */
			value: function setInitialValue_(name) {
				var info = this.attrsInfo_[name];
				if (info.initialValue !== undefined) {
					this[name] = info.initialValue;
					info.initialValue = undefined;
				}
			}
		}, {
			key: 'shouldInformChange_',

			/**
    * Checks if we should inform about an attributes update. Updates are ignored
    * during attribute initialization. Otherwise, updates to primitive values
    * are only informed when the new value is different from the previous
    * one. Updates to objects (which includes functions and arrays) are always
    * informed outside initialization though, since we can't be sure if all of
    * the internal data has stayed the same.
    * @param {string} name The name of the attribute.
    * @param {*} prevVal The previous value of the attribute.
    * @return {boolean}
    */
			value: function shouldInformChange_(name, prevVal) {
				var info = this.attrsInfo_[name];
				return info.state === Attribute.States.INITIALIZED && (core.isObject(prevVal) || prevVal !== this[name]);
			}
		}, {
			key: 'validateAttrValue_',

			/**
    * Validates the attribute's value, which includes calling the validator defined
    * in the attribute's configuration object, if there is one.
    * @param {string} name The name of the attribute.
    * @param {*} value The value to be validated.
    * @return {boolean} Flag indicating if value is valid or not.
    */
			value: function validateAttrValue_(name, value) {
				var info = this.attrsInfo_[name];

				return info.state === Attribute.States.INITIALIZING_DEFAULT || this.callValidator_(name, value);
			}
		}], [{
			key: 'mergeAttrs_',

			/**
    * Merges an array of values for the ATTRS property into a single object.
    * @param {!Array} values The values to be merged.
    * @return {!Object} The merged value.
    * @static
    * @protected
    */
			value: function mergeAttrs_(values) {
				return object.mixin.apply(null, [{}].concat(values.reverse()));
			}
		}, {
			key: 'mergeAttrsStatic',

			/**
    * Merges the ATTRS static variable for the given constructor function.
    * @param  {!Function} ctor Constructor function.
    * @return {boolean} Returns true if merge happens, false otherwise.
    * @static
    */
			value: function mergeAttrsStatic(ctor) {
				return core.mergeSuperClassesProperty(ctor, 'ATTRS', Attribute.mergeAttrs_);
			}
		}]);
		return Attribute;
	})(EventEmitter);

	/**
  * A list with attribute names that will automatically be rejected as invalid.
  * Subclasses can define their own invalid attributes by setting this static
  * on their constructors, which will be merged together and handled automatically.
  * @type {!Array<string>}
  */
	Attribute.INVALID_ATTRS = ['attrs'];

	/**
  * Constants that represent the states that an attribute can be in.
  * @type {!Object}
  */
	Attribute.States = {
		UNINITIALIZED: 0,
		INITIALIZING: 1,
		INITIALIZING_DEFAULT: 2,
		INITIALIZED: 3
	};

	this.steel.Attribute = Attribute;
}).call(this);
(function () {
	'use strict';

	/**
  * The component registry is used to register components, so they can
  * be accessible by name.
  * @type {Object}
  */

	var ComponentRegistry = (function () {
		function ComponentRegistry() {
			babelHelpers.classCallCheck(this, ComponentRegistry);
		}

		babelHelpers.createClass(ComponentRegistry, null, [{
			key: 'getConstructor',

			/**
    * Gets the constructor function for the given component name, or
    * undefined if it hasn't been registered yet.
    * @param {string} name The component's name.
    * @return {?function}
    * @static
    */
			value: function getConstructor(name) {
				var constructorFn = ComponentRegistry.components_[name];
				if (!constructorFn) {
					console.error('There\'s no constructor registered for the component ' + 'named ' + name + '. Components need to be registered via ' + 'ComponentRegistry.register.');
				}
				return constructorFn;
			}
		}, {
			key: 'register',

			/**
    * Registers a component.
    * @param {string} name The component's name.
    * @param {string} constructorFn The component's constructor function.
    * @static
    */
			value: function register(name, constructorFn) {
				ComponentRegistry.components_[name] = constructorFn;
				constructorFn.NAME = name;
				constructorFn.TEMPLATES = ComponentRegistry.Templates[name];
			}
		}]);
		return ComponentRegistry;
	})();

	/**
  * Holds all registered components, indexed by their names.
  * @type {!Object<string, function()>}
  * @protected
  * @static
  */
	ComponentRegistry.components_ = {};

	/**
  * Holds all registered component templates, indexed by component names.
  * Soy files automatically add their templates to this object when imported.
  * @type {!Object<string, !Object<string, !function()>>}
  * @static
  */
	ComponentRegistry.Templates = {};

	this.steel.ComponentRegistry = ComponentRegistry;
}).call(this);
(function () {
	'use strict';

	var ComponentRegistry = this.steel.ComponentRegistry;
	var Disposable = this.steel.Disposable;

	var ComponentCollector = (function (_Disposable) {
		function ComponentCollector() {
			babelHelpers.classCallCheck(this, ComponentCollector);

			babelHelpers.get(Object.getPrototypeOf(ComponentCollector.prototype), 'constructor', this).call(this);

			/**
    * Holds the data that should be passed to a component, mapped by component id.
    * @type {!Object<string, Object>}
    */
			this.nextComponentData_ = {};
		}

		babelHelpers.inherits(ComponentCollector, _Disposable);
		babelHelpers.createClass(ComponentCollector, [{
			key: 'addComponent',

			/**
    * Adds a component to this collector.
    * @param {!Component} component
    */
			value: function addComponent(component) {
				ComponentCollector.components[component.id] = component;
			}
		}, {
			key: 'createComponent',

			/**
    * Creates the appropriate component from the given config data if it doesn't
    * exist yet.
    * @param {string} componentName The name of the component to be created.
    * @param {string} id The id of the component to be created.
    * @return {!Component} The component instance.
    */
			value: function createComponent(componentName, id) {
				var component = ComponentCollector.components[id];
				if (!component) {
					var ConstructorFn = ComponentRegistry.getConstructor(componentName);
					var data = this.getNextComponentData(id);
					data.element = '#' + id;
					component = new ConstructorFn(data);
				}
				return component;
			}
		}, {
			key: 'getNextComponentData',

			/**
    * Gets the data that should be passed to the next creation or update of a
    * component with the given id.
    * @param {string} id
    * @param {Object} data
    */
			value: function getNextComponentData(id) {
				var data = this.nextComponentData_[id] || {};
				data.id = id;
				return data;
			}
		}, {
			key: 'removeComponent',

			/**
    * Removes the given component from this collector.
    * @param {!Component} component
    */
			value: function removeComponent(component) {
				delete ComponentCollector.components[component.id];
			}
		}, {
			key: 'setNextComponentData',

			/**
    * Sets the data that should be passed to the next creation or update of a
    * component with the given id.
    * @param {string} id
    * @param {Object} data
    */
			value: function setNextComponentData(id, data) {
				this.nextComponentData_[id] = data;
			}
		}, {
			key: 'updateComponent',

			/**
    * Updates an existing component instance with new attributes.
    * @param {string} id The id of the component to be created or updated.
    * @return {Component} The extracted component instance.
    */
			value: function updateComponent(id) {
				var component = ComponentCollector.components[id];
				if (component) {
					var data = this.getNextComponentData(id);
					component.setAttrs(data);
				}
				return component;
			}
		}]);
		return ComponentCollector;
	})(Disposable);

	/**
  * Holds all collected components, indexed by their id.
  * @type {!Object<string, !Component>}
  */
	ComponentCollector.components = {};

	this.steel.ComponentCollector = ComponentCollector;
}).call(this);
(function () {
	'use strict';

	var core = this.steel.core;
	var dom = this.steel.dom;
	var Disposable = this.steel.Disposable;

	/**
  * EventEmitterProxy utility. It's responsible for linking two EventEmitter
  * instances together, emitting events from the first emitter through the
  * second one. That means that listening to a supported event on the target
  * emitter will mean listening to it on the origin emitter as well.
  * @param {EventEmitter | Element} originEmitter Events originated on this emitter
  *   will be fired for the target emitter's listeners as well. Can be either a real
  *   EventEmitter instance or a DOM element.
  * @param {EventEmitter} targetEmitter Event listeners attached to this emitter
  *   will also be triggered when the event is fired by the origin emitter.
  * @param {Object} opt_blacklist Optional blacklist of events that should not be
  *   proxied.
  * @constructor
  * @extends {Disposable}
  */

	var EventEmitterProxy = (function (_Disposable) {
		function EventEmitterProxy(originEmitter, targetEmitter, opt_blacklist, opt_whitelist) {
			babelHelpers.classCallCheck(this, EventEmitterProxy);

			babelHelpers.get(Object.getPrototypeOf(EventEmitterProxy.prototype), 'constructor', this).call(this);

			/**
    * Map of events that should not be proxied.
    * @type {Object}
    * @protected
    */
			this.blacklist_ = opt_blacklist || {};

			/**
    * The origin emitter. This emitter's events will be proxied through the
    * target emitter.
    * @type {EventEmitter}
    * @protected
    */
			this.originEmitter_ = originEmitter;

			/**
    * Holds a map of events from the origin emitter that are already being proxied.
    * @type {Object}
    * @protected
    */
			this.proxiedEvents_ = {};

			/**
    * The target emitter. This emitter will emit all events that come from
    * the origin emitter.
    * @type {EventEmitter}
    * @protected
    */
			this.targetEmitter_ = targetEmitter;

			/**
    * Map of events that should be proxied. If whitelist is set blacklist is ignored.
    * @type {Object}
    * @protected
    */
			this.whitelist_ = opt_whitelist;

			this.startProxy_();
		}

		babelHelpers.inherits(EventEmitterProxy, _Disposable);
		babelHelpers.createClass(EventEmitterProxy, [{
			key: 'disposeInternal',

			/**
    * @inheritDoc
    */
			value: function disposeInternal() {
				var removeFnName = this.originEmitter_.removeEventListener ? 'removeEventListener' : 'removeListener';
				for (var event in this.proxiedEvents_) {
					this.originEmitter_[removeFnName](event, this.proxiedEvents_[event]);
				}

				this.proxiedEvents_ = null;
				this.originEmitter_ = null;
				this.targetEmitter_ = null;
			}
		}, {
			key: 'proxyEvent_',

			/**
    * Proxies the given event from the origin to the target emitter.
    * @param {string} event
    */
			value: function proxyEvent_(event) {
				if (!this.shouldProxyEvent_(event)) {
					return;
				}

				var self = this;
				this.proxiedEvents_[event] = function () {
					var args = [event].concat(Array.prototype.slice.call(arguments, 0));
					self.targetEmitter_.emit.apply(self.targetEmitter_, args);
				};

				if (core.isElement(this.originEmitter_)) {
					dom.on(this.originEmitter_, event, this.proxiedEvents_[event]);
				} else {
					this.originEmitter_.on(event, this.proxiedEvents_[event]);
				}
			}
		}, {
			key: 'shouldProxyEvent_',

			/**
    * Checks if the given event should be proxied.
    * @param {string} event
    * @return {boolean}
    * @protected
    */
			value: function shouldProxyEvent_(event) {
				if (this.whitelist_ && !this.whitelist_[event]) {
					return false;
				}
				if (this.blacklist_[event]) {
					return false;
				}
				return !this.proxiedEvents_[event] && (!(this.originEmitter_.removeEventListener || this.originEmitter_.addEventListener) || dom.supportsEvent(this.originEmitter_, event));
			}
		}, {
			key: 'startProxy_',

			/**
    * Starts proxying all events from the origin to the target emitter.
    * @protected
    */
			value: function startProxy_() {
				this.targetEmitter_.on('newListener', this.proxyEvent_.bind(this));
			}
		}]);
		return EventEmitterProxy;
	})(Disposable);

	this.steel.EventEmitterProxy = EventEmitterProxy;
}).call(this);
(function () {
	'use strict';

	var Disposable = this.steel.Disposable;

	/**
  * EventHandler utility. It's useful for easily removing a group of
  * listeners from different EventEmitter instances.
  * @constructor
  * @extends {Disposable}
  */

	var EventHandler = (function (_Disposable) {
		function EventHandler() {
			babelHelpers.classCallCheck(this, EventHandler);

			babelHelpers.get(Object.getPrototypeOf(EventHandler.prototype), 'constructor', this).call(this);

			/**
    * An array that holds the added event handles, so the listeners can be
    * removed later.
    * @type {Array.<EventHandle>}
    * @protected
    */
			this.eventHandles_ = [];
		}

		babelHelpers.inherits(EventHandler, _Disposable);
		babelHelpers.createClass(EventHandler, [{
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
	})(Disposable);

	this.steel.EventHandler = EventHandler;
}).call(this);
(function () {
	'use strict';

	var core = this.steel.core;
	var ComponentCollector = this.steel.ComponentCollector;
	var Disposable = this.steel.Disposable;

	/**
  * Collects inline events from a passed element, detaching previously
  * attached events that are not being used anymore.
  * @param {Component} component
  * @constructor
  * @extends {Disposable}
  */

	var EventsCollector = (function (_Disposable) {
		function EventsCollector(component) {
			babelHelpers.classCallCheck(this, EventsCollector);

			babelHelpers.get(Object.getPrototypeOf(EventsCollector.prototype), 'constructor', this).call(this);

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

		babelHelpers.inherits(EventsCollector, _Disposable);
		babelHelpers.createClass(EventsCollector, [{
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
				if (!core.isString(content)) {
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
					fnComponent = ComponentCollector.components[split[0]];
					if (!fnComponent) {
						console.error('No component with the id "' + split[0] + '" has been collected' + 'yet. Make sure that you specify an id for an existing component when ' + 'adding inline listeners.');
					}
				}
				fnComponent = fnComponent || this.component_;
				if (core.isFunction(fnComponent[fnName])) {
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
	})(Disposable);

	this.steel.EventsCollector = EventsCollector;
}).call(this);
(function () {
	'use strict';

	var array = this.steel.array;
	var core = this.steel.core;
	var dom = this.steel.dom;
	var features = this.steel.features;
	var html = this.steel.html;
	var object = this.steel.object;
	var string = this.steel.string;
	var Attribute = this.steel.Attribute;
	var ComponentCollector = this.steel.ComponentCollector;
	var EventEmitterProxy = this.steel.EventEmitterProxy;
	var EventHandler = this.steel.EventHandler;
	var EventsCollector = this.steel.EventsCollector;

	/**
  * Component collects common behaviors to be followed by UI components, such
  * as Lifecycle, bounding box element creation, CSS classes management,
  * events encapsulation and surfaces support. Surfaces are an area of the
  * component that can have information rendered into it. A component
  * manages multiple surfaces. Surfaces are only rendered when its content is
  * modified, representing render performance gains. For each surface, render
  * attributes could be associated, when the render context of a surface gets
  * modified the component Lifecycle re-paints the modified surface
  * automatically.
  *
  * Example:
  *
  * <code>
  * class CustomComponent extends Component {
  *   constructor(config) {
  *     super(config);
  *   }
  *
  *   decorateInternal() {
  *   }
  *
  *   renderInternal() {
  *     this.element.appendChild(this.getSurfaceElement('header'));
  *     this.element.appendChild(this.getSurfaceElement('bottom'));
  *   }
  *
  *   getSurfaceContent(surfaceId) {
  *   }
  *
  *   attached() {
  *   }
  *
  *   detached() {
  *   }
  * }
  *
  * CustomComponent.ATTRS = {
  *   title: { value: 'Title' },
  *   fontSize: { value: '10px' }
  * };
  *
  * CustomComponent.SURFACES = {
  *   header: { renderAttrs: ['title', 'fontSize'] },
  *   bottom: { renderAttrs: ['fontSize'] }
  * };
  * </code>
  *
  * @param {!Object} opt_config An object with the initial values for this component's
  *   attributes.
  * @constructor
  * @extends {Attribute}
  */

	var Component = (function (_Attribute) {
		function Component(opt_config) {
			babelHelpers.classCallCheck(this, Component);

			babelHelpers.get(Object.getPrototypeOf(Component.prototype), 'constructor', this).call(this, opt_config);

			/**
    * Holds data about all surfaces that were collected through the
    * `replaceSurfacePlaceholders_` method.
    * @type {!Array}
    * @protected
    */
			this.collectedSurfaces_ = [];

			/**
    * Gets all nested components.
    * @type {!Array<!Component>}
    */
			this.components = {};

			/**
    * Whether the element is being decorated.
    * @type {boolean}
    * @protected
    */
			this.decorating_ = false;

			/**
    * Holds events that were listened through the `delegate` Component function.
    * @type {EventHandler}
    * @protected
    */
			this.delegateEventHandler_ = null;

			/**
    * Instance of `EventEmitterProxy` which proxies events from the component's
    * element to the component itself.
    * @type {EventEmitterProxy}
    * @protected
    */
			this.elementEventProxy_ = null;

			/**
    * The `EventHandler` instance for events attached from the `events` attribute.
    * @type {!EventHandler}
    * @protected
    */
			this.eventsAttrHandler_ = new EventHandler();

			/**
    * Collects inline events from html contents.
    * @type {!EventsCollector}
    * @protected
    */
			this.eventsCollector_ = new EventsCollector(this);

			/**
    * Holds the number of generated ids for each surface's contents.
    * @type {!Object}
    * @protected
    */
			this.generatedIdCount_ = {};

			/**
    * Whether the element is in document.
    * @type {boolean}
    */
			this.inDocument = false;

			/**
    * Maps that index the surfaces instances by the surface id.
    * @type {Object}
    * @default null
    * @protected
    */
			this.surfaces_ = null;

			/**
    * Whether the element was rendered.
    * @type {boolean}
    */
			this.wasRendered = false;

			/**
    * The component's element will be appended to the element this variable is
    * set to, unless the user specifies another parent when calling `render` or
    * `attach`.
    * @type {!Element}
    */
			this.DEFAULT_ELEMENT_PARENT = document.body;

			core.mergeSuperClassesProperty(this.constructor, 'ELEMENT_CLASSES', this.mergeElementClasses_);
			core.mergeSuperClassesProperty(this.constructor, 'ELEMENT_TAG_NAME', array.firstDefinedValue);
			core.mergeSuperClassesProperty(this.constructor, 'SURFACE_TAG_NAME', array.firstDefinedValue);
			this.addSurfacesFromStaticHint_();

			this.delegateEventHandler_ = new EventHandler();

			this.created_();
		}

		babelHelpers.inherits(Component, _Attribute);
		babelHelpers.createClass(Component, [{
			key: 'addListenersFromObj_',

			/**
    * Adds the listeners specified in the given object.
    * @param {Object} events
    * @protected
    */
			value: function addListenersFromObj_(events) {
				var eventNames = Object.keys(events || {});
				for (var i = 0; i < eventNames.length; i++) {
					var fn = events[eventNames[i]];
					if (core.isString(fn)) {
						fn = this.eventsCollector_.getListenerFn(fn);
					}
					if (fn) {
						this.eventsAttrHandler_.add(this.on(eventNames[i], fn));
					}
				}
			}
		}, {
			key: 'addSingleListener_',

			/**
    * Overrides `addSingleListener_` from `EventEmitter`, so we can create
    * the `EventEmitterProxy` instance only when it's needed for the first
    * time.
    * @param {string} event
    * @param {!Function} listener
    * @param {Function=} opt_origin The original function that was added as a
    *   listener, if there is any.
    * @protected
    * @override
    */
			value: function addSingleListener_(event, listener, opt_origin) {
				if (!this.elementEventProxy_ && dom.supportsEvent(this.constructor.ELEMENT_TAG_NAME_MERGED, event)) {
					this.elementEventProxy_ = new EventEmitterProxy(this.element, this);
				}
				babelHelpers.get(Object.getPrototypeOf(Component.prototype), 'addSingleListener_', this).call(this, event, listener, opt_origin);
			}
		}, {
			key: 'addSurface',

			/**
    * Registers a surface to the component. Surface elements are not
    * automatically appended to the component element.
    * @param {string} surfaceId The surface id to be registered.
    * @param {Object=} opt_config Optional surface configuration.
    * @chainable
    */
			value: function addSurface(surfaceId, opt_config) {
				var config = opt_config || {};
				this.surfaces_[surfaceId] = config;
				if (config.componentName) {
					this.createSubComponent_(config.componentName, surfaceId);
				}
				this.cacheSurfaceRenderAttrs_(surfaceId);
				return this;
			}
		}, {
			key: 'addSurfaces',

			/**
    * Registers surfaces to the component. Surface elements are not
    * automatically appended to the component element.
    * @param {!Object.<string, Object=>} configs An object that maps the names
    *     of all the surfaces to be added to their configuration objects.
    * @chainable
    */
			value: function addSurfaces(configs) {
				for (var surfaceId in configs) {
					this.addSurface(surfaceId, configs[surfaceId]);
				}
				return this;
			}
		}, {
			key: 'addSurfacesFromStaticHint_',

			/**
    * Adds surfaces from super classes static hint.
    * @protected
    */
			value: function addSurfacesFromStaticHint_() {
				core.mergeSuperClassesProperty(this.constructor, 'SURFACES', this.mergeObjects_);
				this.surfaces_ = {};
				this.surfacesRenderAttrs_ = {};

				var configs = this.constructor.SURFACES_MERGED;
				for (var surfaceId in configs) {
					this.addSurface(surfaceId, object.mixin({}, configs[surfaceId]));
				}
			}
		}, {
			key: 'attach',

			/**
    * Invokes the attached Lifecycle. When attached, the component element is
    * appended to the DOM and any other action to be performed must be
    * implemented in this method, such as, binding DOM events. A component can
    * be re-attached multiple times.
    * @param {(string|Element)=} opt_parentElement Optional parent element
    *     to render the component.
    * @param {(string|Element)=} opt_siblingElement Optional sibling element
    *     to render the component before it. Relevant when the component needs
    *     to be rendered before an existing element in the DOM, e.g.
    *     `component.render(null, existingElement)`.
    * @protected
    * @chainable
    */
			value: function attach(opt_parentElement, opt_siblingElement) {
				if (!this.inDocument) {
					this.renderElement_(opt_parentElement, opt_siblingElement);
					this.inDocument = true;
					if (!this.wasRendered) {
						this.updatePlaceholderSurfaces_();
					}
					this.attached();
				}
				return this;
			}
		}, {
			key: 'attachInlineListeners_',

			/**
    * Attaches inline listeners that are found on the element's string content.
    * @protected
    */
			value: function attachInlineListeners_() {
				this.eventsCollector_.attachListeners(this.getElementContent_());
				this.elementContent_ = null;
			}
		}, {
			key: 'attached',

			/**
    * Lifecycle. When attached, the component element is appended to the DOM
    * and any other action to be performed must be implemented in this method,
    * such as, binding DOM events. A component can be re-attached multiple
    * times, therefore the undo behavior for any action performed in this phase
    * must be implemented on the detach phase.
    */
			value: function attached() {}
		}, {
			key: 'buildPlaceholderSurfaceData_',

			/**
    * Builds the data that should be used to create a surface that was found via
    * a string placeholder.
    * @param {string} type The surface type (either "s" or "c").
    * @param {string} extra String with extra information about the surface.
    * @return {!Object}
    * @protected
    */
			value: function buildPlaceholderSurfaceData_(type, extra) {
				return {
					componentName: type === Component.SurfaceType.COMPONENT ? extra : null
				};
			}
		}, {
			key: 'cacheSurfaceContent',

			/**
    * Caches the given content for the surface with the requested id.
    * @param {string} surfaceId
    * @param {string} content
    */
			value: function cacheSurfaceContent(surfaceId, content) {
				var cacheState = this.computeSurfaceCacheState_(content);
				var surface = this.getSurface(surfaceId);
				surface.cacheState = cacheState;
			}
		}, {
			key: 'cacheSurfaceRenderAttrs_',

			/**
    * Caches surface render attributes into a O(k) flat map representation.
    * Relevant for performance to calculate the surfaces group that were
    * modified by attributes mutation.
    * @param {string} surfaceId The surface id to be cached into the flat map.
    * @protected
    */
			value: function cacheSurfaceRenderAttrs_(surfaceId) {
				var attrs = this.getSurface(surfaceId).renderAttrs || [];
				for (var i = 0; i < attrs.length; i++) {
					this.surfacesRenderAttrs_[attrs[i]] = this.surfacesRenderAttrs_[attrs[i]] || {};
					this.surfacesRenderAttrs_[attrs[i]][surfaceId] = true;
				}
			}
		}, {
			key: 'clearSurfacesCache_',

			/**
    * Clears the surfaces content cache.
    * @protected
    */
			value: function clearSurfacesCache_() {
				for (var surfaceId in this.surfaces_) {
					this.getSurface(surfaceId).cacheState = Component.Cache.NOT_INITIALIZED;
				}
			}
		}, {
			key: 'compareCacheStates_',

			/**
    * Compares cache states.
    * @param {number} currentCacheState
    * @param {number} previousCacheState
    * @return {boolean} True if there's a cache hit, or false for cache miss.
    */
			value: function compareCacheStates_(currentCacheState, previousCacheState) {
				return currentCacheState !== Component.Cache.NOT_INITIALIZED && currentCacheState !== Component.Cache.NOT_CACHEABLE && currentCacheState === previousCacheState;
			}
		}, {
			key: 'computeSurfaceCacheState_',

			/**
    * Computes the cache state for the surface content. If value is string, the
    * cache state is represented by its hashcode.
    * @param {Object} value The value to calculate the cache state.
    * @return {Object} The computed cache state.
    * @protected
    */
			value: function computeSurfaceCacheState_(value) {
				if (core.isString(value)) {
					if (features.checkAttrOrderChange()) {
						value = this.convertHtmlToBrowserFormat_(value);
					}
					return string.hashCode(value);
				}
				return Component.Cache.NOT_CACHEABLE;
			}
		}, {
			key: 'computeSurfacesCacheStateFromDom_',

			/**
    * Computes the cache state for the surface content based on the decorated
    * DOM element. The innerHTML of the surface element is read and compressed
    * in order to minimize mismatches caused by breaking spaces or HTML
    * formatting differences that does not affect the content structure.
    * @protected
    */
			value: function computeSurfacesCacheStateFromDom_() {
				for (var surfaceId in this.surfaces_) {
					if (!this.getSurface(surfaceId).componentName) {
						this.cacheSurfaceContent(surfaceId, html.compress(this.getSurfaceElement(surfaceId).innerHTML));
					}
				}
			}
		}, {
			key: 'convertHtmlToBrowserFormat_',

			/**
    * Converts the given html string to the format the current browser uses
    * when html is rendered. This is done by rendering the html in a temporary
    * element, and returning its resulting rendered html.
    * @param {string} htmlString The html to be converted.
    * @return {string}
    * @protected
    */
			value: function convertHtmlToBrowserFormat_(htmlString) {
				var element = document.createElement('div');
				dom.append(element, htmlString);
				return element.innerHTML;
			}
		}, {
			key: 'createPlaceholderSurface_',

			/**
    * Creates a surface that was found via a string placeholder.
    * @param {string?} surfaceId
    * @param {string} type The surface type (either "s" or "c").
    * @param {string?} extra String with extra information about the surface.
    * @param {string=} opt_parentSurfaceId The id of the surface that contains
    *   the surface to be created, or undefined if there is none.
    * @return {string} The id of the created surface.
    * @protected
    */
			value: function createPlaceholderSurface_(surfaceId, type, extra, opt_parentSurfaceId) {
				surfaceId = surfaceId || this.generateSurfaceId_(type, opt_parentSurfaceId);
				if (!this.getSurface(surfaceId)) {
					this.addSurface(surfaceId, this.buildPlaceholderSurfaceData_(type, extra));
				}
				return surfaceId;
			}
		}, {
			key: 'createSubComponent_',

			/**
    * Creates a sub component.
    * @param {string} componentName
    * @param {string} componentId
    * @return {!Component}
    * @protected
    */
			value: function createSubComponent_(componentName, componentId) {
				this.components[componentId] = Component.componentsCollector.createComponent(componentName, componentId);
				return this.components[componentId];
			}
		}, {
			key: 'createSurfaceElement_',

			/**
    * Creates the surface element with its id namespaced to the component id.
    * @param {string} surfaceElementId The id of the element for the surface to be
    *   created.
    * @return {Element} The surface element.
    * @protected
    */
			value: function createSurfaceElement_(surfaceElementId) {
				var el = document.createElement(this.constructor.SURFACE_TAG_NAME_MERGED);
				el.id = surfaceElementId;
				return el;
			}
		}, {
			key: 'decorateAsSubComponent',

			/**
    * Decorates this component as a subcomponent, meaning that no rendering is
    * needed since it was already rendered by the parent component. Handles the
    * same logics that `renderAsSubComponent`, but also makes sure that the
    * surfaces content is updated if the html is incorrect for the given data.
    */
			value: function decorateAsSubComponent() {
				this.decorating_ = true;
				this.computeSurfacesCacheStateFromDom_();
				this.renderAsSubComponent();
				this.decorating_ = false;
			}
		}, {
			key: 'decorateInternal',

			/**
    * Lifecycle. Internal implementation for decoration. Any extra operation
    * necessary to prepare the component DOM must be implemented in this phase.
    */
			value: function decorateInternal() {}
		}, {
			key: 'delegate',

			/**
    * Listens to a delegate event on the component's element.
    * @param {string} eventName The name of the event to listen to.
    * @param {string} selector The selector that matches the child elements that
    *   the event should be triggered for.
    * @param {!function(!Object)} callback Function to be called when the event is
    *   triggered. It will receive the normalized event object.
    * @return {!DomEventHandle} Can be used to remove the listener.
    */
			value: function delegate(eventName, selector, callback) {
				var handle = dom.delegate(this.element, eventName, selector, callback);
				this.delegateEventHandler_.add(handle);
				return handle;
			}
		}, {
			key: 'detach',

			/**
    * Invokes the detached Lifecycle. When detached, the component element is
    * removed from the DOM and any other action to be performed must be
    * implemented in this method, such as, unbinding DOM events. A component
    * can be detached multiple times.
    * @chainable
    */
			value: function detach() {
				if (this.inDocument) {
					this.element.parentNode.removeChild(this.element);
					this.inDocument = false;
					this.detached();
				}
				this.eventsCollector_.detachAllListeners();
				return this;
			}
		}, {
			key: 'detached',

			/**
    * Lifecycle. When detached, the component element is removed from the DOM
    * and any other action to be performed must be implemented in this method,
    * such as, unbinding DOM events. A component can be detached multiple
    * times, therefore the undo behavior for any action performed in this phase
    * must be implemented on the attach phase.
    */
			value: function detached() {}
		}, {
			key: 'created_',

			/**
    * Internal implementation for the creation phase of the component.
    * @protected
    */
			value: function created_() {
				this.on('eventsChanged', this.onEventsChanged_);
				this.addListenersFromObj_(this.events);

				this.on('attrsChanged', this.handleAttributesChanges_);
				Component.componentsCollector.addComponent(this);
			}
		}, {
			key: 'decorate',

			/**
    * Lifecycle. Creates the component using existing DOM elements. Often the
    * component can be created using existing elements in the DOM to leverage
    * progressive enhancement. Any extra operation necessary to prepare the
    * component DOM must be implemented in this phase. Decorate phase replaces
    * render phase.
    *
    * Decoration Lifecycle:
    *   decorate - Decorate is manually called.
    *   decorateInternal - Internal implementation for decoration happens.
    *   render surfaces - All surfaces content are rendered.
    *   attribute synchronization - All synchronization methods are called.
    *   attach - Attach Lifecycle is called.
    * @chainable
    */
			value: function decorate() {
				if (this.inDocument) {
					throw new Error(Component.Error.ALREADY_RENDERED);
				}
				this.decorating_ = true;

				this.decorateInternal();

				// Need to go through all surface placeholders on decorate to make sure they are
				// properly created for the first time.
				this.replaceSurfacePlaceholders_(this.getElementContent_());

				this.computeSurfacesCacheStateFromDom_(); // TODO(edu): This optimization seems worth it, analyze it.
				this.renderSurfacesContent_(this.surfaces_); // TODO(edu): Sync surfaces on decorate?

				this.attachInlineListeners_();
				this.syncAttrs_();

				this.attach();

				this.decorating_ = false;
				this.wasRendered = true;

				return this;
			}
		}, {
			key: 'disposeSubComponents_',

			/**
    * Calls `dispose` on all subcomponents.
    * @protected
    */
			value: function disposeSubComponents_() {
				var ids = Object.keys(this.components);
				for (var i = 0; i < ids.length; i++) {
					var component = this.components[ids[i]];
					Component.componentsCollector.removeComponent(component);
					component.dispose();
				}
				this.components = null;
			}
		}, {
			key: 'disposeInternal',

			/**
    * @inheritDoc
    */
			value: function disposeInternal() {
				this.detach();

				if (this.elementEventProxy_) {
					this.elementEventProxy_.dispose();
					this.elementEventProxy_ = null;
				}

				this.delegateEventHandler_.removeAllListeners();
				this.delegateEventHandler_ = null;

				this.disposeSubComponents_();
				this.generatedIdCount_ = null;
				this.surfaces_ = null;
				this.surfacesRenderAttrs_ = null;
				babelHelpers.get(Object.getPrototypeOf(Component.prototype), 'disposeInternal', this).call(this);
			}
		}, {
			key: 'syncAttrs_',

			/**
    * Fires attributes synchronization changes for attributes.
    * @protected
    */
			value: function syncAttrs_() {
				var attrNames = this.getAttrNames();
				for (var i = 0; i < attrNames.length; i++) {
					this.fireAttrChange_(attrNames[i]);
				}
			}
		}, {
			key: 'syncAttrsFromChanges_',

			/**
    * Fires attributes synchronization changes for attributes.
    * @param {Object.<string, Object>} changes Object containing the attribute
    *     name as key and an object with newVal and prevVal as value.
    * @protected
    */
			value: function syncAttrsFromChanges_(changes) {
				for (var attr in changes) {
					this.fireAttrChange_(attr, changes[attr]);
				}
			}
		}, {
			key: 'findElementById_',

			/**
    * Finds the element that matches the given id on this component. This searches
    * on the document first, for performance. If the element is not found, it's
    * searched in the component's element directly.
    * @param {string} id
    * @return {Element}
    * @protected
    */
			value: function findElementById_(id) {
				return document.getElementById(id) || this.element.querySelector('#' + id);
			}
		}, {
			key: 'fireAttrChange_',

			/**
    * Fires attribute synchronization change for the attribute.
    * @param {Object.<string, Object>} change Object containing newVal and
    *     prevVal keys.
    * @protected
    */
			value: function fireAttrChange_(attr, opt_change) {
				var fn = this['sync' + attr.charAt(0).toUpperCase() + attr.slice(1)];
				if (core.isFunction(fn)) {
					if (!opt_change) {
						opt_change = {
							newVal: this[attr],
							prevVal: undefined
						};
					}
					fn.call(this, opt_change.newVal, opt_change.prevVal);
				}
			}
		}, {
			key: 'generateSurfaceId_',

			/**
    * Generates an id for a surface that was found inside the contents of the main
    * element or of a parent surface.
    * @param {string} type Either "comp" or "surface", to indicate the surface's type.
    * @param {string=} opt_parentSurfaceId The id of the parent surface, or undefined
    *   if there is none.
    * @return {string} The generated id.
    */
			value: function generateSurfaceId_(type, opt_parentSurfaceId) {
				var parentSurfaceId = opt_parentSurfaceId || '';
				var parentSurfacePrefix = parentSurfaceId ? parentSurfaceId + '-' : '';
				this.generatedIdCount_[parentSurfaceId] = (this.generatedIdCount_[parentSurfaceId] || 0) + 1;
				var id = parentSurfacePrefix + type + this.generatedIdCount_[parentSurfaceId];
				return type === Component.SurfaceType.COMPONENT ? this.makeSurfaceId_(id) : id;
			}
		}, {
			key: 'getComponentHtml',

			/**
    * Gets the html that should be used to build this component's main element with
    * some content.
    * @param {string} content
    * @return {string}
    */
			value: function getComponentHtml(content) {
				return this.getWrapperHtml_(this.constructor.ELEMENT_TAG_NAME_MERGED, this.id, content);
			}
		}, {
			key: 'getElementContent',

			/**
    * Gets the content that should be rendered in the component's main element.
    * Should be implemented by subclasses.
    * @return {Object|string} The content to be rendered. If the content is a
    *   string, surfaces can be represented by placeholders in the format specified
    *   by Component.SURFACE_REGEX.
    */
			value: function getElementContent() {}
		}, {
			key: 'getElementContent_',

			/**
    * Internal function for getting the component element's content. Stores the
    * result in a variable so it can be accessed later without building it again.
    * @return {Object|string}
    * @protected
    */
			value: function getElementContent_() {
				this.elementContent_ = this.elementContent_ || this.getElementContent();
				return this.elementContent_;
			}
		}, {
			key: 'getElementExtendedContent',

			/**
    * Calls `getElementContent` and replaces all placeholders in the returned content.
    * @return {string} The content with all placeholders already replaced.
    */
			value: function getElementExtendedContent() {
				return this.replaceSurfacePlaceholders_(this.getElementContent_());
			}
		}, {
			key: 'getModifiedSurfacesFromChanges_',

			/**
    * Gets surfaces that got modified by the specified attributes changes.
    * @param {Object.<string, Object>} changes Object containing the attribute
    *     name as key and an object with newVal and prevVal as value.
    * @return {Object.<string, boolean>} Object containing modified surface ids
    *     as key and true as value.
    */
			value: function getModifiedSurfacesFromChanges_(changes) {
				var surfaces = [];
				for (var attr in changes) {
					surfaces.push(this.surfacesRenderAttrs_[attr]);
				}
				return object.mixin.apply(null, surfaces);
			}
		}, {
			key: 'getNonComponentSurfaceHtml',

			/**
    * Same as `getSurfaceHtml`, but only called for non component surfaces.
    * @param {string} surfaceId
    * @param {string} content
    * @return {string}
    */
			value: function getNonComponentSurfaceHtml(surfaceId, content) {
				var surfaceElementId = this.makeSurfaceId_(surfaceId);
				return this.getWrapperHtml_(this.constructor.SURFACE_TAG_NAME_MERGED, surfaceElementId, content);
			}
		}, {
			key: 'getSurface',

			/**
    * Gets surface configuration object. If surface is not registered returns
    * null.
    * @param {string} surfaceId The surface id.
    * @return {?Object} The surface configuration object.
    */
			value: function getSurface(surfaceId) {
				return this.surfaces_[surfaceId] || null;
			}
		}, {
			key: 'getSurfaceContent',

			/**
    * Gets the content for the requested surface. Should be implemented by subclasses.
    * @param {string} surfaceId The surface id.
    * @return {Object|string} The content to be rendered. If the content is a
    *   string, surfaces can be represented by placeholders in the format specified
    *   by Component.SURFACE_REGEX.
    */
			value: function getSurfaceContent() {}
		}, {
			key: 'getSurfaceContent_',

			/**
    * Gets the content for the requested surface. By default this just calls
    * `getSurfaceContent`, but can be overriden to add more behavior (check
    * `SoyComponent` for an example).
    * @param {string} surfaceId The surface id.
    * @return {Object|string} The content to be rendered.
    * @protected
    */
			value: function getSurfaceContent_(surfaceId) {
				var surface = this.getSurface(surfaceId);
				if (surface.componentName) {
					if (this.components[surfaceId].wasRendered) {
						return '';
					} else {
						return this.components[surfaceId].getElementExtendedContent();
					}
				} else {
					return this.getSurfaceContent(surfaceId);
				}
			}
		}, {
			key: 'getSurfaceElement',

			/**
    * Queries from the document or creates an element for the surface. Surface
    * elements have its surface id namespaced to the component id, e.g. for a
    * component with id `gallery` and a surface with id `pictures` the surface
    * element will be represented by the id `gallery-pictures`. Surface
    * elements must also be appended to the component element.
    * @param {string} surfaceId The surface id.
    * @return {Element} The surface element or null if surface not registered.
    */
			value: function getSurfaceElement(surfaceId) {
				var surface = this.getSurface(surfaceId);
				if (!surface) {
					return null;
				}
				if (!surface.element) {
					if (surface.componentName) {
						surface.element = this.components[surfaceId].element;
					} else {
						var surfaceElementId = this.makeSurfaceId_(surfaceId);
						surface.element = this.findElementById_(surfaceElementId) || this.createSurfaceElement_(surfaceElementId);
					}
				}
				return surface.element;
			}
		}, {
			key: 'getSurfaceHtml',

			/**
    * Gets the html that should be used to build a surface's main element with its
    * content.
    * @param {string} surfaceId
    * @param {string} content
    * @return {string}
    */
			value: function getSurfaceHtml(surfaceId, content) {
				var surface = this.getSurface(surfaceId);
				if (surface.componentName) {
					return this.components[surfaceId].getComponentHtml(content);
				} else {
					return this.getNonComponentSurfaceHtml(surfaceId, content);
				}
			}
		}, {
			key: 'getWrapperHtml_',

			/**
    * Gets the html of an element.
    * @param {string} tag
    * @param {string} id
    * @param {string} content
    * @return {string}
    * @protected
    */
			value: function getWrapperHtml_(tag, id, content) {
				return '<' + tag + ' id="' + id + '">' + content + '</' + tag + '>';
			}
		}, {
			key: 'getSurfaces',

			/**
    * A map of surface ids to the respective surface object.
    * @return {!Object}
    */
			value: function getSurfaces() {
				return this.surfaces_;
			}
		}, {
			key: 'handleAttributesChanges_',

			/**
    * Handles attributes batch changes. Responsible for surface mutations and
    * attributes synchronization.
    * @param {Event} event
    * @protected
    */
			value: function handleAttributesChanges_(event) {
				if (this.inDocument) {
					this.renderSurfacesContent_(this.getModifiedSurfacesFromChanges_(event.changes));
				}
				this.syncAttrsFromChanges_(event.changes);
			}
		}, {
			key: 'onEventsChanged_',

			/**
    * Fired when the `events` attribute value is changed.
    * @param {!Object} event
    * @protected
    */
			value: function onEventsChanged_(event) {
				this.eventsAttrHandler_.removeAllListeners();
				this.addListenersFromObj_(event.newVal);
			}
		}, {
			key: 'makeId_',

			/**
    * Makes an unique id for the component.
    * @return {string} Unique id.
    * @protected
    */
			value: function makeId_() {
				return 'metal_c_' + core.getUid(this);
			}
		}, {
			key: 'makeSurfaceId_',

			/**
    * Makes the id for the surface scoped by the component.
    * @param {string} surfaceId The surface id.
    * @return {string}
    * @protected
    */
			value: function makeSurfaceId_(surfaceId) {
				return this.id + '-' + surfaceId;
			}
		}, {
			key: 'mergeElementClasses_',

			/**
    * Merges an array of values for the ELEMENT_CLASSES property into a single object.
    * @param {!Array.<string>} values The values to be merged.
    * @return {!string} The merged value.
    * @protected
    */
			value: function mergeElementClasses_(values) {
				return values.filter(function (val) {
					return val;
				}).join(' ');
			}
		}, {
			key: 'mergeObjects_',

			/**
    * Merges an array of objects into a single object. Used by the SURFACES static
    * variable.
    * @param {!Array} values The values to be merged.
    * @return {!Object} The merged value.
    * @protected
    */
			value: function mergeObjects_(values) {
				return object.mixin.apply(null, [{}].concat(values.reverse()));
			}
		}, {
			key: 'removeSurface',

			/**
    * Unregisters a surface and removes its element from the DOM.
    * @param {string} surfaceId The surface id.
    * @chainable
    */
			value: function removeSurface(surfaceId) {
				var el = this.getSurfaceElement(surfaceId);
				if (el && el.parentNode) {
					el.parentNode.removeChild(el);
				}
				delete this.surfaces_[surfaceId];
				return this;
			}
		}, {
			key: 'render',

			/**
    * Lifecycle. Renders the component into the DOM. Render phase replaces
    * decorate phase, without progressive enhancement support.
    *
    * Render Lifecycle:
    *   render - Decorate is manually called.
    *   renderInternal - Internal implementation for rendering happens.
    *   render surfaces - All surfaces content are rendered.
    *   attribute synchronization - All synchronization methods are called.
    *   attach - Attach Lifecycle is called.
    *
    * @param {(string|Element)=} opt_parentElement Optional parent element
    *     to render the component.
    * @param {(string|Element)=} opt_siblingElement Optional sibling element
    *     to render the component before it. Relevant when the component needs
    *     to be rendered before an existing element in the DOM, e.g.
    *     `component.render(null, existingElement)`.
    * @chainable
    */
			value: function render(opt_parentElement, opt_siblingElement) {
				if (this.wasRendered) {
					throw new Error(Component.Error.ALREADY_RENDERED);
				}

				this.renderInternal();

				this.clearSurfacesCache_();
				this.renderSurfacesContent_(this.surfaces_);

				this.attachInlineListeners_();
				this.syncAttrs_();

				this.attach(opt_parentElement, opt_siblingElement);

				this.wasRendered = true;

				return this;
			}
		}, {
			key: 'renderAsSubComponent',

			/**
    * Renders this component as a subcomponent, meaning that no actual rendering is
    * needed since it was already rendered by the parent component. This just handles
    * other logics from the rendering lifecycle, like attaching event listeners.
    */
			value: function renderAsSubComponent() {
				this.attachInlineListeners_();
				this.syncAttrs_();
				this.attach();
				this.wasRendered = true;
			}
		}, {
			key: 'renderComponentSurface_',

			/**
    * Renders a surface that holds a component.
    * @param {string} surfaceId
    * @param {(Object|string)?} opt_content The content to be rendered.
    * @protected
    */
			value: function renderComponentSurface_(surfaceId, opt_content) {
				var component = this.components[surfaceId];
				if (component.wasRendered) {
					Component.componentsCollector.updateComponent(surfaceId);
				} else if (opt_content) {
					var element = component.element;
					if (dom.isEmpty(element)) {
						// If we have the rendered content for this component, but it hasn't
						// been rendered in its element yet, we render it manually here. That
						// can happen if the subcomponent's element is set before the parent
						// element renders its content.
						dom.append(element, opt_content);
					}
					if (this.decorating_) {
						component.decorateAsSubComponent();
					} else {
						component.renderAsSubComponent();
					}
				} else {
					component.render();
				}
			}
		}, {
			key: 'renderElement_',

			/**
    * Renders the component element into the DOM.
    * @param {(string|Element)=} opt_parentElement Optional parent element
    *     to render the component.
    * @param {(string|Element)=} opt_siblingElement Optional sibling element
    *     to render the component before it. Relevant when the component needs
    *     to be rendered before an existing element in the DOM, e.g.
    *     `component.render(null, existingElement)`.
    * @protected
    */
			value: function renderElement_(opt_parentElement, opt_siblingElement) {
				var element = this.element;
				element.id = this.id;
				if (opt_siblingElement || !element.parentNode) {
					var parent = dom.toElement(opt_parentElement) || this.DEFAULT_ELEMENT_PARENT;
					parent.insertBefore(element, dom.toElement(opt_siblingElement));
				}
			}
		}, {
			key: 'renderInternal',

			/**
    * Lifecycle. Internal implementation for rendering. Any extra operation
    * necessary to prepare the component DOM must be implemented in this phase.
    */
			value: function renderInternal() {
				var content = this.getElementExtendedContent();
				if (content) {
					dom.append(this.element, content);
				}
			}
		}, {
			key: 'renderPlaceholderSurfaceContents_',

			/**
    * Renders the contents of all the surface placeholders found in the given content.
    * @param {string} content
    * @param {string} surfaceId The id of surface the content is from.
    * @protected
    */
			value: function renderPlaceholderSurfaceContents_(content, surfaceId) {
				var instance = this;
				content.replace(Component.SURFACE_REGEX, function (match, type, id) {
					id = id || instance.generateSurfaceId_(type, surfaceId);
					instance.renderSurfaceContent(id);
					return match;
				});
			}
		}, {
			key: 'renderSurfaceContent',

			/**
    * Render content into a surface. If the specified content is the same of
    * the current surface content, nothing happens. If the surface cache state
    * is not initialized or the content is not eligible for cache or content is
    * different, the surfaces re-renders. It's not recommended to use this
    * method directly since surface content can be provided by
    * `getSurfaceContent(surfaceId)`.
    * @param {string} surfaceId The surface id.
    * @param {(Object|string)?} opt_content The content to be rendered.
    * @param {string?} opt_cacheContent The content that should be cached for
    *   this surface. If none is given, the rendered content will be used for this.
    */
			value: function renderSurfaceContent(surfaceId, opt_content, opt_cacheContent) {
				var surface = this.getSurface(surfaceId);
				if (surface.componentName) {
					this.renderComponentSurface_(surfaceId, opt_content);
					return;
				}

				var content = opt_content || this.getSurfaceContent_(surfaceId);
				if (core.isDefAndNotNull(content)) {
					var previousCacheState = surface.cacheState;
					var cacheContent = opt_cacheContent || content;

					// We cache the entire original content first when decorating so we can compare
					// with the full content we got from the dom. After comparing, we cache the correct
					// value so updates can work as expected for this surface.
					this.cacheSurfaceContent(surfaceId, this.decorating_ ? content : cacheContent);
					var cacheHit = this.compareCacheStates_(surface.cacheState, previousCacheState);
					if (this.decorating_) {
						this.cacheSurfaceContent(surfaceId, cacheContent);
					}

					if (cacheHit) {
						if (this.decorating_) {
							this.eventsCollector_.attachListeners(cacheContent, surfaceId);
						}
						this.renderPlaceholderSurfaceContents_(content, surfaceId);
					} else {
						this.eventsCollector_.attachListeners(cacheContent, surfaceId);
						this.replaceSurfaceContent_(surfaceId, content);
					}
				}
			}
		}, {
			key: 'renderSurfacesContent_',

			/**
    * Renders all surfaces contents ignoring the cache.
    * @param {Object.<string, Object=>} surfaces Object map where the key is
    *     the surface id and value the optional surface configuration.
    * @protected
    */
			value: function renderSurfacesContent_(surfaces) {
				this.generatedIdCount_ = {};
				for (var surfaceId in surfaces) {
					if (!this.getSurface(surfaceId).handled) {
						this.renderSurfaceContent(surfaceId);
					}
				}
				if (this.wasRendered) {
					this.updatePlaceholderSurfaces_();
					this.eventsCollector_.detachUnusedListeners();
				}
			}
		}, {
			key: 'replaceSurfaceContent_',

			/**
    * Replaces the content of a surface with a new one.
    * @param {string} surfaceId The surface id.
    * @param {Element|string} content The content to be rendered.
    * @protected
    */
			value: function replaceSurfaceContent_(surfaceId, content) {
				content = this.replaceSurfacePlaceholders_(content, surfaceId);
				var el = this.getSurfaceElement(surfaceId);
				dom.removeChildren(el);
				dom.append(el, content);
			}
		}, {
			key: 'replaceSurfacePlaceholders_',

			/**
    * Replaces the given content's surface placeholders with their real contents.
    * @param {string|Element} content
    * @param {string=} opt_surfaceId The id of the surface that contains the given
    *   content, or undefined if the content is from the main element.
    * @return {string} The final string with replaced placeholders.
    * @protected
    */
			value: function replaceSurfacePlaceholders_(content, opt_surfaceId) {
				if (!core.isString(content)) {
					return content;
				}

				var instance = this;
				return content.replace(Component.SURFACE_REGEX, function (match, type, id, extra) {
					// Surfaces should already have been created before being rendered so they can be
					// accessed from their getSurfaceContent calls.
					id = instance.createPlaceholderSurface_(id, type, extra, opt_surfaceId);
					instance.getSurface(id).handled = true;

					var surfaceContent = instance.getSurfaceContent_(id);
					var expandedContent = instance.replaceSurfacePlaceholders_(surfaceContent, id);
					var surfaceHtml = instance.getSurfaceHtml(id, expandedContent);
					instance.collectedSurfaces_.push({
						cacheContent: surfaceContent,
						content: expandedContent,
						surfaceId: id
					});

					return surfaceHtml;
				});
			}
		}, {
			key: 'setterElementFn_',

			/**
    * Setter logic for element attribute.
    * @param {string|Element} val
    * @return {Element}
    * @protected
    */
			value: function setterElementFn_(val) {
				var element = dom.toElement(val);
				if (!element) {
					element = this.valueElementFn_();
				}
				return element;
			}
		}, {
			key: 'syncElementClasses',

			/**
    * Attribute synchronization logic for the `elementClasses` attribute.
    * @param {string} newVal
    * @param {string} prevVal
    */
			value: function syncElementClasses(newVal, prevVal) {
				var classesToAdd = this.constructor.ELEMENT_CLASSES_MERGED;
				if (newVal) {
					classesToAdd = classesToAdd + ' ' + newVal;
				}
				if (prevVal) {
					dom.removeClasses(this.element, prevVal);
				}
				dom.addClasses(this.element, classesToAdd);
			}
		}, {
			key: 'syncVisible',

			/**
    * Attribute synchronization logic for `visible` attribute.
    * Updates the element's display value according to its visibility.
    * @param {boolean} newVal
    */
			value: function syncVisible(newVal) {
				this.element.style.display = newVal ? '' : 'none';
			}
		}, {
			key: 'updatePlaceholderSurface_',

			/**
    * Updates a surface after it has been rendered through placeholders.
    * @param {!{content: string, cacheContent: string, surfaceId: string}} collectedData
    *   Data about the collected surface. Should have the surface's id, content and the
    *   content that should be cached for it.
    * @protected
    */
			value: function updatePlaceholderSurface_(collectedData) {
				var surfaceId = collectedData.surfaceId;
				var surface = this.getSurface(surfaceId);
				if (this.decorating_ || surface.element || surface.componentName) {
					// This surface already has an element, so it needs to replace the rendered
					// element.
					var elementId = surface.componentName ? surfaceId : this.makeSurfaceId_(surfaceId);
					var placeholder = this.findElementById_(elementId);
					dom.replace(placeholder, this.getSurfaceElement(surfaceId));
					this.renderSurfaceContent(surfaceId, collectedData.content, collectedData.cacheContent);
				} else {
					// This surface's element hasn't been created yet, so it doesn't need
					// to replace the rendered element. Let's cache the content so it won't rerender.
					this.cacheSurfaceContent(surfaceId, collectedData.cacheContent);
					this.eventsCollector_.attachListeners(collectedData.cacheContent, surfaceId);
				}
			}
		}, {
			key: 'updatePlaceholderSurfaces_',

			/**
    * Updates all collected surfaces.
    * @protected
    */
			value: function updatePlaceholderSurfaces_() {
				for (var i = this.collectedSurfaces_.length - 1; i >= 0; i--) {
					this.updatePlaceholderSurface_(this.collectedSurfaces_[i]);
					this.getSurface(this.collectedSurfaces_[i].surfaceId).handled = false;
				}
				this.collectedSurfaces_ = [];
			}
		}, {
			key: 'validatorElementFn_',

			/**
    * Validator logic for element attribute.
    * @param {string|Element} val
    * @return {boolean} True if val is a valid element.
    * @protected
    */
			value: function validatorElementFn_(val) {
				return core.isElement(val) || core.isString(val);
			}
		}, {
			key: 'validatorElementClassesFn_',

			/**
    * Validator logic for elementClasses attribute.
    * @param {string} val
    * @return {boolean} True if val is a valid element classes.
    * @protected
    */
			value: function validatorElementClassesFn_(val) {
				return core.isString(val);
			}
		}, {
			key: 'validatorEventsFn_',

			/**
    * Validator logic for the `events` attribute.
    * @param {Object} val
    * @return {boolean}
    * @protected
    */
			value: function validatorEventsFn_(val) {
				return !core.isDefAndNotNull(val) || core.isObject(val);
			}
		}, {
			key: 'validatorIdFn_',

			/**
    * Validator logic for the `id` attribute.
    * @param {string} val
    * @return {boolean} True if val is a valid id.
    * @protected
    */
			value: function validatorIdFn_(val) {
				return core.isString(val);
			}
		}, {
			key: 'valueElementFn_',

			/**
    * Provides the default value for element attribute.
    * @return {Element} The element.
    * @protected
    */
			value: function valueElementFn_() {
				return document.createElement(this.constructor.ELEMENT_TAG_NAME_MERGED);
			}
		}, {
			key: 'valueIdFn_',

			/**
    * Provides the default value for id attribute.
    * @return {string} The id.
    * @protected
    */
			value: function valueIdFn_() {
				var element = this.element;
				return element && element.id ? element.id : this.makeId_();
			}
		}]);
		return Component;
	})(Attribute);

	/**
  * Helper responsible for extracting components from strings and config data.
  * @type {!ComponentCollector}
  * @protected
  * @static
  */
	Component.componentsCollector = new ComponentCollector();

	/**
  * Component attributes definition.
  * @type {Object}
  * @static
  */
	Component.ATTRS = {
		/**
   * Component element bounding box.
   * @type {Element}
   * @writeOnce
   */
		element: {
			setter: 'setterElementFn_',
			validator: 'validatorElementFn_',
			valueFn: 'valueElementFn_',
			writeOnce: true
		},

		/**
   * CSS classes to be applied to the element.
   * @type {Array.<string>}
   */
		elementClasses: {
			validator: 'validatorElementClassesFn_'
		},

		/**
   * Listeners that should be attached to this component. Should be provided as an object,
   * where the keys are event names and the values are the listener functions (or function
   * names).
   * @type {Object<string, (function()|string)>}
   */
		events: {
			validator: 'validatorEventsFn_',
			value: null
		},

		/**
   * Component element id. If not specified will be generated.
   * @type {string}
   * @writeOnce
   */
		id: {
			validator: 'validatorIdFn_',
			valueFn: 'valueIdFn_',
			writeOnce: true
		},

		/**
   * Indicates if the component is visible or not.
   * @type {boolean}
   */
		visible: {
			validator: core.isBoolean,
			value: true
		}
	};

	/**
  * CSS classes to be applied to the element.
  * @type {string}
  * @protected
  * @static
  */
	Component.ELEMENT_CLASSES = 'component';

	/**
  * Element tag name is a string that specifies the type of element to be
  * created. The nodeName of the created element is initialized with the
  * value of tag name.
  * @type {string}
  * @default div
  * @protected
  * @static
  */
	Component.ELEMENT_TAG_NAME = 'div';

	/**
  * The regex used to search for surface placeholders.
  * @type {RegExp}
  * @static
  */
	Component.SURFACE_REGEX = /\%\%\%\%~(s|c)(?:-([^~:]+))?(?::([^~]+))?~\%\%\%\%/g;

	/**
  * Surface tag name is a string that specifies the type of element to be
  * created for the surfaces. The nodeName of the created element is
  * initialized with the value of tag name.
  * @type {string}
  * @default div
  * @protected
  * @static
  */
	Component.SURFACE_TAG_NAME = 'div';

	/**
  * Cache states for the component.
  * @enum {string}
  */
	Component.Cache = {
		/**
   * Cache is not allowed for this state.
   */
		NOT_CACHEABLE: -1,

		/**
   * Cache not initialized.
   */
		NOT_INITIALIZED: -2
	};

	/**
  * Errors thrown by the component.
  * @enum {string}
  */
	Component.Error = {
		/**
   * Error when the component is already rendered and another render attempt
   * is made.
   */
		ALREADY_RENDERED: 'Component already rendered'
	};

	/**
  * Valid surface types that can be used for string placeholders.
  * @enum {string}
  */
	Component.SurfaceType = {
		COMPONENT: 'c',
		NORMAL: 's'
	};

	/**
  * A list with attribute names that will automatically be rejected as invalid.
  * @type {!Array<string>}
  */
	Component.INVALID_ATTRS = ['components', 'elementContent'];

	this.steel.Component = Component;
}).call(this);
(function () {
	'use strict';

	var core = this.steel.core;
	var dom = this.steel.dom;
	var Component = this.steel.Component;

	/**
  * We need to listen to calls to soy deltemplates so we can use them to
  * properly instantiate and update child components defined through soy.
  * TODO: Switch to using proper AOP.
  */
	var originalGetDelegateFn;

	if (typeof soy === 'object') {
		originalGetDelegateFn = soy.$$getDelegateFn;
	}

	/**
  * Special Component class that handles a better integration between soy templates
  * and the components. It allows for automatic rendering of surfaces that have soy
  * templates defined with their names, skipping the call to `getSurfaceContent`.
  * @param {Object} opt_config An object with the initial values for this component's
  *   attributes.
  * @constructor
  * @extends {Component}
  */

	var SoyComponent = (function (_Component) {
		function SoyComponent(opt_config) {
			babelHelpers.classCallCheck(this, SoyComponent);

			babelHelpers.get(Object.getPrototypeOf(SoyComponent.prototype), 'constructor', this).call(this, opt_config);

			core.mergeSuperClassesProperty(this.constructor, 'TEMPLATES', this.mergeObjects_);
			this.addSurfacesFromTemplates_();

			/**
    * Indicates which surface is currently being rendered, or null if none is.
    * @type {boolean}
    * @protected
    */
			this.surfaceBeingRendered_ = null;

			/**
    * Flags indicating which surface names have already been found on this component's content.
    * @type {!Object<string, boolean>}
    * @protected
    */
			this.firstSurfaceFound_ = {};

			/**
    * Holds the data that should be passed to the next template call for a surface,
    * mapped by surface id.
    * @type {!Object<string, Object>}
    * @protected
    */
			this.nextSurfaceCallData_ = {};
		}

		babelHelpers.inherits(SoyComponent, _Component);
		babelHelpers.createClass(SoyComponent, [{
			key: 'addSurfacesFromTemplates_',

			/**
    * Adds surfaces for each registered template that is not named `element`.
    * @protected
    */
			value: function addSurfacesFromTemplates_() {
				var templates = this.constructor.TEMPLATES_MERGED;
				var templateNames = Object.keys(templates);
				for (var i = 0; i < templateNames.length; i++) {
					var templateName = templateNames[i];
					if (templateName !== 'content' && templateName.substr(0, 13) !== '__deltemplate') {
						var surface = this.getSurface(templateName);
						if (!surface) {
							this.addSurface(templateName, {
								renderAttrs: templates[templateName].params,
								templateName: templateName
							});
						}
					}
				}
			}
		}, {
			key: 'buildComponentConfigData_',

			/**
    * Builds the config data for a component from the data that was passed to its
    * soy template function.
    * @param {string} id The id of the component.
    * @param {!Object} templateData
    * @return {!Object} The component's config data.
    * @protected
    */
			value: function buildComponentConfigData_(id, templateData) {
				var config = {
					id: id
				};
				for (var key in templateData) {
					config[key] = templateData[key];
				}
				return config;
			}
		}, {
			key: 'buildPlaceholderSurfaceData_',

			/**
    * Adds the template name to the creation data for placeholder surfaces.
    * @param {string} type The surface type (either "s" or "c").
    * @param {string} extra String with extra information about the surface.
    * @return {!Object}
    * @protected
    */
			value: function buildPlaceholderSurfaceData_(type, extra) {
				var data = babelHelpers.get(Object.getPrototypeOf(SoyComponent.prototype), 'buildPlaceholderSurfaceData_', this).call(this, type, extra);
				if (type === Component.SurfaceType.NORMAL) {
					data.templateName = extra;
				}
				return data;
			}
		}, {
			key: 'buildTemplateData_',

			/**
    * Builds the data object that should be passed to a template from this component.
    * @return {!Object}
    * @protected
    */
			value: function buildTemplateData_() {
				var names = this.getAttrNames().filter(function (name) {
					// Get all attribute values except for "element", since it helps performance and this
					// attribute shouldn't be referenced inside a soy template anyway.
					return name !== 'element';
				});
				return this.getAttrs(names);
			}
		}, {
			key: 'generateSoySurfaceId_',

			/**
    * Generates the id for a surface that was found by a soy template call.
    * @param {string} templateName
    * @return {string}
    */
			value: function generateSoySurfaceId_(templateName) {
				if (!this.surfaceBeingRendered_ && !this.firstSurfaceFound_[templateName]) {
					this.firstSurfaceFound_[templateName] = true;
					return templateName;
				} else {
					return this.generateSurfaceId_(Component.SurfaceType.NORMAL, this.surfaceBeingRendered_);
				}
			}
		}, {
			key: 'getComponentHtml',

			/**
    * Overrides Component's original behavior so the component's html may be rendered
    * by its template.
    * @param {string} content
    * @return {string}
    * @override
    */
			value: function getComponentHtml(content) {
				return this.renderElementDelTemplate_(content);
			}
		}, {
			key: 'getElementContent',

			/**
    * Gets the content that should be rendered in the component's main element by
    * rendering the `content` soy template.
    * @return {?string} The template's result content, or undefined if the
    *   template doesn't exist.
    */
			value: function getElementContent() {
				this.surfaceBeingRendered_ = null;
				return this.renderTemplateByName_('content');
			}
		}, {
			key: 'getNonComponentSurfaceHtml',

			/**
    * Overrides Component's original behavior so surface's html may be rendered by
    * their templates.
    * @param {string} surfaceId
    * @param {string} content
    * @return {string}
    */
			value: function getNonComponentSurfaceHtml(surfaceId, content) {
				return this.renderElementDelTemplate_(content, surfaceId);
			}
		}, {
			key: 'getSurfaceContent',

			/**
    * Makes the default behavior of rendering surfaces automatically render the
    * appropriate soy template when one exists.
    * @param {string} surfaceId The surface id.
    * @return {Object|string} The content to be rendered.
    * @override
    */
			value: function getSurfaceContent(surfaceId) {
				var surface = this.getSurface(surfaceId);
				var data = this.nextSurfaceCallData_[surfaceId];
				this.nextSurfaceCallData_[surfaceId] = null;
				this.surfaceBeingRendered_ = surfaceId;
				return this.renderTemplateByName_(surface.templateName, data);
			}
		}, {
			key: 'handleGetDelegateFnCall_',

			/**
    * Handles a call to the soy function for getting delegate functions.
    * @param {string} delTemplateId
    * @return {!function}
    * @protected
    */
			value: function handleGetDelegateFnCall_(delTemplateId) {
				var index = delTemplateId.indexOf('.');
				if (index === -1) {
					return this.handleTemplateCall_.bind(this, delTemplateId);
				} else {
					return this.handleSurfaceCall_.bind(this, delTemplateId.substr(index + 1));
				}
			}
		}, {
			key: 'handleSurfaceCall_',

			/**
    * Handles a call to the SoyComponent surface template.
    * @param {string} surfaceName The surface's name.
    * @param {!Object} data The data the template was called with.
    * @return {string} A placeholder to be rendered instead of the content the template
    *   function would have returned.
    * @protected
    */
			value: function handleSurfaceCall_(surfaceName, data) {
				var surfaceId = data.surfaceId;
				if (!core.isDefAndNotNull(surfaceId)) {
					surfaceId = this.generateSoySurfaceId_(surfaceName);
				}
				this.nextSurfaceCallData_[surfaceId] = data;
				return '%%%%~s-' + surfaceId + ':' + surfaceName + '~%%%%';
			}
		}, {
			key: 'handleTemplateCall_',

			/**
    * Handles a call to the SoyComponent component template.
    * @param {string} componentName The component's name.
    * @param {Object} data The data the template was called with.
    * @return {string} A placeholder to be rendered instead of the content the template
    *   function would have returned.
    * @protected
    */
			value: function handleTemplateCall_(componentName, data) {
				var id = (data || {}).id || this.generateSurfaceId_(Component.SurfaceType.COMPONENT, this.surfaceBeingRendered_);
				Component.componentsCollector.setNextComponentData(id, this.buildComponentConfigData_(id, data));
				return '%%%%~c-' + id + ':' + componentName + '~%%%%';
			}
		}, {
			key: 'renderElementDelTemplate_',

			/**
    * Renders the element deltemplate for this component or for one of its surfaces.
    * @param {?string} content
    * @param {string=} opt_surfaceId
    * @return {string}
    */
			value: function renderElementDelTemplate_(content, opt_surfaceId) {
				var templateName = this.constructor.NAME;
				if (opt_surfaceId) {
					templateName += '.' + this.getSurface(opt_surfaceId).templateName;
				}
				var templateFn = soy.$$getDelegateFn(templateName, 'element', true);
				var data = {
					elementClasses: this.elementClasses,
					elementContent: SoyComponent.sanitizeHtml(content || ''),
					id: this.id || this.makeId_(),
					surfaceId: opt_surfaceId
				};
				return templateFn(data, null, {}).content;
			}
		}, {
			key: 'renderTemplate_',

			/**
    * Renders the specified template.
    * @param {!function()} templateFn
    * @param {Object=} opt_data
    * @return {string} The template's result content.
    */
			value: function renderTemplate_(templateFn, opt_data) {
				soy.$$getDelegateFn = this.handleGetDelegateFnCall_.bind(this);
				var content = templateFn(opt_data || this.buildTemplateData_(), null, {}).content;
				soy.$$getDelegateFn = originalGetDelegateFn;
				return content;
			}
		}, {
			key: 'renderTemplateByName_',

			/**
    * Renders the template with the specified name.
    * @param {string} templateName
    * @param {Object=} opt_data
    * @return {string} The template's result content.
    */
			value: function renderTemplateByName_(templateName, opt_data) {
				var elementTemplate = this.constructor.TEMPLATES_MERGED[templateName];
				if (core.isFunction(elementTemplate)) {
					return this.renderTemplate_(elementTemplate, opt_data);
				}
			}
		}, {
			key: 'valueElementFn_',

			/**
    * Provides the default value for element attribute.
    * @return {Element} The element.
    * @protected
    */
			value: function valueElementFn_() {
				var rendered = this.getComponentHtml();
				if (rendered) {
					var frag = dom.buildFragment(rendered);
					var element = frag.childNodes[0];
					// Remove element from fragment, so it won't have a parent. Otherwise,
					// the `attach` method will think that the element has already been
					// attached.
					frag.removeChild(element);
					return element;
				}

				return babelHelpers.get(Object.getPrototypeOf(SoyComponent.prototype), 'valueElementFn_', this).call(this);
			}
		}], [{
			key: 'createComponentFromTemplate',

			/**
    * Creates and instantiates a component that has the given soy template function as its
    * main content template. All keys present in the config object, if one is given, will be
    * attributes of this component, and the object itself will be passed to the constructor.
    * @param {!function()} templateFn
    * @param {(Element|string)=} opt_element The element that should be decorated. If none is given,
    *   one will be created and appended to the document body.
    * @param {Object=} opt_data Data to be passed to the soy template when it's called.
    * @return {!SoyComponent}
    * @static
    */
			value: function createComponentFromTemplate(templateFn, opt_element, opt_data) {
				var TemplateComponent = (function (_SoyComponent) {
					function TemplateComponent() {
						babelHelpers.classCallCheck(this, TemplateComponent);
						babelHelpers.get(Object.getPrototypeOf(TemplateComponent.prototype), 'constructor', this).apply(this, arguments);
					}

					babelHelpers.inherits(TemplateComponent, _SoyComponent);
					return TemplateComponent;
				})(SoyComponent);

				TemplateComponent.TEMPLATES = {
					content: function content(opt_attrs, opt_ignored, opt_ijData) {
						return templateFn(opt_data || {}, opt_ignored, opt_ijData);
					}
				};
				return new TemplateComponent({
					element: opt_element
				});
			}
		}, {
			key: 'decorateFromTemplate',

			/**
    * Decorates html rendered by the given soy template function, instantiating any referenced
    * components in it.
    * @param {!function()} templateFn
    * @param {(Element|string)=} opt_element The element that should be decorated. If none is given,
    *   one will be created and appended to the document body.
    * @param {Object=} opt_data Data to be passed to the soy template when it's called.
    * @return {!SoyComponent} The component that was created for this action. Contains
    *   references to components that were rendered by the given template function.
    * @static
    */
			value: function decorateFromTemplate(templateFn, opt_element, opt_data) {
				return SoyComponent.createComponentFromTemplate(templateFn, opt_element, opt_data).decorate();
			}
		}, {
			key: 'renderFromTemplate',

			/**
    * Renders the given soy template function, instantiating any referenced components in it.
    * @param {!function()} templateFn
    * @param {(Element|string)=} opt_element The element that should be decorated. If none is given,
    *   one will be created and appended to the document body.
    * @param {Object=} opt_data Data to be passed to the soy template when it's called.
    * @return {!SoyComponent} The component that was created for this action. Contains
    *   references to components that were rendered by the given template function.
    * @static
    */
			value: function renderFromTemplate(templateFn, opt_element, opt_data) {
				return SoyComponent.createComponentFromTemplate(templateFn, opt_element, opt_data).render();
			}
		}, {
			key: 'sanitizeHtml',

			/**
    * Sanitizes the given html string, so it can skip escaping when passed to a
    * soy template.
    * @param {string} html
    * @return {soydata.SanitizedHtml}
    * @protected
    */
			value: function sanitizeHtml(html) {
				return soydata.VERY_UNSAFE.ordainSanitizedHtml(html);
			}
		}]);
		return SoyComponent;
	})(Component);

	/**
  * The soy templates for this component. Templates that have the same
  * name of a registered surface will be used for automatically rendering
  * it.
  * @type {Object<string, !function(Object):Object>}
  * @protected
  * @static
  */
	SoyComponent.TEMPLATES = {};

	this.steel.SoyComponent = SoyComponent;
}).call(this);
(function () {
	'use strict';

	var dom = this.steel.dom;
	var features = this.steel.features;

	var mouseEventMap = {
		mouseenter: 'mouseover',
		mouseleave: 'mouseout',
		pointerenter: 'pointerover',
		pointerleave: 'pointerout'
	};
	Object.keys(mouseEventMap).forEach(function (eventName) {
		dom.registerCustomEvent(eventName, {
			delegate: true,
			handler: function handler(callback, event) {
				var related = event.relatedTarget;
				var target = event.delegateTarget || event.target;
				if (!related || related !== target && !target.contains(related)) {
					event.customType = eventName;
					return callback(event);
				}
			},
			originalEvent: mouseEventMap[eventName]
		});
	});

	var animationEventMap = {
		animation: 'animationend',
		transition: 'transitionend'
	};
	Object.keys(animationEventMap).forEach(function (eventType) {
		var eventName = animationEventMap[eventType];
		dom.registerCustomEvent(eventName, {
			event: true,
			delegate: true,
			handler: function handler(callback, event) {
				event.customType = eventName;
				return callback(event);
			},
			originalEvent: features.checkAnimationEventName()[eventType]
		});
	});
}).call(this);
(function () {
	'use strict';

	var core = this.steel.core;
	var dom = this.steel.dom;
	var features = this.steel.features;

	var Anim = (function () {
		function Anim() {
			babelHelpers.classCallCheck(this, Anim);
		}

		babelHelpers.createClass(Anim, null, [{
			key: 'emulateEnd',

			/**
    * Emulates animation or transition end event, the end event with longer
    * duration will be used by the emulation. If they have the same value,
    * transitionend will be emulated.
    * @param {Element} element
    * @param {number} opt_durationMs
    * @return {object} Object containing `abort` function.
    */
			value: function emulateEnd(element, opt_durationMs) {
				if (this.getComputedDurationMs(element, 'animation') > this.getComputedDurationMs(element, 'transition')) {
					return this.emulateEnd_(element, 'animation', opt_durationMs);
				} else {
					return this.emulateEnd_(element, 'transition', opt_durationMs);
				}
			}
		}, {
			key: 'emulateAnimationEnd',

			/**
    * Emulates animation end event. If `opt_durationMs` not specified the value
    * will read from computed style for animation-duration.
    * @param {Element} element
    * @param {number} opt_durationMs
    * @return {object} Object containing `abort` function.
    */
			value: function emulateAnimationEnd(element, opt_durationMs) {
				return this.emulateEnd_(element, 'animation', opt_durationMs);
			}
		}, {
			key: 'emulateTransitionEnd',

			/**
    * Emulates transition end event. If `opt_durationMs` not specified the
    * value will read from computed style for transition-duration.
    * @param {Element} element
    * @param {number} opt_durationMs
    * @return {object} Object containing `abort` function.
    */
			value: function emulateTransitionEnd(element, opt_durationMs) {
				this.emulateEnd_(element, 'transition', opt_durationMs);
			}
		}, {
			key: 'emulateEnd_',

			/**
    * Emulates transition or animation end.
    * @param {Element} element
    * @param {string} type
    * @param {number} opt_durationMs
    * @return {object} Object containing `abort` function.
    * @protected
    */
			value: function emulateEnd_(element, type, opt_durationMs) {
				var duration = opt_durationMs;
				if (!core.isDef(opt_durationMs)) {
					duration = this.getComputedDurationMs(element, type);
				}

				var delayed = setTimeout(function () {
					dom.triggerEvent(element, features.checkAnimationEventName()[type]);
				}, duration);

				var abort = function abort() {
					clearTimeout(delayed);
					hoistedEvtHandler.removeListener();
				};
				var hoistedEvtHandler = dom.once(element, type + 'end', abort);

				return {
					abort: abort
				};
			}
		}, {
			key: 'getComputedDurationMs',

			/**
    * Gets computed style duration for duration.
    * @param {Element} element
    * @param {string} type
    * @return {number} The computed duration in milliseconds.
    */
			value: function getComputedDurationMs(element, type) {
				return (parseFloat(window.getComputedStyle(element, null).getPropertyValue(type + '-duration')) || 0) * 1000;
			}
		}]);
		return Anim;
	})();

	this.steel.Anim = Anim;
}).call(this);
(function () {
  /* jshint ignore:start */
  'use strict';

  var ComponentRegistry = this.steel.ComponentRegistry;

  var Templates = ComponentRegistry.Templates;
  // This file was automatically generated from Alert.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace Templates.Alert.
   * @hassoydeltemplate {Alert}
   * @hassoydeltemplate {Alert.body}
   * @hassoydeltemplate {Alert.dismiss}
   * @hassoydelcall {Alert}
   * @hassoydelcall {Alert.body}
   * @hassoydelcall {Alert.dismiss}
   */

  if (typeof Templates.Alert == 'undefined') {
    Templates.Alert = {};
  }

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  Templates.Alert.content = function (opt_data, opt_ignored, opt_ijData) {
    return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('Alert.dismiss'), '', true)(opt_data, null, opt_ijData) + soy.$$getDelegateFn(soy.$$getDelTemplateId('Alert.body'), '', true)(opt_data, null, opt_ijData));
  };
  if (goog.DEBUG) {
    Templates.Alert.content.soyTemplateName = 'Templates.Alert.content';
  }

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  Templates.Alert.body = function (opt_data, opt_ignored, opt_ijData) {
    return soydata.VERY_UNSAFE.ordainSanitizedHtml(opt_data.body ? soy.$$escapeHtml(opt_data.body) : '');
  };
  if (goog.DEBUG) {
    Templates.Alert.body.soyTemplateName = 'Templates.Alert.body';
  }

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  Templates.Alert.dismiss = function (opt_data, opt_ignored, opt_ijData) {
    return soydata.VERY_UNSAFE.ordainSanitizedHtml(opt_data.dismissible ? '<button type="button" class="close" aria-label="Close" data-onclick="toggle"><span aria-hidden="true">×</span></button>' : '');
  };
  if (goog.DEBUG) {
    Templates.Alert.dismiss.soyTemplateName = 'Templates.Alert.dismiss';
  }

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  Templates.Alert.__deltemplate_s13_c3d627de = function (opt_data, opt_ignored, opt_ijData) {
    opt_data = opt_data || {};
    return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="alert alert-dismissible component ' + soy.$$escapeHtmlAttribute(opt_data.elementClasses ? opt_data.elementClasses : '') + '" role="alert">' + soy.$$escapeHtml(opt_data.elementContent) + '</div>');
  };
  if (goog.DEBUG) {
    Templates.Alert.__deltemplate_s13_c3d627de.soyTemplateName = 'Templates.Alert.__deltemplate_s13_c3d627de';
  }
  soy.$$registerDelegateFn(soy.$$getDelTemplateId('Alert'), 'element', 0, Templates.Alert.__deltemplate_s13_c3d627de);

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  Templates.Alert.__deltemplate_s21_cd80c96e = function (opt_data, opt_ignored, opt_ijData) {
    opt_data = opt_data || {};
    return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('Alert'), 'element', true)({ elementClasses: opt_data.elementClasses, elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + Templates.Alert.content(opt_data, null, opt_ijData)), id: opt_data.id }, null, opt_ijData));
  };
  if (goog.DEBUG) {
    Templates.Alert.__deltemplate_s21_cd80c96e.soyTemplateName = 'Templates.Alert.__deltemplate_s21_cd80c96e';
  }
  soy.$$registerDelegateFn(soy.$$getDelTemplateId('Alert'), '', 0, Templates.Alert.__deltemplate_s21_cd80c96e);

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  Templates.Alert.__deltemplate_s27_cbcfd186 = function (opt_data, opt_ignored, opt_ijData) {
    var output = '';
    var elementId__soy28 = (opt_data.id ? opt_data.id : '') + '-' + (opt_data.surfaceId != null ? opt_data.surfaceId : 'body');
    output += '<div id="' + soy.$$escapeHtmlAttribute(elementId__soy28) + '">' + soy.$$escapeHtml(opt_data.elementContent) + '</div>';
    return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
  };
  if (goog.DEBUG) {
    Templates.Alert.__deltemplate_s27_cbcfd186.soyTemplateName = 'Templates.Alert.__deltemplate_s27_cbcfd186';
  }
  soy.$$registerDelegateFn(soy.$$getDelTemplateId('Alert.body'), 'element', 0, Templates.Alert.__deltemplate_s27_cbcfd186);

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  Templates.Alert.__deltemplate_s34_9a197608 = function (opt_data, opt_ignored, opt_ijData) {
    return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('Alert.body'), 'element', true)({ elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + Templates.Alert.body(opt_data, null, opt_ijData)), id: opt_data.id, surfaceId: opt_data.surfaceId }, null, opt_ijData));
  };
  if (goog.DEBUG) {
    Templates.Alert.__deltemplate_s34_9a197608.soyTemplateName = 'Templates.Alert.__deltemplate_s34_9a197608';
  }
  soy.$$registerDelegateFn(soy.$$getDelTemplateId('Alert.body'), '', 0, Templates.Alert.__deltemplate_s34_9a197608);

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  Templates.Alert.__deltemplate_s40_fbeb8299 = function (opt_data, opt_ignored, opt_ijData) {
    var output = '';
    var elementId__soy41 = (opt_data.id ? opt_data.id : '') + '-' + (opt_data.surfaceId != null ? opt_data.surfaceId : 'dismiss');
    output += '<div id="' + soy.$$escapeHtmlAttribute(elementId__soy41) + '">' + soy.$$escapeHtml(opt_data.elementContent) + '</div>';
    return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
  };
  if (goog.DEBUG) {
    Templates.Alert.__deltemplate_s40_fbeb8299.soyTemplateName = 'Templates.Alert.__deltemplate_s40_fbeb8299';
  }
  soy.$$registerDelegateFn(soy.$$getDelTemplateId('Alert.dismiss'), 'element', 0, Templates.Alert.__deltemplate_s40_fbeb8299);

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  Templates.Alert.__deltemplate_s47_d8c68a2a = function (opt_data, opt_ignored, opt_ijData) {
    return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('Alert.dismiss'), 'element', true)({ elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + Templates.Alert.dismiss(opt_data, null, opt_ijData)), id: opt_data.id, surfaceId: opt_data.surfaceId }, null, opt_ijData));
  };
  if (goog.DEBUG) {
    Templates.Alert.__deltemplate_s47_d8c68a2a.soyTemplateName = 'Templates.Alert.__deltemplate_s47_d8c68a2a';
  }
  soy.$$registerDelegateFn(soy.$$getDelTemplateId('Alert.dismiss'), '', 0, Templates.Alert.__deltemplate_s47_d8c68a2a);

  Templates.Alert.body.params = ['body'];
  Templates.Alert.dismiss.params = ['dismissible'];
  this.steel.Alert = {};

  /* jshint ignore:end */
  this.steel.Alert.soy = Templates.Alert;
}).call(this);
(function () {
	'use strict';

	var core = this.steel.core;
	var dom = this.steel.dom;
	var SoyComponent = this.steel.SoyComponent;
	var ComponentRegistry = this.steel.ComponentRegistry;
	var Anim = this.steel.Anim;

	/**
  * Alert component.
  */

	var Alert = (function (_SoyComponent) {
		function Alert(opt_config) {
			babelHelpers.classCallCheck(this, Alert);

			babelHelpers.get(Object.getPrototypeOf(Alert.prototype), 'constructor', this).call(this, opt_config);
		}

		babelHelpers.inherits(Alert, _SoyComponent);
		babelHelpers.createClass(Alert, [{
			key: 'close',
			value: function close() {
				dom.once(this.element, 'animationend', this.dispose.bind(this));
				dom.once(this.element, 'transitionend', this.dispose.bind(this));
				this.syncVisible(false);
			}
		}, {
			key: 'toggle',
			value: function toggle() {
				this.visible = !this.visible;
			}
		}, {
			key: 'syncDismissible',
			value: function syncDismissible(dismissible) {
				dom[dismissible ? 'addClasses' : 'removeClasses'](this.element, 'alert-dismissible');
			}
		}, {
			key: 'syncVisible',
			value: function syncVisible(visible) {
				dom.removeClasses(this.element, this.animClasses[visible ? 'hide' : 'show']);
				dom.addClasses(this.element, this.animClasses[visible ? 'show' : 'hide']);
				// Some browsers do not fire transitionend events when running in background
				// tab, see https://bugzilla.mozilla.org/show_bug.cgi?id=683696.
				Anim.emulateEnd(this.element);
			}
		}]);
		return Alert;
	})(SoyComponent);

	/**
  * Default alert elementClasses.
  * @default alert
  * @type {String}
  * @static
  */
	Alert.ELEMENT_CLASSES = 'alert';

	/**
  * Alert attributes definition.
  * @type {Object}
  * @static
  */
	Alert.ATTRS = {
		animClasses: {
			validator: core.isObject,
			value: {
				show: 'fade in',
				hide: 'fade'
			}
		},

		body: {
			value: ''
		},

		elementClasses: {
			value: 'alert-success'
		},

		dismissible: {
			validator: core.isBoolean,
			value: true
		},

		visible: {
			value: false
		}
	};

	ComponentRegistry.register('Alert', Alert);

	this.steel.Alert = Alert;
}).call(this);
(function () {
  /*!
   * Promises polyfill from Google's Closure Library.
   *
   *      Copyright 2013 The Closure Library Authors. All Rights Reserved.
   *
   * NOTE(eduardo): Promise support is not ready on all supported browsers,
   * therefore core.js is temporarily using Google's promises as polyfill. It
   * supports cancellable promises and has clean and fast implementation.
   */

  'use strict';

  var core = this.steel.core;

  /**
   * Provides a more strict interface for Thenables in terms of
   * http://promisesaplus.com for interop with {@see CancellablePromise}.
   *
   * @interface
   * @extends {IThenable.<TYPE>}
   * @template TYPE
   */
  var Thenable = function Thenable() {};

  /**
   * Adds callbacks that will operate on the result of the Thenable, returning a
   * new child Promise.
   *
   * If the Thenable is fulfilled, the {@code onFulfilled} callback will be
   * invoked with the fulfillment value as argument, and the child Promise will
   * be fulfilled with the return value of the callback. If the callback throws
   * an exception, the child Promise will be rejected with the thrown value
   * instead.
   *
   * If the Thenable is rejected, the {@code onRejected} callback will be invoked
   * with the rejection reason as argument, and the child Promise will be rejected
   * with the return value of the callback or thrown value.
   *
   * @param {?(function(this:THIS, TYPE):
   *             (RESULT|IThenable.<RESULT>|Thenable))=} opt_onFulfilled A
   *     function that will be invoked with the fulfillment value if the Promise
   *     is fullfilled.
   * @param {?(function(*): *)=} opt_onRejected A function that will be invoked
   *     with the rejection reason if the Promise is rejected.
   * @param {THIS=} opt_context An optional context object that will be the
   *     execution context for the callbacks. By default, functions are executed
   *     with the default this.
   * @return {!CancellablePromise.<RESULT>} A new Promise that will receive the
   *     result of the fulfillment or rejection callback.
   * @template RESULT,THIS
   */
  Thenable.prototype.then = function () {};

  /**
   * An expando property to indicate that an object implements
   * {@code Thenable}.
   *
   * {@see addImplementation}.
   *
   * @const
   */
  Thenable.IMPLEMENTED_BY_PROP = '$goog_Thenable';

  /**
   * Marks a given class (constructor) as an implementation of Thenable, so
   * that we can query that fact at runtime. The class must have already
   * implemented the interface.
   * Exports a 'then' method on the constructor prototype, so that the objects
   * also implement the extern {@see Thenable} interface for interop with
   * other Promise implementations.
   * @param {function(new:Thenable,...[?])} ctor The class constructor. The
   *     corresponding class must have already implemented the interface.
   */
  Thenable.addImplementation = function (ctor) {
    ctor.prototype.then = ctor.prototype.then;
    ctor.prototype.$goog_Thenable = true;
  };

  /**
   * @param {*} object
   * @return {boolean} Whether a given instance implements {@code Thenable}.
   *     The class/superclass of the instance must call {@code addImplementation}.
   */
  Thenable.isImplementedBy = function (object) {
    if (!object) {
      return false;
    }
    try {
      return !!object.$goog_Thenable;
    } catch (e) {
      // Property access seems to be forbidden.
      return false;
    }
  };

  /**
   * Like bind(), except that a 'this object' is not required. Useful when the
   * target function is already bound.
   *
   * Usage:
   * var g = partial(f, arg1, arg2);
   * g(arg3, arg4);
   *
   * @param {Function} fn A function to partially apply.
   * @param {...*} var_args Additional arguments that are partially applied to fn.
   * @return {!Function} A partially-applied form of the function bind() was
   *     invoked as a method of.
   */
  var partial = function partial(fn) {
    var args = Array.prototype.slice.call(arguments, 1);
    return function () {
      // Clone the array (with slice()) and append additional arguments
      // to the existing arguments.
      var newArgs = args.slice();
      newArgs.push.apply(newArgs, arguments);
      return fn.apply(this, newArgs);
    };
  };

  var async = {};

  /**
   * Throw an item without interrupting the current execution context.  For
   * example, if processing a group of items in a loop, sometimes it is useful
   * to report an error while still allowing the rest of the batch to be
   * processed.
   * @param {*} exception
   */
  async.throwException = function (exception) {
    // Each throw needs to be in its own context.
    async.nextTick(function () {
      throw exception;
    });
  };

  /**
   * Fires the provided callback just before the current callstack unwinds, or as
   * soon as possible after the current JS execution context.
   * @param {function(this:THIS)} callback
   * @param {THIS=} opt_context Object to use as the "this value" when calling
   *     the provided function.
   * @template THIS
   */
  async.run = function (callback, opt_context) {
    if (!async.run.workQueueScheduled_) {
      // Nothing is currently scheduled, schedule it now.
      async.nextTick(async.run.processWorkQueue);
      async.run.workQueueScheduled_ = true;
    }

    async.run.workQueue_.push(new async.run.WorkItem_(callback, opt_context));
  };

  /** @private {boolean} */
  async.run.workQueueScheduled_ = false;

  /** @private {!Array.<!async.run.WorkItem_>} */
  async.run.workQueue_ = [];

  /**
   * Run any pending async.run work items. This function is not intended
   * for general use, but for use by entry point handlers to run items ahead of
   * async.nextTick.
   */
  async.run.processWorkQueue = function () {
    // NOTE: additional work queue items may be pushed while processing.
    while (async.run.workQueue_.length) {
      // Don't let the work queue grow indefinitely.
      var workItems = async.run.workQueue_;
      async.run.workQueue_ = [];
      for (var i = 0; i < workItems.length; i++) {
        var workItem = workItems[i];
        try {
          workItem.fn.call(workItem.scope);
        } catch (e) {
          async.throwException(e);
        }
      }
    }

    // There are no more work items, reset the work queue.
    async.run.workQueueScheduled_ = false;
  };

  /**
   * @constructor
   * @final
   * @struct
   * @private
   *
   * @param {function()} fn
   * @param {Object|null|undefined} scope
   */
  async.run.WorkItem_ = function (fn, scope) {
    /** @const */
    this.fn = fn;
    /** @const */
    this.scope = scope;
  };

  /**
   * Fires the provided callbacks as soon as possible after the current JS
   * execution context. setTimeout(…, 0) always takes at least 5ms for legacy
   * reasons.
   * @param {function(this:SCOPE)} callback Callback function to fire as soon as
   *     possible.
   * @param {SCOPE=} opt_context Object in whose scope to call the listener.
   * @template SCOPE
   */
  async.nextTick = function (callback, opt_context) {
    var cb = callback;
    if (opt_context) {
      cb = callback.bind(opt_context);
    }
    cb = async.nextTick.wrapCallback_(cb);
    // Introduced and currently only supported by IE10.
    if (core.isFunction(window.setImmediate)) {
      window.setImmediate(cb);
      return;
    }
    // Look for and cache the custom fallback version of setImmediate.
    if (!async.nextTick.setImmediate_) {
      async.nextTick.setImmediate_ = async.nextTick.getSetImmediateEmulator_();
    }
    async.nextTick.setImmediate_(cb);
  };

  /**
   * Cache for the setImmediate implementation.
   * @type {function(function())}
   * @private
   */
  async.nextTick.setImmediate_ = null;

  /**
   * Determines the best possible implementation to run a function as soon as
   * the JS event loop is idle.
   * @return {function(function())} The "setImmediate" implementation.
   * @private
   */
  async.nextTick.getSetImmediateEmulator_ = function () {
    // Create a private message channel and use it to postMessage empty messages
    // to ourselves.
    var Channel = window.MessageChannel;
    // If MessageChannel is not available and we are in a browser, implement
    // an iframe based polyfill in browsers that have postMessage and
    // document.addEventListener. The latter excludes IE8 because it has a
    // synchronous postMessage implementation.
    if (typeof Channel === 'undefined' && typeof window !== 'undefined' && window.postMessage && window.addEventListener) {
      /** @constructor */
      Channel = function () {
        // Make an empty, invisible iframe.
        var iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        iframe.src = '';
        document.documentElement.appendChild(iframe);
        var win = iframe.contentWindow;
        var doc = win.document;
        doc.open();
        doc.write('');
        doc.close();
        var message = 'callImmediate' + Math.random();
        var origin = win.location.protocol + '//' + win.location.host;
        var onmessage = (function (e) {
          // Validate origin and message to make sure that this message was
          // intended for us.
          if (e.origin !== origin && e.data !== message) {
            return;
          }
          this.port1.onmessage();
        }).bind(this);
        win.addEventListener('message', onmessage, false);
        this.port1 = {};
        this.port2 = {
          postMessage: function postMessage() {
            win.postMessage(message, origin);
          }
        };
      };
    }
    if (typeof Channel !== 'undefined') {
      var channel = new Channel();
      // Use a fifo linked list to call callbacks in the right order.
      var head = {};
      var tail = head;
      channel.port1.onmessage = function () {
        head = head.next;
        var cb = head.cb;
        head.cb = null;
        cb();
      };
      return function (cb) {
        tail.next = {
          cb: cb
        };
        tail = tail.next;
        channel.port2.postMessage(0);
      };
    }
    // Implementation for IE6-8: Script elements fire an asynchronous
    // onreadystatechange event when inserted into the DOM.
    if (typeof document !== 'undefined' && 'onreadystatechange' in document.createElement('script')) {
      return function (cb) {
        var script = document.createElement('script');
        script.onreadystatechange = function () {
          // Clean up and call the callback.
          script.onreadystatechange = null;
          script.parentNode.removeChild(script);
          script = null;
          cb();
          cb = null;
        };
        document.documentElement.appendChild(script);
      };
    }
    // Fall back to setTimeout with 0. In browsers this creates a delay of 5ms
    // or more.
    return function (cb) {
      setTimeout(cb, 0);
    };
  };

  /**
   * Helper function that is overrided to protect callbacks with entry point
   * monitor if the application monitors entry points.
   * @param {function()} callback Callback function to fire as soon as possible.
   * @return {function()} The wrapped callback.
   * @private
   */
  async.nextTick.wrapCallback_ = function (opt_returnValue) {
    return opt_returnValue;
  };

  /**
   * Promises provide a result that may be resolved asynchronously. A Promise may
   * be resolved by being fulfilled or rejected with a value, which will be known
   * as the fulfillment value or the rejection reason. Whether fulfilled or
   * rejected, the Promise result is immutable once it is set.
   *
   * Promises may represent results of any type, including undefined. Rejection
   * reasons are typically Errors, but may also be of any type. Closure Promises
   * allow for optional type annotations that enforce that fulfillment values are
   * of the appropriate types at compile time.
   *
   * The result of a Promise is accessible by calling {@code then} and registering
   * {@code onFulfilled} and {@code onRejected} callbacks. Once the Promise
   * resolves, the relevant callbacks are invoked with the fulfillment value or
   * rejection reason as argument. Callbacks are always invoked in the order they
   * were registered, even when additional {@code then} calls are made from inside
   * another callback. A callback is always run asynchronously sometime after the
   * scope containing the registering {@code then} invocation has returned.
   *
   * If a Promise is resolved with another Promise, the first Promise will block
   * until the second is resolved, and then assumes the same result as the second
   * Promise. This allows Promises to depend on the results of other Promises,
   * linking together multiple asynchronous operations.
   *
   * This implementation is compatible with the Promises/A+ specification and
   * passes that specification's conformance test suite. A Closure Promise may be
   * resolved with a Promise instance (or sufficiently compatible Promise-like
   * object) created by other Promise implementations. From the specification,
   * Promise-like objects are known as "Thenables".
   *
   * @see http://promisesaplus.com/
   *
   * @param {function(
   *             this:RESOLVER_CONTEXT,
   *             function((TYPE|IThenable.<TYPE>|Thenable)),
   *             function(*)): void} resolver
   *     Initialization function that is invoked immediately with {@code resolve}
   *     and {@code reject} functions as arguments. The Promise is resolved or
   *     rejected with the first argument passed to either function.
   * @param {RESOLVER_CONTEXT=} opt_context An optional context for executing the
   *     resolver function. If unspecified, the resolver function will be executed
   *     in the default scope.
   * @constructor
   * @struct
   * @final
   * @implements {Thenable.<TYPE>}
   * @template TYPE,RESOLVER_CONTEXT
   */
  var CancellablePromise = function CancellablePromise(resolver, opt_context) {
    /**
     * The internal state of this Promise. Either PENDING, FULFILLED, REJECTED, or
     * BLOCKED.
     * @private {CancellablePromise.State_}
     */
    this.state_ = CancellablePromise.State_.PENDING;

    /**
     * The resolved result of the Promise. Immutable once set with either a
     * fulfillment value or rejection reason.
     * @private {*}
     */
    this.result_ = undefined;

    /**
     * For Promises created by calling {@code then()}, the originating parent.
     * @private {CancellablePromise}
     */
    this.parent_ = null;

    /**
     * The list of {@code onFulfilled} and {@code onRejected} callbacks added to
     * this Promise by calls to {@code then()}.
     * @private {Array.<CancellablePromise.CallbackEntry_>}
     */
    this.callbackEntries_ = null;

    /**
     * Whether the Promise is in the queue of Promises to execute.
     * @private {boolean}
     */
    this.executing_ = false;

    if (CancellablePromise.UNHANDLED_REJECTION_DELAY > 0) {
      /**
       * A timeout ID used when the {@code UNHANDLED_REJECTION_DELAY} is greater
       * than 0 milliseconds. The ID is set when the Promise is rejected, and
       * cleared only if an {@code onRejected} callback is invoked for the
       * Promise (or one of its descendants) before the delay is exceeded.
       *
       * If the rejection is not handled before the timeout completes, the
       * rejection reason is passed to the unhandled rejection handler.
       * @private {number}
       */
      this.unhandledRejectionId_ = 0;
    } else if (CancellablePromise.UNHANDLED_REJECTION_DELAY === 0) {
      /**
       * When the {@code UNHANDLED_REJECTION_DELAY} is set to 0 milliseconds, a
       * boolean that is set if the Promise is rejected, and reset to false if an
       * {@code onRejected} callback is invoked for the Promise (or one of its
       * descendants). If the rejection is not handled before the next timestep,
       * the rejection reason is passed to the unhandled rejection handler.
       * @private {boolean}
       */
      this.hadUnhandledRejection_ = false;
    }

    try {
      var self = this;
      resolver.call(opt_context, function (value) {
        self.resolve_(CancellablePromise.State_.FULFILLED, value);
      }, function (reason) {
        self.resolve_(CancellablePromise.State_.REJECTED, reason);
      });
    } catch (e) {
      this.resolve_(CancellablePromise.State_.REJECTED, e);
    }
  };

  /**
   * @define {number} The delay in milliseconds before a rejected Promise's reason
   * is passed to the rejection handler. By default, the rejection handler
   * rethrows the rejection reason so that it appears in the developer console or
   * {@code window.onerror} handler.
   *
   * Rejections are rethrown as quickly as possible by default. A negative value
   * disables rejection handling entirely.
   */
  CancellablePromise.UNHANDLED_REJECTION_DELAY = 0;

  /**
   * The possible internal states for a Promise. These states are not directly
   * observable to external callers.
   * @enum {number}
   * @private
   */
  CancellablePromise.State_ = {
    /** The Promise is waiting for resolution. */
    PENDING: 0,

    /** The Promise is blocked waiting for the result of another Thenable. */
    BLOCKED: 1,

    /** The Promise has been resolved with a fulfillment value. */
    FULFILLED: 2,

    /** The Promise has been resolved with a rejection reason. */
    REJECTED: 3
  };

  /**
   * Typedef for entries in the callback chain. Each call to {@code then},
   * {@code thenCatch}, or {@code thenAlways} creates an entry containing the
   * functions that may be invoked once the Promise is resolved.
   *
   * @typedef {{
   *   child: CancellablePromise,
   *   onFulfilled: function(*),
   *   onRejected: function(*)
   * }}
   * @private
   */
  CancellablePromise.CallbackEntry_ = null;

  /**
   * @param {(TYPE|Thenable.<TYPE>|Thenable)=} opt_value
   * @return {!CancellablePromise.<TYPE>} A new Promise that is immediately resolved
   *     with the given value.
   * @template TYPE
   */
  CancellablePromise.resolve = function (opt_value) {
    return new CancellablePromise(function (resolve) {
      resolve(opt_value);
    });
  };

  /**
   * @param {*=} opt_reason
   * @return {!CancellablePromise} A new Promise that is immediately rejected with the
   *     given reason.
   */
  CancellablePromise.reject = function (opt_reason) {
    return new CancellablePromise(function (resolve, reject) {
      reject(opt_reason);
    });
  };

  /**
   * @param {!Array.<!(Thenable.<TYPE>|Thenable)>} promises
   * @return {!CancellablePromise.<TYPE>} A Promise that receives the result of the
   *     first Promise (or Promise-like) input to complete.
   * @template TYPE
   */
  CancellablePromise.race = function (promises) {
    return new CancellablePromise(function (resolve, reject) {
      if (!promises.length) {
        resolve(undefined);
      }
      for (var i = 0, promise; promise = promises[i]; i++) {
        promise.then(resolve, reject);
      }
    });
  };

  /**
   * @param {!Array.<!(Thenable.<TYPE>|Thenable)>} promises
   * @return {!CancellablePromise.<!Array.<TYPE>>} A Promise that receives a list of
   *     every fulfilled value once every input Promise (or Promise-like) is
   *     successfully fulfilled, or is rejected by the first rejection result.
   * @template TYPE
   */
  CancellablePromise.all = function (promises) {
    return new CancellablePromise(function (resolve, reject) {
      var toFulfill = promises.length;
      var values = [];

      if (!toFulfill) {
        resolve(values);
        return;
      }

      var onFulfill = function onFulfill(index, value) {
        toFulfill--;
        values[index] = value;
        if (toFulfill === 0) {
          resolve(values);
        }
      };

      var onReject = function onReject(reason) {
        reject(reason);
      };

      for (var i = 0, promise; promise = promises[i]; i++) {
        promise.then(partial(onFulfill, i), onReject);
      }
    });
  };

  /**
   * @param {!Array.<!(Thenable.<TYPE>|Thenable)>} promises
   * @return {!CancellablePromise.<TYPE>} A Promise that receives the value of
   *     the first input to be fulfilled, or is rejected with a list of every
   *     rejection reason if all inputs are rejected.
   * @template TYPE
   */
  CancellablePromise.firstFulfilled = function (promises) {
    return new CancellablePromise(function (resolve, reject) {
      var toReject = promises.length;
      var reasons = [];

      if (!toReject) {
        resolve(undefined);
        return;
      }

      var onFulfill = function onFulfill(value) {
        resolve(value);
      };

      var onReject = function onReject(index, reason) {
        toReject--;
        reasons[index] = reason;
        if (toReject === 0) {
          reject(reasons);
        }
      };

      for (var i = 0, promise; promise = promises[i]; i++) {
        promise.then(onFulfill, partial(onReject, i));
      }
    });
  };

  /**
   * Adds callbacks that will operate on the result of the Promise, returning a
   * new child Promise.
   *
   * If the Promise is fulfilled, the {@code onFulfilled} callback will be invoked
   * with the fulfillment value as argument, and the child Promise will be
   * fulfilled with the return value of the callback. If the callback throws an
   * exception, the child Promise will be rejected with the thrown value instead.
   *
   * If the Promise is rejected, the {@code onRejected} callback will be invoked
   * with the rejection reason as argument, and the child Promise will be rejected
   * with the return value (or thrown value) of the callback.
   *
   * @override
   */
  CancellablePromise.prototype.then = function (opt_onFulfilled, opt_onRejected, opt_context) {
    return this.addChildPromise_(core.isFunction(opt_onFulfilled) ? opt_onFulfilled : null, core.isFunction(opt_onRejected) ? opt_onRejected : null, opt_context);
  };
  Thenable.addImplementation(CancellablePromise);

  /**
   * Adds a callback that will be invoked whether the Promise is fulfilled or
   * rejected. The callback receives no argument, and no new child Promise is
   * created. This is useful for ensuring that cleanup takes place after certain
   * asynchronous operations. Callbacks added with {@code thenAlways} will be
   * executed in the same order with other calls to {@code then},
   * {@code thenAlways}, or {@code thenCatch}.
   *
   * Since it does not produce a new child Promise, cancellation propagation is
   * not prevented by adding callbacks with {@code thenAlways}. A Promise that has
   * a cleanup handler added with {@code thenAlways} will be canceled if all of
   * its children created by {@code then} (or {@code thenCatch}) are canceled.
   *
   * @param {function(this:THIS): void} onResolved A function that will be invoked
   *     when the Promise is resolved.
   * @param {THIS=} opt_context An optional context object that will be the
   *     execution context for the callbacks. By default, functions are executed
   *     in the global scope.
   * @return {!CancellablePromise.<TYPE>} This Promise, for chaining additional calls.
   * @template THIS
   */
  CancellablePromise.prototype.thenAlways = function (onResolved, opt_context) {
    var callback = function callback() {
      try {
        // Ensure that no arguments are passed to onResolved.
        onResolved.call(opt_context);
      } catch (err) {
        CancellablePromise.handleRejection_.call(null, err);
      }
    };

    this.addCallbackEntry_({
      child: null,
      onRejected: callback,
      onFulfilled: callback
    });
    return this;
  };

  /**
   * Adds a callback that will be invoked only if the Promise is rejected. This
   * is equivalent to {@code then(null, onRejected)}.
   *
   * @param {!function(this:THIS, *): *} onRejected A function that will be
   *     invoked with the rejection reason if the Promise is rejected.
   * @param {THIS=} opt_context An optional context object that will be the
   *     execution context for the callbacks. By default, functions are executed
   *     in the global scope.
   * @return {!CancellablePromise} A new Promise that will receive the result of the
   *     callback.
   * @template THIS
   */
  CancellablePromise.prototype.thenCatch = function (onRejected, opt_context) {
    return this.addChildPromise_(null, onRejected, opt_context);
  };

  /**
   * Alias of {@link CancellablePromise.prototype.thenCatch}
   */
  CancellablePromise.prototype['catch'] = CancellablePromise.prototype.thenCatch;

  /**
   * Cancels the Promise if it is still pending by rejecting it with a cancel
   * Error. No action is performed if the Promise is already resolved.
   *
   * All child Promises of the canceled Promise will be rejected with the same
   * cancel error, as with normal Promise rejection. If the Promise to be canceled
   * is the only child of a pending Promise, the parent Promise will also be
   * canceled. Cancellation may propagate upward through multiple generations.
   *
   * @param {string=} opt_message An optional debugging message for describing the
   *     cancellation reason.
   */
  CancellablePromise.prototype.cancel = function (opt_message) {
    if (this.state_ === CancellablePromise.State_.PENDING) {
      async.run(function () {
        var err = new CancellablePromise.CancellationError(opt_message);
        this.cancelInternal_(err);
      }, this);
    }
  };

  /**
   * Cancels this Promise with the given error.
   *
   * @param {!Error} err The cancellation error.
   * @private
   */
  CancellablePromise.prototype.cancelInternal_ = function (err) {
    if (this.state_ === CancellablePromise.State_.PENDING) {
      if (this.parent_) {
        // Cancel the Promise and remove it from the parent's child list.
        this.parent_.cancelChild_(this, err);
      } else {
        this.resolve_(CancellablePromise.State_.REJECTED, err);
      }
    }
  };

  /**
   * Cancels a child Promise from the list of callback entries. If the Promise has
   * not already been resolved, reject it with a cancel error. If there are no
   * other children in the list of callback entries, propagate the cancellation
   * by canceling this Promise as well.
   *
   * @param {!CancellablePromise} childPromise The Promise to cancel.
   * @param {!Error} err The cancel error to use for rejecting the Promise.
   * @private
   */
  CancellablePromise.prototype.cancelChild_ = function (childPromise, err) {
    if (!this.callbackEntries_) {
      return;
    }
    var childCount = 0;
    var childIndex = -1;

    // Find the callback entry for the childPromise, and count whether there are
    // additional child Promises.
    for (var i = 0, entry; entry = this.callbackEntries_[i]; i++) {
      var child = entry.child;
      if (child) {
        childCount++;
        if (child === childPromise) {
          childIndex = i;
        }
        if (childIndex >= 0 && childCount > 1) {
          break;
        }
      }
    }

    // If the child Promise was the only child, cancel this Promise as well.
    // Otherwise, reject only the child Promise with the cancel error.
    if (childIndex >= 0) {
      if (this.state_ === CancellablePromise.State_.PENDING && childCount === 1) {
        this.cancelInternal_(err);
      } else {
        var callbackEntry = this.callbackEntries_.splice(childIndex, 1)[0];
        this.executeCallback_(callbackEntry, CancellablePromise.State_.REJECTED, err);
      }
    }
  };

  /**
   * Adds a callback entry to the current Promise, and schedules callback
   * execution if the Promise has already been resolved.
   *
   * @param {CancellablePromise.CallbackEntry_} callbackEntry Record containing
   *     {@code onFulfilled} and {@code onRejected} callbacks to execute after
   *     the Promise is resolved.
   * @private
   */
  CancellablePromise.prototype.addCallbackEntry_ = function (callbackEntry) {
    if ((!this.callbackEntries_ || !this.callbackEntries_.length) && (this.state_ === CancellablePromise.State_.FULFILLED || this.state_ === CancellablePromise.State_.REJECTED)) {
      this.scheduleCallbacks_();
    }
    if (!this.callbackEntries_) {
      this.callbackEntries_ = [];
    }
    this.callbackEntries_.push(callbackEntry);
  };

  /**
   * Creates a child Promise and adds it to the callback entry list. The result of
   * the child Promise is determined by the state of the parent Promise and the
   * result of the {@code onFulfilled} or {@code onRejected} callbacks as
   * specified in the Promise resolution procedure.
   *
   * @see http://promisesaplus.com/#the__method
   *
   * @param {?function(this:THIS, TYPE):
   *          (RESULT|CancellablePromise.<RESULT>|Thenable)} onFulfilled A callback that
   *     will be invoked if the Promise is fullfilled, or null.
   * @param {?function(this:THIS, *): *} onRejected A callback that will be
   *     invoked if the Promise is rejected, or null.
   * @param {THIS=} opt_context An optional execution context for the callbacks.
   *     in the default calling context.
   * @return {!CancellablePromise} The child Promise.
   * @template RESULT,THIS
   * @private
   */
  CancellablePromise.prototype.addChildPromise_ = function (onFulfilled, onRejected, opt_context) {

    var callbackEntry = {
      child: null,
      onFulfilled: null,
      onRejected: null
    };

    callbackEntry.child = new CancellablePromise(function (resolve, reject) {
      // Invoke onFulfilled, or resolve with the parent's value if absent.
      callbackEntry.onFulfilled = onFulfilled ? function (value) {
        try {
          var result = onFulfilled.call(opt_context, value);
          resolve(result);
        } catch (err) {
          reject(err);
        }
      } : resolve;

      // Invoke onRejected, or reject with the parent's reason if absent.
      callbackEntry.onRejected = onRejected ? function (reason) {
        try {
          var result = onRejected.call(opt_context, reason);
          if (!core.isDef(result) && reason instanceof CancellablePromise.CancellationError) {
            // Propagate cancellation to children if no other result is returned.
            reject(reason);
          } else {
            resolve(result);
          }
        } catch (err) {
          reject(err);
        }
      } : reject;
    });

    callbackEntry.child.parent_ = this;
    this.addCallbackEntry_(callbackEntry);
    return callbackEntry.child;
  };

  /**
   * Unblocks the Promise and fulfills it with the given value.
   *
   * @param {TYPE} value
   * @private
   */
  CancellablePromise.prototype.unblockAndFulfill_ = function (value) {
    if (this.state_ !== CancellablePromise.State_.BLOCKED) {
      throw new Error('CancellablePromise is not blocked.');
    }
    this.state_ = CancellablePromise.State_.PENDING;
    this.resolve_(CancellablePromise.State_.FULFILLED, value);
  };

  /**
   * Unblocks the Promise and rejects it with the given rejection reason.
   *
   * @param {*} reason
   * @private
   */
  CancellablePromise.prototype.unblockAndReject_ = function (reason) {
    if (this.state_ !== CancellablePromise.State_.BLOCKED) {
      throw new Error('CancellablePromise is not blocked.');
    }
    this.state_ = CancellablePromise.State_.PENDING;
    this.resolve_(CancellablePromise.State_.REJECTED, reason);
  };

  /**
   * Attempts to resolve a Promise with a given resolution state and value. This
   * is a no-op if the given Promise has already been resolved.
   *
   * If the given result is a Thenable (such as another Promise), the Promise will
   * be resolved with the same state and result as the Thenable once it is itself
   * resolved.
   *
   * If the given result is not a Thenable, the Promise will be fulfilled or
   * rejected with that result based on the given state.
   *
   * @see http://promisesaplus.com/#the_promise_resolution_procedure
   *
   * @param {CancellablePromise.State_} state
   * @param {*} x The result to apply to the Promise.
   * @private
   */
  CancellablePromise.prototype.resolve_ = function (state, x) {
    if (this.state_ !== CancellablePromise.State_.PENDING) {
      return;
    }

    if (this === x) {
      state = CancellablePromise.State_.REJECTED;
      x = new TypeError('CancellablePromise cannot resolve to itself');
    } else if (Thenable.isImplementedBy(x)) {
      x = x;
      this.state_ = CancellablePromise.State_.BLOCKED;
      x.then(this.unblockAndFulfill_, this.unblockAndReject_, this);
      return;
    } else if (core.isObject(x)) {
      try {
        var then = x.then;
        if (core.isFunction(then)) {
          this.tryThen_(x, then);
          return;
        }
      } catch (e) {
        state = CancellablePromise.State_.REJECTED;
        x = e;
      }
    }

    this.result_ = x;
    this.state_ = state;
    this.scheduleCallbacks_();

    if (state === CancellablePromise.State_.REJECTED && !(x instanceof CancellablePromise.CancellationError)) {
      CancellablePromise.addUnhandledRejection_(this, x);
    }
  };

  /**
   * Attempts to call the {@code then} method on an object in the hopes that it is
   * a Promise-compatible instance. This allows interoperation between different
   * Promise implementations, however a non-compliant object may cause a Promise
   * to hang indefinitely. If the {@code then} method throws an exception, the
   * dependent Promise will be rejected with the thrown value.
   *
   * @see http://promisesaplus.com/#point-70
   *
   * @param {Thenable} thenable An object with a {@code then} method that may be
   *     compatible with the Promise/A+ specification.
   * @param {!Function} then The {@code then} method of the Thenable object.
   * @private
   */
  CancellablePromise.prototype.tryThen_ = function (thenable, then) {
    this.state_ = CancellablePromise.State_.BLOCKED;
    var promise = this;
    var called = false;

    var resolve = function resolve(value) {
      if (!called) {
        called = true;
        promise.unblockAndFulfill_(value);
      }
    };

    var reject = function reject(reason) {
      if (!called) {
        called = true;
        promise.unblockAndReject_(reason);
      }
    };

    try {
      then.call(thenable, resolve, reject);
    } catch (e) {
      reject(e);
    }
  };

  /**
   * Executes the pending callbacks of a resolved Promise after a timeout.
   *
   * Section 2.2.4 of the Promises/A+ specification requires that Promise
   * callbacks must only be invoked from a call stack that only contains Promise
   * implementation code, which we accomplish by invoking callback execution after
   * a timeout. If {@code startExecution_} is called multiple times for the same
   * Promise, the callback chain will be evaluated only once. Additional callbacks
   * may be added during the evaluation phase, and will be executed in the same
   * event loop.
   *
   * All Promises added to the waiting list during the same browser event loop
   * will be executed in one batch to avoid using a separate timeout per Promise.
   *
   * @private
   */
  CancellablePromise.prototype.scheduleCallbacks_ = function () {
    if (!this.executing_) {
      this.executing_ = true;
      async.run(this.executeCallbacks_, this);
    }
  };

  /**
   * Executes all pending callbacks for this Promise.
   *
   * @private
   */
  CancellablePromise.prototype.executeCallbacks_ = function () {
    while (this.callbackEntries_ && this.callbackEntries_.length) {
      var entries = this.callbackEntries_;
      this.callbackEntries_ = [];

      for (var i = 0; i < entries.length; i++) {
        this.executeCallback_(entries[i], this.state_, this.result_);
      }
    }
    this.executing_ = false;
  };

  /**
   * Executes a pending callback for this Promise. Invokes an {@code onFulfilled}
   * or {@code onRejected} callback based on the resolved state of the Promise.
   *
   * @param {!CancellablePromise.CallbackEntry_} callbackEntry An entry containing the
   *     onFulfilled and/or onRejected callbacks for this step.
   * @param {CancellablePromise.State_} state The resolution status of the Promise,
   *     either FULFILLED or REJECTED.
   * @param {*} result The resolved result of the Promise.
   * @private
   */
  CancellablePromise.prototype.executeCallback_ = function (callbackEntry, state, result) {
    if (state === CancellablePromise.State_.FULFILLED) {
      callbackEntry.onFulfilled(result);
    } else {
      this.removeUnhandledRejection_();
      callbackEntry.onRejected(result);
    }
  };

  /**
   * Marks this rejected Promise as having being handled. Also marks any parent
   * Promises in the rejected state as handled. The rejection handler will no
   * longer be invoked for this Promise (if it has not been called already).
   *
   * @private
   */
  CancellablePromise.prototype.removeUnhandledRejection_ = function () {
    var p;
    if (CancellablePromise.UNHANDLED_REJECTION_DELAY > 0) {
      for (p = this; p && p.unhandledRejectionId_; p = p.parent_) {
        clearTimeout(p.unhandledRejectionId_);
        p.unhandledRejectionId_ = 0;
      }
    } else if (CancellablePromise.UNHANDLED_REJECTION_DELAY === 0) {
      for (p = this; p && p.hadUnhandledRejection_; p = p.parent_) {
        p.hadUnhandledRejection_ = false;
      }
    }
  };

  /**
   * Marks this rejected Promise as unhandled. If no {@code onRejected} callback
   * is called for this Promise before the {@code UNHANDLED_REJECTION_DELAY}
   * expires, the reason will be passed to the unhandled rejection handler. The
   * handler typically rethrows the rejection reason so that it becomes visible in
   * the developer console.
   *
   * @param {!CancellablePromise} promise The rejected Promise.
   * @param {*} reason The Promise rejection reason.
   * @private
   */
  CancellablePromise.addUnhandledRejection_ = function (promise, reason) {
    if (CancellablePromise.UNHANDLED_REJECTION_DELAY > 0) {
      promise.unhandledRejectionId_ = setTimeout(function () {
        CancellablePromise.handleRejection_.call(null, reason);
      }, CancellablePromise.UNHANDLED_REJECTION_DELAY);
    } else if (CancellablePromise.UNHANDLED_REJECTION_DELAY === 0) {
      promise.hadUnhandledRejection_ = true;
      async.run(function () {
        if (promise.hadUnhandledRejection_) {
          CancellablePromise.handleRejection_.call(null, reason);
        }
      });
    }
  };

  /**
   * A method that is invoked with the rejection reasons for Promises that are
   * rejected but have no {@code onRejected} callbacks registered yet.
   * @type {function(*)}
   * @private
   */
  CancellablePromise.handleRejection_ = async.throwException;

  /**
   * Sets a handler that will be called with reasons from unhandled rejected
   * Promises. If the rejected Promise (or one of its descendants) has an
   * {@code onRejected} callback registered, the rejection will be considered
   * handled, and the rejection handler will not be called.
   *
   * By default, unhandled rejections are rethrown so that the error may be
   * captured by the developer console or a {@code window.onerror} handler.
   *
   * @param {function(*)} handler A function that will be called with reasons from
   *     rejected Promises. Defaults to {@code async.throwException}.
   */
  CancellablePromise.setUnhandledRejectionHandler = function (handler) {
    CancellablePromise.handleRejection_ = handler;
  };

  /**
   * Error used as a rejection reason for canceled Promises.
   *
   * @param {string=} opt_message
   * @constructor
   * @extends {Error}
   * @final
   */
  CancellablePromise.CancellationError = (function (_Error) {
    var _class = function _class(opt_message) {
      babelHelpers.classCallCheck(this, _class);

      babelHelpers.get(Object.getPrototypeOf(_class.prototype), 'constructor', this).call(this, opt_message);

      if (opt_message) {
        this.message = opt_message;
      }
    };

    babelHelpers.inherits(_class, _Error);
    return _class;
  })(Error);

  /** @override */
  CancellablePromise.CancellationError.prototype.name = 'cancel';

  if (typeof window.Promise === 'undefined') {
    window.Promise = CancellablePromise;
  }

  this.steelNamed.Promise = {};
  this.steelNamed.Promise.CancellablePromise = CancellablePromise;
  this.steelNamed.Promise.async = async;
}).call(this);

/** @type {CancellablePromise.CallbackEntry_} */ /** @type {!Thenable} */
(function () {
	'use strict';

	var ComponentRegistry = this.steel.ComponentRegistry;
	var core = this.steel.core;
	var dom = this.steel.dom;
	var EventHandler = this.steel.EventHandler;
	var Promise = this.steelNamed.Promise.CancellablePromise;

	// TODO: Autocomplete must not be a SoyComponent, remove this extension when we have mixins ability.
	var SoyComponent = this.steel.SoyComponent;

	/*
  * AutocompleteBase component.
  */

	var AutocompleteBase = (function (_SoyComponent) {
		/**
   * @inheritDoc
   */

		function AutocompleteBase(opt_config) {
			babelHelpers.classCallCheck(this, AutocompleteBase);

			babelHelpers.get(Object.getPrototypeOf(AutocompleteBase.prototype), 'constructor', this).call(this, opt_config);

			this.eventHandler_ = new EventHandler();
			this.on('select', this.select);
		}

		babelHelpers.inherits(AutocompleteBase, _SoyComponent);
		babelHelpers.createClass(AutocompleteBase, [{
			key: 'attached',

			/**
    * @inheritDoc
    */
			value: function attached() {
				if (this.inputElement) {
					this.eventHandler_.add(dom.on(this.inputElement, 'input', this.handleUserInput_.bind(this)));
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

				this.pendingRequest = Promise.resolve().then(function () {
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
				if (!core.isFunction(val)) {
					return function () {
						return val;
					};
				}
				return val;
			}
		}]);
		return AutocompleteBase;
	})(SoyComponent);

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
			value: core.identityFunction,
			validator: core.isFunction
		},

		/**
   * The element which will be used source for the data queries.
   * @type {DOMElement|string}
   */
		inputElement: {
			setter: dom.toElement
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
			validator: core.isFunction
		}
	};

	ComponentRegistry.register('AutocompleteBase', AutocompleteBase);

	this.steel.AutocompleteBase = AutocompleteBase;
}).call(this);
(function () {
  "use strict";

  var Geometry = (function () {
    function Geometry() {
      babelHelpers.classCallCheck(this, Geometry);
    }

    babelHelpers.createClass(Geometry, null, [{
      key: "intersectRect",

      /**
         * Tests if a rectangle intersects with another.
         *
         * <pre>
         *  x0y0 --------       x2y2 --------
         *      |       |           |       |
         *      -------- x1y1       -------- x3y3
         * </pre>
         *
         * Note that coordinates starts from top to down (y), left to right (x):
         *
         * <pre>
         *      ------> (x)
         *      |
         *      |
         *     (y)
         * </pre>
         *
         * @param {number} x0 Horizontal coordinate of P0.
         * @param {number} y0 Vertical coordinate of P0.
         * @param {number} x1 Horizontal coordinate of P1.
         * @param {number} y1 Vertical coordinate of P1.
         * @param {number} x2 Horizontal coordinate of P2.
         * @param {number} y2 Vertical coordinate of P2.
         * @param {number} x3 Horizontal coordinate of P3.
         * @param {number} y3 Vertical coordinate of P3.
         * @return {boolean}
         */
      value: function intersectRect(x0, y0, x1, y1, x2, y2, x3, y3) {
        return !(x2 > x1 || x3 < x0 || y2 > y1 || y3 < y0);
      }
    }]);
    return Geometry;
  })();

  this.steel.Geometry = Geometry;
}).call(this);
(function () {
  'use strict';

  var core = this.steel.core;
  var Geometry = this.steel.Geometry;

  /**
   * Class with static methods responsible for doing browser position checks.
   */

  var Position = (function () {
    function Position() {
      babelHelpers.classCallCheck(this, Position);
    }

    babelHelpers.createClass(Position, null, [{
      key: 'getClientHeight',

      /**
       * Gets the client height of the specified node. Scroll height is not
       * included.
       * @param {Element|Document|Window=} node
       * @return {Number}
       */
      value: function getClientHeight(node) {
        return this.getClientSize_(node, 'Height');
      }
    }, {
      key: 'getClientSize_',

      /**
       * Gets the client height or width of the specified node. Scroll height is
       * not included.
       * @param {Element|Document|Window=} node
       * @param {string} `Width` or `Height` property.
       * @return {Number}
       * @protected
       */
      value: function getClientSize_(node, prop) {
        var el = node;
        if (core.isWindow(node)) {
          el = node.document.documentElement;
        }
        if (core.isDocument(node)) {
          el = node.documentElement;
        }
        return el['client' + prop];
      }
    }, {
      key: 'getClientWidth',

      /**
       * Gets the client width of the specified node. Scroll width is not
       * included.
       * @param {Element|Document|Window=} node
       * @return {Number}
       */
      value: function getClientWidth(node) {
        return this.getClientSize_(node, 'Width');
      }
    }, {
      key: 'getDocumentRegion_',

      /**
       * Gets the region of the element, document or window.
       * @param {Element|Document|Window=} opt_element Optional element to test.
       * @return {!DOMRect} The returned value is a simulated DOMRect object which
       *     is the union of the rectangles returned by getClientRects() for the
       *     element, i.e., the CSS border-boxes associated with the element.
       * @protected
       */
      value: function getDocumentRegion_(opt_element) {
        var height = this.getHeight(opt_element);
        var width = this.getWidth(opt_element);
        return this.makeRegion(height, height, 0, width, 0, width);
      }
    }, {
      key: 'getHeight',

      /**
       * Gets the height of the specified node. Scroll height is included.
       * @param {Element|Document|Window=} node
       * @return {Number}
       */
      value: function getHeight(node) {
        return this.getSize_(node, 'Height');
      }
    }, {
      key: 'getRegion',

      /**
       * Gets the size of an element and its position relative to the viewport.
       * @param {!Document|Element|Window} node
       * @return {!DOMRect} The returned value is a DOMRect object which is the
       *     union of the rectangles returned by getClientRects() for the element,
       *     i.e., the CSS border-boxes associated with the element.
       */
      value: function getRegion(node) {
        if (core.isDocument(node) || core.isWindow(node)) {
          return this.getDocumentRegion_(node);
        }
        return this.makeRegionFromBoundingRect_(node.getBoundingClientRect());
      }
    }, {
      key: 'getScrollLeft',

      /**
       * Gets the scroll left position of the specified node.
       * @param {Element|Document|Window=} node
       * @return {Number}
       */
      value: function getScrollLeft(node) {
        if (core.isWindow(node)) {
          return node.pageXOffset;
        }
        if (core.isDocument(node)) {
          return node.defaultView.pageXOffset;
        }
        return node.scrollLeft;
      }
    }, {
      key: 'getScrollTop',

      /**
       * Gets the scroll top position of the specified node.
       * @param {Element|Document|Window=} node
       * @return {Number}
       */
      value: function getScrollTop(node) {
        if (core.isWindow(node)) {
          return node.pageYOffset;
        }
        if (core.isDocument(node)) {
          return node.defaultView.pageYOffset;
        }
        return node.scrollTop;
      }
    }, {
      key: 'getSize_',

      /**
       * Gets the height or width of the specified node. Scroll height is
       * included.
       * @param {Element|Document|Window=} node
       * @param {string} `Width` or `Height` property.
       * @return {Number}
       * @protected
       */
      value: function getSize_(node, prop) {
        if (core.isWindow(node)) {
          return this.getClientSize_(node, prop);
        }
        if (core.isDocument(node)) {
          var docEl = node.documentElement;
          return Math.max(node.body['scroll' + prop], docEl['scroll' + prop], node.body['offset' + prop], docEl['offset' + prop], docEl['client' + prop]);
        }
        return Math.max(node['client' + prop], node['scroll' + prop], node['offset' + prop]);
      }
    }, {
      key: 'getWidth',

      /**
       * Gets the width of the specified node. Scroll width is included.
       * @param {Element|Document|Window=} node
       * @return {Number}
       */
      value: function getWidth(node) {
        return this.getSize_(node, 'Width');
      }
    }, {
      key: 'intersectRegion',

      /**
       * Tests if a region intersects with another.
       * @param {DOMRect} r1
       * @param {DOMRect} r2
       * @return {boolean}
       */
      value: function intersectRegion(r1, r2) {
        return Geometry.intersectRect(r1.top, r1.left, r1.bottom, r1.right, r2.top, r2.left, r2.bottom, r2.right);
      }
    }, {
      key: 'insideRegion',

      /**
       * Tests if a region is inside another.
       * @param {DOMRect} r1
       * @param {DOMRect} r2
       * @return {boolean}
       */
      value: function insideRegion(r1, r2) {
        return r2.top >= r1.top && r2.bottom <= r1.bottom && r2.right <= r1.right && r2.left >= r1.left;
      }
    }, {
      key: 'insideViewport',

      /**
       * Tests if a region is inside viewport region.
       * @param {DOMRect} region
       * @return {boolean}
       */
      value: function insideViewport(region) {
        return this.insideRegion(this.getRegion(window), region);
      }
    }, {
      key: 'intersection',

      /**
       * Computes the intersection region between two regions.
       * @param {DOMRect} r1
       * @param {DOMRect} r2
       * @return {?DOMRect} Intersection region or null if regions doesn't
       *     intersects.
       */
      value: function intersection(r1, r2) {
        if (!this.intersectRegion(r1, r2)) {
          return null;
        }
        var bottom = Math.min(r1.bottom, r2.bottom);
        var right = Math.min(r1.right, r2.right);
        var left = Math.max(r1.left, r2.left);
        var top = Math.max(r1.top, r2.top);
        return this.makeRegion(bottom, bottom - top, left, right, top, right - left);
      }
    }, {
      key: 'makeRegion',

      /**
       * Makes a region object. It's a writable version of DOMRect.
       * @param {Number} bottom
       * @param {Number} height
       * @param {Number} left
       * @param {Number} right
       * @param {Number} top
       * @param {Number} width
       * @return {!DOMRect} The returned value is a DOMRect object which is the
       *     union of the rectangles returned by getClientRects() for the element,
       *     i.e., the CSS border-boxes associated with the element.
       */
      value: function makeRegion(bottom, height, left, right, top, width) {
        return {
          bottom: bottom,
          height: height,
          left: left,
          right: right,
          top: top,
          width: width
        };
      }
    }, {
      key: 'makeRegionFromBoundingRect_',

      /**
       * Makes a region from a DOMRect result from `getBoundingClientRect`.
       * @param  {!DOMRect} The returned value is a DOMRect object which is the
       *     union of the rectangles returned by getClientRects() for the element,
       *     i.e., the CSS border-boxes associated with the element.
       * @return {DOMRect} Writable version of DOMRect.
       * @protected
       */
      value: function makeRegionFromBoundingRect_(rect) {
        return this.makeRegion(rect.bottom, rect.height, rect.left, rect.right, rect.top, rect.width);
      }
    }]);
    return Position;
  })();

  this.steel.Position = Position;
}).call(this);
(function () {
  'use strict';

  var Position = this.steel.Position;

  /**
   * Align utility. Computes region or best region to align an element with
   * another. Regions are relative to viewport, make sure to use element with
   * position fixed, or position absolute when the element first positioned
   * parent is the body element.
   */

  var Align = (function () {
    function Align() {
      babelHelpers.classCallCheck(this, Align);
    }

    babelHelpers.createClass(Align, null, [{
      key: 'align',

      /**
       * Aligns the element with the best region around alignElement. The best
       * region is defined by clockwise rotation starting from the specified
       * `position`. The element is always aligned in the middle of alignElement
       * axis.
       * @param {!Element} element Element to be aligned.
       * @param {!Element} alignElement Element to align with.
       * @param {Align.Top|Align.Right|Align.Bottom|Align.Left} pos
       *     The initial position to try. Options `Align.Top`, `Align.Right`,
       *     `Align.Bottom`, `Align.Left`.
       * @static
       */
      value: function align(element, alignElement, position) {
        var bestRegion = this.getAlignBestRegion(element, alignElement, position);

        var computedStyle = window.getComputedStyle(element, null);
        if (computedStyle.getPropertyValue('position') !== 'fixed') {
          bestRegion.top += window.pageYOffset;
          bestRegion.left += window.pageXOffset;

          var offsetParent = element;
          while (offsetParent = offsetParent.offsetParent) {
            bestRegion.top -= offsetParent.offsetTop;
            bestRegion.left -= offsetParent.offsetLeft;
          }
        }

        element.style.top = bestRegion.top + 'px';
        element.style.left = bestRegion.left + 'px';
      }
    }, {
      key: 'getAlignBestRegion',

      /**
       * Returns the best region to align element with alignElement. The best
       * region is defined by clockwise rotation starting from the specified
       * `position`. The element is always aligned in the middle of alignElement
       * axis.
       * @param {!Element} element Element to be aligned.
       * @param {!Element} alignElement Element to align with.
       * @param {Align.Top|Align.Right|Align.Bottom|Align.Left} pos
       *     The initial position to try. Options `Align.Top`, `Align.Right`,
       *     `Align.Bottom`, `Align.Left`.
       * @return {DOMRect} Best region to align element.
       * @static
       */
      value: function getAlignBestRegion(element, alignElement, position) {
        var bestArea = 0;
        var bestPosition = position;
        var bestRegion = this.getAlignRegion(element, alignElement, bestPosition);
        var tryPosition = bestPosition;
        var tryRegion = bestRegion;
        var viewportRegion = Position.getRegion(window);

        for (var i = 0; i < 4;) {
          if (Position.intersectRegion(viewportRegion, tryRegion)) {
            var visibleRegion = Position.intersection(viewportRegion, tryRegion);
            var area = visibleRegion.width * visibleRegion.height;
            if (area > bestArea) {
              bestArea = area;
              bestRegion = tryRegion;
              bestPosition = tryPosition;
            }
            if (Position.insideViewport(tryRegion)) {
              break;
            }
          }
          tryPosition = (position + ++i) % 4;
          tryRegion = this.getAlignRegion(element, alignElement, tryPosition);
        }

        return bestRegion;
      }
    }, {
      key: 'getAlignRegion',

      /**
       * Returns the region to align element with alignElement. The element is
       * always aligned in the middle of alignElement axis.
       * @param {!Element} element Element to be aligned.
       * @param {!Element} alignElement Element to align with.
       * @param {Align.Top|Align.Right|Align.Bottom|Align.Left} pos
       *     The position to align. Options `Align.Top`, `Align.Right`,
       *     `Align.Bottom`, `Align.Left`.
       * @return {DOMRect} Region to align element.
       * @static
       */
      value: function getAlignRegion(element, alignElement, position) {
        var r1 = Position.getRegion(alignElement);
        var r2 = Position.getRegion(element);
        var top = 0;
        var left = 0;

        switch (position) {
          case Align.Top:
            top = r1.top - r2.height;
            left = r1.left + r1.width / 2 - r2.width / 2;
            break;
          case Align.Right:
            top = r1.top + r1.height / 2 - r2.height / 2;
            left = r1.left + r1.width;
            break;
          case Align.Bottom:
            top = r1.bottom;
            left = r1.left + r1.width / 2 - r2.width / 2;
            break;
          case Align.Left:
            top = r1.top + r1.height / 2 - r2.height / 2;
            left = r1.left - r2.width;
            break;
        }

        return {
          bottom: top + r2.height,
          height: r2.height,
          left: left,
          right: left + r2.width,
          top: top,
          width: r2.width
        };
      }
    }, {
      key: 'isValidPosition',

      /**
       * Checks if specified value is a valid position. Options `Align.Top`,
       *     `Align.Right`, `Align.Bottom`, `Align.Left`.
       * @param {Align.Top|Align.Right|Align.Bottom|Align.Left} val
       * @return {Boolean} Returns true if value is a valid position.
       * @static
       */
      value: function isValidPosition(val) {
        return 0 <= val && val <= 3;
      }
    }]);
    return Align;
  })();

  /**
   * Represents the `Align.Top` constant.
   * @type {Number}
   * @default 0
   * @static
   */
  Align.Top = 0;

  /**
   * Represents the `Align.Right` constant.
   * @type {Number}
   * @default 1
   * @static
   */
  Align.Right = 1;

  /**
   * Represents the `Align.Bottom` constant.
   * @type {Number}
   * @default 2
   * @static
   */
  Align.Bottom = 2;

  /**
   * Represents the `Align.Left` constant.
   * @type {Number}
   * @default 3
   * @static
   */
  Align.Left = 3;

  this.steel.Align = Align;
}).call(this);
(function () {
  /* jshint ignore:start */
  'use strict';

  var ComponentRegistry = this.steel.ComponentRegistry;

  var Templates = ComponentRegistry.Templates;
  // This file was automatically generated from List.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace Templates.List.
   * @hassoydeltemplate {List}
   * @hassoydeltemplate {List.items}
   * @hassoydelcall {List}
   * @hassoydelcall {List.items}
   */

  if (typeof Templates.List == 'undefined') {
    Templates.List = {};
  }

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  Templates.List.content = function (opt_data, opt_ignored, opt_ijData) {
    return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('List.items'), '', true)(opt_data, null, opt_ijData));
  };
  if (goog.DEBUG) {
    Templates.List.content.soyTemplateName = 'Templates.List.content';
  }

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  Templates.List.items = function (opt_data, opt_ignored, opt_ijData) {
    var output = '';
    var itemList5 = opt_data.items;
    var itemListLen5 = itemList5.length;
    for (var itemIndex5 = 0; itemIndex5 < itemListLen5; itemIndex5++) {
      var itemData5 = itemList5[itemIndex5];
      output += '<li class="list-item clearfix" data-index="' + soy.$$escapeHtmlAttribute(itemIndex5) + '" data-onclick="handleClick">';
      if (itemData5.icons) {
        output += '<div class="list-icons pull-right">';
        var iconList12 = itemData5.icons;
        var iconListLen12 = iconList12.length;
        for (var iconIndex12 = 0; iconIndex12 < iconListLen12; iconIndex12++) {
          var iconData12 = iconList12[iconIndex12];
          output += '<span class="list-icon ' + soy.$$escapeHtmlAttribute(iconData12) + '"></span>';
        }
        output += '</div>';
      }
      output += (itemData5.avatar ? '<span class="list-image pull-left ' + soy.$$escapeHtmlAttribute(itemData5.avatar['class']) + '">' + soy.$$escapeHtml(itemData5.avatar.content) + '</span>' : '') + '<div class="list-main-content pull-left"><div class="list-text-primary">' + soy.$$escapeHtml(itemData5.textPrimary) + '</div>' + (itemData5.textSecondary ? '<div class="list-text-secondary">' + soy.$$escapeHtml(itemData5.textSecondary) + '</div>' : '') + '</div></li>';
    }
    return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
  };
  if (goog.DEBUG) {
    Templates.List.items.soyTemplateName = 'Templates.List.items';
  }

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  Templates.List.__deltemplate_s35_e3f298e9 = function (opt_data, opt_ignored, opt_ijData) {
    return soydata.VERY_UNSAFE.ordainSanitizedHtml('<ul id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-items">' + soy.$$escapeHtml(opt_data.elementContent) + '</ul>');
  };
  if (goog.DEBUG) {
    Templates.List.__deltemplate_s35_e3f298e9.soyTemplateName = 'Templates.List.__deltemplate_s35_e3f298e9';
  }
  soy.$$registerDelegateFn(soy.$$getDelTemplateId('List.items'), 'element', 0, Templates.List.__deltemplate_s35_e3f298e9);

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  Templates.List.__deltemplate_s41_88d36183 = function (opt_data, opt_ignored, opt_ijData) {
    opt_data = opt_data || {};
    return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('List'), 'element', true)({ elementClasses: opt_data.elementClasses, elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + Templates.List.content(opt_data, null, opt_ijData)), id: opt_data.id }, null, opt_ijData));
  };
  if (goog.DEBUG) {
    Templates.List.__deltemplate_s41_88d36183.soyTemplateName = 'Templates.List.__deltemplate_s41_88d36183';
  }
  soy.$$registerDelegateFn(soy.$$getDelTemplateId('List'), '', 0, Templates.List.__deltemplate_s41_88d36183);

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  Templates.List.__deltemplate_s47_4ac84340 = function (opt_data, opt_ignored, opt_ijData) {
    opt_data = opt_data || {};
    return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="list component' + soy.$$escapeHtmlAttribute(opt_data.elementClasses ? ' ' + opt_data.elementClasses : '') + '">' + soy.$$escapeHtml(opt_data.elementContent) + '</div>');
  };
  if (goog.DEBUG) {
    Templates.List.__deltemplate_s47_4ac84340.soyTemplateName = 'Templates.List.__deltemplate_s47_4ac84340';
  }
  soy.$$registerDelegateFn(soy.$$getDelTemplateId('List'), 'element', 0, Templates.List.__deltemplate_s47_4ac84340);

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  Templates.List.__deltemplate_s55_605e1843 = function (opt_data, opt_ignored, opt_ijData) {
    return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('List.items'), 'element', true)({ elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + Templates.List.items(opt_data, null, opt_ijData)), id: opt_data.id }, null, opt_ijData));
  };
  if (goog.DEBUG) {
    Templates.List.__deltemplate_s55_605e1843.soyTemplateName = 'Templates.List.__deltemplate_s55_605e1843';
  }
  soy.$$registerDelegateFn(soy.$$getDelTemplateId('List.items'), '', 0, Templates.List.__deltemplate_s55_605e1843);

  Templates.List.items.params = ['items'];
  this.steel.List = {};

  /* jshint ignore:end */
  this.steel.List.soy = Templates.List;
}).call(this);
(function () {
	'use strict';

	var SoyComponent = this.steel.SoyComponent;
	var ComponentRegistry = this.steel.ComponentRegistry;

	/**
  * List component.
  */

	var List = (function (_SoyComponent) {
		function List(opt_config) {
			babelHelpers.classCallCheck(this, List);

			babelHelpers.get(Object.getPrototypeOf(List.prototype), 'constructor', this).call(this, opt_config);
		}

		babelHelpers.inherits(List, _SoyComponent);
		babelHelpers.createClass(List, [{
			key: 'handleClick',

			/**
    * Handles click event on the list. The function fires an
    * {@code itemSelected} event.
    *
    * @protected
    * @param {Event} event The native click event
    */
			value: function handleClick(event) {
				this.emit('itemSelected', event.delegateTarget);
			}
		}]);
		return List;
	})(SoyComponent);

	/**
  * Default list elementClasses.
  * @default list
  * @type {String}
  * @static
  */
	List.ELEMENT_CLASSES = 'list';

	/**
  * List attributes definition.
  * @type {Object}
  * @static
  */
	List.ATTRS = {
		/**
   * The list items. Each is represented by an object that can have the following keys:
   *   - textPrimary: The item's main content.
   *   - textSecondary: (Optional) The item's help content.
   *   - icons: (Optional) A list of icon css classes to render on the right side.
   *   - avatar: (Optional) An object that specifies the avatar's content and, optionally, a css
   *       class it should use.
   * @type {!Array<!Object>}
   * @default []
   */
		items: {
			validator: Array.isArray,
			valueFn: function valueFn() {
				return [];
			}
		}
	};

	ComponentRegistry.register('List', List);

	this.steel.List = List;
}).call(this);
(function () {
	'use strict';

	var AutocompleteBase = this.steel.AutocompleteBase;
	var ComponentRegistry = this.steel.ComponentRegistry;
	var Promise = this.steelNamed.Promise.CancellablePromise;
	var core = this.steel.core;
	var dom = this.steel.dom;
	var Align = this.steel.Align;
	var List = this.steel.List;

	/*
  * Autocomplete component.
  */

	var Autocomplete = (function (_AutocompleteBase) {
		/**
   * @inheritDoc
   */

		function Autocomplete(opt_config) {
			babelHelpers.classCallCheck(this, Autocomplete);

			babelHelpers.get(Object.getPrototypeOf(Autocomplete.prototype), 'constructor', this).call(this, opt_config);
		}

		babelHelpers.inherits(Autocomplete, _AutocompleteBase);
		babelHelpers.createClass(Autocomplete, [{
			key: 'attached',

			/**
    * @inheritDoc
    */
			value: function attached() {
				babelHelpers.get(Object.getPrototypeOf(Autocomplete.prototype), 'attached', this).call(this);
				this.list.attach(this.element);
				this.on('click', this.genericStopPropagation_);
				this.eventHandler_.add(dom.on(this.inputElement, 'focus', this.handleInputFocus_.bind(this)));
				this.eventHandler_.add(dom.on(document, 'click', this.handleDocClick_.bind(this)));
				if (this.visible) {
					this.align();
				}
			}
		}, {
			key: 'detached',

			/**
    * @inheritDoc
    */
			value: function detached() {
				babelHelpers.get(Object.getPrototypeOf(Autocomplete.prototype), 'detached', this).call(this);
				this.list.detach();
			}
		}, {
			key: 'renderInternal',

			/**
    * @inheritDoc
    */
			value: function renderInternal() {
				this.list = new List().render(this.element);
				this.list.on('itemSelected', this.onListItemSelected_.bind(this));
			}
		}, {
			key: 'align',

			/**
    * Aligns main element to the input element.
    */
			value: function align() {
				this.element.style.width = this.inputElement.offsetWidth + 'px';
				Align.align(this.element, this.inputElement, Align.Bottom);
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
				return babelHelpers.get(Object.getPrototypeOf(Autocomplete.prototype), 'request', this).call(this, query).then(function (data) {
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
				babelHelpers.get(Object.getPrototypeOf(Autocomplete.prototype), 'syncVisible', this).call(this, visible);

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
				if (!core.isObject(item)) {
					throw new Promise.CancellationError('Autocomplete item must be an object');
				}
				if (!item.hasOwnProperty('textPrimary')) {
					throw new Promise.CancellationError('Autocomplete item must be an object with \'textPrimary\' key');
				}
			}
		}]);
		return Autocomplete;
	})(AutocompleteBase);

	Autocomplete.ATTRS = {
		/**
   * @inheritDoc
   */
		format: {
			value: function value(item) {
				return core.isString(item) ? {
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

	ComponentRegistry.register('Autocomplete', Autocomplete);

	this.steel.Autocomplete = Autocomplete;
}).call(this);
(function () {
  /* jshint ignore:start */
  'use strict';

  var ComponentRegistry = this.steel.ComponentRegistry;

  var Templates = ComponentRegistry.Templates;
  // This file was automatically generated from Dropdown.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace Templates.Dropdown.
   * @hassoydeltemplate {Dropdown}
   * @hassoydeltemplate {Dropdown.body}
   * @hassoydeltemplate {Dropdown.header}
   * @hassoydelcall {Dropdown}
   * @hassoydelcall {Dropdown.body}
   * @hassoydelcall {Dropdown.header}
   */

  if (typeof Templates.Dropdown == 'undefined') {
    Templates.Dropdown = {};
  }

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  Templates.Dropdown.content = function (opt_data, opt_ignored, opt_ijData) {
    return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('Dropdown.header'), '', true)(opt_data, null, opt_ijData) + soy.$$getDelegateFn(soy.$$getDelTemplateId('Dropdown.body'), '', true)(opt_data, null, opt_ijData));
  };
  if (goog.DEBUG) {
    Templates.Dropdown.content.soyTemplateName = 'Templates.Dropdown.content';
  }

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  Templates.Dropdown.header = function (opt_data, opt_ignored, opt_ijData) {
    return soydata.VERY_UNSAFE.ordainSanitizedHtml(opt_data.header ? soy.$$escapeHtml(opt_data.header) : '');
  };
  if (goog.DEBUG) {
    Templates.Dropdown.header.soyTemplateName = 'Templates.Dropdown.header';
  }

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  Templates.Dropdown.body = function (opt_data, opt_ignored, opt_ijData) {
    return soydata.VERY_UNSAFE.ordainSanitizedHtml(opt_data.body ? soy.$$escapeHtml(opt_data.body) : '');
  };
  if (goog.DEBUG) {
    Templates.Dropdown.body.soyTemplateName = 'Templates.Dropdown.body';
  }

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  Templates.Dropdown.__deltemplate_s13_1849d840 = function (opt_data, opt_ignored, opt_ijData) {
    return soydata.VERY_UNSAFE.ordainSanitizedHtml('<ul id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-body" class="dropdown-menu">' + soy.$$escapeHtml(opt_data.elementContent) + '</ul>');
  };
  if (goog.DEBUG) {
    Templates.Dropdown.__deltemplate_s13_1849d840.soyTemplateName = 'Templates.Dropdown.__deltemplate_s13_1849d840';
  }
  soy.$$registerDelegateFn(soy.$$getDelTemplateId('Dropdown.body'), 'element', 0, Templates.Dropdown.__deltemplate_s13_1849d840);

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  Templates.Dropdown.__deltemplate_s19_0db44a13 = function (opt_data, opt_ignored, opt_ijData) {
    opt_data = opt_data || {};
    return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('Dropdown'), 'element', true)({ elementClasses: opt_data.elementClasses, elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + Templates.Dropdown.content(opt_data, null, opt_ijData)), id: opt_data.id }, null, opt_ijData));
  };
  if (goog.DEBUG) {
    Templates.Dropdown.__deltemplate_s19_0db44a13.soyTemplateName = 'Templates.Dropdown.__deltemplate_s19_0db44a13';
  }
  soy.$$registerDelegateFn(soy.$$getDelTemplateId('Dropdown'), '', 0, Templates.Dropdown.__deltemplate_s19_0db44a13);

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  Templates.Dropdown.__deltemplate_s25_8cb12604 = function (opt_data, opt_ignored, opt_ijData) {
    opt_data = opt_data || {};
    return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="dropdown component' + soy.$$escapeHtmlAttribute(opt_data.elementClasses ? ' ' + opt_data.elementClasses : '') + '">' + soy.$$escapeHtml(opt_data.elementContent) + '</div>');
  };
  if (goog.DEBUG) {
    Templates.Dropdown.__deltemplate_s25_8cb12604.soyTemplateName = 'Templates.Dropdown.__deltemplate_s25_8cb12604';
  }
  soy.$$registerDelegateFn(soy.$$getDelTemplateId('Dropdown'), 'element', 0, Templates.Dropdown.__deltemplate_s25_8cb12604);

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  Templates.Dropdown.__deltemplate_s33_62341603 = function (opt_data, opt_ignored, opt_ijData) {
    var output = '';
    var elementId__soy34 = opt_data.id + '-' + (opt_data.surfaceId != null ? opt_data.surfaceId : 'header');
    output += '<div id="' + soy.$$escapeHtmlAttribute(elementId__soy34) + '">' + soy.$$escapeHtml(opt_data.elementContent) + '</div>';
    return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
  };
  if (goog.DEBUG) {
    Templates.Dropdown.__deltemplate_s33_62341603.soyTemplateName = 'Templates.Dropdown.__deltemplate_s33_62341603';
  }
  soy.$$registerDelegateFn(soy.$$getDelTemplateId('Dropdown.header'), 'element', 0, Templates.Dropdown.__deltemplate_s33_62341603);

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  Templates.Dropdown.__deltemplate_s40_9db90e38 = function (opt_data, opt_ignored, opt_ijData) {
    return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('Dropdown.header'), 'element', true)({ elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + Templates.Dropdown.header(opt_data, null, opt_ijData)), id: opt_data.id }, null, opt_ijData));
  };
  if (goog.DEBUG) {
    Templates.Dropdown.__deltemplate_s40_9db90e38.soyTemplateName = 'Templates.Dropdown.__deltemplate_s40_9db90e38';
  }
  soy.$$registerDelegateFn(soy.$$getDelTemplateId('Dropdown.header'), '', 0, Templates.Dropdown.__deltemplate_s40_9db90e38);

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  Templates.Dropdown.__deltemplate_s45_8a7848e7 = function (opt_data, opt_ignored, opt_ijData) {
    return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('Dropdown.body'), 'element', true)({ elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + Templates.Dropdown.body(opt_data, null, opt_ijData)), id: opt_data.id }, null, opt_ijData));
  };
  if (goog.DEBUG) {
    Templates.Dropdown.__deltemplate_s45_8a7848e7.soyTemplateName = 'Templates.Dropdown.__deltemplate_s45_8a7848e7';
  }
  soy.$$registerDelegateFn(soy.$$getDelTemplateId('Dropdown.body'), '', 0, Templates.Dropdown.__deltemplate_s45_8a7848e7);

  Templates.Dropdown.header.params = ['header'];
  Templates.Dropdown.body.params = ['body'];
  this.steel.Dropdown = {};

  /* jshint ignore:end */
  this.steel.Dropdown.soy = Templates.Dropdown;
}).call(this);
(function () {
	'use strict';

	var dom = this.steel.dom;
	var ComponentRegistry = this.steel.ComponentRegistry;
	var EventHandler = this.steel.EventHandler;
	var SoyComponent = this.steel.SoyComponent;

	var Dropdown = (function (_SoyComponent) {
		function Dropdown(opt_config) {
			babelHelpers.classCallCheck(this, Dropdown);

			babelHelpers.get(Object.getPrototypeOf(Dropdown.prototype), 'constructor', this).call(this, opt_config);
			this.eventHandler_ = new EventHandler();
		}

		babelHelpers.inherits(Dropdown, _SoyComponent);
		babelHelpers.createClass(Dropdown, [{
			key: 'attached',
			value: function attached() {
				babelHelpers.get(Object.getPrototypeOf(Dropdown.prototype), 'attached', this).call(this);
				this.eventHandler_.add(dom.on(document, 'click', this.handleDocClick_.bind(this)));
			}
		}, {
			key: 'detached',
			value: function detached() {
				babelHelpers.get(Object.getPrototypeOf(Dropdown.prototype), 'detached', this).call(this);
				this.eventHandler_.removeAllListeners();
			}
		}, {
			key: 'close',
			value: function close() {
				dom.removeClasses(this.element, 'open');
			}
		}, {
			key: 'isOpen',
			value: function isOpen() {
				return dom.hasClass(this.element, 'open');
			}
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
				this.close();
			}
		}, {
			key: 'open',
			value: function open() {
				dom.addClasses(this.element, 'open');
			}
		}, {
			key: 'syncPosition',
			value: function syncPosition(position, oldPosition) {
				if (oldPosition) {
					dom.removeClasses(this.element, 'drop' + oldPosition.toLowerCase());
				}
				dom.addClasses(this.element, 'drop' + position.toLowerCase());
			}
		}, {
			key: 'toggle',
			value: function toggle() {
				dom.toggleClasses(this.element, 'open');
			}
		}, {
			key: 'validatePosition_',
			value: function validatePosition_(position) {
				switch (position.toLowerCase()) {
					case 'up':
					case 'down':
						return true;
					default:
						return false;
				}
			}
		}]);
		return Dropdown;
	})(SoyComponent);

	Dropdown.ATTRS = {
		body: {},

		header: {},

		position: {
			value: 'down',
			validator: 'validatePosition_'
		}
	};

	/**
  * Default dropdown elementClasses.
  * @default dropdown
  * @type {String}
  * @static
  */
	Dropdown.ELEMENT_CLASSES = 'dropdown';

	ComponentRegistry.register('Dropdown', Dropdown);

	this.steel.Dropdown = Dropdown;
}).call(this);
(function () {
  /* jshint ignore:start */
  'use strict';

  var ComponentRegistry = this.steel.ComponentRegistry;

  var Templates = ComponentRegistry.Templates;
  // This file was automatically generated from Modal.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace Templates.Modal.
   * @hassoydeltemplate {Modal}
   * @hassoydeltemplate {Modal.body}
   * @hassoydeltemplate {Modal.footer}
   * @hassoydeltemplate {Modal.header}
   * @hassoydelcall {Modal}
   * @hassoydelcall {Modal.body}
   * @hassoydelcall {Modal.footer}
   * @hassoydelcall {Modal.header}
   */

  if (typeof Templates.Modal == 'undefined') {
    Templates.Modal = {};
  }

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  Templates.Modal.content = function (opt_data, opt_ignored, opt_ijData) {
    return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div class="modal-dialog"><div class="modal-content">' + soy.$$getDelegateFn(soy.$$getDelTemplateId('Modal.header'), '', true)(opt_data, null, opt_ijData) + soy.$$getDelegateFn(soy.$$getDelTemplateId('Modal.body'), '', true)(opt_data, null, opt_ijData) + soy.$$getDelegateFn(soy.$$getDelTemplateId('Modal.footer'), '', true)(opt_data, null, opt_ijData) + '</div></div>');
  };
  if (goog.DEBUG) {
    Templates.Modal.content.soyTemplateName = 'Templates.Modal.content';
  }

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  Templates.Modal.body = function (opt_data, opt_ignored, opt_ijData) {
    return soydata.VERY_UNSAFE.ordainSanitizedHtml(opt_data.body ? soy.$$escapeHtml(opt_data.body) : '');
  };
  if (goog.DEBUG) {
    Templates.Modal.body.soyTemplateName = 'Templates.Modal.body';
  }

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  Templates.Modal.footer = function (opt_data, opt_ignored, opt_ijData) {
    return soydata.VERY_UNSAFE.ordainSanitizedHtml(opt_data.footer ? soy.$$escapeHtml(opt_data.footer) : '');
  };
  if (goog.DEBUG) {
    Templates.Modal.footer.soyTemplateName = 'Templates.Modal.footer';
  }

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  Templates.Modal.header = function (opt_data, opt_ignored, opt_ijData) {
    return soydata.VERY_UNSAFE.ordainSanitizedHtml(opt_data.header ? '<button type="button" class="close" data-onclick="hide" aria-label="Close"><span aria-hidden="true">×</span></button>' + soy.$$escapeHtml(opt_data.header) : '');
  };
  if (goog.DEBUG) {
    Templates.Modal.header.soyTemplateName = 'Templates.Modal.header';
  }

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  Templates.Modal.__deltemplate_s21_65c2d4d4 = function (opt_data, opt_ignored, opt_ijData) {
    return soydata.VERY_UNSAFE.ordainSanitizedHtml('<section id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-body" class="modal-body">' + soy.$$escapeHtml(opt_data.elementContent) + '</section>');
  };
  if (goog.DEBUG) {
    Templates.Modal.__deltemplate_s21_65c2d4d4.soyTemplateName = 'Templates.Modal.__deltemplate_s21_65c2d4d4';
  }
  soy.$$registerDelegateFn(soy.$$getDelTemplateId('Modal.body'), 'element', 0, Templates.Modal.__deltemplate_s21_65c2d4d4);

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  Templates.Modal.__deltemplate_s27_c9897a65 = function (opt_data, opt_ignored, opt_ijData) {
    return soydata.VERY_UNSAFE.ordainSanitizedHtml('<footer id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-footer" class="modal-footer">' + soy.$$escapeHtml(opt_data.elementContent) + '</footer>');
  };
  if (goog.DEBUG) {
    Templates.Modal.__deltemplate_s27_c9897a65.soyTemplateName = 'Templates.Modal.__deltemplate_s27_c9897a65';
  }
  soy.$$registerDelegateFn(soy.$$getDelTemplateId('Modal.footer'), 'element', 0, Templates.Modal.__deltemplate_s27_c9897a65);

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  Templates.Modal.__deltemplate_s33_499dc9aa = function (opt_data, opt_ignored, opt_ijData) {
    return soydata.VERY_UNSAFE.ordainSanitizedHtml('<header id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-header" class="modal-header">' + soy.$$escapeHtml(opt_data.elementContent) + '</header>');
  };
  if (goog.DEBUG) {
    Templates.Modal.__deltemplate_s33_499dc9aa.soyTemplateName = 'Templates.Modal.__deltemplate_s33_499dc9aa';
  }
  soy.$$registerDelegateFn(soy.$$getDelTemplateId('Modal.header'), 'element', 0, Templates.Modal.__deltemplate_s33_499dc9aa);

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  Templates.Modal.__deltemplate_s39_45b138fb = function (opt_data, opt_ignored, opt_ijData) {
    opt_data = opt_data || {};
    return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('Modal'), 'element', true)({ elementClasses: opt_data.elementClasses, elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + Templates.Modal.content(opt_data, null, opt_ijData)), id: opt_data.id }, null, opt_ijData));
  };
  if (goog.DEBUG) {
    Templates.Modal.__deltemplate_s39_45b138fb.soyTemplateName = 'Templates.Modal.__deltemplate_s39_45b138fb';
  }
  soy.$$registerDelegateFn(soy.$$getDelTemplateId('Modal'), '', 0, Templates.Modal.__deltemplate_s39_45b138fb);

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  Templates.Modal.__deltemplate_s45_df8ef55a = function (opt_data, opt_ignored, opt_ijData) {
    opt_data = opt_data || {};
    return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="modal component' + soy.$$escapeHtmlAttribute(opt_data.elementClasses ? ' ' + opt_data.elementClasses : '') + '">' + soy.$$escapeHtml(opt_data.elementContent) + '</div>');
  };
  if (goog.DEBUG) {
    Templates.Modal.__deltemplate_s45_df8ef55a.soyTemplateName = 'Templates.Modal.__deltemplate_s45_df8ef55a';
  }
  soy.$$registerDelegateFn(soy.$$getDelTemplateId('Modal'), 'element', 0, Templates.Modal.__deltemplate_s45_df8ef55a);

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  Templates.Modal.__deltemplate_s53_90747620 = function (opt_data, opt_ignored, opt_ijData) {
    return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('Modal.body'), 'element', true)({ elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + Templates.Modal.body(opt_data, null, opt_ijData)), id: opt_data.id }, null, opt_ijData));
  };
  if (goog.DEBUG) {
    Templates.Modal.__deltemplate_s53_90747620.soyTemplateName = 'Templates.Modal.__deltemplate_s53_90747620';
  }
  soy.$$registerDelegateFn(soy.$$getDelTemplateId('Modal.body'), '', 0, Templates.Modal.__deltemplate_s53_90747620);

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  Templates.Modal.__deltemplate_s58_231e36e7 = function (opt_data, opt_ignored, opt_ijData) {
    return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('Modal.footer'), 'element', true)({ elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + Templates.Modal.footer(opt_data, null, opt_ijData)), id: opt_data.id }, null, opt_ijData));
  };
  if (goog.DEBUG) {
    Templates.Modal.__deltemplate_s58_231e36e7.soyTemplateName = 'Templates.Modal.__deltemplate_s58_231e36e7';
  }
  soy.$$registerDelegateFn(soy.$$getDelTemplateId('Modal.footer'), '', 0, Templates.Modal.__deltemplate_s58_231e36e7);

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  Templates.Modal.__deltemplate_s63_b8354b7d = function (opt_data, opt_ignored, opt_ijData) {
    return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('Modal.header'), 'element', true)({ elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + Templates.Modal.header(opt_data, null, opt_ijData)), id: opt_data.id }, null, opt_ijData));
  };
  if (goog.DEBUG) {
    Templates.Modal.__deltemplate_s63_b8354b7d.soyTemplateName = 'Templates.Modal.__deltemplate_s63_b8354b7d';
  }
  soy.$$registerDelegateFn(soy.$$getDelTemplateId('Modal.header'), '', 0, Templates.Modal.__deltemplate_s63_b8354b7d);

  Templates.Modal.body.params = ['body'];
  Templates.Modal.footer.params = ['footer'];
  Templates.Modal.header.params = ['header'];
  this.steel.Modal = {};

  /* jshint ignore:end */
  this.steel.Modal.soy = Templates.Modal;
}).call(this);
(function () {
	'use strict';

	var core = this.steel.core;
	var dom = this.steel.dom;
	var ComponentRegistry = this.steel.ComponentRegistry;
	var SoyComponent = this.steel.SoyComponent;

	/**
  * Modal component.
  */

	var Modal = (function (_SoyComponent) {
		/**
   * @inheritDoc
   */

		function Modal(opt_config) {
			babelHelpers.classCallCheck(this, Modal);

			babelHelpers.get(Object.getPrototypeOf(Modal.prototype), 'constructor', this).call(this, opt_config);
		}

		babelHelpers.inherits(Modal, _SoyComponent);
		babelHelpers.createClass(Modal, [{
			key: 'disposeInternal',

			/**
    * @inheritDoc
    */
			value: function disposeInternal() {
				dom.exitDocument(this.overlayElement);
				babelHelpers.get(Object.getPrototypeOf(Modal.prototype), 'disposeInternal', this).call(this);
			}
		}, {
			key: 'hide',

			/**
    * Hides the modal, setting its `visible` attribute to false.
    */
			value: function hide() {
				this.visible = false;
			}
		}, {
			key: 'show',

			/**
    * Shows the modal, setting its `visible` attribute to true.
    */
			value: function show() {
				this.visible = true;
			}
		}, {
			key: 'syncOverlay',

			/**
    * @inheritDoc
    */
			value: function syncOverlay(overlay) {
				var willShowOverlay = overlay && this.visible;
				dom[willShowOverlay ? 'enterDocument' : 'exitDocument'](this.overlayElement);
			}
		}, {
			key: 'syncVisible',

			/**
    * @inheritDoc
    */
			value: function syncVisible(visible) {
				this.element.style.display = visible ? 'block' : '';
				this.syncOverlay(this.overlay);
			}
		}, {
			key: 'valueOverlayElementFn_',

			/**
    * @inheritDoc
    */
			value: function valueOverlayElementFn_() {
				return dom.buildFragment('<div class="modal-backdrop fade in"></div>').firstChild;
			}
		}]);
		return Modal;
	})(SoyComponent);

	/**
  * Default modal elementClasses.
  * @default modal
  * @type {String}
  * @static
  */
	Modal.ELEMENT_CLASSES = 'modal';

	Modal.ATTRS = {
		/**
   * Content to be placed inside modal body.
   * @type {string|SanitizedHtml}
   */
		body: {},

		/**
   * Content to be placed inside modal footer.
   * @type {string|SanitizedHtml}
   */
		footer: {},

		/**
   * Content to be placed inside modal header.
   * @type {string|SanitizedHtml}
   */
		header: {},

		/**
   * Whether overlay should be visible when modal is visible.
   * @type {boolean}
   * @default true
   */
		overlay: {
			validator: core.isBoolean,
			value: true
		},

		/**
   * Element to be used as overlay.
   * @type {Element}
   */
		overlayElement: {
			initOnly: true,
			valueFn: 'valueOverlayElementFn_'
		}
	};

	ComponentRegistry.register('Modal', Modal);

	this.steel.Modal = Modal;
}).call(this);
(function () {
  'use strict';

  var Modal = this.steel.Modal;
  this.steel.Modal = Modal;
}).call(this);
(function () {
  /* jshint ignore:start */
  'use strict';

  var ComponentRegistry = this.steel.ComponentRegistry;

  var Templates = ComponentRegistry.Templates;
  // This file was automatically generated from Switcher.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace Templates.Switcher.
   * @hassoydeltemplate {Switcher}
   * @hassoydelcall {Switcher}
   */

  if (typeof Templates.Switcher == 'undefined') {
    Templates.Switcher = {};
  }

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  Templates.Switcher.content = function (opt_data, opt_ignored, opt_ijData) {
    return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div class="switcher-control"><div class="switcher-control-icon"></div></div>');
  };
  if (goog.DEBUG) {
    Templates.Switcher.content.soyTemplateName = 'Templates.Switcher.content';
  }

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  Templates.Switcher.__deltemplate_s4_73a26937 = function (opt_data, opt_ignored, opt_ijData) {
    opt_data = opt_data || {};
    return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('Switcher'), 'element', true)({ elementClasses: opt_data.elementClasses, elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + Templates.Switcher.content(opt_data, null, opt_ijData)), id: opt_data.id }, null, opt_ijData));
  };
  if (goog.DEBUG) {
    Templates.Switcher.__deltemplate_s4_73a26937.soyTemplateName = 'Templates.Switcher.__deltemplate_s4_73a26937';
  }
  soy.$$registerDelegateFn(soy.$$getDelTemplateId('Switcher'), '', 0, Templates.Switcher.__deltemplate_s4_73a26937);

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  Templates.Switcher.__deltemplate_s10_7e34f765 = function (opt_data, opt_ignored, opt_ijData) {
    opt_data = opt_data || {};
    return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="switcher component' + soy.$$escapeHtmlAttribute(opt_data.elementClasses ? ' ' + opt_data.elementClasses : '') + '">' + soy.$$escapeHtml(opt_data.elementContent) + '</div>');
  };
  if (goog.DEBUG) {
    Templates.Switcher.__deltemplate_s10_7e34f765.soyTemplateName = 'Templates.Switcher.__deltemplate_s10_7e34f765';
  }
  soy.$$registerDelegateFn(soy.$$getDelTemplateId('Switcher'), 'element', 0, Templates.Switcher.__deltemplate_s10_7e34f765);

  this.steel.Switcher = {};

  /* jshint ignore:end */
  this.steel.Switcher.soy = Templates.Switcher;
}).call(this);
(function () {
	'use strict';

	var core = this.steel.core;
	var dom = this.steel.dom;
	var SoyComponent = this.steel.SoyComponent;
	var ComponentRegistry = this.steel.ComponentRegistry;

	/**
  * Switcher component.
  */

	var Switcher = (function (_SoyComponent) {
		function Switcher(opt_config) {
			babelHelpers.classCallCheck(this, Switcher);

			babelHelpers.get(Object.getPrototypeOf(Switcher.prototype), 'constructor', this).call(this, opt_config);
		}

		babelHelpers.inherits(Switcher, _SoyComponent);
		babelHelpers.createClass(Switcher, [{
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
				dom[checked ? 'addClasses' : 'removeClasses'](this.element, 'switcher-on');
			}
		}]);
		return Switcher;
	})(SoyComponent);

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
			validator: core.isBoolean,
			value: false
		}
	};

	ComponentRegistry.register('Switcher', Switcher);

	this.steel.Switcher = Switcher;
}).call(this);
(function () {
  /* jshint ignore:start */
  'use strict';

  var ComponentRegistry = this.steel.ComponentRegistry;

  var Templates = ComponentRegistry.Templates;
  // This file was automatically generated from Tooltip.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace Templates.Tooltip.
   * @hassoydeltemplate {Tooltip}
   * @hassoydeltemplate {Tooltip.inner}
   * @hassoydelcall {Tooltip}
   * @hassoydelcall {Tooltip.inner}
   */

  if (typeof Templates.Tooltip == 'undefined') {
    Templates.Tooltip = {};
  }

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  Templates.Tooltip.content = function (opt_data, opt_ignored, opt_ijData) {
    return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div class="tooltip-arrow"></div>' + soy.$$getDelegateFn(soy.$$getDelTemplateId('Tooltip.inner'), '', true)(opt_data, null, opt_ijData));
  };
  if (goog.DEBUG) {
    Templates.Tooltip.content.soyTemplateName = 'Templates.Tooltip.content';
  }

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  Templates.Tooltip.inner = function (opt_data, opt_ignored, opt_ijData) {
    return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$escapeHtml(opt_data.content));
  };
  if (goog.DEBUG) {
    Templates.Tooltip.inner.soyTemplateName = 'Templates.Tooltip.inner';
  }

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  Templates.Tooltip.__deltemplate_s7_5f2b5f73 = function (opt_data, opt_ignored, opt_ijData) {
    return soydata.VERY_UNSAFE.ordainSanitizedHtml('<section id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-inner" class="tooltip-inner">' + soy.$$escapeHtml(opt_data.elementContent) + '</section>');
  };
  if (goog.DEBUG) {
    Templates.Tooltip.__deltemplate_s7_5f2b5f73.soyTemplateName = 'Templates.Tooltip.__deltemplate_s7_5f2b5f73';
  }
  soy.$$registerDelegateFn(soy.$$getDelTemplateId('Tooltip.inner'), 'element', 0, Templates.Tooltip.__deltemplate_s7_5f2b5f73);

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  Templates.Tooltip.__deltemplate_s13_8d49094e = function (opt_data, opt_ignored, opt_ijData) {
    opt_data = opt_data || {};
    return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('Tooltip'), 'element', true)({ elementClasses: opt_data.elementClasses, elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + Templates.Tooltip.content(opt_data, null, opt_ijData)), id: opt_data.id }, null, opt_ijData));
  };
  if (goog.DEBUG) {
    Templates.Tooltip.__deltemplate_s13_8d49094e.soyTemplateName = 'Templates.Tooltip.__deltemplate_s13_8d49094e';
  }
  soy.$$registerDelegateFn(soy.$$getDelTemplateId('Tooltip'), '', 0, Templates.Tooltip.__deltemplate_s13_8d49094e);

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  Templates.Tooltip.__deltemplate_s19_71828d2a = function (opt_data, opt_ignored, opt_ijData) {
    opt_data = opt_data || {};
    return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="tooltip component' + soy.$$escapeHtmlAttribute(opt_data.elementClasses ? ' ' + opt_data.elementClasses : '') + '">' + soy.$$escapeHtml(opt_data.elementContent) + '</div>');
  };
  if (goog.DEBUG) {
    Templates.Tooltip.__deltemplate_s19_71828d2a.soyTemplateName = 'Templates.Tooltip.__deltemplate_s19_71828d2a';
  }
  soy.$$registerDelegateFn(soy.$$getDelTemplateId('Tooltip'), 'element', 0, Templates.Tooltip.__deltemplate_s19_71828d2a);

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  Templates.Tooltip.__deltemplate_s27_992d380d = function (opt_data, opt_ignored, opt_ijData) {
    return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('Tooltip.inner'), 'element', true)({ elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + Templates.Tooltip.inner(opt_data, null, opt_ijData)), id: opt_data.id }, null, opt_ijData));
  };
  if (goog.DEBUG) {
    Templates.Tooltip.__deltemplate_s27_992d380d.soyTemplateName = 'Templates.Tooltip.__deltemplate_s27_992d380d';
  }
  soy.$$registerDelegateFn(soy.$$getDelTemplateId('Tooltip.inner'), '', 0, Templates.Tooltip.__deltemplate_s27_992d380d);

  Templates.Tooltip.content.params = ['content'];
  Templates.Tooltip.inner.params = ['content'];
  this.steel.Tooltip = {};

  /* jshint ignore:end */
  this.steel.Tooltip.soy = Templates.Tooltip;
}).call(this);
(function () {
	'use strict';

	var core = this.steel.core;
	var dom = this.steel.dom;
	var Align = this.steel.Align;
	var ComponentRegistry = this.steel.ComponentRegistry;
	var EventHandler = this.steel.EventHandler;
	var SoyComponent = this.steel.SoyComponent;

	/**
  * Tooltip component.
  */

	var Tooltip = (function (_SoyComponent) {
		/**
   * @inheritDoc
   */

		function Tooltip(opt_config) {
			babelHelpers.classCallCheck(this, Tooltip);

			babelHelpers.get(Object.getPrototypeOf(Tooltip.prototype), 'constructor', this).call(this, opt_config);

			this.eventHandler_ = new EventHandler();
		}

		babelHelpers.inherits(Tooltip, _SoyComponent);
		babelHelpers.createClass(Tooltip, [{
			key: 'attached',

			/**
    * @inheritDoc
    */
			value: function attached() {
				this.align();
				this.syncTriggerEvents(this.triggerEvents);
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
			key: 'align',

			/**
    * Aligns the tooltip with the best region around alignElement. The best
    * region is defined by clockwise rotation starting from the specified
    * `position`. The element is always aligned in the middle of alignElement
    * axis.
    * @param {Element=} opt_alignElement Optional element to align with.
    */
			value: function align(opt_alignElement) {
				this.syncAlignElement(opt_alignElement || this.alignElement);
			}
		}, {
			key: 'callAsync_',

			/**
    * @param {Function} fn
    * @param {number} delay
    * @private
    */
			value: function callAsync_(fn, delay) {
				clearTimeout(this.delay_);
				this.delay_ = setTimeout(fn.bind(this), delay);
			}
		}, {
			key: 'handleHide',

			/**
    * Handles hide event triggered by `events`.
    * @param {Event} event
    * @protected
    */
			value: function handleHide(event) {
				var interactingWithDifferentTarget = event.delegateTarget && event.delegateTarget !== this.alignElement;
				this.callAsync_(function () {
					if (this.locked_) {
						return;
					}
					if (interactingWithDifferentTarget) {
						this.alignElement = event.delegateTarget;
					} else {
						this.visible = false;
					}
				}, this.delay[1]);
			}
		}, {
			key: 'handleShow',

			/**
    * Handles show event triggered by `events`.
    * @param {Event} event
    * @protected
    */
			value: function handleShow(event) {
				this.callAsync_(function () {
					this.alignElement = event.delegateTarget;
					this.visible = true;
				}, this.delay[0]);
			}
		}, {
			key: 'handleToggle',

			/**
    * Handles toggle event triggered by `events`.
    * @param {Event} event
    * @protected
    */
			value: function handleToggle(event) {
				if (this.visible) {
					this.handleHide(event);
				} else {
					this.handleShow(event);
				}
			}
		}, {
			key: 'lock',

			/**
    * Locks tooltip visibility.
    * @param {Event} event
    */
			value: function lock() {
				this.locked_ = true;
			}
		}, {
			key: 'unlock',

			/**
    * Unlocks tooltip visibility.
    * @param {Event} event
    */
			value: function unlock(event) {
				this.locked_ = false;
				this.handleHide(event);
			}
		}, {
			key: 'renderInternal',

			/**
    * @inheritDoc
    */
			value: function renderInternal() {
				babelHelpers.get(Object.getPrototypeOf(Tooltip.prototype), 'renderInternal', this).call(this);
			}
		}, {
			key: 'syncAlignElement',

			/**
    * @inheritDoc
    */
			value: function syncAlignElement(alignElement) {
				if (this.inDocument && alignElement) {
					Tooltip.Align.align(this.element, alignElement, this.position);
				}
			}
		}, {
			key: 'syncPosition',

			/**
    * @inheritDoc
    */
			value: function syncPosition(position) {
				this.updatePositionCSS(position);
				this.syncAlignElement(this.alignElement);
			}
		}, {
			key: 'syncSelector',

			/**
    * @inheritDoc
    */
			value: function syncSelector() {
				this.syncTriggerEvents(this.triggerEvents);
			}
		}, {
			key: 'syncTriggerEvents',

			/**
    * @inheritDoc
    */
			value: function syncTriggerEvents(triggerEvents) {
				if (!this.inDocument) {
					return;
				}
				this.eventHandler_.removeAllListeners();
				var selector = this.selector;
				if (!selector) {
					return;
				}

				this.eventHandler_.add(this.on('mouseenter', this.lock), this.on('mouseleave', this.unlock));

				if (triggerEvents[0] === triggerEvents[1]) {
					this.eventHandler_.add(dom.delegate(document, triggerEvents[0], selector, this.handleToggle.bind(this)));
				} else {
					this.eventHandler_.add(dom.delegate(document, triggerEvents[0], selector, this.handleShow.bind(this)), dom.delegate(document, triggerEvents[1], selector, this.handleHide.bind(this)));
				}
			}
		}, {
			key: 'syncVisible',

			/**
    * Attribute synchronization logic for `visible` attribute.
    * Updates the element's opacity valye according to its visibility, and realigns
    * the tooltip as needed.
    */
			value: function syncVisible(visible) {
				this.element.style.opacity = visible ? 1 : '';
				this.align();
			}
		}, {
			key: 'updatePositionCSS',

			/**
    * Updates the css class for the current position.
    * @param {number} position
    */
			value: function updatePositionCSS(position) {
				dom.removeClasses(this.element, Tooltip.PositionClasses.join(' '));
				dom.addClasses(this.element, Tooltip.PositionClasses[position]);
			}
		}]);
		return Tooltip;
	})(SoyComponent);

	/**
  * @inheritDoc
  * @see `Align` class.
  * @static
  */
	Tooltip.Align = Align;

	/**
  * Default tooltip elementClasses.
  * @default tooltip
  * @type {String}
  * @static
  */
	Tooltip.ELEMENT_CLASSES = 'tooltip';

	/**
  * Tooltip attrbutes definition.
  * @type {Object}
  * @static
  */
	Tooltip.ATTRS = {
		/**
   * Element to align tooltip with.
   * @type {Element}
   */
		alignElement: {
			setter: dom.toElement
		},

		/**
   * Delay showing and hiding the tooltip (ms).
   * @type {!Array.<number>}
   * @default [ 500, 250 ]
   */
		delay: {
			validator: Array.isArray,
			value: [500, 250]
		},

		/**
   * Trigger events used to bind handlers to show and hide tooltip.
   * @type {!Array.<string>}
   * @default ['mouseenter', 'mouseleave']
   */
		triggerEvents: {
			validator: Array.isArray,
			value: ['mouseenter', 'mouseleave']
		},

		/**
   * If a selector is provided, tooltip objects will be delegated to the
   * specified targets by setting the `alignElement`.
   * @type {?string}
   */
		selector: {
			validator: core.isString
		},

		/**
   * Content to be placed inside tooltip.
   * @type {String}
   */
		content: {
			validator: core.isString
		},

		/**
   * The position to try alignment. If not possible the best position will be
   * found.
   * @type {Align.Top|Align.Right|Align.Bottom|Align.Left}
   * @default Align.Bottom
   */
		position: {
			validator: Tooltip.Align.isValidPosition,
			value: Tooltip.Align.Bottom
		}
	};

	/**
  * CSS classes used for each align position.
  * @type {!Array}
  * @static
  */
	Tooltip.PositionClasses = ['top', 'right', 'bottom', 'left'];

	ComponentRegistry.register('Tooltip', Tooltip);

	this.steel.Tooltip = Tooltip;
}).call(this);
(function () {
  'use strict';

  var Tooltip = this.steel.Tooltip;
  this.steel.Tooltip = Tooltip;
}).call(this);
(function () {
  /* jshint ignore:start */
  'use strict';

  var ComponentRegistry = this.steel.ComponentRegistry;

  var Templates = ComponentRegistry.Templates;
  // This file was automatically generated from TooltipMenu.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace Templates.TooltipMenu.
   * @hassoydeltemplate {TooltipMenu}
   * @hassoydeltemplate {TooltipMenu.items}
   * @hassoydelcall {TooltipMenu}
   * @hassoydelcall {TooltipMenu.items}
   */

  if (typeof Templates.TooltipMenu == 'undefined') {
    Templates.TooltipMenu = {};
  }

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  Templates.TooltipMenu.content = function (opt_data, opt_ignored, opt_ijData) {
    return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('TooltipMenu.items'), '', true)(opt_data, null, opt_ijData));
  };
  if (goog.DEBUG) {
    Templates.TooltipMenu.content.soyTemplateName = 'Templates.TooltipMenu.content';
  }

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  Templates.TooltipMenu.items = function (opt_data, opt_ignored, opt_ijData) {
    var output = '';
    var itemList5 = opt_data.content;
    var itemListLen5 = itemList5.length;
    for (var itemIndex5 = 0; itemIndex5 < itemListLen5; itemIndex5++) {
      var itemData5 = itemList5[itemIndex5];
      output += '<li class="tooltip-menu-item"><a class="tooltip-menu-link" href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(itemData5.href ? itemData5.href : '#')) + '">' + soy.$$escapeHtml(itemData5.content) + '</a></li>';
    }
    return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
  };
  if (goog.DEBUG) {
    Templates.TooltipMenu.items.soyTemplateName = 'Templates.TooltipMenu.items';
  }

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  Templates.TooltipMenu.__deltemplate_s12_cfc546d2 = function (opt_data, opt_ignored, opt_ijData) {
    opt_data = opt_data || {};
    return soydata.VERY_UNSAFE.ordainSanitizedHtml('<nav id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="tooltip-menu ' + soy.$$escapeHtmlAttribute(opt_data.elementClasses ? opt_data.elementClasses : '') + ' bottom" data-component>' + soy.$$escapeHtml(opt_data.elementContent) + '</nav>');
  };
  if (goog.DEBUG) {
    Templates.TooltipMenu.__deltemplate_s12_cfc546d2.soyTemplateName = 'Templates.TooltipMenu.__deltemplate_s12_cfc546d2';
  }
  soy.$$registerDelegateFn(soy.$$getDelTemplateId('TooltipMenu'), 'element', 0, Templates.TooltipMenu.__deltemplate_s12_cfc546d2);

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  Templates.TooltipMenu.__deltemplate_s20_c0ab3df3 = function (opt_data, opt_ignored, opt_ijData) {
    return soydata.VERY_UNSAFE.ordainSanitizedHtml('<ul id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-items" class="tooltip-menu-list">' + soy.$$escapeHtml(opt_data.elementContent) + '</ul>');
  };
  if (goog.DEBUG) {
    Templates.TooltipMenu.__deltemplate_s20_c0ab3df3.soyTemplateName = 'Templates.TooltipMenu.__deltemplate_s20_c0ab3df3';
  }
  soy.$$registerDelegateFn(soy.$$getDelTemplateId('TooltipMenu.items'), 'element', 0, Templates.TooltipMenu.__deltemplate_s20_c0ab3df3);

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  Templates.TooltipMenu.__deltemplate_s26_8f8c631d = function (opt_data, opt_ignored, opt_ijData) {
    opt_data = opt_data || {};
    return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('TooltipMenu'), 'element', true)({ elementClasses: opt_data.elementClasses, elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + Templates.TooltipMenu.content(opt_data, null, opt_ijData)), id: opt_data.id }, null, opt_ijData));
  };
  if (goog.DEBUG) {
    Templates.TooltipMenu.__deltemplate_s26_8f8c631d.soyTemplateName = 'Templates.TooltipMenu.__deltemplate_s26_8f8c631d';
  }
  soy.$$registerDelegateFn(soy.$$getDelTemplateId('TooltipMenu'), '', 0, Templates.TooltipMenu.__deltemplate_s26_8f8c631d);

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  Templates.TooltipMenu.__deltemplate_s32_8278e063 = function (opt_data, opt_ignored, opt_ijData) {
    return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('TooltipMenu.items'), 'element', true)({ elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + Templates.TooltipMenu.items(opt_data, null, opt_ijData)), id: opt_data.id }, null, opt_ijData));
  };
  if (goog.DEBUG) {
    Templates.TooltipMenu.__deltemplate_s32_8278e063.soyTemplateName = 'Templates.TooltipMenu.__deltemplate_s32_8278e063';
  }
  soy.$$registerDelegateFn(soy.$$getDelTemplateId('TooltipMenu.items'), '', 0, Templates.TooltipMenu.__deltemplate_s32_8278e063);

  Templates.TooltipMenu.items.params = ['content'];
  this.steel.TooltipMenu = {};

  /* jshint ignore:end */
  this.steel.TooltipMenu.soy = Templates.TooltipMenu;
}).call(this);
(function () {
	'use strict';

	var dom = this.steel.dom;
	var Tooltip = this.steel.Tooltip;
	var ComponentRegistry = this.steel.ComponentRegistry;

	/**
  * TooltipMenu component.
  */

	var TooltipMenu = (function (_Tooltip) {
		/**
   * @inheritDoc
   */

		function TooltipMenu(opt_config) {
			babelHelpers.classCallCheck(this, TooltipMenu);

			babelHelpers.get(Object.getPrototypeOf(TooltipMenu.prototype), 'constructor', this).call(this, opt_config);
		}

		babelHelpers.inherits(TooltipMenu, _Tooltip);
		babelHelpers.createClass(TooltipMenu, [{
			key: 'attached',
			value: function attached() {
				babelHelpers.get(Object.getPrototypeOf(TooltipMenu.prototype), 'attached', this).call(this);
				this.eventHandler_.add(dom.on(document, 'click', this.handleDocClick_.bind(this)));
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
	})(Tooltip);

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

	ComponentRegistry.register('TooltipMenu', TooltipMenu);

	this.steel.TooltipMenu = TooltipMenu;
}).call(this);
(function () {
  /* jshint ignore:start */
  'use strict';

  var ComponentRegistry = this.steel.ComponentRegistry;

  var Templates = ComponentRegistry.Templates;
  // This file was automatically generated from Treeview.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace Templates.Treeview.
   * @hassoydeltemplate {Treeview}
   * @hassoydeltemplate {Treeview.node}
   * @hassoydeltemplate {Treeview.nodes}
   * @hassoydelcall {Treeview}
   * @hassoydelcall {Treeview.node}
   * @hassoydelcall {Treeview.nodes}
   */

  if (typeof Templates.Treeview == 'undefined') {
    Templates.Treeview = {};
  }

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  Templates.Treeview.content = function (opt_data, opt_ignored, opt_ijData) {
    return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('Treeview.nodes'), '', true)(opt_data, null, opt_ijData));
  };
  if (goog.DEBUG) {
    Templates.Treeview.content.soyTemplateName = 'Templates.Treeview.content';
  }

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  Templates.Treeview.nodes = function (opt_data, opt_ignored, opt_ijData) {
    var output = '';
    var nodeList5 = opt_data.nodes;
    var nodeListLen5 = nodeList5.length;
    for (var nodeIndex5 = 0; nodeIndex5 < nodeListLen5; nodeIndex5++) {
      var nodeData5 = nodeList5[nodeIndex5];
      var index__soy6 = nodeIndex5;
      output += soy.$$getDelegateFn(soy.$$getDelTemplateId('Treeview.node'), '', true)({ id: opt_data.id, node: nodeData5, surfaceId: opt_data.parentSurfaceId != null ? opt_data.parentSurfaceId + '-' + index__soy6 : index__soy6 }, null, opt_ijData);
    }
    return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
  };
  if (goog.DEBUG) {
    Templates.Treeview.nodes.soyTemplateName = 'Templates.Treeview.nodes';
  }

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  Templates.Treeview.node = function (opt_data, opt_ignored, opt_ijData) {
    return soydata.VERY_UNSAFE.ordainSanitizedHtml(opt_data.node ? '<div class="treeview-node-wrapper' + soy.$$escapeHtmlAttribute(opt_data.node.expanded ? ' expanded' : '') + '"><div class="treeview-node-main clearfix' + soy.$$escapeHtmlAttribute(opt_data.node.children ? ' hasChildren' : '') + '" data-onclick="handleNodeClicked_">' + (opt_data.node.children ? '<div class="treeview-node-toggler"></div>' : '') + '<span class="treeview-node-name">' + soy.$$escapeHtml(opt_data.node.name) + '</span></div>' + (opt_data.node.children ? soy.$$getDelegateFn(soy.$$getDelTemplateId('Treeview.nodes'), '', true)({ id: opt_data.id, nodes: opt_data.node.children, parentSurfaceId: opt_data.surfaceId, surfaceId: opt_data.surfaceId + '-nodes' }, null, opt_ijData) : '') + '</div>' : '');
  };
  if (goog.DEBUG) {
    Templates.Treeview.node.soyTemplateName = 'Templates.Treeview.node';
  }

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  Templates.Treeview.__deltemplate_s34_97f15e76 = function (opt_data, opt_ignored, opt_ijData) {
    var output = '';
    var elementId__soy35 = (opt_data.id ? opt_data.id : '') + '-' + (opt_data.surfaceId != null ? opt_data.surfaceId : 'nodes');
    output += '<ul id="' + soy.$$escapeHtmlAttribute(elementId__soy35) + '" class="treeview-nodes">' + soy.$$escapeHtml(opt_data.elementContent) + '</ul>';
    return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
  };
  if (goog.DEBUG) {
    Templates.Treeview.__deltemplate_s34_97f15e76.soyTemplateName = 'Templates.Treeview.__deltemplate_s34_97f15e76';
  }
  soy.$$registerDelegateFn(soy.$$getDelTemplateId('Treeview.nodes'), 'element', 0, Templates.Treeview.__deltemplate_s34_97f15e76);

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  Templates.Treeview.__deltemplate_s41_9bb13687 = function (opt_data, opt_ignored, opt_ijData) {
    return soydata.VERY_UNSAFE.ordainSanitizedHtml('<li id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-' + soy.$$escapeHtmlAttribute(opt_data.surfaceId) + '" class="treeview-node">' + soy.$$escapeHtml(opt_data.elementContent) + '</li>');
  };
  if (goog.DEBUG) {
    Templates.Treeview.__deltemplate_s41_9bb13687.soyTemplateName = 'Templates.Treeview.__deltemplate_s41_9bb13687';
  }
  soy.$$registerDelegateFn(soy.$$getDelTemplateId('Treeview.node'), 'element', 0, Templates.Treeview.__deltemplate_s41_9bb13687);

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  Templates.Treeview.__deltemplate_s49_bcc6b7e7 = function (opt_data, opt_ignored, opt_ijData) {
    opt_data = opt_data || {};
    return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('Treeview'), 'element', true)({ elementClasses: opt_data.elementClasses, elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + Templates.Treeview.content(opt_data, null, opt_ijData)), id: opt_data.id }, null, opt_ijData));
  };
  if (goog.DEBUG) {
    Templates.Treeview.__deltemplate_s49_bcc6b7e7.soyTemplateName = 'Templates.Treeview.__deltemplate_s49_bcc6b7e7';
  }
  soy.$$registerDelegateFn(soy.$$getDelTemplateId('Treeview'), '', 0, Templates.Treeview.__deltemplate_s49_bcc6b7e7);

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  Templates.Treeview.__deltemplate_s55_9da5f16b = function (opt_data, opt_ignored, opt_ijData) {
    opt_data = opt_data || {};
    return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="treeview component' + soy.$$escapeHtmlAttribute(opt_data.elementClasses ? ' ' + opt_data.elementClasses : '') + '">' + soy.$$escapeHtml(opt_data.elementContent) + '</div>');
  };
  if (goog.DEBUG) {
    Templates.Treeview.__deltemplate_s55_9da5f16b.soyTemplateName = 'Templates.Treeview.__deltemplate_s55_9da5f16b';
  }
  soy.$$registerDelegateFn(soy.$$getDelTemplateId('Treeview'), 'element', 0, Templates.Treeview.__deltemplate_s55_9da5f16b);

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  Templates.Treeview.__deltemplate_s63_91ba2bf6 = function (opt_data, opt_ignored, opt_ijData) {
    return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('Treeview.nodes'), 'element', true)({ elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + Templates.Treeview.nodes(opt_data, null, opt_ijData)), id: opt_data.id, surfaceId: opt_data.surfaceId }, null, opt_ijData));
  };
  if (goog.DEBUG) {
    Templates.Treeview.__deltemplate_s63_91ba2bf6.soyTemplateName = 'Templates.Treeview.__deltemplate_s63_91ba2bf6';
  }
  soy.$$registerDelegateFn(soy.$$getDelTemplateId('Treeview.nodes'), '', 0, Templates.Treeview.__deltemplate_s63_91ba2bf6);

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  Templates.Treeview.__deltemplate_s69_23e29483 = function (opt_data, opt_ignored, opt_ijData) {
    return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('Treeview.node'), 'element', true)({ elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + Templates.Treeview.node(opt_data, null, opt_ijData)), id: opt_data.id, surfaceId: opt_data.surfaceId }, null, opt_ijData));
  };
  if (goog.DEBUG) {
    Templates.Treeview.__deltemplate_s69_23e29483.soyTemplateName = 'Templates.Treeview.__deltemplate_s69_23e29483';
  }
  soy.$$registerDelegateFn(soy.$$getDelTemplateId('Treeview.node'), '', 0, Templates.Treeview.__deltemplate_s69_23e29483);

  Templates.Treeview.nodes.params = ['id', 'nodes'];
  Templates.Treeview.node.params = ['id', 'node', 'surfaceId'];
  this.steel.Treeview = {};

  /* jshint ignore:end */
  this.steel.Treeview.soy = Templates.Treeview;
}).call(this);
(function () {
	'use strict';

	var ComponentRegistry = this.steel.ComponentRegistry;
	var SoyComponent = this.steel.SoyComponent;
	var dom = this.steel.dom;

	/**
  * Treeview component.
  */

	var Treeview = (function (_SoyComponent) {
		function Treeview(opt_config) {
			babelHelpers.classCallCheck(this, Treeview);

			babelHelpers.get(Object.getPrototypeOf(Treeview.prototype), 'constructor', this).call(this, opt_config);
		}

		babelHelpers.inherits(Treeview, _SoyComponent);
		babelHelpers.createClass(Treeview, [{
			key: 'attached',

			/**
    * Called after this component has been attached to the dom.
    */
			value: function attached() {
				this.on('nodesChanged', this.onNodesChanged_.bind(this));
			}
		}, {
			key: 'getNodeObj',

			/**
    * Gets the node object from the nodes attribute that is located at the given
    * index path.
    * @param {!Array<number>} path An array of indexes indicating where the searched
    *   node is located inside the nodes attribute.
    * @return {!Object}
    */
			value: function getNodeObj(path) {
				var obj = this.nodes[path[0]];
				for (var i = 1; i < path.length; i++) {
					obj = obj.children[path[i]];
				}
				return obj;
			}
		}, {
			key: 'getNodeObjFromId_',

			/**
    * Gets the node object that the given element id represents from the nodes
    * attribute
    * @param {string} id
    * @return {!Object}
    */
			value: function getNodeObjFromId_(id) {
				var path = id.substr(this.id.length + 1).split('-');
				return this.getNodeObj(path);
			}
		}, {
			key: 'getSurfaceContent_',

			/**
    * Overrides SoyComponent's original method, skipping it when the flag for
    * ignoring surface updates is set.
    * @param {string} surfaceId The surface id.
    * @return {Object|string} The content to be rendered.
    * @protected
    * @override
    */
			value: function getSurfaceContent_(surfaceId) {
				if (!this.ignoreSurfaceUpdate_) {
					return babelHelpers.get(Object.getPrototypeOf(Treeview.prototype), 'getSurfaceContent_', this).call(this, surfaceId);
				}
				this.ignoreSurfaceUpdate_ = false;
			}
		}, {
			key: 'handleNodeClicked_',

			/**
    * This is called when one of this tree view's nodes is clicked.
    * @param {Event} event
    * @protected
    */
			value: function handleNodeClicked_(event) {
				var node = event.delegateTarget.parentNode;
				var nodeObj = this.getNodeObjFromId_(node.parentNode.id);
				nodeObj.expanded = !nodeObj.expanded;
				if (nodeObj.expanded) {
					dom.addClasses(node, 'expanded');
				} else {
					dom.removeClasses(node, 'expanded');
				}

				this.nodes = this.nodes;
				this.ignoreSurfaceUpdate_ = true;
			}
		}, {
			key: 'onNodesChanged_',

			/**
    * Fired when the `nodes` attribute changes. Make sure that any other
    * updates to the `nodes` attribute made after ignoreSurfaceUpdate_ is
    * set to true, cause surfaces to update again.
    * @return {[type]} [description]
    */
			value: function onNodesChanged_() {
				this.ignoreSurfaceUpdate_ = false;
			}
		}]);
		return Treeview;
	})(SoyComponent);

	/**
  * Default tree view elementClasses.
  * @default treeView
  * @type {string}
  * @static
  */
	Treeview.ELEMENT_CLASSES = 'treeview';

	/**
  * Treeview attributes definition.
  * @type {Object}
  * @static
  */
	Treeview.ATTRS = {
		/**
   * This tree view's nodes. Each node should have a name, and can optionally
   * have nested children nodes. It should also indicate if its children are
   * expanded or not.
   * @type {Array<!{children: Array, expanded: boolean?, name: string}>}
   * @default []
   */
		nodes: {
			validator: Array.isArray,
			valueFn: function valueFn() {
				return [];
			}
		}
	};

	ComponentRegistry.register('Treeview', Treeview);

	this.steel.Treeview = Treeview;
}).call(this);
(function () {
  'use strict';

  var Treeview = this.steel.Treeview;
  this.steel.Treeview = Treeview;
}).call(this);
//# sourceMappingURL=steel.js.map