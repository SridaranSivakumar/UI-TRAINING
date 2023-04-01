containerId = localStorage.getItem("idnumber");
localdata = JSON.parse(localStorage.getItem("localStorageData"));
let elementId;
localdata.forEach(element => {
    if (element.id == containerId) {
        elementId = element.id;
        console.log(element);
        let notes = $("<div>");
        notes.addClass("notes");
        notes.attr("id", element.id);
        $(".notes-container").append(notes);
        let heading = $("<div>").addClass("notes-title");
        let inputHeading = element.title;
        heading.append(inputHeading);
        let containerId = element.id;
        $(`#${containerId}`).append(heading);
        if ((element.imageUrl) != "") {
            let image = $("<div>").addClass("notes-image");
            let imageTag = $("<img>").addClass("content-image");
            let imgUrl = element.imageUrl;

            imageTag.attr("src", imgUrl);
            image.append(imageTag);
            $(`#${containerId}`).append(image);
        }
        let notesContent = $("<div>");
        let inputContent = element.content;
        $(".circle").css("background-color", element.color);
        notesContent.addClass("notes-content").text(inputContent);
        $(`#${containerId}`).append(notesContent);
    }
});

$(document).ready(function () {
    $('.icon').click(function () {
        $(location).attr('href', './index.html');
    });
});




$('.new-btn').click(() => {
    $(".newbtn-action").css("right", 0);
    let card;
    // const localStorageData = JSON.parse(localStorage.getItem('localStorageData'));
    localdata.forEach((element) => {
        if (element.id == containerId) {
            card = element;
            return;
        }
    })

    $('#input-title').val(card.title);
    $('#image-url').val(card.imageUrl);
    $('#input-content').val(card.content);




    console.log(card)
    $('#input-title').val();
})
var color;
$(".circle").on('click', function () {
    var circleId = $(this).attr("id");
    color = circleId.split("-");
    color = color[0];
    console.log(color);
    console.log(circleId);
    console.log();

});

$(".content-add-btn").click(function () {
    console.log($("#input-title").val() + "hi");
    console.log($("#input-content").val() + "hi");
    if ($("#input-title").val().trim() == "" || $("#input-content").val().trim() == "") {
        $(".content-add-btn").prop('disabled', true);
    } else {
        containerId.title = $("#input-title").val();
        $(".notes-title").text($("#input-title").val());
        if ($("#image-url").val().trim() != "") {
            let imgUrl = $("#image-url").val();
            $(".content-image").attr("src", imgUrl);
            containerId.imageUrl = imgUrl;
        }

        $(".notes-content").text($("#input-content").val());
        containerId.content = $("#input-content").val();
        $(".circle").css("background-color", color);
        $(".newbtn-action").css("right", -40 + "%");
        $(".content-add-btn").prop('disabled', true);
        $("#input-title , #input-content").val("");
    }
});
$(".delete-btn").click(() => {
    $(".conform-box").css("display", "block");
    $(".conform-btn").click(() => {
        console.log("gho");
        localdata.forEach((element, index) => {
            if (element.id === Number(containerId)) {

                localdata.splice(index);
                console.log(index);
                console.log(localdata.splice(index));
                localStorage.setItem("localStorageData", JSON.stringify(localdata));
            }
        })
        $(".conform-box").css("display", "none");
        $(location).attr('href', './index.html');
    })
})
$(".cancel-icon").click(() => {
    $(".conform-box").css("display", "none");
}) 