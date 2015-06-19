define(['exports', 'module', 'metal/src/component/ComponentRegistry'], function (exports, module, _metalSrcComponentComponentRegistry) {
  /* jshint ignore:start */
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _ComponentRegistry = _interopRequireDefault(_metalSrcComponentComponentRegistry);

  var Templates = _ComponentRegistry['default'].Templates;
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
    return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-body" class="dropdown-menu">' + soy.$$escapeHtml(opt_data.elementContent) + '</div>');
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
  module.exports = Templates.Dropdown;

  /* jshint ignore:end */
});