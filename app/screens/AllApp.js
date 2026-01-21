import {
  StyleSheet,
  View,
  TextInput,
  Image,
  Text,
  FlatList,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import TitleSection from "../components/TitleSection";
import BodySection from "../components/BodySection";
import { DUMMY_CATEGORIES } from "../data/DUMMY";

function AllApp() {
  function renderCategory({ item }) {
    return (
      <View style={styles.section}>
        <TitleSection title={item.title} />

        {item.items.map((app, index) => (
          <BodySection
            key={app.id}
            title={app.name}
            body={app.description}
            icon={app.image}
            isLast={index === item.items.length - 1}
          />
        ))}
      </View>
    );
  }

  return (
    <>
      {/* ✅ StatusBar chuẩn Snack */}
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <SafeAreaView style={styles.safe}>
        <View style={styles.container}>
          {/* Search */}
          <View style={[styles.wrap, styles.searchRow]}>
            <TextInput
              placeholder="Type feature's name"
              placeholderTextColor="#9CA3AF"
              style={styles.find}
            />

            <View style={styles.gridBox}>
              <Image
                source={require("../assets/myfpt/common_gridview.png")}
                style={styles.gridIcon}
              />
            </View>
          </View>

          {/* Title */}
          <View style={styles.wrap}>
            <Text style={styles.title}>All Apps</Text>
          </View>

          {/* List */}
          <FlatList
            data={DUMMY_CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategory}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 40 }}
          />
        </View>
      </SafeAreaView>
    </>
  );
}

export default AllApp;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#fff",
  },

  container: {
    flex: 1,
  },

  wrap: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },

  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  find: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 14,
    backgroundColor: "#EFEDF0",
    fontSize: 14,
  },

  gridBox: {
    width: 44,
    height: 44,
    backgroundColor: "E6EDF7",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  gridIcon: {
    width: 22,
    height: 22,
    resizeMode: "contain",
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#000",
  },

  section: {
    paddingBottom: 8,
  },
});
