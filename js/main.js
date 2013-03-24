function FocusFields(o)
{
	var inputs = document.getElementsByTagName("input");
	for (var i = 0; i < inputs.length; i++ )
	{
		if(inputs[i].type == "text") 
		{
			inputs[i].valueHtml = inputs[i].value;
			inputs[i].onfocus = function ()
			{
				if(this.valueHtml == this.value) this.value = "";
				if(this.fake)
				{
					inputsSwap(this, this.previousSibling);
					this.previousSibling.focus();
				}
			}
			inputs[i].onblur = function () { if(this.value == "") {this.value = this.valueHtml;}}
		}
	}
	function inputsSwap(inp, inp2) {
		if(inp) inp.style.display = "none";
		if(inp2) el2.style.display = "inline";
	}
}
if (window.addEventListener) {
	window.addEventListener("load", FocusFields, false);
}
else 
	if (window.attachEvent) {
		window.attachEvent("onload", FocusFields);
}