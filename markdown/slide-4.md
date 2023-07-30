## Data bucket tab

A data bucket is a key value store where we can create reusable content or data for our routes. <br>
Data buckets are defined at the environment level and are generated when the server starts. It means that their state persists between each call.

![Data tab](http://localhost:3001/image/data-view.png)

Data buckets can contain templating helpers to generate fake data and add some logic to the requests. <br>
In the code block below, a data bucket is defined to create 50 objects when the server starts. <br>
The property `id` is generated with `faker` `uuid` helper function, and `username` uses `faker` `userName` helper function.

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
