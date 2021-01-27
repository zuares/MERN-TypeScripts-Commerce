exports.id = "main";
exports.modules = {

/***/ "./src/controllers/AuthController.ts":
/*!*******************************************!*\
  !*** ./src/controllers/AuthController.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nclass AuthController {\n    constructor() {\n        this.login = async (res, req) => {\n            try {\n                return res.json({ message: `Login success` });\n            }\n            catch (err) {\n                return res.status(500).json({ error: err.message });\n            }\n        };\n    }\n}\nexports.default = new AuthController();\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aENvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvQXV0aENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSxNQUFNLGNBQWM7SUFBcEI7UUFFSyxVQUFLLEdBQUcsS0FBSyxFQUFFLEdBQVksRUFBRSxHQUFXLEVBQW1CLEVBQUU7WUFDMUQsSUFBSTtnQkFFQSxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBQyxPQUFPLEVBQUcsZUFBZSxFQUFDLENBQUMsQ0FBQzthQUNoRDtZQUFDLE9BQU8sR0FBRyxFQUFFO2dCQUNWLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUcsR0FBRyxDQUFDLE9BQU8sRUFBQyxDQUFDLENBQUM7YUFDdEQ7UUFDTCxDQUFDLENBQUE7SUFFTCxDQUFDO0NBQUE7QUFFRCxrQkFBZSxJQUFJLGNBQWMsRUFBRSxDQUFDIn0=\n\n//# sourceURL=webpack:///./src/controllers/AuthController.ts?");

/***/ }),

/***/ "./src/router/AuthRouter.ts":
/*!**********************************!*\
  !*** ./src/router/AuthRouter.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst BaseRouter_1 = __importDefault(__webpack_require__(/*! ./BaseRouter */ \"./src/router/BaseRouter.ts\"));\nconst AuthController_1 = __importDefault(__webpack_require__(/*! ./../controllers/AuthController */ \"./src/controllers/AuthController.ts\"));\nclass AuthRouter extends BaseRouter_1.default {\n    routes() {\n        this.router.get('/login', AuthController_1.default.login);\n    }\n}\nexports.default = new AuthRouter().router;\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aFJvdXRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXIvQXV0aFJvdXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDhEQUFzQztBQUV0QyxxRkFBNkQ7QUFHN0QsTUFBTSxVQUFXLFNBQVEsb0JBQVU7SUFFeEIsTUFBTTtRQUNULElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFFLFFBQVEsRUFBRSx3QkFBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JELENBQUM7Q0FFSjtBQUVELGtCQUFlLElBQUksVUFBVSxFQUFFLENBQUMsTUFBTSxDQUFDIn0=\n\n//# sourceURL=webpack:///./src/router/AuthRouter.ts?");

/***/ })

};