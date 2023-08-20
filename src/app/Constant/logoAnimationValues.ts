export const variants = [
    {
      first:{
        variants:{

          initial:{},
          animate:{},
        },
        transition:{
          delay:0,
          duration:1
        }
      },
      //2nd sqaure
      second: {
        variants:{

          initial: {
            x: 0,
            y: 0,
            top: 0,
          },
          animate: {
            y: '50%',
            rotate: 180,
          },
        },
        transition:{
          delay:1,
          duration:1
        }
      },
  
      // 3rd
      third: {
        variants:{

          initial: { top: 0, y: 0 },
          animate: {
            rotateY: 180,
            x: '-20%',
          },
        },
         transition:{
          delay:2,
          duration:1
        }
      },
  
      //  4th
      fourth: {
        variants:{

          initial: { top: 0, x: 0, y: 0 },
          animate: {
            rotateY: 180,
            x: '20%',

        }
          },
           transition:{
          delay:2,
          duration:1
        },
      },
    },
  
    // 2nd flip side
  
    {
      first:{
        variants:{

          initial:{},
          animate:{},
        },
         transition:{
          // delay:3,
          // duration:1
        }
      },
      //2nd sqaure
      second: {
        variants:{

          initial: {
            y: '50%',
            rotate: 180,
          },
          animate: {
            x: 0,
            y: 0,
            top: 0,
            rotate: 0,
          },
        },
         transition:{
          delay:2,
          duration:1
        }
      },
  
      // 3rd
      third: {
        variants:{

          initial: {
            rotateY: 180,
            x: '-20%',
          },
    
          animate: {
            x: 0,
            rotateY: 0,
            top: 0,
            y: 0,
          },
        },
         transition:{
          delay:1,
          duration:1
        }
      },
  
      //  4th
      fourth: {
        variants:{

          initial: {
            rotateY: 180,
            x: '20%',
          },
          animate: {
            rotateY: 0,
    
            top: 0,
            x: 0,
            y: 0,
          },
        },
         transition:{
          delay:1,
          duration:1
        }
        },

    },  
    
  ];
  


