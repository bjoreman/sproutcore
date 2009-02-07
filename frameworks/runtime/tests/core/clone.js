// ==========================================================================
// Project:   SproutCore Costello - Property Observing Library
// Copyright: ©2006-2009 Sprout Systems, Inc. and contributors.
//            Portions ©2008-2009 Apple, Inc. All rights reserved.
// License:   Licened under MIT license (see license.js)
// ==========================================================================

/*globals module test ok isObj equals expects object isSet */

var object ;

module("Cloned Objects", {
  setup: function() {
    
	object = SC.Object.create({
	
	  name:'Cloned Object',
	  value:'value1',
	 
	  clone: function(object) {
	    var ret = object ;
	    switch (SC.typeOf(object)) {
	  
	  	 case SC.T_ARRAY:
	        ret = object.slice() ;
	    	break ;

	     case SC.T_OBJECT:
	        ret = {} ;
	        for(var key in object) ret[key] = object[key] ;
	    }

	    return ret ;
	  }
	});
  }
});


test("should return a cloned object", function() {
	var objectA = [1,2,3,4,5] ;
	var objectB = "SproutCore" ;
	var objectC = SC.hashFor(objectA);	
	var objectE = 100;
	var a = SC.clone(objectA);
	var b = SC.clone(objectA);
	
  	equals(SC.clone(objectB), SC.clone(objectB)) ;
	equals(SC.clone(objectC), SC.clone(objectC)) ;
	equals(SC.clone(objectE), SC.clone(objectE)) ;
	isSet(a, b);
});

test("should return cloned object when the object is null", function() {
	var objectD = null;
  	equals(SC.clone(objectD), SC.clone(objectD)) ;
});

// CAJ: This test description is not very clear.  Can you explain more clearly
// what you are trying to test here.
test("Condition to test --> else part of case SC.T_ARRAY --> object.slice()", function() {
	var arrayA  = ['value1','value2'] ;
	var resultArray = object.clone(arrayA);
	
	// CAJ: I think you are using equals() wrong.  it should be something like
	// equals(resultArray[0], arrayA[0], 'check first array item');
	equals(resultArray[0] == arrayA[0],resultArray[1] == arrayA[1],true);
    	
});

// CAJ: What's happening w/ this test?  It is commented out.  Please delete 
// or re-enable.
test("Condition to test --> else part of case SC.T_OBJECT ", function() {
	// var obj1 = object;
	// obj2 = object.clone(object);
	// equals(obj2,obj1);
});