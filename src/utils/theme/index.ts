import { useAppDispatch } from "../../hooks";

const StorageKey = 'app-theme';

const getTheme = (): string => {
  let theme = localStorage.getItem(StorageKey);

  if (!theme) {
    localStorage.setItem(StorageKey, 'default');
    theme = 'default';
  }

  return theme;
};

const handleSetTheme = (theme: string) => {
  localStorage.setItem(StorageKey, theme)
}


export { getTheme, handleSetTheme }