"use strict";

var _native = require("@react-navigation/native");

navigation.dispatch(_native.CommonActions.navigate({
  name: 'Profile',
  params: {
    user: 'jane'
  }
}));