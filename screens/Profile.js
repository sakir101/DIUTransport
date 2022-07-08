import { View, StatusBar, Platform, SafeAreaView } from "react-native";
import React from "react";
import { useTheme, Text } from "react-native-paper";

const Profile = () => {
  const theme = useTheme();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme?.colors.surface,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <SafeAreaView>
        <Text>Profile</Text>
      </SafeAreaView>
    </View>
  );
};

export default Profile;
