define(['exports', 'module', 'metal/src/component/ComponentRegistry'], function (exports, module, _metalSrcComponentComponentRegistry) {
  /* jshint ignore:start */
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _ComponentRegistry = _interopRequireDefault(_metalSrcComponentComponentRegistry);

  var Templates = _ComponentRegistry['default'].Templates;
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
  module.exports = Templates.TooltipMenu;

  /* jshint ignore:end */
});