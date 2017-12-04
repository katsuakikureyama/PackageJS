/**
PackageJS

Copyright (c) 2017 katsuakikureyama

This software is released under the MIT License.
http://opensource.org/licenses/mit-license.php
*/
if(!package)
  var package = require("./package.js");
if(package.isNode)
   module.exports = package; 

package.browser = {};
package.request = {};

package.browser.request.Get = (function(){
	return package.lang.object ( function (public){
     public.params = function() {
  if (1 < document.location.search.length) {
     var query = document.location.search.substring(1);
     var parameters = query.split('&');  var result = {};
    for (var i = 0; i < parameters.length; i++) {
       var element = parameters[i].split('=');
      var pName = decodeURIComponent(element[0]);
      var pValue = decodeURIComponent(element[1]);
      result[paramName] = decodeURIComponent(paramValue);
    return result;
  }
  return null;
} } 
      } )();
})();



  
