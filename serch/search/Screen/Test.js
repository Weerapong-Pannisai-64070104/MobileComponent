import { MultipleSelectList } from 'react-native-dropdown-select-list'
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Button, Text } from 'react-native';

const TestScreen = () => {
  const [selected, setSelected] = React.useState([]);
  const [filteredData, setFilteredData] = React.useState([]);
  
  const data = [
      {key:'1', value:'Mobiles'},
      {key:'2', value:'Appliances'},
      {key:'3', value:'Cameras'},
      {key:'4', value:'Computers'},
      {key:'5', value:'Vegetables'},
      {key:'6', value:'Diary Products'},
      {key:'7', value:'Drinks'},
  ];

  const items = [
      { id: 1, img: require("../assets/favicon.png"), name: 'Item 1', tag: 'Mobiles' },
      { id: 2, img: require("../assets/adaptive-icon.png"), name: 'Item 2', tag: 'Appliances' },
      { id: 3, img: require("../assets/icon.png"), name: 'Item 3', tag: 'Cameras' },
  ];

  useEffect(() => {
    // กรองรายการที่ถูกเลือกจาก data
    const filteredItems = data.filter(item => selected.includes(item.value));
    // ค้นหารายการที่มี tag ตรงกับรายการที่ถูกเลือกใน filteredItems
    const filteredData = items.filter(item => filteredItems.some(selectedItem => selectedItem.value === item.tag));
    setFilteredData(filteredData);
  }, [selected]);

  return (
    <View style={styles.container}>
      <MultipleSelectList 
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="value"
        label="Categories"
        styles={styles.selectList}
        placeholder='ค้นหา'
        badgeStyles={{backgroundColor: '#6667ab' }}
      />
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  selectList: {
    backgroundColor: "yellow",
  },
    
  container: {
    margin: 10
  }
});

export default TestScreen;
