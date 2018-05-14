### oclif test

#### Setup

Install [Node](https://nodejs.org/en/download/)

#### Scaffold and try out

```
npx oclif multi oclif-test
``` 

After install and answering prompts, try out the CLI:
 
```
cd oclif-test
./bin/run --help
``` 

Install plugin support:

```
npm install @oclif/plugin-plugins
```

and add the following to `package.json`:

```
{
  ...
  "oclif": {
    ...
    "plugins": [
      ...
      "@oclif/plugin-plugins"
      ...
    ]
  },
  ...
}
```

Now try this:

```
./bin/run plugins --help
```
