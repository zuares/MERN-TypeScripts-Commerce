exports.id = "main";
exports.modules = {

/***/ "./src/models/ProductModel.ts":
/*!************************************!*\
  !*** ./src/models/ProductModel.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Product = void 0;\nconst mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\n;\nclass Product {\n    constructor() {\n        const schema = new mongoose_1.Schema({\n            title: { type: String, required: true, unique: true },\n            price: { type: Number, required: true, trim: true },\n            description: { type: String, required: true },\n            content: { type: String, required: true },\n            images: { type: Array, default: [] },\n            category: { type: String, required: true },\n            checked: { type: Boolean, required: false },\n            inStock: { type: Number, required: true },\n            sold: { type: Number, required: true },\n        }, { timestamps: true });\n        this._model = mongoose_1.model('Product', schema);\n    }\n    get model() {\n        return this._model;\n    }\n}\nexports.Product = Product;\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZHVjdE1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZGVscy9Qcm9kdWN0TW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsdUNBQTBEO0FBYUQsQ0FBQztBQUUxRCxNQUFhLE9BQU87SUFJaEI7UUFDSSxNQUFNLE1BQU0sR0FBSSxJQUFJLGlCQUFNLENBQUM7WUFDdkIsS0FBSyxFQUNELEVBQUUsSUFBSSxFQUFHLE1BQU0sRUFBRSxRQUFRLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxJQUFJLEVBQUU7WUFDakQsS0FBSyxFQUNELEVBQUUsSUFBSSxFQUFHLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7WUFDakQsV0FBVyxFQUNQLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO1lBQ3BDLE9BQU8sRUFDSCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtZQUNwQyxNQUFNLEVBQ0YsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDaEMsUUFBUSxFQUNKLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO1lBQ3BDLE9BQU8sRUFDSCxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRTtZQUN0QyxPQUFPLEVBQ0gsRUFBRSxJQUFJLEVBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7WUFDbkMsSUFBSSxFQUNBLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO1NBRXZDLEVBQUUsRUFBRSxVQUFVLEVBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUUxQixJQUFJLENBQUMsTUFBTSxHQUFHLGdCQUFLLENBQVksU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCxJQUFXLEtBQUs7UUFDWixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUE7SUFDdEIsQ0FBQztDQUNKO0FBakNELDBCQWlDQyJ9\n\n//# sourceURL=webpack:///./src/models/ProductModel.ts?");

/***/ })

};