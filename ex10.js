

        let num =48419;
        let digit=1;
        let str=num+"";
        let length=str.length;
        let newdigit=num%10;
       
        for(let i=0;i<length;i++){

                   if(newdigit===digit){

                        console.log(newdigit);
                        break;
                        
                   }
                        
                      num=(num-newdigit)/10;
                      newdigit=num%10;
                       
                    
                   
        }
      