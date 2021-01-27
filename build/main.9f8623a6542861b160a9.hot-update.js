exports.id = "main";
exports.modules = {

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nconst cors_1 = __importDefault(__webpack_require__(/*! cors */ \"cors\"));\nconst helmet_1 = __importDefault(__webpack_require__(/*! helmet */ \"helmet\"));\nconst AuthRouter_1 = __importDefault(__webpack_require__(/*! ./router/AuthRouter */ \"./src/router/AuthRouter.ts\"));\nconst dotenv_1 = __webpack_require__(/*! dotenv */ \"dotenv\");\nconst body_parser_1 = __importDefault(__webpack_require__(/*! body-parser */ \"body-parser\"));\nclass App {\n    constructor() {\n        this.app = express_1.default();\n        this.plugins();\n        this.routes();\n    }\n    plugins() {\n        this.app.use(helmet_1.default());\n        this.app.use(body_parser_1.default.json());\n        this.app.use(cors_1.default());\n    }\n    routes() {\n        this.app.use('/api/v1/users', AuthRouter_1.default);\n    }\n}\ndotenv_1.config();\nif (!process.env.PORT) {\n    process.exit(1);\n}\n;\nconst port = parseInt(process.env.PORT);\nconst app = new App().app;\napp.listen(port, () => console.log(`Server running on port ${port}`));\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxzREFBOEI7QUFDOUIsZ0RBQXdCO0FBQ3hCLG9EQUE0QjtBQUM1QixxRUFBNkM7QUFDN0MsbUNBQThCO0FBQzlCLDhEQUFvQztBQUVwQyxNQUFNLEdBQUc7SUFFTDtRQUNJLElBQUksQ0FBQyxHQUFHLEdBQUcsaUJBQU8sRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRVMsT0FBTztRQUNiLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLGdCQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLHFCQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFUyxNQUFNO1FBQ1osSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLG9CQUFVLENBQUMsQ0FBQztJQUM5QyxDQUFDO0NBQ0o7QUFFRCxlQUFNLEVBQUUsQ0FBQztBQUVULElBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRTtJQUNsQixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO0NBQ2xCO0FBQUEsQ0FBQztBQUNGLE1BQU0sSUFBSSxHQUFVLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQy9DLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDO0FBQzFCLEdBQUcsQ0FBQyxNQUFNLENBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyJ9\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

};