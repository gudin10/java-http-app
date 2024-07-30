import { localhostUserToModel } from "../mappers/localhost-user.mapper";
import { User } from "../models/user";
/***
 * @param {Number} page
 * @returns {Promise<User>}
 */
const loadUsersByPage = async( page =1 )=>{
    const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}`
    const res = await fetch(url);

    const datos = await res.json();

    const users = datos.data.map(localhostUserToModel);
    //console.log(users);
    return users;
    
}

export {
    loadUsersByPage
}