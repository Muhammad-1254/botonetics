

export const variants = [
    {
     //2nd sqaure
     first: {
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

// 3rd 
second: {
 initial: { top: 0, y: 0 },
 animate: {
    rotateY:180,
    x:"-20%",
    
 
 },

},

     //  4th
     third: {
       initial: { top: 0, x: 0, y: 0 },
       animate: {
        rotateY:180,
       x:"20%",
    

    
       },

      
     },

     

   
   },

// 2nd flip side 

   {
    //2nd sqaure
    first: {
      initial: {

        y: '50%',
        rotate: 180,
       
      },
      animate: {
        x: 0,
        y: 0,
        top: 0,
        rotate: 0

        
        
      },
    
    },

// 3rd 
second: {
initial: {
    rotateY:180,
    x:"-20%",
     
     },

animate: {
  x:0,
  rotateY:0,
   top: 0, y: 0
},

},

    //  4th
    third: {
      initial: { 
        rotateY:180,
        x:"20%",
        },
      animate: {
        rotateY:0,
      
      top: 0, x: 0, y: 0 
   
      },

     
    },

    

  
  },

 ]