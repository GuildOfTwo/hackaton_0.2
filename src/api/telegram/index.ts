// import { TELEGRAM_BOT_SEND_MESSAGE_URL } from "../../utils/constants/tokens";

// //TODO: передавать сообщение от юзера и его ID как ID чата
// const message = 'Это сообщение с веб-сайта!';
// const chatId = '1';

// export const TelegramApi = () => {

//     fetch(TELEGRAM_BOT_SEND_MESSAGE_URL, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             chat_id: chatId,
//             text: message,
//         }),
//     })
//         .then(response => response.json())
//         .then(data => {
//             console.log('Сообщение успешно отправлено:', data);
//         })
//         .catch(error => {
//             console.error('Ошибка при отправке сообщения:', error);
//         });
// }

export {};
