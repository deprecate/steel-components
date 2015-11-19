'use strict';

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

define(['exports', 'metal/src/component/Component', 'metal/src/component/ComponentRegistry', 'metal/src/soy/SoyAop', 'metal/src/soy/SoyRenderer', 'metal/src/soy/SoyTemplates'], function (exports, _Component2, _ComponentRegistry, _SoyAop, _SoyRenderer, _SoyTemplates) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _Component3 = _interopRequireDefault(_Component2);

  var _ComponentRegistry2 = _interopRequireDefault(_ComponentRegistry);

  var _SoyAop2 = _interopRequireDefault(_SoyAop);

  var _SoyRenderer2 = _interopRequireDefault(_SoyRenderer);

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

  var Templates = _SoyTemplates2.default.get();

  if (typeof Templates.Alert == 'undefined') {
    Templates.Alert = {};
  }

  Templates.Alert.content = function (opt_data, opt_ignored, opt_ijData) {
    return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="alert alert-dismissible component' + soy.$$escapeHtmlAttribute(opt_data.elementClasses ? ' ' + opt_data.elementClasses : '') + '" role="alert">' + Templates.Alert.dismiss(opt_data, null, opt_ijData) + Templates.Alert.body(opt_data, null, opt_ijData) + '</div>');
  };

  if (goog.DEBUG) {
    Templates.Alert.content.soyTemplateName = 'Templates.Alert.content';
  }

  Templates.Alert.body = function (opt_data, opt_ignored, opt_ijData) {
    return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-body">' + (opt_data.body ? soy.$$escapeHtml(opt_data.body) : '') + '</div>');
  };

  if (goog.DEBUG) {
    Templates.Alert.body.soyTemplateName = 'Templates.Alert.body';
  }

  Templates.Alert.dismiss = function (opt_data, opt_ignored, opt_ijData) {
    return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-dismiss">' + (opt_data.dismissible ? '<button type="button" class="close" aria-label="Close" data-onclick="toggle"><span aria-hidden="true">×</span></button>' : '') + '</div>');
  };

  if (goog.DEBUG) {
    Templates.Alert.dismiss.soyTemplateName = 'Templates.Alert.dismiss';
  }

  Templates.Alert.content.params = ["id"];
  Templates.Alert.body.params = ["body", "id"];
  Templates.Alert.dismiss.params = ["dismissible", "id"];

  var Alert = (function (_Component) {
    _inherits(Alert, _Component);

    function Alert() {
      _classCallCheck(this, Alert);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(Alert).apply(this, arguments));
    }

    _createClass(Alert, null, [{
      key: 'setImpl',
      value: function setImpl(ctor) {
        _ComponentRegistry2.default.register(ctor, 'Alert');
      }
    }]);

    return Alert;
  })(_Component3.default);

  Alert.RENDERER = _SoyRenderer2.default;
  Alert.setImpl(Alert);

  _SoyAop2.default.registerTemplates('Alert');

  exports.default = Alert;
});
//# sourceMappingURL=Alert.soy.js.map