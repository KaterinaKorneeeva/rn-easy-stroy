import React from 'react';
import { View, StyleSheet, Text, FlatList, Dimensions, Image } from 'react-native';
import { COLORS, FONTS } from '../theme'
const { width } = Dimensions.get('screen');

const Table = ({ data, route}) => {
    
   
   
    return (
        <View 
        style= {[styles.tableWrap, { height: route.name !== "HistoryScreen" ?  250 : ''}]}
        
       
        >
            <FlatList data={data}
                contentContainerStyle={{ justifyContent: 'center' }}
                keyExtractor={order => order.id.toString()}
                renderItem={({ item }) =>
                    <View style={styles.tableRow} key={item.id}>
                        <View style={styles.tableCell1}>
                          
                                <Image source={{ uri: item.sellerLogo }} style={styles.image} />
                            
                           
                        </View>
                        <View style={styles.tableCell2}>
                            <Text style={{ color: COLORS.BLACK, ...FONTS.body1 }}> {item.name}</Text>
                            <Text style={{ color: COLORS.BLACK, ...FONTS.body2, marginBottom: 5 }}>{item.sellerName}</Text>
                            <Text style={{ color: COLORS.BLUE, ...FONTS.smallTitle }}>
                                {item.type === 'deposit' ? `+ ${item.sum} ₽ ` : `-${item.sum} ₽`}
                            </Text>
                            <Text style={{ color: COLORS.GREY, ...FONTS.body2, }}>Кто добавил</Text>
                        </View>
                        <View style={styles.tableCell3}>
                            <Text style={{ color: COLORS.GREY, ...FONTS.body2, }}>{item.date}</Text>
                        </View>
                    </View>
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    tableWrap: {
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
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 50
    },
});

export default Table;