import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { validateEmail } from "../utils/helpers";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";


const Signup = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const [addUser, { error }] = useMutation(ADD_USER);

    const [formState, setFormState] = useState(
        {
            email: "",
            password: ""
        }
    );

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleUserSignup = async (event) => {
        event.preventDefault();
        
        const email = document.getElementById("email").value;
        const isValid = validateEmail(email);
        if (!isValid) {
            setErrorMessage("Please enter a valid email");
        }
        else if (!email) {
            setErrorMessage("Please enter a password");
        }
        else {
            setErrorMessage("");
            try {
                const { data } = await addUser({
                    variables: {...formState}
                });
                Auth.login(data.addUser.token);
            } catch(e) {
                console.error(e);
            }
        }
        
    };

    return (
        <section>
            <form onSubmit={handleUserSignup}>
                <div>
                    <h1>Join the Fellas!</h1>

                    <label htmlFor="email">Email:</label>
                    <input id="email" name="email" type="email" onBlur={handleChange}></input>

                    <label htmlFor="password">Password:</label>
                    <input id="password" name="password" type="password" onBlur={handleChange}></input>
                </div>

                <button>Submit</button>
            </form>
        </section>
    );
};

export default Signup;