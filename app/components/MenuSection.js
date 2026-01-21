import { View, Text, Image, StyleSheet } from "react-native";

function MenuSection({ title, icon, noBorder, showArrow }) {
  return (
    <View style={[styles.menuItem, noBorder && styles.noBorder]}>
      <View style={styles.menuLeft}>
        <Image source={icon} style={styles.icon} />
        <Text style={styles.menuText}>{title}</Text>
      </View>

      {showArrow && (
        <Image
          source={require("../assets/myfpt/arrow.png")}
          style={styles.chevron}
        />
      )}
    </View>
  );
}

export default MenuSection;

const styles = StyleSheet.create({
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: "#E5E7EB",
  },

  noBorder: {
    borderBottomWidth: 0,
  },

  menuLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  icon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },

  chevron: {
    width: 16,
    height: 16,
    tintColor: "#9CA3AF",
  },

  menuText: {
    fontSize: 15,
    color: "#111827",
  },
});
