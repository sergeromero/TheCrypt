
var theCrypt;
(function(theCrypt){
	var Views;
	(function(Views){
		"use strict";
		
		var placesDiv = document.getElementById("place");
		var placeTemplate = document.getElementById("placeTemplate").innerHTML;
		var itemTemplate = document.getElementById("itemTemplate").innerHTML;
		var templater = GeneralPurpose.Templates;
		
		this.place = (function(){	
			return {
				render: function(place){
					var data = place.getData();
					
					var items = data.items.map(function(itemName){
						return { item: itemName };
					});
					
					var exits = data.exits.map(function(exitName){
						return { item: exitName };
					});
					
					placesDiv.innerHTML = templater.fill(placeTemplate, data);
					
					var itemsDiv = document.getElementById("placeItems");
					itemsDiv.innerHTML = templater.fillList(itemTemplate, items);
					
					var exitsDiv = document.getElementById("placeExits");
					exitsDiv.innerHTML = templater.fillList(itemTemplate, exits);
				}
			};
			
		})();
	}).apply(theCrypt.Views || (theCrypt.Views = {}));
})(theCrypt || (theCrypt = {}));