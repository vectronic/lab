oclif-test
==========

First test of oclif

[![Version](https://img.shields.io/npm/v/oclif-test.svg)](https://npmjs.org/package/oclif-test)
[![CircleCI](https://circleci.com/gh/vectronic/oclif-test/tree/master.svg?style=shield)](https://circleci.com/gh/vectronic/oclif-test/tree/master)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/vectronic/oclif-test?branch=master&svg=true)](https://ci.appveyor.com/project/vectronic/oclif-test/branch/master)
[![Codecov](https://codecov.io/gh/vectronic/oclif-test/branch/master/graph/badge.svg)](https://codecov.io/gh/vectronic/oclif-test)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-test.svg)](https://npmjs.org/package/oclif-test)
[![License](https://img.shields.io/npm/l/oclif-test.svg)](https://github.com/vectronic/oclif-test/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g oclif-test
$ oclif-test COMMAND
running command...
$ oclif-test (-v|--version|version)
oclif-test/0.0.0 darwin-x64 node-v8.11.1
$ oclif-test --help [COMMAND]
USAGE
  $ oclif-test COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`oclif-test hello [FILE]`](#oclif-test-hello-file)
* [`oclif-test help [COMMAND]`](#oclif-test-help-command)

## `oclif-test hello [FILE]`

describe the command here

```
USAGE
  $ oclif-test hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ oclif-test hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/vectronic/oclif-test/blob/v0.0.0/src/commands/hello.ts)_

## `oclif-test help [COMMAND]`

display help for oclif-test

```
USAGE
  $ oclif-test help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v1.2.5/src/commands/help.ts)_
<!-- commandsstop -->
