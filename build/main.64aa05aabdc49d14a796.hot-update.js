exports.id = "main";
exports.modules = {

/***/ "./src/controllers/PaymentController.ts":
/*!**********************************************!*\
  !*** ./src/controllers/PaymentController.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst Database_1 = __webpack_require__(/*! ./Database */ \"./src/controllers/Database.ts\");\nclass PaymentController {\n    async getPayment(req, res) {\n        try {\n            const items = await Database_1.DB.Models.Payment.find();\n            return res.status(400).json({ message: \"success\", data: items });\n        }\n        catch (err) {\n            return res.status(500).json({ error: err.message });\n        }\n    }\n    async createPayment(req, res) {\n        try {\n            const { id } = res.locals.payload;\n            const user = await Database_1.DB.Models.User.findById(id);\n            const { name, _id, email } = user;\n            if (!user)\n                return res.status(400).json({ message: 'User doesnt exists' });\n            const { cart, paymentID, address } = req.body;\n            const newPayment = new Database_1.DB.Models.Payment({\n                user_id: _id, name, email, paymentID, cart, address\n            });\n            await newPayment.save();\n            // Sold \n            return res.status(400).json({ message: \"success\", data: items });\n        }\n        catch (err) {\n            return res.status(500).json({ error: err.message });\n        }\n    }\n}\nconst sold = async (id, qty, oldSold) => {\n    await Database_1.DB.Models.Product.findByIdAndUpdate({ _id: id }, {\n        sold: qty + oldSold\n    });\n};\nexports.default = new PaymentController();\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGF5bWVudENvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvUGF5bWVudENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSx5Q0FBZ0M7QUFHaEMsTUFBTSxpQkFBaUI7SUFDbkIsS0FBSyxDQUFDLFVBQVUsQ0FBRSxHQUFXLEVBQUUsR0FBWTtRQUN2QyxJQUFJO1lBQ0EsTUFBTSxLQUFLLEdBQUcsTUFBTSxhQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUM3QyxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsT0FBTyxFQUFHLFNBQVMsRUFBRSxJQUFJLEVBQUcsS0FBSyxFQUFDLENBQUMsQ0FBQTtTQUNuRTtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1YsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQTtTQUN0RDtJQUNMLENBQUM7SUFFRCxLQUFLLENBQUMsYUFBYSxDQUFFLEdBQVcsRUFBRSxHQUFZO1FBQzFDLElBQUk7WUFDQSxNQUFNLEVBQUMsRUFBRSxFQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFDaEMsTUFBTSxJQUFJLEdBQUcsTUFBTSxhQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDL0MsTUFBTSxFQUFDLElBQUksRUFBRSxHQUFHLEVBQUcsS0FBSyxFQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ2pDLElBQUcsQ0FBQyxJQUFJO2dCQUFFLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxPQUFPLEVBQUcsb0JBQW9CLEVBQUMsQ0FBQyxDQUFDO1lBQ3hFLE1BQU0sRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7WUFDNUMsTUFBTSxVQUFVLEdBQUcsSUFBSSxhQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztnQkFDckMsT0FBTyxFQUFHLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsT0FBTzthQUN0RCxDQUFDLENBQUM7WUFDSCxNQUFNLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN4QixRQUFRO1lBQ1IsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLE9BQU8sRUFBRyxTQUFTLEVBQUUsSUFBSSxFQUFHLEtBQUssRUFBQyxDQUFDLENBQUE7U0FDbkU7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNWLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUE7U0FDdEQ7SUFDTCxDQUFDO0NBR0o7QUFFRCxNQUFNLElBQUksR0FBRyxLQUFLLEVBQUUsRUFBZ0IsRUFBRSxHQUFVLEVBQUUsT0FBYyxFQUFFLEVBQUU7SUFDaEUsTUFBTSxhQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRTtRQUNuRCxJQUFJLEVBQUUsR0FBRyxHQUFHLE9BQU87S0FDdEIsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFBO0FBRUQsa0JBQWUsSUFBSSxpQkFBaUIsRUFBRSxDQUFDIn0=\n\n//# sourceURL=webpack:///./src/controllers/PaymentController.ts?");

/***/ }),

/***/ "./src/router/PaymentRouter.ts":
/*!*************************************!*\
  !*** ./src/router/PaymentRouter.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst BaseRouter_1 = __importDefault(__webpack_require__(/*! ./BaseRouter */ \"./src/router/BaseRouter.ts\"));\nconst AuthMiddleware_1 = __webpack_require__(/*! ../middleware/AuthMiddleware */ \"./src/middleware/AuthMiddleware.ts\");\nconst PaymentController_1 = __importDefault(__webpack_require__(/*! ../controllers/PaymentController */ \"./src/controllers/PaymentController.ts\"));\nclass PaymentRouter extends BaseRouter_1.default {\n    routes() {\n        this.router.post('/', AuthMiddleware_1.cekLog, PaymentController_1.default.createPayment);\n        this.router.get('/', AuthMiddleware_1.cekLog, AuthMiddleware_1.cekAdmin, PaymentController_1.default.getPayment);\n    }\n}\nexports.default = new PaymentRouter().router;\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGF5bWVudFJvdXRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXIvUGF5bWVudFJvdXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDhEQUFzQztBQUd0QyxpRUFBZ0U7QUFDaEUseUZBQWlFO0FBR2pFLE1BQU0sYUFBYyxTQUFRLG9CQUFVO0lBRTNCLE1BQU07UUFDVCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBRSxHQUFHLEVBQUUsdUJBQU0sRUFBRSwyQkFBaUIsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBRSxHQUFHLEVBQUUsdUJBQU0sRUFBRSx5QkFBUSxFQUFFLDJCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzFFLENBQUM7Q0FFSjtBQUVELGtCQUFlLElBQUksYUFBYSxFQUFFLENBQUMsTUFBTSxDQUFDIn0=\n\n//# sourceURL=webpack:///./src/router/PaymentRouter.ts?");

/***/ })

};