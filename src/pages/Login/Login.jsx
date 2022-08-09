import { useState } from "react";

import { useAuthContext } from "../../contexts/AuthContext";
import { types } from '../../reducers/AuthReducer';

export default function Login() {
    const [creds, setCreds] = useState({});
    const { state, dispatch } = useAuthContext();

    const handleChange = (event) => {
        const newCreds = { ...creds, [event.target.name]: event.target.value };
        console.info("CREDS", newCreds);
        setCreds(newCreds);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.info("SUBMIT");
        dispatch({ type: types.LOGIN });
    }

    return (
        <form onSubmit={handleSubmit}>
            <span>{state.name}</span>
            <input name="email" type="text" onChange={handleChange}></input>
            <input name="password" type="password" onChange={handleChange}></input>
            <button type="submit">Submit</button>
        </form>
    )
}