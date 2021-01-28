exports.id = "main";
exports.modules = {

/***/ "./src/controllers/ProductController.ts":
/*!**********************************************!*\
  !*** ./src/controllers/ProductController.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst Database_1 = __webpack_require__(/*! ./Database */ \"./src/controllers/Database.ts\");\nclass ProductController {\n    async index(req, res) {\n        try {\n            const items = await Database_1.DB.Models.Product.find();\n            return res.status(400).json({ message: `Success`, total: items.length, data: items });\n        }\n        catch (err) {\n            return res.status(500).json({ error: err.message });\n        }\n    }\n    async show(req, res) {\n        try {\n            const { id } = req.params;\n            const items = await Database_1.DB.Models.Product.findById(id);\n            return res.status(400).json({ message: `Success`, data: items });\n        }\n        catch (err) {\n            return res.status(500).json({ error: err.message });\n        }\n    }\n    async create(req, res) {\n        try {\n            const { title, price, description, content, images, category, inStock } = req.body;\n            const newProduct = await new Database_1.DB.Models.Product({\n                title, price, description, content, images, category, inStock\n            });\n            await newProduct.save();\n            return res.status(400).json({ message: \"Success Added Product\" });\n        }\n        catch (err) {\n            return res.status(500).json({ error: err.message });\n        }\n    }\n}\nexports.default = new ProductController();\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZHVjdENvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvUHJvZHVjdENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSx5Q0FBZ0M7QUFFaEMsTUFBTSxpQkFBaUI7SUFDbEIsS0FBSyxDQUFDLEtBQUssQ0FBRSxHQUFXLEVBQUMsR0FBWTtRQUNsQyxJQUFJO1lBQ0EsTUFBTSxLQUFLLEdBQUcsTUFBTSxhQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUM3QyxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsT0FBTyxFQUFHLFNBQVMsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUcsS0FBSyxFQUFDLENBQUMsQ0FBQztTQUN6RjtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1YsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRyxHQUFHLENBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQztTQUN0RDtJQUNMLENBQUM7SUFFQSxLQUFLLENBQUMsSUFBSSxDQUFFLEdBQVcsRUFBRSxHQUFZO1FBQ2xDLElBQUk7WUFDQSxNQUFNLEVBQUMsRUFBRSxFQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztZQUN4QixNQUFNLEtBQUssR0FBRyxNQUFNLGFBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNuRCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsT0FBTyxFQUFHLFNBQVMsRUFBRSxJQUFJLEVBQUcsS0FBSyxFQUFDLENBQUMsQ0FBQztTQUNwRTtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1YsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRyxHQUFHLENBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQztTQUN0RDtJQUNMLENBQUM7SUFDQSxLQUFLLENBQUMsTUFBTSxDQUFFLEdBQVcsRUFBRSxHQUFZO1FBQ3BDLElBQUk7WUFDQSxNQUFNLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUMsT0FBTyxFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUUsT0FBTyxFQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztZQUM5RSxNQUFNLFVBQVUsR0FBRyxNQUFNLElBQUksYUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7Z0JBQzNDLEtBQUssRUFBRyxLQUFLLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUMsUUFBUSxFQUFDLE9BQU87YUFDL0QsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDeEIsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLE9BQU8sRUFBRSx1QkFBdUIsRUFBQyxDQUFDLENBQUM7U0FDbkU7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNWLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUcsR0FBRyxDQUFDLE9BQU8sRUFBQyxDQUFDLENBQUM7U0FDdEQ7SUFDTCxDQUFDO0NBRUo7QUFFRCxrQkFBZSxJQUFJLGlCQUFpQixFQUFFLENBQUMifQ==\n\n//# sourceURL=webpack:///./src/controllers/ProductController.ts?");

/***/ })

};