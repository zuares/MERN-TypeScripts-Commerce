exports.id = "main";
exports.modules = {

/***/ "./src/controllers/AuthController.ts":
/*!*******************************************!*\
  !*** ./src/controllers/AuthController.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst Database_1 = __webpack_require__(/*! ./Database */ \"./src/controllers/Database.ts\");\nclass AuthController {\n    async register(req, res) {\n        try {\n            const { email, password } = req.body;\n            const user = await new Database_1.DB.Models.User({ email, password });\n            user.save(err => {\n                if (err) {\n                    return res.status(400).json({ message: err.message });\n                }\n                res.status(200).json({ message: \"Regiseter success\" });\n            });\n        }\n        catch (err) {\n            return res.status(500).json({ error: err.message });\n        }\n    }\n}\nexports.default = new AuthController();\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aENvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvQXV0aENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSx5Q0FBZ0M7QUFFaEMsTUFBTSxjQUFjO0lBRWYsS0FBSyxDQUFDLFFBQVEsQ0FBRSxHQUFXLEVBQUUsR0FBWTtRQUN0QyxJQUFJO1lBQ0EsTUFBTSxFQUFDLEtBQUssRUFBRSxRQUFRLEVBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1lBQ25DLE1BQU0sSUFBSSxHQUFJLE1BQU0sSUFBSSxhQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBQyxRQUFRLEVBQUMsQ0FBQyxDQUFDO1lBQ3pELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFBLEVBQUU7Z0JBQ1gsSUFBRyxHQUFHLEVBQUU7b0JBQ0osT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLE9BQU8sRUFBRyxHQUFHLENBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQTtpQkFDdkQ7Z0JBQ0QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDO1lBQzNELENBQUMsQ0FBQyxDQUFDO1NBRU47UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNWLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUcsR0FBRyxDQUFDLE9BQU8sRUFBQyxDQUFDLENBQUM7U0FDdEQ7SUFDTCxDQUFDO0NBR0o7QUFFRCxrQkFBZSxJQUFJLGNBQWMsRUFBRSxDQUFDIn0=\n\n//# sourceURL=webpack:///./src/controllers/AuthController.ts?");

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