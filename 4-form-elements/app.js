
// Refresh the Inline editable
document.addEventListener("calciteInlineEditableEditConfirm", (evt) => {
  document.querySelector("calcite-inline-editable").editingEnabled = false;
  const inputValue = evt.target.children[0].value;
  if (inputValue.length !== 5 || inputValue.match(/^[0-9]+$/) == null) {
    evt.target.children[0].status = "invalid";
  } else {
    evt.target.children[0].status = "valid";
  }
});


window.onload = () => {

  // Form submission
  const submitForm = document.getElementById("submitForm");
  const saveForm = document.getElementById("saveForm");
  const alert = document.getElementById("alert");
  const alertMessage = document.getElementById("alert-message");

  submitForm.addEventListener("calciteDropdownItemSelect", () => {
    document.getElementById("dynamic-form").reset();
    alert.open = true;
    alertMessage.innerHTML = `<strong>Success!</strong> Thank you for submitting your feedback.`
  });

  saveForm.addEventListener("calciteDropdownItemSelect", () => {
    alert.open = true;
    alertMessage.innerHTML = `Your feedback has been saved.`
  });

}