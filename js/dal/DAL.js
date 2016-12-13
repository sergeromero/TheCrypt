var GeneralPurpose;
(function(GeneralPurpose){
	var DAL;
	(function(DAL){
		"use strict";
		
		var baseUrl = "someurl/";
		
		this.load = function(userName, callback){
			var xhr = new XMLHttpRequest();
			var url = baseUrl + userName + ".json";
			
			xhr.addEventListener("load", function(){
				var data = JSON.parse(xhr.responseText);
				callback(data);
			});
			
			xhr.open("GET", url);
			xhr.send();
		};
	}).apply(GeneralPurpose.DAL || (GeneralPurpose.DAL = {}));
})(GeneralPurpose || (GeneralPurpose = {}));