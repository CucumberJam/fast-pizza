import {getMenu} from "../../services/apiRestaurant.js";
import {useLoaderData} from "react-router-dom";
import MenuItem from "./MenuItem.jsx";

function Menu() {
  const menu = useLoaderData();

  return (
      <ul className='divide-y divide-stone-200 pb-20 gap-5
      px-3 md:grid md:grid-cols-2 md:gap-8'>
        {menu.map(pizza =>
            <MenuItem key={pizza.id} pizza={pizza}/>)}
      </ul>
  );
}

// render as you fetch strategy:
export async function loader(){
  return await getMenu();
}

export default Menu;
