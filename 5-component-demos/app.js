window.onload = () => {
  
  const queryParams = new URLSearchParams(window.location.search);
  const demoEls = [...document.getElementsByClassName("demo-component")];
  const chipGroupEl = document.querySelector("calcite-chip-group");
  const navigationLogoEl = document.querySelector("calcite-navigation-logo");
  const dialogEl = document.querySelector("calcite-dialog");
  const panelEl = document.querySelector("calcite-panel");

  (async () => {
    await customElements.whenDefined("calcite-sheet");
    await document.querySelector("calcite-sheet").componentOnReady();
    if (queryParams.get("comp") !== null && queryParams.get("comp") !== "stepper") {
      const selectedComponent = queryParams.get("comp");
      document.getElementById(selectedComponent).selected = true;
      demoEls.forEach((demoEl) => demoEl.hidden = true);
      const calciteCompLabel = document.getElementById(selectedComponent).label;
      const calciteComp = document.getElementById(selectedComponent).value;
      navigationLogoEl.heading = `${calciteCompLabel} demo`;
      if (calciteComp == "calcite-sheet") {
        document.querySelector(calciteComp).open = true;
        sheetEl.open = true;
        sheetPanel.closed = false;
      } else if (calciteComp == "calcite-dialog") {
        document.querySelector(calciteComp).open = true;
      }
      document.querySelector(calciteComp).removeAttribute("hidden");
      try {
        document.querySelector(calciteComp).setFocus();
      } catch(err) {}
      try {
        document.getElementById("sheet-btn").remove();
      } catch(err) {}
      try {
        document.getElementById("dialog-btn").remove();
      } catch(err) {}
    } else {
      queryParams.set("comp", "stepper");
      history.replaceState(null, null, "?" + queryParams.toString());
    }
  })();


  /* Chip Group and Chip */
  chipGroupEl.addEventListener("calciteChipGroupSelect", (evt) => {
    let compName = evt.target.selectedItems[0].id;
    queryParams.set("comp", compName);
    history.replaceState(null, null, "?" + queryParams.toString());
    navigationLogoEl.heading = `${evt.target.selectedItems[0].label} demo`;
    demoEls.forEach((demoEl) => demoEl.hidden = true);
    const calciteComp = evt.target.selectedItems[0].value;
    if (calciteComp == "calcite-sheet") {
      document.querySelector(calciteComp).open = true;
      sheetEl.open = true;
      sheetPanel.closed = false;
    } else if (calciteComp == "calcite-dialog") {
      document.querySelector(calciteComp).open = true;
    }
    document.querySelector(calciteComp).removeAttribute("hidden");
    try { 
      document.querySelector(calciteComp).setFocus();
    } catch(err) {}
    try {
      document.getElementById("sheet-btn").remove();
    } catch(err) {}
    try {
      document.getElementById("dialog-btn").remove();
    } catch(err) {}
  });

  /* Dialog */
  dialogEl.addEventListener("calciteDialogClose", () => {
    const dialogBtn = document.createElement("calcite-button");
    dialogBtn.id = "dialog-btn";
    dialogBtn.innerText = "Open unsaved changes dialog";
    dialogBtn.width = "half";
    dialogBtn.style = "margin: auto; width: 50%";
    panelEl.appendChild(dialogBtn);
    dialogBtn.setFocus();

    document.getElementById("dialog-btn").addEventListener("click", () => {
      document.querySelector("calcite-dialog").open = true;
      document.querySelector("calcite-dialog").setFocus();
      document.getElementById("dialog-btn").remove();
    });
  });

  /* Flow and Flow Item */
  const flow = document.getElementById("example-flow");
  const items = document.querySelectorAll("calcite-list-item");

  items?.forEach(item => {
      item.addEventListener("calciteListItemSelect", event => {
          createFlowItem(event, event.target.label, event.target.description, false);
      });
  });

  function createFlowItem(event, title, description, isLastLevel) {
      const newFlowItem = document.createElement("calcite-flow-item");
      newFlowItem.addEventListener("calciteFlowItemBack", () => {
          newFlowItem.remove();
      });
      newFlowItem.heading = !isLastLevel ? title : "Even more details";
      newFlowItem.description = !isLastLevel ? description : title;

      const block = document.createElement("calcite-block");
      block.open = true;
      block.heading = "Details";
      newFlowItem.append(block);

      const notice = document.createElement("calcite-notice");
      notice.open = true;
      notice.width = "full";
      block.append(notice);

      const noticeMessage = document.createElement("span");
      noticeMessage.slot = "message";
      noticeMessage.innerText = !isLastLevel ? `A new Flow Item for ${title}.` :
      "You've reached the end of the line.";
      notice.append(noticeMessage);

      if (!isLastLevel) {
          const button = document.createElement("calcite-button");
          button.slot = "footer";
          button.width = "full";
          button.innerText = "Move to a third Flow Item";
          button.addEventListener("click", event => createFlowItem(event, title, description, true));
          if (!isLastLevel) newFlowItem.append(button);
      }

      flow.append(newFlowItem);
      const flowItems = document.querySelectorAll("calcite-flow-item");
      flowItems.forEach(item => item.selected = false);
      newFlowItem.selected = true;
      newFlowItem.setFocus();
  }

    /* Sheet */
    const sheetEl = document.getElementById("example-sheet");
    const sheetPanel = document.getElementById("sheet-panel");

    sheetPanel?.addEventListener("calcitePanelClose", function() {
        sheetEl.open = false;
        sheetPanel.closed = true;

        const sheetBtn = document.createElement("calcite-button");
        sheetBtn.id = "sheet-btn";
        sheetBtn.innerText = "Open sheet";
        sheetBtn.width = "half";
        sheetBtn.style = "margin: auto; width: 50%";
        panelEl.appendChild(sheetBtn);
        sheetBtn.setFocus();

        document.getElementById("sheet-btn").addEventListener("click", () => {
          sheetEl.open = true;
          sheetPanel.closed = false;
          document.querySelector("calcite-sheet").setFocus();
          document.getElementById("sheet-btn").remove();
        });

    });

}