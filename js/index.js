//import the json 
fetch('https://mocki.io/v1/4da47fc5-bbf3-4e41-b35f-c88a584bc4b0')
.then((data) => data.json())
.then((res) => {
    //creation of container
    let colsDiv = $("<div>");
    colsDiv.addClass("cols");
    $(".container").append(colsDiv);
    let maincontentDiv = $("<div>");
    maincontentDiv.addClass("maincontent");
    colsDiv.append(maincontentDiv);
    //creation of video tag
    let video = $("<video>");
    video.attr('src', res.videoUrl);
    video.attr('controls', true);
    maincontentDiv.append(video);
    let subHeading = $("<div>");
    //crearion of subheading
    subHeading.addClass("subHeading");
    subHeading.text(res.title);
    colsDiv.append(subHeading);
    //start of content
    let videoContentDiv = $("<div>");
    videoContentDiv.addClass("content");
    videoContentDiv.text(res.description);
    colsDiv.append(videoContentDiv);
    //start of hr tag
    let hrTag = $("<hr>");
    colsDiv.append(hrTag);
    //comments headingg
    let commentHeading = $("<div>");
    commentHeading.addClass("commentHeading");
    commentHeading.text("comment");
    colsDiv.append(commentHeading);
    for (let comment of res.comments) {
        let row = $("<div>");
        row.addClass("row");
        colsDiv.append(row);
        //reviewer image
        let imageContainer = $("<div>");
        let imageTag = $("<img>");
        imageTag.addClass("reviewerPhoto");
        imageTag.attr("src", comment.image);
        imageContainer.append(imageTag);
        row.append(imageContainer);
        let column = $("<div>");
        column.addClass("column");
        row.append(column);
        //reviewer name
        let reviewerName = $("<div>");
        reviewerName.addClass("reviewerName");
        reviewerName.text(comment.name);
        column.append(reviewerName);
        let reviewercomment = $("<div>");
        //reviewer comments
        reviewercomment.addClass("reviewercomment");
        reviewercomment.text(comment.comment);
        column.append(reviewercomment);
    }
    //upcoming projects
    let upcomingBlender = $("<div>");
    upcomingBlender.addClass("upcomingBlunder");
    $(".container").append(upcomingBlender);
    let upcomingProjects = $("<div>");
    upcomingProjects.addClass("upcomingProjects");
    upcomingProjects.text("Upcoming Projects");
    //import json 
    upcomingBlender.append(upcomingProjects);
    fetch('https://mocki.io/v1/8c9b378b-d248-4203-93b0-b8e7659ac346')
        .then((posters) => posters.json())
        .then((details) => {
            for (let detail of details) {
                //poster images
                let imageTag = $("<img>");
                imageTag.addClass("poster");
                imageTag.attr("src", detail.imageUrl);
                $(".upcomingBlunder").append(imageTag);
            }
        });
});
