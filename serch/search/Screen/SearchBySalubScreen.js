import React, { useState } from 'react';
import { StyleSheet, View, TextInput, FlatList, Text, Image } from 'react-native';


const SearchBySalubScreen = () => {
    const [searchText, setSearchText] = useState('');
    const [data, setData] = useState([
        { id: 1, img: require("../assets/favicon.png"), name: 'Item 1' },
        { id: 2, img: require("../assets/adaptive-icon.png"), name: 'Item 2' },
        { id: 3, img: require("../assets/icon.png"), name: 'Item 3' },

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
                numColumns={2}
                    data={filteredData}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) =>
                        <View style={styles.BigSalubCatainer}><View style={styles.SalubContainer}>
                            <View>
                                <Image style={styles.SalubImg} source={item.img} />
                            </View>
                            <Text>{item.name}</Text>
                        </View></View>}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({


    SalubContainer: {
        display: 'flex',
        width: 80,
        height: 216,
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',
        gap: 8,
        flexShrink: 0,
        textAlign: 'center',
        margin: 50
    },
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
        margin: 5,

    },
    SalubImg: {
        width: 130,
        height: 201,
        borderRadius: 16,
    },
    BigSalubCatainer: {
        flexDirection: 'row',
        flexShrink: 0,
        flexWrap:'wrap-reverse',
        flex: 10,
    }

});



export default SearchBySalubScreen;