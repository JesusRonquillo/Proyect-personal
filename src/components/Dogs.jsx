import React from "react";
import dataDogs from "/Users/tygre/Desktop/Academlo/React Academlo/Proyectos Persoanles/Proyect_useState/src/utils/photos-Dogs";

const Dogs = ({ photosState }) => {
  console.log(photosState);
  console.log(dataDogs[photosState].Imagen);
  return (
    <div>
      <div>
        <img src={dataDogs[photosState].Imagen} alt="no funca " />
        <div>
          <h1>Raza:</h1>
          <p>{dataDogs[photosState].Nombre}</p>
          <h1>Tipo de raza:</h1>
          <p>{dataDogs[photosState].Observacion}</p>
          <h1>Rasgos</h1>
          <p>{dataDogs[photosState].Rasgos}</p>
        </div>
      </div>
    </div>
  );
};

export default Dogs;
