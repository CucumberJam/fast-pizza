import {useSelector} from "react-redux";

export default function Username(){
    const userName = useSelector((store) => store.user.name);

    if(!userName) return null;

    return (
        <div className='md:block hidden text-sm font-semibold'>
            {userName}
        </div>
    );
}