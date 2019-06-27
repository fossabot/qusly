<div align="center">
  <img src="static/app-icons/icon.png" width="256">
  <h1>Qusly</h1>

[![Travis](https://img.shields.io/travis/qusly/qusly.svg?style=flat-square)](https://travis-ci.com/qusly/qusly)
[![Discord](https://img.shields.io/discord/591624973609730059.svg?style=flat-square)](https://discord.gg/rNyNYFn)
[![Downloads](https://img.shields.io/github/downloads/qusly/qusly/total.svg?style=flat-square)](https://github.com/qusly/qusly/releases)

📁 Qusly is an innovative __FTP/FTPS/SFTP__ client built on top of Electron, React, Styled-Components and <a href="https://www.github.com/xnerhu/qusly-core">Qusly-Core</a>. It aims to raise the standards.

</div>

## [Downloads](https://github.com/qusly/qusly/releases)

## Screenshots

![](https://wexond.net/img/qusly/explorer.png)

![](https://wexond.net/img/qusly/explorer.gif)

![](https://wexond.net/img/qusly/dialog.gif)

## Components

- [Qusly Core](https://github.com/qusly/qusly-core) - An API wrapper around [ssh2](https://github.com/mscdex/ssh2) and [basic-ftp](https://github.com/patrickjuchli/basic-ftp).
- Tab system from [Wexond](https://github.com/wexond/wexond)

## Running

Before running Qusly, you need to have [Node.js](https://nodejs.org) installed.

```bash
$ npm run dev
```

You can configure `.env` file for better development experience. It will automatically create a new session on hot reload.

Copy `.env.example`, then change it's name to `.env`.

```
HOSTNAME=www.example.com
USER=root
PASSWORD=password
PROTOCOL=sftp
PORT=22
ENABLED=true
```

You can set the protocol to `sftp`, `ftp` or `ftps`.
Port is usually `21` for FTP and `22` for SFTP.

### Other commands

You can also run other commands, for other tasks like building the app or linting the code, by using the commands described below.

#### Usage:

```bash
$ npm run <command>
```

#### List of available commands:

| Command          | Description                                 |
| ---------------- | ------------------------------------------- |
| `build`          | Bundles the source code in production mode. |
| `compile-win32`  | Compiles binaries for Windows.              |
| `compile-darwin` | Compiles binaries for macOS.                |
| `compile-linux`  | Compiles binaries for Linux.                |
| `lint`           | Lints the source code.                      |
| `lint-fix`       | Fixes eslint errors                         |
| `dev`            | Starts Qusly in the development mode        |

<a href="https://www.patreon.com/bePatron?u=21429620">
    <img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>
