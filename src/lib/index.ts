import { ICourse } from '../utils/constants/mock/courses';
import { IOnbordingProgramm } from '../utils/constants/mock/onbordingProgramm';
import { IUser } from '../utils/constants/mock/users/index';

// Составление детального плана онбординга с учетом количества уроков и продолжительности времени каждого курса
export const createFullOnbordingPlan = (plan: number[], courses: ICourse[]) => {
  const fullPlan: ICourse[] = [];
  let fullDuration: number = 0;
  plan.map((id) => {
    courses.forEach((el) => {
        if (el.id === id) {
            fullPlan.push(el);
            fullDuration += el.courseDuration;
        } 
    } );
  });
  return {fullPlan, fullDuration};
};

// Создание профилей пользователей с полной программой онбординга и прогрессом
export const createFullUsers = (
  users: IUser[],
  courses: ICourse[],
  programms: IOnbordingProgramm
) => {
  return users.map((user: IUser) => {
      const onbordingContent = createFullOnbordingPlan(programms[user.onbordingProgramm as keyof IOnbordingProgramm], courses);

      return { ...user, onbordingContent: onbordingContent.fullPlan, onbordingDuration: onbordingContent.fullDuration };
  });
};
