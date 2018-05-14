import foo from './foo.js';
import { version } from '../package.json';
import answer from 'the-answer';
import Plugins from 'js-plugins';

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

export default function () {
    console.log(foo + ' ' + version);
    console.log('Answer: ' + answer);

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


    let host = { a: '1'};

    pluginManager.connect(host, 'host:command', options, callback);
}
