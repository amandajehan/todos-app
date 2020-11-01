# Create New Todo

Returns a json data about a new Todo

- ### URL:

	`/todos`

- ### Method:

	`POST`

- ### URL Params:

	None

- ### Data Params:

	`title = [string]`

	`description = [string]`

	`status = [boolean]`

	`due_date = [date]`

- ### Success Response:

	Code: 201 CREATED

	Content :
	

	```
	json
	{ id : 1, 
	 title : 
	 "Study REST API", 
	 description : "Study for Live Code", 
	 status : false, 
	 due_date : "2020-11-25T00:00:00.000Z" 
	}
	```

- ### Error Response:

	Code: 400 BAD REQUEST

	Content: `{ error: "Title/Description/Due date is required" }`

	OR

	Code: 500 INTERNAL SERVER ERROR

	Content: `{ error: "Internal Server Error" }`

- ### Sample Call:

	```$.ajax({
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
	```

# Show All Todo

Returns json data of all existing Todos

- ### URL:

	`/todos`

- ### Method:

	`GET`

- ### URL Params:

	None

- ### Data Params:

	None

- ### Success Response:

	Code: 200 OK

	Content:

	```json
	json
	[ 
	    { id : 1, 
	     title : "Study REST API", 
	     description : "Study for Live Code", 
	     status : false, 
	     due_date : "2020-11-02T00:00:00.000Z" 
	    }, 
	    { id : 2, 
	     title : "House chores", 
	     description : "Clean my room", 
	     status : false, 
	     due_date : "2020-10-31T12:07:58.032Z" } 
	]
	```

- ### Error Response:

	Code: 500 INTERNAL SERVER ERROR

	Content: `{ error: "Internal Server Error" }`

- ### Sample Call:

```
$.ajax({
		method: "GET",
		url: SERVER + "/todos",
		headers: {
			token
		}
	})
```

# Show A Todo

Retuns a json data of a specific Todo by its id

- ### URL:

	`/todos/:id`

- ### Method:

	`GET`

- ### URL Params:

	Required:

	`id = [integer]`

- ### Data Params:

	None

- ### Success Response:

	Code: 200 OK

	Content:

	```json
	{ id : 2, 
	 title : "House chores", 
	 description : "Clean my room", 
	 status : true, 
	 due_date : "2020-11-01T02:46:32.052Z" 
	}
	```

- ### Error Response:

	Code: 404 NOT FOUND

	Content: `{ error: "Not Found" }`

- ### Sample Call:

```
$.ajax({
	method: "GET",
	url: SERVER + "/todos/${id}",
	headers: {
		token
	}
})
```


# Update Todo (PUT)

Returns an updated json data (all fields) of a Todo

- ### URL:

	`/todos/:id`

- ### Method:

	`PUT`

- ### URL Params:

	Required:

	`id = [integer]`

- ### Data Params:

	`title = [string]`

	`description = [string]`

	`status = [boolean]`

	`due-date = [date]`

- ### Success Response:

	Code: 200 OK

	Content:

	```json
	json
	{ id : 2, 
	 title : "Study Postman", 
	 description : "Preparation before the lecture", 
	 status : false, 
	 due_date : "2020-10-31T18:02:06.709Z" 
	}
	```

- ### Error Response:

	Code: 400 BAD REQUEST

	Content: `{ error: "Title/Description/Due date is required" }`

	OR

	Code: 404 NOT FOUND

	Content: `{ error: "Not Found" }`

	OR

	Code: 500 INTERNAL SERVER ERROR

	Content: `{ error: "Internal Server Error" }`

- ### Sample Call:

```
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
```

# Update Todo (Patch)

Returns an updated json data (just `status` field) of a Todo

- ### URL:

	`/todos/:id`

- ### Method:

	`PATCH`

- ### URL Params:

	Required:

	`id = [integer]`

- ### Data Params:

	`status = [string]`

- ### Success Response:

	Code: 200 OK

	Content:

	```json
	{ id : 2, 
	 title : "House chores", 
	 description : "Clean my room", 
	 status : "done", 
	 due_date : "2020-10-31T18:02:06.709Z" 
	}
	```

- ### Error Response:

	Code: 400 BAD REQUEST

	Content: `{ error: "Title/Description/Due date is required" }`

	OR

	Code: 404 NOT FOUND

	Content: `{ error: "Not found" }`

	OR

	Code: 500 INTERNAL SERVER ERROR

	Content: `{ error: "Internal Server Error" }`

- ### Sample Call:

