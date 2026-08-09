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

export const getConnections=async()=>{
    try{
        const response=await axiosInstance.get("/user/connections");
        return response.data;

    }catch (error) {
        throw error.response?.data || error.message;
    }
}

export const getConnectionRequests=async()=>{
    try{
        const response=await axiosInstance.get("user/requests/received");
        console.log("getConnection request ka data:",response?.data?.data);
        return response?.data?.data;

    }catch (error) {
        throw error.response?.data || error.message;
    }
}