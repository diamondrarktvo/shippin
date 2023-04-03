$(document).ready(() => {
    // Header
    $('.menus-hamburger .fa-bars').on('click', () => {
        $(".menus-hamburger .menus-mobile").addClass("show-menu-right");
    });
    $('.menus-mobile .fa-xmark').on('click', () => {
        $(".menus-mobile").removeClass("show-menu-right");
    });
     // Fin Header
    
});
$('.bx-menu').on('click', ()=>{
    const parent=$('.bx-menu').parents('body').find('#sidebar');
    if($(parent).hasClass('active')){
        $(parent).removeClass('active');
    }else{
        $(parent).addClass('active');
    }
});
$('.box-table-heading-filter button').on('click', ()=>{
    if($('.box-filter').hasClass('active')){
        $('.box-filter').removeClass('active');
    }else{
        $('.box-filter').addClass('active');
    }
});
$('.view-more').on('click', ()=>{
    if($('p').hasClass('active')){
        $('p').removeClass('active');
    }else{
        $('p').addClass('active');
    }
});

// accordions
const accordionBtns = document.querySelectorAll(".accordion");

accordionBtns.forEach((accordion) => {
  accordion.onclick = function () {
    this.classList.toggle("is-open");

    let content = this.nextElementSibling;
    console.log(content);

    if (content.style.maxHeight) {
      //this is if the accordion is open
      content.style.maxHeight = null;
    } else {
      //if the accordion is currently closed
      content.style.maxHeight = content.scrollHeight + "px";
      console.log(content.style.maxHeight);
    }
  };
});

// calandar
//au départ par défault :



// =================

var tod = new Date(Date.UTC(2023, 11, 20, 3, 0, 0));
var compteurMois = 4;//0 = janvier
tod.setMonth(compteurMois);
addCalendar(tod);
 
//en cliquant sur les fleches
function changer(elem){
  if ( elem.id == "prec") {
    compteurMois--;
    if ( compteurMois < 0 ) compteurMois = 11;
  }
  else if ( elem.id == "suiv") {
    compteurMois++;
    if ( compteurMois > 11 ) compteurMois = 0;
  }
  var today = new Date();
  today.setMonth(compteurMois);//on simule une date avec le mois qu'on veut (de 0 = janvier, à 11 = décembre)
  addCalendar(today);
}
 
//la fonction qui réécrit le calendrier selon le mois
function addCalendar(today){
  var container = document.getElementById("cal");
  var day = today.getDay()
  var date = today.getDate();
  var month = today.getMonth();
  var year = today.getFullYear();
  today.setDate(1);
  var startDay = today.getDay();
  var monthLengths = [31,28,31,30,31,30,31,31,30,31,30,31];
  var dayLabels = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
  var monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  var dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
 
//   var current = "";
//   if ( startDay == 0 ) current = (-6);
//   else current = 1-startDay;//on prend le numéro du jour et on recule jusqu'au 1er jour de la semaine
var current = 1 - startDay;
  var calendar = '<input type="button" id="prec" value="<<" onclick="changer(this);" />';
  calendar += '</label><label class="month">'+monthNames[month]+'</label>';
  calendar += '<label class="year"> '+year+'</label>';
  calendar += '<input type="button" id="suiv" value=">>" onclick="changer(this);" />';
  calendar += '<table><tr>';
  dayLabels.forEach(function(label){
    calendar += '<th>'+label+'</th>';
  })
  calendar += '</tr><tr>';
  //on a fini le haut du calendrier avec les boutons, on va commence en-dessous à rajouter les jours
  var dayClasses = '', curDay = "";
 
  var limitMonth = monthLengths[today.getMonth()];//savoir à quel numéro s'arrête le mois (28, 30, 31)
 
//Ici, on passe sur chaque journée du mois
  while( current < limitMonth){
    current++;
    if (current > 0){
      dayClasses = '';
      var d = new Date();
      today.setDate(current);//on simule qu'on est à +1 jour à chaque tour de while
      curDay = today.getDay();
      var vraiMois = d.getMonth();
      if ( vraiMois == today.getMonth()){//on met une 'class' css si on est sur le mois actuel
        if (current < date){
          dayClasses = ' disabled';
        }
        if (current == date){
          dayClasses = ' today';
        }
      }
      calendar += '<td class="'+dayClasses+'" data-day="'+dayNames[today.getDay()]+'">'+current+'</td>';
    } else {
      //on met des espaces blancs au debut du mois, tant que current arrive à 1
      calendar += '<td></td>';
    }
    if ( curDay == 0 && current > 0){ //après chaque dimanche, on passe à la ligne
      calendar += '</tr><tr>';
    }
  }
  calendar += '</tr></table>';
  container.innerHTML = calendar;
}

// ============

//au départ par défault :
var tod = new Date(Date.UTC(2023, 11, 20, 3, 0, 0));
var compteurMois = 4;//0 = janvier
tod.setMonth(compteurMois);
addCalendar3(tod);
 
