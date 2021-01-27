exports.id = "main";
exports.modules = {

/***/ "./src/utils/Auth.ts":
/*!***************************!*\
  !*** ./src/utils/Auth.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst bcrypt_1 = __importDefault(__webpack_require__(/*! bcrypt */ \"bcrypt\"));\nclass Auth {\n    static hashPassword(password, rounds) {\n        return bcrypt_1.default.hash(password, rounds);\n    }\n    static comparePassword(password, dbHash) {\n        return bcrypt_1.default.compare(password, dbHash);\n    }\n}\nexports.default = Auth;\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9BdXRoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsb0RBQTRCO0FBRTVCLE1BQXFCLElBQUk7SUFFZCxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQWdCLEVBQUUsTUFBYTtRQUN0RCxPQUFPLGdCQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRU0sTUFBTSxDQUFDLGVBQWUsQ0FBQyxRQUFnQixFQUFDLE1BQWE7UUFDeEQsT0FBTyxnQkFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDNUMsQ0FBQztDQUNKO0FBVEQsdUJBU0MifQ==\n\n//# sourceURL=webpack:///./src/utils/Auth.ts?");

/***/ })

};