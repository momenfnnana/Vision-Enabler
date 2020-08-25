import React, { useContext, useState } from 'react';
import {
    View,
    Text,
    Image,
    AsyncStorage
} from 'react-native';
import Form from '@Components/signupForm/SignupForm';
import StackHeader from '@Components/Header/StackHeader/StackHeader';
import Color from '@Assets/Constant';
import { Context as AuthContext } from '../../../Context/AuthContext'
import styles from './Styles';
import CompaniesData from '@FakeData/Companies';
import LoadingDialog from '@Components/LoadingDialog/LoadingDialog';

import { register } from "@Services/AuthServices";

const SignUp = ({ navigation }) => {
    const items = [
        { label: '+966', value: '+966' },
        { label: '+999', value: '+999' },
        { label: '+662', value: '+662' },
        { label: '+795', value: '+795' },
    ]
    const [selectedValue, setSelectedValue] = useState("+966");
    const [itemSelected, setSelectItem] = useState(CompaniesData);
    const [PhoneNumber, setPhoneNumber] = useState("5418485552");
    // const selected = CompaniesData.filter(item => item.id === itemSelected[0]);
    const { loginToken } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false);
    const [companies, setCompanies] = useState(CompaniesData);
    const [data, setData] = useState({
        name: "test9",
        email: "gmail1@test.com",
        password: "123456789",
    });
    const doLogin = async () => {
        setIsLoading(true);
        try {
            const response = await register({
                first_name: data.name,
                email: data.email,
                password: data.password,
                mobile_num: selectedValue + PhoneNumber,
                password_confirmation: data.password
            });
            await AsyncStorage.setItem("accessToken", response.data.token);
            console.log(response);
            if (response.data.success === true) {
                navigation.navigate('ActiveAccount')
            } else {
                alert("اسم المستخدم و/أو كلمة المرور خطأ");
            }
            setIsLoading(false);
        } catch (e) {
            console.log(e);
            setIsLoading(false);
            setTimeout(() => {
                alert("email has been used or some input empty");
            }, 300);
        }
    };
    return (
        <View style={styles.container}>
            <StackHeader color={Color.primary} goBack={() => navigation.goBack()} />
            {isLoading && <LoadingDialog />}
            <View style={styles.headSection}>
                <Text style={styles.title1}>{'Account'.toUpperCase()}</Text>
                <Text style={styles.title2}>{'Sign up'.toUpperCase()}</Text>
                <Form
                    SignUp={doLogin}
                    name={data.name}
                    setName={(name) => setData({ ...data, name: name })}
                    email={data.email}
                    setEmail={(name) => setData({ ...data, email: name })}
                    phoneNumber={PhoneNumber}
                    setPhoneNumber={setPhoneNumber}
                    setSelectItem={setSelectItem}
                    data={companies}
                    setData={setCompanies}
                    items={items}
                    selectedValue={selectedValue}
                    setSelectedValue={setSelectedValue}
                    password={data.password}
                    setPassword={(name) => setData({ ...data, password: name })}
                />
                <Image style={styles.footer} source={require('@Assets/images/pups.png')} />
            </View>
        </View>
    )
}
export default SignUp;