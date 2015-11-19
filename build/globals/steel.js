(function() {
this.steel = this.steel || {};
this.steelNamed = this.steelNamed || {};
var babelHelpers = {};

babelHelpers.typeof = function (obj) {
  return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};

babelHelpers.classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
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
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

babelHelpers.possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

babelHelpers;
'use strict'

/**
 * A collection of core utility functions.
 * @const
 */
;
(function () {
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

			/**
    * Loops constructor super classes collecting its properties values. If
    * property is not available on the super class `undefined` will be
    * collected as value for the class hierarchy position.
    * @param {!function()} constructor Class constructor.
    * @param {string} propertyName Property name to be collected.
    * @return {Array.<*>} Array of collected values.
    * TODO(*): Rethink superclass loop.
    */

		}, {
			key: 'collectSuperClassesProperty',
			value: function collectSuperClassesProperty(constructor, propertyName) {
				var propertyValues = [constructor[propertyName]];
				while (constructor.__proto__ && !constructor.__proto__.isPrototypeOf(Function)) {
					constructor = constructor.__proto__;
					propertyValues.push(constructor[propertyName]);
				}
				return propertyValues;
			}

			/**
    * Gets the name of the given function. If the current browser doesn't
    * support the `name` property, this will calculate it from the function's
    * content string.
    * @param {!function()} fn
    * @return {string}
    */

		}, {
			key: 'getFunctionName',
			value: function getFunctionName(fn) {
				if (!fn.name) {
					var str = fn.toString();
					fn.name = str.substring(9, str.indexOf('('));
				}
				return fn.name;
			}

			/**
    * Gets an unique id. If `opt_object` argument is passed, the object is
    * mutated with an unique id. Consecutive calls with the same object
    * reference won't mutate the object again, instead the current object uid
    * returns. See {@link core.UID_PROPERTY}.
    * @type {opt_object} Optional object to be mutated with the uid. If not
    *     specified this method only returns the uid.
    * @throws {Error} when invoked to indicate the method should be overridden.
    */

		}, {
			key: 'getUid',
			value: function getUid(opt_object) {
				if (opt_object) {
					return opt_object[core.UID_PROPERTY] || (opt_object[core.UID_PROPERTY] = core.uniqueIdCounter_++);
				}
				return core.uniqueIdCounter_++;
			}

			/**
    * The identity function. Returns its first argument.
    * @param {*=} opt_returnValue The single value that will be returned.
    * @return {?} The first argument.
    */

		}, {
			key: 'identityFunction',
			value: function identityFunction(opt_returnValue) {
				return opt_returnValue;
			}

			/**
    * Returns true if the specified value is a boolean.
    * @param {?} val Variable to test.
    * @return {boolean} Whether variable is boolean.
    */

		}, {
			key: 'isBoolean',
			value: function isBoolean(val) {
				return typeof val === 'boolean';
			}

			/**
    * Returns true if the specified value is not undefined.
    * @param {?} val Variable to test.
    * @return {boolean} Whether variable is defined.
    */

		}, {
			key: 'isDef',
			value: function isDef(val) {
				return val !== undefined;
			}

			/**
    * Returns true if value is not undefined or null.
    * @param {*} val
    * @return {Boolean}
    */

		}, {
			key: 'isDefAndNotNull',
			value: function isDefAndNotNull(val) {
				return core.isDef(val) && !core.isNull(val);
			}

			/**
    * Returns true if value is a document.
    * @param {*} val
    * @return {Boolean}
    */

		}, {
			key: 'isDocument',
			value: function isDocument(val) {
				return val && (typeof val === 'undefined' ? 'undefined' : babelHelpers.typeof(val)) === 'object' && val.nodeType === 9;
			}

			/**
    * Returns true if value is a dom element.
    * @param {*} val
    * @return {Boolean}
    */

		}, {
			key: 'isElement',
			value: function isElement(val) {
				return val && (typeof val === 'undefined' ? 'undefined' : babelHelpers.typeof(val)) === 'object' && val.nodeType === 1;
			}

			/**
    * Returns true if the specified value is a function.
    * @param {?} val Variable to test.
    * @return {boolean} Whether variable is a function.
    */

		}, {
			key: 'isFunction',
			value: function isFunction(val) {
				return typeof val === 'function';
			}

			/**
    * Returns true if value is null.
    * @param {*} val
    * @return {Boolean}
    */

		}, {
			key: 'isNull',
			value: function isNull(val) {
				return val === null;
			}

			/**
    * Returns true if the specified value is a number.
    * @param {?} val Variable to test.
    * @return {boolean} Whether variable is a number.
    */

		}, {
			key: 'isNumber',
			value: function isNumber(val) {
				return typeof val === 'number';
			}

			/**
    * Returns true if value is a window.
    * @param {*} val
    * @return {Boolean}
    */

		}, {
			key: 'isWindow',
			value: function isWindow(val) {
				return val !== null && val === val.window;
			}

			/**
    * Returns true if the specified value is an object. This includes arrays
    * and functions.
    * @param {?} val Variable to test.
    * @return {boolean} Whether variable is an object.
    */

		}, {
			key: 'isObject',
			value: function isObject(val) {
				var type = typeof val === 'undefined' ? 'undefined' : babelHelpers.typeof(val);
				return type === 'object' && val !== null || type === 'function';
			}

			/**
    * Returns true if value is a string.
    * @param {*} val
    * @return {Boolean}
    */

		}, {
			key: 'isString',
			value: function isString(val) {
				return typeof val === 'string';
			}

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

		}, {
			key: 'mergeSuperClassesProperty',
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

			/**
    * Null function used for default values of callbacks, etc.
    * @return {void} Nothing.
    */

		}, {
			key: 'nullFunction',
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
'use strict';

(function () {
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

			/**
    * Returns an object based on its fully qualified external name.
    * @param {string} name The fully qualified name.
    * @param {object=} opt_obj The object within which to look; default is
    *     <code>window</code>.
    * @return {?} The value (object or primitive) or, if not found, null.
    */

		}, {
			key: 'getObjectByName',
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
'use strict'

/**
 * Disposable utility. When inherited provides the `dispose` function to its
 * subclass, which is responsible for disposing of any object references
 * when an instance won't be used anymore. Subclasses should override
 * `disposeInternal` to implement any specific disposing logic.
 * @constructor
 */
;
(function () {
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

		/**
   * Disposes of this instance's object references. Calls `disposeInternal`.
   */

		babelHelpers.createClass(Disposable, [{
			key: 'dispose',
			value: function dispose() {
				if (!this.disposed_) {
					this.disposeInternal();
					this.disposed_ = true;
				}
			}

			/**
    * Subclasses should override this method to implement any specific
    * disposing logic (like clearing references and calling `dispose` on other
    * disposables).
    */

		}, {
			key: 'disposeInternal',
			value: function disposeInternal() {}

			/**
    * Checks if this instance has already been disposed.
    * @return {boolean}
    */

		}, {
			key: 'isDisposed',
			value: function isDisposed() {
				return this.disposed_;
			}
		}]);
		return Disposable;
	})();

	this.steel.Disposable = Disposable;
}).call(this);
'use strict';

(function () {
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
		babelHelpers.inherits(EventHandle, _Disposable);

		function EventHandle(emitter, event, listener) {
			babelHelpers.classCallCheck(this, EventHandle);

			/**
    * The EventEmitter instance that the event was subscribed to.
    * @type {EventEmitter}
    * @protected
    */

			var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(EventHandle).call(this));

			_this.emitter_ = emitter;

			/**
    * The name of the event that was subscribed to.
    * @type {string}
    * @protected
    */
			_this.event_ = event;

			/**
    * The listener subscribed to the event.
    * @type {Function}
    * @protected
    */
			_this.listener_ = listener;
			return _this;
		}

		/**
   * Disposes of this instance's object references.
   * @override
   */

		babelHelpers.createClass(EventHandle, [{
			key: 'disposeInternal',
			value: function disposeInternal() {
				this.removeListener();
				this.emitter_ = null;
				this.listener_ = null;
			}

			/**
    * Removes the listener subscription from the emitter.
    */

		}, {
			key: 'removeListener',
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
'use strict';

(function () {
	var EventHandle = this.steel.EventHandle;

	/**
  * This is a special EventHandle, that is responsible for dom events, instead
  * of EventEmitter events.
  * @extends {EventHandle}
  */

	var DomEventHandle = (function (_EventHandle) {
		babelHelpers.inherits(DomEventHandle, _EventHandle);

		/**
   * The constructor for `DomEventHandle`.
   * @param {!EventEmitter} emitter Emitter the event was subscribed to.
   * @param {string} event The name of the event that was subscribed to.
   * @param {!Function} listener The listener subscribed to the event.
   * @param {boolean} opt_capture Flag indicating if listener should be triggered
   *   during capture phase, instead of during the bubbling phase. Defaults to false.
   * @constructor
   */

		function DomEventHandle(emitter, event, listener, opt_capture) {
			babelHelpers.classCallCheck(this, DomEventHandle);

			var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(DomEventHandle).call(this, emitter, event, listener));

			_this.capture_ = opt_capture;
			return _this;
		}

		/**
   * @inheritDoc
   */

		babelHelpers.createClass(DomEventHandle, [{
			key: 'removeListener',
			value: function removeListener() {
				this.emitter_.removeEventListener(this.event_, this.listener_, this.capture_);
			}
		}]);
		return DomEventHandle;
	})(EventHandle);

	this.steel.DomEventHandle = DomEventHandle;
}).call(this);
'use strict';

(function () {
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

			/**
    * Adds the requested CSS classes to an element using classList.
    * @param {!Element} element The element to add CSS classes to.
    * @param {string} classes CSS classes to add.
    * @protected
    */

		}, {
			key: 'addClassesWithNative_',
			value: function addClassesWithNative_(element, classes) {
				classes.split(' ').forEach(function (className) {
					element.classList.add(className);
				});
			}

			/**
    * Adds the requested CSS classes to an element without using classList.
    * @param {!Element} element The element to add CSS classes to.
    * @param {string} classes CSS classes to add.
    * @protected
    */

		}, {
			key: 'addClassesWithoutNative_',
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

			/**
    * Appends a child node with text or other nodes to a parent node. If
    * child is a HTML string it will be automatically converted to a document
    * fragment before appending it to the parent.
    * @param {!Element} parent The node to append nodes to.
    * @param {!(Element|NodeList|string)} child The thing to append to the parent.
    * @return {!Element} The appended child.
    */

		}, {
			key: 'append',
			value: function append(parent, child) {
				if (core.isString(child)) {
					child = dom.buildFragment(child);
				}
				if (child instanceof NodeList) {
					var childArr = Array.prototype.slice.call(child);
					for (var i = 0; i < childArr.length; i++) {
						parent.appendChild(childArr[i]);
					}
				} else {
					parent.appendChild(child);
				}
				return child;
			}

			/**
    * Helper for converting a HTML string into a document fragment.
    * @param {string} htmlString The HTML string to convert.
    * @return {!Element} The resulting document fragment.
    */

		}, {
			key: 'buildFragment',
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

			/**
    * Checks if the first element contains the second one.
    * @param {!Element} element1
    * @param {!Element} element2
    * @return {boolean}
    */

		}, {
			key: 'contains',
			value: function contains(element1, element2) {
				if (core.isDocument(element1)) {
					// document.contains is not defined on IE9, so call it on documentElement instead.
					return element1.documentElement.contains(element2);
				} else {
					return element1.contains(element2);
				}
			}

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

		}, {
			key: 'delegate',
			value: function delegate(element, eventName, selector, callback) {
				var customConfig = dom.customEvents[eventName];
				if (customConfig && customConfig.delegate) {
					eventName = customConfig.originalEvent;
					callback = customConfig.handler.bind(customConfig, callback);
				}
				return dom.on(element, eventName, dom.handleDelegateEvent_.bind(null, selector, callback));
			}

			/**
    * Inserts node in document as last element.
    * @param {Element} node Element to remove children from.
    */

		}, {
			key: 'enterDocument',
			value: function enterDocument(node) {
				dom.append(document.body, node);
			}

			/**
    * Removes node from document.
    * @param {Element} node Element to remove children from.
    */

		}, {
			key: 'exitDocument',
			value: function exitDocument(node) {
				if (node.parentNode) {
					node.parentNode.removeChild(node);
				}
			}

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

		}, {
			key: 'handleDelegateEvent_',
			value: function handleDelegateEvent_(selector, callback, event) {
				dom.normalizeDelegateEvent_(event);

				var currentElement = event.target;
				var returnValue = true;

				while (currentElement && !event.stopped) {
					if (core.isString(selector) && dom.match(currentElement, selector)) {
						event.delegateTarget = currentElement;
						returnValue &= callback(event);
					}
					if (currentElement === event.currentTarget) {
						break;
					}
					currentElement = currentElement.parentNode;
				}
				event.delegateTarget = null;

				return returnValue;
			}

			/**
    * Checks if the given element has the requested css class.
    * @param {!Element} element
    * @param {string} className
    * @return {boolean}
    */

		}, {
			key: 'hasClass',
			value: function hasClass(element, className) {
				if ('classList' in element) {
					return dom.hasClassWithNative_(element, className);
				} else {
					return dom.hasClassWithoutNative_(element, className);
				}
			}

			/**
    * Checks if the given element has the requested css class using classList.
    * @param {!Element} element
    * @param {string} className
    * @return {boolean}
    * @protected
    */

		}, {
			key: 'hasClassWithNative_',
			value: function hasClassWithNative_(element, className) {
				return element.classList.contains(className);
			}

			/**
    * Checks if the given element has the requested css class without using classList.
    * @param {!Element} element
    * @param {string} className
    * @return {boolean}
    * @protected
    */

		}, {
			key: 'hasClassWithoutNative_',
			value: function hasClassWithoutNative_(element, className) {
				return (' ' + element.className + ' ').indexOf(' ' + className + ' ') >= 0;
			}

			/**
    * Checks if the given element is empty or not.
    * @param {!Element} element
    * @return {boolean}
    */

		}, {
			key: 'isEmpty',
			value: function isEmpty(element) {
				return element.childNodes.length === 0;
			}

			/**
    * Check if an element matches a given selector.
    * @param {Element} element
    * @param {string} selector
    * @return {boolean}
    */

		}, {
			key: 'match',
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

			/**
    * Check if an element matches a given selector, using an internal implementation
    * instead of calling existing javascript functions.
    * @param {Element} element
    * @param {string} selector
    * @return {boolean}
    * @protected
    */

		}, {
			key: 'matchFallback_',
			value: function matchFallback_(element, selector) {
				var nodes = document.querySelectorAll(selector, element.parentNode);
				for (var i = 0; i < nodes.length; ++i) {
					if (nodes[i] === element) {
						return true;
					}
				}
				return false;
			}

			/**
    * Normalizes the event payload for delegate listeners.
    * @param {!Event} event
    */

		}, {
			key: 'normalizeDelegateEvent_',
			value: function normalizeDelegateEvent_(event) {
				event.stopPropagation = dom.stopPropagation_;
				event.stopImmediatePropagation = dom.stopImmediatePropagation_;
			}

			/**
    * Listens to the specified event on the given DOM element. This function normalizes
    * DOM event payloads and functions so they'll work the same way on all supported
    * browsers.
    * @param {!Element|string} element The DOM element to listen to the event on, or
    *   a selector that should be delegated on the entire document.
    * @param {string} eventName The name of the event to listen to.
    * @param {!function(!Object)} callback Function to be called when the event is
    *   triggered. It will receive the normalized event object.
    * @param {boolean} opt_capture Flag indicating if listener should be triggered
    *   during capture phase, instead of during the bubbling phase. Defaults to false.
    * @return {!DomEventHandle} Can be used to remove the listener.
    */

		}, {
			key: 'on',
			value: function on(element, eventName, callback, opt_capture) {
				if (core.isString(element)) {
					return dom.delegate(document, eventName, element, callback);
				}
				var customConfig = dom.customEvents[eventName];
				if (customConfig && customConfig.event) {
					eventName = customConfig.originalEvent;
					callback = customConfig.handler.bind(customConfig, callback);
				}
				element.addEventListener(eventName, callback, opt_capture);
				return new DomEventHandle(element, eventName, callback, opt_capture);
			}

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

		}, {
			key: 'once',
			value: function once(element, eventName, callback) {
				var domEventHandle = this.on(element, eventName, function () {
					domEventHandle.removeListener();
					return callback.apply(this, arguments);
				});
				return domEventHandle;
			}

			/**
    * Registers a custom event.
    * @param {string} eventName The name of the custom event.
    * @param {!Object} customConfig An object with information about how the event
    *   should be handled.
    */

		}, {
			key: 'registerCustomEvent',
			value: function registerCustomEvent(eventName, customConfig) {
				dom.customEvents[eventName] = customConfig;
			}

			/**
    * Removes all the child nodes on a DOM node.
    * @param {Element} node Element to remove children from.
    */

		}, {
			key: 'removeChildren',
			value: function removeChildren(node) {
				var child;
				while (child = node.firstChild) {
					node.removeChild(child);
				}
			}

			/**
    * Removes the requested CSS classes from an element.
    * @param {!Element} element The element to remove CSS classes from.
    * @param {string} classes CSS classes to remove.
    */

		}, {
			key: 'removeClasses',
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

			/**
    * Removes the requested CSS classes from an element using classList.
    * @param {!Element} element The element to remove CSS classes from.
    * @param {string} classes CSS classes to remove.
    * @protected
    */

		}, {
			key: 'removeClassesWithNative_',
			value: function removeClassesWithNative_(element, classes) {
				classes.split(' ').forEach(function (className) {
					element.classList.remove(className);
				});
			}

			/**
    * Removes the requested CSS classes from an element without using classList.
    * @param {!Element} element The element to remove CSS classes from.
    * @param {string} classes CSS classes to remove.
    * @protected
    */

		}, {
			key: 'removeClassesWithoutNative_',
			value: function removeClassesWithoutNative_(element, classes) {
				var elementClassName = ' ' + element.className + ' ';

				classes = classes.split(' ');

				for (var i = 0; i < classes.length; i++) {
					elementClassName = elementClassName.replace(' ' + classes[i] + ' ', ' ');
				}

				element.className = elementClassName.trim();
			}

			/**
    * Replaces the first element with the second.
    * @param {Element} element1
    * @param {Element} element2
    */

		}, {
			key: 'replace',
			value: function replace(element1, element2) {
				if (element1 && element2 && element1 !== element2 && element1.parentNode) {
					element1.parentNode.insertBefore(element2, element1);
					element1.parentNode.removeChild(element1);
				}
			}

			/**
    * The function that replaces `stopImmediatePropagation_` for events.
    * @protected
    */

		}, {
			key: 'stopImmediatePropagation_',
			value: function stopImmediatePropagation_() {
				this.stopped = true;
				Event.prototype.stopImmediatePropagation.call(this);
			}

			/**
    * The function that replaces `stopPropagation` for events.
    * @protected
    */

		}, {
			key: 'stopPropagation_',
			value: function stopPropagation_() {
				this.stopped = true;
				Event.prototype.stopPropagation.call(this);
			}

			/**
    * Checks if the given element supports the given event type.
    * @param {!Element|string} element The DOM element or element tag name to check.
    * @param {string} eventName The name of the event to check.
    * @return {boolean}
    */

		}, {
			key: 'supportsEvent',
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

			/**
    * Converts the given argument to a DOM element. Strings are assumed to
    * be selectors, and so a matched element will be returned. If the arg
    * is already a DOM element it will be the return value.
    * @param {string|Element|Document} selectorOrElement
    * @return {Element} The converted element, or null if none was found.
    */

		}, {
			key: 'toElement',
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

			/**
    * Adds or removes one or more classes from an element. If any of the classes
    * is present, it will be removed from the element, or added otherwise.
    * @param {!Element} element The element which classes will be toggled.
    * @param {string} classes The classes which have to added or removed from the element.
    */

		}, {
			key: 'toggleClasses',
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

			/**
    * Adds or removes one or more classes from an element using classList.
    * If any of the classes is present, it will be removed from the element,
    * or added otherwise.
    * @param {!Element} element The element which classes will be toggled.
    * @param {string} classes The classes which have to added or removed from the element.
    */

		}, {
			key: 'toggleClassesWithNative_',
			value: function toggleClassesWithNative_(element, classes) {
				classes.split(' ').forEach(function (className) {
					element.classList.toggle(className);
				});
			}

			/**
    * Adds or removes one or more classes from an element without using classList.
    * If any of the classes is present, it will be removed from the element,
    * or added otherwise.
    * @param {!Element} element The element which classes will be toggled.
    * @param {string} classes The classes which have to added or removed from the element.
    */

		}, {
			key: 'toggleClassesWithoutNative_',
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

			/**
    * Triggers the specified event on the given element.
    * NOTE: This should mostly be used for testing, not on real code.
    * @param {!Element} element The node that should trigger the event.
    * @param {string} eventName The name of the event to be triggred.
    * @param {Object=} opt_eventObj An object with data that should be on the
    *   triggered event's payload.
    */

		}, {
			key: 'triggerEvent',
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
'use strict';

(function () {
	var core = this.steel.core;

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

			/**
    * Returns the first value in the given array that isn't undefined.
    * @param {!Array} arr
    * @return {*}
    */

		}, {
			key: 'firstDefinedValue',
			value: function firstDefinedValue(arr) {
				for (var i = 0; i < arr.length; i++) {
					if (arr[i] !== undefined) {
						return arr[i];
					}
				}
			}

			/**
    * Transforms the input nested array to become flat.
    * @param {Array.<*|Array.<*>>} arr Nested array to flatten.
    * @param {Array.<*>} opt_output Optional output array.
    * @return {Array.<*>} Flat array.
    */

		}, {
			key: 'flatten',
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

			/**
    * Removes the first occurrence of a particular value from an array.
    * @param {Array.<T>} arr Array from which to remove value.
    * @param {T} obj Object to remove.
    * @return {boolean} True if an element was removed.
    * @template T
    */

		}, {
			key: 'remove',
			value: function remove(arr, obj) {
				var i = arr.indexOf(obj);
				var rv;
				if (rv = i >= 0) {
					array.removeAt(arr, i);
				}
				return rv;
			}

			/**
    * Removes from an array the element at index i
    * @param {Array} arr Array or array like object from which to remove value.
    * @param {number} i The index to remove.
    * @return {boolean} True if an element was removed.
    */

		}, {
			key: 'removeAt',
			value: function removeAt(arr, i) {
				return Array.prototype.splice.call(arr, i, 1).length === 1;
			}

			/**
    * Slices the given array, just like Array.prototype.slice, but this
    * is faster and working on all array-like objects (like arguments).
    * @param {!Object} arr Array-like object to slice.
    * @param {number} start The index that should start the slice.
    * @param {number=} opt_end The index where the slice should end, not
    *   included in the final array. If not given, all elements after the
    *   start index will be included.
    * @return {!Array}
    */

		}, {
			key: 'slice',
			value: function slice(arr, start, opt_end) {
				var sliced = [];
				var end = core.isDef(opt_end) ? opt_end : arr.length;
				for (var i = start; i < end; i++) {
					sliced.push(arr[i]);
				}
				return sliced;
			}
		}]);
		return array;
	})();

	this.steel.array = array;
}).call(this);
'use strict';

(function () {
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

			/**
    * Calculates the hashcode for a string. The hashcode value is computed by
    * the sum algorithm: s[0]*31^(n-1) + s[1]*31^(n-2) + ... + s[n-1]. A nice
    * property of using 31 prime is that the multiplication can be replaced by
    * a shift and a subtraction for better performance: 31*i == (i<<5)-i.
    * Modern VMs do this sort of optimization automatically.
    * @param {String} val Target string.
    * @return {Number} Returns the string hashcode.
    */

		}, {
			key: 'hashCode',
			value: function hashCode(val) {
				var hash = 0;
				for (var i = 0, len = val.length; i < len; i++) {
					hash = 31 * hash + val.charCodeAt(i);
					hash %= 0x100000000;
				}
				return hash;
			}

			/**
    * Replaces interval into the string with specified value, e.g.
    * `replaceInterval("abcde", 1, 4, "")` returns "ae".
    * @param {string} str The input string.
    * @param {Number} start Start interval position to be replaced.
    * @param {Number} end End interval position to be replaced.
    * @param {string} value The value that replaces the specified interval.
    * @return {string}
    */

		}, {
			key: 'replaceInterval',
			value: function replaceInterval(str, start, end, value) {
				return str.substring(0, start) + value + str.substring(end);
			}
		}]);
		return string;
	})();

	this.steel.string = string;
}).call(this);
'use strict';

