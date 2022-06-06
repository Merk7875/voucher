let objData=JSON.parse(localStorage.getItem("user"))
let amount= +(objData.amount);

let x=document.getElementById('wallet_balance').innerText=amount;
document.getElementById('navbar')


let data= JSON.parse(localStorage.getItem("purchase"))
let img= document.createElement('img')
img.src=data.image;



let p= document.createElement("h3")
  p.innerText=data.name;
  let price=document.createElement('p')
  price.innerText=data.price;
  let box= document.createElement("div")
  box.append(img,p,price)
  document.getElementById('purchased_vouchers').append(box)


  if(amount>price) {
      alert("Hurray! purchase successful")
  }
  else {
      alert("Sorry! insufficient balance")
      amount= amount-price;
      localStorage.setItem("user",JSON.stringify(amount))
  }

//console.log(p.innerText)
