
var GeneralPurpose;
(function(GeneralPurpose){
	var Templates;
	(function(Templates){
		"use strict";
		
		var fill = this.fill = function(template, data){
			Object.keys(data).forEach(function(key){
				var placeHolder = "{{" + key + "}}";
				var value = data[key];
				
				while(template.indexOf(placeHolder) !== -1){
					template = template.replace(placeHolder, value);
				}
			});
			
			return template;
		};
		
		this.fillList = function(template, dataArray){
			var listString = "";
			
			dataArray.forEach(function(data){
				listString += fill(template, data);
			});
			
			return listString;
		};
	}).apply(GeneralPurpose.Templates || (GeneralPurpose.Templates = {}));
})(GeneralPurpose || (GeneralPurpose = {}));