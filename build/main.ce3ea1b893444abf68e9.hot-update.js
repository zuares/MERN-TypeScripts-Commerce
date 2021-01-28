exports.id = "main";
exports.modules = {

/***/ "./src/controllers/PaymentController.ts":
/*!**********************************************!*\
  !*** ./src/controllers/PaymentController.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (18:38)\\nFile was processed with these loaders:\\n * ./node_modules/ts-loader/index.js\\nYou may need an additional loader to handle the result of these loaders.\\n|             const { id } = res.locals.payload;\\n|             const user = await Database_1.DB.Models.User.findById(id);\\n>             const { name, _id, email };\\n|             if (!user)\\n|                 return res.status(400).json({ message: 'User doesnt exists' });\");\n\n//# sourceURL=webpack:///./src/controllers/PaymentController.ts?");

/***/ }),

/***/ "./src/router/PaymentRouter.ts":
/*!*************************************!*\
  !*** ./src/router/PaymentRouter.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst BaseRouter_1 = __importDefault(__webpack_require__(/*! ./BaseRouter */ \"./src/router/BaseRouter.ts\"));\nconst AuthMiddleware_1 = __webpack_require__(/*! ../middleware/AuthMiddleware */ \"./src/middleware/AuthMiddleware.ts\");\nconst PaymentController_1 = __importDefault(__webpack_require__(/*! ../controllers/PaymentController */ \"./src/controllers/PaymentController.ts\"));\nclass PaymentRouter extends BaseRouter_1.default {\n    routes() {\n        this.router.post('/', AuthMiddleware_1.cekLog, PaymentController_1.default.createPayment);\n        this.router.get('/', AuthMiddleware_1.cekLog, AuthMiddleware_1.cekAdmin, PaymentController_1.default.getPayment);\n    }\n}\nexports.default = new PaymentRouter().router;\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGF5bWVudFJvdXRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXIvUGF5bWVudFJvdXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDhEQUFzQztBQUd0QyxpRUFBZ0U7QUFDaEUseUZBQWlFO0FBR2pFLE1BQU0sYUFBYyxTQUFRLG9CQUFVO0lBRTNCLE1BQU07UUFDVCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBRSxHQUFHLEVBQUUsdUJBQU0sRUFBRSwyQkFBaUIsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBRSxHQUFHLEVBQUUsdUJBQU0sRUFBRSx5QkFBUSxFQUFFLDJCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzFFLENBQUM7Q0FFSjtBQUVELGtCQUFlLElBQUksYUFBYSxFQUFFLENBQUMsTUFBTSxDQUFDIn0=\n\n//# sourceURL=webpack:///./src/router/PaymentRouter.ts?");

/***/ })

};