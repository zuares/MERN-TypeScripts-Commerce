exports.id = "main";
exports.modules = {

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nconst cors_1 = __importDefault(__webpack_require__(/*! cors */ \"cors\"));\nconst helmet_1 = __importDefault(__webpack_require__(/*! helmet */ \"helmet\"));\nconst AuthRouter_1 = __importDefault(__webpack_require__(/*! ./router/AuthRouter */ \"./src/router/AuthRouter.ts\"));\nconst dotenv_1 = __webpack_require__(/*! dotenv */ \"dotenv\");\nclass App {\n    constructor() {\n        this.app = express_1.default();\n        this.plugins();\n        this.routes();\n    }\n    plugins() {\n        this.app.use(helmet_1.default());\n        this.app.use(cors_1.default());\n        this.app.use(express_1.default.json());\n    }\n    routes() {\n        this.app.use('/api/v1/users', AuthRouter_1.default);\n    }\n}\ndotenv_1.config();\nif (!process.env.PORT) {\n    process.exit(1);\n}\n;\nconst port = parseInt(process.env.PORT);\nconst app = new App().app;\napp.listen(port, () => console.log(`Server running on port ${port}`));\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxzREFBOEI7QUFDOUIsZ0RBQXdCO0FBQ3hCLG9EQUE0QjtBQUM1QixxRUFBNkM7QUFDN0MsbUNBQThCO0FBRTlCLE1BQU0sR0FBRztJQUVMO1FBQ0ksSUFBSSxDQUFDLEdBQUcsR0FBRyxpQkFBTyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFUyxPQUFPO1FBQ2IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsZ0JBQU0sRUFBRSxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsY0FBSSxFQUFFLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVTLE1BQU07UUFDWixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsb0JBQVUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Q0FDSjtBQUVELGVBQU0sRUFBRSxDQUFDO0FBRVQsSUFBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFO0lBQ2xCLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7Q0FDbEI7QUFBQSxDQUFDO0FBQ0YsTUFBTSxJQUFJLEdBQVUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDL0MsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUM7QUFDMUIsR0FBRyxDQUFDLE1BQU0sQ0FBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDIn0=\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

};