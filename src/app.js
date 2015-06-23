var bsCss = require('../node_modules/bootstrap/dist/css/bootstrap.css');
var colors = require('../node_modules/colors.css/css/colors.css');
var customCss = require('./custom.css');

var bs = require('bootstrap');
var $ = require('jquery');

var schema = require('./user');


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