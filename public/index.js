function main(){
    const countContainer = document.querySelector('#count-container');
    const incrementButton = document.querySelector('#increment-button');
    const decrementButton = document.querySelector('#decrement-button');
     
    fetch('your/api/endpoint')
    .then(response => response.json())
    .then(data => {

    let countValue = data.count;
    countContainer.textContent = countValue
    incrementButton.addEventListener('click', increment);
    incrementButton.addEventListener('click', decrement);
    });


    function increment(){
        countValue++;
        countContainer.textContent = countValue;
    }

    function decrement(){
        countValue--;
        countContainer.textContent = countValue;
    }

    incrementButton.addEventListener('click', increment);
    decrementButton.addEventListener('click', decrement);
    countContainer.textContent = countValue;
}
main()