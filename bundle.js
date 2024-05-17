/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/Baveuse.woff */ \"./src/assets/fonts/Baveuse.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/Baveuse.woff2 */ \"./src/assets/fonts/Baveuse.woff2\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/Archer Background.jpg */ \"./src/assets/images/Archer Background.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n  font-family: 'Baveuse';\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('woff'),\n       url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('woff2');\n  font-weight: normal;\n  font-style: normal;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml, body {\n  height: 100%;\n  overflow: hidden;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\n  background-color: rgba(0, 0, 0, 0.425);\n  background-size: cover; \n  background-position: center;\n  background-repeat: no-repeat;\n  margin: 0;\n  height: 100vh;\n  overflow: hidden;\n}\n\n.transition-image {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; \n  object-fit: cover;\n  opacity: 0;\n  z-index: 10000; \n  animation: fadeIn 0.5s forwards, slideRight 1s 0.5s forwards;\n}\n\n@keyframes fadeIn {\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes slideRight {\n  to {\n    transform: translateX(100%);\n  }\n}\n\nnav {\n  background-color: rgba(15, 15, 15, 0.788);\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  gap: 70px;\n  padding: 10px;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 1000;\n}\n\nnav p {\n  font-family: 'Baveuse';\n  font-size: 50px;\n  color: white;\n  cursor: pointer;\n  transition: transform 0.1s ease, color 0.1s ease;\n}\n\nnav p:hover {\n  transform: scale(1.1);\n  color: #ccc;\n}\n\n#content {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  padding: 80px 20px; \n  overflow: hidden; \n}\n\n.home {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  flex: 1;\n  width: 100%;\n}\n\n.headline {\n  font-family: 'Baveuse';\n  font-size: 40px;\n  color: #333;\n  text-shadow:\n    -1px -1px 0 #fff,\n    1px -1px 0 #fff,\n    -1px 1px 0 #fff,\n    1px 1px 0 #fff;\n}\n\n.description {\n  font-size: 20px;\n  color: #666;\n}\n\n.woodhouse-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: 1;\n  width: 100%;\n  position: relative; \n}\n\n.woodhouse-image {\n  max-width: 100%;\n  max-height: calc(100vh - 200px);\n  height: auto;\n  width: auto;\n}\n\n.speech-bubble {\n  display: none;\n  position: absolute;\n  left: 60%;\n  top: 20%;\n  transform: translateY(-50%);\n  background-color: white;\n  border: 2px solid black;\n  border-radius: 5px;\n  padding: 10px;\n  font-family: 'Baveuse';\n  font-size: 16px;\n  color: black;\n  width: 200px;\n  text-align: center;\n  z-index: 1000;\n}\n\n.speech-bubble::after {\n  content: '';\n  position: absolute;\n  top: 50%;\n  right: 100%; \n  transform: translateY(-50%);\n  border-width: 10px;\n  border-style: solid;\n  border-color: transparent white transparent transparent;\n}\n\n.woodhouse-container:hover .speech-bubble {\n  display: block;\n}\n\n.menu-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center; \n  width: 100%;\n  max-width: 1200px;\n  height: 100%;\n  padding-top: 20px;\n}\n\n.menu-column {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  width: 20%;\n  padding: 10px;\n  border-radius: 5px;\n  align-items: center; \n}\n\n.menu-column img {\n  width: 100%; \n  max-width: 200px; \n  height: 150px; \n  object-fit: contain; \n  transition: transform 0.3s ease;\n}\n\n.menu-column img:hover {\n  transform: scale(1.3);\n}\n\n.about-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n}\n\n.woodhouse-about-image {\n  max-width: 30%;\n  height: auto;\n}\n\n.about-text-box {\n  width: 60%;\n  background-color: rgba(32, 32, 32, 0.9);\n  border-radius: 10px;\n  padding: 30px;\n  color: #e0e0e0;\n  text-align: left;\n  font-family: 'Roboto', sans-serif;\n}\n\n.about-text-box h2 {\n  text-align: center;\n}\n\nfooter {\n  background-color: rgba(15, 15, 15, 0.788);\n  color: white;\n  text-align: center;\n  padding: 10px;\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  z-index: 1000;\n}\n\nfooter p {\n  font-family: 'Baveuse';\n  margin: 0;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _modules_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/nav */ \"./src/modules/nav.js\");\n/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/home */ \"./src/modules/home.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/about */ \"./src/modules/about.js\");\n/* harmony import */ var _assets_images_Archer_Transition_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/images/Archer Transition.png */ \"./src/assets/images/Archer Transition.png\");\n/* harmony import */ var _assets_images_Archer_Transition_2_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/images/Archer Transition 2.png */ \"./src/assets/images/Archer Transition 2.png\");\n/* harmony import */ var _assets_images_Archer_Transition_3_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/images/Archer Transition 3.png */ \"./src/assets/images/Archer Transition 3.png\");\n/* harmony import */ var _assets_images_Archer_Transition_4_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/images/Archer Transition 4.png */ \"./src/assets/images/Archer Transition 4.png\");\n/* harmony import */ var _assets_images_Woodhouse_transparent_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/images/Woodhouse transparent.png */ \"./src/assets/images/Woodhouse transparent.png\");\n\n\n\n\n\n\n\n\n\n \n\n\nconst transitionImages = [\n  _assets_images_Archer_Transition_png__WEBPACK_IMPORTED_MODULE_5__,\n  _assets_images_Archer_Transition_2_png__WEBPACK_IMPORTED_MODULE_6__,\n  _assets_images_Archer_Transition_3_png__WEBPACK_IMPORTED_MODULE_7__,\n  _assets_images_Archer_Transition_4_png__WEBPACK_IMPORTED_MODULE_8__,\n];\n\nfunction getRandomTransitionImage() {\n  const randomIndex = Math.floor(Math.random() * transitionImages.length);\n  return transitionImages[randomIndex];\n}\n\nfunction createTransitionImage(callback) {\n  const img = document.createElement('img');\n  img.src = getRandomTransitionImage();\n  img.classList.add('transition-image');\n  document.body.appendChild(img);\n\n  \n  img.addEventListener('animationend', (event) => {\n    if (event.animationName === 'fadeIn') {\n      callback(); \n    }\n  });\n\n  \n  img.addEventListener('animationend', (event) => {\n    if (event.animationName === 'slideRight') {\n      img.remove();\n    }\n  });\n}\n\nfunction addWoodhouseImage() {\n  \n  const woodhouseContainer = document.createElement('div');\n  woodhouseContainer.classList.add('woodhouse-container');\n\n  const woodhouseImg = document.createElement('img');\n  woodhouseImg.src = _assets_images_Woodhouse_transparent_png__WEBPACK_IMPORTED_MODULE_9__;\n  woodhouseImg.classList.add('woodhouse-image');\n  woodhouseContainer.appendChild(woodhouseImg);\n\n  const speechBubble = document.createElement('div');\n  speechBubble.classList.add('speech-bubble');\n  speechBubble.innerText = \"I shall fetch a rug!\";\n  woodhouseContainer.appendChild(speechBubble);\n\n  const content = document.getElementById('content');\n  content.appendChild(woodhouseContainer);\n}\n\nfunction initialize() {\n  (0,_modules_nav__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n  const homeTab = document.querySelector('nav p:nth-child(1)');\n  const menuTab = document.querySelector('nav p:nth-child(2)');\n  const aboutTab = document.querySelector('nav p:nth-child(3)');\n\n  homeTab.addEventListener('click', () => {\n    createTransitionImage(() => {\n      (0,_modules_home__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n      addWoodhouseImage();\n    });\n  });\n\n  menuTab.addEventListener('click', () => {\n    createTransitionImage(() => {\n      (0,_modules_menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    });\n  });\n\n  aboutTab.addEventListener('click', () => {\n    createTransitionImage(() => {\n      (0,_modules_about__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    });\n  });\n\n  (0,_modules_home__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  addWoodhouseImage();\n\n  const footer = document.createElement('footer');\n  footer.innerHTML = '<p>Built by Aurorn</p>';\n  document.body.appendChild(footer);\n}\n\ndocument.addEventListener('DOMContentLoaded', initialize);\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/modules/about.js":
/*!******************************!*\
  !*** ./src/modules/about.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_images_Woodhouse_transparent_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/Woodhouse transparent.png */ \"./src/assets/images/Woodhouse transparent.png\");\n\n\nfunction loadAbout() {\n  const content = document.getElementById('content');\n  content.innerHTML = '';\n\n  const aboutContainer = document.createElement('div');\n  aboutContainer.classList.add('about-container');\n\n  const woodhouseImg = document.createElement('img');\n  woodhouseImg.src = _assets_images_Woodhouse_transparent_png__WEBPACK_IMPORTED_MODULE_0__;\n  woodhouseImg.classList.add('woodhouse-about-image');\n  aboutContainer.appendChild(woodhouseImg);\n\n  const textBox = document.createElement('div');\n  textBox.classList.add('about-text-box');\n  textBox.innerHTML = `\n    <h2>About This Website</h2>\n    <br>\n    <p>This website was built as instructed by the Odin Project:</p>\n    <br>\n    <ul>\n      <li><strong>npm init</strong>: Initialized the project and created a <code>package.json</code> file.</li>\n      <li><strong>webpack</strong>: Bundled JavaScript modules and assets for efficient loading.</li>\n      <li><strong>JavaScript</strong>: Dynamically added content to the HTML using modular JavaScript.</li>\n      <li><strong>CSS</strong>: Styled the website with custom fonts, layouts, and animations.</li>\n    </ul><br>\n    <p>The website features tabbed browsing to navigate between the Home, Menu, and About sections. Each section is dynamically loaded using JavaScript modules.</p>\n  `;\n  aboutContainer.appendChild(textBox);\n\n  content.appendChild(aboutContainer);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadAbout);\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/about.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHome)\n/* harmony export */ });\nfunction loadHome() {\n  const content = document.getElementById('content');\n  content.innerHTML = '';\n\n  const container = document.createElement('div');\n  container.classList.add('home');\n\n  const headline = document.createElement('h1');\n  headline.textContent = 'Welcome to Master Sterlings Restaurant';\n  headline.classList.add('headline');\n\n  const description = document.createElement('p');\n  description.textContent = '';\n  description.classList.add('description');\n\n  container.appendChild(headline);\n  container.appendChild(description);\n  content.appendChild(container);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_images_Eggs_woodhouse_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/Eggs woodhouse.png */ \"./src/assets/images/Eggs woodhouse.png\");\n/* harmony import */ var _assets_images_Glengoolie_blue_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/Glengoolie blue.png */ \"./src/assets/images/Glengoolie blue.png\");\n/* harmony import */ var _assets_images_Hurricane_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/Hurricane.png */ \"./src/assets/images/Hurricane.png\");\n/* harmony import */ var _assets_images_Woodhouse_transparent_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/Woodhouse transparent.png */ \"./src/assets/images/Woodhouse transparent.png\");\n\n\n\n\n\n\n\n\nfunction createMenuItem(src, description) {\n  const img = document.createElement('img');\n  img.src = src;\n  img.alt = description;\n  img.addEventListener('click', () => {\n    const speechBubble = document.querySelector('.speech-bubble');\n    speechBubble.innerText = description;\n    speechBubble.style.display = 'block';\n  });\n  return img;\n}\n\nfunction loadMenu() {\n  const content = document.getElementById('content');\n  content.innerHTML = '';\n\n  const menuContainer = document.createElement('div');\n  menuContainer.classList.add('menu-container');\n\n  const foodColumn = document.createElement('div');\n  foodColumn.classList.add('menu-column');\n\n  const drinkColumn = document.createElement('div');\n  drinkColumn.classList.add('menu-column');\n\n  const foodItems = [\n    { src: _assets_images_Eggs_woodhouse_png__WEBPACK_IMPORTED_MODULE_0__, description: 'Delicious Eggs prepared by Woodhouse' },\n    { src: _assets_images_Eggs_woodhouse_png__WEBPACK_IMPORTED_MODULE_0__, description: 'Scrambled Eggs with a touch of parsley' },\n    { src: _assets_images_Eggs_woodhouse_png__WEBPACK_IMPORTED_MODULE_0__, description: 'Eggs Benedict with hollandaise sauce' },\n  ];\n\n  foodItems.forEach(item => {\n    const img = createMenuItem(item.src, item.description);\n    foodColumn.appendChild(img);\n  });\n\n  const drinkItems = [\n    { src: _assets_images_Glengoolie_blue_png__WEBPACK_IMPORTED_MODULE_1__, description: 'Glengoolie Blue - Aged 25 years' },\n    { src: _assets_images_Hurricane_png__WEBPACK_IMPORTED_MODULE_2__, description: 'Hurricane Cocktail - A tropical delight' },\n    { src: _assets_images_Hurricane_png__WEBPACK_IMPORTED_MODULE_2__, description: 'Hurricane Cocktail - Another one for good measure' },\n  ];\n\n  drinkItems.forEach(item => {\n    const img = createMenuItem(item.src, item.description);\n    drinkColumn.appendChild(img);\n  });\n\n  const woodhouseContainer = document.createElement('div');\n  woodhouseContainer.classList.add('woodhouse-container');\n\n  const woodhouseImg = document.createElement('img');\n  woodhouseImg.src = _assets_images_Woodhouse_transparent_png__WEBPACK_IMPORTED_MODULE_3__;\n  woodhouseImg.classList.add('woodhouse-image');\n  woodhouseContainer.appendChild(woodhouseImg);\n\n  const speechBubble = document.createElement('div');\n  speechBubble.classList.add('speech-bubble');\n  speechBubble.innerText = \"Click a menu item to learn more!\";\n  woodhouseContainer.appendChild(speechBubble);\n\n  menuContainer.appendChild(foodColumn);\n  menuContainer.appendChild(woodhouseContainer); \n  menuContainer.appendChild(drinkColumn);\n  content.appendChild(menuContainer);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/nav.js":
