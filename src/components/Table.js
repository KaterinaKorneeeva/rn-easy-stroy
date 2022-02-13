import React from 'react';
import { View, StyleSheet, Text, FlatList, Dimensions } from 'react-native';
import { COLORS, FONTS } from '../theme'
const { width } = Dimensions.get('screen');

const Table = ({ data }) => {
    return (
        <View style={styles.tableWrap}>
            <FlatList data={data}
                contentContainerStyle={{ justifyContent: 'center' }}
                keyExtractor={order => order.id.toString()}
                renderItem={({ item }) =>
                    <View style={styles.tableRow} key={item.id}>
                        <View style={styles.tableCell1}></View>
                        <View style={styles.tableCell2}>
                            <Text style={{ color: COLORS.BLACK, ...FONTS.body1 }}> {item.expenseName}</Text>
                            <Text style={{ color: COLORS.BLACK, ...FONTS.body2, marginBottom: 5 }}>{item.sellerName}</Text>
                            <Text style={{ color: COLORS.BLUE, ...FONTS.smallTitle }}>-{item.sum} ₽</Text>
                            <Text style={{ color: COLORS.GREY, ...FONTS.body2, }}>Кто добавил</Text>
                        </View>
                        <View style={styles.tableCell3}>
                            <Text style={{ color: COLORS.GREY, ...FONTS.body2, }}>{item.date}</Text>
                        </View>
                    </View>
                }
            />
            {/* {data.map((item) => (
                <View
                    key={item.id}
                    style={{ flexDirection: 'row', position: 'relative', flexWrap: 'nowrap', justifyContent: "space-between" }}>

                    <View
                        style={{ backgroundColor: COLORS.BLUE, borderRadius: 50, width: 40, height: 40, marginRight: 15, }} >
                    </View>
                    <View style={{ flexGrow: 1, borderColor: 'red', borderWidth: 1, marginLeft: 0 }}>
                        <Text style={{ color: COLORS.BLACK, ...FONTS.body1, }}> {item.name}</Text>
                        <Text style={{ color: COLORS.BLACK, ...FONTS.body2, marginBottom: 5 }}>{item.sellerName}</Text>
                        <Text style={{ color: COLORS.BLUE, ...FONTS.smallTitle }}>-{item.sum} ₽</Text>
                        <Text style={{ color: COLORS.GREY, ...FONTS.body2, }}>Кто добавил</Text>
                    </View>

                    <View style={{ borderColor: 'red', borderWidth: 1, alignSelf: 'flex-start' }}>
                        <Text>{item.date}</Text>
                    </View>

                </View>
            ))} */}
        </View>
    );
};

const styles = StyleSheet.create({
    tableWrap: {
        height: 250,
        marginTop: 20,
    },

    tableRow: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: "space-between",
        position: 'relative',
        marginBottom: 10
    },

    tableCell1: {
        marginRight: 15,
        backgroundColor: COLORS.BLUE,
        borderRadius: 50,
        width: 40,
        height: 40,
    },

    tableCell2: {
        marginRight: 50,
        width: width - 140
    },

    tableCell3: {
        position: 'absolute',
        right: 0,
        textAlign: 'left'
    },
});

export default Table;