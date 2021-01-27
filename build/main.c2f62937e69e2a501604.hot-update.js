exports.id = "main";
exports.modules = {

/***/ "./src/controllers/AuthController.ts":
/*!*******************************************!*\
  !*** ./src/controllers/AuthController.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst Database_1 = __webpack_require__(/*! ./Database */ \"./src/controllers/Database.ts\");\nclass AuthController {\n    async login(req, res) {\n        try {\n            const { email, password } = req.body;\n            const user = await Database_1.DB.User.find();\n            return res.json({ message: `Login success` });\n        }\n        catch (err) {\n            return res.status(500).json({ error: err.message });\n        }\n    }\n}\nexports.default = new AuthController();\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aENvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvQXV0aENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSx5Q0FBZ0M7QUFHaEMsTUFBTSxjQUFjO0lBRWYsS0FBSyxDQUFDLEtBQUssQ0FBRSxHQUFXLEVBQUUsR0FBWTtRQUNuQyxJQUFJO1lBQ0EsTUFBTSxFQUFDLEtBQUssRUFBRSxRQUFRLEVBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1lBQ25DLE1BQU0sSUFBSSxHQUFHLE1BQU0sYUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNsQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBQyxPQUFPLEVBQUcsZUFBZSxFQUFDLENBQUMsQ0FBQztTQUNoRDtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1YsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRyxHQUFHLENBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQztTQUN0RDtJQUNMLENBQUM7Q0FHSjtBQUVELGtCQUFlLElBQUksY0FBYyxFQUFFLENBQUMifQ==\n\n//# sourceURL=webpack:///./src/controllers/AuthController.ts?");

/***/ }),

/***/ "./src/controllers/Database.ts":
/*!*************************************!*\
  !*** ./src/controllers/Database.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.DB = void 0;\nconst mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst UserModel_1 = __webpack_require__(/*! ../models/UserModel */ \"./src/models/UserModel.ts\");\nconst dotenv_1 = __webpack_require__(/*! dotenv */ \"dotenv\");\ndotenv_1.config();\n;\nclass DB {\n    constructor() {\n        mongoose_1.connect(String(process.env.DB_URI), {\n            useNewUrlParser: true,\n            useCreateIndex: true,\n            useFindAndModify: false,\n            useUnifiedTopology: true\n        });\n        this._db = mongoose_1.connection;\n        this._db.on('open', this.connected);\n        this._db.on('close', this.closed);\n        this._models = {\n            User: new UserModel_1.User().model\n        };\n    }\n    static get Models() {\n        if (!DB._instance) {\n            DB._instance = new DB();\n        }\n        return DB._instance._models;\n    }\n    connected() {\n        console.log(`Mongoose has connected`);\n    }\n    closed() {\n        console.log(`Mongoose has errored`);\n    }\n}\nexports.DB = DB;\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YWJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvRGF0YWJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsdUNBQTJEO0FBQzNELG1EQUFvRDtBQUNwRCxtQ0FBNkI7QUFFN0IsZUFBTSxFQUFFLENBQUM7QUFJUixDQUFDO0FBR0YsTUFBYSxFQUFFO0lBS1g7UUFDSSxrQkFBTyxDQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBRSxFQUFDO1lBQ2pDLGVBQWUsRUFBRyxJQUFJO1lBQ3RCLGNBQWMsRUFBRyxJQUFJO1lBQ3JCLGdCQUFnQixFQUFHLEtBQUs7WUFDeEIsa0JBQWtCLEVBQUcsSUFBSTtTQUMzQixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsR0FBRyxHQUFHLHFCQUFVLENBQUM7UUFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRW5DLElBQUksQ0FBQyxPQUFPLEdBQUc7WUFDWCxJQUFJLEVBQUcsSUFBSSxnQkFBSSxFQUFFLENBQUMsS0FBSztTQUMxQixDQUFBO0lBQ04sQ0FBQztJQUVNLE1BQU0sS0FBSyxNQUFNO1FBQ3BCLElBQUcsQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFO1lBQ2QsRUFBRSxDQUFDLFNBQVMsR0FBRyxJQUFJLEVBQUUsRUFBRSxDQUFDO1NBQzNCO1FBRUQsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQztJQUNoQyxDQUFDO0lBRU8sU0FBUztRQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQTtJQUN6QyxDQUFDO0lBRU8sTUFBTTtRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQTtJQUN2QyxDQUFDO0NBQ0o7QUFwQ0QsZ0JBb0NDIn0=\n\n//# sourceURL=webpack:///./src/controllers/Database.ts?");

/***/ }),

/***/ "./src/models/UserModel.ts":
/*!*********************************!*\
  !*** ./src/models/UserModel.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.User = void 0;\nconst mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\n;\nclass User {\n    constructor() {\n        const schema = new mongoose_1.Schema({\n            name: { type: String, required: true },\n            email: { type: String, required: true, unique: true },\n            password: { type: String, required: true },\n            cart: { type: Array, default: Array },\n            role: { type: Boolean, default: 0 },\n        });\n        this._model = mongoose_1.model('User', schema);\n    }\n    get model() {\n        return this._model;\n    }\n}\nexports.User = User;\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlck1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZGVscy9Vc2VyTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsdUNBQTBEO0FBVVIsQ0FBQztBQUVuRCxNQUFhLElBQUk7SUFJYjtRQUNJLE1BQU0sTUFBTSxHQUFJLElBQUksaUJBQU0sQ0FBQztZQUN2QixJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7WUFDdEMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBQyxJQUFJLEVBQUU7WUFDcEQsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO1lBQzFDLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRTtZQUNyQyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUU7U0FFdEMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLE1BQU0sR0FBRyxnQkFBSyxDQUFRLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsSUFBVyxLQUFLO1FBQ1osT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFBO0lBQ3RCLENBQUM7Q0FDSjtBQXBCRCxvQkFvQkMifQ==\n\n//# sourceURL=webpack:///./src/models/UserModel.ts?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ })

};