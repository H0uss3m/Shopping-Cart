//show cart 

(function(){
    const cartInfo=document.getElementById('cart-info');
    const cart=document.getElementById('cart');

    cartInfo.addEventListener('click',function(){
        cart.classList.toggle('show-cart');
});
})();

//add items to cart 
(function(){
    const addBtn=document.querySelectorAll('.store-add-btn');
    addBtn.forEach(function(btn){
    btn.addEventListener('click',function(event){
    const item={};
    //get the name of the item
    let name=event.target.previousElementSibling.previousElementSibling.textContent;
    //console.log(name)
    item.name=name;
    //get the price of the item
    let price=event.target.previousElementSibling.textContent;
    //console.log(price)
    let finalPrice=price.slice(1).trim();
    //console.log(finalPrice)
    item.price=finalPrice;
//create the cart 
    const cartItem=document.createElement('div');
    cartItem.classList.add('cart-item', 'd-flex', 'justify-content-between', 'text-capitalize', 'my-3');
    cartItem.innerHTML =`
            <div class="cart-item-text">
                <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
                <span>$</span>
                <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
            </div>
            `
    //select the cart and add items in it 
    const cart=document.getElementById('cart');
    const total=document.querySelector('.cart-total-container');
    cart.insertBefore(cartItem,total);
    alert('item added');
    showTotals();
    });
});
// show totals Money
function showTotals(){
 const total =[];
 const items=document.querySelectorAll('.cart-item-price');

 items.forEach(function(item){
total.push(parseFloat(item.textContent));
 
})
// console.log(total);
const totalMoney = total.reduce(function(total,item){
    total+=item;
    return total;
},0)
// console.log(totalMoney);
const finalMoney = totalMoney.toFixed(2);
// console.log(finalMoney);
document.getElementById('cart-total').textContent = finalMoney;
document.querySelector('.item-total').textContent = finalMoney;
document.getElementById('item-count').textContent = total.length;
}
})();