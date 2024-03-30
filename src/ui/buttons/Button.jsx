import {Link} from "react-router-dom";

export default function Button({disabled, children, to = null, type = 'primary', onClick = null}){

    const base = 'bg-yellow-400 ' +
        'uppercase font-semibold text-sm ' +
        'text-stone-800 inline-block ' +
        'tracking-wider ' +
        'hover:bg-yellow-300 duration-300 transition-all ' +
        'focus:bg-yellow-300 focus:outline-none ' +
        'focus:ring focus:ring-yellow-300 focus:ring-offset-1 ' +
        ' active:translate-y-1 active:shadow-2xl' +
        ' disabled:cursor-not-allowed';


    const styles = {
        primary: base + ' px-4 md:px-6 py-2 md:py-3 text-base rounded-lg ',
        small: base + ' px-3 py-2 sm:px-4 md:py-2.5 text-sm rounded-lg',
        secondary: 'bg-transparent border-2 border-stone-300' +
            'uppercase font-semibold text-sm ' +
            'text-stone-400 inline-block uppercase ' +
            'tracking-wider rounded-lg ' +
            ' active:translate-y-1 active:shadow-2xl' +
            ' hover:bg-stone-300 duration-300 transition-all' +
            ' hover:text-stone-800' +
            ' focus:bg-stone-300 focus:outline-none ' +
            'focus:ring focus:text-stone-800 focus:ring-stone-200 focus:ring-offset-1 ' +
            'disabled:cursor-not-allowed px-4 md:px-6 py-2.5 md:py-3 text-base',
        round: base + ' px-2.5 py-1 text-sm rounded-full '
    }
    if(onClick){
        return (
            <button onClick={onClick} disabled={disabled}
                    className={styles[type]}>
                {children}
            </button>
        );
    }

    if(to){
        return (
            <Link to={to} className={styles[type]}>
                {children}
            </Link>
        );
    }

    return (
        <button disabled={disabled}
                className={styles[type]}>
            {children}
        </button>
    );
}