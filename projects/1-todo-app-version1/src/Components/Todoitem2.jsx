function Todoiteam2() {
  let todoname = "go to collage";
  let tododate = "4/10/2023";
  return (
    <div class="container ">
      <div class="row ch-row">
        <div class="col-6">{todoname}</div>
        <div class="col-4">{tododate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger ch-button">
            Danger
          </button>
        </div>
      </div>
    </div>
  );
}
export default Todoiteam2;
