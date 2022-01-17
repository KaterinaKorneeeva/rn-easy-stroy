import React from 'react';
import { StyleSheet, TextInput} from 'react-native';
import DatePicker from 'react-native-datepicker'
import { COLORS, FONTS } from '../../theme'

export const AppTextInput =
    ({ value, inputChange, placeholder, keyboardType = 'default', dataDetectorTypes,  multiline = false, size = 'big', ...props }) => {
        return (
            <TextInput
                style={ size === 'small' ? [styles.input, styles.inputHalf] : [styles.input]} 
                placeholder={placeholder}
                value={value}
                onChangeText={inputChange}
                keyboardType={keyboardType}
                dataDetectorTypes={dataDetectorTypes}
                multiline = {multiline}
            />

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
        width: '45%'
    }
})