// 
import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  upperTitle: {
    color: "#22E0D7",
    fontSize: 16,
    marginTop: "3%",
  },
  subTitle: {
    fontSize: 14,
    color: "#313BD0",
    lineHeight: 20,
    marginTop: "2.5%",
    marginBottom: '3%'
  },
  text: {
    fontFamily: "Altissimo",
  },
  containMethodButtons: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
  },
  containMethodBtn: {
    flexDirection: "row",
    paddingVertical: "5%",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: "5%",
    flex: 0.47,
  },
  activeMethodBtn: {
    backgroundColor: '#313BD0'
  },
  disableMethodBtn: {
    borderWidth: 1,
    borderColor: "#E3E4F6",
  },
  paymentMethodText: {
    fontSize: 18,
    marginTop: "7%",
    color: "#313BD0",
  },
  BtnMethodText: {
    fontSize: 15,
  },
  creditIcon: {
    color: "#313BD0",
    fontSize: 18,
    marginRight: "7%",
  },
  paypalIcon: {
    fontSize: 20,
    marginRight: "7%",
    color: "#38465F",
  },
  activeTextBtn: {
    color: "#fff",
  },
  disableTextBtn: {
    color: "#38465F",
  },
  label: {
    color: "#38465F",
    fontSize: 13,
    marginBottom: "1.5%",
    textTransform: "uppercase",
  },
  containInput: {
    marginTop: "5%",
  },
  containDropdownLists: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    ...(Platform.OS !== "android" && {
      zIndex: 10,
    }),
  },
  containDropdown: {
    flex: 0.47,
  },
  itemDropdown: {
    justifyContent: "center",
  },
  dropDownList: {
    backgroundColor: "#fff",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: "#E3E4F6",
  },
  inputDropDown: {
    backgroundColor: "transparent",
    paddingVertical: "3.7%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: "#E3E4F6",
  },
  dropDownPlaceholder: {
    color: "#B3B5D7",
  },
  billedText: {
    marginLeft: "4%",
    fontSize: 30,
    color: "#22E0D7",
  },
  submitBtn: {
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 10,
    backgroundColor: "#313BD0",
    paddingVertical: "5%",
    marginTop: "10%",
    marginBottom: "5%",
  },
  submitText: {
    color: "#fff",
    textAlign: "center",
  },
});

export default styles;
