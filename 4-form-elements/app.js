
// Refresh the Inline editable
document.addEventListener("calciteInlineEditableEditConfirm", () => {
  document.querySelector("calcite-inline-editable").editingEnabled = false;
});


window.onload = () => {

  // Form submission
  const submitForm = document.getElementById("submitForm");
  const saveForm = document.getElementById("saveForm");
  const alert = document.getElementById("alert");
  const alertMessage = document.getElementById("alert-message");

  submitForm.addEventListener("calciteDropdownItemSelect", () => {
    alert.open = true;
    alertMessage.innerHTML = `<strong>Success!</strong> Thank you for submitting your feedback.`
  });

  saveForm.addEventListener("calciteDropdownItemSelect", () => {
    alert.open = true;
    alertMessage.innerHTML = `Your feedback has been saved.`
  });

}