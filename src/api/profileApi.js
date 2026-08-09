import axiosInstance from "./axios";

export const getUser=async()=>{
    try {
        const response = await axiosInstance.get("/profile/viewProfile");
        return response.data;
    }
    catch (error) {
        throw error.response?.data || error.message;
    }
}

export const editProfile=async(updateData)=>{
    try{
        const response=await axiosInstance.patch("/profile/editProfile",updateData);
        // console.log("edit profile api data :",response.data);
        return response.data;
    }
    catch (error) {
        throw error.response?.data || error.message;
    }
}

export const getUserProfile=async(userId)=>{
    try{
        const response=await axiosInstance.get(`/profile/${userId}`);
        return response.data;
    }
    catch (error) {
        throw error.response?.data || error.message;
    }
}
