exports.id = "main";
exports.modules = {

/***/ "./src/controllers/Database.ts":
/*!*************************************!*\
  !*** ./src/controllers/Database.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.DB = void 0;\nconst mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst UserModel_1 = __webpack_require__(/*! ../models/UserModel */ \"./src/models/UserModel.ts\");\n;\nclass DB {\n    constructor() {\n        mongoose_1.connect(String(process.env.DB_URI), {\n            useNewUrlParser: true,\n            useCreateIndex: true,\n            useFindAndModify: false,\n            useUnifiedTopology: true\n        });\n        this._db = mongoose_1.connection;\n        this._db.on('open', this.connected);\n        this._db.on('close', this.closed);\n        this._models = {\n            User: new UserModel_1.User().model\n        };\n    }\n    static get Models() {\n        if (!DB._instance) {\n            DB._instance = new DB();\n        }\n        return DB._instance._models;\n    }\n    connected() {\n        console.log(`Mongoose has connected`);\n    }\n    closed() {\n        console.log(`Mongoose has errored`);\n    }\n}\nexports.DB = DB;\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YWJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvRGF0YWJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsdUNBQTJEO0FBQzNELG1EQUFvRDtBQU1uRCxDQUFDO0FBR0YsTUFBYSxFQUFFO0lBS1g7UUFDSSxrQkFBTyxDQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBRSxFQUFDO1lBQ2pDLGVBQWUsRUFBRyxJQUFJO1lBQ3RCLGNBQWMsRUFBRyxJQUFJO1lBQ3JCLGdCQUFnQixFQUFHLEtBQUs7WUFDeEIsa0JBQWtCLEVBQUcsSUFBSTtTQUMzQixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsR0FBRyxHQUFHLHFCQUFVLENBQUM7UUFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRW5DLElBQUksQ0FBQyxPQUFPLEdBQUc7WUFDWCxJQUFJLEVBQUcsSUFBSSxnQkFBSSxFQUFFLENBQUMsS0FBSztTQUMxQixDQUFBO0lBQ04sQ0FBQztJQUVNLE1BQU0sS0FBSyxNQUFNO1FBQ3BCLElBQUcsQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFO1lBQ2QsRUFBRSxDQUFDLFNBQVMsR0FBRyxJQUFJLEVBQUUsRUFBRSxDQUFDO1NBQzNCO1FBRUQsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQztJQUNoQyxDQUFDO0lBRU8sU0FBUztRQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQTtJQUN6QyxDQUFDO0lBRU8sTUFBTTtRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQTtJQUN2QyxDQUFDO0NBQ0o7QUFwQ0QsZ0JBb0NDIn0=\n\n//# sourceURL=webpack:///./src/controllers/Database.ts?");

/***/ })

};