function ListItem({ children }) {
  return (
    <>
      <div>
        <ul>
          <li>{children}</li>
        </ul>
      </div>
    </>
  );
}

export default ListItem;
