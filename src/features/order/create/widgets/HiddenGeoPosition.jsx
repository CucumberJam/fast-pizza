import {memo} from "react";

function HiddenGeoPosition({latitude, longitude}){
    return (
        <>
            <input type='hidden'
                   name='latitude'
                   value={latitude}/>
            <input type='hidden'
                   name='longitude'
                   value={longitude}/>
        </>
    );
}
export default memo(HiddenGeoPosition);