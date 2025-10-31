let btn = document.getElementById('btn');

btn.addEventListener('click',()=>{
    const text = document.getElementsByClassName('text-field')[0].value;
    const add = document.getElementsByTagName('ul')[0];
    const item = document.createElement('li');
    if(text.trim() == ""){
        alert("Empty Task cannot be added");
    }else{
        item.textContent = text;
        add.appendChild(item);
    }

    document.querySelector('.text-field').value = "";
    
});