(function () {
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

			/**
    * @protected
    * @param {string} type Type to test: animation, transition.
    * @return {string} Browser event name.
    */

		}, {
			key: 'checkAnimationEventName_',
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

			/**
    * Some browsers (like IE9) change the order of element attributes, when html
    * is rendered. This method can be used to check if this behavior happens on
    * the current browser.
    * @return {boolean}
    */

		}, {
			key: 'checkAttrOrderChange',
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
'use strict';

(function () {
	var dom = this.steel.dom;

	/**
  * Utility functions for running javascript code in the global scope.
  */

	var globalEval = (function () {
		function globalEval() {
			babelHelpers.classCallCheck(this, globalEval);
		}

		babelHelpers.createClass(globalEval, null, [{
			key: 'run',

			/**
    * Evaluates the given string in the global scope.
    * @param {string} text
    */
			value: function run(text) {
				var script = document.createElement('script');
				script.text = text;
				document.head.appendChild(script).parentNode.removeChild(script);
			}

			/**
    * Evaluates the given javascript file in the global scope.
    * @param {string} src The file's path.
    */

		}, {
			key: 'runFile',
			value: function runFile(src) {
				var script = document.createElement('script');
				script.src = src;
				dom.on(script, 'load', function () {
					script.parentNode.removeChild(script);
				});
				dom.on(script, 'error', function () {
					script.parentNode.removeChild(script);
				});
				document.head.appendChild(script);
			}

			/**
    * Evaluates the code referenced by the given script element.
    * @param {!Element} script
    */

		}, {
			key: 'runScript',
			value: function runScript(script) {
				if (script.parentNode) {
					script.parentNode.removeChild(script);
				}
				if (script.src) {
					globalEval.runFile(script.src);
				} else {
					globalEval.run(script.text);
				}
			}
		}]);
		return globalEval;
	})();

	this.steel.globalEval = globalEval;
}).call(this);
'use strict';

(function () {
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

			/**
    * Collapses breaking spaces into a single space.
    * @param {string} htmlString
    * @return {string}
    * @protected
    */

		}, {
			key: 'collapseBreakingSpaces_',
			value: function collapseBreakingSpaces_(htmlString) {
				return string.collapseBreakingSpaces(htmlString);
			}

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

		}, {
			key: 'lookupPossibleTagBoundary_',
			value: function lookupPossibleTagBoundary_(htmlString, openTag) {
				var tagPos = htmlString.indexOf(openTag);
				if (tagPos > -1) {
					tagPos += htmlString.substring(tagPos).indexOf('>') + 1;
				}
				return tagPos;
			}

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

		}, {
			key: 'preserveBlocks_',
			value: function preserveBlocks_(htmlString, preserved) {
				htmlString = html.preserveOuterHtml_(htmlString, '<!--[if', '<![endif]-->', preserved);
				htmlString = html.preserveInnerHtml_(htmlString, '<code', '</code', preserved);
				htmlString = html.preserveInnerHtml_(htmlString, '<pre', '</pre', preserved);
				htmlString = html.preserveInnerHtml_(htmlString, '<script', '</script', preserved);
				htmlString = html.preserveInnerHtml_(htmlString, '<style', '</style', preserved);
				htmlString = html.preserveInnerHtml_(htmlString, '<textarea', '</textarea', preserved);
				return htmlString;
			}

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

		}, {
			key: 'preserveInnerHtml_',
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

		}, {
			key: 'preserveInterval_',
			value: function preserveInterval_(htmlString, start, end, preserved) {
				var blockId = '%%%~BLOCK~' + core.getUid() + '~%%%';
				preserved[blockId] = htmlString.substring(start, end);
				return string.replaceInterval(htmlString, start, end, blockId);
			}

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

		}, {
			key: 'preserveOuterHtml_',
			value: function preserveOuterHtml_(htmlString, openTag, closeTag, preserved) {
				var tagPos = htmlString.indexOf(openTag);
				while (tagPos > -1) {
					var tagEndPos = htmlString.indexOf(closeTag) + closeTag.length;
					htmlString = html.preserveInterval_(htmlString, tagPos, tagEndPos, preserved);
					tagPos = htmlString.indexOf(openTag);
				}
				return htmlString;
			}

			/**
    * Removes all comments of the HTML. Including conditional comments and
    * "<![CDATA[" blocks.
    * @param {string} htmlString
    * @return {string} The HTML without comments.
    * @protected
    */

		}, {
			key: 'removeComments_',
			value: function removeComments_(htmlString) {
				var preserved = {};
				htmlString = html.preserveOuterHtml_(htmlString, '<![CDATA[', ']]>', preserved);
				htmlString = html.preserveOuterHtml_(htmlString, '<!--', '-->', preserved);
				htmlString = html.replacePreservedBlocks_(htmlString, preserved, '');
				return htmlString;
			}

			/**
    * Removes spaces between tags, even from inline-block elements.
    * @param {string} htmlString
    * @return {string} The HTML without spaces between tags.
    * @protected
    */

		}, {
			key: 'removeIntertagSpaces_',
			value: function removeIntertagSpaces_(htmlString) {
				htmlString = htmlString.replace(html.Patterns.INTERTAG_CUSTOM_CUSTOM, '~%%%%%%~');
				htmlString = htmlString.replace(html.Patterns.INTERTAG_CUSTOM_TAG, '~%%%<');
				htmlString = htmlString.replace(html.Patterns.INTERTAG_TAG, '><');
				htmlString = htmlString.replace(html.Patterns.INTERTAG_TAG_CUSTOM, '>%%%~');
				return htmlString;
			}

			/**
    * Removes spaces inside tags.
    * @param {string} htmlString
    * @return {string} The HTML without spaces inside tags.
    * @protected
    */

		}, {
			key: 'removeSpacesInsideTags_',
			value: function removeSpacesInsideTags_(htmlString) {
				htmlString = htmlString.replace(html.Patterns.TAG_END_SPACES, '$1$2');
				htmlString = htmlString.replace(html.Patterns.TAG_QUOTE_SPACES, '=$1$2$3');
				return htmlString;
			}

			/**
    * Removes spaces surrounding tags.
    * @param {string} htmlString
    * @return {string} The HTML without spaces surrounding tags.
    * @protected
    */

		}, {
			key: 'removeSurroundingSpaces_',
			value: function removeSurroundingSpaces_(htmlString) {
				return htmlString.replace(html.Patterns.SURROUNDING_SPACES, '$1');
			}

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

		}, {
			key: 'replacePreservedBlocks_',
			value: function replacePreservedBlocks_(htmlString, preserved, replaceValue) {
				for (var blockId in preserved) {
					htmlString = htmlString.replace(blockId, replaceValue);
				}
				return htmlString;
			}

			/**
    * Simplifies DOCTYPE declaration to <!DOCTYPE html>.
    * @param {string} htmlString
    * @return {string}
    * @protected
    */

		}, {
			key: 'simplifyDoctype_',
			value: function simplifyDoctype_(htmlString) {
				var preserved = {};
				htmlString = html.preserveOuterHtml_(htmlString, '<!DOCTYPE', '>', preserved);
				htmlString = html.replacePreservedBlocks_(htmlString, preserved, '<!DOCTYPE html>');
				return htmlString;
			}

			/**
    * Restores preserved map original contents inside the HTML. Note that the
    * passed HTML should contain the unique generated block ids to be restored.
    * @param {string} htmlString
    * @param {Object} preserved Object to preserve the content indexed by an
    *     unique generated block id.
    * @return {string}
    * @protected
    */

		}, {
			key: 'returnBlocks_',
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
'use strict';

(function () {
	var core = this.steel.core;
	var array = this.steel.array;
	var Disposable = this.steel.Disposable;
	var EventHandle = this.steel.EventHandle;

	/**
  * EventEmitter utility.
  * @constructor
  * @extends {Disposable}
  */

	var EventEmitter = (function (_Disposable) {
		babelHelpers.inherits(EventEmitter, _Disposable);

		function EventEmitter() {
			babelHelpers.classCallCheck(this, EventEmitter);

			/**
    * Holds event listeners scoped by event type.
    * @type {!Object<string, !Array<!function()>>}
    * @protected
    */

			var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(EventEmitter).call(this));

			_this.events_ = [];

			/**
    * The maximum number of listeners allowed for each event type. If the number
    * becomes higher than the max, a warning will be issued.
    * @type {number}
    * @protected
    */
			_this.maxListeners_ = 10;

			/**
    * Configuration option which determines if an event facade should be sent
    * as a param of listeners when emitting events. If set to true, the facade
    * will be passed as the first argument of the listener.
    * @type {boolean}
    * @protected
    */
			_this.shouldUseFacade_ = false;
			return _this;
		}

		/**
   * Adds a listener to the end of the listeners array for the specified events.
   * @param {!(Array|string)} events
   * @param {!Function} listener
   * @param {boolean} opt_default Flag indicating if this listener is a default
   *   action for this event. Default actions are run last, and only if no previous
   *   listener call `preventDefault()` on the received event facade.
   * @return {!EventHandle} Can be used to remove the listener.
   */

		babelHelpers.createClass(EventEmitter, [{
			key: 'addListener',
			value: function addListener(events, listener, opt_default) {
				this.validateListener_(listener);

				events = this.normalizeEvents_(events);
				for (var i = 0; i < events.length; i++) {
					this.addSingleListener_(events[i], listener, opt_default);
				}

				return new EventHandle(this, events, listener);
			}

			/**
    * Adds a listener to the end of the listeners array for a single event.
    * @param {string} event
    * @param {!Function} listener
    * @param {boolean} opt_default Flag indicating if this listener is a default
    *   action for this event. Default actions are run last, and only if no previous
    *   listener call `preventDefault()` on the received event facade.
    * @return {!EventHandle} Can be used to remove the listener.
    * @param {Function=} opt_origin The original function that was added as a
    *   listener, if there is any.
    * @protected
    */

		}, {
			key: 'addSingleListener_',
			value: function addSingleListener_(event, listener, opt_default, opt_origin) {
				this.emit('newListener', event, listener);

				if (!this.events_[event]) {
					this.events_[event] = [];
				}
				this.events_[event].push({
					default: opt_default,
					fn: listener,
					origin: opt_origin
				});

				var listeners = this.events_[event];
				if (listeners.length > this.maxListeners_ && !listeners.warned) {
					console.warn('Possible EventEmitter memory leak detected. %d listeners added ' + 'for event %s. Use emitter.setMaxListeners() to increase limit.', listeners.length, event);
					listeners.warned = true;
				}
			}

			/**
    * Disposes of this instance's object references.
    * @override
    */

		}, {
			key: 'disposeInternal',
			value: function disposeInternal() {
				this.events_ = [];
			}

			/**
    * Execute each of the listeners in order with the supplied arguments.
    * @param {string} event
    * @param {*} opt_args [arg1], [arg2], [...]
    * @return {boolean} Returns true if event had listeners, false otherwise.
    */

		}, {
			key: 'emit',
			value: function emit(event) {
				var args = array.slice(arguments, 1);
				var listeners = (this.events_[event] || []).concat();

				var facade;
				if (this.getShouldUseFacade()) {
					facade = {
						preventDefault: function preventDefault() {
							facade.preventedDefault = true;
						},
						target: this,
						type: event
					};
					args.push(facade);
				}

				var defaultListeners = [];
				for (var i = 0; i < listeners.length; i++) {
					if (listeners[i].default) {
						defaultListeners.push(listeners[i]);
					} else {
						listeners[i].fn.apply(this, args);
					}
				}
				if (!facade || !facade.preventedDefault) {
					for (var j = 0; j < defaultListeners.length; j++) {
						defaultListeners[j].fn.apply(this, args);
					}
				}

				if (event !== '*') {
					this.emit.apply(this, ['*', event].concat(args));
				}

				return listeners.length > 0;
			}

			/**
    * Gets the configuration option which determines if an event facade should
    * be sent as a param of listeners when emitting events. If set to true, the
    * facade will be passed as the first argument of the listener.
    * @return {boolean}
    */

		}, {
			key: 'getShouldUseFacade',
			value: function getShouldUseFacade() {
				return this.shouldUseFacade_;
			}

			/**
    * Returns an array of listeners for the specified event.
    * @param {string} event
    * @return {Array} Array of listeners.
    */

		}, {
			key: 'listeners',
			value: function listeners(event) {
				return (this.events_[event] || []).map(function (listener) {
					return listener.fn;
				});
			}

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

		}, {
			key: 'many',
			value: function many(events, amount, listener) {
				events = this.normalizeEvents_(events);
				for (var i = 0; i < events.length; i++) {
					this.many_(events[i], amount, listener);
				}

				return new EventHandle(this, events, listener);
			}

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

		}, {
			key: 'many_',
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

				self.addSingleListener_(event, handlerInternal, false, listener);
			}

			/**
    * Checks if a listener object matches the given listener function. To match,
    * it needs to either point to that listener or have it as its origin.
    * @param {!Object} listenerObj
    * @param {!Function} listener
    * @return {boolean}
    * @protected
    */

		}, {
			key: 'matchesListener_',
			value: function matchesListener_(listenerObj, listener) {
				return listenerObj.fn === listener || listenerObj.origin && listenerObj.origin === listener;
			}

			/**
    * Converts the parameter to an array if only one event is given.
    * @param  {!(Array|string)} events
    * @return {!Array}
    * @protected
    */

		}, {
			key: 'normalizeEvents_',
			value: function normalizeEvents_(events) {
				return core.isString(events) ? [events] : events;
			}

			/**
    * Removes a listener for the specified events.
    * Caution: changes array indices in the listener array behind the listener.
    * @param {!(Array|string)} events
    * @param {!Function} listener
    * @return {!Object} Returns emitter, so calls can be chained.
    */

		}, {
			key: 'off',
			value: function off(events, listener) {
				this.validateListener_(listener);

				events = this.normalizeEvents_(events);
				for (var i = 0; i < events.length; i++) {
					var listenerObjs = this.events_[events[i]] || [];
					this.removeMatchingListenerObjs_(listenerObjs, listener);
				}

				return this;
			}

			/**
    * Adds a listener to the end of the listeners array for the specified events.
    * @param {!(Array|string)} events
    * @param {!Function} listener
    * @return {!EventHandle} Can be used to remove the listener.
    */

		}, {
			key: 'on',
			value: function on() {
				return this.addListener.apply(this, arguments);
			}

			/**
    * Adds a one time listener for the events. This listener is invoked only the
    * next time each event is fired, after which it is removed.
    * @param {!(Array|string)} events
    * @param {!Function} listener
    * @return {!EventHandle} Can be used to remove the listener.
    */

		}, {
			key: 'once',
			value: function once(events, listener) {
				return this.many(events, 1, listener);
			}

			/**
    * Removes all listeners, or those of the specified events. It's not a good
    * idea to remove listeners that were added elsewhere in the code,
    * especially when it's on an emitter that you didn't create.
    * @param {(Array|string)=} opt_events
    * @return {!Object} Returns emitter, so calls can be chained.
    */

		}, {
			key: 'removeAllListeners',
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

			/**
    * Removes all listener objects from the given array that match the given
    * listener function.
    * @param {!Array.<Object>} listenerObjs
    * @param {!Function} listener
    * @protected
    */

		}, {
			key: 'removeMatchingListenerObjs_',
			value: function removeMatchingListenerObjs_(listenerObjs, listener) {
				for (var i = listenerObjs.length - 1; i >= 0; i--) {
					if (this.matchesListener_(listenerObjs[i], listener)) {
						listenerObjs.splice(i, 1);
					}
				}
			}

			/**
    * Removes a listener for the specified events.
    * Caution: changes array indices in the listener array behind the listener.
    * @param {!(Array|string)} events
    * @param {!Function} listener
    * @return {!Object} Returns emitter, so calls can be chained.
    */

		}, {
			key: 'removeListener',
			value: function removeListener() {
				return this.off.apply(this, arguments);
			}

			/**
    * By default EventEmitters will print a warning if more than 10 listeners
    * are added for a particular event. This is a useful default which helps
    * finding memory leaks. Obviously not all Emitters should be limited to 10.
    * This function allows that to be increased. Set to zero for unlimited.
    * @param {number} max The maximum number of listeners.
    * @return {!Object} Returns emitter, so calls can be chained.
    */

		}, {
			key: 'setMaxListeners',
			value: function setMaxListeners(max) {
				this.maxListeners_ = max;
				return this;
			}

			/**
    * Sets the configuration option which determines if an event facade should
    * be sent as a param of listeners when emitting events. If set to true, the
    * facade will be passed as the first argument of the listener.
    * @param {boolean} shouldUseFacade
    * @return {!Object} Returns emitter, so calls can be chained.
    */

		}, {
			key: 'setShouldUseFacade',
			value: function setShouldUseFacade(shouldUseFacade) {
				this.shouldUseFacade_ = shouldUseFacade;
				return this;
			}

			/**
    * Checks if the given listener is valid, throwing an exception when it's not.
    * @param  {*} listener
    * @protected
    */

		}, {
			key: 'validateListener_',
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
/*!
 * Polyfill from Google's Closure Library.
 * Copyright 2013 The Closure Library Authors. All Rights Reserved.
 */

'use strict';

(function () {
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
'use strict';

(function () {
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
		babelHelpers.inherits(Attribute, _EventEmitter);

		function Attribute(opt_config) {
			babelHelpers.classCallCheck(this, Attribute);

			/**
    * Object with information about the batch event that is currently
    * scheduled, or null if none is.
    * @type {Object}
    * @protected
    */

			var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Attribute).call(this));

			_this.scheduledBatchData_ = null;

			/**
    * Object that contains information about all this instance's attributes.
    * @type {!Object<string, !Object>}
    * @protected
    */
			_this.attrsInfo_ = {};

			_this.setShouldUseFacade(true);
			_this.mergeInvalidAttrs_();
			_this.addAttrsFromStaticHint_(opt_config);
			return _this;
		}

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

		babelHelpers.createClass(Attribute, [{
			key: 'addAttr',
			value: function addAttr(name, config, initialValue) {
				this.buildAttrInfo_(name, config, initialValue);
				Object.defineProperty(this, name, this.buildAttrPropertyDef_(name));
			}

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

		}, {
			key: 'addAttrs',
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

			/**
    * Adds attributes from super classes static hint `MyClass.ATTRS = {};`.
    * @param {!Object.<string, !Object>} configs An object that maps the names
    *     of all the attributes to be added to their configuration objects.
    * @protected
    */

		}, {
			key: 'addAttrsFromStaticHint_',
			value: function addAttrsFromStaticHint_(config) {
				var ctor = this.constructor;
				var defineContext = false;
				if (Attribute.mergeAttrsStatic(ctor)) {
					defineContext = ctor.prototype;
				}
				this.addAttrs(ctor.ATTRS_MERGED, config, defineContext);
			}

			/**
    * Checks that the given name is a valid attribute name. If it's not, an error
    * will be thrown.
    * @param {string} name The name to be validated.
    * @throws {Error}
    */

		}, {
			key: 'assertValidAttrName_',
			value: function assertValidAttrName_(name) {
				if (this.constructor.INVALID_ATTRS_MERGED[name]) {
					throw new Error('It\'s not allowed to create an attribute with the name "' + name + '".');
				}
			}

			/**
    * Builds the info object for the requested attribute.
    * @param {string} name The name of the attribute.
    * @param {Object} config The config object of the attribute.
    * @param {*} initialValue The initial value of the attribute.
    * @protected
    */

		}, {
			key: 'buildAttrInfo_',
			value: function buildAttrInfo_(name, config, initialValue) {
				this.assertValidAttrName_(name);

				this.attrsInfo_[name] = {
					config: config || {},
					initialValue: initialValue,
					state: Attribute.States.UNINITIALIZED
				};
			}

			/**
    * Builds the property definition object for the requested attribute.
    * @param {string} name The name of the attribute.
    * @return {!Object}
    * @protected
    */

		}, {
			key: 'buildAttrPropertyDef_',
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

			/**
    * Calls the requested function, running the appropriate code for when it's
    * passed as an actual function object or just the function's name.
    * @param {!Function|string} fn Function, or name of the function to run.
    * @param {!Array} An optional array of parameters to be passed to the
    *   function that will be called.
    * @return {*} The return value of the called function.
    * @protected
    */

		}, {
			key: 'callFunction_',
			value: function callFunction_(fn, args) {
				if (core.isString(fn)) {
					return this[fn].apply(this, args);
				} else if (core.isFunction(fn)) {
					return fn.apply(this, args);
				}
			}

			/**
    * Calls the attribute's setter, if there is one.
    * @param {string} name The name of the attribute.
    * @param {*} value The value to be set.
    * @return {*} The final value to be set.
    */

		}, {
			key: 'callSetter_',
			value: function callSetter_(name, value) {
				var info = this.attrsInfo_[name];
				var config = info.config;
				if (config.setter) {
					value = this.callFunction_(config.setter, [value]);
				}
				return value;
			}

			/**
    * Calls the attribute's validator, if there is one.
    * @param {string} name The name of the attribute.
    * @param {*} value The value to be validated.
    * @return {boolean} Flag indicating if value is valid or not.
    */

		}, {
			key: 'callValidator_',
			value: function callValidator_(name, value) {
				var info = this.attrsInfo_[name];
				var config = info.config;
				if (config.validator) {
					return this.callFunction_(config.validator, [value]);
				}
				return true;
			}

			/**
    * Checks if the it's allowed to write on the requested attribute.
    * @param {string} name The name of the attribute.
    * @return {boolean}
    */

		}, {
			key: 'canSetAttribute',
			value: function canSetAttribute(name) {
				var info = this.attrsInfo_[name];
				return !info.config.writeOnce || !info.written;
			}

			/**
    * @inheritDoc
    */

		}, {
			key: 'disposeInternal',
			value: function disposeInternal() {
				babelHelpers.get(Object.getPrototypeOf(Attribute.prototype), 'disposeInternal', this).call(this);
				this.attrsInfo_ = null;
				this.scheduledBatchData_ = null;
			}

			/**
    * Emits the attribute change batch event.
    * @protected
    */

		}, {
			key: 'emitBatchEvent_',
			value: function emitBatchEvent_() {
				if (!this.isDisposed()) {
					var data = this.scheduledBatchData_;
					this.scheduledBatchData_ = null;
					this.emit('attrsChanged', data);
				}
			}

			/**
    * Returns the value of the requested attribute.
    * Note: this can and should be accomplished by accessing the attribute as a regular property.
    * This should only be used in cases where a function is actually needed.
    * @param {string} name
    * @return {*}
    */

		}, {
			key: 'get',
			value: function get(name) {
				return this[name];
			}

			/**
    * Gets the config object for the requested attribute.
    * @param {string} name The attribute's name.
    * @return {Object}
    * @protected
    */

		}, {
			key: 'getAttrConfig',
			value: function getAttrConfig(name) {
				return (this.attrsInfo_[name] || {}).config;
			}

			/**
    * Returns an object that maps attribute names to their values.
    * @param {Array<string>=} opt_names A list of names of the attributes that should be
    *   returned. If none is given, all attributes will be returned.
    * @return {Object.<string, *>}
    */

		}, {
			key: 'getAttrs',
			value: function getAttrs(opt_names) {
				var attrsMap = {};
				var names = opt_names || this.getAttrNames();

				for (var i = 0; i < names.length; i++) {
					attrsMap[names[i]] = this[names[i]];
				}

				return attrsMap;
			}

			/**
    * Returns an array with all attribute names.
    * @return {Array.<string>}
    */

		}, {
			key: 'getAttrNames',
			value: function getAttrNames() {
				return Object.keys(this.attrsInfo_);
			}

			/**
    * Gets the value of the specified attribute. This is passed as that attribute's
    * getter to the `Object.defineProperty` call inside the `addAttr` method.
    * @param {string} name The name of the attribute.
    * @return {*}
    * @protected
    */

		}, {
			key: 'getAttrValue_',
			value: function getAttrValue_(name) {
				this.initAttr_(name);

				return this.attrsInfo_[name].value;
			}

			/**
    * Informs of changes to an attributes value through an event. Won't trigger
    * the event if the value hasn't changed or if it's being initialized.
    * @param {string} name The name of the attribute.
    * @param {*} prevVal The previous value of the attribute.
    * @protected
    */

		}, {
			key: 'informChange_',
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

			/**
    * Initializes the specified attribute, giving it a first value.
    * @param {string} name The name of the attribute.
    * @protected
    */

		}, {
			key: 'initAttr_',
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

			/**
    * Merges an array of values for the ATTRS property into a single object.
    * @param {!Array} values The values to be merged.
    * @return {!Object} The merged value.
    * @static
    * @protected
    */

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

			/**
    * Removes the requested attribute.
    * @param {string} name The name of the attribute.
    */

		}, {
			key: 'removeAttr',
			value: function removeAttr(name) {
				this.attrsInfo_[name] = null;
				delete this[name];
			}

			/**
    * Schedules an attribute change batch event to be emitted asynchronously.
    * @param {!Object} attrChangeData Information about an attribute's update.
    * @protected
    */

		}, {
			key: 'scheduleBatchEvent_',
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

			/**
    * Sets the value of the requested attribute.
    * Note: this can and should be accomplished by setting the attribute as a regular property.
    * This should only be used in cases where a function is actually needed.
    * @param {string} name
    * @param {*} value
    * @return {*}
    */

		}, {
			key: 'set',
			value: function set(name, value) {
				this[name] = value;
			}

			/**
    * Sets the value of all the specified attributes.
    * @param {!Object.<string,*>} values A map of attribute names to the values they
    *   should be set to.
    */

		}, {
			key: 'setAttrs',
			value: function setAttrs(values) {
				var names = Object.keys(values);

				for (var i = 0; i < names.length; i++) {
					this[names[i]] = values[names[i]];
				}
			}

			/**
    * Sets the value of the specified attribute. This is passed as that attribute's
    * setter to the `Object.defineProperty` call inside the `addAttr` method.
    * @param {string} name The name of the attribute.
    * @param {*} value The new value of the attribute.
    * @protected
    */

		}, {
			key: 'setAttrValue_',
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

			/**
    * Sets the default value of the requested attribute.
    * @param {string} name The name of the attribute.
    * @return {*}
    */

		}, {
			key: 'setDefaultValue_',
			value: function setDefaultValue_(name) {
				var config = this.attrsInfo_[name].config;

				if (config.value !== undefined) {
					this[name] = config.value;
				} else {
					this[name] = this.callFunction_(config.valueFn);
				}
			}

			/**
    * Sets the initial value of the requested attribute.
    * @param {string} name The name of the attribute.
    * @return {*}
    */

		}, {
			key: 'setInitialValue_',
			value: function setInitialValue_(name) {
				var info = this.attrsInfo_[name];
				if (info.initialValue !== undefined) {
					this[name] = info.initialValue;
					info.initialValue = undefined;
				}
			}

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

		}, {
			key: 'shouldInformChange_',
			value: function shouldInformChange_(name, prevVal) {
				var info = this.attrsInfo_[name];
				return info.state === Attribute.States.INITIALIZED && (core.isObject(prevVal) || prevVal !== this[name]);
			}

			/**
    * Validates the attribute's value, which includes calling the validator defined
    * in the attribute's configuration object, if there is one.
    * @param {string} name The name of the attribute.
    * @param {*} value The value to be validated.
    * @return {boolean} Flag indicating if value is valid or not.
    */

		}, {
			key: 'validateAttrValue_',
			value: function validateAttrValue_(name, value) {
				var info = this.attrsInfo_[name];

				return info.state === Attribute.States.INITIALIZING_DEFAULT || this.callValidator_(name, value);
			}
		}], [{
			key: 'mergeAttrs_',
			value: function mergeAttrs_(values) {
				return object.mixin.apply(null, [{}].concat(values.reverse()));
			}

			/**
    * Merges the ATTRS static variable for the given constructor function.
    * @param  {!Function} ctor Constructor function.
    * @return {boolean} Returns true if merge happens, false otherwise.
    * @static
    */

		}, {
			key: 'mergeAttrsStatic',
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
'use strict';

(function () {
	var core = this.steel.core;

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

			/**
    * Registers a component, so it can be found by its name.
    * @param {string} constructorFn The component's constructor function.
    * @param {string=} opt_name Name of the registered component. If none is given
    *   the name defined by the NAME static variable will be used instead. If that
    *   isn't set as well, the name of the constructor function will be used.
    * @static
    */

		}, {
			key: 'register',
			value: function register(constructorFn, opt_name) {
				var name = opt_name;
				if (!name) {
					if (constructorFn.hasOwnProperty('NAME')) {
						name = constructorFn.NAME;
					} else {
						name = core.getFunctionName(constructorFn);
					}
				}
				constructorFn.NAME = name;
				ComponentRegistry.components_[name] = constructorFn;
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

	this.steel.ComponentRegistry = ComponentRegistry;
}).call(this);
'use strict';

(function () {
	var ComponentRegistry = this.steel.ComponentRegistry;
	var Disposable = this.steel.Disposable;

	var ComponentCollector = (function (_Disposable) {
		babelHelpers.inherits(ComponentCollector, _Disposable);

		function ComponentCollector() {
			babelHelpers.classCallCheck(this, ComponentCollector);
			return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(ComponentCollector).apply(this, arguments));
		}

		babelHelpers.createClass(ComponentCollector, [{
			key: 'addComponent',

			/**
    * Adds a component to this collector.
    * @param {!Component} component
    */
			value: function addComponent(component) {
				ComponentCollector.components[component.id] = component;
			}

			/**
    * Creates the appropriate component from the given config data if it doesn't
    * exist yet.
    * @param {string} componentName The name of the component to be created.
    * @param {string} id The id of the component to be created.
    * @param {Object=} opt_data
    * @return {!Component} The component instance.
    */

		}, {
			key: 'createComponent',
			value: function createComponent(componentName, id, opt_data) {
				var component = ComponentCollector.components[id];
				if (!component) {
					var ConstructorFn = ComponentRegistry.getConstructor(componentName);
					var data = opt_data || {};
					data.id = id;
					data.element = '#' + id;
					component = new ConstructorFn(data);
				}
				return component;
			}

			/**
    * Removes the given component from this collector.
    * @param {!Component} component
    */

		}, {
			key: 'removeComponent',
			value: function removeComponent(component) {
				delete ComponentCollector.components[component.id];
			}

			/**
    * Updates an existing component instance with new attributes.
    * @param {string} id The id of the component to be created or updated.
    * @param {Object=} opt_data
    * @return {Component} The extracted component instance.
    */

		}, {
			key: 'updateComponent',
			value: function updateComponent(id, opt_data) {
				var component = ComponentCollector.components[id];
				if (component && opt_data) {
					component.setAttrs(opt_data);
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
'use strict'

/**
 * Base class that component renderers should extend from. It defines the
 * required methods all renderers should have.
 */
;
(function () {
	var ComponentRenderer = (function () {
		function ComponentRenderer() {
			babelHelpers.classCallCheck(this, ComponentRenderer);
		}

		babelHelpers.createClass(ComponentRenderer, null, [{
			key: 'getSurfaceContent',

			/**
    * Returns the content, as a string, that should be rendered for
    * the given component's surface.
    * @param {!Object} surface The surface configuration.
    * @param {!Component} component The component instance.
    * @param {string=} opt_skipContents True if only the element's tag needs to be rendered.
    * @return {string} The content to be rendered, as a string. Nested surfaces can be
    *   represented by placeholders in the format specified by Component.SURFACE_REGEX.
    *   Also, if the string content's main wrapper has the surface's id, then it
    *   will be used to render the main surface tag.
    */
			value: function getSurfaceContent() {}
		}]);
		return ComponentRenderer;
	})();

	this.steel.ComponentRenderer = ComponentRenderer;
}).call(this);
'use strict';

(function () {
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
		babelHelpers.inherits(EventEmitterProxy, _Disposable);

		function EventEmitterProxy(originEmitter, targetEmitter, opt_blacklist, opt_whitelist) {
			babelHelpers.classCallCheck(this, EventEmitterProxy);

			/**
    * Map of events that should not be proxied.
    * @type {Object}
    * @protected
    */

			var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(EventEmitterProxy).call(this));

			_this.blacklist_ = opt_blacklist || {};

			/**
    * The origin emitter. This emitter's events will be proxied through the
    * target emitter.
    * @type {EventEmitter}
    * @protected
    */
			_this.originEmitter_ = originEmitter;

			/**
    * Holds a map of events from the origin emitter that are already being proxied.
    * @type {Object}
    * @protected
    */
			_this.proxiedEvents_ = {};

			/**
    * The target emitter. This emitter will emit all events that come from
    * the origin emitter.
    * @type {EventEmitter}
    * @protected
    */
			_this.targetEmitter_ = targetEmitter;

			/**
    * Map of events that should be proxied. If whitelist is set blacklist is ignored.
    * @type {Object}
    * @protected
    */
			_this.whitelist_ = opt_whitelist;

			_this.startProxy_();
			return _this;
		}

		/**
   * @inheritDoc
   */

		babelHelpers.createClass(EventEmitterProxy, [{
			key: 'disposeInternal',
			value: function disposeInternal() {
				var removeFnName = this.originEmitter_.removeEventListener ? 'removeEventListener' : 'removeListener';
				for (var event in this.proxiedEvents_) {
					this.originEmitter_[removeFnName](event, this.proxiedEvents_[event]);
				}

				this.proxiedEvents_ = null;
				this.originEmitter_ = null;
				this.targetEmitter_ = null;
			}

			/**
    * Proxies the given event from the origin to the target emitter.
    * @param {string} event
    */

		}, {
			key: 'proxyEvent_',
			value: function proxyEvent_(event) {
				if (!this.shouldProxyEvent_(event)) {
					return;
				}

				var self = this;
				this.proxiedEvents_[event] = function () {
					var args = [event].concat(Array.prototype.slice.call(arguments, 0));
					self.targetEmitter_.emit.apply(self.targetEmitter_, args);
				};

				if (core.isElement(this.originEmitter_) || core.isDocument(this.originEmitter_)) {
					dom.on(this.originEmitter_, event, this.proxiedEvents_[event]);
				} else {
					this.originEmitter_.on(event, this.proxiedEvents_[event]);
				}
			}

			/**
    * Checks if the given event should be proxied.
    * @param {string} event
    * @return {boolean}
    * @protected
    */

		}, {
			key: 'shouldProxyEvent_',
			value: function shouldProxyEvent_(event) {
				if (this.whitelist_ && !this.whitelist_[event]) {
					return false;
				}
				if (this.blacklist_[event]) {
					return false;
				}
				return !this.proxiedEvents_[event] && (!(this.originEmitter_.removeEventListener || this.originEmitter_.addEventListener) || dom.supportsEvent(this.originEmitter_, event));
			}

			/**
    * Starts proxying all events from the origin to the target emitter.
    * @protected
    */

		}, {
			key: 'startProxy_',
			value: function startProxy_() {
				this.targetEmitter_.on('newListener', this.proxyEvent_.bind(this));
			}
		}]);
		return EventEmitterProxy;
	})(Disposable);

	this.steel.EventEmitterProxy = EventEmitterProxy;
}).call(this);
'use strict';

(function () {
	var Disposable = this.steel.Disposable;

	/**
  * EventHandler utility. It's useful for easily removing a group of
  * listeners from different EventEmitter instances.
  * @constructor
  * @extends {Disposable}
  */

	var EventHandler = (function (_Disposable) {
		babelHelpers.inherits(EventHandler, _Disposable);

		function EventHandler() {
			babelHelpers.classCallCheck(this, EventHandler);

			/**
    * An array that holds the added event handles, so the listeners can be
    * removed later.
    * @type {Array.<EventHandle>}
    * @protected
    */

			var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(EventHandler).call(this));

			_this.eventHandles_ = [];
			return _this;
		}

		/**
   * Adds event handles to be removed later through the `removeAllListeners`
   * method.
   * @param {...(!EventHandle)} var_args
   */

		babelHelpers.createClass(EventHandler, [{
			key: 'add',
			value: function add() {
				for (var i = 0; i < arguments.length; i++) {
					this.eventHandles_.push(arguments[i]);
				}
			}

			/**
    * Disposes of this instance's object references.
    * @override
    */

		}, {
			key: 'disposeInternal',
			value: function disposeInternal() {
				this.eventHandles_ = null;
			}

			/**
    * Removes all listeners that have been added through the `add` method.
    */

		}, {
			key: 'removeAllListeners',
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
'use strict';

(function () {
	var core = this.steel.core;
	var ComponentCollector = this.steel.ComponentCollector;
	var Disposable = this.steel.Disposable;
	var EventHandler = this.steel.EventHandler;

	/**
  * Collects inline events from a passed element, detaching previously
  * attached events that are not being used anymore.
  * @param {Component} component
  * @constructor
  * @extends {Disposable}
  */

	var EventsCollector = (function (_Disposable) {
		babelHelpers.inherits(EventsCollector, _Disposable);

		function EventsCollector(component) {
			babelHelpers.classCallCheck(this, EventsCollector);

			var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(EventsCollector).call(this));

			if (!component) {
				throw new Error('The component instance is mandatory');
			}

			/**
    * Holds the component intance.
    * @type {!Component}
    * @protected
    */
			_this.component_ = component;

			/**
    * Holds the attached delegate event handles, indexed by the css selector.
    * @type {!Object<string, EventHandler>}
    * @protected
    */
			_this.eventHandles_ = {};

			/**
    * Holds flags indicating which selectors a group has listeners for.
    * @type {!Object<string, !Object<string, boolean>>}
    * @protected
    */
			_this.groupHasListener_ = {};
			return _this;
		}

		/**
   * Attaches the listener described by the given params, unless it has already
   * been attached.
   * @param {string} eventType
   * @param {string} fnNamesString
   * @param {boolean} permanent
   * @protected
   */

		babelHelpers.createClass(EventsCollector, [{
			key: 'attachListener_',
			value: function attachListener_(eventType, fnNamesString, groupName) {
				var selector = '[data-on' + eventType + '="' + fnNamesString + '"]';

				this.groupHasListener_[groupName][selector] = true;

				if (!this.eventHandles_[selector]) {
					this.eventHandles_[selector] = new EventHandler();
					var fnNames = fnNamesString.split(',');
					for (var i = 0; i < fnNames.length; i++) {
						var fn = this.getListenerFn(fnNames[i]);
						if (fn) {
							this.eventHandles_[selector].add(this.component_.delegate(eventType, selector, this.onEvent_.bind(this, fn)));
						}
					}
				}
			}

			/**
    * Attaches all listeners declared as attributes on the given element and
    * its children.
    * @param {string} content
    * @param {boolean} groupName
    */

		}, {
			key: 'attachListeners',
			value: function attachListeners(content, groupName) {
				this.groupHasListener_[groupName] = {};
				this.attachListenersFromHtml_(content, groupName);
			}

			/**
    * Attaches listeners found in the given html content.
    * @param {string} content
    * @param {boolean} groupName
    * @protected
    */

		}, {
			key: 'attachListenersFromHtml_',
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

			/**
    * Removes all previously attached event listeners to the component.
    */

		}, {
			key: 'detachAllListeners',
			value: function detachAllListeners() {
				for (var selector in this.eventHandles_) {
					if (this.eventHandles_[selector]) {
						this.eventHandles_[selector].removeAllListeners();
					}
				}
				this.eventHandles_ = {};
				this.listenerCounts_ = {};
			}

			/**
    * Detaches all existing listeners that are not being used anymore.
    * @protected
    */

		}, {
			key: 'detachUnusedListeners',
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
							this.eventHandles_[selector].removeAllListeners();
							this.eventHandles_[selector] = null;
						}
					}
				}
			}

			/**
    * @inheritDoc
    */

		}, {
			key: 'disposeInternal',
			value: function disposeInternal() {
				this.detachAllListeners();
				this.component_ = null;
			}

			/**
    * Gets the listener function from its name. If the name is prefixed with a
    * component id, the function will be called on that specified component. Otherwise
    * it will be called on this event collector's component instead.
    * @param {string} fnName
    * @return {function()}
    */

		}, {
			key: 'getListenerFn',
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

			/**
    * Checks if this EventsCollector instance has already attached listeners for the given
    * group before.
    * @param  {string} group
    * @return {boolean}
    */

		}, {
			key: 'hasAttachedForGroup',
			value: function hasAttachedForGroup(group) {
				return !!this.groupHasListener_.hasOwnProperty(group);
			}

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

		}, {
			key: 'onEvent_',
			value: function onEvent_(fn, event) {
				// This check prevents parent components from handling their child inline listeners.
				var eventComp = event.handledByComponent;
				if (!eventComp || eventComp === this.component_ || event.delegateTarget.contains(eventComp.element)) {
					event.handledByComponent = this.component_;
					return fn(event);
				}
			}
		}]);
		return EventsCollector;
	})(Disposable);

	this.steel.EventsCollector = EventsCollector;
}).call(this);
'use strict';

(function () {
	var object = this.steel.object;
	var Disposable = this.steel.Disposable;

	/**
  * Stores surface data to be used later by Components.
  */

	var SurfaceCollector = (function (_Disposable) {
		babelHelpers.inherits(SurfaceCollector, _Disposable);

		function SurfaceCollector() {
			babelHelpers.classCallCheck(this, SurfaceCollector);

			/**
    * Holds all registered surfaces, mapped by their element ids.
    * @type {!Array<!Object>}
    * @protected
    */

			var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(SurfaceCollector).call(this));

			_this.surfaces_ = {};
			return _this;
		}

		/**
   * Adds a surface to this collector.
   * @param {string} surfaceElementId
   * @param {Object=} opt_data Surface data to be stored.
   */

		babelHelpers.createClass(SurfaceCollector, [{
			key: 'addSurface',
			value: function addSurface(surfaceElementId, opt_data) {
				if (this.surfaces_[surfaceElementId]) {
					this.updateSurface(surfaceElementId, opt_data);
				} else {
					this.surfaces_[surfaceElementId] = opt_data || {};
					this.surfaces_[surfaceElementId].surfaceElementId = surfaceElementId;
				}
			}

			/**
    * @inheritDoc
    */

		}, {
			key: 'disposeInternal',
			value: function disposeInternal() {
				this.surfaces_ = null;
			}

			/**
    * Gets the data for the given surface id.
    * @param {string} surfaceElementId
    * @return {!Object}
    */

		}, {
			key: 'getSurface',
			value: function getSurface(surfaceElementId) {
				return this.surfaces_[surfaceElementId] ? this.surfaces_[surfaceElementId] : null;
			}

			/**
    * Removes all surfaces from this collector.
    */

		}, {
			key: 'removeAllSurfaces',
			value: function removeAllSurfaces() {
				this.surfaces_ = [];
			}

			/**
    * Removes the surface with the given surface id.
    * @param {string} surfaceElementId
    */

		}, {
			key: 'removeSurface',
			value: function removeSurface(surfaceElementId) {
				this.surfaces_[surfaceElementId] = null;
			}

			/**
    * Updates a surface from this collector.
    * @param {string} surfaceElementId
    * @param {Object=} opt_data Surface data to update the existing data.
    */

		}, {
			key: 'updateSurface',
			value: function updateSurface(surfaceElementId, opt_data) {
				object.mixin(this.surfaces_[surfaceElementId], opt_data);
			}
		}]);
		return SurfaceCollector;
	})(Disposable);

	this.steel.SurfaceCollector = SurfaceCollector;
}).call(this);
'use strict';

(function () {
	var array = this.steel.array;
	var core = this.steel.core;
	var dom = this.steel.dom;
	var features = this.steel.features;
	var globalEval = this.steel.globalEval;
	var html = this.steel.html;
	var object = this.steel.object;
	var string = this.steel.string;
	var Attribute = this.steel.Attribute;
	var ComponentCollector = this.steel.ComponentCollector;
	var ComponentRenderer = this.steel.ComponentRenderer;
	var EventEmitterProxy = this.steel.EventEmitterProxy;
	var EventHandler = this.steel.EventHandler;
	var EventsCollector = this.steel.EventsCollector;
	var SurfaceCollector = this.steel.SurfaceCollector;

	/**
  * Component collects common behaviors to be followed by UI components, such
  * as Lifecycle, bounding box element creation, CSS classes management,
  * events encapsulation and surfaces support. Surfaces are an area of the
  * component that can have information rendered into it. A component
  * manages multiple surfaces. Surfaces are only rendered when its content is
  * modified, representing render performance gains. For each surface, render
  * attributes could be associated, when the render context of a surface gets
  * modified the component Lifecycle re-paints the modified surface
  * automatically. Each component has a `ComponentRenderer`, which is in charge
  * of rendering the surfaces. The renderer to be used is specified by the
  * RENDERER static variable. An example of renderer is the SoyRenderer, which
  * works with soy templates.
  *
  * Example:
  *
  * <code>
  * class CustomComponent extends Component {
  *   constructor(config) {
  *     super(config);
  *   }
  *
  *   attached() {
  *   }
  *
  *   detached() {
  *   }
  * }
  *
  * CustomComponent.RENDERER = MyRenderer;
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
		babelHelpers.inherits(Component, _Attribute);

		function Component(opt_config) {
			babelHelpers.classCallCheck(this, Component);

			/**
    * Holds data about all surfaces that were collected through the
    * `replaceSurfacePlaceholders_` method.
    * @type {!Array}
    * @protected
    */

			var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Component).call(this, opt_config));

			_this.collectedSurfaces_ = [];

			/**
    * Gets all nested components.
    * @type {!Array<!Component>}
    */
			_this.components = {};

			/**
    * Whether the element is being decorated.
    * @type {boolean}
    * @protected
    */
			_this.decorating_ = false;

			/**
    * Holds events that were listened through the `delegate` Component function.
    * @type {EventHandler}
    * @protected
    */
			_this.delegateEventHandler_ = null;

			/**
    * Instance of `EventEmitterProxy` which proxies events from the component's
    * element to the component itself.
    * @type {EventEmitterProxy}
    * @protected
    */
			_this.elementEventProxy_ = null;

			/**
    * The `EventHandler` instance for events attached from the `events` attribute.
    * @type {!EventHandler}
    * @protected
    */
			_this.eventsAttrHandler_ = new EventHandler();

			/**
    * Collects inline events from html contents.
    * @type {!EventsCollector}
    * @protected
    */
			_this.eventsCollector_ = new EventsCollector(_this);

			/**
    * Holds the number of generated ids for each surface's contents.
    * @type {!Object}
    * @protected
    */
			_this.generatedIdCount_ = {};

			/**
    * Whether the element is in document.
    * @type {boolean}
    */
			_this.inDocument = false;

			/**
    * The initial config option passed to this constructor.
    * @type {!Object}
    * @protected
    */
			_this.initialConfig_ = opt_config || {};

			/**
    * The element ids of all surfaces that were removed on a repaint.
    * @type {!Array<string>}
    * @protected
    */
			_this.removedSurfaces_ = [];

			/**
    * The ids of the surfaces registered by this component.
    * @type {!Object<string, boolean>}
    * @protected
    */
			_this.surfaceIds_ = {};

			/**
    * Whether the element was rendered.
    * @type {boolean}
    */
			_this.wasRendered = false;

			/**
    * The component's element will be appended to the element this variable is
    * set to, unless the user specifies another parent when calling `render` or
    * `attach`.
    * @type {!Element}
    */
			_this.DEFAULT_ELEMENT_PARENT = document.body;

			core.mergeSuperClassesProperty(_this.constructor, 'ELEMENT_CLASSES', _this.mergeElementClasses_);
			core.mergeSuperClassesProperty(_this.constructor, 'ELEMENT_TAG_NAME', array.firstDefinedValue);
			core.mergeSuperClassesProperty(_this.constructor, 'RENDERER', array.firstDefinedValue);
			core.mergeSuperClassesProperty(_this.constructor, 'SURFACE_TAG_NAME', array.firstDefinedValue);
			_this.addSurfacesFromStaticHint_();

			_this.delegateEventHandler_ = new EventHandler();

			_this.created_();
			return _this;
		}

		/**
   * Adds the listeners specified in the given object.
   * @param {Object} events
   * @protected
   */

		babelHelpers.createClass(Component, [{
			key: 'addListenersFromObj_',
			value: function addListenersFromObj_(events) {
				var eventNames = Object.keys(events || {});
				for (var i = 0; i < eventNames.length; i++) {
					var info = this.extractListenerInfo_(events[eventNames[i]]);
					if (info.fn) {
						var handler;
						if (info.selector) {
							handler = this.delegate(eventNames[i], info.selector, info.fn);
						} else {
							handler = this.on(eventNames[i], info.fn);
						}
						this.eventsAttrHandler_.add(handler);
					}
				}
			}

			/**
    * Adds a simple attribute with the given name, if it doesn't exist yet.
    * @param {string} attrName
    * @param {Object=} opt_initialValue Optional initial value for the new attr.
    * @protected
    */

		}, {
			key: 'addMissingAttr_',
			value: function addMissingAttr_(attrName, initialValue) {
				if (!this.getAttrConfig(attrName)) {
					this.addAttr(attrName, {}, initialValue);
				}
			}

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

		}, {
			key: 'addSingleListener_',
			value: function addSingleListener_(event, listener, opt_origin) {
				if (!this.elementEventProxy_ && dom.supportsEvent(this.constructor.ELEMENT_TAG_NAME_MERGED, event)) {
					this.elementEventProxy_ = new EventEmitterProxy(this.element, this);
				}
				babelHelpers.get(Object.getPrototypeOf(Component.prototype), 'addSingleListener_', this).call(this, event, listener, opt_origin);
			}

			/**
    * Adds the surface for this component's main element, if it doesn't exist yet.
    * @protected
    */

		}, {
			key: 'addElementSurface_',
			value: function addElementSurface_() {
				if (!this.surfaceIds_[this.id]) {
					this.addSurface(this.id, {
						componentName: this.getName()
					});
				}
			}

			/**
    * Registers a surface to the component. Surface elements are not
    * automatically appended to the component element.
    * @param {string} surfaceId The surface id to be registered.
    * @param {Object=} opt_surfaceConfig Optional surface configuration.
    * @chainable
    */

		}, {
			key: 'addSurface',
			value: function addSurface(surfaceId, opt_surfaceConfig) {
				var config = opt_surfaceConfig || {};
				var surfaceElementId = this.getSurfaceElementId(surfaceId, config);
				if (this.surfaceIds_[surfaceElementId]) {
					Component.surfacesCollector.updateSurface(surfaceElementId, config);
				} else {
					this.surfaceIds_[surfaceElementId] = true;
					config.cacheState = config.cacheState || Component.Cache.NOT_INITIALIZED;
					Component.surfacesCollector.addSurface(surfaceElementId, config);
					if (config.componentName && surfaceId !== this.id) {
						this.createSubComponent_(config.componentName, surfaceElementId);
					}
				}
				this.cacheSurfaceRenderAttrs_(surfaceElementId, config.renderAttrs);

				return this;
			}

			/**
    * Registers surfaces to the component. Surface elements are not
    * automatically appended to the component element.
    * @param {!Object.<string, Object=>} configs An object that maps the names
    *     of all the surfaces to be added to their configuration objects.
    * @chainable
    */

		}, {
			key: 'addSurfaces',
			value: function addSurfaces(configs) {
				for (var surfaceId in configs) {
					this.addSurface(surfaceId, configs[surfaceId]);
				}
				return this;
			}

			/**
    * Adds surfaces from super classes static hint.
    * @protected
    */

		}, {
			key: 'addSurfacesFromStaticHint_',
			value: function addSurfacesFromStaticHint_() {
				core.mergeSuperClassesProperty(this.constructor, 'SURFACES', this.mergeObjects_);
				this.surfacesRenderAttrs_ = {};

				var configs = this.constructor.SURFACES_MERGED;
				for (var surfaceId in configs) {
					this.addSurface(surfaceId, object.mixin({}, configs[surfaceId]));
				}
			}

			/**
    * Adds the given surface element ids to the list of removed surfaces,
    * removing their parent reference as well.
    * @param {!Array<string>} surfaceElementIds
    * @protected
    */

		}, {
			key: 'addToRemovedSurfaces_',
			value: function addToRemovedSurfaces_(surfaceElementIds) {
				for (var i = 0; i < surfaceElementIds.length; i++) {
					var surface = this.getSurface(surfaceElementIds[i]);
					this.removedSurfaces_.push(surface);
					surface.parent = null;
				}
			}

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

		}, {
			key: 'attach',
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

			/**
    * Lifecycle. When attached, the component element is appended to the DOM
    * and any other action to be performed must be implemented in this method,
    * such as, binding DOM events. A component can be re-attached multiple
    * times, therefore the undo behavior for any action performed in this phase
    * must be implemented on the detach phase.
    */

		}, {
			key: 'attached',
			value: function attached() {}

			/**
    * Builds a fragment element with the given content, so it can be rendered.
    * Any script tags inside the content will be moved to the header, so they can
    * be reevaluated when this content is rendered.
    * @param {string} content
    * @return {!Element}
    */

		}, {
			key: 'buildFragment_',
			value: function buildFragment_(content) {
				var frag = dom.buildFragment(content);
				if (content.indexOf('<script') === -1) {
					return frag;
				}
				var scripts = frag.querySelectorAll('script');
				for (var i = 0; i < scripts.length; i++) {
					var script = scripts.item(i);
					if (!script.type || script.type === 'text/javascript') {
						globalEval.runScript(script);
					}
				}
				return frag;
			}

			/**
    * Builds a surface placeholder, attaching it to the given data.
    * @param {string} surfaceElementId
    * @param {Object=} opt_data
    * @return {string}
    */

		}, {
			key: 'buildPlaceholder',
			value: function buildPlaceholder(surfaceElementId, opt_data) {
				if (surfaceElementId && opt_data) {
					opt_data.surfaceElementId = surfaceElementId;
					this.addSurface(surfaceElementId, opt_data);
				}
				return '%%%%~s' + (surfaceElementId ? '-' + surfaceElementId : '') + '~%%%%';
			}

			/**
    * Caches the given content for the surface with the requested id.
    * @param {string} surfaceElementId
    * @param {string} content
    */

		}, {
			key: 'cacheSurfaceContent',
			value: function cacheSurfaceContent(surfaceElementId, content) {
				var cacheState = this.computeSurfaceCacheState_(content);
				var surface = this.getSurfaceFromElementId(surfaceElementId);
				surface.cacheState = cacheState;
			}

			/**
    * Caches surface render attributes into a O(k) flat map representation.
    * Relevant for performance to calculate the surfaces group that were
    * modified by attributes mutation.
    * @param {string} surfaceElementId The surface id to be cached into the flat map.
    * @param {Array} renderAttrs The surface's render attrs.
    * @protected
    */

		}, {
			key: 'cacheSurfaceRenderAttrs_',
			value: function cacheSurfaceRenderAttrs_(surfaceElementId, renderAttrs) {
				var attrs = renderAttrs || [];
				for (var i = 0; i < attrs.length; i++) {
					if (!this.surfacesRenderAttrs_[attrs[i]]) {
						this.surfacesRenderAttrs_[attrs[i]] = {};
						this.addMissingAttr_(attrs[i], this.initialConfig_[attrs[i]]);
					}
					this.surfacesRenderAttrs_[attrs[i]][surfaceElementId] = true;
				}
			}

			/**
    * Checks if the given content has an element tag with the given id.
    * @param {string} content
    * @param {string} id
    * @return {boolean}
    * @protected
    */

		}, {
			key: 'checkHasElementTag_',
			value: function checkHasElementTag_(content, id) {
				return content.indexOf(' id="' + id + '"') !== -1;
			}

			/**
    * Clears the cache of the specified surface.
    * @param {string} surfaceIds
    */

		}, {
			key: 'clearSurfaceCache',
			value: function clearSurfaceCache(surfaceId) {
				this.getSurface(surfaceId).cacheState = Component.Cache.NOT_INITIALIZED;
			}

			/**
    * Compares cache states.
    * @param {number} currentCacheState
    * @param {number} previousCacheState
    * @return {boolean} True if there's a cache hit, or false for cache miss.
    */

		}, {
			key: 'compareCacheStates_',
			value: function compareCacheStates_(currentCacheState, previousCacheState) {
				return currentCacheState !== Component.Cache.NOT_INITIALIZED && currentCacheState === previousCacheState;
			}

			/**
    * Computes the cache state for the surface content. If value is string, the
    * cache state is represented by its hashcode.
    * @param {?string} value The value to calculate the cache state.
    * @return {Object} The computed cache state.
    * @protected
    */

		}, {
			key: 'computeSurfaceCacheState_',
			value: function computeSurfaceCacheState_(value) {
				value = value || '';
				if (features.checkAttrOrderChange()) {
					value = this.convertHtmlToBrowserFormat_(value);
				}
				return string.hashCode(value);
			}

			/**
    * Converts the given html string to the format the current browser uses
    * when html is rendered. This is done by rendering the html in a temporary
    * element, and returning its resulting rendered html.
    * @param {string} htmlString The html to be converted.
    * @return {string}
    * @protected
    */

		}, {
			key: 'convertHtmlToBrowserFormat_',
			value: function convertHtmlToBrowserFormat_(htmlString) {
				var element = document.createElement('div');
				dom.append(element, htmlString);
				return element.innerHTML;
			}

			/**
    * Creates a surface that was found via a string placeholder.
    * @param {string} parentSurfaceElementId The id of the surface element that contains
    *   the surface to be created, or undefined if there is none.
    * @param {string=} opt_surfaceElementId
    * @return {!Object} The created surface.
    * @protected
    */

		}, {
			key: 'createPlaceholderSurface_',
			value: function createPlaceholderSurface_(parentSurfaceElementId, opt_surfaceElementId) {
				var surfaceElementId = opt_surfaceElementId;
				if (!core.isDefAndNotNull(surfaceElementId)) {
					surfaceElementId = this.generateSurfaceElementId(parentSurfaceElementId);
				}
				var surface = this.getSurfaceFromElementId(surfaceElementId);
				if (!surface) {
					surface = {
						surfaceElementId: surfaceElementId
					};
					this.addSurface(surfaceElementId, surface);
				}
				return surface;
			}

			/**
    * Creates a sub component.
    * @param {string} componentName
    * @param {string} componentId
    * @return {!Component}
    * @protected
    */

		}, {
			key: 'createSubComponent_',
			value: function createSubComponent_(componentName, componentId) {
				this.components[componentId] = Component.componentsCollector.createComponent(componentName, componentId, this.getSurfaceFromElementId(componentId).componentData);
				return this.components[componentId];
			}

			/**
    * Creates the surface element with its id namespaced to the component id.
    * @param {string} surfaceElementId The id of the element for the surface to be
    *   created.
    * @return {Element} The surface element.
    * @protected
    */

		}, {
			key: 'createSurfaceElement_',
			value: function createSurfaceElement_(surfaceElementId) {
				var el = document.createElement(this.constructor.SURFACE_TAG_NAME_MERGED);
				el.id = surfaceElementId;
				return el;
			}

			/**
    * Decorates this component as a subcomponent, meaning that no rendering is
    * needed since it was already rendered by the parent component. Handles the
    * same logics that `renderAsSubComponent`, but also makes sure that the
    * surfaces content is updated if the html is incorrect for the given data.
    * @param {string=} opt_content The content that was already rendered for this
    *   component.
    */

		}, {
			key: 'decorateAsSubComponent',
			value: function decorateAsSubComponent(opt_content) {
				this.decorating_ = true;
				this.renderAsSubComponent(opt_content);
				this.decorating_ = false;
			}

			/**
    * Listens to a delegate event on the component's element.
    * @param {string} eventName The name of the event to listen to.
    * @param {string} selector The selector that matches the child elements that
    *   the event should be triggered for.
    * @param {!function(!Object)} callback Function to be called when the event is
    *   triggered. It will receive the normalized event object.
    * @return {!DomEventHandle} Can be used to remove the listener.
    */

		}, {
			key: 'delegate',
			value: function delegate(eventName, selector, callback) {
				var handle = dom.delegate(this.element, eventName, selector, callback);
				this.delegateEventHandler_.add(handle);
				return handle;
			}

			/**
    * Invokes the detached Lifecycle. When detached, the component element is
    * removed from the DOM and any other action to be performed must be
    * implemented in this method, such as, unbinding DOM events. A component
    * can be detached multiple times.
    * @chainable
    */

		}, {
			key: 'detach',
			value: function detach() {
				if (this.inDocument) {
					if (this.element.parentNode) {
						this.element.parentNode.removeChild(this.element);
					}
					this.inDocument = false;
					this.detached();
				}
				this.eventsCollector_.detachAllListeners();
				return this;
			}

			/**
    * Lifecycle. When detached, the component element is removed from the DOM
    * and any other action to be performed must be implemented in this method,
    * such as, unbinding DOM events. A component can be detached multiple
    * times, therefore the undo behavior for any action performed in this phase
    * must be implemented on the attach phase.
    */

		}, {
			key: 'detached',
			value: function detached() {}

			/**
    * Internal implementation for the creation phase of the component.
    * @protected
    */

		}, {
			key: 'created_',
			value: function created_() {
				this.on('eventsChanged', this.onEventsChanged_);
				this.addListenersFromObj_(this.events);

				this.on('attrsChanged', this.handleAttributesChanges_);
				Component.componentsCollector.addComponent(this);

				this.on('renderSurface', this.defaultRenderSurfaceFn_, true);
			}

			/**
    * Lifecycle. Creates the component using existing DOM elements. Often the
    * component can be created using existing elements in the DOM to leverage
    * progressive enhancement. Any extra operation necessary to prepare the
    * component DOM must be implemented in this phase. Decorate phase replaces
    * render phase.
    *
    * Decoration Lifecycle:
    *   decorate - Decorate is manually called.
    *   retrieve existing html - The cache for all surfaces is filled with any
    *     existing html from the document.
    *   render surfaces - Surfaces that cause a cache miss are rendered, including
    *     the main content (`getElementContent`).
    *   attribute synchronization - All synchronization methods are called.
    *   attach - Attach Lifecycle is called.
    * @chainable
    */

		}, {
			key: 'decorate',
			value: function decorate() {
				this.decorating_ = true;
				this.render();
				this.decorating_ = false;
				return this;
			}

			/**
    * The default implementation for the `renderSurface` event. Renders
    * content into a surface. If the specified content is the same of the
    * current surface content, nothing happens. If the surface cache state
    * is not initialized or the content is not eligible for cache or content
    * is different, the surfaces re-renders.
    * @param {!Object} data
    * @protected
    */

		}, {
			key: 'defaultRenderSurfaceFn_',
			value: function defaultRenderSurfaceFn_(data) {
				var surfaceElementId = data.surfaceElementId;
				var surface = this.getSurfaceFromElementId(surfaceElementId);
				if (surface.componentName && surfaceElementId !== this.id) {
					this.renderComponentSurface_(surfaceElementId, data.content);
					return;
				}

				var content = data.content || this.getSurfaceContent_(surfaceElementId);
				var cacheContent = data.cacheContent || content;
				var cacheHit = surface.static;
				if (!surface.static) {
					var previousCacheState = surface.cacheState;
					this.cacheSurfaceContent(surfaceElementId, cacheContent);
					cacheHit = this.compareCacheStates_(surface.cacheState, previousCacheState);
				}

				if (cacheHit) {
					this.renderPlaceholderSurfaceContents_(cacheContent, surfaceElementId);
				} else {
					this.eventsCollector_.attachListeners(cacheContent, surfaceElementId);
					this.replaceSurfaceContent_(surfaceElementId, surface, content);
				}
			}

			/**
    * Calls `dispose` on all subcomponents.
    * @param {!Array<string>} ids
    * @protected
    */

		}, {
			key: 'disposeSubComponents_',
			value: function disposeSubComponents_(ids) {
				for (var i = 0; i < ids.length; i++) {
					var component = this.components[ids[i]];
					if (!component.isDisposed()) {
						Component.componentsCollector.removeComponent(component);
						component.dispose();
						delete this.components[ids[i]];
					}
				}
			}

			/**
    * @inheritDoc
    */

		}, {
			key: 'disposeInternal',
			value: function disposeInternal() {
				var _this2 = this;

				this.detach();

				if (this.elementEventProxy_) {
					this.elementEventProxy_.dispose();
					this.elementEventProxy_ = null;
				}

				this.delegateEventHandler_.removeAllListeners();
				this.delegateEventHandler_ = null;

				this.disposeSubComponents_(Object.keys(this.components));
				this.components = null;
				this.generatedIdCount_ = null;
				this.surfacesRenderAttrs_ = null;

				this.eventsCollector_.dispose();
				this.eventsCollector_ = null;

				Object.keys(this.surfaceIds_).forEach(function (surfaceId) {
					return _this2.removeSurface(surfaceId);
				});
				this.surfaceIds_ = null;

				babelHelpers.get(Object.getPrototypeOf(Component.prototype), 'disposeInternal', this).call(this);
			}

			/**
    * Emits the `renderSurface` event, which will cause the specified surface to be
    * rendered, unless it's prevented.
    * @param {string} surfaceElementId
    * @param {string=} opt_content
    * @param {string=} opt_cacheContent
    * @param {Array<string>=} opt_renderAttrs The render attributes that caused the
    *   surface to be rerendered, or nothing if that wasn't the cause of the update.
    * @protected
    */

		}, {
			key: 'emitRenderSurfaceEvent_',
			value: function emitRenderSurfaceEvent_(surfaceElementId, opt_content, opt_cacheContent, opt_renderAttrs) {
				this.emit('renderSurface', {
					cacheContent: opt_cacheContent,
					content: opt_content,
					renderAttrs: opt_renderAttrs || [],
					surfaceElementId: surfaceElementId,
					surfaceId: this.getSurfaceId(this.getSurfaceFromElementId(surfaceElementId))
				});
			}

			/**
    * Extracts listener info from the given value.
    * @param {function()|string|{selector:string,fn:function()|string}} value
    * @return {!{selector:string,fn:function()}}
    * @protected
    */

		}, {
			key: 'extractListenerInfo_',
			value: function extractListenerInfo_(value) {
				var info = {
					fn: value
				};
				if (core.isObject(value) && !core.isFunction(value)) {
					info.selector = value.selector;
					info.fn = value.fn;
				}
				if (core.isString(info.fn)) {
					info.fn = this.eventsCollector_.getListenerFn(info.fn);
				}
				return info;
			}

			/**
    * Fires attributes synchronization changes for attributes.
    * @protected
    */

		}, {
			key: 'syncAttrs_',
			value: function syncAttrs_() {
				var attrNames = this.getAttrNames();
				for (var i = 0; i < attrNames.length; i++) {
					this.fireAttrChange_(attrNames[i]);
				}
			}

			/**
    * Fires attributes synchronization changes for attributes.
    * @param {Object.<string, Object>} changes Object containing the attribute
    *     name as key and an object with newVal and prevVal as value.
    * @protected
    */

		}, {
			key: 'syncAttrsFromChanges_',
			value: function syncAttrsFromChanges_(changes) {
				for (var attr in changes) {
					this.fireAttrChange_(attr, changes[attr]);
				}
			}

			/**
    * Finds the element that matches the given id on this component. This searches
    * on the document first, for performance. If the element is not found, it's
    * searched in the component's element directly.
    * @param {string} id
    * @return {Element}
    * @protected
    */

		}, {
			key: 'findElementById_',
			value: function findElementById_(id) {
				return document.getElementById(id) || this.element && this.element.querySelector('#' + id);
			}

			/**
    * Finds the element with the given id in the given content, if there is one.
    * @param {string} id
    * @param {!Element|string} content
    * @return {Element}
    * @protected
    */

		}, {
			key: 'findElementInContent_',
			value: function findElementInContent_(id, content) {
				content = core.isString(content) ? dom.buildFragment(content) : content;
				var firstChild = content.childNodes[0];
				if (firstChild && firstChild.id === id) {
					return firstChild;
				}
			}

			/**
    * Fires attribute synchronization change for the attribute.
    * @param {Object.<string, Object>} change Object containing newVal and
    *     prevVal keys.
    * @protected
    */

		}, {
			key: 'fireAttrChange_',
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

			/**
    * Generates an id for a surface that was found inside the contents of the main
    * element or of a parent surface.
    * @param {string} parentSurfaceElementId The id of the parent surface, or undefined
    *   if there is none.
    * @return {string} The generated id.
    */

		}, {
			key: 'generateSurfaceElementId',
			value: function generateSurfaceElementId(parentSurfaceElementId) {
				this.generatedIdCount_[parentSurfaceElementId] = (this.generatedIdCount_[parentSurfaceElementId] || 0) + 1;
				return parentSurfaceElementId + '-s' + this.generatedIdCount_[parentSurfaceElementId];
			}

			/**
    * Gets the html that should be used to build this component's main element with
    * some content.
    * @param {string} content
    * @return {string}
    */

		}, {
			key: 'getComponentHtml',
			value: function getComponentHtml(content) {
				return this.wrapContentIfNecessary(content, this.id, this.constructor.ELEMENT_TAG_NAME_MERGED);
			}

			/**
    * Returns a map of all subcomponents with ids that have the specified prefix.
    * @param {string} prefix
    * @return {!Object<string, !Component>}
    */

		}, {
			key: 'getComponentsWithPrefix',
			value: function getComponentsWithPrefix(prefix) {
				var _this3 = this;

				var ids = Object.keys(this.components).filter(function (id) {
					return id.indexOf(prefix) === 0;
				});
				var map = {};
				ids.forEach(function (id) {
					return map[id] = _this3.components[id];
				});
				return map;
			}

			/**
    * Gets the name of this component. If the `NAME` static variable is set, this will
    * be the component's name. Otherwise, it will be formed from the constructor's
    * function name.
    * @return {string}
    */

		}, {
			key: 'getName',
			value: function getName() {
				return this.constructor.NAME || core.getFunctionName(this.constructor);
			}

			/**
    * Calls `getElementContent` and creating its surface if it hasn't been created yet.
    * @param {string=} opt_skipContents True if only the element's tag needs to be rendered.
    * @return {Object|string} The content to be rendered. If the content is a
    *   string, surfaces can be represented by placeholders in the format specified
    *   by Component.SURFACE_REGEX. Also, if the string content's main wrapper has
    *   the component's id, then it will be used to render the main element tag.
    * @protected
    */

		}, {
			key: 'getElementContent_',
			value: function getElementContent_(opt_skipContents) {
				this.addElementSurface_();
				return this.getRenderer().getSurfaceContent(this.getSurface(this.id), this, opt_skipContents);
			}

			/**
    * Calls `getElementContent` and replaces all placeholders in the returned content.
    * This is called when rendering sub components, so it also attaches listeners to
    * the original content.
    * @return {string} The content with all placeholders already replaced.
    */

		}, {
			key: 'getElementExtendedContent',
			value: function getElementExtendedContent() {
				var content = this.getElementContent_() || '';
				this.eventsCollector_.attachListeners(content, this.id);
				this.cacheSurfaceContent(this.id, content);
				return this.replaceSurfacePlaceholders_(content, this.id, this.getSurface(this.id));
			}

			/**
    * Gets surfaces that got modified by the specified attributes changes.
    * @param {Object.<string, Object>} changes Object containing the attribute
    *     name as key and an object with newVal and prevVal as value.
    * @return {Object.<string, boolean>} Object containing modified surface ids
    *     as key and true as value.
    */

		}, {
			key: 'getModifiedSurfacesFromChanges_',
			value: function getModifiedSurfacesFromChanges_(changes) {
				var surfaces = {};
				for (var attr in changes) {
					var surfaceNames = Object.keys(this.surfacesRenderAttrs_[attr] || {});
					for (var i = 0; i < surfaceNames.length; i++) {
						if (!surfaces[surfaceNames[i]]) {
							surfaces[surfaceNames[i]] = [];
						}
						surfaces[surfaceNames[i]].push(attr);
					}
				}
				return surfaces;
			}

			/**
    * Same as `getSurfaceHtml_`, but only called for non component surfaces.
    * @param {string} surfaceElementId
    * @param {string} content
    * @return {string}
    */

		}, {
			key: 'getNonComponentSurfaceHtml',
			value: function getNonComponentSurfaceHtml(surfaceElementId, content) {
				return this.wrapContentIfNecessary(content, surfaceElementId, this.constructor.SURFACE_TAG_NAME_MERGED);
			}

			/**
    * Gets the `ComponentRenderer` object for this component.
    * @return {!ComponentRenderer}
    */

		}, {
			key: 'getRenderer',
			value: function getRenderer() {
				return this.constructor.RENDERER_MERGED;
			}

			/**
    * Gets surface configuration object. If surface is not registered returns
    * null.
    * @param {string} surfaceId The surface id or its element id.
    * @return {Object} The surface configuration object.
    */

		}, {
			key: 'getSurface',
			value: function getSurface(surfaceId) {
				var surface = this.getSurfaceFromElementId(this.getSurfaceElementId(surfaceId));
				return surface ? surface : this.getSurfaceFromElementId(surfaceId);
			}

			/**
    * Gets the content for the requested surface. Calls `getSurfaceContent` for non
    * component surfaces, handling component surfaces automatically.
    * @param {string} surfaceElementId The surface element id.
    * @return {string} The content to be rendered.
    * @protected
    */

		}, {
			key: 'getSurfaceContent_',
			value: function getSurfaceContent_(surfaceElementId) {
				var surface = this.getSurfaceFromElementId(surfaceElementId);
				if (surface.componentName && surfaceElementId !== this.id) {
					var component = ComponentCollector.components[surfaceElementId];
					if (component.wasRendered) {
						return '';
					} else {
						return component.getElementExtendedContent();
					}
				} else {
					return this.getRenderer().getSurfaceContent(surface, this) || '';
				}
			}

			/**
    * Queries from the document or creates an element for the surface. Surface
    * elements have its surface id namespaced to the component id, e.g. for a
    * component with id `gallery` and a surface with id `pictures` the surface
    * element will be represented by the id `gallery-pictures`. Surface
    * elements must also be appended to the component element.
    * @param {string} surfaceId The surface id.
    * @param {Object=} opt_surface The surface's config. If not given, it will
    *   be fetched.
    * @return {Element} The surface element or null if surface not registered.
    */

		}, {
			key: 'getSurfaceElement',
			value: function getSurfaceElement(surfaceId, opt_surface) {
				var surface = opt_surface || this.getSurface(surfaceId);
				if (!surface) {
					return null;
				}
				if (!surface.element) {
					if (surface.componentName) {
						var component = ComponentCollector.components[surfaceId];
						if (component) {
							surface.element = component.element;
						}
					} else {
						var surfaceElementId = this.getSurfaceElementId(surfaceId, surface);
						surface.element = this.findElementById_(surfaceElementId) || this.createSurfaceElement_(surfaceElementId);
					}
				}
				return surface.element;
			}

			/**
    * Adds the component id as the prefix of the given surface id if necessary.
    * @param {string} surfaceId
    * @param {Object=} opt_surface The surface data.
    * @return {string}
    */

		}, {
			key: 'getSurfaceElementId',
			value: function getSurfaceElementId(surfaceId, opt_surface) {
				var surface = opt_surface || {};
				if (surface.surfaceElementId) {
					return surface.surfaceElementId;
				} else if (surface.componentName || this.hasComponentPrefix_(surfaceId)) {
					return surfaceId;
				} else {
					return this.prefixSurfaceId(surfaceId);
				}
			}

			/**
    * Gets surface configuration object. This is similar to `getSurface`, but
    * receives the surface's element id, while `getSurface` can also receive
    * a local surface id.
    * @param {string} surfaceElementId The surface's element id
    * @return {Object} The surface configuration object.
    */

		}, {
			key: 'getSurfaceFromElementId',
			value: function getSurfaceFromElementId(surfaceElementId) {
				return Component.surfacesCollector.getSurface(surfaceElementId);
			}

			/**
    * Gets the html that should be used to build a surface's main element with its
    * content.
    * @param {!Object} surface
    * @param {string} content
    * @return {string}
    * @protected
    */

		}, {
			key: 'getSurfaceHtml_',
			value: function getSurfaceHtml_(surface, content) {
				var surfaceElementId = surface.surfaceElementId;
				if (surface.componentName) {
					return ComponentCollector.components[surfaceElementId].getComponentHtml(content);
				} else {
					return this.getNonComponentSurfaceHtml(surfaceElementId, content);
				}
			}

			/**
    * Gets the surface id for the given surface.
    * @param {!Object} surface
    * @return {string}
    */

		}, {
			key: 'getSurfaceId',
			value: function getSurfaceId(surface) {
				if (surface.componentName || !this.hasComponentPrefix_(surface.surfaceElementId)) {
					return surface.surfaceElementId;
				} else {
					return surface.surfaceElementId.substr(this.id.length + 1);
				}
			}

			/**
    * A map of surface ids to the respective surface object.
    * @return {!Object}
    */

		}, {
			key: 'getSurfaces',
			value: function getSurfaces() {
				var surfaces = {};
				Object.keys(this.surfaceIds_).forEach((function (surfaceElementId) {
					var surface = this.getSurfaceFromElementId(surfaceElementId);
					surfaces[this.getSurfaceId(surface)] = surface;
				}).bind(this));
				return surfaces;
			}

			/**
    * Handles attributes batch changes. Responsible for surface mutations and
    * attributes synchronization.
    * @param {Event} event
    * @protected
    */

		}, {
			key: 'handleAttributesChanges_',
			value: function handleAttributesChanges_(event) {
				if (this.inDocument) {
					this.renderSurfacesContent_(this.getModifiedSurfacesFromChanges_(event.changes));
				}
				this.syncAttrsFromChanges_(event.changes);
				this.emit('attrsSynced', event);
			}

			/**
    * Checks if the given surface id has this component's prefix.
    * @param {string} surfaceId
    * @return {boolean}
    * @protected
    */

		}, {
			key: 'hasComponentPrefix_',
			value: function hasComponentPrefix_(surfaceId) {
				return surfaceId.substr(0, this.id.length) === this.id && (surfaceId.length === this.id.length || surfaceId[this.id.length] === '-');
			}

			/**
    * Fired when the `events` attribute value is changed.
    * @param {!Object} event
    * @protected
    */

		}, {
			key: 'onEventsChanged_',
			value: function onEventsChanged_(event) {
				this.eventsAttrHandler_.removeAllListeners();
				this.addListenersFromObj_(event.newVal);
			}

			/**
    * Makes an unique id for the component.
    * @return {string} Unique id.
    * @protected
    */

		}, {
			key: 'makeId_',
			value: function makeId_() {
				return 'metal_c_' + core.getUid(this);
			}

			/**
    * Merges an array of values for the ELEMENT_CLASSES property into a single object.
    * @param {!Array.<string>} values The values to be merged.
    * @return {!string} The merged value.
    * @protected
    */

		}, {
			key: 'mergeElementClasses_',
			value: function mergeElementClasses_(values) {
				var marked = {};
				return values.filter(function (val) {
					if (!val || marked[val]) {
						return false;
					} else {
						marked[val] = true;
						return true;
					}
				}).join(' ');
			}

			/**
    * Merges an array of objects into a single object. Used by the SURFACES static
    * variable.
    * @param {!Array} values The values to be merged.
    * @return {!Object} The merged value.
    * @protected
    */

		}, {
			key: 'mergeObjects_',
			value: function mergeObjects_(values) {
				return object.mixin.apply(null, [{}].concat(values.reverse()));
			}

			/**
    * Prefixes the given surface id with this component's id.
    * @param {string} surfaceId
    * @return {string}
    */

		}, {
			key: 'prefixSurfaceId',
			value: function prefixSurfaceId(surfaceId) {
				return this.id + '-' + surfaceId;
			}

			/**
    * Unregisters a surface and removes its element from the DOM.
    * @param {string} surfaceId The surface id.
    * @chainable
    */

		}, {
			key: 'removeSurface',
			value: function removeSurface(surfaceId) {
				var el = this.getSurfaceElement(surfaceId);
				if (el && el.parentNode) {
					el.parentNode.removeChild(el);
				}
				var surfaceElementId = this.getSurfaceElementId(surfaceId, this.getSurface(surfaceId));
				Component.surfacesCollector.removeSurface(surfaceElementId);
				this.surfaceIds_[surfaceElementId] = false;
				return this;
			}

			/**
    * Removes all surfaces that were removed during the repaint of their parents,
    * and weren't added back again. Component surfaces will be disposed.
    * @protected
    */

		}, {
			key: 'removeUnusedSurfaces_',
			value: function removeUnusedSurfaces_() {
				var compIds = [];
				for (var i = 0; i < this.removedSurfaces_.length; i++) {
					var surface = this.removedSurfaces_[i];
					if (!surface.parent) {
						this.removeSurface(surface.surfaceElementId);
						if (surface.componentName) {
							compIds.push(surface.surfaceElementId);
						}
					}
				}
				this.disposeSubComponents_(compIds);
			}

			/**
    * Lifecycle. Renders the component into the DOM. Render phase replaces
    * decorate phase, without progressive enhancement support.
    *
    * Render Lifecycle:
    *   render - Decorate is manually called.
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

		}, {
			key: 'render',
			value: function render(opt_parentElement, opt_siblingElement) {
				if (this.wasRendered) {
					throw new Error(Component.Error.ALREADY_RENDERED);
				}

				this.addElementSurface_();
				this.renderContent_();
				this.syncAttrs_();
				this.emit('render');
				this.attach(opt_parentElement, opt_siblingElement);
				this.wasRendered = true;
				return this;
			}

			/**
    * Renders this component as a subcomponent, meaning that no actual rendering is
    * needed since it was already rendered by the parent component. This just handles
    * other logics from the rendering lifecycle, like attaching event listeners.
    * @param {string=} opt_content The content that has already been rendered for this
    *   component
    */

		}, {
			key: 'renderAsSubComponent',
			value: function renderAsSubComponent(opt_content) {
				this.addElementSurface_();
				if (opt_content && dom.isEmpty(this.element)) {
					// If we have the rendered content for this component, but it hasn't
					// been rendered in its element yet, we render it manually here. That
					// can happen if the subcomponent's element is set before the parent
					// element renders its content, making originally rendered content be
					// set on the wrong place.
					this.replaceElementContent_(opt_content);
				}
				this.syncAttrs_();
				this.attach();
				this.wasRendered = true;
			}

			/**
    * Renders a surface that holds a component.
    * @param {string} surfaceElementId
    * @param {string=} opt_content The content to be rendered.
    * @protected
    */

		}, {
			key: 'renderComponentSurface_',
			value: function renderComponentSurface_(surfaceElementId, opt_content) {
				var component = ComponentCollector.components[surfaceElementId];
				if (component.wasRendered) {
					var surface = this.getSurfaceFromElementId(surfaceElementId);
					Component.componentsCollector.updateComponent(surfaceElementId, surface.componentData);
				} else if (this.decorating_) {
					component.decorateAsSubComponent(opt_content);
				} else {
					component.renderAsSubComponent(opt_content);
				}
			}

			/**
    * Renders this component's whole content. When decorating this will avoid
    * replacing the existing content if it's already correct.
    * @protected
    */

		}, {
			key: 'renderContent_',
			value: function renderContent_() {
				var id = this.id;
				if (this.decorating_) {
					var extendedContent = this.getElementExtendedContent();
					var extendedCacheState = this.computeSurfaceCacheState_(extendedContent);
					var htmlCacheState = this.computeSurfaceCacheState_(html.compress(this.element.outerHTML));
					if (!this.compareCacheStates_(htmlCacheState, extendedCacheState)) {
						this.replaceElementContent_(extendedContent);
					}
				} else {
					this.emitRenderSurfaceEvent_(id);
				}
			}

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

		}, {
			key: 'renderElement_',
			value: function renderElement_(opt_parentElement, opt_siblingElement) {
				var element = this.element;
				element.id = this.id;
				if (opt_siblingElement || !element.parentNode) {
					var parent = dom.toElement(opt_parentElement) || this.DEFAULT_ELEMENT_PARENT;
					parent.insertBefore(element, dom.toElement(opt_siblingElement));
				}
			}

			/**
    * Renders the contents of all the surface placeholders found in the given content.
    * @param {string} content
    * @param {string} surfaceElementId The id of surface element the content is from.
    * @protected
    */

		}, {
			key: 'renderPlaceholderSurfaceContents_',
			value: function renderPlaceholderSurfaceContents_(content, surfaceElementId) {
				var instance = this;
				content.replace(Component.SURFACE_REGEX, function (match, id) {
					var surface = instance.createPlaceholderSurface_(surfaceElementId, id);
					instance.emitRenderSurfaceEvent_(surface.surfaceElementId);
					return match;
				});
			}

			/**
    * Renders all surfaces contents ignoring the cache.
    * @param {Object.<string, Array=>} surfaces Object map where the key is
    *     the surface id and value the optional attributes list that caused
    *     the rerender.
    * @protected
    */

		}, {
			key: 'renderSurfacesContent_',
			value: function renderSurfacesContent_(surfaces) {
				this.generatedIdCount_ = {};
				this.removedSurfaces_ = [];

				var surfaceElementIds = Object.keys(surfaces);
				var idIndex = surfaceElementIds.indexOf(this.id);
				if (idIndex !== -1) {
					// Always render the main content surface first, for performance reasons.
					surfaceElementIds.splice(idIndex, 1);
					surfaceElementIds = [this.id].concat(surfaceElementIds);
				}

				for (var i = 0; i < surfaceElementIds.length; i++) {
					if (!this.getSurfaceFromElementId(surfaceElementIds[i]).handled) {
						this.emitRenderSurfaceEvent_(surfaceElementIds[i], null, null, surfaces[surfaceElementIds[i]]);
					}
				}
				this.updatePlaceholderSurfaces_();
				this.eventsCollector_.detachUnusedListeners();
				this.removeUnusedSurfaces_();
			}

			/**
    * Replaces the content of this component's element with the given one.
    * @param {string} content The content to be rendered.
    * @protected
    */

		}, {
			key: 'replaceElementContent_',
			value: function replaceElementContent_(content) {
				var element = this.element;
				var newContent = this.buildFragment_(content);
				var newElement = this.findElementInContent_(this.id, newContent);
				if (newElement) {
					this.updateElementAttributes_(element, newElement);
					newContent = newElement.childNodes;
				}
				dom.removeChildren(element);
				dom.append(element, newContent);
			}

			/**
    * Replaces the content of a surface with a new one.
    * @param {string} surfaceElementId The surface id.
    * @param {!Object} surface The surface object.
    * @param {string} content The content to be rendered.
    * @protected
    */

		}, {
			key: 'replaceSurfaceContent_',
			value: function replaceSurfaceContent_(surfaceElementId, surface, content) {
				content = this.replaceSurfacePlaceholders_(content, surfaceElementId, surface);
				if (surfaceElementId === this.id) {
					this.replaceElementContent_(content);
					return;
				}

				var el = this.getSurfaceElement(surfaceElementId);
				var frag = this.buildFragment_(content);
				var element = this.findElementInContent_(surfaceElementId, frag);
				if (element) {
					surface.element = element;
					dom.replace(el, surface.element);
				} else {
					dom.removeChildren(el);
					dom.append(el, frag);
				}
			}

			/**
    * Replaces the given content's surface placeholders with their real contents.
    * @param {string} content
    * @param {string} surfaceElementId The id of the surface element that contains
    *   the given content, or undefined if the content is from the main element.
    * @param {!Object} surface The surface object.
    * @return {string} The final string with replaced placeholders.
    * @protected
    */

		}, {
			key: 'replaceSurfacePlaceholders_',
			value: function replaceSurfacePlaceholders_(content, surfaceElementId, surface) {
				if (!surface.componentName || surfaceElementId === this.id) {
					this.addToRemovedSurfaces_(surface.children || []);
					surface.children = [];
				}

				var instance = this;
				return content.replace(Component.SURFACE_REGEX, function (match, id) {
					// Surfaces should already have been created before being rendered so they can be
					// accessed from their getSurfaceContent calls.
					var placeholderSurface = instance.createPlaceholderSurface_(surfaceElementId, id);
					id = placeholderSurface.surfaceElementId;
					placeholderSurface.handled = true;
					placeholderSurface.parent = surfaceElementId;
					surface.children.push(id);

					var surfaceContent = instance.getSurfaceContent_(id);
					var surfaceHtml = instance.getSurfaceHtml_(placeholderSurface, surfaceContent);
					var expandedHtml = instance.replaceSurfacePlaceholders_(surfaceHtml, id, placeholderSurface);
					instance.collectedSurfaces_.push({
						cacheContent: surfaceContent,
						content: expandedHtml,
						surface: placeholderSurface
					});

					return expandedHtml;
				});
			}

			/**
    * Setter logic for element attribute.
    * @param {string|Element} val
    * @return {Element}
    * @protected
    */

		}, {
			key: 'setterElementFn_',
			value: function setterElementFn_(val) {
				var element = dom.toElement(val);
				if (!element) {
					element = this.valueElementFn_();
				}
				return element;
			}

			/**
    * Attribute synchronization logic for the `elementClasses` attribute.
    * @param {string} newVal
    * @param {string} prevVal
    */

		}, {
			key: 'syncElementClasses',
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

			/**
    * Attribute synchronization logic for `visible` attribute.
    * Updates the element's display value according to its visibility.
    * @param {boolean} newVal
    */

		}, {
			key: 'syncVisible',
			value: function syncVisible(newVal) {
				this.element.style.display = newVal ? '' : 'none';
			}

			/**
    * Sets the attributes from the second element to the first element.
    * @param {!Element} element
    * @param {!Element} newElement
    * @protected
    */

		}, {
			key: 'updateElementAttributes_',
			value: function updateElementAttributes_(element, newElement) {
				var attrs = newElement.attributes;
				for (var i = 0; i < attrs.length; i++) {
					// The "id" and "class" html attributes are already synced via the "id"
					// and "elementClasses" component attributes, respectively.
					if (attrs[i].name !== 'id' && attrs[i].name !== 'class') {
						element.setAttribute(attrs[i].name, attrs[i].value);
					}
				}

				if (element.tagName !== newElement.tagName) {
					console.error('The component named "' + this.getName() + '" tried to change the component ' + 'element\'s tag name, which is not allowed. Make sure to always return the same tag ' + 'name for the component element on the renderer\'s getSurfaceContent. This may also ' + 'have been caused by passing an element to this component with a different tag name ' + 'from the one it uses.');
				}
			}

			/**
    * Updates a surface after it has been rendered through placeholders.
    * @param {!{content: string, cacheContent: string, surfaceElementId: string}} collectedData
    *   Data about the collected surface. Should have the surface's id, content and the
    *   content that should be cached for it.
    * @protected
    */

		}, {
			key: 'updatePlaceholderSurface_',
			value: function updatePlaceholderSurface_(collectedData) {
				var surface = collectedData.surface;
				var surfaceElementId = surface.surfaceElementId;
				if (surface.componentName) {
					// Elements of component surfaces are unchangeable, so we need to replace the
					// rendered element with the component's.
					dom.replace(this.findElementById_(surfaceElementId), this.getSurfaceElement(surfaceElementId, surface));

					// Component surfaces need to be handled in case some internal details have changed.
					this.emitRenderSurfaceEvent_(surfaceElementId, collectedData.content, collectedData.cacheContent);
				} else {
					// This surface's element has either changed or never been created yet. Let's just
					// reset it to null, so it can be fetched from the dom again when necessary. Also,
					// since there's no need to do cache checks or rerender, let's just attach its
					// listeners and cache its content manually.
					surface.element = null;
					this.cacheSurfaceContent(surfaceElementId, collectedData.cacheContent);
					this.eventsCollector_.attachListeners(collectedData.cacheContent, surfaceElementId);
				}
			}

			/**
    * Updates all collected surfaces.
    * @protected
    */

		}, {
			key: 'updatePlaceholderSurfaces_',
			value: function updatePlaceholderSurfaces_() {
				for (var i = this.collectedSurfaces_.length - 1; i >= 0; i--) {
					this.updatePlaceholderSurface_(this.collectedSurfaces_[i]);
					this.collectedSurfaces_[i].surface.handled = false;
				}
				this.collectedSurfaces_ = [];
			}

			/**
    * Validator logic for element attribute.
    * @param {string|Element} val
    * @return {boolean} True if val is a valid element.
    * @protected
    */

		}, {
			key: 'validatorElementFn_',
			value: function validatorElementFn_(val) {
				return core.isElement(val) || core.isString(val);
			}

			/**
    * Validator logic for elementClasses attribute.
    * @param {string} val
    * @return {boolean} True if val is a valid element classes.
    * @protected
    */

		}, {
			key: 'validatorElementClassesFn_',
			value: function validatorElementClassesFn_(val) {
				return core.isString(val);
			}

			/**
    * Validator logic for the `events` attribute.
    * @param {Object} val
    * @return {boolean}
    * @protected
    */

		}, {
			key: 'validatorEventsFn_',
			value: function validatorEventsFn_(val) {
				return !core.isDefAndNotNull(val) || core.isObject(val);
			}

			/**
    * Validator logic for the `id` attribute.
    * @param {string} val
    * @return {boolean} True if val is a valid id.
    * @protected
    */

		}, {
			key: 'validatorIdFn_',
			value: function validatorIdFn_(val) {
				return core.isString(val);
			}

			/**
    * Provides the default value for element attribute.
    * @return {!Element} The element.
    * @protected
    */

		}, {
			key: 'valueElementFn_',
			value: function valueElementFn_() {
				if (!this.id) {
					// This may happen because the default value of "id" depends on "element",
					// and the default value of "element" depends on "id".
					this.id = this.makeId_();
				}
				var element = this.findElementInContent_(this.id, this.getElementContent_(true) || '');
				if (!element) {
					element = this.findElementInContent_(this.id, this.getComponentHtml(''));
				}
				dom.removeChildren(element);
				dom.exitDocument(element);
				return element;
			}

			/**
    * Provides the default value for id attribute.
    * @return {string} The id.
    * @protected
    */

		}, {
			key: 'valueIdFn_',
			value: function valueIdFn_() {
				var element = this.element;
				return element && element.id ? element.id : this.makeId_();
			}

			/**
    * Wraps the content with the given tag, unless the content already has an element with the
    * correct id.
    * @param {string} content
    * @param {string} id
    * @param {string} tag
    * @return {string}
    * @protected
    */

		}, {
			key: 'wrapContentIfNecessary',
			value: function wrapContentIfNecessary(content, id, tag) {
				if (!this.checkHasElementTag_(content, id)) {
					content = '<' + tag + ' id="' + id + '">' + content + '</' + tag + '>';
				}
				return content;
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
  * Helper responsible for temporarily holding surface data.
  * @type {!SurfaceCollector}
  * @protected
  * @static
  */
	Component.surfacesCollector = new SurfaceCollector();

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
   * @type {Object<string, (function()|string|{selector: string, fn: function()|string})>}
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
  * The `ComponentRenderer` that should be used. Components need to set this
  * to a subclass of `ComponentRenderer` that has the rendering logic, like
  * `SoyRenderer`.
  * @type {!ComponentRenderer}
  * @static
  */
	Component.RENDERER = ComponentRenderer;

	/**
  * The regex used to search for surface placeholders.
  * @type {RegExp}
  * @static
  */
	Component.SURFACE_REGEX = /\%\%\%\%~s(?:-([^~:]+))?~\%\%\%\%/g;

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
  * A list with attribute names that will automatically be rejected as invalid.
  * @type {!Array<string>}
  */
	Component.INVALID_ATTRS = ['components', 'elementContent'];

	this.steel.Component = Component;
}).call(this);
'use strict';

(function () {
	var templates = {};

	/**
  * Stores soy templates from components that use `SoyRenderer`. Soy files
  * compiled with gulp-metal automatically add their templates here when
  * imported.
  */

	var SoyTemplates = (function () {
		function SoyTemplates() {
			babelHelpers.classCallCheck(this, SoyTemplates);
		}

		babelHelpers.createClass(SoyTemplates, null, [{
			key: 'get',

			/**
    * Gets the requested templates.
    * @param {string=} opt_componentName The name of the component to get
    *   templates from. If not given, all templates will be returned.
    * @param {string=} opt_templateName The name of the template. If not given
    *   all templates for the specified component will be returned.
    * @return {!Object|function()} Either an object with multiple templates or
    *   a single template function.
    */
			value: function get(opt_componentName, opt_templateName) {
				if (!opt_componentName) {
					return templates;
				} else if (!opt_templateName) {
					return templates[opt_componentName] || {};
				} else {
					return SoyTemplates.get(opt_componentName)[opt_templateName];
				}
			}

			/**
    * Sets the templates for the component with the specified name.
    * @param {string} componentName
    * @param {!Object<string, !function()>} componentTemplates
    */

		}, {
			key: 'set',
			value: function set(componentName, componentTemplates) {
				templates[componentName] = componentTemplates;
			}
		}]);
		return SoyTemplates;
	})();

	this.steel.SoyTemplates = SoyTemplates;
}).call(this);
'use strict';

(function () {
	var SoyTemplates = this.steel.SoyTemplates;

	var SoyAop = {
		/**
   * The function that should be called instead of a template call. If null, the original function
   * will be called instead.
   * @type {function()}
   * @protected
   */
		interceptFn_: null,

		/**
   * Gets the original function of the given template function. If no original exists,
   * returns the given function itself.
   * @param {!function()} fn
   * @return {!function()}
   */
		getOriginalFn: function getOriginalFn(fn) {
			return fn.originalFn ? fn.originalFn : fn;
		},

		/**
   * Handles a template call, calling the current interception function if one is set, or otherwise
   * just calling the original function instead.
   * @param {string} compName The name of the component this template function belongs to.
   * @param {string} templateName The name of the template this call was made for.
   * @param {!function()} originalFn The original template function that was intercepted.
   * @param {Object} opt_data Template data object.
   * @param {*} opt_ignored
   * @param {Object} opt_ijData Template injected data object.
   * @return {*} The return value of the function that is called to handle this interception.
   */
		handleTemplateCall_: function handleTemplateCall_(compName, templateName, originalFn, opt_data, opt_ignored, opt_ijData) {
			if (SoyAop.interceptFn_) {
				return SoyAop.interceptFn_.call(null, compName, templateName, originalFn, opt_data, opt_ignored, opt_ijData);
			} else {
				return originalFn.call(null, opt_data, opt_ignored, opt_ijData);
			}
		},

		/**
   * Registers the templates for the requested component so they can be intercepted.
   * @param {string} compName
   */
		registerTemplates: function registerTemplates(compName) {
			var compTemplates = SoyTemplates.get(compName);
			Object.keys(compTemplates).forEach(function (templateName) {
				var originalFn = compTemplates[templateName];
				if (!originalFn.originalFn) {
					compTemplates[templateName] = SoyAop.handleTemplateCall_.bind(null, compName, templateName, originalFn);
					compTemplates[templateName].originalFn = originalFn;
				}
			});
		},

		/**
   * Starts intercepting all template calls, replacing them with a call
   * to the given function instead.
   * @param {!function()} fn
   */
		startInterception: function startInterception(fn) {
			SoyAop.interceptFn_ = fn;
		},

		/**
   * Stops intercepting template calls.
   */
		stopInterception: function stopInterception() {
			SoyAop.interceptFn_ = null;
		}
	};

	this.steel.SoyAop = SoyAop;
}).call(this);
'use strict';

(function () {
	var core = this.steel.core;
	var dom = this.steel.dom;
	var object = this.steel.object;
	var Component = this.steel.Component;
	var ComponentRegistry = this.steel.ComponentRegistry;
	var ComponentRenderer = this.steel.ComponentRenderer;
	var SoyAop = this.steel.SoyAop;
	var SoyTemplates = this.steel.SoyTemplates;

	// The injected data that will be passed to soy templates.

	var ijData = {};

	/**
  * A `ComponentRenderer` that enables components to be rendered via soy templates. It
  * automatically creates surfaces named after each template and uses template params
  * as render attributes. That means that when an attribute value changes, the templates
  * that have a parameter with the same name will be automatically rendered again.
  * @extends {ComponentRenderer}
  */

	var SoyRenderer = (function (_ComponentRenderer) {
		babelHelpers.inherits(SoyRenderer, _ComponentRenderer);

		function SoyRenderer() {
			babelHelpers.classCallCheck(this, SoyRenderer);
			return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(SoyRenderer).apply(this, arguments));
		}

		babelHelpers.createClass(SoyRenderer, null, [{
			key: 'addSurfacesFromTemplates_',

			/**
    * Adds surfaces from the soy templates.
    * @param {!Component} component
    * @protected
    */
			value: function addSurfacesFromTemplates_(component) {
				var name = component.getName();
				var templates = SoyTemplates.get(name);
				var templateNames = Object.keys(templates);
				for (var i = 0; i < templateNames.length; i++) {
					var templateName = templateNames[i];
					var templateFn = SoyAop.getOriginalFn(templates[templateName]);
					if (SoyRenderer.isSurfaceTemplate_(templateName, templateFn)) {
						var surfaceId = templateName === 'content' ? component.id : templateName;
						component.addSurface(surfaceId, {
							renderAttrs: templateFn.params,
							templateComponentName: name,
							templateName: templateName
						});
					}
				}
			}

			/**
    * Builds the config data for a component from the data that was passed to its
    * soy template function.
    * @param {string} id The id of the component.
    * @param {!Object} templateData
    * @return {!Object} The component's config data.
    * @protected
    */

		}, {
			key: 'buildComponentConfigData_',
			value: function buildComponentConfigData_(id, templateData) {
				var config = {
					id: id
				};
				for (var key in templateData) {
					config[key] = templateData[key];
				}
				return config;
			}

			/**
    * Builds the data object that should be passed to a template from the given component.
    * @param {!Component} component
    * @return {!Object}
    * @protected
    */

		}, {
			key: 'buildTemplateData_',
			value: function buildTemplateData_(component) {
				var names = component.getAttrNames().filter(function (name) {
					// Get all attribute values except for "element", since it helps performance and this
					// attribute shouldn't be referenced inside a soy template anyway.
					return name !== 'element';
				});
				var surface = component.getSurface(component.id);
				var data = surface && surface.componentData ? surface.componentData : {};
				return object.mixin(data, component.getAttrs(names));
			}

			/**
    * Creates and instantiates a component that has the given soy template function as its
    * main content template. All keys present in the config object, if one is given, will be
    * attributes of this component, and the object itself will be passed to the constructor.
    * @param {!function()} templateFn
    * @param {(Element|string)=} opt_element The element that should be decorated. If none is given,
    *   one will be created and appended to the document body.
    * @param {Object=} opt_data Data to be passed to the soy template when it's called.
    * @return {!Component}
    */

		}, {
			key: 'createComponentFromTemplate',
			value: function createComponentFromTemplate(templateFn, opt_element, opt_data) {
				var element = opt_element ? dom.toElement(opt_element) : null;
				var data = object.mixin({
					id: element ? element.id : null
				}, opt_data, {
					element: element
				});

				var name = 'TemplateComponent' + core.getUid();

				var TemplateComponent = (function (_Component) {
					babelHelpers.inherits(TemplateComponent, _Component);

					function TemplateComponent() {
						babelHelpers.classCallCheck(this, TemplateComponent);
						return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(TemplateComponent).apply(this, arguments));
					}

					return TemplateComponent;
				})(Component);

				TemplateComponent.RENDERER = SoyRenderer;
				ComponentRegistry.register(TemplateComponent, name);
				SoyTemplates.set(name, {
					content: function content(opt_attrs, opt_ignored, opt_ijData) {
						return SoyAop.getOriginalFn(templateFn)(data, opt_ignored, opt_ijData);
					}
				});
				SoyAop.registerTemplates(name);
				return new TemplateComponent(data);
			}

			/**
    * Decorates html rendered by the given soy template function, instantiating any referenced
    * components in it.
    * @param {!function()} templateFn
    * @param {(Element|string)=} opt_element The element that should be decorated. If none is given,
    *   one will be created and appended to the document body.
    * @param {Object=} opt_data Data to be passed to the soy template when it's called.
    * @return {!Component} The component that was created for this action. Contains
    *   references to components that were rendered by the given template function.
    * @static
    */

		}, {
			key: 'decorateFromTemplate',
			value: function decorateFromTemplate(templateFn, opt_element, opt_data) {
				return SoyRenderer.createComponentFromTemplate(templateFn, opt_element, opt_data).decorate();
			}

			/**
    * Generates the id for a surface that was found by a soy template call.
    * @param {!Component} component
    * @param {string} parentSurfaceId The id of the parent surface, or undefined
    *   if there is none.
    * @param {!Object} data The placeholder data registered for this surface.
    * @return {string} The generated id.
    * @override
    */

		}, {
			key: 'generateSurfaceElementId',
			value: function generateSurfaceElementId(component, parentSurfaceId, data) {
				if (data.templateName && parentSurfaceId === component.id && !SoyRenderer.firstSurfaceFound_[data.templateName]) {
					SoyRenderer.firstSurfaceFound_[data.templateName] = true;
					return component.prefixSurfaceId(data.templateName);
				} else {
					return component.generateSurfaceElementId(parentSurfaceId);
				}
			}

			/**
    * Renders the appropriate soy template for the specified surface.
    * @param {!Object} surface The surface configuration.
    * @param {!Component} component The component instance.
    * @param {string=} opt_skipContents True if only the element's tag needs to be rendered.
    * @return {string}
    * @override
    */

		}, {
			key: 'getSurfaceContent',
			value: function getSurfaceContent(surface, component, opt_skipContents) {
				if (surface.surfaceElementId === component.id) {
					if (!surface.renderAttrs) {
						this.addSurfacesFromTemplates_(component);
					}
					SoyRenderer.firstSurfaceFound_ = {};
				}

				SoyRenderer.surfaceBeingRendered_ = surface.surfaceElementId;
				SoyRenderer.skipInnerCalls_ = SoyRenderer.skipInnerCalls_ || opt_skipContents;

				var data = surface.templateData;
				surface.templateData = null;
				var content = SoyRenderer.renderTemplateByName_(component, surface.templateComponentName, surface.templateName, data);

				SoyRenderer.surfaceBeingRendered_ = null;
				SoyRenderer.skipInnerCalls_ = false;
				return content;
			}

			/**
    * Handles a call to the SoyRenderer component template.
    * @param {!Component} component The component that the call was made for.
    * @param {string} componentName The component's name.
    * @param {Object} data The data the template was called with.
    * @return {string} A placeholder to be rendered instead of the content the template
    *   function would have returned.
    * @protected
    */

		}, {
			key: 'handleComponentCall_',
			value: function handleComponentCall_(component, componentName, data) {
				var surfaceData = {
					componentName: componentName
				};
				var id = (data || {}).id;
				if (!id) {
					id = SoyRenderer.generateSurfaceElementId(component, SoyRenderer.surfaceBeingRendered_, surfaceData);
				}
				surfaceData.componentData = SoyRenderer.buildComponentConfigData_(id, data);
				return component.buildPlaceholder(id, surfaceData);
			}

			/**
    * Handles a call to a soy template.
    * @param {!Component} component The component that the call was made for.
    * @param {string} templateComponentName The name of the component that this template was belongs to.
    * @param {string} templateName The name of this template.
    * @param {!function()} originalFn The original template function that was intercepted.
    * @param {!Object} data The data the template was called with.
    * @param {*} opt_ignored
    * @param {Object} opt_ijData Template injected data object.
    * @return {string}
    * @protected
    */

		}, {
			key: 'handleInterceptedCall_',
			value: function handleInterceptedCall_(component, templateComponentName, templateName, originalFn, data, opt_ignored, opt_ijData) {
				if (SoyRenderer.skipInnerCalls_) {
					return '';
				} else if (templateName === 'content') {
					return this.handleComponentCall_.call(this, component, templateComponentName, data);
				} else {
					return this.handleSurfaceCall_.call(this, component, templateComponentName, templateName, originalFn, data, opt_ignored, opt_ijData);
				}
			}

			/**
    * Handles a call to the SoyRenderer surface template.
    * @param {!Component} component
    * @param {string} templateComponentName The name of the component that this template was belongs to.
    * @param {string} templateName The name of this template.
    * @param {!function()} originalFn The original template function that was intercepted.
    * @param {!Object} data The data the template was called with.
    * @param {*} opt_ignored
    * @param {Object} opt_ijData Template injected data object.
    * @return {string} A placeholder to be rendered instead of the content the template
    *   function would have returned.
    * @protected
    */

		}, {
			key: 'handleSurfaceCall_',
			value: function handleSurfaceCall_(component, templateComponentName, templateName, originalFn, data, opt_ignored, opt_ijData) {
				var surfaceData = {
					static: originalFn.static,
					templateComponentName: templateComponentName,
					templateData: data,
					templateName: templateName
				};
				var surfaceElementId;
				if (core.isDefAndNotNull(data.surfaceElementId)) {
					surfaceElementId = data.surfaceElementId;
				} else if (core.isDefAndNotNull(data.surfaceId)) {
					surfaceElementId = component.getSurfaceElementId(data.surfaceId.toString());
				} else {
					if (originalFn.private) {
						return originalFn.call(null, data, opt_ignored, opt_ijData);
					}
					surfaceElementId = SoyRenderer.generateSurfaceElementId(component, SoyRenderer.surfaceBeingRendered_, surfaceData);
				}
				return component.buildPlaceholder(surfaceElementId, surfaceData);
			}

			/**
    * Checks if a template is a surface template.
    * @param {string} templateName
    * @param {!function()} templateFn
    * @return {boolean}
    * @protected
    */

		}, {
			key: 'isSurfaceTemplate_',
			value: function isSurfaceTemplate_(templateName, templateFn) {
				return templateName.substr(0, 13) !== '__deltemplate' && !templateFn.private;
			}

			/**
    * Renders the given soy template function, instantiating any referenced components in it.
    * @param {!function()} templateFn
    * @param {(Element|string)=} opt_element The element that should be decorated. If none is given,
    *   one will be created and appended to the document body.
    * @param {Object=} opt_data Data to be passed to the soy template when it's called.
    * @return {!Component} The component that was created for this action. Contains
    *   references to components that were rendered by the given template function.
    * @static
    */

		}, {
			key: 'renderFromTemplate',
			value: function renderFromTemplate(templateFn, opt_element, opt_data) {
				return SoyRenderer.createComponentFromTemplate(templateFn, opt_element, opt_data).render();
			}

			/**
    * Renders the specified template.
    * @param {!Component} component
    * @param {!function()} templateFn
    * @param {Object=} opt_data
    * @return {string} The template's result content.
    * @protected
    */

		}, {
			key: 'renderTemplate_',
			value: function renderTemplate_(component, templateFn, opt_data) {
				SoyAop.startInterception(SoyRenderer.handleInterceptedCall_.bind(SoyRenderer, component));
				templateFn = SoyAop.getOriginalFn(templateFn);
				var content = templateFn(opt_data || SoyRenderer.buildTemplateData_(component), null, ijData).content;
				SoyAop.stopInterception();
				return content;
			}

			/**
    * Renders the template with the specified name.
    * @param {!Component} component
    * @param {string} templateComponentName
    * @param {string} templateName
    * @param {Object=} opt_data
    * @return {string} The template's result content.
    * @protected
    */

		}, {
			key: 'renderTemplateByName_',
			value: function renderTemplateByName_(component, templateComponentName, templateName, opt_data) {
				var elementTemplate = SoyTemplates.get(templateComponentName, templateName);
				if (core.isFunction(elementTemplate)) {
					return SoyRenderer.renderTemplate_(component, elementTemplate, opt_data);
				}
			}

			/**
    * Sanitizes the given html string, so it can skip escaping when passed to a
    * soy template.
    * @param {string} html
    * @return {soydata.SanitizedHtml}
    */

		}, {
			key: 'sanitizeHtml',
			value: function sanitizeHtml(html) {
				return soydata.VERY_UNSAFE.ordainSanitizedHtml(html);
			}

			/**
    * Sets the injected data object that should be passed to templates.
    * @param {Object} data
    */

		}, {
			key: 'setInjectedData',
			value: function setInjectedData(data) {
				ijData = data || {};
			}
		}]);
		return SoyRenderer;
	})(ComponentRenderer);

	var originalSanitizedHtmlFromFn = soydata.SanitizedHtml.from;
	soydata.SanitizedHtml.from = function (value) {
		if (value && value.contentKind === 'HTML') {
			value = SoyRenderer.sanitizeHtml(value.content);
		}
		return originalSanitizedHtmlFromFn(value);
	};

	this.steel.SoyRenderer = SoyRenderer;
}).call(this);
'use strict';

(function () {
  /* jshint ignore:start */
  var Component = this.steel.Component;
  var ComponentRegistry = this.steel.ComponentRegistry;
  var SoyAop = this.steel.SoyAop;
  var SoyRenderer = this.steel.SoyRenderer;
  var SoyTemplates = this.steel.SoyTemplates;

  var Templates = SoyTemplates.get();
  // This file was automatically generated from Alert.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace Templates.Alert.
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
    return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="alert alert-dismissible component' + soy.$$escapeHtmlAttribute(opt_data.elementClasses ? ' ' + opt_data.elementClasses : '') + '" role="alert">' + Templates.Alert.dismiss(opt_data, null, opt_ijData) + Templates.Alert.body(opt_data, null, opt_ijData) + '</div>');
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
    return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-body">' + (opt_data.body ? soy.$$escapeHtml(opt_data.body) : '') + '</div>');
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
    return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-dismiss">' + (opt_data.dismissible ? '<button type="button" class="close" aria-label="Close" data-onclick="toggle"><span aria-hidden="true">×</span></button>' : '') + '</div>');
  };
  if (goog.DEBUG) {
    Templates.Alert.dismiss.soyTemplateName = 'Templates.Alert.dismiss';
  }

  Templates.Alert.content.params = ["id"];
  Templates.Alert.body.params = ["body", "id"];
  Templates.Alert.dismiss.params = ["dismissible", "id"];

  var Alert = (function (_Component) {
    babelHelpers.inherits(Alert, _Component);

    function Alert() {
      babelHelpers.classCallCheck(this, Alert);
      return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Alert).apply(this, arguments));
    }

    babelHelpers.createClass(Alert, null, [{
      key: 'setImpl',
      value: function setImpl(ctor) {
        ComponentRegistry.register(ctor, 'Alert');
      }
    }]);
    return Alert;
  })(Component);

  Alert.RENDERER = SoyRenderer;
  Alert.setImpl(Alert);
  SoyAop.registerTemplates('Alert');
  this.steel.Alert = Alert;
  /* jshint ignore:end */
}).call(this);
'use strict';

(function () {
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
				var target = event.delegateTarget;
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
'use strict';

(function () {
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
    * @param {!Element} element
    * @param {number=} opt_durationMs
    * @return {!Object} Object containing `abort` function.
    */
			value: function emulateEnd(element, opt_durationMs) {
				if (this.getComputedDurationMs(element, 'animation') > this.getComputedDurationMs(element, 'transition')) {
					return this.emulateEnd_(element, 'animation', opt_durationMs);
				} else {
					return this.emulateEnd_(element, 'transition', opt_durationMs);
				}
			}

			/**
    * Emulates animation end event. If `opt_durationMs` not specified the value
    * will read from computed style for animation-duration.
    * @param {!Element} element
    * @param {number=} opt_durationMs
    * @return {!Object} Object containing `abort` function.
    */

		}, {
			key: 'emulateAnimationEnd',
			value: function emulateAnimationEnd(element, opt_durationMs) {
				return this.emulateEnd_(element, 'animation', opt_durationMs);
			}

			/**
    * Emulates transition end event. If `opt_durationMs` not specified the
    * value will read from computed style for transition-duration.
    * @param {!Element} element
    * @param {number=} opt_durationMs
    * @return {!Object} Object containing `abort` function.
    */

		}, {
			key: 'emulateTransitionEnd',
			value: function emulateTransitionEnd(element, opt_durationMs) {
				this.emulateEnd_(element, 'transition', opt_durationMs);
			}

			/**
    * Emulates transition or animation end.
    * @param {!Element} element
    * @param {string} type
    * @param {number=} opt_durationMs
    * @return {!Object} Object containing `abort` function.
    * @protected
    */

		}, {
			key: 'emulateEnd_',
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

			/**
    * Gets computed style duration for duration.
    * @param {!Element} element
    * @param {string} type
    * @return {number} The computed duration in milliseconds.
    */

		}, {
			key: 'getComputedDurationMs',
			value: function getComputedDurationMs(element, type) {
				return (parseFloat(window.getComputedStyle(element, null).getPropertyValue(type + '-duration')) || 0) * 1000;
			}
		}]);
		return Anim;
	})();

	this.steel.Anim = Anim;
}).call(this);
'use strict';

(function () {
	var core = this.steel.core;
	var dom = this.steel.dom;
	var AlertBase = this.steel.Alert;
	var Anim = this.steel.Anim;
	var EventHandler = this.steel.EventHandler;

	/**
  * Alert component.
  */

	var Alert = (function (_AlertBase) {
		babelHelpers.inherits(Alert, _AlertBase);

		function Alert(opt_config) {
			babelHelpers.classCallCheck(this, Alert);

			var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Alert).call(this, opt_config));

			_this.eventHandler_ = new EventHandler();
			return _this;
		}

		/**
   * @inheritDoc
   */

		babelHelpers.createClass(Alert, [{
			key: 'detached',
			value: function detached() {
				babelHelpers.get(Object.getPrototypeOf(Alert.prototype), 'detached', this).call(this);
				this.eventHandler_.removeAllListeners();
				clearTimeout(this.delay_);
			}

			/**
    * Closes the alert, disposing it once the animation ends.
    */

		}, {
			key: 'close',
			value: function close() {
				dom.once(this.element, 'animationend', this.dispose.bind(this));
				dom.once(this.element, 'transitionend', this.dispose.bind(this));
				this.eventHandler_.removeAllListeners();
				this.syncVisible(false);
			}

			/**
    * Handles document click in order to close the alert.
    * @param {!Event} event
    * @protected
    */

		}, {
			key: 'handleDocClick_',
			value: function handleDocClick_(event) {
				if (!this.element.contains(event.target)) {
					this.hide();
				}
			}

			/**
    * Hide the alert.
    */

		}, {
			key: 'hide',
			value: function hide() {
				this.visible = false;
			}

			/**
    * Toggles the visibility of the alert.
    */

		}, {
			key: 'toggle',
			value: function toggle() {
				this.visible = !this.visible;
			}

			/**
    * Synchronization logic for `dismissible` attribute.
    * @param {boolean} dismissible
    */

		}, {
			key: 'syncDismissible',
			value: function syncDismissible(dismissible) {
				if (dismissible) {
					this.eventHandler_.add(dom.on(document, 'click', this.handleDocClick_.bind(this)));
				} else {
					this.eventHandler_.removeAllListeners();
				}

				dom[dismissible ? 'addClasses' : 'removeClasses'](this.element, 'alert-dismissible');
			}

			/**
    * Synchronization logic for `visible` attribute.
    * @param {boolean} visible
    */

		}, {
			key: 'syncVisible',
			value: function syncVisible(visible) {
				dom.removeClasses(this.element, this.animClasses[visible ? 'hide' : 'show']);
				dom.addClasses(this.element, this.animClasses[visible ? 'show' : 'hide']);
				// Some browsers do not fire transitionend events when running in background
				// tab, see https://bugzilla.mozilla.org/show_bug.cgi?id=683696.
				Anim.emulateEnd(this.element);

				if (visible && core.isNumber(this.hideDelay)) {
					this.syncHideDelay(this.hideDelay);
				}
			}

			/**
    * Synchronization logic for `hideDelay` attribute.
    * @param {?number} hideDelay
    */

		}, {
			key: 'syncHideDelay',
			value: function syncHideDelay(hideDelay) {
				if (core.isNumber(hideDelay) && this.visible) {
					clearTimeout(this.delay_);
					this.delay_ = setTimeout(this.hide.bind(this), hideDelay);
				}
			}
		}]);
		return Alert;
	})(AlertBase);

	/**
  * Default alert elementClasses.
  * @default alert
  * @type {string}
  * @static
  */

	Alert.ELEMENT_CLASSES = 'alert';

	/**
  * Alert attributes definition.
  * @type {!Object}
  * @static
  */
	Alert.ATTRS = {
		/**
   * The CSS classes that should be added to the alert when being shown/hidden.
   * @type {!Object}
   */
		animClasses: {
			validator: core.isObject,
			value: {
				show: 'fade in',
				hide: 'fade'
			}
		},

		/**
   * The body content of the alert.
   * @type {string}
   */
		body: {
			value: ''
		},

		/**
   * Flag indicating if the alert should be dismissable (closeable).
   * @type {boolean}
   * @default true
   */
		dismissible: {
			validator: core.isBoolean,
			value: true
		},

		/**
   * The CSS classes that should be added to the alert.
   * @type {string}
   * @default 'alert-success'
   */
		elementClasses: {
			value: 'alert-success'
		},

		/**
   * Delay hiding the alert (ms).
   * @type {?number}
   */
		hideDelay: {},

		/**
   * Flag indicating if the alert is visible or not.
   * @type {boolean}
   * @default false
   */
		visible: {
			value: false
		}
	};

	AlertBase.setImpl(Alert);

	this.steel.Alert = Alert;
}).call(this);
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

(function () {
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
  CancellablePromise.prototype.catch = CancellablePromise.prototype.thenCatch;

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
    this.addCallbackEntry_(
    /** @type {CancellablePromise.CallbackEntry_} */callbackEntry);
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
      x = /** @type {!Thenable} */x;
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
    babelHelpers.inherits(_class, _Error);

    function _class(opt_message) {
      babelHelpers.classCallCheck(this, _class);

      var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(_class).call(this, opt_message));

      if (opt_message) {
        _this.message = opt_message;
      }
      return _this;
    }

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
'use strict';

(function () {
	var core = this.steel.core;
	var dom = this.steel.dom;
	var Promise = this.steelNamed.Promise.CancellablePromise;
	var Component = this.steel.Component;
	var EventHandler = this.steel.EventHandler;

	/*
  * AutocompleteBase component.
  */

	var AutocompleteBase = (function (_Component) {
		babelHelpers.inherits(AutocompleteBase, _Component);

		/**
   * @inheritDoc
   */

		function AutocompleteBase(opt_config) {
			babelHelpers.classCallCheck(this, AutocompleteBase);

			var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(AutocompleteBase).call(this, opt_config));

			_this.eventHandler_ = new EventHandler();
			_this.on('select', _this.select);
			return _this;
		}

		/**
   * @inheritDoc
   */

		babelHelpers.createClass(AutocompleteBase, [{
			key: 'attached',
			value: function attached() {
				if (this.inputElement) {
					this.eventHandler_.add(dom.on(this.inputElement, 'input', this.handleUserInput_.bind(this)));
				}
			}

			/**
    * @inheritDoc
    */

		}, {
			key: 'detached',
			value: function detached() {
				this.eventHandler_.removeAllListeners();
			}

			/**
    * Handles the user input.
    * @param {!Event} event
    * @protected
    */

		}, {
			key: 'handleUserInput_',
			value: function handleUserInput_() {
				this.request(this.inputElement.value);
			}

			/**
    * Cancels pending request and starts a request for the user input.
    * @param {string} query
    * @return {!CancellablePromise} Deferred request.
    */

		}, {
			key: 'request',
			value: function request(query) {
				var self = this;

				if (this.pendingRequest) {
					this.pendingRequest.cancel('Cancelled by another request');
				}

				this.pendingRequest = Promise.resolve().then(function () {
					return self.data(query);
				}).then(function (data) {
					if (Array.isArray(data)) {
						return data.map(self.format.bind(self)).filter(function (val) {
							return core.isDefAndNotNull(val);
						});
					}
				});

				return this.pendingRequest;
			}

			/**
    * Normalizes the provided data value. If the value is not a function, the
    * value will be wrapped in a function which returns the provided value.
    * @param {Array.<object>|Promise|function} val The provided value which
    *     have to be normalized.
    * @protected
    */

		}, {
			key: 'setData_',
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
	})(Component);

	/**
  * AutocompleteBase attributes definition.
  * @type {!Object}
  * @static
  */

	AutocompleteBase.ATTRS = {
		/**
   * Function or array, which have to return the results from the query.
   * If function, it should return an `array` or a `Promise`. In case of
   * Promise, it should be resolved with an array containing the results.
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
		},

		/**
   * Indicates if the component is visible or not.
   * @type {boolean}
   */
		visible: {
			validator: core.isBoolean,
			value: false
		}
	};

	this.steel.AutocompleteBase = AutocompleteBase;
}).call(this);
'use strict';

(function () {
	var Geometry = (function () {
		function Geometry() {
			babelHelpers.classCallCheck(this, Geometry);
		}

		babelHelpers.createClass(Geometry, null, [{
			key: 'intersectRect',

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
'use strict';

(function () {
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
    * @return {number}
    */
			value: function getClientHeight(node) {
				return this.getClientSize_(node, 'Height');
			}

			/**
    * Gets the client height or width of the specified node. Scroll height is
    * not included.
    * @param {Element|Document|Window=} node
    * @param {string} `Width` or `Height` property.
    * @return {number}
    * @protected
    */

		}, {
			key: 'getClientSize_',
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

			/**
    * Gets the client width of the specified node. Scroll width is not
    * included.
    * @param {Element|Document|Window=} node
    * @return {number}
    */

		}, {
			key: 'getClientWidth',
			value: function getClientWidth(node) {
				return this.getClientSize_(node, 'Width');
			}

			/**
    * Gets the region of the element, document or window.
    * @param {Element|Document|Window=} opt_element Optional element to test.
    * @return {!DOMRect} The returned value is a simulated DOMRect object which
    *     is the union of the rectangles returned by getClientRects() for the
    *     element, i.e., the CSS border-boxes associated with the element.
    * @protected
    */

		}, {
			key: 'getDocumentRegion_',
			value: function getDocumentRegion_(opt_element) {
				var height = this.getHeight(opt_element);
				var width = this.getWidth(opt_element);
				return this.makeRegion(height, height, 0, width, 0, width);
			}

			/**
    * Gets the height of the specified node. Scroll height is included.
    * @param {Element|Document|Window=} node
    * @return {number}
    */

		}, {
			key: 'getHeight',
			value: function getHeight(node) {
				return this.getSize_(node, 'Height');
			}

			/**
    * Gets the top offset position of the given node. This fixes the `offsetLeft` value of
    * nodes that were translated, which don't take that into account at all. That makes
    * the calculation more expensive though, so if you don't want that to be considered
    * either pass `opt_ignoreTransform` as true or call `offsetLeft` directly on the node.
    * @param {!Element} node
    * @param {boolean=} opt_ignoreTransform When set to true will ignore transform css
    *   when calculating the position. Defaults to false.
    * @return {number}
    */

		}, {
			key: 'getOffsetLeft',
			value: function getOffsetLeft(node, opt_ignoreTransform) {
				return node.offsetLeft + (opt_ignoreTransform ? 0 : Position.getTranslation(node).left);
			}

			/**
    * Gets the top offset position of the given node. This fixes the `offsetTop` value of
    * nodes that were translated, which don't take that into account at all. That makes
    * the calculation more expensive though, so if you don't want that to be considered
    * either pass `opt_ignoreTransform` as true or call `offsetTop` directly on the node.
    * @param {!Element} node
    * @param {boolean=} opt_ignoreTransform When set to true will ignore transform css
    *   when calculating the position. Defaults to false.
    * @return {number}
    */

		}, {
			key: 'getOffsetTop',
			value: function getOffsetTop(node, opt_ignoreTransform) {
				return node.offsetTop + (opt_ignoreTransform ? 0 : Position.getTranslation(node).top);
			}

			/**
    * Gets the size of an element and its position relative to the viewport.
    * @param {!Document|Element|Window} node
    * @param {boolean=} opt_includeScroll Flag indicating if the document scroll
    *   position should be considered in the element's region coordinates. Defaults
    *   to false.
    * @return {!DOMRect} The returned value is a DOMRect object which is the
    *     union of the rectangles returned by getClientRects() for the element,
    *     i.e., the CSS border-boxes associated with the element.
    */

		}, {
			key: 'getRegion',
			value: function getRegion(node, opt_includeScroll) {
				if (core.isDocument(node) || core.isWindow(node)) {
					return this.getDocumentRegion_(node);
				}
				return this.makeRegionFromBoundingRect_(node.getBoundingClientRect(), opt_includeScroll);
			}

			/**
    * Gets the scroll left position of the specified node.
    * @param {Element|Document|Window=} node
    * @return {number}
    */

		}, {
			key: 'getScrollLeft',
			value: function getScrollLeft(node) {
				if (core.isWindow(node)) {
					return node.pageXOffset;
				}
				if (core.isDocument(node)) {
					return node.defaultView.pageXOffset;
				}
				return node.scrollLeft;
			}

			/**
    * Gets the scroll top position of the specified node.
    * @param {Element|Document|Window=} node
    * @return {number}
    */

		}, {
			key: 'getScrollTop',
			value: function getScrollTop(node) {
				if (core.isWindow(node)) {
					return node.pageYOffset;
				}
				if (core.isDocument(node)) {
					return node.defaultView.pageYOffset;
				}
				return node.scrollTop;
			}

			/**
    * Gets the height or width of the specified node. Scroll height is
    * included.
    * @param {Element|Document|Window=} node
    * @param {string} `Width` or `Height` property.
    * @return {number}
    * @protected
    */

		}, {
			key: 'getSize_',
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

			/**
    * Gets the transform matrix values for the given node.
    * @param {!Element} node
    * @return {Array<number>}
    */

		}, {
			key: 'getTransformMatrixValues',
			value: function getTransformMatrixValues(node) {
				var style = getComputedStyle(node);
				var transform = style.msTransform || style.transform || style.webkitTransform || style.mozTransform;
				if (transform !== 'none') {
					var values = [];
					var regex = /([\d-\.\s]+)/g;
					var matches = regex.exec(transform);
					while (matches) {
						values.push(matches[1]);
						matches = regex.exec(transform);
					}
					return values;
				}
			}

			/**
    * Gets the number of translated pixels for the given node, for both the top and
    * left positions.
    * @param {!Element} node
    * @return {number}
    */

		}, {
			key: 'getTranslation',
			value: function getTranslation(node) {
				var values = Position.getTransformMatrixValues(node);
				var translation = {
					left: 0,
					top: 0
				};
				if (values) {
					translation.left = parseFloat(values.length === 6 ? values[4] : values[13]);
					translation.top = parseFloat(values.length === 6 ? values[5] : values[14]);
				}
				return translation;
			}

			/**
    * Gets the width of the specified node. Scroll width is included.
    * @param {Element|Document|Window=} node
    * @return {number}
    */

		}, {
			key: 'getWidth',
			value: function getWidth(node) {
				return this.getSize_(node, 'Width');
			}

			/**
    * Tests if a region intersects with another.
    * @param {DOMRect} r1
    * @param {DOMRect} r2
    * @return {boolean}
    */

		}, {
			key: 'intersectRegion',
			value: function intersectRegion(r1, r2) {
				return Geometry.intersectRect(r1.top, r1.left, r1.bottom, r1.right, r2.top, r2.left, r2.bottom, r2.right);
			}

			/**
    * Tests if a region is inside another.
    * @param {DOMRect} r1
    * @param {DOMRect} r2
    * @return {boolean}
    */

		}, {
			key: 'insideRegion',
			value: function insideRegion(r1, r2) {
				return r2.top >= r1.top && r2.bottom <= r1.bottom && r2.right <= r1.right && r2.left >= r1.left;
			}

			/**
    * Tests if a region is inside viewport region.
    * @param {DOMRect} region
    * @return {boolean}
    */

		}, {
			key: 'insideViewport',
			value: function insideViewport(region) {
				return this.insideRegion(this.getRegion(window), region);
			}

			/**
    * Computes the intersection region between two regions.
    * @param {DOMRect} r1
    * @param {DOMRect} r2
    * @return {?DOMRect} Intersection region or null if regions doesn't
    *     intersects.
    */

		}, {
			key: 'intersection',
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

			/**
    * Makes a region object. It's a writable version of DOMRect.
    * @param {number} bottom
    * @param {number} height
    * @param {number} left
    * @param {number} right
    * @param {number} top
    * @param {number} width
    * @return {!DOMRect} The returned value is a DOMRect object which is the
    *     union of the rectangles returned by getClientRects() for the element,
    *     i.e., the CSS border-boxes associated with the element.
    */

		}, {
			key: 'makeRegion',
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

			/**
    * Makes a region from a DOMRect result from `getBoundingClientRect`.
    * @param  {!DOMRect} The returned value is a DOMRect object which is the
    *     union of the rectangles returned by getClientRects() for the element,
    *     i.e., the CSS border-boxes associated with the element.
    * @param {boolean=} opt_includeScroll Flag indicating if the document scroll
    *   position should be considered in the element's region coordinates. Defaults
    *   to false.
    * @return {DOMRect} Writable version of DOMRect.
    * @protected
    */

		}, {
			key: 'makeRegionFromBoundingRect_',
			value: function makeRegionFromBoundingRect_(rect, opt_includeScroll) {
				var deltaX = opt_includeScroll ? Position.getScrollLeft(document) : 0;
				var deltaY = opt_includeScroll ? Position.getScrollTop(document) : 0;
				return this.makeRegion(rect.bottom + deltaY, rect.height, rect.left + deltaX, rect.right + deltaX, rect.top + deltaY, rect.width);
			}

			/**
    * Checks if the given point coordinates are inside a region.
    * @param {number} x
    * @param {number} y
    * @param {!Object} region
    * @return {boolean}
    */

		}, {
			key: 'pointInsideRegion',
			value: function pointInsideRegion(x, y, region) {
				return Position.insideRegion(region, Position.makeRegion(y, 0, x, x, y, 0));
			}
		}]);
		return Position;
	})();

	this.steel.Position = Position;
}).call(this);
'use strict';

(function () {
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
    * @return {string} The final chosen position for the aligned element.
    * @static
    */
			value: function align(element, alignElement, position) {
				var suggestion = this.suggestAlignBestRegion(element, alignElement, position);
				var bestRegion = suggestion.region;

				var computedStyle = window.getComputedStyle(element, null);
				if (computedStyle.getPropertyValue('position') !== 'fixed') {
					bestRegion.top += window.pageYOffset;
					bestRegion.left += window.pageXOffset;

					var offsetParent = element;
					while (offsetParent = offsetParent.offsetParent) {
						bestRegion.top -= Position.getOffsetTop(offsetParent);
						bestRegion.left -= Position.getOffsetLeft(offsetParent);
					}
				}

				element.style.top = bestRegion.top + 'px';
				element.style.left = bestRegion.left + 'px';
				return suggestion.position;
			}

			/**
    * Returns the best region to align element with alignElement. This is similar
    * to `Align.suggestAlignBestRegion`, but it only returns the region information,
    * while `Align.suggestAlignBestRegion` also returns the chosen position.
    * @param {!Element} element Element to be aligned.
    * @param {!Element} alignElement Element to align with.
    * @param {Align.Top|Align.Right|Align.Bottom|Align.Left} pos
    *     The initial position to try. Options `Align.Top`, `Align.Right`,
    *     `Align.Bottom`, `Align.Left`.
    * @return {DOMRect} Best region to align element.
    * @static
    */

		}, {
			key: 'getAlignBestRegion',
			value: function getAlignBestRegion(element, alignElement, position) {
				return Align.suggestAlignBestRegion(element, alignElement, position).region;
			}

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

		}, {
			key: 'getAlignRegion',
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

			/**
    * Checks if specified value is a valid position. Options `Align.Top`,
    *     `Align.Right`, `Align.Bottom`, `Align.Left`.
    * @param {Align.Top|Align.Right|Align.Bottom|Align.Left} val
    * @return {boolean} Returns true if value is a valid position.
    * @static
    */

		}, {
			key: 'isValidPosition',
			value: function isValidPosition(val) {
				return 0 <= val && val <= 3;
			}

			/**
    * Looks for the best region for aligning the given element. The best
    * region is defined by clockwise rotation starting from the specified
    * `position`. The element is always aligned in the middle of alignElement
    * axis.
    * @param {!Element} element Element to be aligned.
    * @param {!Element} alignElement Element to align with.
    * @param {Align.Top|Align.Right|Align.Bottom|Align.Left} pos
    *     The initial position to try. Options `Align.Top`, `Align.Right`,
    *     `Align.Bottom`, `Align.Left`.
    * @return {{position: string, region: DOMRect}} Best region to align element.
    * @static
    */

		}, {
			key: 'suggestAlignBestRegion',
			value: function suggestAlignBestRegion(element, alignElement, position) {
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

				return {
					position: bestPosition,
					region: bestRegion
				};
			}
		}]);
		return Align;
	})();

	/**
  * Represents the `Align.Top` constant.
  * @type {number}
  * @default 0
  * @static
  */

	Align.Top = 0;

	/**
  * Represents the `Align.Right` constant.
  * @type {number}
  * @default 1
  * @static
  */
	Align.Right = 1;

	/**
  * Represents the `Align.Bottom` constant.
  * @type {number}
  * @default 2
  * @static
  */
	Align.Bottom = 2;

	/**
  * Represents the `Align.Left` constant.
  * @type {number}
  * @default 3
  * @static
  */
	Align.Left = 3;

	this.steel.Align = Align;
}).call(this);
'use strict';

(function () {
  /* jshint ignore:start */
  var Component = this.steel.Component;
  var ComponentRegistry = this.steel.ComponentRegistry;
  var SoyAop = this.steel.SoyAop;
  var SoyRenderer = this.steel.SoyRenderer;
  var SoyTemplates = this.steel.SoyTemplates;

  var Templates = SoyTemplates.get();
  // This file was automatically generated from List.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace Templates.List.
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
    return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="list component' + soy.$$escapeHtmlAttribute(opt_data.elementClasses ? ' ' + opt_data.elementClasses : '') + '">' + Templates.List.items(opt_data, null, opt_ijData) + '</div>');
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
    var output = '<ul id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-items" data-onclick="handleClick">';
    if (opt_data.itemsHtml != null) {
      output += soy.$$escapeHtml(opt_data.itemsHtml);
    } else {
      var itemList18 = opt_data.items;
      var itemListLen18 = itemList18.length;
      for (var itemIndex18 = 0; itemIndex18 < itemListLen18; itemIndex18++) {
        var itemData18 = itemList18[itemIndex18];
        output += Templates.ListItem.content({ id: opt_data.id + '-items-' + itemIndex18, index: itemIndex18, item: itemData18 }, null, opt_ijData);
      }
    }
    output += '</ul>';
    return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
  };
  if (goog.DEBUG) {
    Templates.List.items.soyTemplateName = 'Templates.List.items';
  }

  Templates.List.content.params = ["id"];
  Templates.List.items.params = ["id", "items", "itemsHtml"];

  var List = (function (_Component) {
    babelHelpers.inherits(List, _Component);

    function List() {
      babelHelpers.classCallCheck(this, List);
      return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(List).apply(this, arguments));
    }

    babelHelpers.createClass(List, null, [{
      key: 'setImpl',
      value: function setImpl(ctor) {
        ComponentRegistry.register(ctor, 'List');
      }
    }]);
    return List;
  })(Component);

  List.RENDERER = SoyRenderer;
  List.setImpl(List);
  SoyAop.registerTemplates('List');
  this.steel.List = List;
  /* jshint ignore:end */
}).call(this);
'use strict';

(function () {
  /* jshint ignore:start */
  var Component = this.steel.Component;
  var ComponentRegistry = this.steel.ComponentRegistry;
  var SoyAop = this.steel.SoyAop;
  var SoyRenderer = this.steel.SoyRenderer;
  var SoyTemplates = this.steel.SoyTemplates;

  var Templates = SoyTemplates.get();
  // This file was automatically generated from ListItem.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace Templates.ListItem.
   */

  if (typeof Templates.ListItem == 'undefined') {
    Templates.ListItem = {};
  }

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  Templates.ListItem.content = function (opt_data, opt_ignored, opt_ijData) {
    return soydata.VERY_UNSAFE.ordainSanitizedHtml('<li id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="listitem component' + soy.$$escapeHtmlAttribute(opt_data.elementClasses ? ' ' + opt_data.elementClasses : '') + ' clearfix" data-index="' + soy.$$escapeHtmlAttribute(opt_data.index) + '">' + Templates.ListItem.item(opt_data, null, opt_ijData) + '</li>');
  };
  if (goog.DEBUG) {
    Templates.ListItem.content.soyTemplateName = 'Templates.ListItem.content';
  }

  /**
   * @param {Object.<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object.<string, *>=} opt_ijData
   * @return {!soydata.SanitizedHtml}
   * @suppress {checkTypes}
   */
  Templates.ListItem.item = function (opt_data, opt_ignored, opt_ijData) {
    var output = (opt_data.item.avatar ? '<span class="list-image pull-left ' + soy.$$escapeHtmlAttribute(opt_data.item.avatar['class']) + '">' + soy.$$escapeHtml(opt_data.item.avatar.content) + '</span>' : '') + '<div class="list-main-content pull-left"><div class="list-text-primary">' + soy.$$escapeHtml(opt_data.item.textPrimary) + '</div>' + (opt_data.item.textSecondary ? '<div class="list-text-secondary">' + soy.$$escapeHtml(opt_data.item.textSecondary) + '</div>' : '') + '</div>';
    if (opt_data.item.icons) {
      output += '<div class="list-icons pull-right">';
      var iconList56 = opt_data.item.icons;
      var iconListLen56 = iconList56.length;
      for (var iconIndex56 = 0; iconIndex56 < iconListLen56; iconIndex56++) {
        var iconData56 = iconList56[iconIndex56];
        output += '<span class="list-icon ' + soy.$$escapeHtmlAttribute(iconData56) + '"></span>';
      }
      output += '</div>';
    }
    if (opt_data.item.iconsHtml) {
      output += '<div class="list-icons pull-right">';
      var iconHtmlList65 = opt_data.item.iconsHtml;
      var iconHtmlListLen65 = iconHtmlList65.length;
      for (var iconHtmlIndex65 = 0; iconHtmlIndex65 < iconHtmlListLen65; iconHtmlIndex65++) {
        var iconHtmlData65 = iconHtmlList65[iconHtmlIndex65];
        output += soy.$$escapeHtml(iconHtmlData65);
      }
      output += '</div>';
    }
    output += opt_data.item.label ? '<span class="label list-label pull-right ' + soy.$$escapeHtmlAttribute(opt_data.item.label['class']) + '">' + soy.$$escapeHtml(opt_data.item.label.content) + '</span>' : '';
    return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
  };
  if (goog.DEBUG) {
    Templates.ListItem.item.soyTemplateName = 'Templates.ListItem.item';
  }

  Templates.ListItem.content.params = ["id", "index", "item"];
  Templates.ListItem.item.params = ["item"];

  var ListItem = (function (_Component) {
    babelHelpers.inherits(ListItem, _Component);

    function ListItem() {
      babelHelpers.classCallCheck(this, ListItem);
      return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(ListItem).apply(this, arguments));
    }

    babelHelpers.createClass(ListItem, null, [{
      key: 'setImpl',
      value: function setImpl(ctor) {
        ComponentRegistry.register(ctor, 'ListItem');
      }
    }]);
    return ListItem;
  })(Component);

  ListItem.RENDERER = SoyRenderer;
  ListItem.setImpl(ListItem);
  SoyAop.registerTemplates('ListItem');
  this.steel.ListItem = ListItem;
  /* jshint ignore:end */
}).call(this);
'use strict';

(function () {
  var ListItemBase = this.steel.ListItem;

  /**
   * List component.
   */

  var ListItem = (function (_ListItemBase) {
    babelHelpers.inherits(ListItem, _ListItemBase);

    function ListItem(opt_config) {
      babelHelpers.classCallCheck(this, ListItem);
      return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(ListItem).call(this, opt_config));
    }

    return ListItem;
  })(ListItemBase);

  /**
   * Default list elementClasses.
   * @default list
   * @type {String}
   * @static
   */

  ListItem.ELEMENT_CLASSES = 'listitem';

  /**
   * List attributes definition.
   * @type {Object}
   * @static
   */
  ListItem.ATTRS = {
    item: {},

    index: {
      value: -1
    }
  };

  ListItemBase.setImpl(ListItem);

  this.steel.ListItem = ListItem;
}).call(this);
'use strict';

(function () {
	var dom = this.steel.dom;
	var ListBase = this.steel.List;

	/**
  * List component.
  */

	var List = (function (_ListBase) {
		babelHelpers.inherits(List, _ListBase);

		/**
   * @inheritDoc
   */

		function List(opt_config) {
			babelHelpers.classCallCheck(this, List);
			return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(List).call(this, opt_config));
		}

		/**
   * Handles click event on the list. The function fires an
   * {@code itemSelected} event.
   * @param {!Event} event The native click event
   */

		babelHelpers.createClass(List, [{
			key: 'handleClick',
			value: function handleClick(event) {
				var target = event.target;
				while (target) {
					if (dom.match(target, '.listitem')) {
						break;
					}
					target = target.parentNode;
				}
				this.emit('itemSelected', target);
			}
		}]);
		return List;
	})(ListBase);

	/**
  * Default list elementClasses.
  * @default list
  * @type {string}
  * @static
  */

	List.ELEMENT_CLASSES = 'list';

	/**
  * List attributes definition.
  * @type {!Object}
  * @static
  */
	List.ATTRS = {
		/**
   * The list items. Each is represented by an object that can have the following keys:
   *   - textPrimary: The item's main content.
   *   - textSecondary: (Optional) The item's help content.
   *   - icons: (Optional) A list of icon css classes to render on the right side.
   *   - iconsHtml: (Optional) A list of icon css classes to render on the right side.
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
		},

		/**
   * The list items as HTML to be added directly to the list.
   * @type {string}
   */
		itemsHtml: {}
	};

	ListBase.setImpl(List);

	this.steel.List = List;
}).call(this);
'use strict';

(function () {
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
		babelHelpers.inherits(Autocomplete, _AutocompleteBase);

		/**
   * @inheritDoc
   */

		function Autocomplete(opt_config) {
			babelHelpers.classCallCheck(this, Autocomplete);

			var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Autocomplete).call(this, opt_config));

			_this.once('render', _this.handleRender_);
			return _this;
		}

		/**
   * @inheritDoc
   */

		babelHelpers.createClass(Autocomplete, [{
			key: 'attached',
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

			/**
    * @inheritDoc
    */

		}, {
			key: 'detached',
			value: function detached() {
				babelHelpers.get(Object.getPrototypeOf(Autocomplete.prototype), 'detached', this).call(this);
				this.list.detach();
			}

			/**
    * Aligns main element to the input element.
    */

		}, {
			key: 'align',
			value: function align() {
				this.element.style.width = this.inputElement.offsetWidth + 'px';
				Align.align(this.element, this.inputElement, Align.Bottom);
			}

			/**
    * Handles document click in order to hide autocomplete. If input element is
    * focused autocomplete will not hide.
    * @param {!Event} event
    */

		}, {
			key: 'handleDocClick_',
			value: function handleDocClick_() {
				if (document.activeElement === this.inputElement) {
					return;
				}
				this.visible = false;
			}

			/**
    * Handles input focus.
    * @param {!Event} event
    */

		}, {
			key: 'handleInputFocus_',
			value: function handleInputFocus_() {
				this.request(this.inputElement.value);
			}

			/**
    * Handles the `render` event, creating a `List` component and rendering
    * it inside this autocomplete.
    * @protected
    */

		}, {
			key: 'handleRender_',
			value: function handleRender_() {
				this.list = new List().render(this.element);
				this.list.on('itemSelected', this.onListItemSelected_.bind(this));
			}

			/**
    * @inheritDoc
    */

		}, {
			key: 'request',
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

			/**
    * Emits a `select` event with the information about the selected item and
    * hides the element.
    * @param {!Element} item The list selected item.
    * @protected
    */

		}, {
			key: 'onListItemSelected_',
			value: function onListItemSelected_(item) {
				var selectedIndex = parseInt(item.getAttribute('data-index'), 10);
				this.emit('select', this.list.items[selectedIndex]);
				this.visible = false;
			}

			/**
    * Stops propagation of an event.
    * @param {!Event} event
    * @protected
    */

		}, {
			key: 'genericStopPropagation_',
			value: function genericStopPropagation_(event) {
				event.stopPropagation();
			}

			/**
    * Synchronization logic for `visible` attribute.
    * @param {boolean} visible
    */

		}, {
			key: 'syncVisible',
			value: function syncVisible(visible) {
				babelHelpers.get(Object.getPrototypeOf(Autocomplete.prototype), 'syncVisible', this).call(this, visible);

				if (visible) {
					this.align();
				}
			}

			/**
    * Asserts that formatted data is valid. Throws error if item is not in the
    * valid syntax.
    * @param {*} item
    * @protected
    */

		}, {
			key: 'assertItemObjectStructure_',
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

	/**
  * Attributes definition.
  * @type {!Object}
  * @static
  */

	Autocomplete.ATTRS = {
		/**
   * Function that converts a given item to the format that should be used by
   * the autocomplete.
   * @type {!function()}
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

	ComponentRegistry.register(Autocomplete);

	this.steel.Autocomplete = Autocomplete;
}).call(this);
'use strict';

(function () {
  /* jshint ignore:start */
  var Component = this.steel.Component;
  var ComponentRegistry = this.steel.ComponentRegistry;
  var SoyAop = this.steel.SoyAop;
  var SoyRenderer = this.steel.SoyRenderer;
  var SoyTemplates = this.steel.SoyTemplates;

  var Templates = SoyTemplates.get();
  // This file was automatically generated from Dropdown.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace Templates.Dropdown.
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
    return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="dropdown component' + soy.$$escapeHtmlAttribute(opt_data.elementClasses ? ' ' + opt_data.elementClasses : '') + soy.$$escapeHtmlAttribute(opt_data.expanded ? ' open' : '') + '">' + (opt_data.header ? soy.$$escapeHtml(opt_data.header) : '') + Templates.Dropdown.body(opt_data, null, opt_ijData) + '</div>');
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
  Templates.Dropdown.body = function (opt_data, opt_ignored, opt_ijData) {
    return soydata.VERY_UNSAFE.ordainSanitizedHtml('<ul id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-body" class="dropdown-menu">' + (opt_data.body ? soy.$$escapeHtml(opt_data.body) : '') + '</ul>');
  };
  if (goog.DEBUG) {
    Templates.Dropdown.body.soyTemplateName = 'Templates.Dropdown.body';
  }

  Templates.Dropdown.content.params = ["header", "id"];
  Templates.Dropdown.body.params = ["body", "id"];

  var Dropdown = (function (_Component) {
    babelHelpers.inherits(Dropdown, _Component);

    function Dropdown() {
      babelHelpers.classCallCheck(this, Dropdown);
      return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Dropdown).apply(this, arguments));
    }

    babelHelpers.createClass(Dropdown, null, [{
      key: 'setImpl',
      value: function setImpl(ctor) {
        ComponentRegistry.register(ctor, 'Dropdown');
      }
    }]);
    return Dropdown;
  })(Component);

  Dropdown.RENDERER = SoyRenderer;
  Dropdown.setImpl(Dropdown);
  SoyAop.registerTemplates('Dropdown');
  this.steel.Dropdown = Dropdown;
  /* jshint ignore:end */
}).call(this);
'use strict';

(function () {
	var dom = this.steel.dom;
	var EventHandler = this.steel.EventHandler;
	var DropdownBase = this.steel.Dropdown;

	/**
  * Dropdown component.
  */

	var Dropdown = (function (_DropdownBase) {
		babelHelpers.inherits(Dropdown, _DropdownBase);

		/**
   * @inheritDoc
   */

		function Dropdown(opt_config) {
			babelHelpers.classCallCheck(this, Dropdown);

			var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Dropdown).call(this, opt_config));

			_this.eventHandler_ = new EventHandler();
			return _this;
		}

		/**
   * @inheritDoc
   */

		babelHelpers.createClass(Dropdown, [{
			key: 'attached',
			value: function attached() {
				babelHelpers.get(Object.getPrototypeOf(Dropdown.prototype), 'attached', this).call(this);
				this.eventHandler_.add(dom.on(document, 'click', this.handleDocClick_.bind(this)));
			}

			/**
    * @inheritDoc
    */

		}, {
			key: 'detached',
			value: function detached() {
				babelHelpers.get(Object.getPrototypeOf(Dropdown.prototype), 'detached', this).call(this);
				this.eventHandler_.removeAllListeners();
			}

			/**
    * Closes the dropdown.
    */

		}, {
			key: 'close',
			value: function close() {
				this.expanded = false;
			}

			/**
    * Checks if the dropdown is currently open.
    * @return {boolean}
    */

		}, {
			key: 'isOpen',
			value: function isOpen() {
				return this.expanded;
			}

			/**
    * Handles document click in order to hide menu.
    * @param {!Event} event
    * @protected
    */

		}, {
			key: 'handleDocClick_',
			value: function handleDocClick_(event) {
				if (this.element.contains(event.target)) {
					return;
				}
				this.close();
			}

			/**
    * Opens the dropdown.
    */

		}, {
			key: 'open',
			value: function open() {
				this.expanded = true;
			}

			/**
    * Synchronization logic for `expanded` attribute.
    * @param {boolean} expanded
    */

		}, {
			key: 'syncExpanded',
			value: function syncExpanded(expanded) {
				if (expanded) {
					dom.addClasses(this.element, 'open');
				} else {
					dom.removeClasses(this.element, 'open');
				}
			}

			/**
    * Synchronization logic for `position` attribute.
    * @param {string} position
    * @param {string} oldPosition
    */

		}, {
			key: 'syncPosition',
			value: function syncPosition(position, oldPosition) {
				if (oldPosition) {
					dom.removeClasses(this.element, 'drop' + oldPosition.toLowerCase());
				}
				dom.addClasses(this.element, 'drop' + position.toLowerCase());
			}

			/**
    * Toggles the dropdown, closing it when open or opening it when closed.
    */

		}, {
			key: 'toggle',
			value: function toggle() {
				this.expanded = !this.expanded;
			}

			/**
    * Validator for the `position` attribute.
    * @param {string} position
    * @return {boolean}
    * @protected
    */

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
	})(DropdownBase);

	/**
  * Attrbutes definition.
  * @type {!Object}
  * @static
  */

	Dropdown.ATTRS = {
		/**
   * The dropdown's body content.
   * @type {string}
   */
		body: {},

		/**
   * The dropdown's header content.
   * @type {string}
   */
		header: {},

		/**
   * Flag indicating if the dropdown is expanded (open) or not.
   * @type {boolean}
   * @default false
   */
		expanded: {
			value: false
		},

		/**
   * The position of the dropdown (either 'up' or 'down').
   * @type {string}
   * @default 'down'
   */
		position: {
			value: 'down',
			validator: 'validatePosition_'
		}
	};

	/**
  * Default dropdown elementClasses.
  * @default dropdown
  * @type {string}
  * @static
  */
	Dropdown.ELEMENT_CLASSES = 'dropdown';

	DropdownBase.setImpl(Dropdown);

	this.steel.Dropdown = Dropdown;
}).call(this);
'use strict';

(function () {
  var Dropdown = this.steel.Dropdown;
  this.steel.Dropdown = Dropdown;
}).call(this);
'use strict';

(function () {
  /* jshint ignore:start */
  var Component = this.steel.Component;
  var ComponentRegistry = this.steel.ComponentRegistry;
  var SoyAop = this.steel.SoyAop;
  var SoyRenderer = this.steel.SoyRenderer;
  var SoyTemplates = this.steel.SoyTemplates;

  var Templates = SoyTemplates.get();
  // This file was automatically generated from Modal.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace Templates.Modal.
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
    return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="modal component' + soy.$$escapeHtmlAttribute(opt_data.elementClasses ? ' ' + opt_data.elementClasses : '') + '" role="' + soy.$$escapeHtmlAttribute(opt_data.role ? opt_data.role : 'dialog') + '" aria-labelledby="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-header"><div class="modal-dialog" tabindex="0"><div class="modal-content">' + Templates.Modal.header(opt_data, null, opt_ijData) + Templates.Modal.body(opt_data, null, opt_ijData) + Templates.Modal.footer(opt_data, null, opt_ijData) + '</div></div></div>');
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
    return soydata.VERY_UNSAFE.ordainSanitizedHtml('<section id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-body" class="modal-body">' + (opt_data.body ? soy.$$escapeHtml(opt_data.body) : '') + '</section>');
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
    return soydata.VERY_UNSAFE.ordainSanitizedHtml('<footer id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-footer" class="modal-footer">' + (opt_data.footer ? soy.$$escapeHtml(opt_data.footer) : '') + '</footer>');
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
    return soydata.VERY_UNSAFE.ordainSanitizedHtml('<header id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-header" class="modal-header">' + (opt_data.header ? '<button type="button" class="close" data-onclick="hide" aria-label="Close"><span aria-hidden="true">×</span></button>' + soy.$$escapeHtml(opt_data.header) : '') + '</header>');
  };
  if (goog.DEBUG) {
    Templates.Modal.header.soyTemplateName = 'Templates.Modal.header';
  }

  Templates.Modal.content.params = ["id", "role"];
  Templates.Modal.body.params = ["id", "body"];
  Templates.Modal.footer.params = ["footer", "id"];
  Templates.Modal.header.params = ["header", "id"];

  var Modal = (function (_Component) {
    babelHelpers.inherits(Modal, _Component);

    function Modal() {
      babelHelpers.classCallCheck(this, Modal);
      return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Modal).apply(this, arguments));
    }

    babelHelpers.createClass(Modal, null, [{
      key: 'setImpl',
      value: function setImpl(ctor) {
        ComponentRegistry.register(ctor, 'Modal');
      }
    }]);
    return Modal;
  })(Component);

  Modal.RENDERER = SoyRenderer;
  Modal.setImpl(Modal);
  SoyAop.registerTemplates('Modal');
  this.steel.Modal = Modal;
  /* jshint ignore:end */
}).call(this);
'use strict';

(function () {
	var core = this.steel.core;
	var dom = this.steel.dom;
	var EventHandler = this.steel.EventHandler;
	var ModalBase = this.steel.Modal;

	/**
  * Modal component.
  */

	var Modal = (function (_ModalBase) {
		babelHelpers.inherits(Modal, _ModalBase);

		/**
   * @inheritDoc
   */

		function Modal(opt_config) {
			babelHelpers.classCallCheck(this, Modal);

			var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Modal).call(this, opt_config));

			_this.eventHandler_ = new EventHandler();
			return _this;
		}

		/**
   * @inheritDoc
   */

		babelHelpers.createClass(Modal, [{
			key: 'attached',
			value: function attached() {
				this.autoFocus_(this.autoFocus);
			}

			/**
    * Automatically focuses the element specified by the given selector.
    * @param {boolean|string} autoFocusSelector The selector, or false if no
    *   element should be automatically focused.
    * @protected
    */

		}, {
			key: 'autoFocus_',
			value: function autoFocus_(autoFocusSelector) {
				if (this.inDocument && this.visible && autoFocusSelector) {
					var element = this.element.querySelector(autoFocusSelector);
					if (element) {
						element.focus();
					}
				}
			}

			/**
    * @inheritDoc
    */

		}, {
			key: 'detached',
			value: function detached() {
				babelHelpers.get(Object.getPrototypeOf(Modal.prototype), 'detached', this).call(this);
				this.eventHandler_.removeAllListeners();
			}

			/**
    * @inheritDoc
    */

		}, {
			key: 'disposeInternal',
			value: function disposeInternal() {
				dom.exitDocument(this.overlayElement);
				this.unrestrictFocus_();
				babelHelpers.get(Object.getPrototypeOf(Modal.prototype), 'disposeInternal', this).call(this);
			}

			/**
    * Handles a `focus` event on the document. If the focused element is
    * outside the modal and an overlay is being used, focuses the modal back.
    * @param {!Event} event
    * @protected
    */

		}, {
			key: 'handleDocumentFocus_',
			value: function handleDocumentFocus_(event) {
				if (this.overlay && !this.element.contains(event.target)) {
					this.autoFocus_('.modal-dialog');
				}
			}

			/**
    * Handles document click in order to close the alert.
    * @param {!Event} event
    * @protected
    */

		}, {
			key: 'handleKeyup_',
			value: function handleKeyup_(event) {
				if (event.keyCode === 27) {
					this.hide();
				}
			}

			/**
    * Hides the modal, setting its `visible` attribute to false.
    */

		}, {
			key: 'hide',
			value: function hide() {
				this.visible = false;
			}

			/**
    * Restricts focus to the modal while it's visible.
    * @protected
    */

		}, {
			key: 'restrictFocus_',
			value: function restrictFocus_() {
				this.restrictFocusHandle_ = dom.on(document, 'focus', this.handleDocumentFocus_.bind(this), true);
			}

			/**
    * Shifts the focus back to the last element that had been focused before the
    * modal was shown.
    * @protected
    */

		}, {
			key: 'shiftFocusBack_',
			value: function shiftFocusBack_() {
				if (this.lastFocusedElement_) {
					this.lastFocusedElement_.focus();
					this.lastFocusedElement_ = null;
				}
			}

			/**
    * Shows the modal, setting its `visible` attribute to true.
    */

		}, {
			key: 'show',
			value: function show() {
				this.visible = true;
			}

			/**
    * Syncs the component according to the value of the `hideOnEscape` attribute.
    * @param {boolean} hideOnEscape
    */

		}, {
			key: 'syncHideOnEscape',
			value: function syncHideOnEscape(hideOnEscape) {
				if (hideOnEscape) {
					this.eventHandler_.add(dom.on(document, 'keyup', this.handleKeyup_.bind(this)));
				} else {
					this.eventHandler_.removeAllListeners();
				}
			}

			/**
    * Syncs the component according to the value of the `overlay` attribute.
    * @param {boolean} overlay
    */

		}, {
			key: 'syncOverlay',
			value: function syncOverlay(overlay) {
				var willShowOverlay = overlay && this.visible;
				dom[willShowOverlay ? 'enterDocument' : 'exitDocument'](this.overlayElement);
			}

			/**
    * Syncs the component according to the value of the `visible` attribute.
    * @param {boolean} visible
    */

		}, {
			key: 'syncVisible',
			value: function syncVisible(visible) {
				this.element.style.display = visible ? 'block' : '';
				this.syncOverlay(this.overlay);
				if (this.visible) {
					this.lastFocusedElement_ = document.activeElement;
					this.autoFocus_(this.autoFocus);
					this.restrictFocus_();
				} else {
					this.unrestrictFocus_();
					this.shiftFocusBack_();
				}
			}

			/**
    * Removes the handler that restricts focus to elements inside the modal.
    * @protected
    */

		}, {
			key: 'unrestrictFocus_',
			value: function unrestrictFocus_() {
				if (this.restrictFocusHandle_) {
					this.restrictFocusHandle_.removeListener();
				}
			}

			/**
    * Defines the default value for the `overlayElement` attribute.
    * @protected
    */

		}, {
			key: 'valueOverlayElementFn_',
			value: function valueOverlayElementFn_() {
				return dom.buildFragment('<div class="modal-backdrop fade in"></div>').firstChild;
			}
		}]);
		return Modal;
	})(ModalBase);

	/**
  * Default modal elementClasses.
  * @default modal
  * @type {string}
  * @static
  */

	Modal.ELEMENT_CLASSES = 'modal';

	Modal.ATTRS = {
		/**
   * A selector for the element that should be automatically focused when the modal
   * becomes visible, or `false` if no auto focus should happen. Defaults to the
   * modal's close button.
   * @type {boolean|string}
   */
		autoFocus: {
			validator: function validator(val) {
				return val === false || core.isString(val);
			},
			value: '.close'
		},

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
   * Whether modal should hide on esc.
   * @type {boolean}
   * @default true
   */
		hideOnEscape: {
			validator: core.isBoolean,
			value: true
		},

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
		},

		/**
   * The ARIA role to be used for this modal.
   * @type {string}
   * @default 'dialog'
   */
		role: {
			validator: core.isString,
			value: 'dialog'
		}
	};

	ModalBase.setImpl(Modal);

	this.steel.Modal = Modal;
}).call(this);
'use strict';

(function () {
  var Modal = this.steel.Modal;
  this.steel.Modal = Modal;
}).call(this);
'use strict';

(function () {
  /* jshint ignore:start */
  var Component = this.steel.Component;
  var ComponentRegistry = this.steel.ComponentRegistry;
  var SoyAop = this.steel.SoyAop;
  var SoyRenderer = this.steel.SoyRenderer;
  var SoyTemplates = this.steel.SoyTemplates;

  var Templates = SoyTemplates.get();
  // This file was automatically generated from Switcher.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace Templates.Switcher.
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
    return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="switcher component' + soy.$$escapeHtmlAttribute(opt_data.elementClasses ? ' ' + opt_data.elementClasses : '') + soy.$$escapeHtmlAttribute(opt_data.checked ? ' switcher-on' : '') + '"><div class="switcher-control"><div class="switcher-control-icon"></div></div></div>');
  };
  if (goog.DEBUG) {
    Templates.Switcher.content.soyTemplateName = 'Templates.Switcher.content';
  }

  Templates.Switcher.content.params = ["id"];

  var Switcher = (function (_Component) {
    babelHelpers.inherits(Switcher, _Component);

    function Switcher() {
      babelHelpers.classCallCheck(this, Switcher);
      return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Switcher).apply(this, arguments));
    }

    babelHelpers.createClass(Switcher, null, [{
      key: 'setImpl',
      value: function setImpl(ctor) {
        ComponentRegistry.register(ctor, 'Switcher');
      }
    }]);
    return Switcher;
  })(Component);

  Switcher.RENDERER = SoyRenderer;
  Switcher.setImpl(Switcher);
  SoyAop.registerTemplates('Switcher');
  this.steel.Switcher = Switcher;
  /* jshint ignore:end */
}).call(this);
'use strict';

