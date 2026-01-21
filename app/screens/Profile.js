import { View, Text, Image, StyleSheet, FlatList, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { DUMMY_MENU } from "../data/DUMMY";
import MenuSection from "../components/MenuSection";

function Profile() {
  function renderMenu({ item, index }) {
    return (
      <MenuSection
        title={item.title}
        icon={item.icon}
        showArrow={item.showArrow}
        noBorder={index === DUMMY_MENU.length - 1}
      />
    );
  }

  return (
    <>
      
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <SafeAreaView style={styles.safe}>
        <FlatList
          data={DUMMY_MENU}
          keyExtractor={(item) => item.id}
          renderItem={renderMenu}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}

          ListHeaderComponent={
            <View>
              <View style={styles.bannerWrapper}>
                <Image
                  source={require("../assets/myfpt/bg_banner_profile_male.png")}
                  style={styles.banner}
                />

                <Image
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
                  }}
                  style={styles.avatar}
                />
              </View>

              <View style={styles.profileInfo}>
                <Text style={styles.name}>
                  PHẠM QUANG KHANG (KHANGPQ3)
                </Text>
                <Text style={styles.role}>(BM SE)</Text>
              </View>
            </View>
          }

          ListFooterComponent={
            <View style={styles.footer}>
              <Text style={styles.footerText}>myFPT Version 5.9.10</Text>
              <Text style={styles.footerText}>
                Copyright © FPT Software 2021
              </Text>
            </View>
          }
        />
      </SafeAreaView>
    </>
  );
}

export default Profile;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#fff",
  },

  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },

  bannerWrapper: {
    position: "relative",
    marginTop: 10,
    marginBottom: 70,
  },

  banner: {
    width: "100%",
    height: 160,
    borderRadius: 12,
  },

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    position: "absolute",
    bottom: -60,
    alignSelf: "center",
    borderWidth: 4,
    borderColor: "#fff",
    backgroundColor: "#E5E7EB",
  },

  profileInfo: {
    alignItems: "center",
    marginBottom: 20,
  },

  name: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
  },

  role: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 4,
  },

  footer: {
    marginTop: 30,
    alignItems: "center",
  },

  footerText: {
    fontSize: 12,
    color: "#9CA3AF",
    marginTop: 4,
  },
});
