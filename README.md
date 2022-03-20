
# File system CRUD API

In this project an APIs is made to upload,
read, update and delete files.

### How to Use
1. Clone this repo.
2. Run `npm install`
3. start mongodb server
4. Enter your credentials in .env file
5. Run `node index`

## API

#### Upload file

```http
  POST /files/upload
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `file` | `file` | **Required**(File size should be less than 10Mb) |

#### Get all files

```http
  GET /files/getallfiles
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| No Parameter    | |  |

#### Download file

```http
  GET /files/download/${id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. Id of file  |

#### Update file

```http
  PUT /files/update/${id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. Id of file  |
| `file` | `file` | **Required**  |

#### Delete file

```http
  DELETE /files/delete/${id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. Id of file  |



