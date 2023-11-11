// Удаляю пользователей hr
export const excludeHr = (users) => {
  return users.filter((user) => !user.accessRoles.includes('HR'));
};

export const countProgress = (users) => {
  return users.map((user) => {
    // Считаю количество завершенных курсов
    let courseDone = 0;
    user.UserCourses.forEach((course) => {
      if (course.done) courseDone += 1;
    });
    // Считаю процент завершения
    let percentage = 0;
    if (user.UserCourses.length !== 0) {
      percentage = courseDone / user.UserCourses.length;
    }

    return {
      ...user,
      progress: `${courseDone} из ${user.UserCourses.length}`,
      percentage: percentage,
    };
  });
};

export const formatUsersData = (users) => {
  const formatUsers = countProgress(users);
  return excludeHr(formatUsers);
};