(function () {
	var core = this.steel.core;
	var dom = this.steel.dom;
	var SwitcherBase = this.steel.Switcher;

	/**
  * Switcher component.
  */

	var Switcher = (function (_SwitcherBase) {
		babelHelpers.inherits(Switcher, _SwitcherBase);

		function Switcher() {
			babelHelpers.classCallCheck(this, Switcher);
			return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Switcher).apply(this, arguments));
		}

		babelHelpers.createClass(Switcher, [{
			key: 'attached',

			/**
    * @inheritDoc
    */
			value: function attached() {
				this.on('click', this.handleClick);
			}

			/**
    * Handles switcher click.
    */

		}, {
			key: 'handleClick',
			value: function handleClick() {
				this.checked = !this.checked;
			}

			/**
    * Synchronization logic for the `checked` attribute.
    * @param {boolean} checked
    */

		}, {
			key: 'syncChecked',
			value: function syncChecked(checked) {
				dom[checked ? 'addClasses' : 'removeClasses'](this.element, 'switcher-on');
			}
		}]);
		return Switcher;
	})(SwitcherBase);

	/**
  * Default switcher elementClasses.
  * @default list
  * @type {string}
  * @static
  */

	Switcher.ELEMENT_CLASSES = 'switcher';

	/**
  * Switcher attributes definition.
  * @type {!Object}
  * @static
  */
	Switcher.ATTRS = {
		/**
   * Flag indicating if the switcher is currently checked or not.
   * @type {boolean}
   * @default false
   */
		checked: {
			validator: core.isBoolean,
			value: false
		}
	};

	SwitcherBase.setImpl(Switcher);

	this.steel.Switcher = Switcher;
}).call(this);
'use strict';

