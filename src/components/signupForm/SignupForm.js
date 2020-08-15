import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { Input } from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from './Styles';
import Select2 from "react-native-select-two";
import CompaniesData from '@FakeData/Companies';
import Color from '@Assets/Constant';

const Form = ({ SignUp }) => {
    const [selectedValue, setSelectedValue] = useState("+966");
    const [data, setData] = useState(CompaniesData);
    console.log(data[0].name);
    const selectItem = (data, i) => {
        setData(data[i] = data)
    }
    return (
        <View style={styles.container}>
            <Input
                placeholder="Name"
            />
            <Input
                placeholder="Email"
            />
            <View style={styles.DropDownPickerContainer}>
                <DropDownPicker
                    items={[
                        { label: '+966', value: '+966' },
                        { label: '+999', value: '+999' },
                        { label: '+662', value: '+662' },
                        { label: '+795', value: '+795' },
                    ]}
                    defaultValue={selectedValue}
                    containerStyle={styles.PickerContainerStyle}
                    style={styles.PickerStyle}
                    itemStyle={styles.PickerItemStyle}
                    dropDownStyle={styles.dropDownStyle}
                    onChangeItem={() => setSelectedValue}
                />
                <Input style={styles.PickerInput}
                    placeholder="0599 000 000"
                />
            </View>
            <Text style={{
                color: Color.secondary,
                fontSize: 16,
                marginLeft: "2%",
                marginBottom: "-1%"
            }}>Your Company</Text>
            <Select2
                isSelectSingle
                style={{ borderColor: Color.white, borderBottomColor: Color.secondary, width: "97%", alignSelf: "center", marginBottom: "5%" }}
                colorTheme="blue"
                popupTitle="Select item"
                title="Select item"
                data={data}
                onSelect={selectItem}
                onRemoveItem={selectItem}
            />
            <Input
                placeholder="Password"
                secureTextEntry
            />
            <View style={styles.privacyText}>
                <Text style={styles.textPrimary}>
                    By creating account, you agree to Vision Enabler
            </Text>
                <TouchableOpacity>
                    <Text style={styles.textSecondary}> Privacy Policy</Text>
                </TouchableOpacity>
                <Text style={styles.textPrimary}> and </Text>
                <TouchableOpacity>
                    <Text style={styles.textSecondary}>Terms of Use</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                onPress={SignUp}
                style={styles.button}
            >
                <Text style={styles.SignupText}>Sign up</Text>
            </TouchableOpacity>
        </View >
    )
}

export default Form