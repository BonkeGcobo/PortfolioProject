window.onload = () => {
  const hamburger = document.querySelector('.menubar');
  hamburger.addEventListener('click', () => {
    const menu = document.querySelector('.mobile-menu');
    menu.style.display = 'block';
  });

  const projects = [
    {
      id: 1,
      name: 'Multi Post Stories',
      nameDesk: 'Keeping track of hundreds  of components website',
      langs1: 'html',
      langs2: 'Bootstrap',
      langs3: 'Ruby on rails',
      Image: 'images/Snap.png',
      imageDesk: 'images/Desktop-pop.svg',
      description:
      'Lorem Ipsum is simply dummy text of the printing and '
      + 'typesetting industry. Lorem Ipsum '
      + "has been the industry's standard "
      + 'dummy text ever since the 1500s, '
      + ' when an unknown printer took a galley of '
      + ' type and scrambled it to make a type specimen book. '
       + 'It has survived not only five centuries, '
       + ' but also the leap into electronic typesetting, '
       + ' remaining essent',

      links1: 'https://bonkegcobo.github.io/PortfolioProject/',
      links2: 'https://github.com/BonkeGcobo/PortfolioProject',
    },
    {
      id: 2,
      name: 'Multi Post Stories',
      langs1: 'html',
      langs2: 'Bootstrap',
      langs3: 'Ruby on rails',
      nameDesk: 'Keeping track of hundreds  of components website',
      Image: 'images/Snap.png',
      imageDesk: 'images/Desktop-pop.svg',
      description:
      'Lorem Ipsum is simply dummy text of the printing and '
      + 'typesetting industry. Lorem Ipsum '
      + "has been the industry's standard "
      + 'dummy text ever since the 1500s, '
      + ' when an unknown printer took a galley of '
      + ' type and scrambled it to make a type specimen book. '
       + 'It has survived not only five centuries, '
       + ' but also the leap into electronic typesetting, '
       + ' remaining essent',

      links1: 'https://bonkegcobo.github.io/PortfolioProject/',
      links2: 'https://github.com/BonkeGcobo/PortfolioProject',

    },
    {
      id: 3,
      name: 'Multi Post Stories',
      nameDesk: 'Keeping track of hundreds  of components website',
      imageDesk: 'images/Desktop-pop.svg',
      langs1: 'html',
      langs2: 'Bootstrap',
      langs3: 'Ruby on rails',
      Image: 'images/Snap.png',
      description:
      'Lorem Ipsum is simply dummy text of the printing and '
      + 'typesetting industry. Lorem Ipsum '
      + "has been the industry's standard "
      + 'dummy text ever since the 1500s, '
      + ' when an unknown printer took a galley of '
      + ' type and scrambled it to make a type specimen book. '
       + 'It has survived not only five centuries, '
       + ' but also the leap into electronic typesetting, '
       + ' remaining essent',

      links1: 'https://bonkegcobo.github.io/PortfolioProject/',
      links2: 'https://github.com/BonkeGcobo/PortfolioProject',

    },
    {
      id: 4,
      name: 'Multi Post Stories',
      langs1: 'html',
      langs2: 'Bootstrap',
      langs3: 'Ruby on rails',
      Image: 'images/Snap.png',
      nameDesk: 'Keeping track of hundreds  of components website',
      imageDesk: 'images/Desktop-pop.svg',
      description:
      'Lorem Ipsum is simply dummy text of the printing and '
      + 'typesetting industry. Lorem Ipsum '
      + "has been the industry's standard "
      + 'dummy text ever since the 1500s, '
      + ' when an unknown printer took a galley of '
      + ' type and scrambled it to make a type specimen book. '
       + 'It has survived not only five centuries, '
       + ' but also the leap into electronic typesetting, '
       + ' remaining essent',

      links1: 'https://bonkegcobo.github.io/PortfolioProject/',
      links2: 'https://github.com/BonkeGcobo/PortfolioProject',
    },
    {
      id: 5,
      name: 'Multi Post Stories',
      langs1: 'html',
      langs2: 'Bootstrap',
      langs3: 'Ruby on rails',
      Image: 'images/Snap.png',
      nameDesk: 'Keeping track of hundreds  of components website',
      imageDesk: 'images/Desktop-pop.svg',
      description:
      'Lorem Ipsum is simply dummy text of the printing and '
      + 'typesetting industry. Lorem Ipsum '
      + "has been the industry's standard "
      + 'dummy text ever since the 1500s, '
      + ' when an unknown printer took a galley of '
      + ' type and scrambled it to make a type specimen book. '
       + 'It has survived not only five centuries, '
       + ' but also the leap into electronic typesetting, '
       + ' remaining essent',

      links1: 'https://bonkegcobo.github.io/PortfolioProject/',
      links2: 'https://github.com/BonkeGcobo/PortfolioProject',

    },
    {
      id: 6,
      name: 'Multi Post Stories',
      langs1: 'html',
      langs2: 'Bootstrap',
      langs3: 'Ruby on rails',
      Image: 'images/Snap.png',
      nameDesk: 'Keeping track of hundreds  of components website',
      imageDesk: 'images/Desktop-pop.svg',
      description:
      'Lorem Ipsum is simply dummy text of the printing and '
      + 'typesetting industry. Lorem Ipsum '
      + "has been the industry's standard "
      + 'dummy text ever since the 1500s, '
      + ' when an unknown printer took a galley of '
      + ' type and scrambled it to make a type specimen book. '
       + 'It has survived not only five centuries, '
       + ' but also the leap into electronic typesetting, '
       + ' remaining essent',

      links1: 'https://bonkegcobo.github.io/PortfolioProject/',
      links2: 'https://github.com/BonkeGcobo/PortfolioProject',
    },
    {
      id: 7,
      name: 'Multi Post Stories',
      nameDesk: 'Keeping track of hundreds  of components website',
      imageDesk: 'images/Desktop-pop.svg',
      langs1: 'html',
      langs2: 'Bootstrap',
      langs3: 'Ruby on rails',
      Image: 'images/Snap.png',
      description:
      'Lorem Ipsum is simply dummy text of the printing and '
      + 'typesetting industry. Lorem Ipsum '
      + "has been the industry's standard "
      + 'dummy text ever since the 1500s, '
      + ' when an unknown printer took a galley of '
      + ' type and scrambled it to make a type specimen book. '
       + 'It has survived not only five centuries, '
       + ' but also the leap into electronic typesetting, '
       + ' remaining essent',

      links1: 'https://bonkegcobo.github.io/PortfolioProject/',
      links2: 'https://github.com/BonkeGcobo/PortfolioProject',

    },
  ];
  /** Populating the Cards with javaScript */
  function Populate(id, popUp) {
    document.querySelector('.proHeading').innerHTML = projects[id].name;
    document.querySelector('.lan-html').innerHTML = projects[id].langs1;
    document.querySelector('.lan-boot').innerHTML = projects[id].langs2;
    document.querySelector('.lan-rails').innerHTML = projects[id].langs3;
    document.querySelector('.img-sec').src = projects[id].Image;
    document.querySelector('.lorem').innerHTML = projects[id].description;
    document.querySelector('.source-link').href = projects[id].links1;
    document.querySelector('.live-link').href = projects[id].links2;
    popUp.style.display = 'flex';
  }

  function PopulateDesk(id, popUp) {
    document.querySelector('.popDeskHeading').innerHTML = projects[id].nameDesk;
    document.querySelector('.lan-html-desk').innerHTML = projects[id].langs1;
    document.querySelector('.lan-boot-desk').innerHTML = projects[id].langs2;
    document.querySelector('.lan-rails-desk').innerHTML = projects[id].langs3;
    document.querySelector('.desk-image').src = projects[id].imageDesk;
    document.querySelector('.desk-lory').innerHTML = projects[id].description;
    document.querySelector('.source-link-desk').href = projects[id].links1;
    document.querySelector('.live-link-desk').href = projects[id].links2;

    popUp.style.display = 'flex';
  }

  function openPro(project, id) {
    project.addEventListener('click', () => {
      const container = document.querySelector('.cont');
      container.classList.toggle('container');
      const popUp = document.querySelector('.ProjectPopUp');
      Populate(id, popUp);
    });
  }

  function desk(project, id) {
    project.addEventListener('click', () => {
      const container = document.querySelector('.cont');
      container.classList.toggle('container');
      const popUp = document.querySelector('.DeskPop');
      PopulateDesk(id, popUp);
    });
  }

  function close(theClose) {
    theClose.addEventListener('click', () => {
      const container = document.querySelector('.cont');
      container.classList.toggle('container');
      const popUp = document.querySelector('.ProjectPopUp');
      popUp.style.display = 'none';
    });
  }

  function deskClose(arg) {
    arg.addEventListener('click', () => {
      const container = document.querySelector('.cont');
      container.classList.toggle('container');
      const desk = document.querySelector('.DeskPop');
      desk.style.display = 'none';
    });
  }

  // Closer for the mobile menu
  function closeMobileMenu(closer) {
    closer.addEventListener('click', () => {
      const menu = document.querySelector('.mobile-menu');
      menu.style.display = 'none';
    });
  }

  const closeBtn = document.querySelector('.closeBtn');
  closeMobileMenu(closeBtn);

  const item = document.querySelector('.menuPopUp');
  closeMobileMenu(item);

  const project1 = document.querySelector('.projectBtn');
  openPro(project1, 0);
  /* project_1.addEventListener('click',()=>{
    const container = document.querySelector('.cont');
    container.classList.toggle('container');
    const popUp=document.querySelector('.ProjectPopUp');
    Populate(0);
    popUp.style.display = 'flex';
  }); */

  /** Open the mobile objects */
  const project2 = document.querySelector('.btnProject2-1');
  openPro(project2, 1);

  const project3 = document.querySelector('.btnProject2-2');
  openPro(project3, 2);

  const project4 = document.querySelector('.btnProject2-3');
  openPro(project4, 3);

  const project5 = document.querySelector('.btnProject2-4');
  openPro(project5, 4);

  const project6 = document.querySelector('.btnProject2-5');
  openPro(project6, 5);

  const project7 = document.querySelector('.btnProject2-6');
  openPro(project7, 6);

  /** Open desktop objects */
  const deskPro = document.querySelector('.desk-btn-1');
  desk(deskPro, 0);

  const deskPro2 = document.querySelector('.deskBtn');
  desk(deskPro2, 1);

  const deskPro3 = document.querySelector('.DeskProj3');
  desk(deskPro3, 2);

  const deskPro4 = document.querySelector('.DeskProj4');
  desk(deskPro4, 3);

  const deskPro5 = document.querySelector('.DeskProj5');
  desk(deskPro5, 4);

  const deskPro6 = document.querySelector('.DeskProj6');
  desk(deskPro6, 5);

  const deskPro7 = document.querySelector('.DeskProj7');
  desk(deskPro7, 5);

  /** Close for project */
  const closePro = document.querySelector('.closebtn');
  close(closePro);

  // Closer For Project

  const closeDesk = document.querySelector('.close-desk');
  deskClose(closeDesk);

  /** *Array Storing the project information mobile* */
  const form = document.querySelector('.form');
  const formDesk = document.querySelector('.form-desk');
  const emailInput = document.getElementById('mail');
  const emailInputDesk = document.getElementById('mail-desk');
  const errMgs = document.querySelector('.error-mgs');
  const errMgsDesk = document.querySelector('.error-desk');

  form.addEventListener('submit', (e) => {
    if (emailInput.value === emailInput.value.toLowerCase()) {
      errMgs.textContent = '';
    } else {
      e.preventDefault();
      errMgs.textContent = 'Email should be in lower case!';
    }
  });

  formDesk.addEventListener('submit', (e) => {
    if (emailInputDesk.value === emailInputDesk.value.toLowerCase()) {
      errMgsDesk.textContent = '';
    } else {
      e.preventDefault();
      errMgsDesk.textContent = 'Email should be in lower case!';
    }
  });

};