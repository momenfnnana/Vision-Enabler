import { CommonActions } from '@react-navigation/native';

navigation.dispatch(
    CommonActions.navigate({
        name: 'Profile',
        params: {
            user: 'jane',
        },
    })
);