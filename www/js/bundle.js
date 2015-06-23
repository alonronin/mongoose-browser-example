webpackJsonp([0],{

/***/ 0:
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ function(module, exports, __webpack_require__) {

	var bsCss = __webpack_require__(/*! ../~/bootstrap/dist/css/bootstrap.css */ 1);
	var colors = __webpack_require__(/*! ../~/colors.css/css/colors.css */ 10);
	var customCss = __webpack_require__(/*! ./custom.css */ 247);
	
	var bs = __webpack_require__(/*! bootstrap */ 12);
	var $ = __webpack_require__(/*! jquery */ 14);
	
	var schema = __webpack_require__(/*! ./user */ 26);
	
	
	$(function(){
	    $('form').on('submit', function(e){
	        e.preventDefault();
	    });
	
	    $('button').on('click', function(e){
	        e.preventDefault();
	
	        var $alert = $('.alert');
	        var user = {};
	
	        user.name = $('input[name=name]').val();
	        user.password = $('input[name=password]').val();
	        user.email = $('input[name=email]').val();
	        user.age = $('input[name=age]').val();
	
	        var doc = mongoose.Document(user, schema);
	
	        doc.validate(function(err){
	            if(!err) {
	                $alert.addClass('hide');
	                return;
	            }
	
	            var errors = $.map(err.errors, function(error, path){
	                return error.message;
	            });
	
	            $alert.removeClass('hide').html(errors.join('<br>'));
	        });
	    })
	});

/***/ },

/***/ 1:
/*!********************************************!*\
  !*** ./~/bootstrap/dist/css/bootstrap.css ***!
  \********************************************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 10:
/*!*************************************!*\
  !*** ./~/colors.css/css/colors.css ***!
  \*************************************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 26:
/*!*********************!*\
  !*** ./src/user.js ***!
  \*********************/
/***/ function(module, exports, __webpack_require__) {

	var mongoose = __webpack_require__(/*! mongoose */ 27);
	var Schema = mongoose.Schema;
	var Type = Schema.Types;
	
	var schema = new Schema({
	    name: { type: String },
	    email: { type: String, required: true },
	    password: { type: String, required: true },
	    age: { type: Number, min: 18 }
	});
	
	
	module.exports = schema;
	
	


/***/ },

/***/ 247:
/*!************************!*\
  !*** ./src/custom.css ***!
  \************************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});
//# sourceMappingURL=bundle.js.map