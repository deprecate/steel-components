define(['exports', 'module', 'metal/src/core', 'metal/src/dom/dom', 'metal/src/component/Component'], function (exports, module, _metalSrcCore, _metalSrcDomDom, _metalSrcComponentComponent) {
	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _core = _interopRequireDefault(_metalSrcCore);

	var _dom = _interopRequireDefault(_metalSrcDomDom);

	var _Component2 = _interopRequireDefault(_metalSrcComponentComponent);

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
			_classCallCheck(this, SoyComponent);

			_get(Object.getPrototypeOf(SoyComponent.prototype), 'constructor', this).call(this, opt_config);

			_core['default'].mergeSuperClassesProperty(this.constructor, 'TEMPLATES', this.mergeObjects_);
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

		_inherits(SoyComponent, _Component);

		_createClass(SoyComponent, [{
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
				var data = _get(Object.getPrototypeOf(SoyComponent.prototype), 'buildPlaceholderSurfaceData_', this).call(this, type, extra);
				if (type === _Component2['default'].SurfaceType.NORMAL) {
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
					return this.generateSurfaceId_(_Component2['default'].SurfaceType.NORMAL, this.surfaceBeingRendered_);
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
				if (!_core['default'].isDefAndNotNull(surfaceId)) {
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
				var id = (data || {}).id || this.generateSurfaceId_(_Component2['default'].SurfaceType.COMPONENT, this.surfaceBeingRendered_);
				_Component2['default'].componentsCollector.setNextComponentData(id, this.buildComponentConfigData_(id, data));
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
				if (_core['default'].isFunction(elementTemplate)) {
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
					var frag = _dom['default'].buildFragment(rendered);
					var element = frag.childNodes[0];
					// Remove element from fragment, so it won't have a parent. Otherwise,
					// the `attach` method will think that the element has already been
					// attached.
					frag.removeChild(element);
					return element;
				}

				return _get(Object.getPrototypeOf(SoyComponent.prototype), 'valueElementFn_', this).call(this);
			}
		}], [{
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
	})(_Component2['default']);

	/**
  * The soy templates for this component. Templates that have the same
  * name of a registered surface will be used for automatically rendering
  * it.
  * @type {Object<string, !function(Object):Object>}
  * @protected
  * @static
  */
	SoyComponent.TEMPLATES = {};

	module.exports = SoyComponent;
});