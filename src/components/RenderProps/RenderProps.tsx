import React, { useState } from "react";

// Interfez que recibe como Props el component ChildComponent
interface IRenderProps {
  render: (props: {
    isVisible: boolean;
    openModal: () => void;
    closeModal: () => void;
  }) => React.ReactElement;
}

const ChildComponent = ({ render }: IRenderProps) => {
  // Variable de estado que muestra/oculta el modal
  const [isVisible, setIsVisible] = useState<boolean>(false);
  // Funciones que realizan la acción de abrir/cerrar el modal
  const openModal = () => setIsVisible(true);
  const closeModal = () => setIsVisible(false);

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      {/* Caondicional de la visibilidad del modal */}
      {isVisible && (
        <div onClick={closeModal} style={modalStyles}>
          <div style={modalContentStyles} onClick={e => e.stopPropagation()}>
            {/* Prop que nos mostrará el contendido proporcionado por el padre */}
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
      // Prop render que proporcionar el componente padre al hijo
      render={({ isVisible, closeModal }) => (
        // Contenido que se mostrará en el modal
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
