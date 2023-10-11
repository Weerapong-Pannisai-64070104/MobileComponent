import React, { useState } from 'react';
import { StyleSheet, View, TextInput, FlatList, Text, Image, Pressable } from 'react-native';

const FollowingScreen = () => {
    const [searchText, setSearchText] = useState('');
    const [data, setData] = useState([
        { id: 1, img: require("../assets/favicon.png"), name: 'Item 1' },
        { id: 2, img: require("../assets/adaptive-icon.png"), name: 'Item 2' },
        { id: 3, img: require("../assets/icon.png"), name: 'Item 3' },
        // เพิ่มข้อมูลเพิ่มเติมที่คุณต้องการกรอง
    ]);
    const [filteredData, setFilteredData] = useState([]);

    const handleSearch = (text) => {
        const filteredData = data.filter((item) =>
            item.name.toLowerCase().includes(text.toLowerCase())
        );

        setSearchText(text);
        setFilteredData(filteredData);
    };

    const UnFollow = (itemId) => {
        console.log(itemId);
        
    };

    
    return (
        <View style={styles.container}>
            <View>
                <TextInput style={styles.SearchBar}
                    placeholder="ค้นหา"
                    onChangeText={handleSearch}
                    value={searchText}
                />
                <FlatList
                    data={filteredData.length > 0 ? filteredData : data}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.NameContainer}>
                        
                            <View style={{alignItems: 'center', flexDirection: 'row'}}>
                                <View><Image style={styles.NameImg} source={item.img} /></View>
                                <Text style={{ color: 'black', fontSize: 15, fontWeight: "bold", marginLeft: 10 }}>{item.name}</Text>
                            </View>
                            <Pressable style={styles.ButtonETC} onPress={() => UnFollow(item.id)}>
                                <Text style={{ color: 'white', justifyContent: 'center', fontWeight: 'bold' }}>เลิกติดตาม</Text>
                            </Pressable>
                        </View>
                    )}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 5,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    NameContainer: {
        display: 'flex',
        width: 430,
        height: 85,
        alignItems: 'center',
        gap: 14,
        flexShrink: 0,
        backgroundColor: 'white',
        flexDirection: 'row',
        borderRadius: 16,
        padding: 5,
        margin: 2,
        color: 'white',
        justifyContent: 'space-between',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
    },
    NameImg: {
        width: 50,
        height: 50,
        borderRadius: 360,
        border: '1px solid #fff'
    },
    ButtonETC: {
        width: 120,
        height: 28,
        borderRadius: 30,
        margin: 5,
        backgroundColor: '#6667ab',
        justifyContent: 'center',
        textAlign: 'center',
        alignSelf: 'center',
        alignItems: 'center',
    },
});

export default FollowingScreen;



// ################################################  TypeScript  ##########################################################

// import React, { useState, FC } from 'react';
// import { StyleSheet, View, TextInput, FlatList, Text, Image, Pressable, ImageSourcePropType } from 'react-native';

// interface Item {
//     id: number;
//     img: ImageSourcePropType;
//     name: string;
// }

// const FollowingScreen: FC = () => {
//     const [searchText, setSearchText] = useState<string>('');
//     const [data, setData] = useState<Item[]>([
//         { id: 1, img: require("../assets/favicon.png"), name: 'Item 1' },
//         { id: 2, img: require("../assets/adaptive-icon.png"), name: 'Item 2' },
//         { id: 3, img: require("../assets/icon.png"), name: 'Item 3' },
//         // เพิ่มข้อมูลเพิ่มเติมที่คุณต้องการกรอง
//     ]);
//     const [filteredData, setFilteredData] = useState<Item[]>([]);

//     const handleSearch = (text: string) => {
//         const filteredData = data.filter((item) =>
//             item.name.toLowerCase().includes(text.toLowerCase())
//         );

//         setSearchText(text);
//         setFilteredData(filteredData);
//     };

//     const UnFollow = (itemId: number) => {
//         console.log(itemId);
//     };

//     return (
//         <View style={styles.container}>
//             <View>
//                 <TextInput style={styles.SearchBar}
//                     placeholder="ค้นหา"
//                     onChangeText={handleSearch}
//                     value={searchText}
//                 />
//                 <FlatList
//                     data={filteredData.length > 0 ? filteredData : data}
//                     keyExtractor={(item) => item.id.toString()}
//                     renderItem={({ item }) => (
//                         <View style={styles.NameContainer}>

//                             <View style={{ alignItems: 'center', flexDirection: 'row' }}>
//                                 <View><Image style={styles.NameImg} source={item.img} /></View>
//                                 <Text style={{ color: 'black', fontSize: 15, fontWeight: "bold", marginLeft: 10 }}>{item.name}</Text>
//                             </View>
//                             <Pressable style={styles.ButtonETC} onPress={() => UnFollow(item.id)}>
//                                 <Text style={{ color: 'white', justifyContent: 'center', fontWeight: 'bold' }}>เลิกติดตาม</Text>
//                             </Pressable>
//                         </View>
//                     )}
//                 />
//             </View>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         marginTop: 5,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },

//     NameContainer: {
//         display: 'flex',
//         width: 430,
//         height: 85,
//         alignItems: 'center',
//         gap: 14,
//         flexShrink: 0,
//         backgroundColor: 'white',
//         flexDirection: 'row',
//         borderRadius: 16,
//         padding: 5,
//         margin: 2,
//         color: 'white',
//         justifyContent: 'space-between',
//         borderBottomColor: 'gray',
//         borderBottomWidth: 1,
//     },
//     NameImg: {
//         width: 50,
//         height: 50,
//         borderRadius: 360,
//         border: '1px solid #fff'
//     },
//     ButtonETC: {
//         width: 120,
//         height: 28,
//         borderRadius: 30,
//         margin: 5,
//         backgroundColor: '#6667ab',
//         justifyContent: 'center',
//         textAlign: 'center',
//         alignSelf: 'center',
//         alignItems: 'center',
//     },
// });

// export default FollowingScreen;