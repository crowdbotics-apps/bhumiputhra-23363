import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile185161Navigator from '../features/UserProfile185161/navigator';
import Tutorial185160Navigator from '../features/Tutorial185160/navigator';
import NotificationList185132Navigator from '../features/NotificationList185132/navigator';
import Settings185131Navigator from '../features/Settings185131/navigator';
import Settings185123Navigator from '../features/Settings185123/navigator';
import UserProfile185121Navigator from '../features/UserProfile185121/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile185161: { screen: UserProfile185161Navigator },
Tutorial185160: { screen: Tutorial185160Navigator },
NotificationList185132: { screen: NotificationList185132Navigator },
Settings185131: { screen: Settings185131Navigator },
Settings185123: { screen: Settings185123Navigator },
UserProfile185121: { screen: UserProfile185121Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
