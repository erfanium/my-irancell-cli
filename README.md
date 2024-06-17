my-irancell-cli
=================

Cli for my.irancell.com. You can get your current status, list offers and buy offers by using this cli.

![my-irancell](https://github.com/erfanium/my-irancell-cli/assets/47688578/8a8350b4-96a8-4b84-98d3-c22e6b2a7289)


# Installation
```sh
$ npm install -g my-irancell-cli
```

# Login
You have to install to your irancell account with your phone number and password. 
```sh
$ my-irancell login
```

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g my-irancell-cli
$ my-irancell COMMAND
running command...
$ my-irancell (--version)
my-irancell-cli/0.0.0 linux-x64 node-v20.9.0
$ my-irancell --help [COMMAND]
USAGE
  $ my-irancell COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
- [my-irancell-cli](#my-irancell-cli)
- [Installation](#installation)
- [Login](#login)
- [Usage](#usage)
- [Commands](#commands)
  - [`my-irancell buy [OFFERID]`](#my-irancell-buy-offerid)
  - [`my-irancell help [COMMAND]`](#my-irancell-help-command)
  - [`my-irancell login`](#my-irancell-login)
  - [`my-irancell logout`](#my-irancell-logout)
  - [`my-irancell offers`](#my-irancell-offers)
  - [`my-irancell status`](#my-irancell-status)

## `my-irancell buy [OFFERID]`

Buy an offer

```
USAGE
  $ my-irancell buy [OFFERID]

DESCRIPTION
  Buy an offer
```

_See code: [src/commands/buy/index.ts](https://github.com/erfanium/my-irancell-cli/blob/v0.0.0/src/commands/buy/index.ts)_

## `my-irancell help [COMMAND]`

Display help for my-irancell.

```
USAGE
  $ my-irancell help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for my-irancell.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.3/src/commands/help.ts)_

## `my-irancell login`

Login to a new account

```
USAGE
  $ my-irancell login

DESCRIPTION
  Login to a new account
```

_See code: [src/commands/login/index.ts](https://github.com/erfanium/my-irancell-cli/blob/v0.0.0/src/commands/login/index.ts)_

## `my-irancell logout`

Logout from account

```
USAGE
  $ my-irancell logout

DESCRIPTION
  Logout from account
```

_See code: [src/commands/logout/index.ts](https://github.com/erfanium/my-irancell-cli/blob/v0.0.0/src/commands/logout/index.ts)_

## `my-irancell offers`

List all available offers

```
USAGE
  $ my-irancell offers

DESCRIPTION
  List all available offers
```

_See code: [src/commands/offers/index.ts](https://github.com/erfanium/my-irancell-cli/blob/v0.0.0/src/commands/offers/index.ts)_

## `my-irancell status`

Show account status

```
USAGE
  $ my-irancell status

DESCRIPTION
  Show account status
```

_See code: [src/commands/status/index.ts](https://github.com/erfanium/my-irancell-cli/blob/v0.0.0/src/commands/status/index.ts)_
<!-- commandsstop -->
