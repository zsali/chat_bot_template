$(document).ready(function () {
  $(".chat-bot-icon").click(function (e) {
    toggleSection(this);
  });

  $("#issueReportForm").validate({
    rules: {
      issueSubject: {
        required: true,
        minlength: 3,
      },
      issueComment: {
        required: true,
        maxlength: 500,
      },
    },
    messages: {
      issueSubject: {
        required: "Please enter a Subject",
        minlength: "Your Subject must consist of at least 3 characters",
      },
      issueComment: {
        required: "Please enter a Comment",
        maxlength: "Your Comment must be under 500 characters",
      },
    },
  });
});

$("#issueReportForm").on("submit", function (event) {
  event.preventDefault();
  if ($(this).valid()) {
    $("#issueReportForm")[0].reset();
    $(".chat-mail").addClass("hide");
    $(".chat-session-end").removeClass("hide");
    setTimeout(() => {
      $(".chat-mail").removeClass("hide");
      $(".chat-session-end").addClass("hide");
    }, 4000);
  }
});

function toggleSection(element) {
  $(element).children("img").toggleClass("hide");
  $(element).children("svg").toggleClass("animate");
  $(".chat-screen").toggleClass("show-chat");
  $("#issueReportForm").validate().resetForm();
}

function moveCursorToStart() {
  var textarea = document.getElementById("issueComment");

  if (textarea.value.trim() === "") {
    textarea.selectionStart = 0;
    textarea.selectionEnd = 0;
  }
}
