import axios from "axios";

const api=axios.create(
    {
        baseURL: "https://localhost:7289/api",
        withCredentials:true
    }
);

api.interceptors.request.use(

 (config)=>{
        const token=localStorage.getItem("token");
        if(token)
        {
            config.headers.Authorization=`Bearer ${token}`;
        }
        return config;
    },
    (error)=>Promise.reject(error)
);

api.interceptors.response.use(
    (response)=> response,
    (error)=>{
        if(error.response?.status==401)
        {
            localStorage.removeItem("token");
            window.location.href("/login")
        }
        return error;
    }
);


export const LoginUser =(username,password)=>
 api.get("/user/login",{params:{username,password}})


export const RegisterUser=(user)=>{
    api.post("/user/register",user)
}

export const ShowShowroom=()=>{
   return api.get("/showroom/Indexshowrromcycles")
}

