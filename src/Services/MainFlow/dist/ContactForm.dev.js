"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContactUSForm = exports.ContactForm = void 0;

var _Fetching = _interopRequireDefault(require("@Utilities/Fetching"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ContactForm = function ContactForm(body) {
  return (0, _Fetching["default"])("/ContactStore", 'post', body);
};

exports.ContactForm = ContactForm;

var ContactUSForm = function ContactUSForm(body) {
  return (0, _Fetching["default"])("/contact", 'post', body);
}; // export const getProfile = () => fetching(`/profile`);


exports.ContactUSForm = ContactUSForm;