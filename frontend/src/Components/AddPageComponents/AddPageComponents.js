import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './style.scss'
import axios from 'axios';

function AddPageComponents() {
    return (
        <section className='addpage'>
            <Formik
                initialValues={{ iconClass: '', name: '', description: '', price: '' }}
                validationSchema={Yup.object({
                    iconClass: Yup.string().required('*'),
                    name: Yup.string().required('*'),
                    description: Yup.string().required('*'),
                    price: Yup.string().required('*'),
                })}
                onSubmit={(values) => {
                    axios.post("http://localhost:5555/", values)
                }}
            >
                <Form>
                    <div>
                        <label htmlFor="iconClass">Enter Icon :</label>
                        <Field name="iconClass" type="text" />
                        <ErrorMessage name="iconClass" />
                    </div>

                    <div>
                        <label htmlFor="name">Enter Name :</label>
                        <Field name="name" type="text" />
                        <ErrorMessage name="name" />
                    </div>

                    <div>
                        <label htmlFor="description">Enter Description :</label>
                        <Field name="description" type="text" />
                        <ErrorMessage name="description" />
                    </div>

                    <div>
                        <label htmlFor="price">Enter Price :</label>
                        <Field name="price" type="number" />    
                        <ErrorMessage name="price" />
                    </div>
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </section>
    )
}

export default AddPageComponents