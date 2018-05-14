import args from 'args';

args
    .option('port', 'The port on which the app will be running', 3000)
    .option('reload', 'Enable/disable livereloading')
    .command('serve', 'Serve your static site', ['s']);

const flags = args.parse(process.argv);

if (flags.port) {
    // eslint-disable-next-line no-console
    console.log(`I'll be running on port ${flags.port}`);
}
