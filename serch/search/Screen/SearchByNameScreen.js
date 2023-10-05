import React, { useState } from 'react';
import { StyleSheet, View, TextInput, FlatList, Text, Image } from 'react-native';


const SearchByNameScreen = () => {
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

    return (
        <View style={styles.container}>
            <View>
                <TextInput style={styles.SearchBar}
                    placeholder=" ค้นหา"
                    onChangeText={handleSearch}
                    value={searchText}
                />
                <FlatList
                    data={filteredData}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <View>
                        <View style={styles.NameContainer}>
                            <View><Image style={styles.NameImg} source={item.img} /></View>
                            <Text style={{color: 'white', fontSize: 15, fontWeight: "bold",}}>{item.name}</Text>
                        </View>

                    </View>}
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
    SearchBar: {
        width: 375,
        height: 45,
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        display: 'flex',
        padding: 5,

    },
    NameContainer: {
        display: 'flex',
        width: "100%",
        height: 128,
        alignItems: 'center',
        gap: 14,
        flexShrink: 0,
        backgroundColor: '#6667ab',
        
        flexDirection: 'row',
        borderRadius: 16,
        padding: 5,
        margin: 2,
        color: 'white',
    },

    NameImg: {
        width: 50,
        height: 50,
        borderRadius: 360,
        border: '1px solid #fff'
    }

});




export default SearchByNameScreen;