exports.id = "main";
exports.modules = {

/***/ "./src/controllers/AuthController.ts":
/*!*******************************************!*\
  !*** ./src/controllers/AuthController.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst Database_1 = __webpack_require__(/*! ./Database */ \"./src/controllers/Database.ts\");\nclass AuthController {\n    async register(req, res) {\n        try {\n            const { email, password } = req.body;\n            const user = await new Database_1.DB.Models.User({ email, password });\n            return res.json({ message: `Login success` });\n        }\n        catch (err) {\n            return res.status(500).json({ error: err.message });\n        }\n    }\n}\nexports.default = new AuthController();\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aENvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvQXV0aENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSx5Q0FBZ0M7QUFFaEMsTUFBTSxjQUFjO0lBRWYsS0FBSyxDQUFDLFFBQVEsQ0FBRSxHQUFXLEVBQUUsR0FBWTtRQUN0QyxJQUFJO1lBQ0EsTUFBTSxFQUFDLEtBQUssRUFBRSxRQUFRLEVBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1lBQ25DLE1BQU0sSUFBSSxHQUFJLE1BQU0sSUFBSSxhQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBQyxRQUFRLEVBQUMsQ0FBQyxDQUFDO1lBQ3pELE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFDLE9BQU8sRUFBRyxlQUFlLEVBQUMsQ0FBQyxDQUFDO1NBQ2hEO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDVixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFHLEdBQUcsQ0FBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDO1NBQ3REO0lBQ0wsQ0FBQztDQUdKO0FBRUQsa0JBQWUsSUFBSSxjQUFjLEVBQUUsQ0FBQyJ9\n\n//# sourceURL=webpack:///./src/controllers/AuthController.ts?");

/***/ }),

/***/ "./src/router/AuthRouter.ts":
/*!**********************************!*\
  !*** ./src/router/AuthRouter.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst BaseRouter_1 = __importDefault(__webpack_require__(/*! ./BaseRouter */ \"./src/router/BaseRouter.ts\"));\nconst AuthController_1 = __importDefault(__webpack_require__(/*! ./../controllers/AuthController */ \"./src/controllers/AuthController.ts\"));\nclass AuthRouter extends BaseRouter_1.default {\n    routes() {\n        this.router.post('/register', AuthController_1.default.register);\n    }\n}\nexports.default = new AuthRouter().router;\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aFJvdXRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXIvQXV0aFJvdXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDhEQUFzQztBQUV0QyxxRkFBNkQ7QUFHN0QsTUFBTSxVQUFXLFNBQVEsb0JBQVU7SUFFeEIsTUFBTTtRQUNULElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFFLFdBQVcsRUFBRSx3QkFBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVELENBQUM7Q0FFSjtBQUVELGtCQUFlLElBQUksVUFBVSxFQUFFLENBQUMsTUFBTSxDQUFDIn0=\n\n//# sourceURL=webpack:///./src/router/AuthRouter.ts?");

/***/ })

};