import { useAppDispatch, useAppSelector } from '../../hooks';
import { closeModalWindow } from '../../store/modal';
import { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface IModalProps {
  isCanceling?: boolean;
  setIsCanceling?: (arg0: boolean) => void;
  setIsEditing?: (arg0: boolean) => void;
}
export const Modal: FC<IModalProps> = () => {
  const modal = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();

  // const stopPropagation = (e: Event) => {
  //   e.stopPropagation();
  // };
  const location = useLocation();
  useEffect(() => {
    dispatch(closeModalWindow());
  }, [location]);

  if (modal.isOpen) {
    return (
      <>
        {modal.isOpen ? (
          <div
            style={{
              position: 'fixed',
              top: '0',
              left: '0',
              width: '100vw',
              height: '100vh',
              backgroundColor: 'rgb(0, 32, 51, .05)',
              overflow: 'hidden',
              zIndex: '800',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            // onClick={(e) => {
            //   dispatch(closeModalWindow());
            // }}
          >
            {modal.type === 'any type name' ? (
              // компонент внутренностей
              <></>
            ) : (
              ''
            )}
          </div>
        ) : (
          ''
        )}
      </>
    );
  } else return null;
};
