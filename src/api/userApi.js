import axiosInstance from "./axios"


export const getFeed=async(page=1,limit=10)=>{
    try{
        const response=await axiosInstance.get(`/user/feed?page=${page}&limit=${limit}`);

        return response.data;
    }
    catch (error) {
        throw error.response?.data || error.message;
    }
}