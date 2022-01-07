import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup"


const validate = values => {
    const errors = {}
    if(!values.fullname){
        errors.fullname = "required"
    }else if(values.fullname.length < 15){
        errors.fullname = "must be at least 15 characters !" 
    }
    if(!values.email){
        errors.email = "required"
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email = "must be at least 15 characters !" 
    }
    if(!values.password){
        errors.password = "required"
    }else if(values.firstname.length < 15){
        errors.password = "must be at least 15 characters !" 
    }
    return errors;
}

const SignUpForm = () => {
    const formik = useFormik({
        initialValues: {
            fullname: "",
            email: "",
            password: "",
        },
        validate,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div className="container">
            <div className="row">
                <form onSubmit={formik.handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="fullname">fullname :</label>
                        <input
                            type="text"
                            id="fullname"
                            name="fullname"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.fullname}
                            className="form-control"
                        />
                        {formik.touched.fullname && formik.errors.fullname ? <div style={{color:"red"}}>{formik.errors.fullname}</div> : null}
                    </div>
                    <br />
                    <div className="input-group">
                        <label htmlFor="email"> email address :</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            className="form-control"
                        />
                        {formik.touched.email && formik.errors.email ? <div style={{color:"red"}}>{formik.errors.email}</div> : null}
                    </div>
                    <br />
                    <div className="input-group">
                        <label htmlFor="password"> password :</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            className="form-control"
                        />
                        {formik.touched.password && formik.errors.password ? <div style={{color:"red"}}>{formik.errors.password}</div> : null}
                    </div>
                    <br />
                    <hr />
                    <button type="submit" className="btn btn-info btn-lg">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default SignUpForm;
