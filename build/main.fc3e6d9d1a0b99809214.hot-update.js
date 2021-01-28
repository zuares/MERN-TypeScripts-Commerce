exports.id = "main";
exports.modules = {

/***/ "./src/utils/Auth.ts":
/*!***************************!*\
  !*** ./src/utils/Auth.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst bcrypt_1 = __importDefault(__webpack_require__(/*! bcrypt */ \"bcrypt\"));\nconst jsonwebtoken_1 = __importDefault(__webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\"));\nclass Auth {\n    static async hashPassword(password, rounds) {\n        return await bcrypt_1.default.hash(password, rounds);\n    }\n    static async comparePassword(password, dbHash) {\n        return await bcrypt_1.default.compare(password, dbHash);\n    }\n    static createAccesToken(user) {\n        return jsonwebtoken_1.default.sign(user, String(process.env.ACCESS_TOKEN), { expiresIn: '1d' });\n    }\n    static createRefreshToken(user) {\n        return jsonwebtoken_1.default.sign(user, String(process.env.REFRESH_TOKEN), { expiresIn: '7d' });\n    }\n}\nexports.default = Auth;\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9BdXRoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsb0RBQTRCO0FBQzVCLGdFQUErQjtBQUUvQixNQUFxQixJQUFJO0lBRWQsTUFBTSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsUUFBZ0IsRUFBRSxNQUFhO1FBQzVELE9BQU8sTUFBTSxnQkFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVNLE1BQU0sQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLFFBQWdCLEVBQUMsTUFBYTtRQUM5RCxPQUFPLE1BQU0sZ0JBQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFDTSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsSUFBb0I7UUFDL0MsT0FBTyxzQkFBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBQyxTQUFTLEVBQUcsSUFBSSxFQUFDLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBRU0sTUFBTSxDQUFDLGtCQUFrQixDQUFDLElBQW9CO1FBQ2pELE9BQU8sc0JBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUMsU0FBUyxFQUFHLElBQUksRUFBQyxDQUFDLENBQUM7SUFDakYsQ0FBQztDQUVKO0FBakJELHVCQWlCQyJ9\n\n//# sourceURL=webpack:///./src/utils/Auth.ts?");

/***/ })

};