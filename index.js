import {Navigation} from 'react-native-navigation';
import App from './App/App';
import SearchStock from './App/StockSearch';
import StockDetails from './App/StockDetails';
import {HOME, STOCK_DETAILS, STOCK_SEARCH} from './App/screenIds';

Navigation.registerComponent(HOME, () => App);
Navigation.registerComponent(STOCK_DETAILS, () => StockDetails);
Navigation.registerComponent(STOCK_SEARCH, () => SearchStock);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: HOME,
              options: {
                topBar: {
                  title: {
                    text: 'My Stocks',
                  },
                },
              },
            },
          },
        ],
      },
    },
  });
});
