import axios from "axios";

const instance = axios.create({
    baseURL: 'https://your-pet-backend-jfrs.onrender.com/notices',
})

export const searchNoticesByCategory = async (category, page) => {
    const { data } = await instance.get(`category/${category}`, {
        params: {
            page,
        }
    });
    return data;
}

export const searchNoticesByName = async (category, query, page) => {
    const { data } = await instance.get(`find/`, {
        params: {
            category,
            query,
            page,
        }
    });
    return data;
}