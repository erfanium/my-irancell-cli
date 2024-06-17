my-irancell-cli
=================

ad-free cli for my.irancell.com


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/my-irancell-cli.svg)](https://npmjs.org/package/my-irancell-cli)
[![Downloads/week](https://img.shields.io/npm/dw/my-irancell-cli.svg)](https://npmjs.org/package/my-irancell-cli)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g my-irancell-cli
$ my-irancell-cli COMMAND
running command...
$ my-irancell-cli (--version)
my-irancell-cli/0.0.0 linux-x64 node-v20.9.0
$ my-irancell-cli --help [COMMAND]
USAGE
  $ my-irancell-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`my-irancell-cli hello PERSON`](#my-irancell-cli-hello-person)
* [`my-irancell-cli hello world`](#my-irancell-cli-hello-world)
* [`my-irancell-cli help [COMMAND]`](#my-irancell-cli-help-command)
* [`my-irancell-cli plugins`](#my-irancell-cli-plugins)
* [`my-irancell-cli plugins add PLUGIN`](#my-irancell-cli-plugins-add-plugin)
* [`my-irancell-cli plugins:inspect PLUGIN...`](#my-irancell-cli-pluginsinspect-plugin)
* [`my-irancell-cli plugins install PLUGIN`](#my-irancell-cli-plugins-install-plugin)
* [`my-irancell-cli plugins link PATH`](#my-irancell-cli-plugins-link-path)
* [`my-irancell-cli plugins remove [PLUGIN]`](#my-irancell-cli-plugins-remove-plugin)
* [`my-irancell-cli plugins reset`](#my-irancell-cli-plugins-reset)
* [`my-irancell-cli plugins uninstall [PLUGIN]`](#my-irancell-cli-plugins-uninstall-plugin)
* [`my-irancell-cli plugins unlink [PLUGIN]`](#my-irancell-cli-plugins-unlink-plugin)
* [`my-irancell-cli plugins update`](#my-irancell-cli-plugins-update)

## `my-irancell-cli hello PERSON`

Say hello

```
USAGE
  $ my-irancell-cli hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ my-irancell-cli hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/erfanium/my-irancell-cli/blob/v0.0.0/src/commands/hello/index.ts)_

## `my-irancell-cli hello world`

Say hello world

```
USAGE
  $ my-irancell-cli hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ my-irancell-cli hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/erfanium/my-irancell-cli/blob/v0.0.0/src/commands/hello/world.ts)_

## `my-irancell-cli help [COMMAND]`

Display help for my-irancell-cli.

```
USAGE
  $ my-irancell-cli help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for my-irancell-cli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.3/src/commands/help.ts)_

## `my-irancell-cli plugins`

List installed plugins.

```
USAGE
  $ my-irancell-cli plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ my-irancell-cli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.2/src/commands/plugins/index.ts)_

## `my-irancell-cli plugins add PLUGIN`

Installs a plugin into my-irancell-cli.

```
USAGE
  $ my-irancell-cli plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into my-irancell-cli.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the MY_IRANCELL_CLI_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the MY_IRANCELL_CLI_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ my-irancell-cli plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ my-irancell-cli plugins add myplugin

  Install a plugin from a github url.

    $ my-irancell-cli plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ my-irancell-cli plugins add someuser/someplugin
```

## `my-irancell-cli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ my-irancell-cli plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ my-irancell-cli plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.2/src/commands/plugins/inspect.ts)_

## `my-irancell-cli plugins install PLUGIN`

Installs a plugin into my-irancell-cli.

```
USAGE
  $ my-irancell-cli plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into my-irancell-cli.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the MY_IRANCELL_CLI_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the MY_IRANCELL_CLI_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ my-irancell-cli plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ my-irancell-cli plugins install myplugin

  Install a plugin from a github url.

    $ my-irancell-cli plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ my-irancell-cli plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.2/src/commands/plugins/install.ts)_

## `my-irancell-cli plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ my-irancell-cli plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ my-irancell-cli plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.2/src/commands/plugins/link.ts)_

## `my-irancell-cli plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ my-irancell-cli plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ my-irancell-cli plugins unlink
  $ my-irancell-cli plugins remove

EXAMPLES
  $ my-irancell-cli plugins remove myplugin
```

## `my-irancell-cli plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ my-irancell-cli plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.2/src/commands/plugins/reset.ts)_

## `my-irancell-cli plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ my-irancell-cli plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ my-irancell-cli plugins unlink
  $ my-irancell-cli plugins remove

EXAMPLES
  $ my-irancell-cli plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.2/src/commands/plugins/uninstall.ts)_

## `my-irancell-cli plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ my-irancell-cli plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ my-irancell-cli plugins unlink
  $ my-irancell-cli plugins remove

EXAMPLES
  $ my-irancell-cli plugins unlink myplugin
```

## `my-irancell-cli plugins update`

Update installed plugins.

```
USAGE
  $ my-irancell-cli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.2/src/commands/plugins/update.ts)_
<!-- commandsstop -->
