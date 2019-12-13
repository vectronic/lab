// eslint-disable-next-line import/no-named-default
import { default as Bar } from 'Bar';
import { build, GluegunToolbox } from 'gluegun';

export { default as Foo } from 'Foo';
export { default as Bar } from 'Bar';

new Bar().dump();

const cli = build()
    .exclude([
        'meta',
        'strings',
        'print',
        'filesystem',
        'semver',
        'system',
        'prompt',
        'http',
        'template',
        'patching',
    ])
    // .src('.')
    .brand('gluegun-test')
    // .plugins('./node_modules', { matching: 'gluegun-example-*', hidden: true })
    // .help()
    .src('./')
    .version()
    .defaultCommand()
    .create();

//.checkForUpdates(5)
// sniff


cli.run(process.argv).then(() => {
    new Bar().dump();
});
