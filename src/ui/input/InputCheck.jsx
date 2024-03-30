import {memo} from "react";

function InputCheck({value, onChangePriority, labelName, inputName, idLabel}){

    const className = 'w-5 h-5 accent-yellow-400 ' +
        'focus:outline-none focus:ring ' +
        'focus:ring-yellow-400 focus:ring-offset-yellow-1';

    return (
        <div className='mb-12 flex items-center gap-3'>
            <input className={className}
                   type="checkbox"
                   name={inputName}
                   id={idLabel}
                   value={value}
                   onChange={(e) => onChangePriority(e.target.checked)}
            />
            <label className='font-medium'
                htmlFor={idLabel}>
                {labelName}
            </label>
        </div>
    );
}
export default memo(InputCheck);