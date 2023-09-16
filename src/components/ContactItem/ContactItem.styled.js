import styled from 'styled-components';

const transition = '250ms cubic-bezier(0.4, 0, 0.2, 1)';

export const Contact = styled('li')({
  display: 'flex',
  flexWrap: 'wrap',
  minHeight: '36px',
  alignItems: 'center',
  backgroundColor: 'rgba(104, 133, 176, 0.4)',
  boxShadow: '0px 0px 1px 1px rgba(0, 0, 0, 0.2)',
  borderRadius: '10px',
  gap: '10px',
  marginTop: '6px',
  paddingLeft: '8px',
  paddingRight: '8px',

  transition: `color ${transition}, box-shadow ${transition}`,

  '&:hover, &:focus': {
    color: 'rgb(243, 243, 116)',
    boxShadow: '0px 0px 1px 1px rgba(0, 0, 0, 0.4)',
  },
});

export const ContactName = styled('p')({});
export const ContactNumber = styled('p')({});

export const ContactRemoveBtn = styled('button')({
  marginLeft: 'auto',
  cursor: 'pointer',
  width: '24px',
  height: '24px',
  borderRadius: '100%',
  backgroundColor: 'transparent',
  border: 'transparent',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '& > svg': {
    width: '22px',
    height: '22px',
    fill: 'rgba(145, 14, 14, 0.4)',
    display: 'inline-block',
  },

  '&:hover': {
    scale: '1.2',
    boxShadow: '0px 0px 1px 1px rgba(0, 0, 0, 0.4)',
  },

  '&:hover svg': {
    fill: 'rgba(145, 14, 14, 0.8)',
  },
  transition: `fill ${transition}, box-shadow ${transition}, transform ${transition}`,
});
