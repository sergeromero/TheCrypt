
var theCrypt;
(function(theCrypt){
	var Views;
	(function(Views){
		"use strict";
		
		var playerDiv = document.getElementById("player");
		var playerTemplate = document.getElementById("playerTemplate").innerHTML;
		var itemTemplate = document.getElementById("itemTemplate").innerHTML;
		var templater = GeneralPurpose.Templates;
		
		var player = function(){
			return {
				render: function(player){
					var data = player.getData();
										
					var items = data.items.map(function(itemName){
						return { item: itemName };
					});
					
					playerDiv.innerHTML = templater.fill(playerTemplate, data);
					
					var itemsDiv = document.getElementById("playerItems");
					itemsDiv.innerHTML = templater.fillList(itemTemplate, items);
				}
			};
		};
		
		this.player = player();
	}).apply(theCrypt.Views || (theCrypt.Views = {}));
})(theCrypt || (theCrypt = {}));