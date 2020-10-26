# Create Todo

Returns a json data about a new Todo

- ### URL:

	`/todos/create`

- ### Method:

	`POST`

- ### URL Params:

	None

- ### Data Params:

	`title = [string]`

	`description = [string]`

	`status = [string]`

	`due-date = [date]`

- ### Success Response:

	Code: 201 CREATED

	Content :

	```json
	json
	{ id : 1, 
	 title : 
	 "Study REST API", 
	 description : "Study for Live Code", 
	 status : "in-progress", 
	 due_date : "2020-10-20 19:45:07" 
	}
	```

- ### Error Response:

	Code: 400 BAD REQUEST

	Content: `{ error: "Inputs aren't valid" }`

	OR

	Code: 500 INTERNAL SERVER ERROR

	Content: `{ error: "Problem with server" }`

- ### Sample Call:

	`<calling endpoint in runnable format>`

- ### Notes:

# Show All Todo

Returns json data of all Todo

- ### URL:

	/todos

- ### Method:

	`GET`

- ### URL Params:

	None

- ### Data Params:

	None

- ### Success Response:

	Code: 200

	Content:

	```json
	json
	[ 
	    { id : 1, 
	     title : "Study REST API", 
	     description : "Study for Live Code", 
	     status : "in-progress", 
	     due_date : "2020-10-20 19:45:07" 
	    }, 
	    { id : 2, 
	     title : "House chores", 
	     description : "Clean my room", 
	     status : "in-progress", 
	     due_date : "2020-10-24 07:00:00" } 
	]
	```

- ### Error Response:

	Code: 500 INTERNAL SERVER ERROR

	Content: `{ error: "Problem with server" }`

- ### Sample Call:

- ### Notes:

# Show A Todo

Retuns a json data of a specific Todo

- ### URL:

	`/todo/:id`

- ### Method:

	`GET`

- ### URL Params:

	Required:

	`id = [integer]`

- ### Data Params:

	None

- ### Success Response:

	Code: 200

	Content:

	```json
	json
	{ id : 2, 
	 title : "House chores", 
	 description : "Clean my room", 
	 status : "in-progress", 
	 due_date : "2020-10-24 07:00:00" 
	}
	```

- ### Error Response:

	Code: 404 NOT FOUND

	Content: `{ error: "Todo doesn't exist" }`

- ### Sample Call:

- ### Notes:

# Update Todo (PUT)

Returns an updated json data (all fields) of a Todo

- ### URL:

	`/todo/:id/edit`

- ### Method:

	`PUT`

- ### URL Params:

	Required:

	`id = [integer]`

- ### Data Params:

	`title = [string]`

	`description = [string]`

	`status = [string]`

	`due-date = [date]`

- ### Success Response:

	Code: 200

	Content:

	```json
	json
	{ id : 2, 
	 title : "Study Postman", 
	 description : "Preparation before the lecture", 
	 status : "in-progress", 
	 due_date : "2020-10-24 07:00:00" 
	}
	```

- ### Error Response:

	Code: 400 BAD REQUEST

	Content: `{ error: "Inputs aren't valid" }`

	OR

	Code: 404 NOT FOUND

	Content: `{ error: "Todo doesn't exist" }`

	OR

	Code: 500 INTERNAL SERVER ERROR

	Content: `{ error: "Problem with server" }`

- ### Sample Call:

- ### Notes:

# Update Todo (Patch)

Returns an updated json data (just `status` field) of a Todo

- ### URL:

	`/todo/:id/edit`

- ### Method:

	`PATCH`

- ### URL Params:

	Required:

	`id = [integer]`

- ### Data Params:

	`status = [string]`

- ### Success Response:

	Code: 200

	Content:

	```json
	{ id : 2, 
	 title : "House chores", 
	 description : "Clean my room", 
	 status : "done", 
	 due_date : "2020-10-24 07:00:00" 
	}
	```

- ### Error Response:

	Code: 400 BAD REQUEST

	Content: `{ error: "Inputs aren't valid" }`

	OR

	Code: 404 NOT FOUND

	Content: `{ error: "Todo doesn't exist" }`

	OR

	Code: 500 INTERNAL SERVER ERROR

	Content: `{ error: "Problem with server" }`

- ### Sample Call:

- ### Notes:

# Delete Todo Data

Delete a json data of a specific Todo

- ### URL:

	`/todo/:id/delete`

- ### Method:

	`DELETE`

- ### URL Params:

	Required:

	`id = [integer]`

- ### Data Params:

	None

- ### Success Response:

	Code: 200

	Content: `message: "Todo deleted successfully"`

- ### Error Response:

	Code: 404 NOT FOUND

	Content: `{ error: "Todo doesn't exist" }`

	OR

	Code: 500 INTERNAL SERVER ERROR

	Content: `{ error: "Problem with server" }`

- ### Sample Call:

- ### Notes: