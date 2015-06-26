define(['exports', 'module', 'metal/src/core', 'metal/src/dom/dom', 'metal/src/dom/features', 'metal/src/dom/events'], function (exports, module, _metalSrcCore, _metalSrcDomDom, _metalSrcDomFeatures, _metalSrcDomEvents) {
	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _core = _interopRequireDefault(_metalSrcCore);

	var _dom = _interopRequireDefault(_metalSrcDomDom);

	var _features = _interopRequireDefault(_metalSrcDomFeatures);

	var Anim = (function () {
		function Anim() {
			_classCallCheck(this, Anim);
		}

		_createClass(Anim, null, [{
			key: 'emulateEnd',

			/**
    * Emulates animation or transition end event, the end event with longer
    * duration will be used by the emulation. If they have the same value,
    * transitionend will be emulated.
    * @param {Element} element
    * @param {number} opt_durationMs
    * @return {object} Object containing `abort` function.
    */
			value: function emulateEnd(element, opt_durationMs) {
				if (this.getComputedDurationMs(element, 'animation') > this.getComputedDurationMs(element, 'transition')) {
					return this.emulateEnd_(element, 'animation', opt_durationMs);
				} else {
					return this.emulateEnd_(element, 'transition', opt_durationMs);
				}
			}
		}, {
			key: 'emulateAnimationEnd',

			/**
    * Emulates animation end event. If `opt_durationMs` not specified the value
    * will read from computed style for animation-duration.
    * @param {Element} element
    * @param {number} opt_durationMs
    * @return {object} Object containing `abort` function.
    */
			value: function emulateAnimationEnd(element, opt_durationMs) {
				return this.emulateEnd_(element, 'animation', opt_durationMs);
			}
		}, {
			key: 'emulateTransitionEnd',

			/**
    * Emulates transition end event. If `opt_durationMs` not specified the
    * value will read from computed style for transition-duration.
    * @param {Element} element
    * @param {number} opt_durationMs
    * @return {object} Object containing `abort` function.
    */
			value: function emulateTransitionEnd(element, opt_durationMs) {
				this.emulateEnd_(element, 'transition', opt_durationMs);
			}
		}, {
			key: 'emulateEnd_',

			/**
    * Emulates transition or animation end.
    * @param {Element} element
    * @param {string} type
    * @param {number} opt_durationMs
    * @return {object} Object containing `abort` function.
    * @protected
    */
			value: function emulateEnd_(element, type, opt_durationMs) {
				var duration = opt_durationMs;
				if (!_core['default'].isDef(opt_durationMs)) {
					duration = this.getComputedDurationMs(element, type);
				}

				var delayed = setTimeout(function () {
					_dom['default'].triggerEvent(element, _features['default'].checkAnimationEventName()[type]);
				}, duration);

				var abort = function abort() {
					clearTimeout(delayed);
					hoistedEvtHandler.removeListener();
				};
				var hoistedEvtHandler = _dom['default'].once(element, type + 'end', abort);

				return {
					abort: abort
				};
			}
		}, {
			key: 'getComputedDurationMs',

			/**
    * Gets computed style duration for duration.
    * @param {Element} element
    * @param {string} type
    * @return {number} The computed duration in milliseconds.
    */
			value: function getComputedDurationMs(element, type) {
				return (parseFloat(window.getComputedStyle(element, null).getPropertyValue(type + '-duration')) || 0) * 1000;
			}
		}]);

		return Anim;
	})();

	module.exports = Anim;
});