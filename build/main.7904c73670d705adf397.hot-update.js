exports.id = "main";
exports.modules = {

/***/ "./src/middleware/AuthMiddleware.ts":
/*!******************************************!*\
  !*** ./src/middleware/AuthMiddleware.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.cekLog = void 0;\nconst jsonwebtoken_1 = __importDefault(__webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\"));\nconst Database_1 = __webpack_require__(/*! ../controllers/Database */ \"./src/controllers/Database.ts\");\nconst cekLog = async (req, res, next) => {\n    try {\n        const token = req.header('Authorization');\n        if (!token)\n            return res.status(400).json({ message: \"Invalid Auth\" });\n        const decoded = jsonwebtoken_1.default.verify(token, String(process.env.ACCESS_TOKEN));\n        if (!decoded)\n            return res.status(400).json({ error: \"Invalid Auth\" });\n        const user = await Database_1.DB.Models.User.findOne({ _id: decoded.id });\n        req.user = user;\n        return next();\n    }\n    catch (err) {\n        return res.status(500).json({ error: err.message });\n    }\n};\nexports.cekLog = cekLog;\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aE1pZGRsZXdhcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbWlkZGxld2FyZS9BdXRoTWlkZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxnRUFBK0I7QUFDL0Isc0RBQTJDO0FBRXBDLE1BQU0sTUFBTSxHQUFHLEtBQUssRUFBRSxHQUFXLEVBQUUsR0FBYyxFQUFFLElBQWlCLEVBQUcsRUFBRTtJQUM1RSxJQUFJO1FBQ0EsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsS0FBSztZQUFFLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFLENBQUMsQ0FBQztRQUNyRSxNQUFNLE9BQU8sR0FBTyxzQkFBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUN4RSxJQUFHLENBQUMsT0FBTztZQUFFLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUcsY0FBYyxFQUFDLENBQUMsQ0FBQztRQUNuRSxNQUFNLElBQUksR0FBRyxNQUFNLGFBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQztRQUM3RCxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixPQUFPLElBQUksRUFBRSxDQUFDO0tBQ2pCO0lBQUMsT0FBTyxHQUFHLEVBQUU7UUFDVixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0tBQ3ZEO0FBQ0wsQ0FBQyxDQUFBO0FBWlksUUFBQSxNQUFNLFVBWWxCIn0=\n\n//# sourceURL=webpack:///./src/middleware/AuthMiddleware.ts?");

/***/ })

};