# OUR API
>"Give whatever you want to receive"

#### Dummy APIs to be used while you're not the priority of your backend dev

---

## `Quick Start`

`URI: https://our-api.herokuapp.com/v0/:pathName`

- pathName can be whatever you decide. (e.g. v0/users/guests/males)

## POST APIs samples

- If you expect to get data from the API, please use the POST method

`Successful API Call`

```
URI: https://our-api.herokuapp.com/v0/user/1234
Method: POST

Payload:
  {
    "id": 1234
    "color": "red",
    "name": "John Smith",
    "jerseyNumber": 4,
  }

Response:
  {
    "success": true,
    "data": {
      "id": 1234
      "name": "John Smith",
      "color": "red",
      "jerseyNumber": 4,
    },
    "apiPath": "/user/1234"
  }
```

`Failed API Call`

```
URI: https://our-api.herokuapp.com/v0/user/1234
Method: POST

Payload:
  {
    "status": 400,
    "error": {
      "code": 5512,
      "message": "User ID 1234 not found"
    }
  }

Response:
  {
    "success": false,
    "error": {
      "code": 5512,
      "message": "User ID 1234 not found"
    },
    "apiPath": "/user/1234"
  }


Notes:
  1. You may change the status in the payload to change the status code of the API response
  2. The Object > 'error' in the paylaod is optional
  3. error.code is a custom error in case you want to pass an internal error code
```

---

## GET APIs samples

`Successful API Call`

```
URI: https://our-api.herokuapp.com/v0/user/1234
Method: GET

Response:
{
    "success": true,
    "message": "Success dummy GET API!",
    "apiPath": "/user/1234"
}
```

`Failed API Call`

```
URI: https://our-api.herokuapp.com/v0/fail/user/1234
Method: GET

Response:
  {
    "success": false,
    "error": {
      "message": "Failed dummy GET API."
    },
    "apiPath": "/fail/user/1234"
}

Notes:
  1. In Order to fail a get API, URI should start with /v0/fail
```
