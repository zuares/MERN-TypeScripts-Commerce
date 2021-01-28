exports.id = "main";
exports.modules = {

/***/ "./src/controllers/AuthController.ts":
/*!*******************************************!*\
  !*** ./src/controllers/AuthController.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst Auth_1 = __importDefault(__webpack_require__(/*! ../utils/Auth */ \"./src/utils/Auth.ts\"));\nconst Database_1 = __webpack_require__(/*! ./Database */ \"./src/controllers/Database.ts\");\nconst jsonwebtoken_1 = __importDefault(__webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\"));\nclass AuthController {\n    async register(req, res) {\n        try {\n            const { name, email, password } = req.body;\n            const user = await Database_1.DB.Models.User.findOne({ email });\n            if (user)\n                return res.status(400).json({ error: `Email already exists` });\n            const hashing = await Auth_1.default.hashPassword(password, 12);\n            const newUser = await new Database_1.DB.Models.User({ name, email, password: hashing });\n            newUser.save();\n            return res.status(400).json({ error: \"Regiseter success\" });\n        }\n        catch (err) {\n            return res.status(500).json({ error: err.message });\n        }\n    }\n    async login(req, res) {\n        try {\n            const { email, password } = req.body;\n            const user = await Database_1.DB.Models.User.findOne({ email });\n            if (!user)\n                return res.status(400).json({ error: `Email not registered` });\n            const hashing = await Auth_1.default.comparePassword(password, user.password);\n            if (!hashing)\n                return res.status(400).json({ error: `Password incorect` });\n            const accessToken = Auth_1.default.createAccesToken({ id: user._id });\n            const refreshToken = Auth_1.default.createRefreshToken({ id: user._id });\n            res.cookie('refreshToken', refreshToken, { httpOnly: true, path: '/api/v1/users/refresh_token' });\n            return res.status(400).json({ message: \"Login success\", accessToken });\n        }\n        catch (err) {\n            return res.status(500).json({ error: err.message });\n        }\n    }\n    async refresh_token(req, res) {\n        try {\n            const rf_token = req.cookies.refreshToken;\n            let payload = jsonwebtoken_1.default.verify(rf_token, String(process.env.REFRESH_TOKEN));\n            const accessToken = await Auth_1.default.createAccesToken({ id: payload.id });\n            return res.status(400).json({ payload, accessToken });\n        }\n        catch (err) {\n            return res.status(500).json({ error: err.message });\n        }\n    }\n}\nexports.default = new AuthController();\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aENvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvQXV0aENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSx5REFBaUM7QUFDakMseUNBQWdDO0FBQ2hDLGdFQUErQjtBQUUvQixNQUFNLGNBQWM7SUFDZixLQUFLLENBQUMsUUFBUSxDQUFFLEdBQVcsRUFBRSxHQUFZO1FBQ3RDLElBQUk7WUFDQSxNQUFNLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1lBQ3pDLE1BQU0sSUFBSSxHQUFHLE1BQU0sYUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQztZQUNuRCxJQUFHLElBQUk7Z0JBQUUsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRyxzQkFBc0IsRUFBQyxDQUFDLENBQUM7WUFDdkUsTUFBTSxPQUFPLEdBQUcsTUFBTSxjQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUN0RCxNQUFNLE9BQU8sR0FBSSxNQUFNLElBQUksYUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUMsS0FBSyxFQUFDLFFBQVEsRUFBRyxPQUFPLEVBQUMsQ0FBQyxDQUFDO1lBQzNFLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNmLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDO1NBQy9EO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDVixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFHLEdBQUcsQ0FBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDO1NBQ3REO0lBQ0wsQ0FBQztJQUNBLEtBQUssQ0FBQyxLQUFLLENBQUUsR0FBVyxFQUFFLEdBQVk7UUFDbkMsSUFBSTtZQUNBLE1BQU0sRUFBQyxLQUFLLEVBQUUsUUFBUSxFQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztZQUNuQyxNQUFNLElBQUksR0FBRyxNQUFNLGFBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUM7WUFDbkQsSUFBRyxDQUFDLElBQUk7Z0JBQUUsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRyxzQkFBc0IsRUFBQyxDQUFDLENBQUM7WUFDeEUsTUFBTSxPQUFPLEdBQUcsTUFBTSxjQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDcEUsSUFBRyxDQUFFLE9BQU87Z0JBQUksT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRyxtQkFBbUIsRUFBQyxDQUFDLENBQUM7WUFDM0UsTUFBTSxXQUFXLEdBQUcsY0FBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUMsRUFBRSxFQUFHLElBQUksQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDO1lBQzNELE1BQU0sWUFBWSxHQUFHLGNBQUksQ0FBQyxrQkFBa0IsQ0FBQyxFQUFDLEVBQUUsRUFBRyxJQUFJLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQztZQUM5RCxHQUFHLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxZQUFZLEVBQUUsRUFBQyxRQUFRLEVBQUcsSUFBSSxFQUFFLElBQUksRUFBRSw2QkFBNkIsRUFBQyxDQUFDLENBQUM7WUFDakcsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFHLENBQUMsQ0FBQztTQUMzRTtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1YsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRyxHQUFHLENBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQztTQUN0RDtJQUNMLENBQUM7SUFDRCxLQUFLLENBQUMsYUFBYSxDQUFFLEdBQVcsRUFBRSxHQUFZO1FBQzFDLElBQUk7WUFDQSxNQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQztZQUMxQyxJQUFJLE9BQU8sR0FBTyxzQkFBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUMxRSxNQUFNLFdBQVcsR0FBRyxNQUFNLGNBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFDLEVBQUUsRUFBRyxPQUFPLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQztZQUNuRSxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsT0FBTyxFQUFFLFdBQVcsRUFBQyxDQUFDLENBQUM7U0FDdkQ7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNWLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUcsR0FBRyxDQUFDLE9BQU8sRUFBQyxDQUFDLENBQUM7U0FDdEQ7SUFDTCxDQUFDO0NBRUo7QUFFRCxrQkFBZSxJQUFJLGNBQWMsRUFBRSxDQUFDIn0=\n\n//# sourceURL=webpack:///./src/controllers/AuthController.ts?");