(function () {
	var core = this.steel.core;
	var dom = this.steel.dom;
	var Align = this.steel.Align;
	var Component = this.steel.Component;
	var EventHandler = this.steel.EventHandler;
	var SoyRenderer = this.steel.SoyRenderer;

	/**
  * The base class to be shared between components that have tooltip behavior.
  * This helps decouple this behavior logic from the UI, which may be different
  * between components. The Tooltip component itself extends from this, as does
  * the crystal Popover component, which can be accessed at metal/crystal-popover.
  */

	var TooltipBase = (function (_Component) {
		babelHelpers.inherits(TooltipBase, _Component);

		/**
   * @inheritDoc
   */

		function TooltipBase(opt_config) {
			babelHelpers.classCallCheck(this, TooltipBase);

			var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(TooltipBase).call(this, opt_config));

			_this.eventHandler_ = new EventHandler();
			return _this;
		}

		/**
   * @inheritDoc
   */

		babelHelpers.createClass(TooltipBase, [{
			key: 'attached',
			value: function attached() {
				this.align();
				this.syncTriggerEvents(this.triggerEvents);
			}

			/**
    * @inheritDoc
    */

		}, {
			key: 'detached',
			value: function detached() {
				this.eventHandler_.removeAllListeners();
			}

			/**
    * Aligns the tooltip with the best region around alignElement. The best
    * region is defined by clockwise rotation starting from the specified
    * `position`. The element is always aligned in the middle of alignElement
    * axis.
    * @param {Element=} opt_alignElement Optional element to align with.
    */

		}, {
			key: 'align',
			value: function align(opt_alignElement) {
				this.syncAlignElement(opt_alignElement || this.alignElement);
			}

			/**
    * @param {!function()} fn
    * @param {number} delay
    * @private
    */

		}, {
			key: 'callAsync_',
			value: function callAsync_(fn, delay) {
				clearTimeout(this.delay_);
				this.delay_ = setTimeout(fn.bind(this), delay);
			}

			/**
    * Handles hide event triggered by `events`.
    * @param {!Event} event
    * @protected
    */

		}, {
			key: 'handleHide',
			value: function handleHide(event) {
				var delegateTarget = event.delegateTarget;
				var interactingWithDifferentTarget = delegateTarget && delegateTarget !== this.alignElement;
				this.callAsync_(function () {
					if (this.locked_) {
						return;
					}
					if (interactingWithDifferentTarget) {
						this.alignElement = delegateTarget;
					} else {
						this.visible = false;
						this.syncVisible(false);
					}
				}, this.delay[1]);
			}

			/**
    * Handles show event triggered by `events`.
    * @param {!Event} event
    * @protected
    */

		}, {
			key: 'handleShow',
			value: function handleShow(event) {
				var delegateTarget = event.delegateTarget;
				babelHelpers.get(Object.getPrototypeOf(TooltipBase.prototype), 'syncVisible', this).call(this, true);
				this.callAsync_(function () {
					this.alignElement = delegateTarget;
					this.visible = true;
				}, this.delay[0]);
			}

			/**
    * Handles toggle event triggered by `events`.
    * @param {!Event} event
    * @protected
    */

		}, {
			key: 'handleToggle',
			value: function handleToggle(event) {
				if (this.visible) {
					this.handleHide(event);
				} else {
					this.handleShow(event);
				}
			}

			/**
    * Locks tooltip visibility.
    * @param {!Event} event
    */

		}, {
			key: 'lock',
			value: function lock() {
				this.locked_ = true;
			}

			/**
    * Unlocks tooltip visibility.
    * @param {!Event} event
    */

		}, {
			key: 'unlock',
			value: function unlock(event) {
				this.locked_ = false;
				this.handleHide(event);
			}

			/**
    * Attribute synchronization logic for `alignElement` attribute.
    * @param {Element} alignElement
    * @param {Element} prevAlignElement
    */

		}, {
			key: 'syncAlignElement',
			value: function syncAlignElement(alignElement, prevAlignElement) {
				if (prevAlignElement) {
					alignElement.removeAttribute('aria-describedby');
				}
				if (alignElement) {
					if (this.visible) {
						alignElement.setAttribute('aria-describedby', this.id);
					} else {
						alignElement.removeAttribute('aria-describedby');
					}
					if (this.inDocument) {
						var finalPosition = TooltipBase.Align.align(this.element, alignElement, this.position);
						this.updatePositionCSS(finalPosition);
					}
				}
			}

			/**
    * Attribute synchronization logic for `position` attribute.
    */

		}, {
			key: 'syncPosition',
			value: function syncPosition() {
				this.syncAlignElement(this.alignElement);
			}

			/**
    * Attribute synchronization logic for `selector` attribute.
    */

		}, {
			key: 'syncSelector',
			value: function syncSelector() {
				this.syncTriggerEvents(this.triggerEvents);
			}

			/**
    * Attribute synchronization logic for `triggerEvents` attribute.
    * @param {!Array<string>} triggerEvents
    */

		}, {
			key: 'syncTriggerEvents',
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

			/**
    * Attribute synchronization logic for `visible` attribute. Realigns the tooltip.
    */

		}, {
			key: 'syncVisible',
			value: function syncVisible() {
				this.align();
			}

			/**
    * Updates the css class for the current position.
    * @param {number} position
    */

		}, {
			key: 'updatePositionCSS',
			value: function updatePositionCSS(position) {
				dom.removeClasses(this.element, TooltipBase.PositionClasses.join(' '));
				dom.addClasses(this.element, TooltipBase.PositionClasses[position]);
			}
		}]);
		return TooltipBase;
	})(Component);

	/**
  * @inheritDoc
  * @see `Align` class.
  * @static
  */

	TooltipBase.Align = Align;

	/**
  * TooltipBase attrbutes definition.
  * @type {!Object}
  * @static
  */
	TooltipBase.ATTRS = {
		/**
   * Element to align tooltip with.
   * @type {Element}
   */
		alignElement: {
			setter: dom.toElement
		},

		/**
   * Delay showing and hiding the tooltip (ms).
   * @type {!Array<number>}
   * @default [ 500, 250 ]
   */
		delay: {
			validator: Array.isArray,
			value: [500, 250]
		},

		/**
   * Trigger events used to bind handlers to show and hide tooltip.
   * @type {!Array<string>}
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
   * @type {string}
   */
		content: {},

		/**
   * The position to try alignment. If not possible the best position will be
   * found.
   * @type {Align.Top|Align.Right|Align.Bottom|Align.Left}
   * @default Align.Bottom
   */
		position: {
			validator: TooltipBase.Align.isValidPosition,
			value: TooltipBase.Align.Bottom
		}
	};

	/**
  * CSS classes used for each align position.
  * @type {!Array}
  * @static
  */
	TooltipBase.PositionClasses = ['top', 'right', 'bottom', 'left'];

	TooltipBase.RENDERER = SoyRenderer;

	this.steel.TooltipBase = TooltipBase;
}).call(this);
'use strict';

