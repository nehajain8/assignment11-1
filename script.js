//Need to add onload event as without DOM load, DOM api will not work
window.onload = function loadContIcons(){
	var dynamicPara1 = document.createElement("p"); //creating paragraph1
	dynamicPara1.innerText = "The Document Object Model (DOM) is aprogramming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.";
	dynamicPara1.style.color = "purple";
	document.body.appendChild(dynamicPara1); //Adding paragraph1
	var dynamicPara2 = document.createElement("p"); //creating paragraph2
	dynamicPara2.innerText = "A Web page is a document. This document can be either displayed in the browser window or as the HTML source. But it is the same document in both cases. The Document Object Model (DOM) represents that same document so it can be manipulated. The DOM is an object-oriented representation of the web page, which can be modified with a scripting language such as JavaScript.";
	dynamicPara2.style.color = "red";
	document.body.appendChild(dynamicPara2); //Adding paragraph2
	var body1= document.getElementsByTagName("body")[0];
	body1.style.backgroundColor = "lightgray"; //Adding style to the body tag
}

