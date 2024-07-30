import { renderTable } from "./presentation/render-table/render-table";
import usersStore from "./store/users-store"

/***
 * @param {HTMLDivElement}
 */
const UsersApp = async( element )=>{
    
    //element.innerHTML = 'Loading ...'
    await usersStore.loadNextPage();

    renderTable( element );
    console.log(usersStore.getUsers() );
}

export {
    UsersApp
}