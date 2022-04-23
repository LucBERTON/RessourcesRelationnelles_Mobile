import AsyncStorage from '@react-native-async-storage/async-storage'

export const USER_KEY = 'user'
export const TOKEN_KEY = 'token'

export async function storeData(key, value){
    try{
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(key, jsonValue)
    } catch(e) {
        console.log(e)
        return false
    }
    return false
}

export async function getData(key){
    try{
        const valueStorage = await AsyncStorage.getItem(key)
        var jsonValueParsed = JSON.parse(valueStorage)
    } catch(error) {

    }

    return jsonValueParsed
}