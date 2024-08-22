import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Linking,
  Alert,
} from "react-native";
import { icons } from "../../../constants";
import styles from "./footer.style";

const Footer = ({ url }) => {
  const [liked, setLiked] = useState(false);

  const handleLikePress = () => {
    setLiked(!liked);
    Alert.alert(
      liked ? "Removed from Favorites" : "Added to Favorites",
      liked
        ? "You have removed this job from your favorites."
        : "You have added this job to your favorites."
    );
  };

  const handleApplyPress = () => {
    if (url) {
      Linking.openURL(url).catch((err) =>
        Alert.alert("Error", "Failed to open the link. Please try again.")
      );
    } else {
      Alert.alert("Error", "No job URL provided.");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={liked ? styles.likeBtns : styles.likeBtn}
        onPress={handleLikePress}
      >
        <Image
          source={icons.heartOutline}
          style={liked ? styles.likeBtnImages : styles.likeBtnImage}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.applyBtn} onPress={handleApplyPress}>
        <Text style={styles.applyBtnText}>Apply for job</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
