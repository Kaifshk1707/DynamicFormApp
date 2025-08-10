import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const AppTextInput = ({ InputLabel, placeholder, ...props }) => {
    return (
        <View style={{ marginVertical: 4 }}>
            <Text style={styles.inputLabel}>
                {InputLabel}
            </Text>
            <TextInput style={styles.input}
                placeholder={placeholder}
                cursorColor={"#249781"}
                placeholderTextColor={"#9caec7"}
                {...props}

            />
        </View>
    )
}

export default AppTextInput

const styles = StyleSheet.create({
    inputLabel: {
        fontSize: 13,
        color: "#9caec7",
        fontWeight: "medium"
    },
    input: {
        borderWidth: 1,
        borderColor: "#249781",
        borderRadius: 5,
        paddingVertical: 6,
        paddingHorizontal: 14,
        marginVertical: 4,
        height: 40,
        backgroundColor: "#122F54"
    }
})
