
# File system CRUD API

In this project an APIs is made to upload,
read, update and delete files.


## API

#### Upload file

```http
  POST /files/upload
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `file` | `file` | **Required** |

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



