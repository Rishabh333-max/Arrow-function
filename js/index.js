//********ARROW FUNCTION********

// Normal function
// function type(val){
//     console.log("prototype",val)
// }
// type(2)


// Arrow function
// const type=(val)=>{
//     console.log("Datatype",val)
// }
// type(2)


// var name1=(val)=>{
//     console.log("name",val)
// }
// name1("Rishabh")



// Arrow function using with map------>
// let arr=["Rishabh","Ritik","Ambesh"];
// let arrfun=arr.map((item)=>{
//        return item+"1"+"1";
// })
// console.log(arrfun)


// let arr=["Rishabh","Prakhar","Ambesh","Ritik"];
// let arr2=arr.map((item)=>{
//          if(item=="Rishabh"){
//              return item
//          }       
// })
// console.log(arr2)

// Arrow function using with Filter---------->
// let arr=["Rishabh","Ritik","Ambesh"];
// let arrfun=arr.filter((item)=>{
//        if(item=="Rishabh"){
//            return item;
//        }
// })
// console.log(arrfun)


// let arr=["Toodle","Tinder","wechat","Pepper"]
// let newarr=arr.filter((item)=>{
//     if(item=="Tinder"){
//         return item
//     }
// })
// console.log(newarr);


// let roman=[45,67,89,35,26,42,68,69];
// let john=roman.filter((item)=>{
//     if(item>45){
//         return item;
//     }
// })
// console.log(john)


// Agar THIS FUNCTION k ander h or FUNCTION OBJECT k ander h to THIS OBJECT ander ki value print krega hmesha
// Aur jab hum THIS use krte h Arrow function k ander to THIS function apna scope khodeta h
// Arrow function ka use kr usk ander THIS(eg.this.Git)ko call nhi krskte
// runApp={
//     firstName:"Rishabh",
//     init:function(){
//         this.run()
//     },
//     run:function(){
//         console.log(this.firstName);
//     },
//     test:()=>{
//         console.log(this.firstName);
//     },
//     check:function(){
//         this.test()
//     },
//     hello:function(){
//         this.test()
//     }
// };

// var firstName="Singh"
// runApp.init();
// runApp.test();
// runApp.check();
// runApp.hello();


// var names={
//     surname:"Pratap",
//     goku:function(){
//         console.log(this.surname)
//     },
//     jimmy:()=>{
//         console.log(this.surname)
//     },
//     neutron:function(){
//         this.jimmy()
//     },
//     ninja:function(){
//         this.jimmy()
//     },
//     hattori:function(){
//         this.ninja()
//     }

// }
// var surname="Singh"
// names.goku(); 
// names.jimmy();
// names.ninja();
// names.neutron();
// names.hattori();


// var manager={
//     managerName:"Rishabh",
//     Git:function(){
//         console.log(this.managerName);
//     },
//     PU:function(){
//         console.log(this.managerName);
//     },
//     JECRC:()=>{
//         console.log(this.managerName)
//     },
//     Amity:function(){
//         this.JECRC()
//     },
//     GLA:function(){
//        this.PU()
//     },
//     AK:function(){
//         this.Git()
//     }
// }
// var managerName="Ambesh";
// managerName="Khushi"
// manager.Git();
// manager.PU();
// manager.JECRC();
// manager.AK();
// manager.Amity();
// manager.GLA();