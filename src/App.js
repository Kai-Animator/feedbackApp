function App() {
  const title = 'My blog';
  const body = 'This is my blog post'({});
  const comments = [
    {
      id: 1,
      text: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    },
    {
      id: 2,
      text: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    },
    {
      id: 3,
      text: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    },
  ];

  return (
    <>
      <div classList='container'>
        <h1>{title}</h1>
        <p>{body}</p>
        <div>
          // <h3>Comments ({comments.length})</h3>
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>{comment.text}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
