window.onload = () => {
  const hamburger = document.querySelector('.menubar');
  hamburger.addEventListener('click', () => {
    const menu = document.querySelector('.mobile-menu');
    menu.style.display = 'block';
  });

  const closeBtn = document.querySelector('.closeBtn');
  closeMobileMenu(closeBtn);

  const item = document.querySelector('.menuPopUp');
  closeMobileMenu(item);
  
  const project_1=document.querySelector('.projectBtn');
  openPro(project_1,0)
  /*project_1.addEventListener('click',()=>{
    const container = document.querySelector('.cont');
    container.classList.toggle('container');
    const popUp=document.querySelector('.ProjectPopUp');
    Populate(0);
    popUp.style.display = 'flex';
  });*/

  /**Open the mobile objects */
  const project_2=document.querySelector('.btnProject2-1');
  openPro(project_2,1);
  

  const project_3=document.querySelector('.btnProject2-2');
  openPro(project_3,2);

  const project_4=document.querySelector('.btnProject2-3');
  openPro(project_4,3);
  

  const project_5=document.querySelector('.btnProject2-4');
  openPro(project_5,4);
  

  const project_6=document.querySelector('.btnProject2-5');
  openPro(project_6,5);


  const project_7=document.querySelector('.btnProject2-6');
  openPro(project_7,6);
  

  function openPro(project,id) {
    project.addEventListener('click', () =>{
      const container = document.querySelector('.cont');
      container.classList.toggle('container');
      const popUp=document.querySelector('.ProjectPopUp');
      Populate(id,popUp);      
    });

  }



  /**Close for project */
  const close_pro=document.querySelector('.closebtn');
  close(close_pro);

  //Closer For Project
  function close(theClose){
    theClose.addEventListener('click',()=>{
      const container = document.querySelector('.cont');
      container.classList.toggle('container');
      const popUp=document.querySelector('.ProjectPopUp');
      popUp.style.display = 'none';
    });
    
  }

  //Closer for the mobile menu
  function closeMobileMenu(closer){
    closer.addEventListener('click', () => {
      const menu = document.querySelector('.mobile-menu');
      menu.style.display = 'none';
    });
  }
 

  /** *Array Storing the project information mobile* */
  const projects = [
    {
      id: 1,
      name: 'Multi Post Stories',
      langs: ['html', 'Bootstrap', 'Ruby on rails'],
      Image: 'images/Snap.png',
      description:
      "Lorem Ipsum is simply dummy text of the printing and "+ 
      "typesetting industry. Lorem Ipsum " +
      "has been the industry's standard "+ 
      "dummy text ever since the 1500s, " +
      " when an unknown printer took a galley of " +
      " type and scrambled it to make a type specimen book. "+
       "It has survived not only five centuries, " +
       " but also the leap into electronic typesetting, "+
       " remaining essent",
      
      links: ["https://bonkegcobo.github.io/PortfolioProject/",
      "https://github.com/BonkeGcobo/PortfolioProject"
      ]
      
    },
    {
      id:2,
      name: 'Multi Post Stories',
      langs: ['html', 'Bootstrap', 'Ruby on rails'],
      Image: 'images/Snap.png',
      description:
      "Lorem Ipsum is simply dummy text of the printing and "+ 
      "typesetting industry. Lorem Ipsum " +
      "has been the industry's standard "+ 
      "dummy text ever since the 1500s, " +
      " when an unknown printer took a galley of " +
      " type and scrambled it to make a type specimen book. "+
       "It has survived not only five centuries, " +
       " but also the leap into electronic typesetting, "+
       " remaining essent",
      
      links: ["https://bonkegcobo.github.io/PortfolioProject/",
      "https://github.com/BonkeGcobo/PortfolioProject"
      ]
      
    },
    {
      id: 3,
      name: 'Multi Post Stories',
      langs: ['html', 'Bootstrap', 'Ruby on rails'],
      Image: 'images/Snap.png',
      description:
      "Lorem Ipsum is simply dummy text of the printing and "+ 
      "typesetting industry. Lorem Ipsum " +
      "has been the industry's standard "+ 
      "dummy text ever since the 1500s, " +
      " when an unknown printer took a galley of " +
      " type and scrambled it to make a type specimen book. "+
       "It has survived not only five centuries, " +
       " but also the leap into electronic typesetting, "+
       " remaining essent",
      
      links: ["https://bonkegcobo.github.io/PortfolioProject/",
      "https://github.com/BonkeGcobo/PortfolioProject"
      ]
      
    },
    {
      id:4,
      name: 'Multi Post Stories',
      langs: ['html', 'Bootstrap', 'Ruby on rails'],
      Image: 'images/Snap.png',
      description:
      "Lorem Ipsum is simply dummy text of the printing and "+ 
      "typesetting industry. Lorem Ipsum " +
      "has been the industry's standard "+ 
      "dummy text ever since the 1500s, " +
      " when an unknown printer took a galley of " +
      " type and scrambled it to make a type specimen book. "+
       "It has survived not only five centuries, " +
       " but also the leap into electronic typesetting, "+
       " remaining essent",
      
      links: ["https://bonkegcobo.github.io/PortfolioProject/",
      "https://github.com/BonkeGcobo/PortfolioProject"
      ]
      
    },
    {
      id:5,
      name: 'Multi Post Stories',
      langs: ['html', 'Bootstrap', 'Ruby on rails'],
      Image: 'images/Snap.png',
      description:
      "Lorem Ipsum is simply dummy text of the printing and "+ 
      "typesetting industry. Lorem Ipsum " +
      "has been the industry's standard "+ 
      "dummy text ever since the 1500s, " +
      " when an unknown printer took a galley of " +
      " type and scrambled it to make a type specimen book. "+
       "It has survived not only five centuries, " +
       " but also the leap into electronic typesetting, "+
       " remaining essent",
      
      links: ["https://bonkegcobo.github.io/PortfolioProject/",
      "https://github.com/BonkeGcobo/PortfolioProject"
      ]
      
    },
    {
      id:6,
      name: 'Multi Post Stories',
      langs: ['html', 'Bootstrap', 'Ruby on rails'],
      Image: 'images/Snap.png',
      description:
      "Lorem Ipsum is simply dummy text of the printing and "+ 
      "typesetting industry. Lorem Ipsum " +
      "has been the industry's standard "+ 
      "dummy text ever since the 1500s, " +
      " when an unknown printer took a galley of " +
      " type and scrambled it to make a type specimen book. "+
       "It has survived not only five centuries, " +
       " but also the leap into electronic typesetting, "+
       " remaining essent",
      
      links: ["https://bonkegcobo.github.io/PortfolioProject/",
      "https://github.com/BonkeGcobo/PortfolioProject"
      ]
    },
    {
      id:7,
      name: 'Multi Post Stories',
      langs: ['html', 'Bootstrap', 'Ruby on rails'],
      Image: 'images/Snap.png',
      description:
      "Lorem Ipsum is simply dummy text of the printing and "+ 
      "typesetting industry. Lorem Ipsum " +
      "has been the industry's standard "+ 
      "dummy text ever since the 1500s, " +
      " when an unknown printer took a galley of " +
      " type and scrambled it to make a type specimen book. "+
       "It has survived not only five centuries, " +
       " but also the leap into electronic typesetting, "+
       " remaining essent",
      
      links: ["https://bonkegcobo.github.io/PortfolioProject/",
      "https://github.com/BonkeGcobo/PortfolioProject"
      ]
      
    },
  ];


  /**Populating the Cards with javaScript */
  function Populate(id,popUp){
    document.querySelector(".proHeading").innerHTML = projects[id].name;
    document.querySelector('.lan-html').innerHTML = projects[id].langs[0];
    document.querySelector('.lan-boot').innerHTML = projects[id].langs[1];
    document.querySelector('.lan-rails').innerHTML = projects[id].langs[2];
    document.querySelector('.img-sec').src=projects[id].Image;
    document.querySelector('.lorem').innerHTML= projects[id].description;
    document.querySelector('.source-link').href=projects[id].links[1];
    document.querySelector('.live-link').href=projects[id].links[0];
    popUp.style.display = 'flex';  
  }
};