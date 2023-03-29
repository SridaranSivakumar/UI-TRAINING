

//fetch and import the json file
fetch('./JSON/friends.json')
    .then((posters) => posters.json())
    .then((data) => {
      //creating fragment
        const container = document.querySelector('.friendsContainer');
        const fragment = new DocumentFragment();
     //for loop to iterate the json file
        for (let details of data) {
            //creation of card div
            const card = document.createElement('div');
            card.className = 'card';
             //creation of row div
            const row = document.createElement('div');
            row.className = 'row';
            card.appendChild(row);
             //creation of imageDiv div
            const imageDiv = document.createElement('div');
            imageDiv.className = 'imageDiv';
            //creation of imageTag div
            const imgTag = document.createElement('img');
            imgTag.setAttribute('src', details.img);
            imageDiv.appendChild(imgTag);
            row.appendChild(imageDiv);
            //creation of column div
            const column = document.createElement('div');
            column.className = 'column';
            row.appendChild(column);
            //creation of name div
            const name = document.createElement('div');
            const fullName = details.first_name + ' ' + details.last_name;
            name.innerHTML = fullName;
            column.appendChild(name);
             //creation of email div
            const email = document.createElement('div');
            email.innerHTML = details.email;
            column.appendChild(email);
            fragment.appendChild(card);
        }
        container.append(fragment);
    });
