import * as FileSystem from "expo-file-system"

type JSONUrl = `${string}.json`;



export const getDataJSON = async <T = any> (url:JSONUrl): Promise<T | false> => {
    return await getDataFile<T>(url)
}

export const getDataFile = async <T = any> (url:string): Promise<T | false> => {
    const fileURi = FileSystem.documentDirectory + url
    const infoFile =await FileSystem.getInfoAsync(fileURi)

    if(!infoFile.exists) return false
    try{
        return  JSON.parse(await FileSystem.readAsStringAsync(fileURi)) as T
    }
    catch (e){
        console.log(e)
        return false
    }
}

export const saveDataJSON = async (url:JSONUrl,data:any):Promise<boolean> => {
    return await saveDataFile(url,data)
}

export const saveDataFile = async (url:string,data:any):Promise<boolean> => {
    const fileURi = FileSystem.documentDirectory + url

    try{
        await FileSystem.writeAsStringAsync(fileURi,JSON.stringify(data))
        return true
    }
    catch (e){
        console.log(e)
        return false;
    }
}
