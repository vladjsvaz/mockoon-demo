## Mockoon __CLI__

Mockoon comes use a __CLI__ version that can be used with `NPM` scripts and in `GitHub` Actions. <br>
To install it, we can use __NPM__ or __Docker__.


Commands to install an run the __CLI__ using __NPM__.

```shell
# Install CLI using npm registry
$ npm install -g @mockoon/cli

# Run server using CLI
$ mockoon-cli start --data ./data-file.json

```

If we want to use the __CLI__ in __GitHub__ actions, mockoon provides a `git action` for it, the basic `yaml` code is represented below.

```yaml
- name: Run Mockoon CLI
  uses: mockoon/cli-action@v1
  with:
    # Mockoon CLI version, default to 'latest'
    version: "latest"
    # Mockoon local data file or URL
    data-file: "./mockoon-data.json"
    # port, default to 3000
    port: 3000
- name: Make test call
  run: curl -X GET http://localhost:3000/endpoint
```

The repository for this presentation has a __GitHub__ action file that uses the __CLI__ and __Playwright__.
The file is in the `.github/workflows` folder.
