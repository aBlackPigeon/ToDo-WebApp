let btn = document.getElementById('btn');

btn.addEventListener('click',()=>{
    const text = document.getElementsByClassName('text-field')[0].value;
    const add = document.getElementsByTagName('ul')[0];
    const item = document.createElement('li');
    const del = document.createElement('button');
    const check = document.createElement('input');
    const div = document.createElement('div');
    check.setAttribute('type','checkbox');


    del.textContent = "Delete";
    del.classList.add("btn-style");
    check.classList.add("check-btn");
    div.classList.add('btn-div');

    if(text.trim() == ""){
        alert("Empty Task cannot be added");
    }else{
        item.textContent = text;
        item.appendChild(div);
        div.appendChild(check);
        div.appendChild(del);
        add.appendChild(item);
    }

    del.addEventListener('click',()=>{
        item.remove();
    });

    check.addEventListener('change',()=>{
        if(check.checked){
            item.style.textDecoration = "line-through";
        }else{
            item.style.textDecoration = "none";
        }
    });

    document.querySelector('.text-field').value = "";
    
});
