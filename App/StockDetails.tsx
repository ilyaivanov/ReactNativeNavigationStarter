import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Stock} from './data';

const StockDetails = ({stock}: {stock: Stock}) => {
  return (
    <View style={{flex: 1}}>
      <View style={s.valueContainer}>
        <Text style={s.value}>${stock.value.toFixed(2)}</Text>
      </View>
      <Text style={s.title}>{stock.short}</Text>
    </View>
  );
};
const s = StyleSheet.create({
  valueContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  value: {
    fontWeight: 'bold',
    fontSize: 76,
  },
  title: {
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 80,
    color: '#dbdbdb',
    transform: [{rotateZ: '30deg'}],
  },
});
export default StockDetails;
