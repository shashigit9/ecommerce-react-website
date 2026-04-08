import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { AuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

export default function Auth() {
    const [mode, setMode] = useState('signup')
    const [error,setError]=useState(null)
    const navigate=useNavigate()
    const {signUp,user,logout,login}=useContext(AuthContext)
    const {
        register,
        handleSubmit,
        formState:{errors}
    }=useForm()

     const onSubmit=(data)=>{
        setError(null)
        let result;
        if(mode==='signup') {
           result= signUp(data.email,data.password)   
        }else{
            result=login(data.email,data.password)
        } 

        if(result.success){
            navigate("/")
        }else{
            setError(result.error)
        }
        console.log(result) 
    }
    return (
        <div className="page">
            <div className="container">
                <div className="auth-container">
                    {user && <p>User logged in:{user.email} </p> }
                    <button onClick={()=>logout()}>Logout</button>
                    <h1 className="page-title">{mode === 'signup' ? "SignUp" : "Login"}</h1>
                    <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>

                        {error && <div className="error-message">{error}</div> }
                        <div className="form-group">
                            <label className="form-label" htmlFor="email" >Email</label>
                            <input className="form-input" type="email" id="email" {...register('email',{required:'Email is requried'})}/>
                        </div>
                            {errors.email && <p style={{color:'red'}}>{errors.email.message}</p> }
                        <div className="form-group">
                            <label className="form-label" htmlFor="password">Password</label>
                            <input className="form-input" type="password" id="password"  {...register('password',{required:'Password is requried',
                                minLength:{
                                    value:6,
                                    message:'Password must be at least 6 characters',
                                },
                                maxLength:{
                                    value:12,
                                    message:'Password must be at less than 12 characters',
                                }
                            }
                            )}/>
                        </div>
                        {errors.password && <p style={{color:'red'}}>{errors.password.message}</p> }
                        <button type="submit" className="btn btn-primary" >
                            {mode === 'signup' ? "SignUp" : "Login"}</button>
                    </form>
                    <div className="auth-switch">
                        {mode === 'signup' ? (<p>Already have an account? <span className="auth-link" onClick={()=>setMode("login")} >Login</span></p>) :
                            (<p>{' '} Don't have an account?{" "} <span className="auth-link" >Sign Up</span></p>)}


                    </div>
                    
                </div>
            </div>
        </div>
    )
}