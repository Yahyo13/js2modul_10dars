let box = document.querySelector(`.box`)


let data = [
    {
        name: `Akromjon`,
        password: 1858,
        id:1
    },
    {
        name: `Yahyo`,
        password: 1878,
        id:2
    },
    {
        name: `Komrom`,
        password: 1848,
        id:3
    },
    {
        name: `Abdulaziz`,
        password: 1358,
        id:4
    },
    {
        name: `Jafar`,
        password: 1855,
        id:5
    },
    {
        name: `Muxammad-Diyor`,
        password: 1258,
        id:6
    }
]





let myFunction = ( filtered)=>{
box.innerHTML = "";
    
filtered.map((item)=>{

    box.innerHTML += `
    <div class="b">
             <h2>${item.name}</h2>
            <b>${item.password}</b>
                <h3>${item.id}</h3>
    </div>
      
    `;
});
       
}



let select = document.querySelector(`select`)

myFunction(data)
select.addEventListener(`change`, ()=>{
    let newDate = [...data]

    if(select.value == 'name'){
        newDate.sort((a,b)=> a.name.localeCompare(b.name))
    }else if(select.value == 'name2'){
        newDate.sort((a,b)=> b.name.localeCompare(a.name))
    }else if(select.value == 'password'){
        newDate.sort((a,b)=> a.password - b.password)
    }else if(select.value == 'password2'){
        newDate.sort((a,b)=> b.password - a.password)
    }
    

    myFunction(newDate)
})