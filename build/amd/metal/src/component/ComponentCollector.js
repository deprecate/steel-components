define(['exports', 'module', 'metal/src/component/ComponentRegistry', 'metal/src/disposable/Disposable'], function (exports, module, _metalSrcComponentComponentRegistry, _metalSrcDisposableDisposable) {
	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _ComponentRegistry = _interopRequireDefault(_metalSrcComponentComponentRegistry);

	var _Disposable2 = _interopRequireDefault(_metalSrcDisposableDisposable);

	var ComponentCollector = (function (_Disposable) {
		_inherits(ComponentCollector, _Disposable);

		function ComponentCollector() {
			_classCallCheck(this, ComponentCollector);

			_get(Object.getPrototypeOf(ComponentCollector.prototype), 'constructor', this).call(this);

			/**
    * Holds the data that should be passed to a component, mapped by component id.
    * @type {!Object<string, Object>}
    */
			this.nextComponentData_ = {};
		}

		_createClass(ComponentCollector, [{
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
					var ConstructorFn = _ComponentRegistry['default'].getConstructor(componentName);
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
	})(_Disposable2['default']);

	/**
  * Holds all collected components, indexed by their id.
  * @type {!Object<string, !Component>}
  */
	ComponentCollector.components = {};

	module.exports = ComponentCollector;
});