const e=document.querySelector(".feedback-form"),t=(document.querySelector(".feedback-form input"),document.querySelector(".feedback-form textarea"));e.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),t.addEventListener("input",onTextareaInputnnnn),function(){const e=localStorage.getItem("feedback-form-state");e&&(t.value=e)}();
//# sourceMappingURL=03-feedback.eb95d614.js.map
