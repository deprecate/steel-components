'use strict';

define(['exports', 'crystal-tooltip/src/Tooltip', 'metal-jquery-adapter/src/JQueryAdapter'], function (exports, _Tooltip, _JQueryAdapter) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _Tooltip2 = _interopRequireDefault(_Tooltip);

  var _JQueryAdapter2 = _interopRequireDefault(_JQueryAdapter);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = _Tooltip2.default;

  _JQueryAdapter2.default.register('tooltip', _Tooltip2.default);
});
//# sourceMappingURL=Tooltip.js.map