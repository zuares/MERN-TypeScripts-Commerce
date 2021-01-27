exports.id = "main";
exports.modules = {

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nconst cors_1 = __importDefault(__webpack_require__(/*! cors */ \"cors\"));\nconst helmet_1 = __importDefault(__webpack_require__(/*! helmet */ \"helmet\"));\nconst AuthRouter_1 = __importDefault(__webpack_require__(/*! ./router/AuthRouter */ \"./src/router/AuthRouter.ts\"));\ndotenv();\nclass App {\n    constructor() {\n        this.app = express_1.default();\n        this.plugins();\n        this.routes();\n    }\n    plugins() {\n        this.app.use(helmet_1.default());\n        this.app.use(cors_1.default());\n        this.app.use(express_1.default.json());\n    }\n    routes() {\n        this.app.use('/api/v1/users', AuthRouter_1.default);\n    }\n}\nif (!process.env.PORT) {\n    process.exit(1);\n}\n;\nconsole.log(process.env);\nconst port = parseInt(process.env.PORT);\nconst app = new App().app;\napp.listen(port, () => console.log(`Server running on port ${port}`));\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxzREFBOEI7QUFDOUIsZ0RBQXdCO0FBQ3hCLG9EQUE0QjtBQUM1QixxRUFBNkM7QUFFN0MsTUFBTSxFQUFFLENBQUM7QUFFVCxNQUFNLEdBQUc7SUFFTDtRQUNJLElBQUksQ0FBQyxHQUFHLEdBQUcsaUJBQU8sRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRVMsT0FBTztRQUNiLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLGdCQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLGNBQUksRUFBRSxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFUyxNQUFNO1FBQ1osSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLG9CQUFVLENBQUMsQ0FBQztJQUM5QyxDQUFDO0NBQ0o7QUFFRCxJQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUU7SUFDbEIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtDQUNsQjtBQUFBLENBQUM7QUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQTtBQUN4QixNQUFNLElBQUksR0FBVSxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMvQyxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQztBQUMxQixHQUFHLENBQUMsTUFBTSxDQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMifQ==\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "dotenv":
false

};