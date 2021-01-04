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
    guestlist:['manja','ram','rahim','seeta'],
    printGuestlist() {
        console.log('guest list for bday partiess', this.name)
        this.guestlist.forEach((guest)=>{
            console.log(guest,'is attending for',this.name)
        })
    }
}
event.printGuestlist()