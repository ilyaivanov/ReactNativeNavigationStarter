import * as React from 'react';
import {useState} from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {Stock} from './data';

const App = ({componentId, onStockSelect}) => {
  const onStockPress = (stock: Stock) => {
    Navigation.dismissModal(componentId);
    onStockSelect(stock);
  };
  const [stocks] = useState(generateRandomStocks());
  return (
    <ScrollView style={{flex: 1}}>
      {stocks.map((stock, index) => (
        <TouchableOpacity
          key={stock.id}
          style={[
            s.placeholder,
            index == stocks.length - 1 && s.lastPlaceholder,
          ]}
          onPress={() => onStockPress(stock)}>
          <Text style={s.stockName}>{stock.short}</Text>
          <Text style={s.icon}>></Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const s = StyleSheet.create({
  placeholder: {
    paddingLeft: 20,
    paddingRight: 20,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  lastPlaceholder: {
    borderBottomWidth: 0,
  },
  stockName: {
    fontSize: 23,
    fontWeight: 'bold',
  },
  icon: {
    fontSize: 35,
    fontWeight: '100',
  },
});

function generateRandomStocks(): Stock[] {
  const createRandomStock = (): Stock => {
    const short = createArrayOfSize(randomInteger(2, 5))
      .map(randomLetter)
      .join('');
    return {
      id: Math.random() + '',
      title: `Great ${short} Stock`,
      value: Math.random() * 20000,
      short,
    };
  };

  return createArrayOfSize(20).map(createRandomStock);
}

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const randomLetter = () => alphabet[randomInteger(0, alphabet.length)];
const randomInteger = (from, to) => {
  const min = Math.ceil(from);
  const max = Math.floor(to);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
// @ts-ignore
const createArrayOfSize = (size: int): any[] => Array.from(new Array(size));

export default App;