(function () {
  /* jshint ignore:start */
  var Component = this.steel.Component;
  var ComponentRegistry = this.steel.ComponentRegistry;
  var SoyAop = this.steel.SoyAop;
  var SoyRenderer = this.steel.SoyRenderer;
  var SoyTemplates = this.steel.SoyTemplates;

  var Templates = SoyTemplates.get();
  // This file was automatically generated from Tooltip.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace Templates.Tooltip.
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
    var output = '';
    var positionClasses__soy3 = ['top', 'right', 'bottom', 'left'];
    var positionClass__soy4 = opt_data.position != null ? positionClasses__soy3[opt_data.position] : 'bottom';
    output += '<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="tooltip component ' + soy.$$escapeHtmlAttribute(positionClass__soy4) + soy.$$escapeHtmlAttribute(opt_data.elementClasses ? ' ' + opt_data.elementClasses : '') + '" role="tooltip"><div class="tooltip-arrow"></div>' + Templates.Tooltip.inner(opt_data, null, opt_ijData) + '</div>';
    return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
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
    return soydata.VERY_UNSAFE.ordainSanitizedHtml('<section id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-inner" class="tooltip-inner">' + soy.$$escapeHtml(opt_data.content ? opt_data.content : '') + '</section>');
  };
  if (goog.DEBUG) {
    Templates.Tooltip.inner.soyTemplateName = 'Templates.Tooltip.inner';
  }

  Templates.Tooltip.content.params = ["id"];
  Templates.Tooltip.inner.params = ["content", "id"];

  var Tooltip = (function (_Component) {
    babelHelpers.inherits(Tooltip, _Component);

    function Tooltip() {
      babelHelpers.classCallCheck(this, Tooltip);
      return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Tooltip).apply(this, arguments));
    }

    babelHelpers.createClass(Tooltip, null, [{
      key: 'setImpl',
      value: function setImpl(ctor) {
        ComponentRegistry.register(ctor, 'Tooltip');
      }
    }]);
    return Tooltip;
  })(Component);

  Tooltip.RENDERER = SoyRenderer;
  Tooltip.setImpl(Tooltip);
  SoyAop.registerTemplates('Tooltip');
  this.steel.Tooltip = Tooltip;
  /* jshint ignore:end */
}).call(this);
'use strict';

