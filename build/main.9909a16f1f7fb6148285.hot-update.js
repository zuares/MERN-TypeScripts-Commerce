exports.id = "main";
exports.modules = {

/***/ "./node_modules/cookie-parser/index.js":
/*!*********************************************!*\
  !*** ./node_modules/cookie-parser/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*!\n * cookie-parser\n * Copyright(c) 2014 TJ Holowaychuk\n * Copyright(c) 2015 Douglas Christopher Wilson\n * MIT Licensed\n */\n\n\n\n/**\n * Module dependencies.\n * @private\n */\n\nvar cookie = __webpack_require__(/*! cookie */ \"cookie\")\nvar signature = __webpack_require__(/*! cookie-signature */ \"cookie-signature\")\n\n/**\n * Module exports.\n * @public\n */\n\nmodule.exports = cookieParser\nmodule.exports.JSONCookie = JSONCookie\nmodule.exports.JSONCookies = JSONCookies\nmodule.exports.signedCookie = signedCookie\nmodule.exports.signedCookies = signedCookies\n\n/**\n * Parse Cookie header and populate `req.cookies`\n * with an object keyed by the cookie names.\n *\n * @param {string|array} [secret] A string (or array of strings) representing cookie signing secret(s).\n * @param {Object} [options]\n * @return {Function}\n * @public\n */\n\nfunction cookieParser (secret, options) {\n  var secrets = !secret || Array.isArray(secret)\n    ? (secret || [])\n    : [secret]\n\n  return function cookieParser (req, res, next) {\n    if (req.cookies) {\n      return next()\n    }\n\n    var cookies = req.headers.cookie\n\n    req.secret = secrets[0]\n    req.cookies = Object.create(null)\n    req.signedCookies = Object.create(null)\n\n    // no cookies\n    if (!cookies) {\n      return next()\n    }\n\n    req.cookies = cookie.parse(cookies, options)\n\n    // parse signed cookies\n    if (secrets.length !== 0) {\n      req.signedCookies = signedCookies(req.cookies, secrets)\n      req.signedCookies = JSONCookies(req.signedCookies)\n    }\n\n    // parse JSON cookies\n    req.cookies = JSONCookies(req.cookies)\n\n    next()\n  }\n}\n\n/**\n * Parse JSON cookie string.\n *\n * @param {String} str\n * @return {Object} Parsed object or undefined if not json cookie\n * @public\n */\n\nfunction JSONCookie (str) {\n  if (typeof str !== 'string' || str.substr(0, 2) !== 'j:') {\n    return undefined\n  }\n\n  try {\n    return JSON.parse(str.slice(2))\n  } catch (err) {\n    return undefined\n  }\n}\n\n/**\n * Parse JSON cookies.\n *\n * @param {Object} obj\n * @return {Object}\n * @public\n */\n\nfunction JSONCookies (obj) {\n  var cookies = Object.keys(obj)\n  var key\n  var val\n\n  for (var i = 0; i < cookies.length; i++) {\n    key = cookies[i]\n    val = JSONCookie(obj[key])\n\n    if (val) {\n      obj[key] = val\n    }\n  }\n\n  return obj\n}\n\n/**\n * Parse a signed cookie string, return the decoded value.\n *\n * @param {String} str signed cookie string\n * @param {string|array} secret\n * @return {String} decoded value\n * @public\n */\n\nfunction signedCookie (str, secret) {\n  if (typeof str !== 'string') {\n    return undefined\n  }\n\n  if (str.substr(0, 2) !== 's:') {\n    return str\n  }\n\n  var secrets = !secret || Array.isArray(secret)\n    ? (secret || [])\n    : [secret]\n\n  for (var i = 0; i < secrets.length; i++) {\n    var val = signature.unsign(str.slice(2), secrets[i])\n\n    if (val !== false) {\n      return val\n    }\n  }\n\n  return false\n}\n\n/**\n * Parse signed cookies, returning an object containing the decoded key/value\n * pairs, while removing the signed key from obj.\n *\n * @param {Object} obj\n * @param {string|array} secret\n * @return {Object}\n * @public\n */\n\nfunction signedCookies (obj, secret) {\n  var cookies = Object.keys(obj)\n  var dec\n  var key\n  var ret = Object.create(null)\n  var val\n\n  for (var i = 0; i < cookies.length; i++) {\n    key = cookies[i]\n    val = obj[key]\n    dec = signedCookie(val, secret)\n\n    if (val !== dec) {\n      ret[key] = dec\n      delete obj[key]\n    }\n  }\n\n  return ret\n}\n\n\n//# sourceURL=webpack:///./node_modules/cookie-parser/index.js?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nconst cors_1 = __importDefault(__webpack_require__(/*! cors */ \"cors\"));\nconst helmet_1 = __importDefault(__webpack_require__(/*! helmet */ \"helmet\"));\nconst AuthRouter_1 = __importDefault(__webpack_require__(/*! ./router/AuthRouter */ \"./src/router/AuthRouter.ts\"));\nconst dotenv_1 = __webpack_require__(/*! dotenv */ \"dotenv\");\nconst body_parser_1 = __importDefault(__webpack_require__(/*! body-parser */ \"body-parser\"));\nconst cookie_parser_1 = __importDefault(__webpack_require__(/*! cookie-parser */ \"./node_modules/cookie-parser/index.js\"));\nclass App {\n    constructor() {\n        this.app = express_1.default();\n        this.plugins();\n        this.routes();\n    }\n    plugins() {\n        this.app.use(helmet_1.default());\n        this.app.use(body_parser_1.default.json());\n        this.app.use(cookie_parser_1.default.json());\n        this.app.use(cors_1.default());\n        this.app.use(express_1.default.json());\n    }\n    routes() {\n        this.app.use('/api/v1/users', AuthRouter_1.default);\n    }\n}\ndotenv_1.config();\nif (!process.env.PORT) {\n    process.exit(1);\n}\n;\nconst port = parseInt(process.env.PORT);\nconst app = new App().app;\napp.listen(port, () => console.log(`Server running on port ${port}`));\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxzREFBOEI7QUFDOUIsZ0RBQXdCO0FBQ3hCLG9EQUE0QjtBQUM1QixxRUFBNkM7QUFDN0MsbUNBQThCO0FBQzlCLDhEQUFvQztBQUNwQyxrRUFBeUM7QUFFekMsTUFBTSxHQUFHO0lBRUw7UUFDSSxJQUFJLENBQUMsR0FBRyxHQUFHLGlCQUFPLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVTLE9BQU87UUFDYixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxnQkFBTSxFQUFFLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxxQkFBVSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsdUJBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLGNBQUksRUFBRSxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFUyxNQUFNO1FBQ1osSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLG9CQUFVLENBQUMsQ0FBQztJQUM5QyxDQUFDO0NBQ0o7QUFFRCxlQUFNLEVBQUUsQ0FBQztBQUVULElBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRTtJQUNsQixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO0NBQ2xCO0FBQUEsQ0FBQztBQUNGLE1BQU0sSUFBSSxHQUFVLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQy9DLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDO0FBQzFCLEdBQUcsQ0FBQyxNQUFNLENBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyJ9\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie\");\n\n//# sourceURL=webpack:///external_%22cookie%22?");

/***/ }),

/***/ "cookie-signature":
/*!***********************************!*\
  !*** external "cookie-signature" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-signature\");\n\n//# sourceURL=webpack:///external_%22cookie-signature%22?");

/***/ })

};