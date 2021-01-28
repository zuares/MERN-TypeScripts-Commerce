exports.id = "main";
exports.modules = {

/***/ "./src/router/ProductRouter.ts":
/*!*************************************!*\
  !*** ./src/router/ProductRouter.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst BaseRouter_1 = __importDefault(__webpack_require__(/*! ./BaseRouter */ \"./src/router/BaseRouter.ts\"));\nconst ProductController_1 = __importDefault(__webpack_require__(/*! ../controllers/ProductController */ \"./src/controllers/ProductController.ts\"));\nconst AuthMiddleware_1 = __webpack_require__(/*! ../middleware/AuthMiddleware */ \"./src/middleware/AuthMiddleware.ts\");\nclass ProductRouter extends BaseRouter_1.default {\n    routes() {\n        this.router.get('/', ProductController_1.default.index);\n        this.router.get('/:id', ProductController_1.default.show);\n        this.router.post('/', AuthMiddleware_1.cekLog, AuthMiddleware_1.cekAdmin, ProductController_1.default.create);\n        this.router.put('/:id', AuthMiddleware_1.cekLog, AuthMiddleware_1.cekAdmin, ProductController_1.default.update);\n        this.router.delete('/:id', AuthMiddleware_1.cekLog, AuthMiddleware_1.cekAdmin, ProductController_1.default.delete);\n    }\n}\nexports.default = new ProductRouter().router;\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZHVjdFJvdXRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXIvUHJvZHVjdFJvdXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDhEQUFzQztBQUV0Qyx5RkFBaUU7QUFDakUsaUVBQWdFO0FBR2hFLE1BQU0sYUFBYyxTQUFRLG9CQUFVO0lBRTNCLE1BQU07UUFDVCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBRSxHQUFHLEVBQUUsMkJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUUsTUFBTSxFQUFFLDJCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFFLEdBQUcsRUFBRSx1QkFBTSxFQUFFLHlCQUFRLEVBQUUsMkJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUUsTUFBTSxFQUFFLHVCQUFNLEVBQUUseUJBQVEsRUFBRSwyQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBRSxNQUFNLEVBQUUsdUJBQU0sRUFBRSx5QkFBUSxFQUFFLDJCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVFLENBQUM7Q0FFSjtBQUVELGtCQUFlLElBQUksYUFBYSxFQUFFLENBQUMsTUFBTSxDQUFDIn0=\n\n//# sourceURL=webpack:///./src/router/ProductRouter.ts?");

/***/ })

};