import {Navigation} from 'react-native-navigation';
import App from './App';
import AnotherScreen from './AnotherScreen';

Navigation.registerComponent(`navigation.playground.WelcomeScreen`, () => App);
Navigation.registerComponent(
  `navigation.playground.WelcomeScreen1`,
  () => AnotherScreen,
);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'navigation.playground.WelcomeScreen',
            },
          },
        ],
      },
    },
  });
});
