import Item from "../Item/Item";

const ItemList = ({ books }) => {
  return (
    <>
      {books.map((book) => {
        return <Item key={book.id} {...book} />;
      })}
    </>
  );
};

export default ItemList;
