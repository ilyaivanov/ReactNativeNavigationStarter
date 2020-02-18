import * as React from 'react';
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {initialStocks} from './data';
import Card from './Card';
import {showStockDetails, showStockSearch} from './navigation';
import {useState} from 'react';

const App = ({componentId}) => {
  const [allStocks, setStock] = useState(initialStocks);

  const addStock = stock => setStock(allStocks.concat(stock));

  return (
    <View style={s.root}>
      <StatusBar barStyle="dark-content" />
      <FlatList
        data={allStocks}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Card
            stock={item}
            onPress={() => showStockDetails(componentId, item)}
          />
        )}
      />

      <TouchableOpacity
        style={s.button}
        onPress={() => showStockSearch().then(addStock)}>
        <Text style={s.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const s = StyleSheet.create({
  root: {
    flex: 1,
  },
  button: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    width: 56,
    height: 56,
    borderRadius: 56,
    backgroundColor: '#D43924',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default App;
