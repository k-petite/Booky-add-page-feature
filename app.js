let div = document.getElementById('text');

let children = document.getElementById('text').children;
var fulltext = [];

// function outerWidth(elem){
// 	var curStyle = elem.currentStyle || window.getComputedStyle(elem);
// 	outerHeight = elem.offsetHeight;
// 	outerHeight += parseInt(curStyle.marginTop);
// 	outerHeight += parseInt(curStyle.marginBottom);
//
// 	// console.log(outerHeight);
//     return outerHeight //If you'd like to return the outerheight
// }
// outerWidth(div);

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


  for (i = 0;  i < setOfWords.length; i++){
    if (wordslength <= 100){
			currentline += setOfWords[i] + ' ';
			wordslength += setOfWords[i].length;

    }	else {
				let span = document.createElement('span');
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
  }

	let spans = document.getElementsByTagName('span');
	let spanslength = 0;
	let currentdiv = [];
	div.style.display = 'none';

	for (i = 0;  i < spans.length; i++){
		console.log(i);

    if (spanslength <= 3){
			currentdiv.push(spans[i]);
			spanslength += 1;
    }	else {
				let block = document.createElement('div');
				for(i = 0; i < currentdiv.length; i++){
					block.innerHTML += currentdiv[i].innerHTML;
				}
				console.log(block);

				document.body.appendChild(block);
				currentdiv = [];
	      spanslength = 0;
      }
			if (i === (spans.length - 1)){
				let block = document.createElement('div');
				for(i = 0; i < currentdiv.length; i++){
					block.innerHTML += currentdiv[i].innerHTML;
				}
				console.log(block);

				document.body.appendChild(block);
				break;
			}
  }

}//end of preventBreak() function

  preventBreak();
