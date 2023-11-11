# Onboardy

**Onboardy** - это сервис, который автоматизирует и упрощает процесс онбординга и адаптации новых сотрудников. Проект выполнен в рамках хакатона [Лидеры цифровой трансформации] Краснодарский край(https://i.moscow/lct/krasnodar). 

Рабочий прототип сервиса доступен по [ссылке](https://onboardy.top61.ru).

<img width="1494" alt="Screenshot 2023-11-11 at 16 03 00" src="https://github.com/GuildOfTwo/hackaton_0.2/assets/96244317/16278e21-f135-4e0c-b3ce-ea51a80124b2">

## Содержание

- [Актуальность](#actuality)
- [Технологии](#technologies)
- [Структура проекта](#structure)
  - [Frontend](#frontend)
  - [Backend](#backend)
  - [Telegramm бот](#telegram-bot)
- [Тестирование прототипа](#testing-proto)
- [Начало работы](#start-work)
- [Команда проекта](#team)
- [Дополнительная информация](#addinfo)

## Актуальность <a name="actuality"></a>

Проблема онбординга в России сейчас актуальная как никогда. В стране отмечается нехватка рабочий силы (об этом свидетельствуют многочисленные исследования). В этих условиях эффективное введение нового сотрудника в рабочий процесс, его адаптация и обучение влияет не только на прохождение сотрудником испытательного срока, но и эффективною работу сотрудника в последующем. Работодатель не может себе позволить не контролировать процесс онбординга, так как от это зависит эффективность работы его бизнеса. Сервис **Onboardy** - это российский продукт, который призван решить эту важную для бизнеса задачу.

## Технологии <a name="technologies"></a>

**Frontend** : [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), [StyledComponents](https://styled-components.com/), [Redux Toolkit](https://redux-toolkit.js.org/), [Antd Design](https://ant.design/), [Ant Design Charts](https://ant-design-charts.antgroup.com/).

**Backend** : [Node](https://nodejs.org/en/), [Express](https://expressjs.com/), [Prisma ORM](https://www.prisma.io/), [PostgreSQL](https://www.postgresql.org/), [Winston](https://www.npmjs.com/package/winston), [Loki](https://grafana.com/oss/loki/).

**Telegram бот** : [Node](https://nodejs.org/en/), [Telegraph](https://github.com/telegraf/telegraf).

## Структура проекта <a name="structure"></a>

Проект состоит из трех частей: frontend, backend и telegram бот. Ниже представлена информация по каждой из частей.

### Frontend <a name="frontend"></a>

**Frontend** представляет собой пользовательский интерфейс, через который происходит взаимодействие с сервисом. В зависимости от роли пользователя ему будет доступны следующие возможности:

    Сотрудник

    HR-специалист

### Backend <a name="backend"></a>

Во время разработки backend части приложения особое внимание было уделено проработке структуры данных. Диаграмма таблиц реляционной СУБД представлена ниже.

<img src="https://github.com/GuildOfTwo/hackaton_0.2/assets/96244317/7ab4daf6-0160-48ce-8ffe-688af3679947" alt="Диаграмма таблиц реляционной СУБД" width="200" height="100%">

Детально ознакомиться с особеностями работы и возможностями backend части вы можете по [ссылке](https://github.com/GuildOfTwo/hackaton_0.2_backend).

### Telegram бот <a name="telegram-bot"></a>

Телеграм бот представляет собой микросервис, основная задача которого это обработка входящих сообщений от пользователей сервиса и оказания им первоначальной помощи в процессе онбординга. В данный момент главная функция - это реализация коммуникации между участниками. В дальнейшем планируется расширить функционал в соответствие с потребностями пользователей.

## Тестирование прототипа <a name="testing-proto"></a>

Прототип сервиса **Onboardy** был протестирован фокус-группой (ввиду сокращенных сроков полномасштабный Custdev провести не удалось). В процессе тестирования мы получили несколько рекомендаций и пожеланий по работе с сервисом, которые внедрили в процессе разработке. Часть пожеланий записали в бэклог проекта для реализации в будущем. Ниже приводимм несколько отзывов участников фокус группы.

**Отзывы**

> "Отличный сервис, понравилась аналитика для HR, собранная в одном месте. Удобно, что есть общая таблица, из которой можно получить доступ к редактированию всех сотрудников. Но хотелось бы иметь возможность составлять собственный дашборд из графиков которые нужны только мне."
>
> _— Алена, HR в средней сервисной компании_

> "Процесс обучения сотрудников архи-важный, сложный и дорогостоящий. Не все компании могут его себе позволить, но контролировать этот процесс очень важно. В нашей компании мне приходится контролировать это. С вашим сервисом обучать сотрудников и контролировать эффективность удобно и просто."
>
> _— Александр, собственник и директор интернет магазина_

> "Обучение продавцов - это вечная головная боль... Непрекращающаяся. Перед тем как взять продавца к себе в команду, мне важно отслеживать его прогресс обучения, так как продажи и деньги мои и компании. В **Onboardy** это делать удобно. Особенно понравилось, что я могу выступать наставником в процессе обучения. В будущем хотелось бы увидеть больше взаимодействия наставника и обучающегося, например получать уведомления о каждом этапе обучающегося, ставить ему задания"
>
> _— Андрей, руководитель отдела продаж образовательных услуг_

## Начало работы <a name="start-work"></a>

Для запуска **frontend** части проекта, пожалуйста, выполните следующие действия:

1. Склонировать проект на ваш компьютер с Gitlab с помощью команды:

```
git clone https://github.com/GuildOfTwo/hackaton_0.2.git
```

2. Установить зависимости:

```
npm i
```

3. Включить прекоммиты для хаски:

```
npm run prepare
```

4. Запустить проект:

```
npm run dev
```

Для начала работы с **backend** частью сервиса и **telegram ботом** перейдите, пожалуйста по следующим ссылкам и ознакомьтесь с инструкциями:

- [Backend](https://github.com/GuildOfTwo/hackaton_0.2_backend)
- [Telegram bot](https://github.com/GuildOfTwo/hackaton_2.0_bot)

## Команда проекта <a name="team"></a>

[**Влад Булоусов**](https://github.com/Valzet) - Тимлид проекта, frontend разработчик

[**Кирилл Чугунов**](https://github.com/KirillChugunov) - Frontend разработчик

[**Александр Березин**](https://github.com/TaPaHTauKO) - Frontend разработчик

[**Руслан Газиев**](https://github.com/gazievri) - Frontend разработчик

[**Андрей Сергеев**](https://github.com/Pir0manT) - Backend разработчик

## Дополнительная информация <a name="addinfo"></a>

Рабочий прототип проекта размещен [здесь](https://onboardy.top61.ru).

Ссылки на репозитории:

- [Frontend](https://github.com/GuildOfTwo/hackaton_0.2)
- [Backend](https://github.com/GuildOfTwo/hackaton_0.2_backend)
- [Telegram bot](https://github.com/GuildOfTwo/hackaton_2.0_bot)
