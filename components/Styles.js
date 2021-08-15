import { StyleSheet } from "react-native"

export const COLORS = {
    ACCENT: '#00adbb',
    TEXT: '#474747',
    INACTIVE: '#8ecae6',
    ERROR: 'tomato',
}

export const STYLES = StyleSheet.create({
    textInput: {
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: COLORS.ACCENT,
        height: 30,
        width: 200,
        paddingHorizontal: 5,
        margin: 5,
    },
    containerCenter: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})