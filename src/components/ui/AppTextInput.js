import React from 'react';
import { StyleSheet, TextInput, View, Text} from 'react-native';
import { COLORS, FONTS } from '../../theme'

export const AppTextInput =
    ({ value ='', inputChange, placeholder, keyboardType = 'default', dataDetectorTypes, multiline = false, size = 'big', label, ...props }) => {
        return (
            <View style={size === 'small' ? {width: '45%'} : {width: '100%'}}>
                {value !== ''  && <Text style={styles.label}>{label}</Text> } 
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    value={value}
                    onChangeText={inputChange}
                    keyboardType={keyboardType}
                    dataDetectorTypes={dataDetectorTypes}
                    multiline={multiline}
                />
            </View>

        )
    }


const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderBottomColor: COLORS.GREY,

        paddingTop: 40,
        paddingBottom: 10,
        color: COLORS.BLACK,
        fontSize: 16,
    },
    inputHalf: {
        width: '45%',
    },
    label: {
        marginBottom: 10,
        color: COLORS.GREY,
        ...FONTS.body2,
        position: 'absolute',
        top: 10
    },
})