(function () {
  var ComponentRegistry = this.steel.ComponentRegistry;
  var TooltipBase = this.steel.TooltipBase;

  /**
   * Tooltip component.
   */

  var Tooltip = (function (_TooltipBase) {
    babelHelpers.inherits(Tooltip, _TooltipBase);

    function Tooltip() {
      babelHelpers.classCallCheck(this, Tooltip);
      return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Tooltip).apply(this, arguments));
    }

    babelHelpers.createClass(Tooltip, [{
      key: 'syncVisible',

      /**
       * Attribute synchronization logic for `visible` attribute. Updates the
       * element's opacity, since bootstrap uses opacity instead of display
       * for tooltip visibility.
       * @param {boolean} visible
       */
      value: function syncVisible(visible) {
        this.element.style.opacity = visible ? 1 : '';
        babelHelpers.get(Object.getPrototypeOf(Tooltip.prototype), 'syncVisible', this).call(this, visible);
      }
    }]);
    return Tooltip;
  })(TooltipBase);

  /**
   * @inheritDoc
   * @see `Align` class.
   * @static
   */

  Tooltip.Align = TooltipBase.Align;

  /**
   * Default tooltip elementClasses.
   * @default tooltip
   * @type {string}
   * @static
   */
  Tooltip.ELEMENT_CLASSES = 'tooltip';

  ComponentRegistry.register(Tooltip);

  this.steel.Tooltip = Tooltip;
}).call(this);
'use strict';

