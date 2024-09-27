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
    function add(amount){
        if(amount>0 && amount==typeof(4)){
            if(currentAmt<=0){
                alert("You don't have enough money");
                return;
            }
            
        }
        else{
            alert("Not a valid amount");
        }
    }
// Amount add end
console.log(typeof(4));

