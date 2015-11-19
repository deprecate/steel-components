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

  if (typeof Templates.TooltipMenu == 'undefined') {
    Templates.TooltipMenu = {};
  }

  Templates.TooltipMenu.content = function (opt_data, opt_ignored, opt_ijData) {
    return soydata.VERY_UNSAFE.ordainSanitizedHtml('<nav id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="tooltip-menu component bottom' + soy.$$escapeHtmlAttribute(opt_data.elementClasses ? ' ' + opt_data.elementClasses : '') + '">' + Templates.TooltipMenu.items(opt_data, null, opt_ijData) + '</nav>');
  };

  if (goog.DEBUG) {
    Templates.TooltipMenu.content.soyTemplateName = 'Templates.TooltipMenu.content';
  }

  Templates.TooltipMenu.items = function (opt_data, opt_ignored, opt_ijData) {
    var output = '<ul id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-items" class="tooltip-menu-list">';
    var itemList14 = opt_data.content;
    var itemListLen14 = itemList14.length;

    for (var itemIndex14 = 0; itemIndex14 < itemListLen14; itemIndex14++) {
      var itemData14 = itemList14[itemIndex14];
      output += '<li class="tooltip-menu-item">' + (itemData14.href ? '<a class="tooltip-menu-link" href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(itemData14.href ? itemData14.href : '#')) + '">' + soy.$$escapeHtml(itemData14.content) + '</a>' : '<button class="tooltip-menu-link btn-transparent" name="' + soy.$$escapeHtmlAttribute(itemData14.name ? itemData14.name : '') + '" value="' + soy.$$escapeHtmlAttribute(itemData14.value ? itemData14.value : '') + '">' + soy.$$escapeHtml(itemData14.content) + '</button>') + '</li>';
    }

    output += '</ul>';
    return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
  };

  if (goog.DEBUG) {
    Templates.TooltipMenu.items.soyTemplateName = 'Templates.TooltipMenu.items';
  }

  Templates.TooltipMenu.content.params = ["id"];
  Templates.TooltipMenu.items.params = ["content", "id"];

  var TooltipMenu = (function (_Component) {
    _inherits(TooltipMenu, _Component);

    function TooltipMenu() {
      _classCallCheck(this, TooltipMenu);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(TooltipMenu).apply(this, arguments));
    }

    _createClass(TooltipMenu, null, [{
      key: 'setImpl',
      value: function setImpl(ctor) {
        _ComponentRegistry2.default.register(ctor, 'TooltipMenu');
      }
    }]);

    return TooltipMenu;
  })(_Component3.default);

  TooltipMenu.RENDERER = _SoyRenderer2.default;
  TooltipMenu.setImpl(TooltipMenu);

  _SoyAop2.default.registerTemplates('TooltipMenu');

  exports.default = TooltipMenu;
});
//# sourceMappingURL=TooltipMenu.soy.js.map