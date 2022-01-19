import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONTS } from '../../theme'

export const AppLabel = ({ values, label, setLabel }) => {
    return (
        <View style={styles.row}>
            {values.map((value) => (
                <TouchableOpacity
                    key={value.id}
                    onPress={() => setLabel(value.id)}
                    style={[
                        styles.button,
                        label === value.id && styles.selected,
                    ]}
                >
                    <Text style={{ color: COLORS.BLACK, ...FONTS.body1 }} >
                        {value.name}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 18,
        backgroundColor: COLORS.LIGHT_GREY,
        marginHorizontal: "1%",
        marginBottom: 6,
        textAlign: "center",
    },
    selected: {
        backgroundColor: COLORS.GREEN,
    },

});
