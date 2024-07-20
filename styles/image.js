import { StyleSheet } from "react-native";

const ImageStyles = StyleSheet.create({
     backgroundImage: {
          flex:1,
          resizeMode: "cover"  
     },
     absoluteImage: {
          position: 'absolute',
          width: "100%",
          top: 0,
          left: 0,
          zIndex: 0,
          borderRadius: 20
     }
})

export default ImageStyles;