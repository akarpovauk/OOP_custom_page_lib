/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/customizator.js":
/*!********************************!*\
  !*** ./src/js/customizator.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Customizator)
/* harmony export */ });
class Customizator {
  constructor() {
    this.btnBlock = document.createElement('div');
    this.colorPicker = document.createElement('input');
    this.btnBlock.addEventListener('click', e => this.onScaleChange(e));
    this.colorPicker.addEventListener('input', e => this.onColorChange(e));
  }
  onScaleChange(e) {
    let scale;
    const body = document.querySelector('body');
    if (e.target.value) {
      scale = +e.target.value.replace(/x/g, '');
    }
    function recursy(element) {
      element.childNodes.forEach(node => {
        if (node.nodeName === '#text' && node.nodeValue.replace(/\s+/g, '').length > 0) {
          if (!node.parentNode.getAttribute('data-fz')) {
            let value = window.getComputedStyle(node.parentNode, null).fontSize;
            node.parentNode.setAttribute('data-fz', +value.replace(/px/g, ''));
            node.parentNode.style.fontSize = node.parentNode.getAttribute('data-fz') * scale + 'px';
          } else {
            node.parentNode.style.fontSize = node.parentNode.getAttribute('data-fz') * scale + 'px';
          }
        } else {
          recursy(node);
        }
      });
    }
    recursy(body);
    console.log(scale);
  }
  onColorChange(e) {
    const body = document.querySelector('body');
    body.style.backgroundColor = e.target.value;
    console.log(e.target.value);
  }
  render() {
    let scaleInputS = document.createElement('input');
    let scaleInputM = document.createElement('input');
    let panel = document.createElement('div');
    scaleInputS.classList.add('scale_btn');
    scaleInputM.classList.add('scale_btn');
    panel.classList.add('panel');
    this.btnBlock.classList.add('scale');
    this.colorPicker.classList.add('color');
    scaleInputS.setAttribute('type', 'button');
    scaleInputS.setAttribute('value', '1x');
    scaleInputM.setAttribute('type', 'button');
    scaleInputM.setAttribute('value', '1.5x');
    this.colorPicker.setAttribute('type', 'color');
    this.colorPicker.setAttribute('value', '#ffffff');
    this.btnBlock.append(scaleInputS, scaleInputM);
    panel.append(this.btnBlock, this.colorPicker);
    document.querySelector('body').append(panel);
  }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _customizator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customizator */ "./src/js/customizator.js");

window.addEventListener('DOMContentLoaded', () => {
  const panel = new _customizator__WEBPACK_IMPORTED_MODULE_0__["default"]();
  panel.render();
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map