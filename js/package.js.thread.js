/**
PackageJS

Copyright (c) 2017 katsuakikureyama

This software is released under the MIT License.
http://opensource.org/licenses/mit-license.php
*/

package.lang.thread = {};
package.lang.thread.worker = function(){
	var task_url ;
	return js.lang.object ( function (public){
 		public.entry = function(task){ 
 		    var s = task.toSource();
    		var b = new Blob( [ s ], {type : "text/javascript"} );
  	         task_url = window.URL.createObjectURL( b );		
    	}
 	 public.run = function(){ 
 	     	return new Worker(task_url ); 		   
	 	}
 	} );
}();
