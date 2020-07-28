import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { Input } from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from './Styles';
const Form = ({ SignUp }) => {
    const [selectedValue, setSelectedValue] = useState("+966");

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
                <Input
                    style={styles.PickerInput}
                    placeholder="0599 000 000"
                />
            </View>
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