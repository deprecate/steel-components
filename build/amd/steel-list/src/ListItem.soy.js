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

  if (typeof Templates.ListItem == 'undefined') {
    Templates.ListItem = {};
  }

  Templates.ListItem.content = function (opt_data, opt_ignored, opt_ijData) {
    return soydata.VERY_UNSAFE.ordainSanitizedHtml('<li id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="listitem component' + soy.$$escapeHtmlAttribute(opt_data.elementClasses ? ' ' + opt_data.elementClasses : '') + ' clearfix" data-index="' + soy.$$escapeHtmlAttribute(opt_data.index) + '">' + Templates.ListItem.item(opt_data, null, opt_ijData) + '</li>');
  };

  if (goog.DEBUG) {
    Templates.ListItem.content.soyTemplateName = 'Templates.ListItem.content';
  }

  Templates.ListItem.item = function (opt_data, opt_ignored, opt_ijData) {
    var output = (opt_data.item.avatar ? '<span class="list-image pull-left ' + soy.$$escapeHtmlAttribute(opt_data.item.avatar['class']) + '">' + soy.$$escapeHtml(opt_data.item.avatar.content) + '</span>' : '') + '<div class="list-main-content pull-left"><div class="list-text-primary">' + soy.$$escapeHtml(opt_data.item.textPrimary) + '</div>' + (opt_data.item.textSecondary ? '<div class="list-text-secondary">' + soy.$$escapeHtml(opt_data.item.textSecondary) + '</div>' : '') + '</div>';

    if (opt_data.item.icons) {
      output += '<div class="list-icons pull-right">';
      var iconList56 = opt_data.item.icons;
      var iconListLen56 = iconList56.length;

      for (var iconIndex56 = 0; iconIndex56 < iconListLen56; iconIndex56++) {
        var iconData56 = iconList56[iconIndex56];
        output += '<span class="list-icon ' + soy.$$escapeHtmlAttribute(iconData56) + '"></span>';
      }

      output += '</div>';
    }

    if (opt_data.item.iconsHtml) {
      output += '<div class="list-icons pull-right">';
      var iconHtmlList65 = opt_data.item.iconsHtml;
      var iconHtmlListLen65 = iconHtmlList65.length;

      for (var iconHtmlIndex65 = 0; iconHtmlIndex65 < iconHtmlListLen65; iconHtmlIndex65++) {
        var iconHtmlData65 = iconHtmlList65[iconHtmlIndex65];
        output += soy.$$escapeHtml(iconHtmlData65);
      }

      output += '</div>';
    }

    output += opt_data.item.label ? '<span class="label list-label pull-right ' + soy.$$escapeHtmlAttribute(opt_data.item.label['class']) + '">' + soy.$$escapeHtml(opt_data.item.label.content) + '</span>' : '';
    return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
  };

  if (goog.DEBUG) {
    Templates.ListItem.item.soyTemplateName = 'Templates.ListItem.item';
  }

  Templates.ListItem.content.params = ["id", "index", "item"];
  Templates.ListItem.item.params = ["item"];

  var ListItem = (function (_Component) {
    _inherits(ListItem, _Component);

    function ListItem() {
      _classCallCheck(this, ListItem);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(ListItem).apply(this, arguments));
    }

    _createClass(ListItem, null, [{
      key: 'setImpl',
      value: function setImpl(ctor) {
        _ComponentRegistry2.default.register(ctor, 'ListItem');
      }
    }]);

    return ListItem;
  })(_Component3.default);

  ListItem.RENDERER = _SoyRenderer2.default;
  ListItem.setImpl(ListItem);

  _SoyAop2.default.registerTemplates('ListItem');

  exports.default = ListItem;
});
//# sourceMappingURL=ListItem.soy.js.map