(function () {
  var Tooltip = this.steel.Tooltip;
  this.steel.Tooltip = Tooltip;
}).call(this);
'use strict';

(function () {
  /* jshint ignore:start */
  var Component = this.steel.Component;
  var ComponentRegistry = this.steel.ComponentRegistry;
  var SoyAop = this.steel.SoyAop;
  var SoyRenderer = this.steel.SoyRenderer;
  var SoyTemplates = this.steel.SoyTemplates;

  var Templates = SoyTemplates.get();
  // This file was automatically generated from TooltipMenu.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace Templates.TooltipMenu.
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
    return soydata.VERY_UNSAFE.ordainSanitizedHtml('<nav id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="tooltip-menu component bottom' + soy.$$escapeHtmlAttribute(opt_data.elementClasses ? ' ' + opt_data.elementClasses : '') + '">' + Templates.TooltipMenu.items(opt_data, null, opt_ijData) + '</nav>');
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
    var output = '<ul id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-items" class="tooltip-menu-list">';
    var itemList14 = opt_data.content;
    var itemListLen14 = itemList14.length;
    for (var itemIndex14 = 0; itemIndex14 < itemListLen14; itemIndex14++) {
      var itemData14 = itemList14[itemIndex14];
      output += '<li class="tooltip-menu-item">' + (itemData14.href ? '<a class="tooltip-menu-link" href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(itemData14.href ? itemData14.href : '#')) + '">' + soy.$$escapeHtml(itemData14.content) + '</a>' : '<button class="tooltip-menu-link btn-transparent" name="' + soy.$$escapeHtmlAttribute(itemData14.name ? itemData14.name : '') + '" value="' + soy.$$escapeHtmlAttribute(itemData14.value ? itemData14.value : '') + '">' + soy.$$escapeHtml(itemData14.content) + '</button>') + '</li>';
    }
    output += '</ul>';
    return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
  };
  if (goog.DEBUG) {
    Templates.TooltipMenu.items.soyTemplateName = 'Templates.TooltipMenu.items';
  }

  Templates.TooltipMenu.content.params = ["id"];
  Templates.TooltipMenu.items.params = ["content", "id"];

  var TooltipMenu = (function (_Component) {
    babelHelpers.inherits(TooltipMenu, _Component);

    function TooltipMenu() {
      babelHelpers.classCallCheck(this, TooltipMenu);
      return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(TooltipMenu).apply(this, arguments));
    }

    babelHelpers.createClass(TooltipMenu, null, [{
      key: 'setImpl',
      value: function setImpl(ctor) {
        ComponentRegistry.register(ctor, 'TooltipMenu');
      }
    }]);
    return TooltipMenu;
  })(Component);

  TooltipMenu.RENDERER = SoyRenderer;
  TooltipMenu.setImpl(TooltipMenu);
  SoyAop.registerTemplates('TooltipMenu');
  this.steel.TooltipMenu = TooltipMenu;
  /* jshint ignore:end */
}).call(this);
'use strict';

