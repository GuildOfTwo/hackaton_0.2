import { FC, useState } from 'react';
import { SwitchButton, Wrapper } from './styled';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setDefaultTheme, setLightTheme } from '../../store/theme';

export const ThemeToggleBar: FC = () => {
  const theme = useAppSelector((store) => store.theme.theme);
  const [checked, setChecked] = useState<boolean>(
    localStorage.getItem('app-theme') !== 'default' ? true : false
  );
  const dispatch = useAppDispatch();
  const handleSwitch = (checked: boolean) => {
    setChecked(!checked);
    checked ? dispatch(setDefaultTheme()) : dispatch(setLightTheme());
  };
  return (
    <Wrapper>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1px' }}>
        <SwitchButton
          onChange={() => handleSwitch(checked)}
          style={{ width: '20%' }}
          // checked={checked}
          defaultChecked={theme === 'default' ? true : false}
        />
        {/* <div>выберите тему</div> */}
      </div>
    </Wrapper>
  );
};
