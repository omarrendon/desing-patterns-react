import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula as syntaxHighlighterTheme } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ControlProps, GoBack } from "../../components";
import "./ControlPropView.css";

const componentToShow = `
interface IControlProps {
  values?: Record<string, string>;
  onChange?: (value: Record<string, string>) => void;
  defaultValues?: Record<string, string>;
  onSubmit?: (currentValues: Record<string, string>) => void;
}

const FormChildren: React.FC<IControlProps> = ({
  values,
  onChange,
  defaultValues,
  onSubmit,
}) => {
  // Estado interno para valores no controlados
  const [internalValues, setInternalValues] = React.useState(
    defaultValues || {}
  );
  // Determinar si el formulario es controlado
  const isControlled = values !== undefined;
  // Obtener los valores actuales (controlados o internos)
  const currentValues = isControlled ? (values ? values : {}) : internalValues;
  // Manejar cambios en los campos
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (!isControlled) {
      setInternalValues({
        ...internalValues,
        [name]: value,
      });
    }
    // Notificar al padre sobre los cambios
    if (onChange) {
      onChange({ ...currentValues, [name]: value });
    }
  };

  // Manejar el envío del formulario
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(currentValues);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-input-container">
        <label>Nombre:</label>
        <input
          type="text"
          className="form-input"
          name="nombre"
          value={currentValues.nombre || ""}
          onChange={handleChange}
        />
      </div>
      <div className="form-input-container">
        <label>Email:</label>
        <input
          type="email"
          className="form-input"
          name="email"
          value={currentValues.email || ""}
          onChange={handleChange}
        />
      </div>
      <div className="form-input-container">
        <label>Contraseña:</label>
        <input
          type="password"
          className="form-input"
          name="password"
          value={currentValues.password || ""}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="form-button">
        Registrar
      </button>
    </form>
  );
};

export const ControlProps = () => {
  const [formData, setFormData] = React.useState({
    nombre: "",
    email: "",
    password: "",
  });

  interface ISubmitData {
    [key: string]: string;
  }

  const handleFormSubmit = (data: ISubmitData) => {
    console.log("Datos enviados:", data);
  };

  return (
    <div className="controlProps-container">
      <h1>Formulario de Registro</h1>

      {/* Formulario controlado */}
      <FormChildren
        values={formData}
        onChange={newValues => setFormData(prev => ({ ...prev, ...newValues }))}
        onSubmit={handleFormSubmit}
      />

      <hr />

      {/* Formulario no controlado */}
      <FormChildren
        defaultValues={{
          nombre: "Juan",
          email: "juan@example.com",
          password: "",
        }}
        onSubmit={data =>
          console.log("Formulario no controlado enviado:", data)
        }
      />
    </div>
  );
};
`;

export const ControlPropsView = () => {
  return (
    <div className="container">
      <GoBack route="/" />
      <h1>Control Props</h1>
      <div className="content-container">
        <p>
          El patrón Controlled Props en React es un enfoque avanzado que permite
          que un componente pueda ser controlado tanto internamente como
          externamente, dependiendo de las necesidades del desarrollador. Este
          patrón es útil para construir componentes reutilizables y flexibles
          que puedan manejar su propio estado o delegar el control del estado al
          componente padre.
        </p>
        <p>
          Con este patrón, puedes decidir si un componente es controlado
          (manejado por el padre) o no controlado (manejado internamente).
        </p>
        <div>
          <h2>Conceptos</h2>
          <p>
            <b>✅ Propiedades controladas : </b>
            <span>
              Son propiedades pasadas al componente desde un componente padre, y
              el padre tiene control total sobre el valor y los cambios de esas
              propiedades.
            </span>
          </p>
          <p>
            <b>✅ Estado interno: </b>
            <span>
              Si no se pasa una propiedad controlada desde el padre, el
              componente puede manejar su propio estado como respaldo
              (fallback).
            </span>
          </p>
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
          <ControlProps />
        </div>
      </div>
      <GoBack route="/" />
    </div>
  );
};
