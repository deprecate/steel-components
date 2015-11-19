'use strict';

define(['exports', 'crystal-treeview/src/Treeview', 'metal-jquery-adapter/src/JQueryAdapter'], function (exports, _Treeview, _JQueryAdapter) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _Treeview2 = _interopRequireDefault(_Treeview);

  var _JQueryAdapter2 = _interopRequireDefault(_JQueryAdapter);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = _Treeview2.default;

  _JQueryAdapter2.default.register('treeview', _Treeview2.default);
});
//# sourceMappingURL=Treeview.js.map