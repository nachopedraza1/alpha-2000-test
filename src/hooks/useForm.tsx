import { ChangeEvent, useState } from "react";

export const useForm = () => {

    const [formState, setFormState] = useState({});

    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    const onFormSubmit = () => {
        alert(JSON.stringify(formState))
    }

    return {
        formState,
        onFormSubmit,
        onInputChange
    }
}
