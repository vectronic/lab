# nexe-test

## Development

Firstly: 

```
npm install
```

then:

Build: `npm run build`

Watch: `npm run watch`

Test: `npm test`

Lint: `npm run lint`

## Nexe Notes

    npx nexe --build --target 12.6.0 --verbose --output dist/nexe-test --python '/Library/Frameworks/Python.framework/Versions/2.7/bin/python2'

    dist/nexe-test --version

    rm ~/.nexe/12.6.0/out/Release/node

    npx nexe --build --target 12.6.0 --verbose --output dist/nexe-test --enableNodeCli --python '/Library/Frameworks/Python.framework/Versions/2.7/bin/python2'

    dist/nexe-test --version

    npx nexe --build --target 12.6.0 --verbose --output dist/nexe-test --python '/Library/Frameworks/Python.framework/Versions/2.7/bin/python2'

    dist/nexe-test --experimental-modules
    
## License

MIT © Vectronic
