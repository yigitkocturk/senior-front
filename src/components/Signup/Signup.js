import { Formik } from 'formik'
import React, { useState } from 'react'
import * as  Yup from "yup"
import "./Signup.css"


const schema = Yup.object().shape({
  name: Yup.string().required("Please enter a name"),
  surname: Yup.string().required("Please enter a surname"),
  gender: Yup.string().required().oneOf(["Male", "Female", "Other"]),
  username: Yup.string().required("Please enter a username"),
  email: Yup.string().required("Please enter a email"),
  password: Yup.string().required("Please enter a password"),
  country: Yup.string(),
  city: Yup.string()
});

function Signup(props) {

  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [gender, setGender] = useState("")
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [country, setCountry] = useState("")
  const [city, setCity] = useState("")
  const savePost = () => {
    fetch("/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          surname: surname,
          gender: gender,
          userName: userName,
          email: email,
          password: password,
          country: country,
          city: city
        }),
      })
      .then((res) => res.json())
      .catch((err) => console.log("error"))
  }

  const handleSubmit = () => {
    savePost();
    window.location.reload(false);
  }
  const handleName = (value) => {
    setName(value);
  }

  const handleSurname = (value) => {
    setSurname(value);
  }

  const handleGender = (value) => {
    setGender(value);
  }

  const handleUserName = (value) => {
    setUserName(value);
  }
  const handleEmail = (value) => {
    setEmail(value);
  }

  const handlePassword = (value) => {
    setPassword(value);
  }
  const handleCountry = (value) => {
    setCountry(value);
  }
  const handleCity = (value) => {
    setCity(value);
  }

  return (
    <>
      <Formik
        // Başlangıç değerleri

        //Yup ile form alanlarının kontrolü
        validationSchema={schema}
      //Butona tıklandığında yapılacaklar
      >
        <div className="signup">
          <div className='form'>
            <form noValidate >
              <span>SignUp</span>
              <input id='name' type="text" placeholder='name' className='input' onChange={(e) => handleName(e.target.value)} value={name} />
              <input id='surname' type="text" placeholder='surname' className='input' onChange={(e) => handleSurname(e.target.value)} value={surname} />
              <select id='gender' type="checkbox" onChange={(e) => handleGender(e.target.value)} value={gender} >
                <option value="" label="Select gender" />
                <option value="Male" label="Male" />
                <option value="Female" label="Female" />
                <option value="Other" label="Other" />
              </select>
              <input id='username' type="text" placeholder='username' className='input' onChange={(e) => handleUserName(e.target.value)} value={userName} />
              <input id='email' type="email" placeholder='email' className='input' onChange={(e) => handleEmail(e.target.value)} value={email} />
              <input id='password' type="password" placeholder='password' className='input' onChange={(e) => handlePassword(e.target.value)} value={password} />
              <input id='country' type="text" placeholder='country' className='input' onChange={(e) => handleCountry(e.target.value)} value={country} />
              <input id='city' type="text" placeholder='city' className='input' onChange={(e) => handleCity(e.target.value)} value={city} />

              <button type="submit" onClick={handleSubmit}>Submit</button>

            </form>
          </div>
        </div>


      </Formik>
    </>
  )
}

export default Signup