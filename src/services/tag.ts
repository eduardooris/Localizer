import { createTagParams } from "../types/Tags";
import { http } from "./http";

export const addTag = async ({ uid, name, mac, sn }: createTagParams) => {
    try {
        const response = await http({
            url: 'addTag',
            method: 'POST',
            body: JSON.stringify({ uid, name, mac, sn }),
            contentType: 'application/json'
        })
        return response
    } catch (error) {
        return error
    }
}