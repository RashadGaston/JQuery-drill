$(document).ready(function () {
  $("#btnSubmit").click(function (event) {
    event.preventDefault();
    let inputText = $(".text-input").val();
    alert(inputText);

    let h2 = $("<h2></h2>");
    h2.append(inputText);
    $("body").append(h2);
  });

  $("#btnSubmit").attr("disabled", true);

  $(".text-input").keyup(function () {
    if (this.value == "") {
      $("#btnSubmit").attr("disabled", true);
    } else {
      $("#btnSubmit").attr("disabled", false);
    }
  });
});
// .mouseover() event handler method on <h2>
$("h2").mouseover((event) => {
  const thisRandomColor = getRandomColor();
  $(event.target).css({
    "background-color": thisRandomColor,
    "border-radius": "0.25rem",
  });
});

let textDiv = $("<div id='text-div'></div>");
$("body").append(textDiv);
