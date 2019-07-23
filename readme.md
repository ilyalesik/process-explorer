# process-explorer

Hierarchical system processes viewer based on web technologies.

![Process Explorer](./process-explorer-demo.gif)

## Technologies
* Electron
* React
* TypeScript
* Effector
* Ramda

## Install

*macOS 10.10+ is supported (64-bit only).*

**macOS**

[**Download**](https://github.com/lessmess-dev/process-explorer/releases/latest) the `.dmg` file.


---


### Run

```
$ npm install
$ npm start
```

## Debug

#### Launch React DevTools

Then execute the following from the Console tab of your running Electron app's developer tools:

```javascript
require('electron-react-devtools').install()
```

