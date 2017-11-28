/**
PackageJS

Copyright (c) 2017 katsuakikureyama

This software is released under the MIT License.
http://opensource.org/licenses/mit-license.php
*/
   //  /1 is get rid of prototype chain ,because javascript problem.


package.lang.math = {};
package.lang.math
package.lang.math.algorithm = function(){
	var cache  ;
	return js.lang.object ( function (public){
 		public.euclidean = function(s1 , s2){ 
 		       if (  s2 <= s1 )
 		             throw new Error("i 'm sorry, you must be s1 is big number more than s2 by this function ");
 		     
 		       var tmp1 = s1/1 ;  var tmp2 = s2/1 ;  var mod ;
 		         while(mod){
 		         	  mod = tmp1 % tmp2 ;
 		         	 if(!mod)
 		         	     return tmp2;
 		         	else
 		              tmp1 = tmp2 ; tmp2 = mod;
 		         }  
 		    }
 		
}();

package.lang.math.number = function(){
	var cache  ;
	return js.lang.object ( function (public){
 		 public.fibonacci = function(n){
 		     var n = n/1;var tmp1 = 0, var tmp2 = 1;
 		   	 i = 0;while(i < arr.length) {
 		   	 	  res = tmp1 + tmp2;
 		   	 	  tmp1 = tmp2; tmp2 = res;
 		   	 }
 		   	 return res;
 		 }
 		 
 		public.radian = function(degrees) {
            return degrees * Math.PI / 180;
        }; 
 		 	 
 	  	} );
}();


package.lang.math.function = function(){
	var cache  ;
	return js.lang.object ( function (public){
 	 public.divisor = function(n){
 	    i = 0; while(i < n) {
                res =+ n;
               i=(i+1)|0;
            } 
            return res;
 	  }	
      public.zeta = function(k){
 		     i = 0; while(i < k) {
                res =+ 1/i;
               i=(i+1)|0;
            } 
            return res;
 	   }
 	   
 	  public.gamma = function( a,g/*stride*/,n/*accuracy*/){
 	 	   }
 	 	  	} );
}();

