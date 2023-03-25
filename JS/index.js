
//fetch data from json

fetch('./JSON/video.json')
    .then((data) => data.json())
    .then((res) => {
     //start of container
        let container = document.querySelector(".container");
        let colsDiv = document.createElement("div");
        colsDiv.className = "cols";
        container.appendChild(colsDiv);
        let maincontentDiv = document.createElement("div");
        maincontentDiv.className = "maincontent";
        colsDiv.appendChild(maincontentDiv);
        //create the video tag
        let video = document.createElement("video");
        video.setAttribute('src', res.videoUrl);
        video.setAttribute('controls', true);
        video.className = "contentVideo";
        maincontentDiv.appendChild(video);
        //create the heading tag
        let subHeading = document.createElement("div");
        subHeading.className = "subHeading";
        subHeading.textContent = res.title;
        colsDiv.appendChild(subHeading);
        //info about video
        let videoContentDiv = document.createElement("div");
        videoContentDiv.className = "content";
        videoContentDiv.textContent = res.description;
        colsDiv.appendChild(videoContentDiv);
        //creation of hr tag
        let hrtag = document.createElement("hr");
        colsDiv.appendChild(hrtag);
        //comments heading
        let commentHeading = document.createElement("div");
        commentHeading.className = "commentsHeading";
        commentHeading.textContent = "comment";
        colsDiv.appendChild(commentHeading);
        console.log(res.comments);
        for (let comment of res.comments) {
            let row = document.createElement("div");
            row.className = "row";
            colsDiv.appendChild(row);
            //reviewer image
            let imageDiv = document.createElement("div");
            let imagetag = document.createElement("img");
            imagetag.className = "reviewerPhoto"
            imagetag.setAttribute('src', comment.image);
            imageDiv.appendChild(imagetag);
            row.appendChild(imageDiv);
            let column = document.createElement("div");
            column.className = "column";
            row.appendChild(column);
            //reviewer name
            let reviewerName = document.createElement("div");
            reviewerName.className = "reviewerName";
            reviewerName.textContent = comment.name;
            column.appendChild(reviewerName);
            //reviewer comment
            let reviewercomment = document.createElement("div");
            reviewercomment.className = "reviewercomment";
            reviewercomment.textContent = comment.comment;
            column.appendChild(reviewercomment);

        }
        let container1 = document.querySelector(".container");
        console.log(container1);
        //upcoming movies
        let upcomingBlunder = document.createElement("div");
        upcomingBlunder.className = "upcomingBlunder";
        console.log(upcomingBlunder);
        container1.appendChild(upcomingBlunder);
        console.log(container1);
        let upcomingProjects = document.createElement("div");
        upcomingProjects.className = "upcomingProjects";
        upcomingProjects.textContent = "Upcoming projects";
        upcomingBlunder.appendChild(upcomingProjects);
        fetch('./JSON/posters.json')
            .then((posters) => posters.json())
            .then((details) => {

                for (let detail of details) {
                    //movie pics
                    let upcomingBlunder = document.querySelector(".upcomingBlunder");
                    let imagetag = document.createElement("img");
                    imagetag.className = "poster";
                    imagetag.setAttribute('src', detail.imageUrl);
                    console.log(imagetag);
                    upcomingBlunder.appendChild(imagetag);
                }
            });
    });

