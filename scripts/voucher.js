
let sum=0;
let objData=JSON.parse(localStorage.getItem("user"));
let amount = (objData.amount);
let total_amount=+(amount)




 if(amount!==undefined) {
 document.getElementById('wallet_balance').innerText=amount;
 }

 const url =`https://masai-vouchers-api.herokuapp.com/api/vouchers`
 getData(url)
 async function getData(url) {
   let res= await fetch(url)
   let data= await res.json();
   //console.log(data[0].vouchers)
   append(data[0].vouchers)
 }

 function append(vouchers) {
     vouchers.forEach((el)=>{
        let box= document.createElement("div")
        box.setAttribute("class","voucher")
        
        let img= document.createElement('img')
        img.src=el.image;
       
        let name= document.createElement('p')
        name.innerText=el.name;
        let price= document.createElement('p')
        price.innerText=el.price;
        let btn= document.createElement('button')
        btn.innerText="Buy"
        btn.setAttribute("class","buy_voucher")
        btn.addEventListener("click",function(){
            buyfunc(el)
        })
        box.append(img,name,price,btn)
        document.getElementById("voucher_list").append(box)

        
        
     })
 }

 function buyfunc(voucher) {
   let real_price=voucher.price;
   if(total_amount>real_price) {
     localStorage.setItem("purchase", JSON.stringify(voucher))
     alert("purchased sucessfull")
   }
   else {
     alert("sorry")
   }
 

 }
 
 