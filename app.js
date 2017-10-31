let maindiv = document.getElementById('text'); //div which will contain divs with text
let primarydiv = document.getElementById('primary'); //div which contains the text initially
let children = document.getElementById('primary').children; //tag which are nested in the primary div


function outerWidth(elem){ //measures the height of the element
	var curStyle = elem.currentStyle || window.getComputedStyle(elem);
	outerHeight = elem.offsetHeight;
	outerHeight += parseInt(curStyle.marginTop);
	outerHeight += parseInt(curStyle.marginBottom);
	// console.log(outerHeight);
    return outerHeight //If you'd like to return the outerheight
}

primarydiv.style.display = 'none'; //hides initial text, maybe will be not needed if we will use the direct children


let p = 1; //page counter
let t = 1; //blocks of text (h1; p) counter

let newpage = true;//serves to close the loop after each word will be added
let pageN = document.createElement('div'); //creates first page (div)
maindiv.appendChild(pageN); //append it to the maindiv
pageN.setAttribute("id", 1); //set its id to "1"

do { //this loop will be performed untill all the last word of the text will be processed
	for (i = 0; i < children.length; i++){ //number of tags which are children of maindiv
		let tagname = children[i].tagName;
		let setOfWords = children[i].innerHTML.split(' ');
		let child = document.createElement(tagname.toString());
		console.log(child);
		child.setAttribute("id", t*1000);
		t++;
		pageN.appendChild(child);

			for (c = 0; c < setOfWords.length; c++){ //number of words in each maindiv children = block of text
				var span = document.createElement('span');
				if (outerWidth(pageN) < 200){
					span.textContent = setOfWords[c] + ' ';
				} else {
					p++; //increases pages number
					c--; //decreases counter to add current word to the next page
					let nextpage = document.createElement('div');
					nextpage.setAttribute("id", p);
					maindiv.appendChild(nextpage);
					child = document.createElement(tagname.toString());
					child.setAttribute("id", t*1000);
					pageN = document.getElementById(p);
					let sp = document.getElementsByTagName('span');
					let lastword = sp[sp.length-1];
					pageN.appendChild(child);
					child = document.getElementById(t*1000);
					child.appendChild(lastword);
					t++;
				}
				child.appendChild(span);
				// console.log(child);
			}

	}
	if (pageN.textContent ===''){
			text.removeChild(pageN);
	}
	newpage = false;
} while (newpage === true);

console.log(maindiv);
