// hide when btn click
// common function 
let flag=1;
function hideById(id){
    document.getElementById('historyDiv').classList.add('hidden');
    document.getElementById('3-cards').classList.add('hidden');
    

    document.getElementById(id).classList.remove('hidden');
}

document.getElementById('donate-btn').addEventListener('click',function(){
    hideById('3-cards');
    // btn bg-color 
    document.getElementById('donate-btn').classList.add('bg-[#b4f461]');
    document.getElementById('history-btn').classList.remove('bg-[#b4f461]');
})

document.getElementById('history-btn').addEventListener('click',function(){
    hideById('historyDiv');
    // btn bg-color 
    document.getElementById('donate-btn').classList.remove('bg-[#b4f461]');
    document.getElementById('history-btn').classList.add('bg-[#b4f461]');
})

// hide when btn click end

// Amount add
    // common function 
    function add(amountAtm,disAmtfunc){
        flag=1;

        let currentAmt= parseFloat(document.getElementById('currentAmthtml').innerText);
            
        const amount=parseFloat(document.getElementById(amountAtm).value);

        const disAmt=parseFloat(document.getElementById(disAmtfunc).innerText);

        if(amount>0 && typeof(amount)==typeof(4)){
            if(currentAmt<=amount){
                alert("You don't have enough money");
                return;
            }

            document.getElementById('my_modal_1').showModal();
            let addAmt=amount+disAmt;
            let myCurrAmt=currentAmt-amount;

            document.getElementById('currentAmthtml').innerText=myCurrAmt;

            document.getElementById(disAmtfunc).innerText=addAmt;
            flag=100;
        }
        else{
            alert("Not a valid amount");
        }
    }

    // noakhali
    document.getElementById('noakhali-donate').addEventListener('click',function(event){
        event.preventDefault();
        add('noakhali-text','disAmtNoakhali');
        historyH('NoakhaliHead','noakhali-text');
    })

    // feni
    document.getElementById('feni-donate').addEventListener('click',function(event){
        event.preventDefault();
        add('feni-text','disAmtFeni');
        historyH('FeniHead','feni-text');
    })

    // quota 
    document.getElementById('quota-donate').addEventListener('click',function(event){
        event.preventDefault();
        add('quota-text','disAmtQuota');
        historyH('QuotaHead','quota-text');
    })
// Amount add end

// history
// common function 
function historyH(head,amountAtm){
    if(flag==100){
        const amount=parseFloat(document.getElementById(amountAtm).value);
    const heading=document.getElementById(head).innerText;
    const div=document.createElement('div');
    div.innerHTML=`
        <div class=" border-2 border-[#eaeaea] p-5 rounded-2xl mb-5">
            <p class="mb-2 font-bold" >${amount} Taka is ${heading}</p>
            <p class="text-sm text-[#585858a6]">${Date()}</p>
        </div>
    `
    document.getElementById('historyDiv').appendChild(div);
    }
}
console.log(flag);