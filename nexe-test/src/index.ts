// eslint-disable-next-line import/no-named-default
import { default as Bar } from 'Bar';

export { default as Foo } from 'Foo';
export { default as Bar } from 'Bar';

new Bar().dump();
