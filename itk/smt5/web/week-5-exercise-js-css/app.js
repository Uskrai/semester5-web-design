function onclickSubmit(event, required) {
  let elements = event.target.elements;

  required.forEach((it) => {
    let el = elements[it];
    if (el != null) {
      let val = el.value;
      if (val == null || val == "") {
        el.classList.add("invalid");
        event.preventDefault();
      } else {
        el.classList.remove("invalid");
      }
    }
  });
}
