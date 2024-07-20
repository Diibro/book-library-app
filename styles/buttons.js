import {  StyleSheet } from "react-native";
import colors from "./colors";

const ButtonStyles = StyleSheet.create({
     actionBtn: {
          backgroundColor: colors.mainBlack,
          borderRadius: 10,
          paddingVertical:10,
          alignItems:"center"
     },
     actionButtonText: {
          color:colors.lightPink,
          fontSize: 18
     }
})

export default ButtonStyles