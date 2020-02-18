import {Navigation} from 'react-native-navigation';
import {Stock} from './data';
import {STOCK_DETAILS, STOCK_SEARCH} from './screenIds';

export const showStockDetails = (compId: string, stock: Stock) =>
  Navigation.push(compId, {
    component: {
      name: STOCK_DETAILS,
      options: {
        topBar: {
          title: {text: stock.title},
        },
      },
      passProps: {
        stock,
      },
    },
  });

export const showStockSearch = (): Promise<Stock> =>
  // @ts-ignore
  new Promise((resolve, reject) =>
    Navigation.showModal({
      component: {
        name: STOCK_SEARCH,
        passProps: {
          onStockSelect: stock => {
            resolve(stock);
          },
        },
      },
    }).catch(reject),
  );