/***/ }),

/***/ "./src/controllers/Database.ts":
/*!*************************************!*\
  !*** ./src/controllers/Database.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.DB = void 0;\nconst mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst ProductModel_1 = __webpack_require__(/*! ../models/ProductModel */ \"./src/models/ProductModel.ts\");\nconst ProductModel_2 = __webpack_require__(/*! ../models/ProductModel */ \"./src/models/ProductModel.ts\");\nconst UserModel_1 = __webpack_require__(/*! ../models/UserModel */ \"./src/models/UserModel.ts\");\n;\nclass DB {\n    constructor() {\n        mongoose_1.connect(String(process.env.DB_URI), {\n            useNewUrlParser: true,\n            useCreateIndex: true,\n            useFindAndModify: false,\n            useUnifiedTopology: true\n        });\n        this._db = mongoose_1.connection;\n        this._db.on('open', this.connected);\n        this._db.on('close', this.closed);\n        this._models = {\n            User: new UserModel_1.User().model,\n            Product: new ProductModel_1.Product().model,\n            Payment: new ProductModel_2.Payment().model,\n        };\n    }\n    static get Models() {\n        if (!DB._instance) {\n            DB._instance = new DB();\n        }\n        return DB._instance._models;\n    }\n    connected() {\n        console.log(`Mongoose has connected`);\n    }\n    closed() {\n        console.log(`Mongoose has errored`);\n    }\n}\nexports.DB = DB;\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YWJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvRGF0YWJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsdUNBQTJEO0FBQzNELHlEQUErRDtBQUMvRCx5REFBMEQ7QUFDMUQsbURBQW9EO0FBTW5ELENBQUM7QUFHRixNQUFhLEVBQUU7SUFLWDtRQUNJLGtCQUFPLENBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFFLEVBQUM7WUFDakMsZUFBZSxFQUFHLElBQUk7WUFDdEIsY0FBYyxFQUFHLElBQUk7WUFDckIsZ0JBQWdCLEVBQUcsS0FBSztZQUN4QixrQkFBa0IsRUFBRyxJQUFJO1NBQzNCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxHQUFHLEdBQUcscUJBQVUsQ0FBQztRQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFbkMsSUFBSSxDQUFDLE9BQU8sR0FBRztZQUNYLElBQUksRUFBRyxJQUFJLGdCQUFJLEVBQUUsQ0FBQyxLQUFLO1lBQ3ZCLE9BQU8sRUFBRyxJQUFJLHNCQUFPLEVBQUUsQ0FBQyxLQUFLO1lBQzdCLE9BQU8sRUFBRyxJQUFJLHNCQUFPLEVBQUUsQ0FBQyxLQUFLO1NBQ2hDLENBQUE7SUFDTixDQUFDO0lBRU0sTUFBTSxLQUFLLE1BQU07UUFDcEIsSUFBRyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUU7WUFDZCxFQUFFLENBQUMsU0FBUyxHQUFHLElBQUksRUFBRSxFQUFFLENBQUM7U0FDM0I7UUFFRCxPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDO0lBQ2hDLENBQUM7SUFFTyxTQUFTO1FBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFBO0lBQ3pDLENBQUM7SUFFTyxNQUFNO1FBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFBO0lBQ3ZDLENBQUM7Q0FDSjtBQXRDRCxnQkFzQ0MifQ==\n\n//# sourceURL=webpack:///./src/controllers/Database.ts?");

