exports.id = "main";
exports.modules = {

/***/ "./src/controllers/AuthController.ts":
/*!*******************************************!*\
  !*** ./src/controllers/AuthController.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nclass AuthController {\n    async login(res, req) {\n        try {\n            return res.json({ message: `Login success` });\n        }\n        catch (err) {\n            return res.status(500).json({ error: err.message });\n        }\n    }\n}\nexports.default = new AuthController();\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aENvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvQXV0aENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSxNQUFNLGNBQWM7SUFFZixLQUFLLENBQUMsS0FBSyxDQUFFLEdBQVksRUFBRSxHQUFXO1FBQ25DLElBQUk7WUFDSCxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBQyxPQUFPLEVBQUcsZUFBZSxFQUFDLENBQUMsQ0FBQztTQUM3QztRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1YsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRyxHQUFHLENBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQztTQUN0RDtJQUNMLENBQUM7Q0FHSjtBQUVELGtCQUFlLElBQUksY0FBYyxFQUFFLENBQUMifQ==\n\n//# sourceURL=webpack:///./src/controllers/AuthController.ts?");

/***/ })

};