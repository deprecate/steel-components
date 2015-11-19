'use strict';

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

define(['exports', 'steel-list/src/ListItem.soy'], function (exports, _ListItem) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _ListItem2 = _interopRequireDefault(_ListItem);

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

  var ListItem = (function (_ListItemBase) {
    _inherits(ListItem, _ListItemBase);

    function ListItem(opt_config) {
      _classCallCheck(this, ListItem);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(ListItem).call(this, opt_config));
    }

    return ListItem;
  })(_ListItem2.default);

  ListItem.ELEMENT_CLASSES = 'listitem';
  ListItem.ATTRS = {
    item: {},
    index: {
      value: -1
    }
  };

  _ListItem2.default.setImpl(ListItem);

  exports.default = ListItem;
});
//# sourceMappingURL=ListItem.js.map