/***/ }),

/***/ "./src/controllers/ProductController.ts":
/*!**********************************************!*\
  !*** ./src/controllers/ProductController.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst Database_1 = __webpack_require__(/*! ./Database */ \"./src/controllers/Database.ts\");\nclass ProductController {\n    async index(req, res) {\n        try {\n            const items = await Database_1.DB.Models.Product.find();\n            return res.status(400).json({ message: `Success`, total: items.length, data: items });\n        }\n        catch (err) {\n            return res.status(500).json({ error: err.message });\n        }\n    }\n    async show(req, res) {\n        try {\n            const { id } = req.params;\n            const items = await Database_1.DB.Models.Product.findById(id);\n            return res.status(400).json({ message: `Success`, data: items });\n        }\n        catch (err) {\n            return res.status(500).json({ error: err.message });\n        }\n    }\n    async create(req, res) {\n        try {\n            const { title, price, description, content, images, category, inStock } = req.body;\n            const newProduct = await new Database_1.DB.Models.Product({\n                title, price, description, content, images, category, inStock\n            });\n            await newProduct.save();\n            return res.status(400).json({ message: \"Success Added Product\" });\n        }\n        catch (err) {\n            return res.status(500).json({ error: err.message });\n        }\n    }\n    async update(req, res) {\n        try {\n            const { title, price, description, content, images, category, inStock } = req.body;\n            await Database_1.DB.Models.Product.findByIdAndUpdate({ _id: req.params.id }, {\n                title, price, description, content, images, category, inStock\n            });\n            return res.status(400).json({ message: \"Success Updated Product\" });\n        }\n        catch (err) {\n            return res.status(500).json({ error: err.message });\n        }\n    }\n    async delete(req, res) {\n        try {\n            await Database_1.DB.Models.Product.findOneAndDelete({ _id: req.params.id });\n            return res.status(400).json({ message: \"Success Deleted Product\" });\n        }\n        catch (err) {\n            return res.status(500).json({ error: err.message });\n        }\n    }\n}\nexports.default = new ProductController();\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZHVjdENvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvUHJvZHVjdENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSx5Q0FBZ0M7QUFFaEMsTUFBTSxpQkFBaUI7SUFDbEIsS0FBSyxDQUFDLEtBQUssQ0FBRSxHQUFXLEVBQUMsR0FBWTtRQUNsQyxJQUFJO1lBQ0EsTUFBTSxLQUFLLEdBQUcsTUFBTSxhQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUM3QyxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsT0FBTyxFQUFHLFNBQVMsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUcsS0FBSyxFQUFDLENBQUMsQ0FBQztTQUN6RjtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1YsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRyxHQUFHLENBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQztTQUN0RDtJQUNMLENBQUM7SUFFQSxLQUFLLENBQUMsSUFBSSxDQUFFLEdBQVcsRUFBRSxHQUFZO1FBQ2xDLElBQUk7WUFDQSxNQUFNLEVBQUMsRUFBRSxFQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztZQUN4QixNQUFNLEtBQUssR0FBRyxNQUFNLGFBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNuRCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsT0FBTyxFQUFHLFNBQVMsRUFBRSxJQUFJLEVBQUcsS0FBSyxFQUFDLENBQUMsQ0FBQztTQUNwRTtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1YsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRyxHQUFHLENBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQztTQUN0RDtJQUNMLENBQUM7SUFDQSxLQUFLLENBQUMsTUFBTSxDQUFFLEdBQVcsRUFBRSxHQUFZO1FBQ3BDLElBQUk7WUFDQSxNQUFNLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUMsT0FBTyxFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUUsT0FBTyxFQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztZQUM5RSxNQUFNLFVBQVUsR0FBRyxNQUFNLElBQUksYUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7Z0JBQzNDLEtBQUssRUFBRyxLQUFLLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUMsUUFBUSxFQUFDLE9BQU87YUFDL0QsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDeEIsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLE9BQU8sRUFBRSx1QkFBdUIsRUFBQyxDQUFDLENBQUM7U0FDbkU7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNWLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUcsR0FBRyxDQUFDLE9BQU8sRUFBQyxDQUFDLENBQUM7U0FDdEQ7SUFDTCxDQUFDO0lBQ0EsS0FBSyxDQUFDLE1BQU0sQ0FBRSxHQUFXLEVBQUUsR0FBWTtRQUNwQyxJQUFJO1lBQ0EsTUFBTSxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFFLE9BQU8sRUFBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7WUFDOUUsTUFBTSxhQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxFQUFDLEdBQUcsRUFBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBQyxFQUFDO2dCQUM1RCxLQUFLLEVBQUcsS0FBSyxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFDLFFBQVEsRUFBQyxPQUFPO2FBQy9ELENBQUMsQ0FBQztZQUNILE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxPQUFPLEVBQUUseUJBQXlCLEVBQUMsQ0FBQyxDQUFDO1NBQ3JFO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDVixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFHLEdBQUcsQ0FBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDO1NBQ3REO0lBQ0wsQ0FBQztJQUNBLEtBQUssQ0FBQyxNQUFNLENBQUUsR0FBVyxFQUFFLEdBQVk7UUFDcEMsSUFBSTtZQUNBLE1BQU0sYUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsRUFBQyxHQUFHLEVBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDO1lBQ2hFLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxPQUFPLEVBQUUseUJBQXlCLEVBQUMsQ0FBQyxDQUFDO1NBQ3JFO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDVixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFHLEdBQUcsQ0FBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDO1NBQ3REO0lBQ0wsQ0FBQztDQUVKO0FBRUQsa0JBQWUsSUFBSSxpQkFBaUIsRUFBRSxDQUFDIn0=\n\n//# sourceURL=webpack:///./src/controllers/ProductController.ts?");

