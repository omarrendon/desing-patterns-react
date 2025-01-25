import React from "react";

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
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={currentValues.nombre || ""}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={currentValues.email || ""}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Contraseña:
          <input
            type="password"
            name="password"
            value={currentValues.password || ""}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">Registrar</button>
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
    <div>
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
