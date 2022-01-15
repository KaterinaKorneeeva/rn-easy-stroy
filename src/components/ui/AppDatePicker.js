import React from 'react';
import DatePicker from 'react-native-datepicker'
import { COLORS, FONTS } from '../../theme'

export const AppDatePicker =
    ({ value, setDate, placeholder, ...props }) => {
        return (
            <DatePicker
                style={{paddingTop: 40, fontSize: 20 }}
                date={value}
                mode="date"
                placeholder={placeholder}
                // iconSource={require('../../assets/favicon.png')}  //заменить на наш календарь!!
                format="YYYY-MM-DD"
                minDate="2021-01-01"
                maxDate="2050-01-01"
                confirmBtnText="ок"
                cancelBtnText="отменить"
                customStyles={{
                    dateIcon: {
                        position: 'absolute',
                        right: -10,
                        top: 4,
                        marginLeft: 0
                    },
                    dateInput: {
                        // marginLeft: 36,
                        borderColor: 'red',
                        borderTopColor: 'transparent',
                        borderRightColor: 'transparent',
                        borderLeftColor: 'transparent',
                        borderBottomWidth: 1,
                        borderStyle: 'solid',
                        borderBottomColor: COLORS.GREY,
                        color: COLORS.GREY,
                        ...FONTS.body1,
                        alignItems: "flex-start"
                    },
                }}
                onDateChange={setDate}
            />

        )
    }
