import { FC, useState } from 'react';
import { SwitchButton, Wrapper } from './styled';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setDarkTheme, setDefaultTheme } from '../../store/theme';

export const ThemeToggleBar: FC = () => {
  const theme = useAppSelector((store) => store.theme.theme);
  console.log(theme);
  const [checked, setChecked] = useState<boolean>(
    localStorage.getItem('app-theme') !== 'dark' ? true : false
  );
  const dispatch = useAppDispatch();
  const handleSwitch = (checked: boolean) => {
    setChecked(!checked);
    checked ? dispatch(setDarkTheme()) : dispatch(setDefaultTheme());
  };
  return (
    <Wrapper>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1px' }}>
        <SwitchButton
          onChange={() => handleSwitch(checked)}
          style={{ width: '20%' }}
          // checked={checked}
          defaultChecked={theme === 'dark' ? true : false}
        />
        {/* <div>выберите тему</div> */}
      </div>
    </Wrapper>
  );
};
