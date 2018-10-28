function validation(){
	var uname=document.getElementById('username');
	var pwd=document.getElementById('password');

	if(uname.value.length==0){
		document.getElementById('text').innerText="Username is required!";
		uname.focus();
		return false;
	}	
	if(pwd.value.length==0){
		document.getElementById('text').innerText="Password is required!";
		pwd.focus();
		return false;
	}

	var emailExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (uname.value.match(emailExp)){
		document.getElementById('text').innerText ="Submited!!!";
		return true;
	} 
	else{
	document.getElementById('text').innerText ="Enter a valid username!";
	uname.focus();
	return false;
	}
}