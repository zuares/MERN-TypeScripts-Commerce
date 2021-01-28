exports.id = "main";
exports.modules = {

/***/ "./src/router/ProductRouter.ts":
/*!*************************************!*\
  !*** ./src/router/ProductRouter.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst BaseRouter_1 = __importDefault(__webpack_require__(/*! ./BaseRouter */ \"./src/router/BaseRouter.ts\"));\nconst ProductController_1 = __importDefault(__webpack_require__(/*! ../controllers/ProductController */ \"./src/controllers/ProductController.ts\"));\nclass ProductRouter extends BaseRouter_1.default {\n    routes() {\n        this.router.get('/', ProductController_1.default.index);\n        this.router.get('/:id', ProductController_1.default.show);\n        this.router.post('/', ProductController_1.default.create);\n    }\n}\nexports.default = new ProductRouter().router;\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZHVjdFJvdXRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXIvUHJvZHVjdFJvdXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDhEQUFzQztBQUd0Qyx5RkFBaUU7QUFHakUsTUFBTSxhQUFjLFNBQVEsb0JBQVU7SUFFM0IsTUFBTTtRQUNULElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFFLEdBQUcsRUFBRSwyQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBRSxNQUFNLEVBQUUsMkJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUUsR0FBRyxFQUFFLDJCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JELENBQUM7Q0FFSjtBQUVELGtCQUFlLElBQUksYUFBYSxFQUFFLENBQUMsTUFBTSxDQUFDIn0=\n\n//# sourceURL=webpack:///./src/router/ProductRouter.ts?");

/***/ })

};