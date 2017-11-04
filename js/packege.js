/**
PackegeJS

Copyright (c) 2017 katsuakikureyama

This software is released under the MIT License.
http://opensource.org/licenses/mit-license.php
*/
var packege = packege || (function (use){ 
var PackegeJS = PackegeJS ||  function (js){
js.lang = js.lang || {}; js.lib = js.lib || {};
js.lang.object = function(body){return function(){ var _={}; body(_); return _; }; }
js.instance = function(){
	var ins = [] , protected =[];
	return js.lang.object ( function (public){
 		public.entry = function(instance,p){
 			if(!instance.$){ delete instance.$;}
 			if(p){var n = ins.push(instance)-1;  return protected[protected.push((!protected[n])?{}:protected[n])-1];} else ins.push(instance) ; return false;
 		 }
 		public.is = function(instance){ return ins[ins.indexOf(instance)]; }
 		public.get_protected = function(a){return protected[ins.indexOf(a)]; }
  }); }()(); 
js.defined = function(){
	var clas = {} ,impl = {};
	return js.lang.object ( function (public){
 		public.entry = function(type,obj){ 
 		 		 if(!clas[type]){
 		 	Object.freeze(obj);clas[type]=obj; }
 		else throw new Error ( type +" was already exsist ." );  
 		public.class =  clas ;
 	}
 	 public.entryImpl = function( type,obj){ 
 		 if(!impl[type]){Object.freeze(obj);impl[type]=obj; }
 		  else throw new Error ( type +" was already exsist ." );  
 	  	 public.interface =  impl ;
	 	}
 	} );
}()();

js.lang.class = (function(type,body,pr,s){ 
    var pr = pr, s = s; 
    if(s)s={};
    js.defined.entry( type,{$:s,new: 
	function(c){  
	    var pu = {};
		var instance = {}; instance._ = pu;
		    instance.$= instance.$|| s;
		 var pr = js.instance.entry( instance,pr);
		 var  _ = {_:pu};  _.$ = s; body(_,pu,pr,s,c);
	 return _; },Type:function(){return type}}); });
 
js.lang.extends=function(type,extend,body,pr,s){ 
	var pr = pr, s = s;
	 js.defined.entry(type,{$:s,new:
	function(c){var ext=extend.new();
	 	if(s)ext.$=(ext.$!==false)?ext.$:{};
		if(pr)pr=js.instance.get_protected(ext);
		  body(ext,ext._,pr,ext.$,c);
	  return ext; },ext:Type=function(){return type}}); }

js.lang.interface = function(type,body){
     var type = type; 
     return function(){	js.defined.entryImpl( type,body); }; }

js.lang.implement = function(acceser,impl){
      Object.keys(impl).forEach(function (key) {
            acceser[key] = impl[key];
    });
} 
js.lang.struct = function() { var args = arguments , len = args.length; if((len % 2)!=0) throw new Error( Object.keys(this)[0] + "argument nunber is invalid");	var obj = {}; for(var i=0;i < len ; i += 2) obj[args[i]] = args[i+1];return function(){ return obj; }; }

return js; }({});
PackegeJS.lib = PackegeJS.lib || 
{ accessor : { final: Object.freeze }}; return PackegeJS; });

  

  