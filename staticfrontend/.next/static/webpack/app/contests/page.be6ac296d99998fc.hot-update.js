"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/contests/page",{

/***/ "(app-pages-browser)/./node_modules/next/dist/api/navigation.js":
/*!**************************************************!*\
  !*** ./node_modules/next/dist/api/navigation.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _client_components_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../client/components/navigation */ \"(app-pages-browser)/./node_modules/next/dist/client/components/navigation.js\");\n/* harmony import */ var _client_components_navigation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_client_components_navigation__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _client_components_navigation__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _client_components_navigation__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceMappingURL=navigation.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYXBpL25hdmlnYXRpb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdEOztBQUVoRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2FwaS9uYXZpZ2F0aW9uLmpzPzczYTAiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSBcIi4uL2NsaWVudC9jb21wb25lbnRzL25hdmlnYXRpb25cIjtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bmF2aWdhdGlvbi5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/next/dist/api/navigation.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/contests/page.tsx":
/*!*******************************!*\
  !*** ./app/contests/page.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _monaco_editor_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @monaco-editor/react */ \"(app-pages-browser)/./node_modules/@monaco-editor/react/dist/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst CodeEditor = ()=>{\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const initialCode = \"print('Hello, Python')\"; // No location.state in Next.js\n    const [code, setCode] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initialCode);\n    const [output, setOutput] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const handleRun = async ()=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"http://127.0.0.1:8000/api/submit-code/\", {\n                source_code: code,\n                stdin: \"\",\n                expected_output: \"\"\n            });\n            setOutput(response.data.stdout || response.data.stderr);\n        } catch (error) {\n            setOutput(\"Error executing code\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-8 bg-gray-900 h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-white text-2xl mb-4\",\n                children: \"Code Editor\"\n            }, void 0, false, {\n                fileName: \"I:\\\\Projects\\\\Harish\\\\staticfrontend\\\\app\\\\contests\\\\page.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_monaco_editor_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                height: \"400px\",\n                language: \"python\",\n                theme: \"vs-dark\",\n                value: code,\n                onChange: (value)=>setCode(value || \"\")\n            }, void 0, false, {\n                fileName: \"I:\\\\Projects\\\\Harish\\\\staticfrontend\\\\app\\\\contests\\\\page.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"mt-4 bg-blue-500 text-white px-4 py-2 rounded-md\",\n                onClick: handleRun,\n                children: \"Run Code\"\n            }, void 0, false, {\n                fileName: \"I:\\\\Projects\\\\Harish\\\\staticfrontend\\\\app\\\\contests\\\\page.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                className: \"text-white mt-4\",\n                children: [\n                    \"Output: \",\n                    output\n                ]\n            }, void 0, true, {\n                fileName: \"I:\\\\Projects\\\\Harish\\\\staticfrontend\\\\app\\\\contests\\\\page.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"I:\\\\Projects\\\\Harish\\\\staticfrontend\\\\app\\\\contests\\\\page.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CodeEditor, \"gozmXJZD5oNqGfiHH4A364RCiWw=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = CodeEditor;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CodeEditor);\nvar _c;\n$RefreshReg$(_c, \"CodeEditor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb250ZXN0cy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFNEM7QUFDWDtBQUNQO0FBQ2dCO0FBRTFDLE1BQU1JLGFBQWE7O0lBQ2pCLE1BQU1DLFNBQVNMLDBEQUFTQTtJQUN4QixNQUFNTSxjQUFjLDBCQUEwQiwrQkFBK0I7SUFDN0UsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdQLCtDQUFRQSxDQUFDSztJQUNqQyxNQUFNLENBQUNHLFFBQVFDLFVBQVUsR0FBR1QsK0NBQVFBLENBQUM7SUFFckMsTUFBTVUsWUFBWTtRQUNoQixJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNViw2Q0FBS0EsQ0FBQ1csSUFBSSxDQUFDLDBDQUEwQztnQkFDMUVDLGFBQWFQO2dCQUNiUSxPQUFPO2dCQUNQQyxpQkFBaUI7WUFDbkI7WUFDQU4sVUFBVUUsU0FBU0ssSUFBSSxDQUFDQyxNQUFNLElBQUlOLFNBQVNLLElBQUksQ0FBQ0UsTUFBTTtRQUN4RCxFQUFFLE9BQU9DLE9BQU87WUFDZFYsVUFBVTtRQUNaO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ1c7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUEyQjs7Ozs7OzBCQUN6Qyw4REFBQ25CLDREQUFNQTtnQkFBQ3FCLFFBQU87Z0JBQVFDLFVBQVM7Z0JBQVNDLE9BQU07Z0JBQVVDLE9BQU9wQjtnQkFBTXFCLFVBQVUsQ0FBQ0QsUUFBVW5CLFFBQVFtQixTQUFTOzs7Ozs7MEJBQzVHLDhEQUFDRTtnQkFBT1AsV0FBVTtnQkFBbURRLFNBQVNuQjswQkFBVzs7Ozs7OzBCQUd6Riw4REFBQ29CO2dCQUFJVCxXQUFVOztvQkFBa0I7b0JBQVNiOzs7Ozs7Ozs7Ozs7O0FBR2hEO0dBN0JNTDs7UUFDV0osc0RBQVNBOzs7S0FEcEJJO0FBK0JOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb250ZXN0cy9wYWdlLnRzeD9iNWFlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcblxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IEVkaXRvciBmcm9tIFwiQG1vbmFjby1lZGl0b3IvcmVhY3RcIjtcclxuXHJcbmNvbnN0IENvZGVFZGl0b3IgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgaW5pdGlhbENvZGUgPSBcInByaW50KCdIZWxsbywgUHl0aG9uJylcIjsgLy8gTm8gbG9jYXRpb24uc3RhdGUgaW4gTmV4dC5qc1xyXG4gIGNvbnN0IFtjb2RlLCBzZXRDb2RlXSA9IHVzZVN0YXRlKGluaXRpYWxDb2RlKTtcclxuICBjb25zdCBbb3V0cHV0LCBzZXRPdXRwdXRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVJ1biA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcImh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvc3VibWl0LWNvZGUvXCIsIHtcclxuICAgICAgICBzb3VyY2VfY29kZTogY29kZSxcclxuICAgICAgICBzdGRpbjogXCJcIixcclxuICAgICAgICBleHBlY3RlZF9vdXRwdXQ6IFwiXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRPdXRwdXQocmVzcG9uc2UuZGF0YS5zdGRvdXQgfHwgcmVzcG9uc2UuZGF0YS5zdGRlcnIpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0T3V0cHV0KFwiRXJyb3IgZXhlY3V0aW5nIGNvZGVcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicC04IGJnLWdyYXktOTAwIGgtc2NyZWVuXCI+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtMnhsIG1iLTRcIj5Db2RlIEVkaXRvcjwvaDI+XHJcbiAgICAgIDxFZGl0b3IgaGVpZ2h0PVwiNDAwcHhcIiBsYW5ndWFnZT1cInB5dGhvblwiIHRoZW1lPVwidnMtZGFya1wiIHZhbHVlPXtjb2RlfSBvbkNoYW5nZT17KHZhbHVlKSA9PiBzZXRDb2RlKHZhbHVlIHx8IFwiXCIpfSAvPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm10LTQgYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBweC00IHB5LTIgcm91bmRlZC1tZFwiIG9uQ2xpY2s9e2hhbmRsZVJ1bn0+XHJcbiAgICAgICAgUnVuIENvZGVcclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxwcmUgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBtdC00XCI+T3V0cHV0OiB7b3V0cHV0fTwvcHJlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvZGVFZGl0b3I7XHJcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiRWRpdG9yIiwiQ29kZUVkaXRvciIsInJvdXRlciIsImluaXRpYWxDb2RlIiwiY29kZSIsInNldENvZGUiLCJvdXRwdXQiLCJzZXRPdXRwdXQiLCJoYW5kbGVSdW4iLCJyZXNwb25zZSIsInBvc3QiLCJzb3VyY2VfY29kZSIsInN0ZGluIiwiZXhwZWN0ZWRfb3V0cHV0IiwiZGF0YSIsInN0ZG91dCIsInN0ZGVyciIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJoZWlnaHQiLCJsYW5ndWFnZSIsInRoZW1lIiwidmFsdWUiLCJvbkNoYW5nZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJwcmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/contests/page.tsx\n"));

/***/ })

});