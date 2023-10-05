import { MultipleSelectList } from 'react-native-dropdown-select-list'
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Button, Text, Image } from 'react-native';

const SearchByTagScreen = () => {
  const [selected, setSelected] = React.useState([]);
  const [filteredData, setFilteredData] = React.useState([]);

  const data = [
    { key: '1', value: 'Mobiles' },
    { key: '2', value: 'Appliances' },
    { key: '3', value: 'Cameras' },
    { key: '4', value: 'Computers' },
    { key: '5', value: 'Vegetables' },
    { key: '6', value: 'Diary Products' },
    { key: '7', value: 'Drinks' },
  ];

  const items = [
    { id: 1, img: require("../assets/favicon.png"), name: 'Item 1', tags: ['Mobiles', 'Cameras'] },
    { id: 2, img: require("../assets/adaptive-icon.png"), name: 'Item 2', tags: ['Appliances', 'Cameras'] },
    { id: 3, img: require("../assets/icon.png"), name: 'Item 3', tags: ['Appliances', 'Vegetables'] },
  ];

  useEffect(() => {
    // กรองรายการที่ถูกเลือกจาก data
    const filteredItems = data.filter(item => selected.includes(item.value));
    // ค้นหารายการที่มี tag ตรงกับรายการที่ถูกเลือกใน filteredItems
    const filteredData = items.filter(item =>
      filteredItems.some(selectedItem =>
        item.tags.includes(selectedItem.value)
      )
    );
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
        badgeStyles={{ backgroundColor: '#6667ab' }}
        backgroundColor={{ backgroundColor: 'white' }}
      />
      <FlatList
        numColumns={2}
        data={filteredData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <View style={styles.SalubContainer}>
              <View>
                <Image style={styles.SalubImg} source={item.img} />
              </View>
              <Text>{item.name}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({


  container: {
    margin: 10,
    backgroundColor: "white",
    color: "white",

  },
  SalubContainer: {
    display: 'flex',
    width: 80,
    height: 216,
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
    gap: 20,
    flexShrink: 0,
    textAlign: 'center',
    margin: 50
  },
  SalubImg: {
    width: 130,
    height: 201,
    borderRadius: 16,
  }
});

export default SearchByTagScreen;














// import React, { useState, useEffect } from 'react';
// import { View, FlatList, Button, Text } from 'react-native';

// const SearchByTagScreen = () => {
//   const [buttonsNotSelected, setButtonsNotSelected] = useState([
//     { id: '1', name: 'Math' },
//     { id: '2', name: 'Siance' },
//     // เพิ่มปุ่มเริ่มต้นที่ยังไม่ถูกเลือกตามความต้องการ
//   ]);
//   const [data, setData] = useState([
//     { id: 1, img: require("../assets/favicon.png"), name: 'Button 1', tag: 'Math' },
//     { id: 2, img: require("../assets/adaptive-icon.png"), name: 'Button 2', tag: 'Siance' },
//     { id: 3, img: require("../assets/icon.png"), name: 'Item 3' },
//     // เพิ่มข้อมูลเพิ่มเติมที่คุณต้องการกรอง
//   ]);

//   const [buttonsSelected, setButtonsSelected] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);

//   useEffect(() => {
//     // เมื่อ buttonsSelected เปลี่ยนแปลงให้กรองข้อมูล
//     const filtered = data.filter((item) => {
//       return buttonsSelected.some((button) => button.name === item.tag);
//     });
//     setFilteredData(filtered);
//   }, [buttonsSelected]);

//   const handleButtonPress = (button) => {
//     // 1. นำปุ่มออกจาก useState ที่ 1 และเพิ่มลงใน useState ที่ 2
//     setButtonsNotSelected((prevButtons) =>
//       prevButtons.filter((item) => item.id !== button.id)
//     );
//     setButtonsSelected((prevButtons) => [...prevButtons, button]);
//   };

//   const handleSelectedButtonPress = (button) => {
//     // 2. นำปุ่มออกจาก useState ที่ 2 และเพิ่มลงใน useState ที่ 1
//     setButtonsSelected((prevButtons) =>
//       prevButtons.filter((item) => item.id !== button.id)
//     );
//     setButtonsNotSelected((prevButtons) => [...prevButtons, button]);
//   };

//   return (
//     <View>
//       <View>
//         <Text>ยังไม่กด</Text>
//         <FlatList
//           data={buttonsNotSelected}
//           renderItem={({ item }) => (
//             <Button title={item.name} onPress={() => handleButtonPress(item)} />
//           )}
//           keyExtractor={(item) => item.id}
//         />
//       </View>

//       <View>
//         <Text>ปุ่มกดแล้ว</Text>
//         <FlatList
//           data={buttonsSelected}
//           renderItem={({ item }) => (
//             <Button
//               title={item.name}
//               onPress={() => handleSelectedButtonPress(item)}
//             />
//           )}
//           keyExtractor={(item) => item.id}
//         />
//       </View>

//       <FlatList
//         data={filteredData}
//         renderItem={({ item }) => <Text>{item.name}</Text>}
//         keyExtractor={(item) => item.id}
//       />
//     </View>
//   );
// };

// export default SearchByTagScreen;
