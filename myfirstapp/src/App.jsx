function App(props) {
  const currDate = new Date();
  return (
    <>
    <h1>Hi From Hasnain</h1>
      <h1>Hello World</h1>
      <h2>today's date is {currDate.toLocaleDateString()} and time is {currDate.toLocaleTimeString()}</h2>
    </>
  );
}

export default App;
