export default function InputItem({labelName, inputName, inputType, defaultName = '', disabled = false, children}){

    return (
        <div className='mb-5 flex gap-2 flex-col
                        sm:flex-row sm:items-center'>
            <label className='sm:basis-40'>{labelName}</label>
            <input className='input'
                   defaultValue={defaultName}
                   type={inputType}
                   name={inputName}
                   disabled={disabled}
                   required />
            {children}
        </div>
    );
}
