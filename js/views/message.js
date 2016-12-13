var theCrypt;
(function(theCrypt){
	var Views;
	(function(Views){
		var message = function(){
			"use strict";
			
			var div = document.getElementById("messages");
			var template = document.getElementById("messageTemplate").innerHTML;
			
			return {
				render: function(message){
					var data = { message: message };
					div.innerHTML = GeneralPurpose.Templates.fill(template, data);
				},
				clear: function(){
					div.innerHTML = "";
				}
			};
		};
		
		this.message = message();
	}).apply(theCrypt.Views || (theCrypt.Views = {}));
})(theCrypt || (theCrypt = {}));