/***/ }),

/***/ "./src/middleware/AuthMiddleware.ts":
/*!******************************************!*\
  !*** ./src/middleware/AuthMiddleware.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.cekAdmin = exports.cekLog = void 0;\nconst jsonwebtoken_1 = __importDefault(__webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\"));\nconst Database_1 = __webpack_require__(/*! ../controllers/Database */ \"./src/controllers/Database.ts\");\nconst cekLog = async (req, res, next) => {\n    try {\n        const token = req.header('Authorization');\n        if (!token)\n            return res.status(400).json({ message: \"Invalid Auth\" });\n        const decoded = jsonwebtoken_1.default.verify(token, String(process.env.ACCESS_TOKEN));\n        if (!decoded)\n            return res.status(400).json({ error: \"Invalid Auth\" });\n        const user = await Database_1.DB.Models.User.findOne({ _id: decoded.id }).select('-password');\n        res.locals.payload = user;\n        return next();\n    }\n    catch (err) {\n        return res.status(500).json({ error: err.message });\n    }\n};\nexports.cekLog = cekLog;\nconst cekAdmin = async (req, res, next) => {\n    try {\n        if (res.locals.payload.role) {\n            return next();\n        }\n        return res.status(400).json({ error: `Access Dinied` });\n    }\n    catch (err) {\n        return res.status(500).json({ error: err.message });\n    }\n};\nexports.cekAdmin = cekAdmin;\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aE1pZGRsZXdhcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbWlkZGxld2FyZS9BdXRoTWlkZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxnRUFBK0I7QUFDL0Isc0RBQTJDO0FBRXBDLE1BQU0sTUFBTSxHQUFHLEtBQUssRUFBRSxHQUFXLEVBQUUsR0FBYyxFQUFFLElBQWlCLEVBQUcsRUFBRTtJQUM1RSxJQUFJO1FBQ0EsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsS0FBSztZQUFFLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFLENBQUMsQ0FBQztRQUNyRSxNQUFNLE9BQU8sR0FBTyxzQkFBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUN4RSxJQUFHLENBQUMsT0FBTztZQUFFLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUcsY0FBYyxFQUFDLENBQUMsQ0FBQztRQUNuRSxNQUFNLElBQUksR0FBRyxNQUFNLGFBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDaEYsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQzFCLE9BQU8sSUFBSSxFQUFFLENBQUM7S0FDakI7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNWLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7S0FDdkQ7QUFDTCxDQUFDLENBQUE7QUFaWSxRQUFBLE1BQU0sVUFZbEI7QUFDTSxNQUFNLFFBQVEsR0FBRyxLQUFLLEVBQUUsR0FBVyxFQUFFLEdBQWMsRUFBRSxJQUFpQixFQUFHLEVBQUU7SUFDOUUsSUFBSTtRQUNBLElBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO1lBQ3hCLE9BQU8sSUFBSSxFQUFFLENBQUM7U0FDakI7UUFDRCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFHLGVBQWUsRUFBQyxDQUFDLENBQUM7S0FDMUQ7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNWLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7S0FDdkQ7QUFDTCxDQUFDLENBQUE7QUFUWSxRQUFBLFFBQVEsWUFTcEIifQ==\n\n//# sourceURL=webpack:///./src/middleware/AuthMiddleware.ts?");

/***/ })

};