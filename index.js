/** @format */

import {AppRegistry} from 'react-native';
import { createAppContainer } from "react-navigation";
import Navigator from './src/Pages';
import {name as appName} from './app.json';

const App = createAppContainer(Navigator.StackNavigator);

AppRegistry.registerComponent(appName, () => App);
