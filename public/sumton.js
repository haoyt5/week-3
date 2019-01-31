var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function (){
	if (xhr.readyState === 4 && xhr.status === 200){
		var inputNum = JSON.parse(xhr.responseText);
		var getnumberHTML = "<h3 class='u-p-inline'>The sum from 1 to</h3>";
	}
};
xhr.open('Get','number.json');
xhr.send();


// <h3 class="u-p-inline ">The sum from 1 to</h3>
// <h2 class="u-p-inline u-input">10</h2>
// <h3 class="u-p-inline">is</h3>
//  <h2 class="u-p-inline u-input">55</2>