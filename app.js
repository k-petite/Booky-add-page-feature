let maindiv = document.getElementById('text');
let primarydiv = document.getElementById('primary');

let children = document.getElementById('primary').children;
var fulltext = [];
var lines = []; //i should make a lines and them start them from new page
let divs = [];
var words = [];
// let pageN = document.createElement('div');

// function createPage(number){
// 	let pageN = document.createElement('div');
// 	maindiv.appendChild(pageN);
// 	pageN.setAttribute("id", number);
// }

function outerWidth(elem){ //measures the height of the element
	var curStyle = elem.currentStyle || window.getComputedStyle(elem);
	outerHeight = elem.offsetHeight;
	outerHeight += parseInt(curStyle.marginTop);
	outerHeight += parseInt(curStyle.marginBottom);

	// console.log(outerHeight);
    return outerHeight //If you'd like to return the outerheight
}

primarydiv.style.display = 'none'; //hides initial text, maybe will be not needed if we will use the direct children

// createPage(1);//creates first page


let p = 1; //page number

let newpage = true;//serves to close the loop after each word will be added
let pageN = document.createElement('div');
maindiv.appendChild(pageN);
pageN.setAttribute("id", 1);
// let pageN = document.getElementById('1');
// console.log(pageN);

let t = 1;
do {


	for (i = 0; i < children.length; i++){ //number of tags which are children of maindiv
		let tagname = children[i].tagName;
		// console.log(pageN.id);
		let setOfWords = children[i].innerHTML.split(' ');
		let child = document.createElement(tagname.toString());
		console.log(child);
		child.setAttribute("id", t*1000);
		t++;
		pageN.appendChild(child);

			for (c = 0; c < setOfWords.length; c++){ //number of words in each maindiv children = block of text
				// console.log(pageN);
				if (outerWidth(pageN) < 200){
					// console.log('hi!!!');
					var span = document.createElement('span');

					// console.log(child);
					// console.log(child);

					span.textContent = setOfWords[c] + ' ';
					// console.log(outerWidth(pageN), pageN);

				} else {



					p++; //increases pages number
					c--; //decreases counter to add current word to the next page

					let nextpage = document.createElement('div');
					nextpage.setAttribute("id", p);
					maindiv.appendChild(nextpage);

					child = document.createElement(tagname.toString());
					child.setAttribute("id", t*1000);

					pageN = document.getElementById(p);

					pageN.appendChild(child);
					child = document.getElementById(t*1000);
					t++;
					// console.log(document.getElementById(1));
					console.log(child);

				}
				child.appendChild(span);


			}

	}
if (pageN.textContent ===''){
			text.removeChild(pageN);
		}

newpage = false;

} while (newpage === true);

console.log(maindiv);



// maindiv.textContent = fulltext;
//
// let setOfWords = maindiv.innerHTML.split(' ');
//
//








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
