import React from 'react'
import { Formik } from "formik";
import * as Yup from "yup";
import "./Login.css"

// Yup ile girişlerin kontrolü
const schema = Yup.object().shape({
    email: Yup.string()
        .required("Email is a required field")
        .email("Invalid email format"),
    password: Yup.string()
        .required("Password is a required field")
});

function Login() {
    return (
        <>

            <Formik
                //Yup ile form alanlarının kontrolü
                validationSchema={schema}
                // Başlangıç değerleri
                initialValues={{
                    email: "",
                    password: ""
                }}
                //Butona tıklandığında yapılacaklar
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                }) => (
                    <div className="login">
                        <div className="form">

                            <form noValidate onSubmit={handleSubmit}>
                                <span>Login</span>

                                <input
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    placeholder="Enter username"
                                    className="form-control inp_text"
                                    id="email"
                                />

                                <p className="error">
                                    {errors.email && touched.email && errors.email}
                                </p>

                                <input
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    placeholder="Enter password"
                                    className="form-control"
                                />

                                <p className="error">
                                    {errors.password && touched.password && errors.password}
                                </p>

                                <button type="submit">Login</button>
                            </form>
                        </div>
                    </div>
                )}
            </Formik>
        </>
    );
}

export default Login