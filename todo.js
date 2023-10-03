function Todo({ todo, index, remove }) {
  function handle() {
    console.log('Ping:', index);
    remove(index);
  }
  return (
    <>
      <div
        style={{
          display: 'flex'
        }}
      >
        <div
          className="todo"
          style={{
            fontWeight: 'bold',
            height: '50px'
          }}
        >
          {index + 1}.
        </div>
        <div
          className="todo"
          style={{
            width: '100%',
            height: '50px'
          }}
        >
          {todo.text.charAt(0).toUpperCase() + todo.text.slice(1)}
        </div>
        <div className="todo"
          style={{
            height: '50px'
          }}
          onClick={handle}
          >
          <img src='/public/static/trash.svg' />
        </div>
      </div>
    </>
  )
}