//en cliquant sur les fleches
function changer(elem){
  if ( elem.id == "prec") {
    compteurMois--;
    if ( compteurMois < 0 ) compteurMois = 11;
  }
  else if ( elem.id == "suiv") {
    compteurMois++;
    if ( compteurMois > 11 ) compteurMois = 0;
  }
  var today = new Date();
  today.setMonth(compteurMois);//on simule une date avec le mois qu'on veut (de 0 = janvier, à 11 = décembre)
  addCalendar3(today);
}
 
//la fonction qui réécrit le calendrier selon le mois
function addCalendar3(today){
  var container = document.getElementById("cal2");
  var day = today.getDay()
  var date = today.getDate();
  var month = today.getMonth();
  var year = today.getFullYear();
  today.setDate(1);
  var startDay = today.getDay();
  var monthLengths = [31,28,31,30,31,30,31,31,30,31,30,31];
  var dayLabels = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
  var monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  var dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
 
//   var current = "";
//   if ( startDay == 0 ) current = (-6);
//   else current = 1-startDay;//on prend le numéro du jour et on recule jusqu'au 1er jour de la semaine
var current = 1 - startDay;
  var calendar = '<input type="button" id="prec" value="<<" onclick="changer(this);" />';
  calendar += '</label><label class="month">'+monthNames[month]+'</label>';
  calendar += '<label class="year"> '+year+'</label>';
  calendar += '<input type="button" id="suiv" value=">>" onclick="changer(this);" />';
  calendar += '<table><tr>';
  dayLabels.forEach(function(label){
    calendar += '<th>'+label+'</th>';
  })
  calendar += '</tr><tr>';
  //on a fini le haut du calendrier avec les boutons, on va commence en-dessous à rajouter les jours
  var dayClasses = '', curDay = "";
 
  var limitMonth = monthLengths[today.getMonth()];//savoir à quel numéro s'arrête le mois (28, 30, 31)
 
//Ici, on passe sur chaque journée du mois
  while( current < limitMonth){
    current++;
    if (current > 0){
      dayClasses = '';
      var d = new Date();
      today.setDate(current);//on simule qu'on est à +1 jour à chaque tour de while
      curDay = today.getDay();
      var vraiMois = d.getMonth();
      if ( vraiMois == today.getMonth()){//on met une 'class' css si on est sur le mois actuel
        if (current < date){
          dayClasses = ' disabled';
        }
        if (current == date){
          dayClasses = ' today';
        }
      }
      calendar += '<td class="'+dayClasses+'" data-day="'+dayNames[today.getDay()]+'">'+current+'</td>';
    } else {
      //on met des espaces blancs au debut du mois, tant que current arrive à 1
      calendar += '<td></td>';
    }
    if ( curDay == 0 && current > 0){ //après chaque dimanche, on passe à la ligne
      calendar += '</tr><tr>';
    }
  }
  calendar += '</tr></table>';
  container.innerHTML = calendar;
}

// ===========

//au départ par défault :
var tod = new Date(Date.UTC(2023, 11, 20, 3, 0, 0));
var compteurMois = 4;//0 = janvier
tod.setMonth(compteurMois);
addCalendar4(tod);
 
//en cliquant sur les fleches
function changer(elem){
  if ( elem.id == "prec") {
    compteurMois--;
    if ( compteurMois < 0 ) compteurMois = 11;
  }
  else if ( elem.id == "suiv") {
    compteurMois++;
    if ( compteurMois > 11 ) compteurMois = 0;
  }
  var today = new Date();
  today.setMonth(compteurMois);//on simule une date avec le mois qu'on veut (de 0 = janvier, à 11 = décembre)
  addCalendar4(today);
}
 
//la fonction qui réécrit le calendrier selon le mois
function addCalendar4(today){
  var container = document.getElementById("cal1");
  var day = today.getDay()
  var date = today.getDate();
  var month = today.getMonth();
  var year = today.getFullYear();
  today.setDate(1);
  var startDay = today.getDay();
  var monthLengths = [31,28,31,30,31,30,31,31,30,31,30,31];
  var dayLabels = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
  var monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  var dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
 
//   var current = "";
//   if ( startDay == 0 ) current = (-6);
//   else current = 1-startDay;//on prend le numéro du jour et on recule jusqu'au 1er jour de la semaine
var current = 1 - startDay;
  var calendar = '<input type="button" id="prec" value="<<" onclick="changer(this);" />';
  calendar += '</label><label class="month">'+monthNames[month]+'</label>';
  calendar += '<label class="year"> '+year+'</label>';
  calendar += '<input type="button" id="suiv" value=">>" onclick="changer(this);" />';
  calendar += '<table><tr>';
  dayLabels.forEach(function(label){
    calendar += '<th>'+label+'</th>';
  })
  calendar += '</tr><tr>';
  //on a fini le haut du calendrier avec les boutons, on va commence en-dessous à rajouter les jours
  var dayClasses = '', curDay = "";
 
  var limitMonth = monthLengths[today.getMonth()];//savoir à quel numéro s'arrête le mois (28, 30, 31)
 
//Ici, on passe sur chaque journée du mois
  while( current < limitMonth){
    current++;
    if (current > 0){
      dayClasses = '';
      var d = new Date();
      today.setDate(current);//on simule qu'on est à +1 jour à chaque tour de while
      curDay = today.getDay();
      var vraiMois = d.getMonth();
      if ( vraiMois == today.getMonth()){//on met une 'class' css si on est sur le mois actuel
        if (current < date){
          dayClasses = ' disabled';
        }
        if (current == date){
          dayClasses = ' today';
        }
      }
      calendar += '<td class="'+dayClasses+'" data-day="'+dayNames[today.getDay()]+'">'+current+'</td>';
    } else {
      //on met des espaces blancs au debut du mois, tant que current arrive à 1
      calendar += '<td></td>';
    }
    if ( curDay == 0 && current > 0){ //après chaque dimanche, on passe à la ligne
      calendar += '</tr><tr>';
    }
  }
  calendar += '</tr></table>';
  container.innerHTML = calendar;
}




