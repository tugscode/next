function Todo(props) {
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn">Delete</button>
        <p>2.29 Handling events </p>
      </div>
    </div>
  );
}

export default Todo;
