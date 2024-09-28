import React, { useState } from 'react'
import './Register.css'
import { TextField,Button,Stack,MenuItem,Radio,RadioGroup,FormLabel,FormControlLabel,InputAdornment } from '@mui/material'

const Register = () => {
    
    const course = [
        {
            value:'biology',
            label: 'Biology',
        },
        {
            value:'computer science',
            label: 'Computer Science',
        },
        {
            value:'commerce',
            label: 'Commerce',
        },
        {
            value:'humanities',
            label: 'Humanities',
        },
      ];

    const [name,setName] =useState(0)
    const [address,setAddress] =useState(0)
    const [mobile,setMobile] =useState(0)
    const [email,setEmail] =useState(0)
    const [date,setDate] =useState(0)
    const [genders,setGender] =useState(0)
    const [courses,setCourses] =useState(0)

    const [isNameInvalid,setIsNameInvalid] = useState(false)
    const [isAddressInvalid,setIsAddressInvalid] = useState(false)
    const [isMobileInvalid,setIsMobileInvalid] = useState(false)
    const [isEmailInvalid,setIsEmailInvalid] = useState(false)
    const [isDateInvalid,setIsDateInvalid] = useState(false)
    const [isGendersInvalid,setIsGendersInvalid] = useState(false)
    const [isCoursesInvalid,setIsCoursesInvalid] = useState(false)

    const userInputValidation=(inputTag)=>{
        const {name,value}=inputTag
        if(name=='Name'){
            setName(value)
            !!value?setIsNameInvalid(false):setIsNameInvalid(true)
        }
        else if(name=='Address'){
            setAddress(value)
            !!value?setIsAddressInvalid(false):setIsAddressInvalid(true)
        }
        else if(name=='Mobile'){
            setMobile(value)
            !!value.match(/^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/)?setIsMobileInvalid(false):setIsMobileInvalid(true)
        }     
        else if(name=='Email'){
            setEmail(value)
            !!value.match( /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[com]{2,4}$/)?setIsEmailInvalid(false):setIsEmailInvalid(true)
        }  
        else if(name=='Gender'){
            setGender(value)
            !!value?setIsGendersInvalid(false):setIsGendersInvalid(true)
        }
        else if(name=='Date'){
            setDate(value)
            !!value.match(/^(0[1-9]|[12][0-9]|3[01])([\/.-])(0[1-9]|1[012])\2(19|20)\d{2}$/)?setIsDateInvalid(false):setIsDateInvalid(true)
        } 
        else if(name=='Courses'){
            setCourses(value)
            !!value?setIsCoursesInvalid(false):setIsCoursesInvalid(true)
        }
    }

    const getRegisterDetails=()=>{
        if(name && address && mobile && email && date && genders && courses){
            alert(`Data Stored Successfully!!!

            Name of the student : ${name}\n
            Address : ${address}\n
            Mobile Number : ${mobile}\n
            Email id : ${email}\n
            Date of Birth : ${date}\n
            Gender : ${genders}\n
            Course : ${courses}`)
            resetAllDetails()
        }
        else{
            alert('Please fill the form')
        }
    }

    const resetAllDetails=()=>{
        setName(0)
        setAddress(0)
        setMobile(0)
        setEmail(0)
        setDate(0)
        setGender(0)
        setCourses(0)
        setIsNameInvalid(false)
        setIsAddressInvalid(false)
        setIsMobileInvalid(false)
        setIsEmailInvalid(false)
        setIsDateInvalid(false)  
    }
    
  return (
    <div className='container'>
        <h2>Higher Secondary Admission Form</h2>
        <form>
            {/* name */}
            <TextField value={name||""} onChange={e=>userInputValidation(e.target)} className='mb-3' name='Name' id="standard-Name" label="Name of the Student" variant="outlined" />
                {
                    isNameInvalid && <div className="text-danger fw-bolder mb-3">*Enter your name</div>
                }
            {/* address */}
            <TextField 
            value={address||""}
            onChange={e=>userInputValidation(e.target)} 
            className='mb-3'
            name='Address'
            id="standard-Address"
            label="Address"
            multiline
            rows={3}
            variant="outlined"
            />
                {
                    isAddressInvalid && <div className="text-danger fw-bolder mb-3">*Enter your address</div>
                }
            {/* date of birth */}
            <TextField value={date||""} onChange={e=>userInputValidation(e.target)}  className='mb-3' name='Date' id="standard-Date" label="Date of Birth" variant="outlined" />
                {
                    isDateInvalid && <div className="text-danger fw-bolder mb-3">*Enter a valid date of birth</div>
                }
            {/* mobile number */}
            <TextField value={mobile||""} onChange={e=>userInputValidation(e.target)}  className='mb-3' name='Mobile' id="standard-Mobile" label="Mobile Number" variant="outlined" slotProps={{
            input: {
              startAdornment: <InputAdornment position="start">+91</InputAdornment>,
            },
          }}/>
            {
                isMobileInvalid && <div className='text-danger fw-bolder mb-3'>*Enter a valid mobile number</div>
            }
            {/* email */}
            <TextField value={email||""} onChange={e=>userInputValidation(e.target)}  className='mb-3' name='Email' id="standard-Email" label='E-mail' variant="outlined" />
                {
                    isEmailInvalid && <div className='text-danger fw-bolder mb-3'>*Enter a valid email id</div>
                }
            {/* gender */}
            <div className='border border-secondary rounded mb-3 p-2'>
                <FormLabel id="Standard-gender">Choose your Gender</FormLabel>
                <RadioGroup
                    value={genders||""}
                    onChange={e=>userInputValidation(e.target)} 
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue=""
                    name="Gender"
                >
                    <div className='d-flex mt-2'>
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                    </div>
                </RadioGroup>
            </div>
            {/* courses */}
            <TextField
            value={courses||""}
            onChange={e=>userInputValidation(e.target)} 
            className='mb-3'
            name='Courses'
            id="standard-gender"
            select
            label="Choose your Course"
            defaultValue=""
            variant="outlined"
            >
            {course.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                {option.label}
                </MenuItem>
            ))}
            </TextField>
            {/* button */}
            <Stack direction="row" justifyContent='center' spacing={2}>
                <Button onClick={getRegisterDetails} disabled={isNameInvalid||isAddressInvalid||isMobileInvalid||isEmailInvalid||isDateInvalid||isGendersInvalid||isCoursesInvalid} variant="contained" color="success">Register</Button>
                <Button onClick={resetAllDetails} variant="contained" color="error">Cancel</Button>
            </Stack>
        </form>
    </div>
  )
}

export default Register