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