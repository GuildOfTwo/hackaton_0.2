export interface IUser {
    id: number,
    lastName: string,
    firstName: string,
    middleName: string,
    email: string,
    department: string,
    mentor: string,
    onbordingProgramm: string,
    startDay: Date,
}


export const USERS: IUser[] = [
    {
        id: 1,
        lastName: "Иванов",
        firstName: "Иван",
        middleName: "Иванович",
        email: "my@email.ru",
        department: "IT",
        mentor: "Влад Булоусов",
        onbordingProgramm: "It",
        startDay: new Date(2023, 10, 1),
    },
    {
        id: 2,
        lastName: "Иванов",
        firstName: "Иван",
        middleName: "Иванович",
        email: "my@email.ru",
        department: "IT",
        mentor: "Влад Булоусов",
        onbordingProgramm: "It",
        startDay: new Date(2023, 10, 3),
    },
    {
        id: 3,
        lastName: "Иванов",
        firstName: "Иван",
        middleName: "Иванович",
        email: "my@email.ru",
        department: "Project",
        mentor: "Влад Булоусов",
        onbordingProgramm: "Project",
        startDay: new Date(2023, 10, 6),
    },
    {
        id: 4,
        lastName: "Иванов",
        firstName: "Иван",
        middleName: "Иванович",
        email: "my@email.ru",
        department: "IT",
        mentor: "Влад Булоусов",
        onbordingProgramm: "It",
        startDay: new Date(2023, 9, 29),
    },
    {
        id: 5,
        lastName: "Иванов",
        firstName: "Иван",
        middleName: "Иванович",
        email: "my@email.ru",
        department: "Project",
        mentor: "Влад Булоусов",
        onbordingProgramm: "Project",
        startDay: new Date(2023, 9, 30),
    },
]