exports.id = "main";
exports.modules = {

/***/ "./src/controllers/Database.ts":
/*!*************************************!*\
  !*** ./src/controllers/Database.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.DB = void 0;\nconst mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst ProductModel_1 = __webpack_require__(/*! ../models/ProductModel */ \"./src/models/ProductModel.ts\");\nconst UserModel_1 = __webpack_require__(/*! ../models/UserModel */ \"./src/models/UserModel.ts\");\n;\nclass DB {\n    constructor() {\n        mongoose_1.connect(String(process.env.DB_URI), {\n            useNewUrlParser: true,\n            useCreateIndex: true,\n            useFindAndModify: false,\n            useUnifiedTopology: true\n        });\n        this._db = mongoose_1.connection;\n        this._db.on('open', this.connected);\n        this._db.on('close', this.closed);\n        this._models = {\n            User: new UserModel_1.User().model,\n            Product: new ProductModel_1.Product().model\n        };\n    }\n    static get Models() {\n        if (!DB._instance) {\n            DB._instance = new DB();\n        }\n        return DB._instance._models;\n    }\n    connected() {\n        console.log(`Mongoose has connected`);\n    }\n    closed() {\n        console.log(`Mongoose has errored`);\n    }\n}\nexports.DB = DB;\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YWJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvRGF0YWJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsdUNBQTJEO0FBQzNELHlEQUErRDtBQUMvRCxtREFBb0Q7QUFNbkQsQ0FBQztBQUdGLE1BQWEsRUFBRTtJQUtYO1FBQ0ksa0JBQU8sQ0FBRSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUUsRUFBQztZQUNqQyxlQUFlLEVBQUcsSUFBSTtZQUN0QixjQUFjLEVBQUcsSUFBSTtZQUNyQixnQkFBZ0IsRUFBRyxLQUFLO1lBQ3hCLGtCQUFrQixFQUFHLElBQUk7U0FDM0IsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEdBQUcsR0FBRyxxQkFBVSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVuQyxJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ1gsSUFBSSxFQUFHLElBQUksZ0JBQUksRUFBRSxDQUFDLEtBQUs7WUFDdkIsT0FBTyxFQUFHLElBQUksc0JBQU8sRUFBRSxDQUFDLEtBQUs7U0FDaEMsQ0FBQTtJQUNOLENBQUM7SUFFTSxNQUFNLEtBQUssTUFBTTtRQUNwQixJQUFHLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRTtZQUNkLEVBQUUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxFQUFFLEVBQUUsQ0FBQztTQUMzQjtRQUVELE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7SUFDaEMsQ0FBQztJQUVPLFNBQVM7UUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUE7SUFDekMsQ0FBQztJQUVPLE1BQU07UUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUE7SUFDdkMsQ0FBQztDQUNKO0FBckNELGdCQXFDQyJ9\n\n//# sourceURL=webpack:///./src/controllers/Database.ts?");

/***/ })

};