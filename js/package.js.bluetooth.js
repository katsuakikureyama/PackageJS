/**
PackageJS

Copyright (c) 2017 katsuakikureyama

This software is released under the MIT License.
http://opensource.org/licenses/mit-license.php
*/

/*  you should use ES6 notation  */

package.io = {};
package.io.bluetooth = function(){
    
     var services = [{service:[]}];
     var characteristics = [];
  
	return js.lang.object ( function (public){
      
        public.set_scan_service = function(service){
               this.services[0].service.push(service);
        }
        public.set_scan_characteristic = function(characteristic){
               if(Array.isArray(characteristic))
                   this.characteristics.push(characteristic);
        }
        
 		this.scan = function(request){
 		   request.then(device =>{
           // device was fined
          return device.connectGATT();
        }).then(server =>{
            // device connect was succses , below is  scanning for service  
            let services = []; let l = this.service.length; var i = 0 ; 
            while (i < l ) {
                services.push(server.getPrimaryService(this.services[i]))       
                i=(i+1)|0; 
            }
            return Promise.all(services);
            }).then(services =>{
                // fined sevice  was succses , below is  scanning for characterstic  
                let sl = services.length; let cl this.characteristics.length; var i = 0; var j = 0;
                var scanCharacteristics =  [];
            while (i < sl ) {
                 while (j < cl ) {   
                         scanCharacteristics.push( services[i].getCharacteristic(this.characteristics.[sl]) );
                        i=(j+1)|0;  
                }       
                i=(i+1)|0; 
            }
            return Promise.all( scanCharacteristics);
        }).then(characteristics =>{
            // you could get charastics
        }).catch(error =>{
            // when error happend
            console.log(error);
        });
        }
 		public.request_all = function(){ 
 		  this.scan( navigator.bluetooth.requestDevice({filters: anyDevice()}));
 		}
 		public.request = function(){ 
 		  this.scan ( navigator.bluetooth.requestDevice({ filters: [this.services] }));
 		}
 } );


}();
