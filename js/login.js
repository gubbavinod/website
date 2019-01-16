function validate(){
	var username = document.getElementById("user").value;
	var password = document.getElementById("pwd").value;
	if(username == "gubbavinod" && password == "gubbavinod"){
		alert("Login Successfully");
		
		return false;
	}
	else{
		alert("Entered Wrong Credentials");
		return false;
	}
}