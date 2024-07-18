import { useForm } from "../../../hooks/useForm"
import { useState } from "react"
import { addTag } from "../../../services/tag"
import { createTagParams } from "../../../types/Tags"
export function useViewModel() {
    const [form, setForm] = useForm<createTagParams>({ sn: "", name: "", mac: "", uid: "" })
    const [loading, setLoading] = useState<boolean>(false)


    const create = async () => {
        try {
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
            }, 1000);
            // const response = await addTag(form)
        } catch (error) {
            console.log(error)
        }
    }


    return { form, setForm, loading, create }
}