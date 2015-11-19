'use strict';

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

define(['exports', 'metal/src/core', 'metal/src/dom/dom', 'metal/src/object/object', 'metal/src/component/Component', 'metal/src/component/ComponentRegistry', 'metal/src/component/ComponentRenderer', 'metal/src/soy/SoyAop', 'metal/src/soy/SoyTemplates'], function (exports, _core, _dom, _object, _Component2, _ComponentRegistry, _ComponentRenderer2, _SoyAop, _SoyTemplates) {
	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _core2 = _interopRequireDefault(_core);

	var _dom2 = _interopRequireDefault(_dom);

	var _object2 = _interopRequireDefault(_object);

	var _Component3 = _interopRequireDefault(_Component2);

	var _ComponentRegistry2 = _interopRequireDefault(_ComponentRegistry);

	var _ComponentRenderer3 = _interopRequireDefault(_ComponentRenderer2);

	var _SoyAop2 = _interopRequireDefault(_SoyAop);

	var _SoyTemplates2 = _interopRequireDefault(_SoyTemplates);

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

	var ijData = {};

	var SoyRenderer = (function (_ComponentRenderer) {
		_inherits(SoyRenderer, _ComponentRenderer);

		function SoyRenderer() {
			_classCallCheck(this, SoyRenderer);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(SoyRenderer).apply(this, arguments));
		}

		_createClass(SoyRenderer, null, [{
			key: 'addSurfacesFromTemplates_',
			value: function addSurfacesFromTemplates_(component) {
				var name = component.getName();

				var templates = _SoyTemplates2.default.get(name);

				var templateNames = Object.keys(templates);

				for (var i = 0; i < templateNames.length; i++) {
					var templateName = templateNames[i];

					var templateFn = _SoyAop2.default.getOriginalFn(templates[templateName]);

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
		}, {
			key: 'buildTemplateData_',
			value: function buildTemplateData_(component) {
				var names = component.getAttrNames().filter(function (name) {
					return name !== 'element';
				});
				var surface = component.getSurface(component.id);
				var data = surface && surface.componentData ? surface.componentData : {};
				return _object2.default.mixin(data, component.getAttrs(names));
			}
		}, {
			key: 'createComponentFromTemplate',
			value: function createComponentFromTemplate(templateFn, opt_element, opt_data) {
				var element = opt_element ? _dom2.default.toElement(opt_element) : null;

				var data = _object2.default.mixin({
					id: element ? element.id : null
				}, opt_data, {
					element: element
				});

				var name = 'TemplateComponent' + _core2.default.getUid();

				var TemplateComponent = (function (_Component) {
					_inherits(TemplateComponent, _Component);

					function TemplateComponent() {
						_classCallCheck(this, TemplateComponent);

						return _possibleConstructorReturn(this, Object.getPrototypeOf(TemplateComponent).apply(this, arguments));
					}

					return TemplateComponent;
				})(_Component3.default);

				TemplateComponent.RENDERER = SoyRenderer;

				_ComponentRegistry2.default.register(TemplateComponent, name);

				_SoyTemplates2.default.set(name, {
					content: function content(opt_attrs, opt_ignored, opt_ijData) {
						return _SoyAop2.default.getOriginalFn(templateFn)(data, opt_ignored, opt_ijData);
					}
				});

				_SoyAop2.default.registerTemplates(name);

				return new TemplateComponent(data);
			}
		}, {
			key: 'decorateFromTemplate',
			value: function decorateFromTemplate(templateFn, opt_element, opt_data) {
				return SoyRenderer.createComponentFromTemplate(templateFn, opt_element, opt_data).decorate();
			}
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

				if (_core2.default.isDefAndNotNull(data.surfaceElementId)) {
					surfaceElementId = data.surfaceElementId;
				} else if (_core2.default.isDefAndNotNull(data.surfaceId)) {
					surfaceElementId = component.getSurfaceElementId(data.surfaceId.toString());
				} else {
					if (originalFn.private) {
						return originalFn.call(null, data, opt_ignored, opt_ijData);
					}

					surfaceElementId = SoyRenderer.generateSurfaceElementId(component, SoyRenderer.surfaceBeingRendered_, surfaceData);
				}

				return component.buildPlaceholder(surfaceElementId, surfaceData);
			}
		}, {
			key: 'isSurfaceTemplate_',
			value: function isSurfaceTemplate_(templateName, templateFn) {
				return templateName.substr(0, 13) !== '__deltemplate' && !templateFn.private;
			}
		}, {
			key: 'renderFromTemplate',
			value: function renderFromTemplate(templateFn, opt_element, opt_data) {
				return SoyRenderer.createComponentFromTemplate(templateFn, opt_element, opt_data).render();
			}
		}, {
			key: 'renderTemplate_',
			value: function renderTemplate_(component, templateFn, opt_data) {
				_SoyAop2.default.startInterception(SoyRenderer.handleInterceptedCall_.bind(SoyRenderer, component));

				templateFn = _SoyAop2.default.getOriginalFn(templateFn);
				var content = templateFn(opt_data || SoyRenderer.buildTemplateData_(component), null, ijData).content;

				_SoyAop2.default.stopInterception();

				return content;
			}
		}, {
			key: 'renderTemplateByName_',
			value: function renderTemplateByName_(component, templateComponentName, templateName, opt_data) {
				var elementTemplate = _SoyTemplates2.default.get(templateComponentName, templateName);

				if (_core2.default.isFunction(elementTemplate)) {
					return SoyRenderer.renderTemplate_(component, elementTemplate, opt_data);
				}
			}
		}, {
			key: 'sanitizeHtml',
			value: function sanitizeHtml(html) {
				return soydata.VERY_UNSAFE.ordainSanitizedHtml(html);
			}
		}, {
			key: 'setInjectedData',
			value: function setInjectedData(data) {
				ijData = data || {};
			}
		}]);

		return SoyRenderer;
	})(_ComponentRenderer3.default);

	var originalSanitizedHtmlFromFn = soydata.SanitizedHtml.from;

	soydata.SanitizedHtml.from = function (value) {
		if (value && value.contentKind === 'HTML') {
			value = SoyRenderer.sanitizeHtml(value.content);
		}

		return originalSanitizedHtmlFromFn(value);
	};

	exports.default = SoyRenderer;
});
//# sourceMappingURL=SoyRenderer.js.map