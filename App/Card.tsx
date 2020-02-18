import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Stock} from './data';

export default ({stock, onPress}: {stock: Stock, onPress}) => (
  <TouchableOpacity style={s.card} onPress={onPress}>
    <View style={s.shorthand}>
      <Text style={s.shorthandText}>{stock.short}</Text>
    </View>
    <View style={s.cardBody}>
      <Text style={s.amountText}>${stock.value.toFixed(2)}</Text>
      <Text style={s.titleText}>{stock.title}</Text>
    </View>
  </TouchableOpacity>
);

const s = StyleSheet.create({
  card: {
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    height: 150,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  shorthand: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    backgroundColor: '#D43924',
    width: 100,
  },
  shorthandText: {
    textAlign: 'center',
    fontSize: 24,
    color: 'white',
  },
  amountText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  titleText: {
    color: 'grey',
  },
  cardBody: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
