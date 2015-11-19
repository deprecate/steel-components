'use strict';

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

define(['exports', 'metal/src/dom/dom', 'steel-list/src/List.soy', 'steel-list/src/ListItem'], function (exports, _dom, _List) {
	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _dom2 = _interopRequireDefault(_dom);

	var _List2 = _interopRequireDefault(_List);

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

	var List = (function (_ListBase) {
		_inherits(List, _ListBase);

		function List(opt_config) {
			_classCallCheck(this, List);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(List).call(this, opt_config));
		}

		_createClass(List, [{
			key: 'handleClick',
			value: function handleClick(event) {
				var target = event.target;

				while (target) {
					if (_dom2.default.match(target, '.listitem')) {
						break;
					}

					target = target.parentNode;
				}

				this.emit('itemSelected', target);
			}
		}]);

		return List;
	})(_List2.default);

	List.ELEMENT_CLASSES = 'list';
	List.ATTRS = {
		items: {
			validator: Array.isArray,
			valueFn: function valueFn() {
				return [];
			}
		},
		itemsHtml: {}
	};

	_List2.default.setImpl(List);

	exports.default = List;
});
//# sourceMappingURL=List.js.map