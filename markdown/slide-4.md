## Data bucket tab

A data bucket is a key value store where you can create reusable content or data for your routes. <br>
The data buckets are defined at the environment level and are generated when the server starts. It means that their state persists between each call.

![Data tab](http://localhost:3001/image/data-view.png)

```json
// data bucket content using templating helpers
[
  {{#repeat 50}}
  {
    "id": "{{faker 'datatype.uuid'}}",
    "username": "{{faker 'internet.userName'}}"
  }
  {{/repeat}}
]
```
