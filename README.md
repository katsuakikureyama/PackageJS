# PackageJS

## Conception
create similar class object that has accessor by prototype chain control .
for instance , static public private protected and exteds ,interface .

if you know well more  object-oriented programming launguage ,
you will understand concept soon .

object , accessor concept was made like a Java .
but , you not need to native keyword new .

because , PackageJS has concept that memory control .
so ,this library being careful to prototype chain .
but , this library not Stable version.
if you care memory manage , you need to thinking about JavaScript structure.
especially ,for circular reference.
If you find a bug, please let me know.

this library has some namespace as package.
also , name space concept was made like a Java .
in my plan , if i create javascript library ,
will expansion to Package JS .

Package JS provide namespace and object-oriented programming for javascript.

## Description

Package JS has minimum package .

        package.lang
        package.instance
        package.defined

package.lang has some package.

        package.lang.object
        package.lang.class
        package.lang.extends
        package.lang.interface
        package.lang.struct

for example ,  you can use minimum object.

    var TestObj = function(){
    return package.lang.object ( function (public){
    　　　　public.test_variable = "i 'm test variable!";
    　　　　public.test_function = function(){ alert(public.test_variable); }
    　　　　}
    　　　　}); }();
    　　　　　　　　　　          
    　　          var testA  = TestObj();
    　　          var testB  = TestObj();
    　　          alert(TestA.test_variable);
    　　          
    　　          TestB.test_function();

    This object is lightweight object than new Object();(for now)
        Class Object is a bit heavy ,
        but, it has more useful accessor .
　
## How to create class object
    (function(){
    //  private static scope
        var private_static_variable = "private static";
        return js.lang.class ( "Foo" ,
        
        function (self,public,static,protected){
        　　// local scope
        　　static.public_static_variable = "i'm public_static_variable ";
        　　var private_variable = "i 'm private variable";
        
        　　/* getter */
        　　public.public_method_test = function(){ return "i'm public method"; }
        　　public.get_private_variable = function(){ return private_variable; }
        　　public.get_private_static_variable = function(){ return private_static_variable; }
        　　
        　　/* setter */
        　　public.set_private_variable = function(v){ private_variable = v; }
        　　public.set_private_static_variable = function(v){ private_static_variable = v; }
        　　　 
        　 },/* static = */ true ,/* protected = */ false);
        　 })();
        　 
        　 var FooA =  $.class.Foo.new();
        　 printProperty(FooA);
        　 console.log(FooA.$.public_static_variable);
        　 console.log(FooA._.public_method_test);
        　 
        　 console.log(FooA._.get_private_variable);
        　 console.log(FooA._.get_private_static_variable);
        　 
        　 var FooB =  $.class.Foo.new();
        　 printProperty(FooA);
        　 FooB._.set_private_variable("i was changed");
        　 console.log(FooA._.get_private_variable);
        　 console.log(FooB._.get_private_variable);
        　 
        　 FooB._.set_private_static_variable(" i was changed ");
        　 console.log(FooA._.get_private_static_variable);
        　 console.log(FooB._.get_private_static_variable);
        　 
        　 How to create extends class object
        　 
        　 /* parent class */
        　 (function(){
        　 return js.lang.class ( "Bar" ,
        　 function (self,public,static,protected){
        　 // local scope
        　 public.public_variable = "i'm public";
        　 protected.protected_variable = "i 'm protected!";
        　 
        　 static.public_static_variable = "i'm public static ";
        　 }, /* static =*/ true ,/* protected =*/ true );
        　 })();
        　 /* child class */
        　 (function(){
        　 return js.lang.extends("Baz",js.defined.class.Bar,
        　 function (parent,public,protected,static){
        　 console.log(protected);
        　 public.call_protected_variable = function(){ return protected.protected_variable; }
        　 public.set_protected_variable = function(v){ protected.protected_variable = v; }
        　 public.set_static_variable = function(v){ static.pubilc_static_variable = v; }
        　 
        　 }, /* static= */true,  /* protected = */ true );
        　 })();
        　 　　var BazA = $.class.Baz.new();
        　 　　console.log(  BazA._.call_protected_variable());
        　 　　console.log(  BazA._.set_protected_variable(" i was changed "));
        　 　　console.log( BazA._.call_protected_variable());
        　 　　
        　 　　var BazB = $.class.Baz.new();
        　 　　BazA.$.public_static_variable = " i was changed ";
        　 　　console.log( BazB.$.public_static_variable);
        　 　　console.log( BazA.$.public_static_variable);
　　　　　
## How to use Implements

Implements was different from other language.
interface apply self method to accessor that you select.
        
        /* interface */
        　　(function(){js.lang.interface("InterfaceTest", {interface_variable:"I'm Interface"})()}());
        　　　　/* implements */
        　　　　　　(function(){
        　　　　　　　　return js.lang.class ( "Qux" ,
        　　　　　　　　　　function ( self,public,protected,static){
        　　　　　　　　　　js.lang.implements(public,js.defined.interface.InterfaceTest);
        　　　　　　　　    });
        　　　　　　　})();
        　　　　　　　var Qux =  js.defined.class.Qux.new();
        　　　　　　　console.log( Qux._.interface_variable);
　　　　　
