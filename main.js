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

  function closeMobileMenu(closer){
    closer.addEventListener('click', () => {
      const menu = document.querySelector('.mobile-menu');
      console.log("Item");
      menu.style.display = 'none';
    });
  }
 

  /** *Array Storing the project information mobile* */
  const projects = [
    {
      id: 1,
      name: 'Multi Post Stories',
      langs: ['html', 'Bootstrap', 'Ruby on rails'],
      Image: 'images/SnapProject.svg',
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
      Image: 'images/SnapProject.svg',
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
      Image: 'images/SnapProject.svg',
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
      Image: 'images/SnapProject.svg',
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
      Image: 'images/SnapProject.svg',
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
      Image: 'images/SnapProject.svg',
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
      Image: 'images/SnapProject.svg',
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
};