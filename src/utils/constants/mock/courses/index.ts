export interface ICourse {
    id: number,
    courseName: string,
    categoryId: number,
    courseDuration: number,
    lessons: number,
    category: {
        id: number,
        name: string
    },
}

export const COURSES: ICourse[] = [
    {
        id: 1,
        courseName: "Курс 1",
        categoryId: 1,
        courseDuration: 1,
        lessons: 5,
        category: {
            id: 1,
            name: "IT",
        }
    },
    {
        id: 2,
        courseName: "Курс 2",
        categoryId: 1,
        courseDuration: 2,
        lessons: 3,
        category: {
            id: 1,
            name: "Project",
        }
    },
    {
        id: 2,
        courseName: "Курс 3",
        categoryId: 1,
        courseDuration: 2,
        lessons: 3,
        category: {
            id: 1,
            name: "IT",
        }
    },
    {
        id: 4,
        courseName: "Курс 4",
        categoryId: 1,
        courseDuration: 4,
        lessons: 5,
        category: {
            id: 1,
            name: "Project",
        }
    },
    {
        id: 5,
        courseName: "Курс 5",
        categoryId: 1,
        courseDuration: 2,
        lessons: 5,
        category: {
            id: 1,
            name: "IT",
        }
    },
    {
        id: 6,
        courseName: "Курс 6",
        categoryId: 1,
        courseDuration: 3,
        lessons: 5,
        category: {
            id: 1,
            name: "Project",
        }
    },
    {
        id: 7,
        courseName: "Курс 7",
        categoryId: 1,
        courseDuration: 2,
        lessons: 3,
        category: {
            id: 1,
            name: "IT",
        }
    },
    {
        id: 8,
        courseName: "Курс 8",
        categoryId: 1,
        courseDuration: 3,
        lessons: 5,
        category: {
            id: 1,
            name: "Project",
        }
    },
]