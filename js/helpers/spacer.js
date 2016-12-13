var theCrypt;
(function(theCrypt){
	var Helpers;
	(function(Helpers){
		this.spacer = {
				blank: function(){
				return "";
			},
			newLine: function(){
				return "\n";
			},
			line: function(length, character){
				var longString = "****************************************";
				longString +=    "----------------------------------------";
				longString +=    "========================================";
				longString +=    "++++++++++++++++++++++++++++++++++++++++";
				longString +=    "                                        ";
				
				if(longString.indexOf(character) == -1){
					character = "*";
				}
				
				length = Math.max(0, length);
				length = Math.min(40, length);
				return longString.substr(longString.indexOf(character), length);
			},
			wrap: function(text, length, character){
				var padLength = length - text.length - 3;
				
				if(padLength < 0){
					padLength = 1;
				}
				
				var wrapText = character + " " + text;
				wrapText += this.line(padLength, " ");
				wrapText += character;
				return wrapText;
			},
			box: function(text, length, character){
				var boxText = this.newLine();
				
				if(length <= text.length){
					length = text.length + 4;
				}
				
				boxText += this.line(length, character) + this.newLine();
				boxText += this.wrap(text, length, character) + this.newLine();
				boxText += this.line(length, character) + this.newLine();
				return boxText;
			}
		};
	}).apply(theCrypt.Helpers || (theCrypt.Helpers = {}));
})(theCrypt || (theCrypt = {}));