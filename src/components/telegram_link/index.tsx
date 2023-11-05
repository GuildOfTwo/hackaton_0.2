import { Link } from "react-router-dom"
import Telegram_logo from './../../assets/img/telegram_logo.svg'
import { LinkTitle, TelegramImg, LinkContent, LinkWrapper } from "./styled"

const TelegramLink = () => {
  return (<LinkWrapper>
        <Link to='https://t.me/LTS11_bo'><LinkContent><TelegramImg src={Telegram_logo} /><LinkTitle>Поддержка</LinkTitle></ LinkContent></ Link></LinkWrapper>
     )
}

export default TelegramLink