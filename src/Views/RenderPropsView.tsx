import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula as syntaxHighlighterTheme } from "react-syntax-highlighter/dist/esm/styles/prism";
import { GoBack, RenderProps } from "../components";
import "./pages-styles.css";

const componentToShow = `
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
`;

export const RenderPropsView = () => {
  return (
    <div className="container">
      <GoBack route="/" />
      <h1>Render Props</h1>
      <div className="content-container">
        <p>
          es un patrón avanzado que permite compartir lógica entre componentes
          mediante una función que se pasa como prop. La idea principal es que
          un componente puede controlar cómo se renderiza su contenido
          utilizando una función proporcionada por su componente padre.
        </p>
        <div>
          <h2>✅ Conceptos</h2>
          <p>
            Una Render Prop es simplemente una prop cuyo valor es una función.
            Esa función se usa para determinar qué se renderiza dentro del
            componente.
          </p>
        </div>
        <div>
          <h2>✅ Ventajas de Render Props </h2>
          <ul>
            <li>
              Reutilización de lógica: Puedes encapsular lógica compleja en un
              componente y reutilizarla en varios contextos.
            </li>
            <li>
              Personalización: Cada componente que use una Render Prop puede
              decidir qué mostrar sin necesidad de modificar el componente base.
            </li>
            <li>
              Simplicidad frente a la herencia: Facilita compartir lógica entre
              componentes sin tener que usar herencia.
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h2> ✅ Código de ejemplo</h2>
        <SyntaxHighlighter
          language="jsx"
          showLineNumbers
          style={syntaxHighlighterTheme}
        >
          {componentToShow}
        </SyntaxHighlighter>
      </div>
      <div>
        <h2>Componente de ejemplo ⚛️</h2>
        <RenderProps />
      </div>
      <div className="footer-container">
        <GoBack route="/" />
      </div>
    </div>
  );
};
