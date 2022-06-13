import "./TituloFilter.css";

const TituloFilter = ({ category }) => {
  return (
    <>
      {category === "cienciaficcion" && <h2>Ciencia ficcion</h2>}
      {category === "suspenso" && <h2>Suspenso</h2>}
    </>
  );
};

export default TituloFilter;
