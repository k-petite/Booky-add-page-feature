let div = document.getElementById('text');

let children = document.getElementById('text').children;
var fulltext = ' ';

// for (i = 0; i < children.length; i++) { //adding content in all div child nodes into array
//   fulltext += children[i].textContent;
// }
//
// let symbolstotal = fulltext.split("").length;

// console.log(symbolstotal);


// console.log(height);


function outerWidth(elem){
	var curStyle = elem.currentStyle || window.getComputedStyle(elem);
	outerHeight = elem.offsetHeight;
	outerHeight += parseInt(curStyle.marginTop);
	outerHeight += parseInt(curStyle.marginBottom);

	console.log(outerHeight);
    return outerHeight //If you'd like to return the outerheight
}
outerWidth(div);

if (outerHeight > 200){
  var text = 'hihiiii';
  var newdiv = document.createElement("div");
  newdiv.textContent = text;
  document.body.appendChild(newdiv);

  console.log(newdiv);

}