```
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
```

# Delete Todo Data

Delete a json data of a specific Todo

- ### URL:

	`/todos/:id`

- ### Method:

	`DELETE`

- ### URL Params:

	Required:

	`id = [integer]`

- ### Data Params:

	None

- ### Success Response:

	Code: 200 OK

	Content: `message: "Todo deleted successfully"`

- ### Error Response:

	Code: 404 NOT FOUND

	Content: `{ error: "Not Found" }`

	OR

	Code: 500 INTERNAL SERVER ERROR

	Content: `{ error: "Internal Server Error" }`

- ### Sample Call:

```
$.ajax({
		method: "DELETE",
		url: SERVER + `/todos/${id}`,
		headers: {
			token
		}
	})
```

# Login User

Returns an access token to let user logging in

- ### URL:

	`/login`

- ### Method:

	`POST`

- ### URL Params:

	None

- ### Data Params:

	None

- ### Success Response:

	Code: 200 OK

	Content: 
	```json 
		{
		access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiZW1haWwiOiJhbWFuZGFqZWhhbkBnbWFpbC5jb20iLCJpYXQiOjE2MDQyMDc4Njh9"
		}
		```

- ### Error Response:

	Code: 400 BAD REQUEST 

	Content: `{ error: "Invalid email / password" }`

	OR

	Code: 500 INTERNAL SERVER ERROR

	Content: `{ error: "Internal Server Error" }`

- ### Sample Call:

```
$.ajax({
		method: "POST",
		url: SERVER + "/login",
		data: {
			email,
			password
		}
	})
```

# Register User

Returns a json data containing new user data

- ### URL:

	`/register`

- ### Method:

	`POST`

- ### URL Params:

	None

- ### Data Params:

	None

- ### Success Response:

	Code: 201 CREATED

	Content: 
	```json 
		{
		id: 1,
		email: "amandajehan@gmail.com"
		}
	```

- ### Error Response:

	Code: 400 BAD REQUEST 

	Content: `{ error: "Email/Password is required" }`

	Content: `{ error: "Password length is minimum 8" }`

	OR

	Code: 500 INTERNAL SERVER ERROR

	Content: `{ error: "Internal Server Error" }`

- ### Sample Call:

```
$.ajax({
		method: "POST",
		url: SERVER + "/login",
		data: {
			email,
			password
		}
	})
```

# Sign In / Login Using Google OAuth

Returns a json data containing access token and user's registered email

- ### URL:

	`/googleLogin`

- ### Method:

	`POST`

- ### URL Params:

	None

- ### Data Params:

	None

- ### Success Response:

	Code: 201 CREATED

	Content: 
	```json 
		{
		access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiZW1haWwiOiJhbWFuZGFqZWhhbkBnbWFpbC5jb20iLCJpYXQiOjE2MDQyMDc4Njh9",
		email: "amandajehan@gmail.com"
		}
	```

- ### Error Response:

	Code: 400 BAD REQUEST 

	Content: `{ error: "Email/Password is required" }`

	OR

	Code: 500 INTERNAL SERVER ERROR

	Content: `{ error: "Internal Server Error" }`

- ### Sample Call:

```
$.ajax({
		method: "POST",
		url: SERVER + "/googleLogin",
		data: {
			google_access_token
		}
	})
```

# Get Random Activity

Returns a string of random activity used as `title` 's field value from BoredAPI (3rd Party API)

- ### URL:

	`/activity`

- ### Method:

	`GET`

- ### URL Params:

	None

- ### Data Params:

	None

- ### Success Response:

	Code: 200 OK

	Content: 
	```
	"Organize a cluttered drawer"
	```

- ### Error Response:

	Code: 500 INTERNAL SERVER ERROR

	Content: `{ error: "Internal Server Error" }`

- ### Sample Call:

```
$.ajax({
		method: "GET",
		url: SERVER + "/activity"
	})
```
# Create New Project

Returns json data of new project

- ### URL:

	`/project`

- ### Method:

	`POST`

- ### URL Params:

	None

- ### Data Params:

	None

- ### Success Response:

	Code: 201 CREATED

	Content: 
	```
	json
	{
		id: 1,
		project_name: "Group Project"
	}
	```

- ### Error Response:

	Code: 500 INTERNAL SERVER ERROR

	Content: `{ error: "Internal Server Error" }`

- ### Sample Call:

```
	$.ajax({
		method: "POST",
		url: SERVER + `/project`,
		headers: {
			token
		},
		data: {
			project_name
		}
	})
```