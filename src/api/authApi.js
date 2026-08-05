import axiosInstance from "./axios";

export const loginUser = async (credentials) => {
    try {
        const response = await axiosInstance.post("/login", credentials);
        return response.data;
    }
    catch (error) {
        throw error.response?.data || error.message;
    }

};

export const signupUser=async(credentials)=>{
    try{
        const response=await axiosInstance.post("/signup",credentials);
        return response.data;
    }
    catch(error){
        throw error.response?.data || error.message;
    }
} 