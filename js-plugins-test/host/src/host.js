import Plugins from 'js-plugins';

let pluginManager = new Plugins();

pluginManager.register('host:command', 'core', function () {

    // eslint-disable-next-line no-console
    console.log('register world plugin');

    return {
        getDisplayName: function () {
            return 'World';
        }
    };
});
pluginManager.scanSubdirs('../');

let options = {
    data: 'hello',
    multi: true,
    required: true
};

function callback(err, extensions) {

    if (err) {
        // eslint-disable-next-line no-console
        console.log('Err: ' + err);
    }

    let names = extensions.map(function (extension) {
        return extension.getDisplayName();
    });
    // eslint-disable-next-line no-console
    console.log('Extensions: ' + names.join(', ').replace(/, ([^,]*)$/, ' and $1!'));
}

let host = { a: '1'};

pluginManager.connect(host, 'host:command', options, callback);

export default function sum(a, b) {
    return a + b;
}
