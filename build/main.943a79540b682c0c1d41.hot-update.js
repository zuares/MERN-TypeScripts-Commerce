exports.id = "main";
exports.modules = {

/***/ "./src/controllers/AuthController.ts":
/*!*******************************************!*\
  !*** ./src/controllers/AuthController.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst Database_1 = __webpack_require__(/*! ./Database */ \"./src/controllers/Database.ts\");\nclass AuthController {\n    async register(req, res) {\n        try {\n            const { email, password } = req.body;\n            const user = await new Database_1.DB.Models.User({ email, password });\n            user.save();\n            res.status(200).json({ message: \"Regiseter success\" });\n        }\n        catch (err) {\n            return res.status(500).json({ error: err.message });\n        }\n    }\n}\nexports.default = new AuthController();\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aENvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvQXV0aENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSx5Q0FBZ0M7QUFFaEMsTUFBTSxjQUFjO0lBRWYsS0FBSyxDQUFDLFFBQVEsQ0FBRSxHQUFXLEVBQUUsR0FBWTtRQUN0QyxJQUFJO1lBQ0EsTUFBTSxFQUFDLEtBQUssRUFBRSxRQUFRLEVBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1lBQ25DLE1BQU0sSUFBSSxHQUFJLE1BQU0sSUFBSSxhQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBQyxRQUFRLEVBQUMsQ0FBQyxDQUFDO1lBQ3pELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNaLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLENBQUMsQ0FBQztTQUMxRDtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1YsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRyxHQUFHLENBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQztTQUN0RDtJQUNMLENBQUM7Q0FHSjtBQUVELGtCQUFlLElBQUksY0FBYyxFQUFFLENBQUMifQ==\n\n//# sourceURL=webpack:///./src/controllers/AuthController.ts?");

/***/ })

};