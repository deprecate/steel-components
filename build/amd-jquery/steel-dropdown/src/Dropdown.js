'use strict';

define(['exports', 'crystal-dropdown/src/Dropdown', 'metal-jquery-adapter/src/JQueryAdapter'], function (exports, _Dropdown, _JQueryAdapter) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _Dropdown2 = _interopRequireDefault(_Dropdown);

  var _JQueryAdapter2 = _interopRequireDefault(_JQueryAdapter);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = _Dropdown2.default;

  _JQueryAdapter2.default.register('dropdown', _Dropdown2.default);
});
//# sourceMappingURL=Dropdown.js.map