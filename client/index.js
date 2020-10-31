const SERVER = "http://localhost:3000";

$(document).ready(function () {
	const token = localStorage.getItem("access_token")
	if (token) {
		$("#content-page").show()
		showAllTodos()
		$("#login-page").hide()
	} else {
		$("#app-title").show()
		$("#content-page").hide()
		$("#login-page").show()
		$("#register-page").hide()
	}

	$("#btn-logout").on("click", function () {
		console.log("Logged out")
		$("#content-page").hide()
		$("#login-page").show()
	})
})

// REGISTER FORM
function toRegister() {
	$("#login-page").hide()
	$("#register-page").show()
}

// REGISTER POST
function register(event) {
	event.preventDefault()
	const email = $("#register-email").val()
	const password = $("#register-password").val()

	$.ajax({
		method: "POST",
		url: SERVER + "/register",
		data: {
			email,
			password
		}
	})
		.done(response => {
			//when successfully registered
			console.log("Register success!")
			$("#login-page").show()
			$("#register-page").hide()
			$("#content-page").hide()
		})
		.fail(err => {
			console.log(err)
		})
}

// GOOGLE SIGN IN
function onSignIn(googleUser) {
	// var profile = googleUser.getBasicProfile();
	// console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
	// console.log('Name: ' + profile.getName());
	// console.log('Image URL: ' + profile.getImageUrl());
	// console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
	var google_access_token = googleUser.getAuthResponse().id_token;
	$.ajax({
		method: "POST",
		url: SERVER + "/googleLogin",
		data: {
			google_access_token
		}
	})
		.done(response => {
			console.log(response)
		})
		.fail(err => {
			console.log(err)
		})
}

//GOOGLE SIGN OUT
function signOut() {
	var auth2 = gapi.auth2.getAuthInstance();
	auth2.signOut().then(function () {
		console.log('User is signed out.');
	});

	localStorage.clear()
}

// LOGIN FORM
function toLogin() {
	$("#login-page").show()
	$("#register-page").hide()
}

// LOGIN
function login(event) {
	event.preventDefault()
	const email = $("#login-email").val()
	const password = $("#login-password").val()
	$("#form-login").trigger("reset")

	$.ajax({
		method: "POST",
		url: SERVER + "/login",
		data: {
			email,
			password
		}
	})
		.done(response => {
			const token = response.access_token;
			localStorage.setItem("access_token", token)
			console.log("Login success")


			//when successfully logged in:
			$("#login-page").hide()
			$("#content-page").show()
			showAllTodos()
			$("#app-title").hide()
		})
		.fail(err => {
			console.log(err)
		})
}

// LOGOUT
function logout() {
	$("#login-page").show()
	$("#content-page").hide()
}

// SHOW ALL TODOS
function showAllTodos() {
	$("#add-new-todo").hide()
	$("#edit-todo").hide()
	$("#show-all-todos").show()
	const token = localStorage.getItem("access_token");

	$.ajax({
		method: "GET",
		url: SERVER + "/todos",
		headers: {
			token
		}
	})
		.done(data => {
			$("#show-all-todos").empty();
			data.forEach((element, i) => {
				const date = element.due_date;
				let status = element.status;

				if (element.status === false) {
					status = "On-going"
				} else {
					status = "Done"
				}

				$("#show-all-todos").append(`
			<div class="todo-item">
				<h3 class="todo-title">#${i + 1} - ${element.title}</h3>
				 <div>
					 <p>Description : ${element.description}</p>
				 </div>
				 <div>
				 	<p>Status : ${status}</p>
				 </div>
				 <div>
				 	<p>Due Date : ${date.slice(0, 10)}</p>
				 </div>
				 <button onclick="doneTodo(${element.id}, ${element.status})" class="btn-todo btn btn-primary"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check2-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
				 <path fill-rule="evenodd" d="M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
				 <path fill-rule="evenodd" d="M1.5 13A1.5 1.5 0 0 0 3 14.5h10a1.5 1.5 0 0 0 1.5-1.5V8a.5.5 0 0 0-1 0v5a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h8a.5.5 0 0 0 0-1H3A1.5 1.5 0 0 0 1.5 3v10z"/>
			 </svg></button>
				 <button onclick="toEdit(${element.id})" class="btn-todo btn btn-info"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
				 <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
				 <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
			 </svg></button>
				 <button onclick="if(confirm('Are you sure deleting this Todo?')){deleteTodo(${element.id})}" class="btn-todo btn btn-danger"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
				 <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
				 <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
			 </svg></button>
			</div>
			`)
			})
		})
		.fail(err => {
			console.log(err)
		})
}

