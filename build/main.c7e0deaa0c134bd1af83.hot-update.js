exports.id = "main";
exports.modules = {

/***/ "./src/middleware/AuthMiddleware.ts":
/*!******************************************!*\
  !*** ./src/middleware/AuthMiddleware.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.cekLog = void 0;\nconst jsonwebtoken_1 = __importDefault(__webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\"));\nconst Database_1 = __webpack_require__(/*! ../controllers/Database */ \"./src/controllers/Database.ts\");\nconst cekLog = async (req, res, next) => {\n    try {\n        const token = req.header('Authorization');\n        if (!token)\n            return res.status(400).json({ message: \"Invalid Auth\" });\n        const decoded = jsonwebtoken_1.default.verify(token, String(process.env.ACCESS_TOKEN));\n        if (!decoded)\n            return res.status(400).json({ error: \"Invalid Auth\" });\n        const user = await Database_1.DB.Models.User.findOne({ _id: decoded.id }).select('-password');\n        req.user = user;\n        return next();\n    }\n    catch (err) {\n        return res.status(500).json({ error: err.message });\n    }\n};\nexports.cekLog = cekLog;\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aE1pZGRsZXdhcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbWlkZGxld2FyZS9BdXRoTWlkZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxnRUFBK0I7QUFDL0Isc0RBQTJDO0FBRXBDLE1BQU0sTUFBTSxHQUFHLEtBQUssRUFBRSxHQUFzRSxFQUFFLEdBQWMsRUFBRSxJQUFpQixFQUFHLEVBQUU7SUFDdkksSUFBSTtRQUNBLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLEtBQUs7WUFBRSxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxDQUFDLENBQUM7UUFDckUsTUFBTSxPQUFPLEdBQU8sc0JBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDeEUsSUFBRyxDQUFDLE9BQU87WUFBRSxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFHLGNBQWMsRUFBQyxDQUFDLENBQUM7UUFDbkUsTUFBTSxJQUFJLEdBQUcsTUFBTSxhQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQ2hGLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLE9BQU8sSUFBSSxFQUFFLENBQUM7S0FDakI7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNWLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7S0FDdkQ7QUFDTCxDQUFDLENBQUE7QUFaWSxRQUFBLE1BQU0sVUFZbEIifQ==\n\n//# sourceURL=webpack:///./src/middleware/AuthMiddleware.ts?");

/***/ }),

/***/ "./src/router/ProductRouter.ts":
/*!*************************************!*\
  !*** ./src/router/ProductRouter.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst BaseRouter_1 = __importDefault(__webpack_require__(/*! ./BaseRouter */ \"./src/router/BaseRouter.ts\"));\nconst ProductController_1 = __importDefault(__webpack_require__(/*! ../controllers/ProductController */ \"./src/controllers/ProductController.ts\"));\nconst AuthMiddleware_1 = __webpack_require__(/*! ../middleware/AuthMiddleware */ \"./src/middleware/AuthMiddleware.ts\");\nclass ProductRouter extends BaseRouter_1.default {\n    routes() {\n        this.router.get('/', ProductController_1.default.index);\n        this.router.get('/:id', ProductController_1.default.show);\n        this.router.post('/', AuthMiddleware_1.cekLog, ProductController_1.default.create);\n    }\n}\nexports.default = new ProductRouter().router;\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZHVjdFJvdXRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXIvUHJvZHVjdFJvdXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDhEQUFzQztBQUV0Qyx5RkFBaUU7QUFDakUsaUVBQXNEO0FBR3RELE1BQU0sYUFBYyxTQUFRLG9CQUFVO0lBRTNCLE1BQU07UUFDVCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBRSxHQUFHLEVBQUUsMkJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUUsTUFBTSxFQUFFLDJCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFFLEdBQUcsRUFBRSx1QkFBTSxFQUFFLDJCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdELENBQUM7Q0FFSjtBQUVELGtCQUFlLElBQUksYUFBYSxFQUFFLENBQUMsTUFBTSxDQUFDIn0=\n\n//# sourceURL=webpack:///./src/router/ProductRouter.ts?");

/***/ })

};