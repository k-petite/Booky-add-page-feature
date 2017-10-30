let maindiv = document.getElementById('text');
let primarydiv = document.getElementById('primary');

let children = document.getElementById('primary').children;
var fulltext = [];
var lines = []; //i should make a lines and them start them from new page
let divs = [];
var words = [];
let page = document.createElement('div');

function createPage(){
	let page = document.createElement('div');
	maindiv.appendChild(page);
}

primarydiv.style.display = 'none';

createPage();//creates first page

for (i = 0; i < children.length; i++){ //number of tags which are children of maindiv
	// var text = children[i].innerHTML;
	// fulltext += words.concat(text);
	let tagname = children[i].tagName;
	let child = document.createElement(tagname.toString());
	page.appendChild(child);
	maindiv.appendChild(page);
	console.log(children[i]);

	let setOfWords = children[i].innerHTML.split(' ');



	for (c = 0; c < setOfWords.length; c++){ //number of words in each maindiv children = block of text
		let span = document.createElement('span');
		span.textContent = setOfWords[c] + ' ';
		child.appendChild(span);

	}

	// if (){
	//
	// }
}

console.log(maindiv);



// maindiv.textContent = fulltext;
//
// let setOfWords = maindiv.innerHTML.split(' ');
//
//



function outerWidth(elem){
	var curStyle = elem.currentStyle || window.getComputedStyle(elem);
	outerHeight = elem.offsetHeight;
	outerHeight += parseInt(curStyle.marginTop);
	outerHeight += parseInt(curStyle.marginBottom);

	// console.log(outerHeight);
    return outerHeight //If you'd like to return the outerheight
}
outerWidth(maindiv);




// console.log(fulltext);


// function preventBreak() {//this function prevents from breaking one word into lines
//   let wordslength = 0; //counts the sum of the letters of all the words in one row
// 	let currentline = '';
//
// 	// lines.push(span);
// 	// let page = document.createElement('div');
// 	// document.body.appendChild(page);
//
//   for (i = 0;  i < setOfWords.length; i++){
//     if (wordslength <= 100){
// 			currentline += setOfWords[i] + ' ';
// 			wordslength += setOfWords[i].length;
//
//     }	else {
// 				// lines.push(line);
// 				let span = document.createElement('span');
// 			  // let spans = [];
// 				// spans.push(span);
// 				span.textContent = currentline;
// 				maindiv.appendChild(span);
// 				currentline = ' ';
// 	      wordslength = 0;
// 	      i--;
//       }
// 			if (i === (setOfWords.length - 1)){
// 				let span = document.createElement('span');
// 				span.textContent = currentline;
// 				maindiv.appendChild(span);
// 			}
// 			// div.appendChild(span);
//   }
//
// 	let spans = document.getElementsByTagName('span');
// 	for (i = 0;  i < spans.length; i++){
// 		// if (lines.length > 5) {
// 		// 	document.body.appendChild(page);
// 		// 	console.log(page);
// 		// 	lines = [];
// 		// }
// 		let spanslength = 0;
// 		let currentdiv = [];
//
// 		if (spanslength <= 5){
// 			currentdiv += spans[i];
// 			spanslength += spans[i].length;
//
// 		}	else {
// 				// lines.push(line);
// 				let div = document.createElement('div');
// 				// let spans = [];
// 				// spans.push(span);
// 				maindiv.appendChild(span);
// 				currentdiv = [];
// 				spanslength = 0;
// 				i--;
// 			}
// 			if (i === (spans.length - 1)){
// 				let block = document.createElement('div');
// 				block.style.textAlign = 'justify';
// 				for(i = 0; i < currentdiv.length; i++){
// 					block.innerHTML += currentdiv[i].innerHTML;
// 				}
// 				console.log(block);
//
// 				document.body.appendChild(block);
// 				break;
//
// 			}
//
//   }

// }//end of preventBreak() function
 // console.log(div);

  // preventBreak();
	// console.log(document.getElementsByTagName('span'));
