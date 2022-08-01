import axios from "axios";

export const getProducts= async () => {
    let response = await axios.get('https://fakestoreapi.com/products/3');
    return response.data;
}