/*!****************************!*\
  !*** ./src/modules/nav.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadNav)\n/* harmony export */ });\nfunction loadNav() {\n  const header = document.querySelector('header');\n\n  const nav = document.createElement('nav');\n\n  const homeTab = document.createElement('p');\n  homeTab.textContent = 'Home';\n\n  const menuTab = document.createElement('p');\n  menuTab.textContent = 'Menu';\n\n  const aboutTab = document.createElement('p');\n  aboutTab.textContent = 'About';\n\n  nav.appendChild(homeTab);\n  nav.appendChild(menuTab);\n  nav.appendChild(aboutTab);\n\n  header.appendChild(nav);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/nav.js?");

/***/ }),

/***/ "./src/assets/fonts/Baveuse.woff":
/*!***************************************!*\
  !*** ./src/assets/fonts/Baveuse.woff ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"75945f47afb88bd00119.woff\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/fonts/Baveuse.woff?");

/***/ }),

/***/ "./src/assets/fonts/Baveuse.woff2":
/*!****************************************!*\
  !*** ./src/assets/fonts/Baveuse.woff2 ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"78b5905e96b66d03100b.woff2\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/fonts/Baveuse.woff2?");

/***/ }),

/***/ "./src/assets/images/Archer Background.jpg":
/*!*************************************************!*\
  !*** ./src/assets/images/Archer Background.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1e089ddd0b4f5203433d.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/Archer_Background.jpg?");

/***/ }),

