// let employee: { emi_id: number, emp_fname: string, emp_lname: string, emp_add: unknown, emp_sal: number }[] =
//     [
//         { "emi_id": 101, "emp_add": "123xyz", "emp_fname": "manoj", "emp_lname": "kumar", "emp_sal": 50000 },
//         { "emi_id": 102, "emp_add": "445xxz", "emp_fname": "anil", "emp_lname": "sah", "emp_sal": 30500 },
//         { "emi_id": 103, "emp_add": "225yyz", "emp_fname": "prakash", "emp_lname": "mishra", "emp_sal": 90700 },
//         { "emi_id": 104, "emp_add": "369xzz", "emp_fname": "ravi", "emp_lname": "yadav", "emp_sal": 78000 },
//         { "emi_id": 105, "emp_add": "923yyx", "emp_fname": "atul", "emp_lname": "anmol", "emp_sal": 36000 }
//     ];

//     // console.log(JSON.stringify(employee,null, 4));
//     // console.log(JSON.stringify(employee:emi_id));
//     var b:any=[];

//     employee.forEach(function(xyz){
//         b.push(xyz.emi_id);
//     });
//     // document.body.innerHTML = "<p><strong>" +   b + "</strong></p>";
//     console.log(b);

//     // document.getElementById("p1").innerHTML =

//     // console.log( JSON.stringify(b.emi_id));
//     // document.getElementById("p1").innerHTML= JSON.stringify(b.emi_id);
//     document.write( JSON.stringify(b[0]+b[1]))






// ###########################################Starting from new 
var a: any = prompt("enter youre indexnumber to serch emp");
const employeedata: any[] = [];
employeedata.push(["001", "hardip", "Sariya", "xyz", "10000000"], ["002", "savan", "Tilara", "mno", "2000000"], ["003", "ankit", "trivedi", "abc", "3000000"], ["004", "jaydev", "jagda", "efg", "4000000"], ["005", "vishal", "vadodariya", "hik", "5000000"]);



console.log(employeedata[a]);
function f1() {
   const input = document.getElementById("in1") as HTMLInputElement | null;
   const finalin: any = input?.value;
   console.log(finalin);
   if (finalin == 0o1) {
      document.open();
      document.write(employeedata[0])


   }
   else if (finalin == 0o2) {
      document.open();
      document.write(employeedata[1])


   }
   else if (finalin == 0o3) {
      document.open();
      document.write(employeedata[2])


   }
   else if (finalin == 0o4) {
      document.open();
      document.write(employeedata[3])


   }
   else if (finalin == 0o5) {
      document.open();
      document.write(employeedata[4])


   }
   else {
      alert("enter valid id, valid id is from [001 to 005]")
   }

}

function updatedata() {
   var a = `<form><input type="text" id="u1" placeholder="enter id" ><input type="text" id="u2" placeholder=" enter  fist name" ><input type="text" id="u3" placeholder=" enter  last name" ><input type="text" id="u4" placeholder=" enter  Address" ><input type="text" id="u5" placeholder=" enter  Salary" ></form><button onclick="insertdata1()">insart data</button>`
   const empupdata: unknown[] = [];
   const uin1 = document.getElementById("u1") as HTMLInputElement | null;
   const fin1: any = uin1?.value;
   const uin2 = document.getElementById("u2") as HTMLInputElement | null;
   const fin2: any = uin2?.value;
   const uin3 = document.getElementById("u3") as HTMLInputElement | null;
   const fin3: any = uin3?.value;
   const uin4 = document.getElementById("u4") as HTMLInputElement | null;
   const fin4: any = uin4?.value;

   empupdata.push(fin1, fin2, fin3, fin4)
   document.open();
   document.write(a);

   function insertdata1() {
      document.write(empupdata);
   }
      
} 

 
