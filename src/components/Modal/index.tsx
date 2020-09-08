import React from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';

export interface ModalProps {
  isOpen: boolean;
  onClickClose: () => void;
}

export const ModalTitle = styled.h2`
  font-size: 23px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.69px;
  color: ${props => props.theme.colors.text};
  margin-bottom: 42px;
`;

const Modal: React.FC<ModalProps> = ({ isOpen, onClickClose, children }) => {
  ReactModal.setAppElement('#__next');
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClickClose}
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.33)'
        },
        content: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: '#fff',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          borderRadius: '10px',
          border: 'solid 1px rgba(119, 119, 119, 0.21)',
          outline: 'none',
          padding: '40px 70px',
          maxWidth: '660px',
          minHeight: '80vh'
        }
      }}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
