import emailjs from '@emailjs/browser';
import {SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY} from "../services/email.js";
export default async function sendOrder(templateParams){
    emailjs.init(PUBLIC_KEY);

    emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams)
        .then( response => {
            console.log('order/offered');
        }).catch(error => {
        console.log('order/rejected ' + error);
    });
}