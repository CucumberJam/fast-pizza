import {Link} from "react-router-dom";
import SearchOrder from "../../features/order/SearchOrder.jsx";
import Username from "../../features/user/Username.jsx";
import Basket from './Basket.jsx'
import Phone from "./Phone.jsx";

export default function Header(){
    const headerStyle = 'min-h-[61px] sm:px-6 bg-yellow-500 ' +
        'uppercase px-4 py-3 ' +
        'border-b border-stone-300 ' +
        'flex flex-col justify-between gap-4' +
        'md:items-center md:flex-row';
    const logoLinkStyle = 'tracking-[5px] flex items-center justify-center' +
        'md:justify-between gap-3 grow mb-2 md:mb-0';

    const logoStyle = 'drop-shadow-lg max-h-14 rounded-full';


    return (
        <header className={headerStyle}>
            <Link to='/' className={logoLinkStyle}>
                <img className={logoStyle} src='/logo.png' alt=''/>
                Fast Pizza Restaurant
            </Link>

            <div className='items-center justify-between flex'>
                <SearchOrder/>

                <div className='flex justify-between items-center
                            gap-3 mx-5'>
                    <Phone/>
                    <Link to='/cart'>
                        <Basket/>
                    </Link>
                </div>
                <Username/>
            </div>
        </header>
    );
}