import React from "react";
import { useNavigate } from "react-router";

interface IGoBack {
  route: string;
}

export const GoBack: React.FC<IGoBack> = ({ route }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(route);
  };

  return (
    <div onClick={handleBack} style={styles.container}>
      <span> ⬅️ Atrás</span>
    </div>
  );
};

const styles = {
  container: {
    cursor: "pointer",
  },
};
