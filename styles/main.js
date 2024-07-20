import { StyleSheet } from "react-native";
import colors from "./colors";

const MainStyles = StyleSheet.create({
     mainScreen: {
          backgroundColor: colors.darkPink,
          display: 'flex',
          alignItems:'center',
          justifyContent: "center",
          flex:1,
          position:'relative'
     },
     homeContentContainer: {
          width: "60%",
          paddingHorizontal: 20,
          paddingVertical:40,
          borderRadius: 20,
          backgroundColor: colors.lightPink,
          gap: 10

     },
     welcomeText: {
          fontSize: 18,
          color:colors.darkPink,
          fontWeight: "800",
     },
     header:{
          backgroundColor: colors.lightPink,
          color: colors.darkPink
     }
});

export default MainStyles;