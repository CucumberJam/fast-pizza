import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function SearchOrder(){
    const [query, setQuery] = useState('');
    const navigate = useNavigate();
    function handleSubmit(e){
        e.preventDefault();
        if(!query) return;
        navigate(`/order/${query}`);
        setQuery('');
    }
    return (
        <form onSubmit={handleSubmit} >
            <input value={query}
                   className='px-3 py-2 rounded-lg
                   text-stone-400 text-sm bg-yellow-50
                    w-[320px] focus:w-[360px]
                    m:w-72 m:focus:w-80
                   transition-all duration-300
                   focus:outline-none focus:ring
                   focus:ring-yellow-500 focus:ring-opacity-50
'
                   onChange={e => setQuery(e.target.value)}
                   placeholder='Search order №...'/>
        </form>
    );
}
//    w-72 focus:w-80                sm:w-50 sm:focus:w-58
//                    md:w-72 md:focus:w-80
//                    w-40 focus:w-60