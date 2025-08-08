## Buoc 1: Khoi tao du an

```bash
npm init -y
```

## Buoc 2:

customize package.json

```json
{
	"scripts": {
		"start": "node index.js"
	}
}
```

## Buoc 3: Khoi tao server

```javascript
import http from "http";

const callback = (request, response) => {
	console.log({ request });
	response.end("Hello mindX");
};
const app = http.createServer(callback);

app.listen(8080, () => {
	console.log("Server is running!");
});
```

## Buoc 4: Cai nodemon

nodemon = node monitor: tự khởi động lại server khi có thay đổi

```bash
npm i nodemon --save-dev
```
