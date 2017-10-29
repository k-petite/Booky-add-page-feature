let div = document.getElementById('text');

let children = document.getElementById('text').children;
var fulltext = [];

var lines = []; //i should make a lines and them start them from new page
let divs = [];

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

	// console.log(outerHeight);
    return outerHeight //If you'd like to return the outerheight
}
outerWidth(div);



var words = [];


for (i = 1; i < children.length; i++){
	var text = children[i].innerHTML;
	fulltext += words.concat(text);
}

div.textContent = fulltext;

let setOfWords = div.innerHTML.split(' ');


div.textContent = '';
// console.log(fulltext);


function preventBreak() {//this function prevents from breaking one word into lines
  let wordslength = 0; //counts the sum of the letters of all the words in one row
	let currentline = '';

	// lines.push(span);
	// let page = document.createElement('div');
	// document.body.appendChild(page);

  for (i = 0;  i < setOfWords.length; i++){
    if (wordslength <= 100){
			currentline += setOfWords[i] + ' ';
			wordslength += setOfWords[i].length;

    }	else {
				// lines.push(line);
				let span = document.createElement('span');
			  // let spans = [];
				// spans.push(span);
				span.textContent = currentline;
				div.appendChild(span);
				currentline = ' ';
	      wordslength = 0;
	      i--;
      }
			if (i === (setOfWords.length - 1)){
				let span = document.createElement('span');
				span.textContent = currentline;
				div.appendChild(span);
			}
			// div.appendChild(span);
  }

	let spans = document.getElementsByTagName('span');
	for (i = 0;  i < spans.length; i++){
		// if (lines.length > 5) {
		// 	document.body.appendChild(page);
		// 	console.log(page);
		// 	lines = [];
		// }
		let spanslength = 0;
		let currentdiv = [];

		if (spanslength <= 5){
			currentdiv += spans[i];
			spanslength += spans[i].length;

		}	else {
				// lines.push(line);
				let div = document.createElement('div');
				// let spans = [];
				// spans.push(span);
				div.appendChild(span);
				currentdiv = [];
				spanslength = 0;
				i--;
			}
			if (i === (spans.length - 1)){
				let div = document.createElement('div');
				// div.appendChild(span);
			}
			// div.appendChild(span);
	}


}//end of preventBreak() function
 // console.log(div);

  preventBreak();
	console.log(document.getElementsByTagName('span'));
