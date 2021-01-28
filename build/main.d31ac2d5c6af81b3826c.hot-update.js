exports.id = "main";
exports.modules = {

/***/ "./src/models/PaymentModel.ts":
/*!************************************!*\
  !*** ./src/models/PaymentModel.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Product = void 0;\nconst mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\n;\nclass Product {\n    constructor() {\n        const schema = new mongoose_1.Schema({\n            name: { type: Number, required: true, trim: true },\n            email: { type: String, required: true },\n            paymentID: { type: String, required: true },\n            address: { type: Array, required: true },\n            cart: { type: Array, default: [] },\n            status: { type: Boolean, required: false },\n        }, { timestamps: true });\n        this._model = mongoose_1.model('Payment', schema);\n    }\n    get model() {\n        return this._model;\n    }\n}\nexports.Product = Product;\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGF5bWVudE1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZGVscy9QYXltZW50TW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsdUNBQTBEO0FBV0QsQ0FBQztBQUUxRCxNQUFhLE9BQU87SUFJaEI7UUFDSSxNQUFNLE1BQU0sR0FBSSxJQUFJLGlCQUFNLENBQUM7WUFDdkIsSUFBSSxFQUNBLEVBQUUsSUFBSSxFQUFHLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7WUFDakQsS0FBSyxFQUNELEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO1lBQ3BDLFNBQVMsRUFDTCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtZQUNwQyxPQUFPLEVBQ0gsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7WUFDbkMsSUFBSSxFQUNBLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFDO1lBQy9CLE1BQU0sRUFDRixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRTtTQUV6QyxFQUFFLEVBQUUsVUFBVSxFQUFHLElBQUksRUFBRSxDQUFDLENBQUM7UUFFMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxnQkFBSyxDQUFXLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsSUFBVyxLQUFLO1FBQ1osT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFBO0lBQ3RCLENBQUM7Q0FDSjtBQTNCRCwwQkEyQkMifQ==\n\n//# sourceURL=webpack:///./src/models/PaymentModel.ts?");

/***/ })

};