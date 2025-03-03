"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/practice/problems/[id]/page",{

/***/ "(app-pages-browser)/./components/code-editor.tsx":
/*!************************************!*\
  !*** ./components/code-editor.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"(app-pages-browser)/./node_modules/react-router/dist/development/chunk-HA7DTUK3.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _CodeEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CodeEditor */ \"(app-pages-browser)/./components/CodeEditor.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n // Adjust the import path as needed\nconst CodeEditorPage = ()=>{\n    var _location_state;\n    _s();\n    const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useLocation)();\n    const initialCode = ((_location_state = location.state) === null || _location_state === void 0 ? void 0 : _location_state.code) || \"print('Hello, Python')\";\n    const [code, setCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialCode);\n    const [output, setOutput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleRun = async ()=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"http://127.0.0.1:8000/api/submit-code/\", {\n                source_code: code,\n                stdin: \"\",\n                expected_output: \"\"\n            });\n            setOutput(response.data.stdout || response.data.stderr);\n        } catch (error) {\n            setOutput(\"Error executing code\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-8 bg-gray-900 h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-white text-2xl mb-4\",\n                children: \"Code Editor\"\n            }, void 0, false, {\n                fileName: \"I:\\\\Projects\\\\Harish\\\\staticfrontend\\\\components\\\\code-editor.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CodeEditor__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                language: \"python\",\n                value: code,\n                onChange: (value)=>setCode(value || \"\")\n            }, void 0, false, {\n                fileName: \"I:\\\\Projects\\\\Harish\\\\staticfrontend\\\\components\\\\code-editor.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"mt-4 bg-blue-500 text-white px-4 py-2 rounded-md\",\n                onClick: handleRun,\n                children: \"Run Code\"\n            }, void 0, false, {\n                fileName: \"I:\\\\Projects\\\\Harish\\\\staticfrontend\\\\components\\\\code-editor.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                className: \"text-white mt-4\",\n                children: [\n                    \"Output: \",\n                    output\n                ]\n            }, void 0, true, {\n                fileName: \"I:\\\\Projects\\\\Harish\\\\staticfrontend\\\\components\\\\code-editor.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"I:\\\\Projects\\\\Harish\\\\staticfrontend\\\\components\\\\code-editor.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CodeEditorPage, \"OOyycRSo3oGAJr9Q++GAOsgPLjM=\", false, function() {\n    return [\n        react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useLocation\n    ];\n});\n_c = CodeEditorPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CodeEditorPage);\nvar _c;\n$RefreshReg$(_c, \"CodeEditorPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvY29kZS1lZGl0b3IudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUErQztBQUNkO0FBQ1A7QUFDWSxDQUFDLG1DQUFtQztBQUUxRSxNQUFNSSxpQkFBaUI7UUFFREM7O0lBRHBCLE1BQU1BLFdBQVdMLDZEQUFXQTtJQUM1QixNQUFNTSxjQUFjRCxFQUFBQSxrQkFBQUEsU0FBU0UsS0FBSyxjQUFkRixzQ0FBQUEsZ0JBQWdCRyxJQUFJLEtBQUk7SUFDNUMsTUFBTSxDQUFDQSxNQUFNQyxRQUFRLEdBQUdSLCtDQUFRQSxDQUFDSztJQUNqQyxNQUFNLENBQUNJLFFBQVFDLFVBQVUsR0FBR1YsK0NBQVFBLENBQUM7SUFFckMsTUFBTVcsWUFBWTtRQUNoQixJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNWCw2Q0FBS0EsQ0FBQ1ksSUFBSSxDQUFDLDBDQUEwQztnQkFDMUVDLGFBQWFQO2dCQUNiUSxPQUFPO2dCQUNQQyxpQkFBaUI7WUFDbkI7WUFDQU4sVUFBVUUsU0FBU0ssSUFBSSxDQUFDQyxNQUFNLElBQUlOLFNBQVNLLElBQUksQ0FBQ0UsTUFBTTtRQUN4RCxFQUFFLE9BQU9DLE9BQU87WUFDZFYsVUFBVTtRQUNaO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ1c7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUEyQjs7Ozs7OzBCQUN6Qyw4REFBQ3BCLG1EQUFVQTtnQkFBQ3NCLFVBQVM7Z0JBQVNDLE9BQU9sQjtnQkFBTW1CLFVBQVUsQ0FBQ0QsUUFBa0JqQixRQUFRaUIsU0FBUzs7Ozs7OzBCQUN6Riw4REFBQ0U7Z0JBQU9MLFdBQVU7Z0JBQW1ETSxTQUFTakI7MEJBQVc7Ozs7OzswQkFHekYsOERBQUNrQjtnQkFBSVAsV0FBVTs7b0JBQWtCO29CQUFTYjs7Ozs7Ozs7Ozs7OztBQUdoRDtHQTdCTU47O1FBQ2FKLHlEQUFXQTs7O0tBRHhCSTtBQStCTiwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NvZGUtZWRpdG9yLnRzeD85ZGE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgQ29kZUVkaXRvciBmcm9tIFwiLi9Db2RlRWRpdG9yXCI7IC8vIEFkanVzdCB0aGUgaW1wb3J0IHBhdGggYXMgbmVlZGVkXHJcblxyXG5jb25zdCBDb2RlRWRpdG9yUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XHJcbiAgY29uc3QgaW5pdGlhbENvZGUgPSBsb2NhdGlvbi5zdGF0ZT8uY29kZSB8fCBcInByaW50KCdIZWxsbywgUHl0aG9uJylcIjtcclxuICBjb25zdCBbY29kZSwgc2V0Q29kZV0gPSB1c2VTdGF0ZShpbml0aWFsQ29kZSk7XHJcbiAgY29uc3QgW291dHB1dCwgc2V0T3V0cHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVSdW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXCJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL3N1Ym1pdC1jb2RlL1wiLCB7XHJcbiAgICAgICAgc291cmNlX2NvZGU6IGNvZGUsXHJcbiAgICAgICAgc3RkaW46IFwiXCIsXHJcbiAgICAgICAgZXhwZWN0ZWRfb3V0cHV0OiBcIlwiLFxyXG4gICAgICB9KTtcclxuICAgICAgc2V0T3V0cHV0KHJlc3BvbnNlLmRhdGEuc3Rkb3V0IHx8IHJlc3BvbnNlLmRhdGEuc3RkZXJyKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldE91dHB1dChcIkVycm9yIGV4ZWN1dGluZyBjb2RlXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInAtOCBiZy1ncmF5LTkwMCBoLXNjcmVlblwiPlxyXG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LTJ4bCBtYi00XCI+Q29kZSBFZGl0b3I8L2gyPlxyXG4gICAgICA8Q29kZUVkaXRvciBsYW5ndWFnZT1cInB5dGhvblwiIHZhbHVlPXtjb2RlfSBvbkNoYW5nZT17KHZhbHVlOiBzdHJpbmcpID0+IHNldENvZGUodmFsdWUgfHwgXCJcIil9IC8+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibXQtNCBiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHB4LTQgcHktMiByb3VuZGVkLW1kXCIgb25DbGljaz17aGFuZGxlUnVufT5cclxuICAgICAgICBSdW4gQ29kZVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPHByZSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIG10LTRcIj5PdXRwdXQ6IHtvdXRwdXR9PC9wcmU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29kZUVkaXRvclBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJ1c2VMb2NhdGlvbiIsInVzZVN0YXRlIiwiYXhpb3MiLCJDb2RlRWRpdG9yIiwiQ29kZUVkaXRvclBhZ2UiLCJsb2NhdGlvbiIsImluaXRpYWxDb2RlIiwic3RhdGUiLCJjb2RlIiwic2V0Q29kZSIsIm91dHB1dCIsInNldE91dHB1dCIsImhhbmRsZVJ1biIsInJlc3BvbnNlIiwicG9zdCIsInNvdXJjZV9jb2RlIiwic3RkaW4iLCJleHBlY3RlZF9vdXRwdXQiLCJkYXRhIiwic3Rkb3V0Iiwic3RkZXJyIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImxhbmd1YWdlIiwidmFsdWUiLCJvbkNoYW5nZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJwcmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/code-editor.tsx\n"));

/***/ })

});