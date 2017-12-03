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

package.utility = {};
package.utility.Arrays = {};
package.utility.Maps = {};
package.utility.Check = {};

package.utility.Arrays = (function(){
	return package.lang.object ( function (public){
     public.unique = function ( array ) {
	return array.filter( function( value, index ) {
		return index === array.indexOf( value ) ;
	} ) ;
}     
      } )();
})();
package.utility.Maps = (function(){
	return package.lang.object ( function (public){	
     public.dig = function(map,list){
           var temp  = list.shift();
            if(temp){
              if(!package.utility.Check.forObject(map)){map = {};}
             map[ temp ] = public.dig(map[temp],list);
           }else return {};
            return map;
        }  
      } )();
})();

package.utility.Check = (function(){
	return package.lang.object ( function (public){
     public.forObject = function(o) {
  return (o instanceof Object && !(o instanceof Array)) ? true : false;
  };    
      } )();
})();


  
