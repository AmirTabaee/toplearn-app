import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const Register = () => {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = event => {
        event.preventDefault();

        const user = {
            fullname,
            email,
            password
        }
        console.log(user);

        const reset= () => {
            setFullname("");
            setEmail("");
            setPassword("");
        }

        axios.post("https://toplearnapi.ghorbany.dev/api/register" , JSON.stringify(user) , {
            headers:{
                "Content-Type" : "application/json"
            }
        }).then(({data , status}) => {
            console.log(data);
            if(status === 201){
                toast.success("شخص با موفقیت اضافه شد" , {
                    position:"top-right",
                    closeOnClick:true
                })
            }
        }).catch(ex => {
           toast.error("مشکلی پیش امده" , {
               position:"bottom-right",
               closeOnClick:true
           })
        }) 


    }

    return (
        <main class="client-page">
            <div class="container-content">
                <header>
                    <h2> عضویت در سایت </h2>
                </header>

                <div class="form-layer">
                    <form onSubmit={handleSubmit} action="" method="">
                        <div class="input-group">
                            <span class="input-group-addon" id="username">
                                <i class="zmdi zmdi-account"></i>
                            </span>
                            <input
                                type="text"
                                class="form-control"
                                placeholder="نام و نام خانوادگی"
                                aria-describedby="username"
                                value={fullname}
                                onChange={e => setFullname(e.target.value)}
                            />
                        </div>

                        <div class="input-group">
                            <span class="input-group-addon" id="email-address">
                                <i class="zmdi zmdi-email"></i>
                            </span>
                            <input
                                type="text"
                                class="form-control"
                                placeholder="ایمیل"
                                aria-describedby="email-address"
                                value={email}
                                onChange={e => {setEmail(e.target.value)}}
                            />
                        </div>

                        <div class="input-group">
                            <span class="input-group-addon" id="password">
                                <i class="zmdi zmdi-lock"></i>
                            </span>
                            <input
                                type="password"
                                class="form-control"
                                placeholder="رمز عبور "
                                aria-describedby="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>

                        <div class="accept-rules">
                            <label>
                                <input type="checkbox" name="" /> قوانین و
                                مقررات سایت را میپذیرم{" "}
                            </label>
                        </div>

                        <div class="link">
                            <a href="">
                                {" "}
                                <i class="zmdi zmdi-assignment"></i> قوانین و
                                مقررات سایت !
                            </a>
                            <a href="">
                                {" "}
                                <i class="zmdi zmdi-account"></i> ورود به سایت{" "}
                            </a>
                        </div>

                        <button class="btn btn-success"> عضویت در سایت </button>
                    </form>
                </div>
            </div>
            <ToastContainer/>
        </main>
    );
};

export default Register;
