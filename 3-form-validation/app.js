let submitForm = false;

window.onload = () => {
  // Theme Switcher
  const themeSwitch = document.getElementById("theme-switch");
  themeSwitch.addEventListener("calciteSwitchChange", () => {
    document.body.classList.toggle("calcite-mode-dark");
  });

  // Form submission
  const form = document.getElementById("feedback-form");
  const submit = document.getElementById("submit");
  const clear = document.getElementById("clear");
  const progress = document.getElementById("progress");
  const alert = document.getElementById("alert");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    submit.loading = true;
    progress.removeAttribute("hidden");

    // Hides the component so context isn't provided to AT
    [...document.getElementsByClassName("form-progress")].forEach((meterEl) => {
      meterEl.hidden = true;
    });

    setTimeout(() => {
      alert.open = true;
      submit.loading = false;
      progress.setAttribute("hidden", "");
      submitForm = true;
      clearForm();
      // Unhide the component for another form submission
      [...document.getElementsByClassName("form-progress")].forEach((meterEl) => {
        meterEl.hidden = false;
      });
    }, 2500);
  });

  alert.addEventListener("calciteAlertOpen", () => alert.setFocus());

  alert.addEventListener("calciteAlertClose", () => document.getElementById("submit").setFocus());

  clear.addEventListener("click", () => {
    submitForm = false;
    clearForm()
  });
};



(async () => {
  await customElements.whenDefined("calcite-input");
  await document.querySelector("calcite-input").componentOnReady();
  
  // First name
  const firstNameEl = document.getElementById("first-name");
  let updateFirstName = true;
  firstNameEl.addEventListener("calciteInputInput", (evt) => { 
    if (evt.target.value.length > 0 && updateFirstName) {
      updateMeterStatus(10);
      updateFirstName = false;
    } else if (evt.target.value.length > 0) {
      return
    } else {
      updateMeterStatus(-10);
      updateFirstName = true;
    } 
  });

  // Location
  const locationEl = document.querySelector("calcite-autocomplete");
  let updateLocation = true;
  locationEl.addEventListener("calciteAutocompleteChange", (evt) => {
    if (evt.target.value.length > 0 && updateLocation) {
      updateMeterStatus(10);
      updateLocation = false;
    } else if (evt.target.value.length > 0) {
      return;
    }
  });
  // Keyboard via escape key
  locationEl.addEventListener("keydown", (evt) => {
    if (evt.key == "Escape" && !updateLocation) {
      updateMeterStatus(-10);
      updateLocation = true;
    }
  });

  // Time Zone
  const timeZoneEl = document.querySelector("calcite-input-time-zone");
  let updateTimeZone = false;
  timeZoneEl.addEventListener("calciteInputTimeZoneChange", (evt) => {
    if (evt.target.value.length > 0 && updateTimeZone) {
      updateMeterStatus(10);
      updateTimeZone = false;
    } else if (evt.target.value.length > 0) {
      return;
    } else {
      updateMeterStatus(-10);
      updateTimeZone = true;
    }
  });

  // Select
  const selectEl = document.querySelector("calcite-select");
  let updateSelect = true;
  selectEl.addEventListener("calciteSelectChange", (evt) => {
    if (evt.target.value.length > 0 && updateSelect) {
      updateMeterStatus(10);
      updateSelect = false;
    } else if (evt.target.value.length > 0) {
      return
    } else {
      updateMeterStatus(-10);
      updateSelect = true;
    }
  });

  // Radio button group
  const radioBtnGrpEl = document.querySelector("calcite-radio-button-group");
  let updateRadioBtn = true;
  radioBtnGrpEl.addEventListener("calciteRadioButtonGroupChange", (evt) => {
    if (evt.target.selectedItem.value.length > 0 && updateRadioBtn) {
      updateMeterStatus(10);
      updateRadioBtn = false;
    } else if (evt.target.selectedItem.value.length > 0) {
      return
    } else {
      updateMeterStatus(-10);
      updateRadioBtn = true;
    }
  });

  // Input Number
  const inputNumberEl = document.querySelector("calcite-input-number");
  let updateInputNumber = true;
  inputNumberEl.addEventListener("calciteInputNumberChange", (evt) => {
    if (evt.target.value.length > 0 && updateInputNumber) {
      updateMeterStatus(10);
      updateInputNumber = false;
    } else if (evt.target.value.length > 0) {
      return;
    } else {
      updateMeterStatus(-10);
      updateInputNumber = true;
    } 
  });

  // Slider
  const sliderEl = document.querySelector("calcite-slider");
  let updateSlider = true;
  sliderEl.addEventListener("calciteSliderChange", (evt) => {
    if (updateSlider) {
      updateMeterStatus(10)
      updateSlider = !updateSlider;
    }
  });

  // Combobox
  const comboboxEl = document.querySelector("calcite-combobox");
  let updateCombobox = true;
  comboboxEl.addEventListener("calciteComboboxChange", (evt) => {
    if (evt.target.value.length > 0 && updateCombobox) {
      updateMeterStatus(10);
      updateCombobox = false;
    } else if (evt.target.value.length > 0) {
      return;
    } else {
      updateMeterStatus(-10);
      updateCombobox = true;
    }
  });

  // Input Date Picker
  const inputDatePickerEl = document.querySelector("calcite-input-date-picker");
  let updateDatePicker = true;
  getTodaysDate();
  //debugger;
  inputDatePickerEl.addEventListener("calciteInputDatePickerChange", (evt) => {
    if (evt.target.value.length > 0 && updateDatePicker) {
      updateMeterStatus(10);
      updateDatePicker = false;
    } else if (evt.target.value.length > 0) {
      return;
    } else {
      updateMeterStatus(-10);
      updateDatePicker = true;
    }
  });

  // Text Area
  const textAreaEl = document.querySelector("calcite-text-area");
  let updateTextArea = true;
  textAreaEl.addEventListener("calciteTextAreaInput", (evt) => {
    if (evt.target.value.length > 0 && updateTextArea) {
      updateMeterStatus(10);
      updateTextArea = false;
    } else if (evt.target.value.length > 0) {
      return;
    } else {
      updateMeterStatus(-10);
      updateTextArea = true;
    }
  });

})();


// Update meter
function updateMeterStatus(number) {
  const meterStatusEls = [...document.getElementsByClassName("form-progress")];
  meterStatusEls.forEach((meterStatusEl) => {
    if (number == -10 && meterStatusEl.value == 0) {
      return;
    } else {
      meterStatusEl.value = meterStatusEl.value + number;
    }
  });
}

// Clear form
function clearForm() {
  document.getElementById("feedback-form").reset();
  [...document.getElementsByClassName("form-progress")].forEach((meterEl) => {
    meterEl.value = 10;
  });
  // Refresh update vars
  updateFirstName = updateLocation = updateTimeZone = updateInputNumber = updateSelect = updateRadioBtn = updateSlider = updateCombobox = updateDatePicker = updateTextArea = true;

  if (submitForm) {
    submitForm = false;
  } else {
    document.getElementById("announce-clear").innerText = "The form has been cleared";
    document.getElementById("first-name").setFocus();
  }
}

function getTodaysDate() {
  let currentDate = new Date();
  const dd = String(currentDate.getDate()).padStart(2, '0');
  const mm = String(currentDate.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = currentDate.getFullYear();
  currentDate = yyyy + '-' + mm + '-' + dd;
  document.querySelector("calcite-input-date-picker").max = currentDate;
}
