import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import Input from "../../components/Input/Input";
import TitleForm from "../../components/TitleForm/TitleForm";
import DropDownList from "../../components/DropDownList/DropDownList";
import Constants from "expo-constants";
import { Fontisto, FontAwesome } from "@expo/vector-icons";
import { PaymentsStripe as Stripe } from "expo-payments-stripe";
import styles from "../FormsScreenStyles/FormsScreenStyles";

// const params = {
//   number: "4242424242424242",
//   expMonth: 11,
//   expYear: 2018,
//   cvc: "123",
// };

const DiversityInvoiceScreen = () => {
  //   useEffect(() => {
  //     Stripe.setOptionsAsync({
  //       publishableKey:
  //         "pk_test_51HDp26JID4QxPn5UMrgPU0b2pYzjomTNRlX8kr1Uy10GPnlmy1Fi3u3UIg6Pp3Sh6HwmxTDizyXkEoT9fIDMYuzg00502EBT7j", // Your key
  //     });
  //   }, []);

  const [data, setData] = useState({
    num: "",
    expMonth: 0,
    expYear: 0,
    cvc: "",
    promoCode: "",
    holderName: "",
    isFocused: "Credit",
    month: null,
    year: null,
  });

  const handelSubmit = async () => {
    // debugger;
    // const token = await Stripe.createTokenWithCardAsync(params);
    // console.log("token: ", token);
  };
  const creditHandel = () => setData({ ...data, isFocused: "Credit" });
  const payPalHandel = () => setData({ ...data, isFocused: "payPal" });

  return (
    <View
      style={{
        paddingHorizontal: "5%",
        paddingTop: Constants.statusBarHeight,
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <TitleForm>Invoice Details</TitleForm>
        <Text style={[styles.subTitle, styles.text]}>
          This survey is required payment to access.
        </Text>
        <Text style={[styles.paymentMethodText, styles.text]}>
          Payment Method
        </Text>
        <View
          style={[
            styles.containMethodButtons,
            { marginTop: "6.5%", marginBottom: "4%" },
          ]}
        >
          <TouchableOpacity
            style={[
              styles.containMethodBtn,
              data.isFocused === "Credit"
                ? styles.activeMethodBtn
                : styles.disableMethodBtn,
            ]}
            onPress={creditHandel}
          >
            <Fontisto
              name="credit-card"
              style={[
                styles.iconStyle,
                data.isFocused === "Credit"
                  ? styles.activeIcon
                  : styles.disableIcon,
              ]}
            />
            <Text
              style={[
                styles.BtnMethodText,
                styles.text,
                data.isFocused === "Credit"
                  ? styles.activeTextBtn
                  : styles.disableTextBtn,
              ]}
            >
              Credit
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.containMethodBtn,
              data.isFocused === "payPal"
                ? styles.activeMethodBtn
                : styles.disableMethodBtn,
            ]}
            onPress={payPalHandel}
          >
            <FontAwesome
              name="paypal"
              style={[
                styles.iconStyle,
                data.isFocused === "payPal"
                  ? styles.activeIcon
                  : styles.disableIcon,
              ]}
            />
            <Text
              style={[
                styles.BtnMethodText,
                styles.text,
                data.isFocused === "payPal"
                  ? styles.activeTextBtn
                  : styles.disableTextBtn,
              ]}
            >
              Paypal
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containInput}>
          <Text style={[styles.text, styles.label]}>Card Holder</Text>
          <Input
            placeholder="Holder Name"
            onChangeText={(name) => setData({ ...data, holderName: name })}
            value={data.holderName}
          />
        </View>
        <View style={styles.containInput}>
          <Text style={[styles.text, styles.label]}>Card Number</Text>
          <Input
            placeholder="1234 5678 4675 8633"
            rightIcon={<FontAwesome name="cc-visa" size={26} color="#1A1876" />}
            onChangeText={(number) => setData({ ...data, num: number })}
            value={data.num}
          />
        </View>
        <View style={styles.containInput}>
          <Text style={[styles.text, styles.label]}>CVV</Text>
          <Input
            placeholder="CVV Number"
            onChangeText={(number) => setData({ ...data, cvc: number })}
            value={data.cvc}
          />
        </View>
        <View style={styles.containInput}>
          <Text style={[styles.text, styles.label]}>Expiration Date</Text>
          <View style={styles.containDropdownLists}>
            <DropDownList
              placeholder="Month"
              data={[
                {
                  label: "12",
                  value: 12,
                },
                {
                  label: "11",
                  value: 11,
                },
                {
                  label: "10",
                  value: 10,
                },
                {
                  label: "9",
                  value: 9,
                },
                {
                  label: "8",
                  value: 8,
                },
                {
                  label: "7",
                  value: 7,
                },
                {
                  label: "6",
                  value: 6,
                },
                {
                  label: "5",
                  value: 5,
                },
              ]}
              defaultVal={data.month}
              onChangeItem={(item) => setData({ ...data, month: item.value })}
              paddingVertical={"5.5%"}
              containerStyle={{ flex: 0.48 }}
            />
            <DropDownList
              placeholder="Year"
              data={[
                {
                  label: "2011",
                  value: 2011,
                },
                {
                  label: "2012",
                  value: 2012,
                },
                {
                  label: "2013",
                  value: 2013,
                },
                {
                  label: "2014",
                  value: 2014,
                },
                {
                  label: "2015",
                  value: 2015,
                },
                {
                  label: "2016",
                  value: 2016,
                },
                {
                  label: "2017",
                  value: 2017,
                },
                {
                  label: "2018",
                  value: 2018,
                },
                {
                  label: "2019",
                  value: 2019,
                },
              ]}
              defaultVal={data.year}
              onChangeItem={(item) => setData({ ...data, year: item.value })}
              paddingVertical={"5.5%"}
              containerStyle={{ flex: 0.48 }}
            />
          </View>
        </View>
        <View style={styles.containInput}>
          <Text style={[styles.text, styles.label]}>add promo code</Text>
          <Input
            placeholder="ADD HERE"
            onChangeText={(number) => setData({ ...data, promoCode: number })}
            value={data.promoCode}
          />
        </View>
        <View style={styles.containInput}>
          <Text style={[styles.text, styles.label]}>Total billed</Text>
          <Text style={[styles.text, styles.billedText]}>$00.00</Text>
        </View>
        <TouchableOpacity onPress={handelSubmit} style={styles.submitBtn}>
          <Text style={styles.submitText}>Checkout</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default DiversityInvoiceScreen;
