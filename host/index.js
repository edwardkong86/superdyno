/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

// import App from './App';
// AppRegistry.registerComponent(appName, () => App);

import Root from './Root';
AppRegistry.registerComponent(appName, () => Root);