(function () {
	var dom = this.steel.dom;
	var Tooltip = this.steel.Tooltip;
	var TooltipMenuBase = this.steel.TooltipMenu;

	/**
  * TooltipMenu component.
  */

	var TooltipMenu = (function (_Tooltip) {
		babelHelpers.inherits(TooltipMenu, _Tooltip);

		/**
   * @inheritDoc
   */

		function TooltipMenu(opt_config) {
			babelHelpers.classCallCheck(this, TooltipMenu);
			return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(TooltipMenu).call(this, opt_config));
		}

		/**
   * @inheritDoc
   */

		babelHelpers.createClass(TooltipMenu, [{
			key: 'attached',
			value: function attached() {
				babelHelpers.get(Object.getPrototypeOf(TooltipMenu.prototype), 'attached', this).call(this);
				this.eventHandler_.add(dom.on(document, 'click', this.handleDocClick_.bind(this)));
			}

			/**
    * Handles document click in order to hide menu.
    * @param {!Event} event
    * @protected
    */

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
	})(Tooltip);

	/**
  * Default tooltip elementClasses.
  * @default tooltip
  * @type {string}
  * @static
  */

	TooltipMenu.ELEMENT_CLASSES_MERGED = 'tooltip-menu component';

	/**
  * The tag name of the main element.
  * @type {string}
  * @static
  */
	TooltipMenu.ELEMENT_TAG_NAME = 'nav';

	/**
  * TooltipMenu attrbutes definition.
  * @type {!Object}
  * @static
  */
	TooltipMenu.ATTRS = {
		/**
   * Delay showing and hiding the menu (ms).
   * @type {!Array<number>}
   * @default [0, 0]
   */
		delay: {
			validator: Array.isArray,
			value: [0, 0]
		},

		/**
   * Trigger events used to bind handlers to show and hide tooltip.
   * @type {!Array<string>}
   * @default ['click', 'mouseout']
   */
		triggerEvents: {
			validator: Array.isArray,
			value: ['click', 'click']
		},

		/**
   * Items to be placed inside tooltip menu. Each item must contain at least a
   * label key.
   * @type {!Array<!Object>}
   */
		content: {
			validator: Array.isArray,
			valueFn: function valueFn() {
				return [];
			}
		}
	};

	TooltipMenuBase.setImpl(TooltipMenu);

	this.steel.TooltipMenu = TooltipMenu;
}).call(this);
'use strict';

(function () {
  /* jshint ignore:start */
  var Component = this.steel.Component;
  var ComponentRegistry = this.steel.ComponentRegistry;
  var SoyAop = this.steel.SoyAop;
  var SoyRenderer = this.steel.SoyRenderer;
  var SoyTemplates = this.steel.SoyTemplates;

  var Templates = SoyTemplates.get();
  // This file was automatically generated from Treeview.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace Templates.Treeview.
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
    return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="treeview component' + soy.$$escapeHtmlAttribute(opt_data.elementClasses ? ' ' + opt_data.elementClasses : '') + '" role="tree">' + Templates.Treeview.nodes(opt_data, null, opt_ijData) + '</div>');
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
    var elementId__soy11 = opt_data.id + '-' + (opt_data.surfaceId != null ? opt_data.surfaceId : 'nodes');
    output += '<ul id="' + soy.$$escapeHtmlAttribute(elementId__soy11) + '" class="treeview-nodes">';
    var nodeList15 = opt_data.nodes;
    var nodeListLen15 = nodeList15.length;
    for (var nodeIndex15 = 0; nodeIndex15 < nodeListLen15; nodeIndex15++) {
      var nodeData15 = nodeList15[nodeIndex15];
      var index__soy16 = nodeIndex15;
      output += Templates.Treeview.node({ id: opt_data.id, node: nodeData15, surfaceId: opt_data.parentSurfaceId != null ? opt_data.parentSurfaceId + '-' + index__soy16 : index__soy16 }, null, opt_ijData);
    }
    output += '</ul>';
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
    return soydata.VERY_UNSAFE.ordainSanitizedHtml('<li id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-' + soy.$$escapeHtmlAttribute(opt_data.surfaceId) + '" class="treeview-node">' + (opt_data.node ? '<div class="treeview-node-wrapper' + soy.$$escapeHtmlAttribute(opt_data.node.expanded ? ' expanded' : '') + '"><div class="treeview-node-main clearfix' + soy.$$escapeHtmlAttribute(opt_data.node.children ? ' hasChildren' : '') + '" data-onclick="handleNodeClicked_" data-onkeyup="handleNodeKeyUp_" aria-expanded="' + soy.$$escapeHtmlAttribute(opt_data.node.expanded ? 'true' : 'false') + '" role="treeitem" tabindex="0">' + (opt_data.node.children ? '<div class="treeview-node-toggler"></div>' : '') + '<span class="treeview-node-name">' + soy.$$escapeHtml(opt_data.node.name) + '</span></div>' + (opt_data.node.children ? Templates.Treeview.nodes({ id: opt_data.id, nodes: opt_data.node.children, parentSurfaceId: opt_data.surfaceId, surfaceId: opt_data.surfaceId + '-nodes' }, null, opt_ijData) : '') + '</div>' : '') + '</li>');
  };
  if (goog.DEBUG) {
    Templates.Treeview.node.soyTemplateName = 'Templates.Treeview.node';
  }

  Templates.Treeview.content.params = ["id"];
  Templates.Treeview.nodes.params = ["id", "nodes", "parentSurfaceId", "surfaceId"];
  Templates.Treeview.node.private = true;

  var Treeview = (function (_Component) {
    babelHelpers.inherits(Treeview, _Component);

    function Treeview() {
      babelHelpers.classCallCheck(this, Treeview);
      return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Treeview).apply(this, arguments));
    }

    babelHelpers.createClass(Treeview, null, [{
      key: 'setImpl',
      value: function setImpl(ctor) {
        ComponentRegistry.register(ctor, 'Treeview');
      }
    }]);
    return Treeview;
  })(Component);

  Treeview.RENDERER = SoyRenderer;
  Treeview.setImpl(Treeview);
  SoyAop.registerTemplates('Treeview');
  this.steel.Treeview = Treeview;
  /* jshint ignore:end */
}).call(this);
'use strict';

(function () {
	var dom = this.steel.dom;
	var TreeviewBase = this.steel.Treeview;

	/**
  * Treeview component.
  */

	var Treeview = (function (_TreeviewBase) {
		babelHelpers.inherits(Treeview, _TreeviewBase);

		function Treeview() {
			babelHelpers.classCallCheck(this, Treeview);
			return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Treeview).apply(this, arguments));
		}

		babelHelpers.createClass(Treeview, [{
			key: 'attached',

			/**
    * Called after this component has been attached to the dom.
    */
			value: function attached() {
				this.on('nodesChanged', this.onNodesChanged_);
				this.on('renderSurface', this.handleRenderSurface_);
			}

			/**
    * Gets the node object from the nodes attribute that is located at the given
    * index path.
    * @param {!Array<number>} path An array of indexes indicating where the searched
    *   node is located inside the nodes attribute.
    * @return {!Object}
    */

		}, {
			key: 'getNodeObj',
			value: function getNodeObj(path) {
				var obj = this.nodes[path[0]];
				for (var i = 1; i < path.length; i++) {
					obj = obj.children[path[i]];
				}
				return obj;
			}

			/**
    * Gets the node object that the given element id represents from the nodes
    * attribute
    * @param {string} id
    * @return {!Object}
    */

		}, {
			key: 'getNodeObjFromId_',
			value: function getNodeObjFromId_(id) {
				var path = id.substr(this.id.length + 1).split('-');
				return this.getNodeObj(path);
			}

			/**
    * This is called when one of this tree view's nodes is clicked.
    * @param {!Event} event
    * @protected
    */

		}, {
			key: 'handleNodeClicked_',
			value: function handleNodeClicked_(event) {
				this.toggleExpandedState_(event.delegateTarget);
			}

			/**
    * This is called when one of this tree view's nodes receives a keypress.
    * If the pressed key is ENTER or SPACE, the node's expanded state will be toggled.
    * @param {!Event} event
    * @protected
    */

		}, {
			key: 'handleNodeKeyUp_',
			value: function handleNodeKeyUp_(event) {
				if (event.keyCode === 13 || event.keyCode === 32) {
					this.toggleExpandedState_(event.delegateTarget);
				}
			}

			/**
    * Handles a `renderSurface` event. Prevents rerendering surfaces when the changes
    * the surface was caused by a ui event that has already updated the screen.
    * @param {!Object} data
    * @param {!Object} event
    * @protected
    */

		}, {
			key: 'handleRenderSurface_',
			value: function handleRenderSurface_(data, event) {
				if (this.ignoreSurfaceUpdate_) {
					event.preventDefault();
					this.ignoreSurfaceUpdate_ = false;
				}
			}

			/**
    * Fired when the `nodes` attribute changes. Make sure that any other
    * updates to the `nodes` attribute made after ignoreSurfaceUpdate_ is
    * set to true, cause surfaces to update again.
    * @protected
    */

		}, {
			key: 'onNodesChanged_',
			value: function onNodesChanged_() {
				this.ignoreSurfaceUpdate_ = false;
			}

			/**
    * Toggles the expanded state for the given tree node.
    * @param {!Element} node
    * @protected
    */

		}, {
			key: 'toggleExpandedState_',
			value: function toggleExpandedState_(node) {
				var nodeObj = this.getNodeObjFromId_(node.parentNode.parentNode.id);
				nodeObj.expanded = !nodeObj.expanded;
				if (nodeObj.expanded) {
					dom.addClasses(node.parentNode, 'expanded');
					node.setAttribute('aria-expanded', 'true');
				} else {
					dom.removeClasses(node.parentNode, 'expanded');
					node.setAttribute('aria-expanded', 'false');
				}

				this.nodes = this.nodes;
				this.ignoreSurfaceUpdate_ = true;
			}
		}]);
		return Treeview;
	})(TreeviewBase);

	/**
  * Default tree view elementClasses.
  * @default treeView
  * @type {string}
  * @static
  */

	Treeview.ELEMENT_CLASSES = 'treeview';

	/**
  * Treeview attributes definition.
  * @type {!Object}
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

	TreeviewBase.setImpl(Treeview);

	this.steel.Treeview = Treeview;
}).call(this);
'use strict';

(function () {
  var Treeview = this.steel.Treeview;
  this.steel.Treeview = Treeview;
}).call(this);
}).call(this);
//# sourceMappingURL=steel.js.map
