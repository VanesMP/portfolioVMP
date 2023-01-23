import axios from 'axios';

export const getLinkItems = async() => {
    try {
        const response = await axios.get('linkImages.json');
        return response.data.itemData;
    } catch (error) {
        console.log(error);
        return error;
    }
};