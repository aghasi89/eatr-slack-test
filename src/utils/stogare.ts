import AsyncStorage from "@react-native-async-storage/async-storage";

class Storage {
  constructor() {
    //AsyncStorage.clear();
    }
    async setItem<T>(key: string, value: T) {
        try {
            await AsyncStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            throw e;
        }
    }
    async getItem<T>(key: string):Promise<T> {
        try {
            const json =  await AsyncStorage.getItem(key);
            if(json === null) throw new Error("Item not found");
            return JSON.parse(json);
        } catch (e) {
            throw e;
        }
    }
}

export default new Storage();