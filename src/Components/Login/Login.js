import { useFormik } from "formik";
import { basicSchema } from "../Schemas/Schemas";
import './Login.css'
import Logo from "../../../src/Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/icon1.png"
import BK from "../../../src/Assets/Movie Tickets_ Plays_ Sports_ Events _ Cinemas near Coimbatore - BookMyShow Coimbatore_/back-ico.jpg"
import Logo2 from '../../Assets2/icon2.png'


const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };
  
  const Login = () => {
    const {
      values,
      errors,
      touched,
      isSubmitting,
      handleBlur,
      handleChange,
      handleSubmit,
    } = useFormik({
      initialValues: {
        email: "",
        PhoneNumber: "",

      },
      validationSchema: basicSchema,
      onSubmit,
    });
  
    console.log(errors);
  
    return (
      <div className="back-ico">
        {/* <img src={BK} className="movie-threater"/> */}
      
      <div className="Form-a">
        <div className="book-images">
        <img src={Logo2}  className='Book-myshow-logos'/>
        </div>
        <div className="form-box">
      <form onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor="email">Email</label>
        <input
          value={values.email}
          onChange={handleChange}
          id="email"
          type="email"
          placeholder="Enter your email"
          onBlur={handleBlur}
          className={errors.email && touched.email ? "input-error" : ""}
        />
        {errors.email && touched.email && <p className="error">{errors.email}</p>}
        <div className="phone-num">
        <label htmlFor="PhoneNumber">Phone Number</label>
        <input
          id="age"
          type="Text"
          placeholder="Enter your Phone Number"
          value={values.age}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.age && touched.age ? "input-error" : ""}
        />
        {errors.age && touched.age && <p className="error">{errors.age}</p>}
        </div>
      
        <button disabled={isSubmitting} type="submit">
          Send OTP
        </button>
      </form>
      </div>
      </div>
      </div>
    );
  };

export default Login;