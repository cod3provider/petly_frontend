import axios from "axios";

const instance = axios.create({
    baseURL: 'https://your-pet-backend-jfrs.onrender.com/notices',
})

export const searchNoticesByCategory = async (category) => {
    const { data } = await instance.get(`category/${category}`, {});
    return data;
}

export const searchNoticesByName = async (category, query) => {
    const { data } = await instance.get(`find/`, {
        params: {
            category,
            query,
        }
    });
    return data;
}