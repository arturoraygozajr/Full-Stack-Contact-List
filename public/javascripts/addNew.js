$(document).ready(init);

function init() {
	$('#add').click(addUser)
}

function addUser(e){
	e.preventDefault()
	var $name = $('#name').val();
	var obj ={user : $name}
	console.log(obj.user)

	$.post("/addUser", obj, function(callback){
		console.log('data returned from server:', callback)
	})
}