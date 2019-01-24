import Home from './Home'
import Sobre from './Sobre'
import Splash from './Splash'
import Restaurante_list from './Restaurante_list'
import Pousada_list from './Pousada_list'
import PagItem from './PagItem'

import { createStackNavigator } from 'react-navigation';

const StackNavigator = createStackNavigator({
  Splash:Splash,
  Home: Home,
  Sobre: Sobre,
  Restaurante_list:Restaurante_list,
  Pousada_list:Pousada_list,
  PagItem:PagItem
});

export default { StackNavigator };