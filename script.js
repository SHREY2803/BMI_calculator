const form = document.querySelector('form');
form.addEventListener('submit', function(e){
    e.preventDefault();  //to avoid default submit
    
    const height = Number(document.getElementById('height').value);
    const weight = Number(document.getElementById('weight').value);
    const results = document.getElementById('results');
    
    const bmi = (weight/((height*height)/10000)).toFixed(2);
    console.log(typeof height);
    
    if(height === '' || height<0 || isNaN(height)){
        results.innerHTML = `Please give a valid height`;
    }else if(weight === '' || weight<0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight`;
    }else{
        if(bmi < 18.6){
            results.innerHTML = `<span>${bmi} You are Under Weight</span>`;
        }
        else if(bmi>=18.6 && bmi<=24.9){
            results.innerHTML = `<span>${bmi} You are under normal range</span>`;
        }
        else{
            results.innerHTML = `<span>${bmi} You areOverweight</span>`;
        }
    }
})