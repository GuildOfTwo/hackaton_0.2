export const errorHandler = (error: number) => {
  switch (error) {
    case 401:
      return 'Неверный логин или пароль';
    case 403:
      return 'Нет доступа';
    case 500:
      return 'Сервер не смог обработать запрос';
    case 404:
      return 'Не удалось найти запрошенный ресурс';
    default:
      null;
  }
};
