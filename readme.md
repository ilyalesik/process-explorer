<p align="center"><img src="static/icon.png" width="64"></p>

# Process Explorer

Hierarchical system processes viewer based on web technologies. 

<img src="process-explorer-demo.gif" width="100%">

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

