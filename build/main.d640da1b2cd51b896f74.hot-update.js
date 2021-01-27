exports.id = "main";
exports.modules = {

/***/ "./src/controllers/AuthController.ts":
/*!*******************************************!*\
  !*** ./src/controllers/AuthController.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst Database_1 = __webpack_require__(/*! ./Database */ \"./src/controllers/Database.ts\");\nclass AuthController {\n    async register(req, res) {\n        try {\n            const { name, email, password } = req.body;\n            const user = await Database_1.DB.Models.User.findOne({ email });\n            if (user)\n                return res.status(400).json({ message: `Email already exists` });\n            const newUser = await new Database_1.DB.Models.User({ name, email, password });\n            newUser.save();\n            return res.status(400).json({ message: \"Regiseter success\" });\n        }\n        catch (err) {\n            return res.status(500).json({ error: err.message });\n        }\n    }\n}\nexports.default = new AuthController();\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aENvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvQXV0aENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSx5Q0FBZ0M7QUFFaEMsTUFBTSxjQUFjO0lBRWYsS0FBSyxDQUFDLFFBQVEsQ0FBRSxHQUFXLEVBQUUsR0FBWTtRQUN0QyxJQUFJO1lBQ0EsTUFBTSxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztZQUN6QyxNQUFNLElBQUksR0FBRyxNQUFNLGFBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUM7WUFDbkQsSUFBRyxJQUFJO2dCQUFFLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxPQUFPLEVBQUcsc0JBQXNCLEVBQUMsQ0FBQyxDQUFDO1lBRXpFLE1BQU0sT0FBTyxHQUFJLE1BQU0sSUFBSSxhQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFBQyxLQUFLLEVBQUMsUUFBUSxFQUFDLENBQUMsQ0FBQztZQUNqRSxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDZixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLENBQUMsQ0FBQztTQUNqRTtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1YsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRyxHQUFHLENBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQztTQUN0RDtJQUNMLENBQUM7Q0FHSjtBQUVELGtCQUFlLElBQUksY0FBYyxFQUFFLENBQUMifQ==\n\n//# sourceURL=webpack:///./src/controllers/AuthController.ts?");

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