import {Payload} from "@/store/slice/record/type";

export function isEmpty(obj:Payload['entity']) {
    let empty = false;
    // Получаем ключи объектов
    if(obj.text === "") empty = true
    else return false
    if(obj.tags.length === 0) empty = true
    else return false
    if(obj.header === "") empty = true
    else return false

    return empty;
}
