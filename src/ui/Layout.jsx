import { Outlet, useNavigation} from "react-router-dom";
import Header from "./header/Header.jsx";
import CartOverview from "../features/cart/CartOverview.jsx";
import Loader from "./loader/Loader.jsx";

function Layout(){
    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading';

    return (
        <div className='grid h-screen
                    grid-rows-[auto_1fr_auto] grid-cols-1'>
            <Header/>
            {isLoading &&
                <Loader/>
            }
        <main className='overflow-y-auto px-10 bg-amber-50'>
            <div className='mx-auto h-screen max-w-5xl px-10 bg-white'>
                <Outlet/>
            </div>
        </main>

            <CartOverview/>
        </div>
    );
}
export default Layout;