//DONE TO DO, CHANGE ITS STATUS TO TRUE (DONE)
function doneTodo(id) {
	const token = localStorage.getItem("access_token");
	const status = true;

	$.ajax({
		method: "PATCH",
		url: SERVER + `/todos/${id}`,
		headers: {
			token
		},
		data: {
			status
		}
	})
	.done(response => {
		console.log("Todo's status is updated!")
		showAllTodos();
	})
	.fail(err => {
		console.log(err)
	})
}

//ADD NEW TODO
function toAddNew() {
	$("#show-all-todos").hide()
	$("#add-new-todo").show()
	$("#edit-todo").hide()
}

function addNewTodo(event) {
	event.preventDefault()
	const token = localStorage.getItem("access_token");
	$("#show-all-todos").hide();
	const title = $("#title").val()
	const description = $("#description").val()
	const due_date = $("#due_date").val()

	$.ajax({
		method: "POST",
		url: SERVER + "/todos",
		headers: {
			token
		},
		data: {
			title,
			description,
			due_date
		}
	})
	.done(response => {
		console.log("Create new Todo is succeed")
		$("#add-new").trigger("reset")
		$("#add-new-todo").hide()
		showAllTodos()
		$("#show-all-todos").show()
	})
	.fail(err => {
		console.log(err)
	})
}

// EDIT TO DO
function toEdit(id) {
	editForm(id);
	$("#edit-todo").show()
	$("#show-all-todos").hide()
	
}

function editForm(id) {
	const token = localStorage.getItem("access_token");
	$("#add-new-todo").hide()

	$.ajax({
		method: "GET",
		url: SERVER + `/todos/${id}`,
		headers: {
			token
		}
	})
	.done(data => {
		$("#edit-todo").empty();
		if (data.status === false) {
			$("#edit-todo").append(`
			<form id="edit-form" onsubmit="editTodo(event, ${id})">
			<h1 class="text-center">Edit Your Todo</h1>
					<div class="form-group">
						<label for="title">Title:</label>
						<input type="text" id="edit-title" class="form-control" value="${data.title}"/>
					</div>
					<div class="form-group">
						<label for="description">Description:</label>
						<input type="text" id="edit-description" class="form-control" value="${data.description}"/>
					</div>
					<div class="form-group">
						<label for="description">Status:</label>
						<select id="edit-status">
							<option value="true">Done</option>
							<option value="false" selected>On-going</option>
						</select>
					</div>
					<div class="form-group">
						<label for="due_date">Due Date:</label>
						<input type="date" id="edit-due_date" class="form-control" value="${data.due_date.slice(0, 10)}"/>
					</div>
					<button id="btn-yellow" type="submit" class="shadow btn btn-info">Edit</button>
			</form>
			`)
		} else {
			$("#edit-todo").append(`
			<form id="edit-form" onsubmit="editTodo(event, ${id})">
			<h1 class="text-center">Edit Your Todo</h1>
					<div class="form-group">
						<label for="title">Title:</label>
						<input type="text" id="edit-title" class="form-control" value="${data.title}"/>
					</div>
					<div class="form-group">
						<label for="description">Description:</label>
						<input type="text" id="edit-description" class="form-control" value="${data.description}"/>
					</div>
					<div class="form-group">
						<label for="description">Status:</label>
						<select id="edit-status">
							<option value="true" selected>Done</option>
							<option value="false">On-going</option>
						</select>
					</div>
					<div class="form-group">
						<label for="due_date">Due Date:</label>
						<input type="date" id="edit-due_date" class="form-control" value="${data.due_date.slice(0, 10)}"/>
					</div>
					<button id="btn-yellow" type="submit" class="shadow btn btn-info">Edit</button>
			</form>
			`)
		}
	})
}

function editTodo(event, id) {
	event.preventDefault()
	const token = localStorage.getItem("access_token");

	const title = $("#edit-title").val()
	const description = $("#edit-description").val()
	const status = $("#edit-status").val()
	const due_date = $("#edit-due_date").val()
	console.log(status)
	$.ajax({
		method: "PUT",
		url: SERVER + `/todos/${id}`,
		headers: {
			token
		},
		data: {
			title,
			description,
			status,
			due_date
		}
	})
	.done(data => {
		console.log("Edit Todo is successful!")
		$("#edit-todo").hide()
		showAllTodos()
		$("#show-all-todos").show()
	})
	.fail(err => {
		console.log(err)
	})
}

function deleteTodo(id) {
	const token = localStorage.getItem("access_token");

	$.ajax({
		method: "DELETE",
		url: SERVER + `/todos/${id}`,
		headers: {
			token
		}
	})
	.done(response => {
		console.log("Delete a Todo is successful")
		showAllTodos();
	})
	.fail(err => {
		console.log(err)
	})
}