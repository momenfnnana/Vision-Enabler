import React, { useState } from 'react';
import { View, CheckBox } from 'react-native';
import Color from '@Assets/Constant';

const CheckBoxs = () => {
    const [isSelected, setSelection] = useState(false);
    return (
        <View>
            <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                tintColors={{ true: Color.primary, false: Color.secondary }}
            />
        </View>
    )
}
export default CheckBoxs;