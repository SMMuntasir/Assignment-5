// hide when btn click
// common function 
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
        
        let currentAmt= parseFloat(document.getElementById('currentAmthtml').innerText);
            
        const amount=parseFloat(document.getElementById(amountAtm).value);

        const disAmt=parseFloat(document.getElementById(disAmtfunc).innerText);

            if(amount>0 && typeof(amount)==typeof(4)){
                if(currentAmt<=0){
                    alert("You don't have enough money");
                    return;
                }

            document.getElementById('my_modal_1').showModal();
            let addAmt=amount+disAmt;
            let myCurrAmt=currentAmt-amount;

            document.getElementById('currentAmthtml').innerText=myCurrAmt;

            document.getElementById(disAmtfunc).innerText=addAmt;
            return addAmt;
        }
        else{
            alert("Not a valid amount");
        }
    }

    // noakhali
    document.getElementById('noakhali-donate').addEventListener('click',function(event){
        event.preventDefault();
        add('noakhali-text','disAmtNoakhali');
    })

    // feni
    document.getElementById('feni-donate').addEventListener('click',function(event){
        event.preventDefault();
        add('feni-text','disAmtFeni');
    })

    // quota 
    document.getElementById('quota-donate').addEventListener('click',function(event){
        event.preventDefault();
        add('quota-text','disAmtQuota');
    })
// Amount add end

// history

