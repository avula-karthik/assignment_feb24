import { useFormik, Field, Form } from "formik";

const Registration = () => {
   
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            age: '',
            fullname: "",
        },
        onSubmit(values) {
            let usersArray = []
            if(localStorage.getItem("Users")){
                usersArray = JSON.parse(localStorage.getItem("Users"))
            
            let userObj = {
                name: formik.values.fullname,
                email: formik.values.email,
                age: formik.values.age,
                password: formik.values.password,
            }
            usersArray.push(userObj)
            let myJSONString = JSON.stringify(usersArray);
            localStorage.setItem("Users", myJSONString);
            }
            else{
                let userObj = {
                    name: formik.values.fullname,
                    email: formik.values.email,
                    age: formik.values.age,
                    password: formik.values.password,
                }
                usersArray.push(userObj);
                localStorage.setItem("Users", JSON.stringify(usersArray))
            }

        },
        validate() {
            const errors = {};
            if (formik.values.password.length < 4 || formik.values.password.length > 20) {
                errors.password = "Password char Count Range : 4-20";
            }
            if (formik.values.email.length < 5 || formik.values.email.length >= 30) {
                errors.email = "Email char count Range : 5-30 ";
            }
            if (formik.values.age < 18 || formik.values.age > 120) {
                errors.age = "Age should be 18-120";
            }
            if (formik.values.fullname.length < 5 || formik.values.fullname.length > 20) {
                errors.fullname = "fullName char range should be 5-20";
            }
            return errors;
        }
    });
    return (
        <div >
            <div>
                <form onSubmit={formik.handleSubmit} noValidate >
                    <table>
                        <tr>
                            <td colSpan={2}>
                            <h3 className="heading3text">Registration Form</h3>
                            </td>
                            
                        </tr>
                        <tr>
                            <td>Email : </td>
                            <td>
                                <input
                                    type="email"
                                    name="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                />
                                <br />
                                <div className="text-danger">
                                    {formik.errors.email ? formik.errors.email : null}
                                </div>
                            </td>
                        </tr>



                        <tr>
                            <td>Password : </td>
                            <td>
                                <input
                                    type="password"
                                    name="password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                />
                                <br />
                                <div className="text-danger">
                                    {formik.errors.password ? formik.errors.password : null}
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>Age : </td>
                            <td>
                                <input
                                    type="number"
                                    name="age"
                                    value={formik.values.age}
                                    onChange={formik.handleChange}
                                />
                                <br />
                                <div className="text-danger">
                                    {formik.errors.age ? formik.errors.age : null}
                                </div>
                            </td>
                        </tr>


                        <tr>
                            <td>Full Name :</td>
                            <td>
                                <input
                                    type="text"
                                    name="fullname"
                                    value={formik.values.fullname}
                                    onChange={formik.handleChange}
                                />
                                <br />
                                <div className="text-danger">
                                    {formik.errors.fullname ? formik.errors.fullname : null}
                                </div>
                            </td>
                        </tr>
                    </table>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Registration;