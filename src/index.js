import { NativeModules } from 'react-native';
const { ApptentiveModule } = NativeModules;
import { init } from './platform-specific';

/**
 * Configure Apptentive using your key and signature.
 * You can add an optional AppleID to redirect the user to the App Store
 * @param appKey Found in Apptentive Dashboard
 * @param appSignature Found in Apptentive Dashboard
 * @param appleID optional Found in iTunesConnect
 * @return Promise
 */
function register(appKey, appSignature, ...args) {
  return init(ApptentiveModule, appKey, appSignature, args[0])
}

/**
 * Present the feedback view
 * @return Promise with success boolean or error
 */
function presentMessageCenter() {
  return ApptentiveModule.presentMessageCenter();
}

/**
 * Present the feedback view with custom data
 * @param customData optional Object
 * @return Promise with success boolean or error
 */
function presentMessageCenterWithCustomData(customData) {
  return ApptentiveModule.presentMessageCenterWithCustomData(customData);
}

/**
 * Log an event to apptentive
 * @param event String event name
 * @return Promise with success boolean or error
 */
function engageEvent(event) {
  return ApptentiveModule.engageEvent(event);
}

/**
 * Send person data to apptentive
 * @param key Data key
 * @param value String value
 * @return Promise returning true or error
 */
function addPersonDataString(key, value) {
  return ApptentiveModule.addPersonDataString(value, key);
}

/**
 * Send person data to apptentive
 * @param key Data key
 * @param value Number value
 * @return Promise returning true or error
 */
function addPersonDataNumber(key, value) {
  return ApptentiveModule.addPersonDataNumber(value, key);
}

/**
 * Send person data to apptentive
 * @param key Data key
 * @param value Bool value
 * @return Promise returning true or error
 */
function addPersonDataBool(key, value) {
  return ApptentiveModule.addPersonDataBool(value, key);
}

/**
 * Send device data to apptentive
 * @param key Data key
 * @param value String value
 * @return Promise returning true or error
 */
function addDeviceDataString(key, value) {
  return ApptentiveModule.addDeviceDataString(value, key);
}

/**
 * Send device data to apptentive
 * @param key Data key
 * @param value Number value
 * @return Promise returning true or error
 */
function addDeviceDataNumber(key, value) {
  return ApptentiveModule.addDeviceDataNumber(value, key);
}

/**
 * Send device data to apptentive
 * @param key Data key
 * @param value Bool value
 * @return Promise returning true or error
 */
function addDeviceDataBool(key, value) {
  return ApptentiveModule.addDeviceDataBool(value, key);
}

module.exports = {
  register,
  presentMessageCenter,
  presentMessageCenterWithCustomData,
  engageEvent,
  addPersonDataString,
  addPersonDataNumber,
  addPersonDataBool,
  addDeviceDataString,
  addDeviceDataNumber,
  addDeviceDataBool
}
