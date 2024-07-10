function Para1() {
  let date = new Date();
  let time = new Date();
  return (
    <p>
      This is the current time: {date.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}
    </p>
  );
}
export default Para1;
