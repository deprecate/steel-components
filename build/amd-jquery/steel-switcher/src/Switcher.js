'use strict';

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

define(['exports', 'metal/src/core', 'metal/src/dom/dom', 'steel-switcher/src/Switcher.soy', 'metal-jquery-adapter/src/JQueryAdapter'], function (exports, _core, _dom, _Switcher, _JQueryAdapter) {
	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _core2 = _interopRequireDefault(_core);

	var _dom2 = _interopRequireDefault(_dom);

	var _Switcher2 = _interopRequireDefault(_Switcher);

	var _JQueryAdapter2 = _interopRequireDefault(_JQueryAdapter);

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

	var Switcher = (function (_SwitcherBase) {
		_inherits(Switcher, _SwitcherBase);

		function Switcher() {
			_classCallCheck(this, Switcher);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Switcher).apply(this, arguments));
		}

		_createClass(Switcher, [{
			key: 'attached',
			value: function attached() {
				this.on('click', this.handleClick);
			}
		}, {
			key: 'handleClick',
			value: function handleClick() {
				this.checked = !this.checked;
			}
		}, {
			key: 'syncChecked',
			value: function syncChecked(checked) {
				_dom2.default[checked ? 'addClasses' : 'removeClasses'](this.element, 'switcher-on');
			}
		}]);

		return Switcher;
	})(_Switcher2.default);

	Switcher.ELEMENT_CLASSES = 'switcher';
	Switcher.ATTRS = {
		checked: {
			validator: _core2.default.isBoolean,
			value: false
		}
	};

	_Switcher2.default.setImpl(Switcher);

	exports.default = Switcher;

	_JQueryAdapter2.default.register('switcher', Switcher);
});
//# sourceMappingURL=Switcher.js.map