/***/ "./src/assets/images/Archer Transition 2.png":
/*!***************************************************!*\
  !*** ./src/assets/images/Archer Transition 2.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9074c4599b2d94660fac.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/Archer_Transition_2.png?");

/***/ }),

/***/ "./src/assets/images/Archer Transition 3.png":
/*!***************************************************!*\
  !*** ./src/assets/images/Archer Transition 3.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d85f18c2c2a7378c069a.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/Archer_Transition_3.png?");

/***/ }),

/***/ "./src/assets/images/Archer Transition 4.png":
/*!***************************************************!*\
  !*** ./src/assets/images/Archer Transition 4.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9fbf8fffb91c534a7239.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/Archer_Transition_4.png?");

/***/ }),

/***/ "./src/assets/images/Archer Transition.png":
/*!*************************************************!*\
  !*** ./src/assets/images/Archer Transition.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"33cf16617eba63cae0ab.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/Archer_Transition.png?");

/***/ }),

/***/ "./src/assets/images/Eggs woodhouse.png":
/*!**********************************************!*\
  !*** ./src/assets/images/Eggs woodhouse.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e9a74294a9952ebc8606.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/Eggs_woodhouse.png?");

/***/ }),

/***/ "./src/assets/images/Glengoolie blue.png":
/*!***********************************************!*\
  !*** ./src/assets/images/Glengoolie blue.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"45aaa47535d7f757e32b.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/Glengoolie_blue.png?");

/***/ }),

/***/ "./src/assets/images/Hurricane.png":
/*!*****************************************!*\
  !*** ./src/assets/images/Hurricane.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fb1fd06a9df987241609.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/Hurricane.png?");

/***/ }),

/***/ "./src/assets/images/Woodhouse transparent.png":
/*!*****************************************************!*\
  !*** ./src/assets/images/Woodhouse transparent.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e8b89827d6615aee6307.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/Woodhouse_transparent.png?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;