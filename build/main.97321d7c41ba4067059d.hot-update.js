exports.id = "main";
exports.modules = {

/***/ "./src/controllers/AuthController.ts":
/*!*******************************************!*\
  !*** ./src/controllers/AuthController.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst Auth_1 = __importDefault(__webpack_require__(/*! ../utils/Auth */ \"./src/utils/Auth.ts\"));\nconst Database_1 = __webpack_require__(/*! ./Database */ \"./src/controllers/Database.ts\");\nconst jsonwebtoken_1 = __importDefault(__webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\"));\nclass AuthController {\n    async register(req, res) {\n        try {\n            const { name, email, password } = req.body;\n            const user = await Database_1.DB.Models.User.findOne({ email });\n            if (user)\n                return res.status(400).json({ message: `Email already exists` });\n            const hashing = await Auth_1.default.hashPassword(password, 12);\n            const newUser = await new Database_1.DB.Models.User({ name, email, password: hashing });\n            newUser.save();\n            return res.status(400).json({ message: \"Regiseter success\" });\n        }\n        catch (err) {\n            return res.status(500).json({ error: err.message });\n        }\n    }\n    async login(req, res) {\n        try {\n            const { email, password } = req.body;\n            const user = await Database_1.DB.Models.User.findOne({ email });\n            if (!user)\n                return res.status(400).json({ message: `Email not registered` });\n            const hashing = await Auth_1.default.comparePassword(password, user.password);\n            if (!hashing)\n                return res.status(400).json({ message: `Password incorect` });\n            const accessToken = Auth_1.default.createAccesToken({ id: user._id });\n            const refreshToken = Auth_1.default.createRefreshToken({ id: user._id });\n            res.cookie('refreshToken', refreshToken, { httpOnly: true, path: '/api/v1/users/refresh_token' });\n            return res.status(400).json({ message: \"Login success\", accessToken });\n        }\n        catch (err) {\n            return res.status(500).json({ error: err.message });\n        }\n    }\n    async refresh_token(req, res) {\n        try {\n            const rf_token = req.cookies.refreshToken;\n            let payload = jsonwebtoken_1.default.verify(rf_token, String(process.env.REFRESH_TOKEN));\n            const accessToken = await Auth_1.default.createAccesToken({ id: payload.id });\n            return res.status(400).json({ payload, accessToken });\n        }\n        catch (err) {\n            return res.status(500).json({ error: err.message });\n        }\n    }\n}\nexports.default = new AuthController();\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aENvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvQXV0aENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSx5REFBaUM7QUFDakMseUNBQWdDO0FBQ2hDLGdFQUErQjtBQUUvQixNQUFNLGNBQWM7SUFDZixLQUFLLENBQUMsUUFBUSxDQUFFLEdBQVcsRUFBRSxHQUFZO1FBQ3RDLElBQUk7WUFDQSxNQUFNLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1lBQ3pDLE1BQU0sSUFBSSxHQUFHLE1BQU0sYUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQztZQUNuRCxJQUFHLElBQUk7Z0JBQUUsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLE9BQU8sRUFBRyxzQkFBc0IsRUFBQyxDQUFDLENBQUM7WUFDekUsTUFBTSxPQUFPLEdBQUcsTUFBTSxjQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUN0RCxNQUFNLE9BQU8sR0FBSSxNQUFNLElBQUksYUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUMsS0FBSyxFQUFDLFFBQVEsRUFBRyxPQUFPLEVBQUMsQ0FBQyxDQUFDO1lBQzNFLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNmLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDO1NBQ2pFO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDVixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFHLEdBQUcsQ0FBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDO1NBQ3REO0lBQ0wsQ0FBQztJQUNBLEtBQUssQ0FBQyxLQUFLLENBQUUsR0FBVyxFQUFFLEdBQVk7UUFDbkMsSUFBSTtZQUNBLE1BQU0sRUFBQyxLQUFLLEVBQUUsUUFBUSxFQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztZQUNuQyxNQUFNLElBQUksR0FBRyxNQUFNLGFBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUM7WUFDbkQsSUFBRyxDQUFDLElBQUk7Z0JBQUUsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLE9BQU8sRUFBRyxzQkFBc0IsRUFBQyxDQUFDLENBQUM7WUFDMUUsTUFBTSxPQUFPLEdBQUcsTUFBTSxjQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDcEUsSUFBRyxDQUFFLE9BQU87Z0JBQUksT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLE9BQU8sRUFBRyxtQkFBbUIsRUFBQyxDQUFDLENBQUM7WUFDN0UsTUFBTSxXQUFXLEdBQUcsY0FBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUMsRUFBRSxFQUFHLElBQUksQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDO1lBQzNELE1BQU0sWUFBWSxHQUFHLGNBQUksQ0FBQyxrQkFBa0IsQ0FBQyxFQUFDLEVBQUUsRUFBRyxJQUFJLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQztZQUM5RCxHQUFHLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxZQUFZLEVBQUUsRUFBQyxRQUFRLEVBQUcsSUFBSSxFQUFFLElBQUksRUFBRSw2QkFBNkIsRUFBQyxDQUFDLENBQUM7WUFDakcsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFHLENBQUMsQ0FBQztTQUMzRTtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1YsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRyxHQUFHLENBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQztTQUN0RDtJQUNMLENBQUM7SUFDRCxLQUFLLENBQUMsYUFBYSxDQUFFLEdBQVcsRUFBRSxHQUFZO1FBQzFDLElBQUk7WUFDQSxNQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQztZQUMxQyxJQUFJLE9BQU8sR0FBTyxzQkFBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUMxRSxNQUFNLFdBQVcsR0FBRyxNQUFNLGNBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFDLEVBQUUsRUFBRyxPQUFPLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQztZQUNuRSxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsT0FBTyxFQUFFLFdBQVcsRUFBQyxDQUFDLENBQUM7U0FDdkQ7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNWLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUcsR0FBRyxDQUFDLE9BQU8sRUFBQyxDQUFDLENBQUM7U0FDdEQ7SUFDTCxDQUFDO0NBRUo7QUFFRCxrQkFBZSxJQUFJLGNBQWMsRUFBRSxDQUFDIn0=\n\n//# sourceURL=webpack:///./src/controllers/AuthController.ts?");

