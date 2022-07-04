import React, { useState } from react;
import { useMutation } from "@apollo/client";
import { validateEmail } from "../utils/helpers";


const Signup = () => {
    const [errorMessage, setErrorMessage] = useState("");

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
        else {
            setErrorMessage("")
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