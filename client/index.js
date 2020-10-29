const SERVER = "http://localhost:3000";

$(document).ready(function () {
	const token = localStorage.getItem("access_token")
	if (token) {
		$("#content-page").show()
		$("#login-page").hide()
	} else {
		$("#content-page").hide()
		$("#login-page").show()
		$("#register-page").hide()
	}

	$("#btn-logout").on("click", function () {
		console.log("logout")
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
	console.log(google_access_token)
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
		console.log('User signed out.');
	});
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
			console.log("berhasil login")
			console.log(token)

			//when successfully logged in:
			$("#login-page").hide()
			$("#content-page").show()
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

