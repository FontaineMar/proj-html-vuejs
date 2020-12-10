const myApp = new Vue({
  el:('#root'),
  data:{
    menu:['Courses','Zoom','Pages','Bundles','Courses Formats','Add Course','Demos'],
    courses:[
      {
        type:'Apache >',
        name:'Web coding and Apache Basic',
        time:'6 hours',
        cost:'free',
        poster:'img/photo-1461749280684-dccba630e2f6-272x161.jpeg'
      },
      {
        type:'Art >',
        name:'Real Things Art Painting by Jason Ni',
        time:'6 hours',
        cost:'$45',
        costBefore:'$59',
        poster:'img/cat_2-272x161.jpg'
      },
      {
        type:'Software Development >',
        name:'Basic of Masterstudy ',
        time:'',
        cost:'free',
        poster:'img/course-preview-272x161.jpg'
      },
      {
        type:'Eletroinic >',
        name:'How to be a DJ? Make Eletronic Music',
        time:'',
        cost:'$49',
        costBefore:'$59',
        poster:'img/photo-1496307042754-b4aa456c4a2d-272x161.jpeg'
      },
      {
        type:'Communication >',
        name:'Design Instruments for communication',
        time:'6 hours',
        cost:'',
        poster:'img/photo-1416339134316-0e91dc9ded92-scaled-272x161.jpeg'
      },
      {
        type:'Art >',
        name:'Make your Concept Right and Beautiful',
        time:'6 hours',
        cost:'$70',
        poster:'img/cathryn-lavery-67852-unsplash-272x161.jpg'
      },
      {
        type:'Bicycling >',
        name:'Road Bike Manual or How to Be a Champion.',
        time:'6 hours',
        cost:'$20',
        poster:'img/photo-1475452779376-caebfb988090-272x161.jpeg'
      },
      {
        type:'Documentary >',
        name:'How To Make Beautiful Landscapes photos?',
        time:'6 hours',
        cost:'$60',
        poster:'img/cristian-grecu-762012-unsplash-min-scaled-272x161.jpg'
      },
      {
        type:'Art >',
        name:"Let's paint Van Gogh's Starry Night",
        time:'6 hours',
        cost:'$79',
        poster:'img/landscape-272x161.jpg'
      },
      {
        type:'Nvidia >',
        name:'Nvdia and UE4 Technologies Practice',
        time:'',
        cost:'free',
        poster:'img/12345-1-272x161.png'
      },
      {
        type:'Art >',
        name:'How to Work with Lengendary RED camera?',
        time:'6 hours',
        cost:'free',
        poster:'img/jakob-owens-198234-unsplash-min-1-272x161.png'
      },
      {
        type:'Software Development >',
        name:'MasterStudy Mobile LMS App',
        time:'2 hours',
        cost:'free',
        poster:'img/promo_tf-272x161.jpg'
      },
    ],
    popularCourse:[
      {
        type:'Apache >',
        name:'Web coding and Apache Basic',
        time:'6 hours',
        cost:'free',
        poster:'img/photo-1461749280684-dccba630e2f6-272x161.jpeg'
      },
      {
        type:'Art >',
        name:'Real Things Art Painting by Jason Ni',
        time:'6 hours',
        cost:'$45',
        costBefore:'$59',
        poster:'img/cat_2-272x161.jpg'
      },
      {
        type:'Software Development >',
        name:'Basic of Masterstudy ',
        time:'',
        cost:'free',
        poster:'img/course-preview-272x161.jpg'
      },
      {
        type:'Eletroinic >',
        name:'How to be a DJ? Make Eletronic Music',
        time:'',
        cost:'$49',
        costBefore:'$59',
        poster:'img/photo-1496307042754-b4aa456c4a2d-272x161.jpeg'
      },
      {
        type:'Communication >',
        name:'Design Instruments for communication',
        time:'6 hours',
        cost:'',
        poster:'img/photo-1416339134316-0e91dc9ded92-scaled-272x161.jpeg'
      },
      {
        type:'Art >',
        name:'Make your Concept Right and Beautiful',
        time:'6 hours',
        cost:'$70',
        poster:'img/cathryn-lavery-67852-unsplash-272x161.jpg'
      },
    ],
    menuCourses:['All Categories','Art','Exercise','Material Design','Music','Photography','Software Development']
  }
})