/***/ }),

/***/ "./src/router/AuthRouter.ts":
/*!**********************************!*\
  !*** ./src/router/AuthRouter.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst BaseRouter_1 = __importDefault(__webpack_require__(/*! ./BaseRouter */ \"./src/router/BaseRouter.ts\"));\nconst AuthController_1 = __importDefault(__webpack_require__(/*! ./../controllers/AuthController */ \"./src/controllers/AuthController.ts\"));\nclass AuthRouter extends BaseRouter_1.default {\n    routes() {\n        this.router.post('/register', AuthController_1.default.register);\n        this.router.post('/login', AuthController_1.default.login);\n        this.router.get('/refresh_token', AuthController_1.default.refresh_token);\n    }\n}\nexports.default = new AuthRouter().router;\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aFJvdXRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXIvQXV0aFJvdXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDhEQUFzQztBQUV0QyxxRkFBNkQ7QUFHN0QsTUFBTSxVQUFXLFNBQVEsb0JBQVU7SUFFeEIsTUFBTTtRQUNULElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFFLFdBQVcsRUFBRSx3QkFBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFFLFFBQVEsRUFBRSx3QkFBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFFLGdCQUFnQixFQUFFLHdCQUFjLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDckUsQ0FBQztDQUVKO0FBRUQsa0JBQWUsSUFBSSxVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMifQ==\n\n//# sourceURL=webpack:///./src/router/AuthRouter.ts?");

/***/ })

};