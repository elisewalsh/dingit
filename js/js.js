// fetch all details element
var details = document.querySelectorAll("#menu details");

// add onclick listener
details.forEach(function(detail){
  detail.addEventListener("click", otherDetails.bind(null, detail));
  // close all details except current details element
  function otherDetails(targetDetail){
    details.forEach(function(detail){
      if(detail !== targetDetail){
        detail.removeAttribute("open");
      }
    });
  }
});
