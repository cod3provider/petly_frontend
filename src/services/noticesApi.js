import axios from "axios";

const instance = axios.create({
    baseURL: 'https://your-pet-backend-jfrs.onrender.com/notices',
})

export const searchNoticesByCategory = async (category, page, limit) => {
    const { data } = await instance.get(`category/${category}`, {
        params: {
            page,
            limit,
        }
    });
    return data;
}

export const searchNoticesByName = async (category, query, page, limit) => {
    const { data } = await instance.get(`find/`, {
        params: {
            category,
            query,
            page,
            limit,
        }
    });
    return data;
}

export const addNoticeToFavorite = async (id) => {
    const { message } = await instance.patch(`my/favorite/${id}`, {});
    console.log(message);
    return message;
}

export const removeNoticeFromFavorite = async (id) => {
    const { message } = await instance.remove(`my/favorite/${id}`, {});
    console.log(message);
    return message;
}