import { StyleSheet, Text, View, Image } from "react-native";

function BodySection({ title, body, icon, isLast }) {
  return (
    <View
      style={[
        styles.wrap,
        isLast && styles.noBorder
      ]}
    >
     
      
      <View style={styles.left}>
        <View style={styles.background}>
          <Image source={icon} style={styles.icon} />
        </View>
      </View>

   
      <View style={styles.right}>
        <Text style={styles.titleBody}>{title}</Text>
        <Text style={styles.mainBody}>{body}</Text>
      </View>
    </View>
    
  );
}


export default BodySection;

const styles = StyleSheet.create({
  wrap: {

    flexDirection: "row",
    paddingVertical: 30, 
    paddingHorizontal: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "#E5E7EB",
  },

  noBorder: {
    borderBottomWidth: 0,
  },

  left: {
    marginRight: 10,
    justifyContent: "center",
  },

  icon: {
    width: 50,
    height: 50,
  },

  right: {
    flex: 1,
  },

  titleBody: {
    fontSize: 16,  
    fontWeight: "600",
    color: "#111827",
  },

  mainBody: {
    fontSize: 13,
    color: "#6B7280",
    marginTop: 1,
  },
  background: {
  width: 48,          
  height: 48,
  borderRadius: 24,   
  backgroundColor: "#F3F4F6",
  justifyContent: "center",
  alignItems: "center",
  marginRight: 12,
},
});
