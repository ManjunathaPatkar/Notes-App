// const square=function (x){
//     return x*x;
// }
// const square=(x)=>{
//     return x*x
// }
// const square=(x)=>x*x
// console.log(square(3590))
// const event={
//     name:'birthday party',
//     printGuestlist:function(){
//         console.log('guest list for bday partiess',this.name)
//     }
// }
// event.printGuestlist()
const event = {
    name: 'birthday party',
    printGuestlist() {
        console.log('guest list for bday partiess', this.name)
    }
}
event.printGuestlist()