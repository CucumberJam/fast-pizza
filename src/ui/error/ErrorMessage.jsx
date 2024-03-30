export default function ErrorMessage({children}){

    return (
        <p className='w-full bg-red-100 text-xs
                      sm:mt-0 mt-3 text-red-700 p-2 rounded-lg '>
            {children}
        </p>
    );
}