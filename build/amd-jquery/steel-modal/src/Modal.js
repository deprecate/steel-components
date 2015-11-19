'use strict';

define(['exports', 'crystal-modal/src/Modal', 'metal-jquery-adapter/src/JQueryAdapter'], function (exports, _Modal, _JQueryAdapter) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _Modal2 = _interopRequireDefault(_Modal);

  var _JQueryAdapter2 = _interopRequireDefault(_JQueryAdapter);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = _Modal2.default;

  _JQueryAdapter2.default.register('modal', _Modal2.default);
});
//# sourceMappingURL=Modal.js.map