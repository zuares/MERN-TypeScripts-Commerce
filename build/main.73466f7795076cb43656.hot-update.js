exports.id = "main";
exports.modules = {

/***/ "./src/models/ProductModel.ts":
/*!************************************!*\
  !*** ./src/models/ProductModel.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Product = void 0;\nconst mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\n;\nclass Product {\n    constructor() {\n        const schema = new mongoose_1.Schema({\n            title: { type: String, required: true, unique: true },\n            price: { type: Number, required: true, trim: true },\n            description: { type: String, required: true },\n            content: { type: String, required: true },\n            images: { type: Array, default: [] },\n            category: { type: String, required: true, unique: true },\n            checked: { type: Boolean, required: false },\n            inStock: { type: Number, required: true },\n            sold: { type: Number, default: 0 },\n        }, { timestamps: true });\n        this._model = mongoose_1.model('Product', schema);\n    }\n    get model() {\n        return this._model;\n    }\n}\nexports.Product = Product;\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZHVjdE1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZGVscy9Qcm9kdWN0TW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsdUNBQTBEO0FBYUQsQ0FBQztBQUUxRCxNQUFhLE9BQU87SUFJaEI7UUFDSSxNQUFNLE1BQU0sR0FBSSxJQUFJLGlCQUFNLENBQUM7WUFDdkIsS0FBSyxFQUNELEVBQUUsSUFBSSxFQUFHLE1BQU0sRUFBRSxRQUFRLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxJQUFJLEVBQUU7WUFDakQsS0FBSyxFQUNELEVBQUUsSUFBSSxFQUFHLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7WUFDakQsV0FBVyxFQUNQLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO1lBQ3BDLE9BQU8sRUFDSCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtZQUNwQyxNQUFNLEVBQ0YsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDaEMsUUFBUSxFQUNKLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRyxJQUFJLEVBQUU7WUFDbkQsT0FBTyxFQUNILEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO1lBQ3RDLE9BQU8sRUFDSCxFQUFFLElBQUksRUFBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtZQUNuQyxJQUFJLEVBQ0EsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUU7U0FFbkMsRUFBRSxFQUFFLFVBQVUsRUFBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBRTFCLElBQUksQ0FBQyxNQUFNLEdBQUcsZ0JBQUssQ0FBWSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELElBQVcsS0FBSztRQUNaLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQTtJQUN0QixDQUFDO0NBQ0o7QUFqQ0QsMEJBaUNDIn0=\n\n//# sourceURL=webpack:///./src/models/ProductModel.ts?");

/***/ })

};