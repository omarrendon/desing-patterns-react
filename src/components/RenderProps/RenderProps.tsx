import React, { useState } from "react";

interface IRenderProps {
  render: (props: {
    isVisible: boolean;
    openModal: () => void;
    closeModal: () => void;
  }) => React.ReactElement;
}

const ChildComponent = ({ render }: IRenderProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const openModal = () => setIsVisible(true);
  const closeModal = () => setIsVisible(false);
  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      {isVisible && (
        <div onClick={closeModal} style={modalStyles}>
          <div style={modalContentStyles} onClick={e => e.stopPropagation()}>
            {render({ isVisible, openModal, closeModal })}
          </div>
        </div>
      )}
    </div>
  );
};

const ParentComponet = () => {
  return (
    <ChildComponent
      render={({ isVisible, closeModal }) => (
        <div>
          <h1>Modal Render Props</h1>

          {isVisible && <p>El modal está abierto.</p>}
          <button onClick={closeModal}>Cerrar</button>
        </div>
      )}
    />
  );
};

export const RenderProps = () => {
  return (
    <div>
      <h1>Render Props</h1>
      <ParentComponet />
    </div>
  );
};

const modalStyles = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
} as React.CSSProperties;

const modalContentStyles = {
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
};
