import AsyncStorage from '@react-native-async-storage/async-storage';

export const setData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
        return true;
    } catch (e) {
        return false;
    }
}

export const getData = async (key) => {
    try {
        return await AsyncStorage.getItem(key);
    } catch (e) {
        return undefined;
    }
}

export const deleteData = async (key) => {
    try {
        await AsyncStorage.setItem(key, undefined);
        return true;
    } catch (e) {
        return false;
    }
}