import { AppRegistry, YellowBox } from 'react-native';
import Signup from './Welcome/Signup';
import App, {DrawerComponent} from './App/App';
import Profile from './Component/DrawerComponent/Profile';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
AppRegistry.registerComponent('twitter', () => App);
