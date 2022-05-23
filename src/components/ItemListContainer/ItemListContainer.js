import "./ItemListContainer.css";

const ItemListContainer = (props) => {
  return (
    <>
      <div className="titleContainer">
        <h1>{props.title}</h1>
      </div>
    </>
  );
};

export default ItemListContainer;
