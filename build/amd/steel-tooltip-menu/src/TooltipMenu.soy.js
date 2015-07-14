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
    return soydata.VERY_UNSAFE.ordainSanitizedHtml('<nav id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="tooltip-menu component bottom ' + soy.$$escapeHtmlAttribute(opt_data.elementClasses) + '">' + Templates.TooltipMenu.items(opt_data, null, opt_ijData) + '</nav>');
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
      output += '<li class="tooltip-menu-item"><a class="tooltip-menu-link" href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(itemData14.href ? itemData14.href : '#')) + '">' + soy.$$escapeHtml(itemData14.content) + '</a></li>';
    }
    output += '</ul>';
    return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
  };
  if (goog.DEBUG) {
    Templates.TooltipMenu.items.soyTemplateName = 'Templates.TooltipMenu.items';
  }

  Templates.TooltipMenu.content.params = ['elementClasses', 'id'];
  Templates.TooltipMenu.items.params = ['content', 'id'];
  module.exports = Templates.TooltipMenu;

  /* jshint ignore:end */
});