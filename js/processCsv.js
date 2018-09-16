let fileUploaded = false; //doublecheck
let infoArray = [];


function errorHandler(evt) {
	if(evt.target.error.name == "NotReadableError") {
		alert('Cannot read file!');
	}
}
/* <!-- <script>
      var openFile = function(event) {
        var input = event.target;

        var reader = new FileReader();
        reader.onload = function(){
          var text = reader.result;
          var node = document.getElementById('output');
          node.innerText = text;
          //console.log(reader.result.substring(0, 200));
          var infoStr = reader.result.toString();
          console.log(reader.result.length);//works
          //put in array?

	  //       for (var i = 0; i < 9; i++) {//reader.result length?
			// 	console.log(i);
			// }

        };
        reader.readAsText(input.files[0]);
      };

      var toTimestamp = function (strDate){
		   var datum = Date.parse(strDate);
		   return datum/1000;
		};


    </script> -->*/
function getAsText(fileToRead) {

	let reader = new FileReader();

	reader.readAsText(fileToRead);

	reader.onload = loadHandler;
	reader.onerror = errorHandler;
	console.log(reader.result.substring(0, 200));//is it reading?

	reader.readAsText(input.files[0]);

}

function handleFiles(files){
	if (window.FileReader) {
		getAsText(files[0]);
		filesUploaded = true;
	} else {
		alert("FilerReader not supported in browser.");
	}
}

function loadHandler(event){
	let csv = event.target.result;
	processData(csv);
}

function processData(csv) {
	let allTextLines = csv.split("/\r\n|\n");//doublecheck

	for (let i = 0; i < allTextLines.length; i++){
		let row = allTextLines[i].split(';');

		let col = [];

		for (let j = 0; j < row.length; j++) {
			col.push(row[j]);
		}

		infoArray.push(col);//10:48

	}
}

function getColumn(){

}

function getInfo(){

}


//if there's no file uploaded
/*if (!fileUploaded) {
	openModal('errorModal');
} else if (inforArray.length === 0) {
	openModal('emptyList');
} else {
  //do stuff
}*/

//example html output
/*function displayWinner(){
	$('#winners-name').html(currentWinner);
}*/