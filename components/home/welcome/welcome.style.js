import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  userName: {
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: COLORS.secondary,
  },
  welcomeMessage: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
    marginTop: 2,
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.large,
    height: 50,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginRight: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: "100%",
  },
  searchInput: {
    fontFamily: FONT.regular,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: COLORS.white,
  },
  tabsContainer: {
    width: "100%",
    marginTop: SIZES.small,
  },
  tab: (activeJobType, item) => ({
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.large,
    borderRadius: SIZES.small,
    borderWidth: 1,
    backgroundColor:
      activeJobType === item ? COLORS.tertiary : COLORS.grayLight,
    borderColor: activeJobType === item ? COLORS.tertiary : COLORS.gray2,
    shadowColor: COLORS.gray2,
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 3, // For Android shadow
  }),
  tabText: (activeJobType, item) => ({
    fontFamily: FONT.medium,
    fontSize: SIZES.small,
    color: activeJobType === item ? COLORS.lightWhite : COLORS.gray2, // Text is white when selected
  }),
});

export default styles;
