/* 
	Vidi http://psjplearn.blogspot.com/2013/06/javascript-namespacemodule-example.html 
*/


var SILLY = (function (module) {
  
  module.DoIt = function (resultObject) {
	  resultObject.prepend(Date() + '<br>');
  };
  
  return module;
} (SILLY || (new Object())));  // "{}" means "new Object()". It is a shortcut

//NOTE: The last line could be :  (SILLY || {}) => (SILLY || (new Object())));



/*	
var SILLY = (function() {
  
  if (SILLY === undefined) {
	var SILLY = new Object();
	SILLY.DoIt = function (resultObject) {
		resultObject.prepend(Date() + '<br>');
	};
  }
  return SILLY;    
}());
*/