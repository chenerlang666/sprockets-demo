/**
 * Author: jason_chen(chenwei)
 * Date: 13-3-1
 */
(function ($,B){
    var template=JST['templates/home'];
    $('#content').html(template({
        tmpl_name:'ejs',
        gem_name:'sprockets'
    }));
})(Zepto,Backbone);
