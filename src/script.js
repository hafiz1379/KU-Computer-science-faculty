const playerData = [
    {
      img: '../images/Economic.jpg',
      name: 'Economic faculty',
      title: 'Kabul University',
      resume: 'The Economic Faculty of Kabul University offers comprehensive programs in economics, equipping students with knowledge and skills to understand and analyze economic systems, contribute to development, and pursue successful careers in various sectors.',
    },
    {
      img: '../images/Bio and Phy.jpg',
      name: 'Biology and Physics faculty',
      title: 'Kabul University',
      resume: 'The Biology and Physics Faculties at Kabul University offer specialized programs in their respective fields, providing students with a strong foundation of knowledge and practical skills to explore the intricacies of life sciences and physical phenomena, fostering scientific inquiry and discovery.',
    },
    {
      img: '../images/Chemsitry.jpg',
      name: 'Chemistry faculty',
      title: 'Kabul University',
      resume: 'The Chemistry Faculty at Kabul University offers comprehensive programs in chemistry, emphasizing theoretical and practical aspects of the discipline. Students gain knowledge and skills in various branches of chemistry, contributing to scientific research and practical applications in industries and academia.',
    },
  
    {
      img: '../images/Jounalism.jpg',
      name: 'Journalism faculty',
      title: 'Kabul University',
      resume: 'The Journalism Faculty at Kabul University offers rigorous programs that prepare students for careers in journalism, media, and communication. Students acquire skills in news reporting, media ethics, and storytelling, fostering critical thinking and responsible journalism practices.',
    },
  
    {
      img: '../images/Pharmacy.jpg',
      name: 'Pharmacy faculty',
      title: 'Kabul University ',
      resume: 'The Pharmacy Faculty at Kabul University provides comprehensive programs in pharmaceutical sciences, training students in drug development, healthcare management, and patient care. Graduates contribute to the healthcare sector, ensuring safe and effective medication use for the community.',
    },
  
    {
      img: '../images/Turkish.jpg',
      name: 'Turkish langauge faculty',
      title: 'Kabul University',
      resume: 'The Turkish Language Faculty at Kabul University offers specialized programs in Turkish language and culture, equipping students with language proficiency and cultural understanding for communication, academic pursuits, and cultural exchange between Afghanistan and Turkey.',
    },
  ];
  
  const playerGrid = document.querySelectorAll('.player-section-grid-item');
  
  function playerConstructor(element, counter) {
    element.forEach((author) => {
      author.innerHTML = ` 
        <div class= 'player-section-grid-item-imgholder'>
          <img class='player-chess' src='../images/chess.jpg'>
          <div class='player-img' style="background-image: url('${playerData[counter].img}');"></div>
        </div>
        <div class= 'player-section-grid-item-divtext'>
          <h3 class= 'player-section-grid-item-divtext-h3'>${playerData[counter].name}</h3>
          <span class= 'player-section-grid-item-divtext-span'>${playerData[counter].title}</span>
          <hr class='player-section-grid-item-divtext-hr'>
          <span class= 'player-section-grid-item-divtext-span2'>${playerData[counter].resume}</span>
        </div> 
        `;
      counter += 1;
    });
  }
  
  playerConstructor(playerGrid, 0);
  
  const modal = document.getElementById('modal');
  const closeBtn = document.querySelector('.modal-close');
  const hamburBtn = document.querySelector('.menu-h');
  const ilMenu = document.querySelectorAll('.il-modal');
  
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    hamburBtn.style.display = 'block';
  });
  
  hamburBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    hamburBtn.style.display = 'none';
    closeBtn.style.display = 'block';
  });
  
  ilMenu.forEach((il) => {
    il.addEventListener('click', () => {
      modal.classList.remove('show');
    });
  });
  
  const showLessArrow = document.querySelector('.show-less-arrow');
  const showMoreArrow = document.querySelector('.show-more-arrow');
  const showLessBtn = document.querySelector('.show-less');
  const showMoreBtn = document.querySelector('.show-more');
  const toHideShow = document.querySelectorAll('.tohide');
  const playerSection = document.getElementById('player-section');
  
  showLessArrow.addEventListener('click', () => {
    showMoreBtn.classList.remove('hide');
    showLessBtn.classList.add('hide');
    toHideShow.forEach((element) => {
      element.classList.add('hide');
    });
    playerSection.style.height = '600px';
  });
  
  showMoreArrow.addEventListener('click', () => {
    showLessBtn.classList.remove('hide');
    showMoreBtn.classList.add('hide');
    toHideShow.forEach((element) => {
      element.classList.remove('hide');
    });
    playerSection.style.height = '1900px';
  });
  
  window.addEventListener('load', () => {
    if (window.matchMedia('(max-width: 768px)').matches) {
      showMoreBtn.classList.remove('hide');
      showLessBtn.classList.add('hide');
      toHideShow.forEach((element) => {
        element.classList.add('hide');
      });
      playerSection.style.height = '600px';
    }
  });