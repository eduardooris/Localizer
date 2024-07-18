import { useState } from 'react';

type FormValue<T> = T;

export const useForm = <T extends object>(initialValue: FormValue<T>) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (newValue: Partial<FormValue<T>>) => {
        setValue(prevState => ({ ...prevState, ...newValue }));
    }

    return [value, handleChange] as [FormValue<T>, (newValue: Partial<FormValue<T>>) => void];
}
