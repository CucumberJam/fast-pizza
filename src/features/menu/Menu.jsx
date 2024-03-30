import {getMenu} from "../../services/apiRestaurant.js";
import {useLoaderData} from "react-router-dom";
import MenuItem from "./MenuItem.jsx";
import {useDispatch, useSelector} from "react-redux";
import {fetchMenu} from "./menuSlice.js";
import {useEffect} from "react";

function Menu() {
    /*const menu = useLoaderData();*/
    const dispatch = useDispatch();
    const {pizzas: menu, status, error} = useSelector(store => store.menu);

    useEffect(()=> {
        if(menu.length === 0) dispatch(fetchMenu());
    }, []);

    return (
        <>
            {status === 'loading' || menu.length === 0 && <p>Loading...</p>}
            {status === 'idle'&& menu.length > 0 && (
                <ul className='divide-y divide-stone-200 pb-20 gap-5
        px-3 md:grid md:grid-cols-2 md:gap-8'>
                    {menu.map(pizza =>
                        <MenuItem key={pizza.id} pizza={pizza}/>)}
                </ul>
            )}
            {status === 'error' && <p>{error}</p>}
        </>
    );
}

// render as you fetch strategy:
export async function loader(){
    return await getMenu();
}

export default Menu;
