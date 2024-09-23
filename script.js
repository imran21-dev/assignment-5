// scrolling function here--------------------

window.onscroll = function () {
   const header = document.getElementById('header');
   const btnSection = document.getElementById('btnSection');
        if(document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50){
            header.classList.remove('bg-[#F9F7F3]')
            btnSection.classList.remove('bg-white')
            
        }
        else{
            header.classList.add('bg-[#F9F7F3]')
            btnSection.classList.add('bg-white')

        }
 
}

// donation & history toggle function here-------------

function donateHistoryToggle(id) {
    document.getElementById('donationSection').classList.add('hidden')
    document.getElementById('historySection').classList.add('hidden')

    document.getElementById(id).classList.remove('hidden')
}

function btnColor(btnId) {
  document.getElementById('donationBtn').className = "btn bg-white border-[#111111]/10 text-lg font-semibold px-8"
  document.getElementById('historyBtn').className = "btn bg-white border-[#111111]/10 text-lg font-semibold px-8"

  document.getElementById(btnId).className = "btn bg-[#b4f461] text-lg font-semibold px-8"
   
}



document.getElementById('historyBtn').addEventListener('click', function () {
    
    donateHistoryToggle('historySection')
     btnColor('historyBtn')
    document.getElementById('footer')
     
})
document.getElementById('donationBtn').addEventListener('click', function () {
    
    donateHistoryToggle('donationSection')
     btnColor('donationBtn')

})

// calculation function---------

const historyUl = document.getElementById('historyUl');

// cart 1 function--------------
document.getElementById('cartOneBtn').addEventListener('click', function () {
const date = new Date().toLocaleString();

    const accountBalance = document.getElementById('accountBalance').innerText;
    const title = document.getElementById('cartOneTitle').innerText;
    let cartOnedonatedBalance = document.getElementById('cartOnedonatedBalance').innerText;
    let cartOneInput = document.getElementById('cartOneInput').value;

    const accountBalanceNumber = parseFloat(accountBalance);
    const cartOnedonatedBalanceNumber = parseFloat(cartOnedonatedBalance);
   
    const cartOneInputNumber = parseFloat(cartOneInput);
    
    if (!isNaN(cartOneInputNumber)) {
        if (cartOneInputNumber < 0) {
            alert('Invalid donation amount!')
    document.getElementById('cartOneInput').value = ""

            return
        }
        const newDonatedBalance = cartOnedonatedBalanceNumber + cartOneInputNumber;
        if (cartOneInputNumber <= accountBalanceNumber) {
            const newAccountBalance = accountBalanceNumber - cartOneInputNumber;
            document.getElementById('accountBalance').innerText = newAccountBalance
             my_modal_1.showModal()

             const li = document.createElement('li');
                li.innerHTML = `
                  <li class="border p-7 rounded-xl">
                <h2 class="text-xl font-bold pb-3">${cartOneInputNumber} Taka is ${title}</h2>
                <h6 class="text-base font-light text-[#1111]/70">Date : ${date}</h6>
            </li>
                `
                historyUl.appendChild(li)
            
        }
        else{
            alert('Invalid donation amount!')
            return
        }
        document.getElementById('cartOnedonatedBalance').innerText = newDonatedBalance
    }
    else{
        alert('Invalid donation amount!')

    
    }
    
    document.getElementById('cartOneInput').value = ""
 
})


// cart 2 function--------------


document.getElementById('cartTwoBtn').addEventListener('click', function () {
const date = new Date().toLocaleString();

    const accountBalance = document.getElementById('accountBalance').innerText;
    const title = document.getElementById('cartTwoTitle').innerText;
    let cartOnedonatedBalance = document.getElementById('cartTwodonatedBalance').innerText;
    let cartOneInput = document.getElementById('cartTwoInput').value;

    const accountBalanceNumber = parseFloat(accountBalance);
    const cartOnedonatedBalanceNumber = parseFloat(cartOnedonatedBalance);
   
    const cartOneInputNumber = parseFloat(cartOneInput);
    
    if (!isNaN(cartOneInputNumber)) {
        if (cartOneInputNumber < 0) {
            alert('Invalid donation amount!')
    document.getElementById('cartTwoInput').value = ""

            return
        }
        const newDonatedBalance = cartOnedonatedBalanceNumber + cartOneInputNumber;
        if (cartOneInputNumber <= accountBalanceNumber) {
            const newAccountBalance = accountBalanceNumber - cartOneInputNumber;
            document.getElementById('accountBalance').innerText = newAccountBalance
             my_modal_1.showModal()

             const li = document.createElement('li');
                li.innerHTML = `
                  <li class="border p-7 rounded-xl">
                <h2 class="text-xl font-bold pb-3">${cartOneInputNumber} Taka is ${title}</h2>
                <h6 class="text-base font-light text-[#1111]/70">Date : ${date}</h6>
            </li>
                `
                historyUl.appendChild(li)
            
        }
        else{
            alert('Invalid donation amount!')
            return
        }
        document.getElementById('cartTwodonatedBalance').innerText = newDonatedBalance
    }
    else{
        alert('Invalid donation amount!')

    
    }
    
    document.getElementById('cartTwoInput').value = ""

    
    
})

// cart 3 function--------------

document.getElementById('cartThreeBtn').addEventListener('click', function () {
const date = new Date().toLocaleString();

    const accountBalance = document.getElementById('accountBalance').innerText;
    const title = document.getElementById('cartThreeTitle').innerText;
    let cartOnedonatedBalance = document.getElementById('cartThreedonatedBalance').innerText;
    let cartOneInput = document.getElementById('cartThreeInput').value;

    const accountBalanceNumber = parseFloat(accountBalance);
    const cartOnedonatedBalanceNumber = parseFloat(cartOnedonatedBalance);
   
    const cartOneInputNumber = parseFloat(cartOneInput);
    
    if (!isNaN(cartOneInputNumber)) {
        if (cartOneInputNumber < 0) {
            alert('Invalid donation amount!')
    document.getElementById('cartThreeInput').value = ""

            return
        }
        const newDonatedBalance = cartOnedonatedBalanceNumber + cartOneInputNumber;
        if (cartOneInputNumber <= accountBalanceNumber) {
            const newAccountBalance = accountBalanceNumber - cartOneInputNumber;
            document.getElementById('accountBalance').innerText = newAccountBalance
             my_modal_1.showModal()

             const li = document.createElement('li');
                li.innerHTML = `
                  <li class="border p-7 rounded-xl">
                <h2 class="text-xl font-bold pb-3">${cartOneInputNumber} Taka is ${title}</h2>
                <h6 class="text-base font-light text-[#1111]/70">Date : ${date}</h6>
            </li>
                `
                historyUl.appendChild(li)
            
        }
        else{
            alert('Invalid donation amount!')
            return
        }
        document.getElementById('cartThreedonatedBalance').innerText = newDonatedBalance
    }
    else{
        alert('Invalid donation amount!')

    
    }
    
    document.getElementById('cartThreeInput').value = ""

    
    
})