// drop file
var isAdvancedUpload = function() {
  var div = document.createElement('div');
  return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div)) && 'FormData' in window && 'FileReader' in window;
}();

let draggableFileArea = document.querySelector(".drag-file-area");
let browseFileText = document.querySelector(".browse-files");
let uploadIcon = document.querySelector(".upload-icon");
let dragDropText = document.querySelector(".dynamic-message");
let fileInput = document.querySelector(".default-file-input");
let cannotUploadMessage = document.querySelector(".cannot-upload-message");
let cancelAlertButton = document.querySelector(".cancel-alert-button");
let uploadedFile = document.querySelector(".file-block");
let fileName = document.querySelector(".file-name");
let fileSize = document.querySelector(".file-size");
let progressBar = document.querySelector(".progress-bar");
let removeFileButton = document.querySelector(".remove-file-icon");
let uploadButton = document.querySelector(".upload-button");
let fileFlag = 0;

fileInput.addEventListener("click", () => {
	fileInput.value = '';
	console.log(fileInput.value);
});

fileInput.addEventListener("change", e => {
	console.log(" > " + fileInput.value)
	uploadIcon.innerHTML = 'check_circle';
	dragDropText.innerHTML = 'File Dropped Successfully!';
	document.querySelector(".label").innerHTML = `drag & drop or <span class="browse-files"> <input type="file" class="default-file-input" style=""/> <span class="browse-files-text" style="top: 0;"> browse file</span></span>`;
	uploadButton.innerHTML = `Upload`;
	fileName.innerHTML = fileInput.files[0].name;
	fileSize.innerHTML = (fileInput.files[0].size/1024).toFixed(1) + " KB";
	uploadedFile.style.cssText = "display: flex;";
	progressBar.style.width = 0;
	fileFlag = 0;
});

uploadButton.addEventListener("click", () => {
	let isFileUploaded = fileInput.value;
	if(isFileUploaded != '') {
		if (fileFlag == 0) {
    		fileFlag = 1;
    		var width = 0;
    		var id = setInterval(frame, 50);
    		function frame() {
      			if (width >= 390) {
        			clearInterval(id);
					uploadButton.innerHTML = `<span class="material-icons-outlined upload-button-icon"> check_circle </span> Uploaded`;
      			} else {
        			width += 5;
        			progressBar.style.width = width + "px";
      			}
    		}
  		}
	} else {
		cannotUploadMessage.style.cssText = "display: flex; animation: fadeIn linear 1.5s;";
	}
});

cancelAlertButton.addEventListener("click", () => {
	cannotUploadMessage.style.cssText = "display: none;";
});

if(isAdvancedUpload) {
	["drag", "dragstart", "dragend", "dragover", "dragenter", "dragleave", "drop"].forEach( evt => 
		draggableFileArea.addEventListener(evt, e => {
			e.preventDefault();
			e.stopPropagation();
		})
	);

	["dragover", "dragenter"].forEach( evt => {
		draggableFileArea.addEventListener(evt, e => {
			e.preventDefault();
			e.stopPropagation();
			uploadIcon.innerHTML = 'file_download';
			dragDropText.innerHTML = 'Drop your file here!';
		});
	});

	draggableFileArea.addEventListener("drop", e => {
		uploadIcon.innerHTML = 'check_circle';
		dragDropText.innerHTML = 'File Dropped Successfully!';
		document.querySelector(".label").innerHTML = `drag & drop or <span class="browse-files"> <input type="file" class="default-file-input" style=""/> <span class="browse-files-text" style="top: -23px; left: -20px;"> browse file</span> </span>`;
		uploadButton.innerHTML = `Upload`;
		
		let files = e.dataTransfer.files;
		fileInput.files = files;
		console.log(files[0].name + " " + files[0].size);
		console.log(document.querySelector(".default-file-input").value);
		fileName.innerHTML = files[0].name;
		fileSize.innerHTML = (files[0].size/1024).toFixed(1) + " KB";
		uploadedFile.style.cssText = "display: flex;";
		progressBar.style.width = 0;
		fileFlag = 0;
	});
}



