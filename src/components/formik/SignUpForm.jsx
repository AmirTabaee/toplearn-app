import React from "react";
import { useFormik } from "formik";

const SignUpForm = () => {
    const formik = useFormik({
        initialValues: {
            fullname: "",
            email: "",
            password: "",
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="fullname">fullname :</label>
                <input
                    type="text"
                    id="fullname"
                    name="fullname"
                    onChange={formik.handleChange}
                    value={formik.values.fullname}
                />
                <label htmlFor="email"> email address :</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                <label htmlFor="password"> password :</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default SignUpForm;
