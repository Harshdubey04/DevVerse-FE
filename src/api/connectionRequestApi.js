import axiosInstance from "./axios";

export const acceptConnectionRequest = async (requestId) => {
    try {
        const response = await axiosInstance.patch(
            `/request/review/accepted/${requestId}`
        );

        return response.data;
    }

    catch (error) {
        throw error.response?.data || error.message;
    }
};

export const rejectConnectionRequest = async (requestId) => {
    try {
        const response = await axiosInstance.patch(
            `/request/review/rejected/${requestId}`
        );

        return response.data;
    }
    catch (error) {
        throw error.response?.data || error.message;
    }
};