import Button from "../../../../ui/buttons/Button.jsx";
import {useFetcher} from "react-router-dom";
import {updateOrder} from "../../../../services/apiRestaurant.js";

export default function UpdateOrder({order}){
    const fetcher = useFetcher();
    return (
        <fetcher.Form  method='PATCH' className='text-right'>
            <Button >Make priority</Button>
        </fetcher.Form>
    );
}
export async function action({request, params}){
    const data = {priority: true};
    await updateOrder(params.id, data);
    return null;
}