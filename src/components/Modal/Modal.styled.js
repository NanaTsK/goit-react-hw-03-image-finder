import styled from 'styled-components';

export const ModalOverlay = {
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  zIndex: '1200',
};

export const ModalWindow = {
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  zIndex: '1200',

  '& img': {
    width: '100%',
    height: '100%',
  },
};

// export const ModalStyled = {
//   overlay: {
//     width: '100%',
//     height: '100%',
//     backgroundColor: 'rgba(0, 0, 0, 0.8)',
//     zIndex: '100',
//   },
//   content: {
//     top: '50%',
//     left: '50%',
//     right: '0',
//     bottom: '0',
//     transform: 'translate(-50%, -50%)',
//     background: 'transparent',
//     overflow: 'hidden',
//     padding: 0,
//     border: 0,
//     maxWidth: 'calc(100% - 48px)',
//     maxHeight: 'calc(100% - 24px)',

//   },
// };

// export const ModalBoxContent = styled('div')({
//   width: '100%',
//   height: '100%',

//   '& img': {
//     width: '100%',
//     height: '100%',
//   },
// });
// .Overlay {
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: rgba(0, 0, 0, 0.8);
//   z-index: 1200;
// }

// .Modal {
//   max-width: calc(100vw - 48px);
//   max-height: calc(100vh - 24px);
// }
