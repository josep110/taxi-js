
import './district.mjs';

class city{
    
    constuctor(args){
      console.log("!");
      genDistricts();
    }

    genDistricts(){
      
      console.log("!");

      let districts = {};

      let areapre = ['Gilling','Chat','Roch','Graves','Ash','Red','Green','Step'];
      let areasuf = [' Hill',' Town','gate','ford','ton'];
      let streetpre = ['Johnson','Cameron','May','Brown','Blair','Livingston','Disraeli','Pelham','Pitt','Gladstone','Elaine','Stanhope','Cromwell'];
      let streetsuf = [' Road',' Avenue', 'side', ' Lane',' Walk'];
    
      for (let i = 0;i < 9;i++){
        let name = areapre[Math.random()*areapre.length-1] + areasuf[Math.random()*areasuf.length-1];
        districts.push(new district(name, Math.random()*10000));
      }

      console.log("!");

    }

}

let x = new city();