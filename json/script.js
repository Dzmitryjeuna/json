// Assuming your JSON file is named 'data.json' and is located in the same directory
// fetch('data.json')
//   .then(response => response.json())
//   .then(data => {
//     document.getElementById('groupTitle').textContent = data.groupTitle;
//     document.getElementById('groupName').textContent = data.groupName;

//     const usersList = document.getElementById('usersList');
//     const maxMessages = data.users[0].messages; // Assuming the first user has the maximum messages

//     data.users.forEach(user => {
//       const userElement = document.createElement('div');
//       userElement.className = 'user';

//       const profilePic = document.createElement('img');
//       profilePic.className = 'profile-pic';
//       profilePic.src = user.profilePic;
//       profilePic.alt = user.name;

//       const userName = document.createElement('div');
//       userName.className = 'name';
//       userName.textContent = user.name;

//       const barContainer = document.createElement('div');
//       barContainer.className = 'bar';

//       const barFill = document.createElement('div');
//       barFill.className = 'fill';
//       barFill.style.width = (user.messages / maxMessages) * 100 + '%';
      
//       const messagesCount = document.createElement('div');
//       messagesCount.className = 'messages';
//       messagesCount.textContent = user.messages;

//       barContainer.appendChild(barFill);
//       userElement.appendChild(profilePic);
//       userElement.appendChild(userName);
//       userElement.appendChild(barContainer);
//       userElement.appendChild(messagesCount);

//       usersList.appendChild(userElement);
//     });
//   })
//   .catch(error => console.error('Error loading JSON data:', error));


  
  // fetch('data.json')
  //   .then(response => response.json())
  //   .then(data => {
  //     document.getElementById('groupTitle').textContent = data.groupTitle;
  //     document.getElementById('groupName').textContent = data.groupName;

  //     const usersList = document.getElementById('usersList');
  //     const maxMessages = data.users[0].messages; // Предполагается, что первый пользователь имеет максимальное количество сообщений

  //     data.users.forEach(user => {
  //       const userElement = document.createElement('div');
  //       userElement.className = 'user';

  //       const profilePic = document.createElement('img');
  //       profilePic.className = 'profile-pic';
  //       profilePic.src = user.profilePic;
  //       profilePic.alt = user.name;

  //       const userName = document.createElement('div');
  //       userName.className = 'name';
  //       userName.textContent = user.name;

  //       const barContainer = document.createElement('div');
  //       barContainer.className = 'bar';

  //       const barFill = document.createElement('div');
  //       barFill.className = 'fill';
  //       barFill.style.width = (user.messages / maxMessages) * 100 + '%';
        
  //       const messagesCount = document.createElement('div');
  //       messagesCount.className = 'messages';
  //       messagesCount.textContent = user.messages;

  //       barContainer.appendChild(barFill);
  //       userElement.appendChild(profilePic);
  //       // userElement.appendChild(userName);

  //       const contentContainer = document.createElement('div');
  //       contentContainer.className = 'user-numbers';
  //       contentContainer.appendChild(barContainer);
  //       contentContainer.appendChild(messagesCount);

  //       userElement.appendChild(contentContainer);

  //       usersList.appendChild(userElement);
  //     });
  //   })
  //   .catch(error => console.error('Error loading JSON data:', error));


  fetch('data.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('groupTitle').textContent = data.groupTitle;
    document.getElementById('groupName').textContent = data.groupName;

    const usersList = document.getElementById('usersList');
    const maxMessages = data.users[0].messages; // Предполагается, что первый пользователь имеет максимальное количество сообщений

    data.users.forEach(user => {
      const userElement = document.createElement('div');
      userElement.className = 'user';

      const profilePic = document.createElement('img');
      profilePic.className = 'profile-pic';
      profilePic.src = user.profilePic;
      profilePic.alt = user.name;

      const userContainer = document.createElement('div');
      userContainer.className = 'user-container';

      const userData = document.createElement('div');
      userData.className = 'user-data';

      const userName = document.createElement('div');
      userName.className = 'name';
      userName.textContent = user.name;

      const messagesCount = document.createElement('div');
      messagesCount.className = 'messages';
      messagesCount.textContent = user.messages;

      userData.appendChild(userName);
      userData.appendChild(messagesCount);

      const userNumbers = document.createElement('div');
      userNumbers.className = 'user-numbers';

      const barContainer = document.createElement('div');
      barContainer.className = 'bar';

      const barFill = document.createElement('div');
      barFill.className = 'fill';
      barFill.style.width = (user.messages / maxMessages) * 100 + '%';

      barContainer.appendChild(barFill);
      userNumbers.appendChild(barContainer);

      userContainer.appendChild(userData);
      userContainer.appendChild(userNumbers);

      userElement.appendChild(profilePic);
      userElement.appendChild(userContainer);

      usersList.appendChild(userElement);
    });
  })
  .catch(error => console.error('Error loading JSON data:', error));
