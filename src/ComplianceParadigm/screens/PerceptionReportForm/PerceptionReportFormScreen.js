// 
import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import Input from "../../components/Input/Input";
import TitleForm from "../../components/TitleForm/TitleForm";
import DropDownList from "../../components/DropDownList/DropDownList";
import Constants from "expo-constants";
import DropDownPicker from "react-native-dropdown-picker";
import styles from "../FormsScreenStyles/FormsScreenStyles";
import HeaderStack from '@ParadigmComponents/header/headerStack/HeaderStack';
import Color from '@Assets/Constant';

const PerceptionReportFormScreen = ({ navigation }) => {
  const [data, setData] = useState({
    FullName: "",
    gender: "M",
    Organization: "",
    level: null,
    jobTitle: "",
    country: null,
    sector: null,
    email: "",
  });

  const handelSubmit = async () => {
    console.log("data sended!");
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Color.white,
      }}
    >
      <HeaderStack
        color={Color.primary}
        goBack={() => navigation.goBack()}
        backgroundColor={Color.white}
        onPress2={() => navigation.navigate('Profile')}
        borderBottomWith={1}
      />
      <ScrollView showsVerticalScrollIndicator={false} style={{ paddingHorizontal: "5%" }}>
        <Text style={[styles.text, styles.upperTitle]}>My Personal</Text>
        <TitleForm>Perception Report</TitleForm>
        <Text style={[styles.lowerTitle, styles.text]}>
          You will receive your pdf report via your registered email address
          shortly.
        </Text>
        <View style={styles.containInput}>
          <Text style={[styles.text, styles.label]}>Full Name</Text>
          <Input
            placeholder="Enter Full Name"
            onChangeText={(name) => setData({ ...data, FullName: name })}
            value={data.FullName}
          />
        </View>
        <View style={styles.containInput}>
          <Text style={[styles.text, styles.label]}>Gender</Text>
          <View style={styles.containMethodButtons}>
            <TouchableOpacity
              style={[
                styles.containMethodBtn,
                data.gender === "M"
                  ? styles.activeMethodBtn
                  : styles.disableMethodBtn
              ]}
              onPress={() => setData({ ...data, gender: "M" })}
            >
              <Text
                style={[
                  styles.BtnMethodText,
                  styles.text,
                  data.gender === "M"
                    ? styles.activeTextBtn
                    : styles.disableTextBtn,
                ]}
              >
                Male
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.containMethodBtn,
                data.gender === "F"
                  ? styles.activeMethodBtn
                  : styles.disableMethodBtn
              ]}
              onPress={() => setData({ ...data, gender: "F" })}
            >
              <Text
                style={[
                  styles.BtnMethodText,
                  styles.text,
                  data.gender === "F"
                    ? styles.activeTextBtn
                    : styles.disableTextBtn,
                ]}
              >
                Female
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.containInput}>
          <Text style={[styles.text, styles.label]}>Organization</Text>
          <Input
            placeholder="Enter your organization"
            onChangeText={(Org) => setData({ ...data, Organization: Org })}
            value={data.Organization}
          />
        </View>
        <View style={styles.containInput}>
          <Text style={[styles.text, styles.label]}>Level</Text>
          <DropDownList
            placeholder="Select your level"
            data={[
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
              {
                label: "4",
                value: 4,
              },
              {
                label: "3",
                value: 3,
              },
              {
                label: "2",
                value: 2,
              },
              {
                label: "1",
                value: 1,
              },
            ]}
            defaultVal={data.level}
            onChangeItem={(item) => setData({ ...data, level: item.value })}
            paddingVertical={"3.7%"}
          />
        </View>
        <View style={styles.containInput}>
          <Text style={[styles.text, styles.label]}>Job title</Text>
          <Input
            placeholder="Enter your job title"
            onChangeText={(job) => setData({ ...data, jobTitle: job })}
            value={data.jobTitle}
          />
        </View>
        <View style={styles.containInput}>
          <Text style={[styles.text, styles.label]}>Country</Text>
          <DropDownList
            placeholder="Select country"
            data={[
              {
                label: "palestine",
                value: "pal",
              },
              {
                label: "USA",
                value: "USA",
              },
              {
                label: "UK",
                value: "UK",
              },
              {
                label: "Jordan",
                value: "Jordan",
              },
              {
                label: "Egypt",
                value: "Egy",
              },
              {
                label: "Lebanon",
                value: "leb",
              },
              {
                label: "Iraq",
                value: "Iraq",
              },
              {
                label: "north africa",
                value: "north africa",
              },
            ]}
            defaultVal={data.country}
            onChangeItem={(item) => setData({ ...data, country: item.value })}
            paddingVertical={"3.7%"}
          />
        </View>
        <View style={styles.containInput}>
          <Text style={[styles.text, styles.label]}>Sector</Text>
          <DropDownList
            placeholder="Select sector"
            data={[
              {
                label: "development",
                value: "development",
              },
              {
                label: "Engineering",
                value: "Engineering",
              },
              {
                label: "Testing",
                value: "Testing",
              },
              {
                label: "Designing",
                value: "Designing",
              },
              {
                label: "CEO",
                value: "CEO",
              },
              {
                label: "CTO",
                value: "CTO",
              },
            ]}
            defaultVal={data.sector}
            onChangeItem={(item) => setData({ ...data, sector: item.value })}
            paddingVertical={"3.7%"}
          />
        </View>
        <View style={styles.containInput}>
          <Text style={[styles.text, styles.label]}>Email</Text>
          <Input
            placeholder="Enter your email address"
            onChangeText={(email) => setData({ ...data, email: email })}
            value={data.email}
          />
        </View>
        <TouchableOpacity onPress={handelSubmit} style={styles.submitBtn}>
          <Text style={styles.submitText}>Send</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default PerceptionReportFormScreen;
