show = false;
function showMenu(){
	if (show == false){
		document.querySelector("#dropDown").style.display="block";
	} else{
		document.querySelector("#dropDown").style.display="none";
	}
	show = !show;
}