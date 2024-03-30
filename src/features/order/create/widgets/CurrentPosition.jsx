import {memo} from "react";
import Button from "../../../../ui/buttons/Button.jsx";

function  CurrentPosition({isLoading, onCurrAddress}){
    return (
        <div className='flex justify-end'>
            <Button type='small'
                    onClick={onCurrAddress}
                    disabled={isLoading}>

                <div className='relative flex items-center justify-center'>
                    {!isLoading ? 'Get your current position':
                        (<>
                            <svg className='absolute left-[-10px] animate-spin h-5 w-5 mr-3 bg-transparent'  width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.1"  d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="grey"/>
                                <path opacity="0.5" d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z" fill="#999"/>
                            </svg>
                            <span className='pl-4'>Loading your address</span>
                        </>)}
                </div>
            </Button>
        </div>
    );

}

export default memo(CurrentPosition);