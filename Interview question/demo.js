var data=[{id:1,name:"dark",email:"dark234@gmail.com"},
    {id:2,name:"cold",email:"cd034@gmail.com"}
]

function readAll() {
    localStorage.setItem('object',JSON.stringify(data))
    var tdata=document.querySelector('.data_table')

    var object=localStorage.getItem('object')
    var objectdata=JSON.parse(object)

    var element=''
    objectdata.map((record)=>(
        element+=`<tr>
        <td>${record.name}</td>
        <td>${record.email}</td>
        <td>
        <button onclick="edit(${record.id})">Edit</button>
        <button onclick="delete_data(${record.id})">Delete</button>
        </td>
        </tr>`
    ))
    tdata.innerHTML=element
}


// add button
function create() {
    document.querySelector('.create_form').style.display='block'
    document.querySelector('.add_div').style.display='none'
}

// working add data
function add() {
    var name=document.querySelector('.name').value
    var email=document.querySelector('.email').value

    var newobj={id:new Date(),name:name,email:email}
    data.push(newobj)

    document.querySelector('.create_form').style.display='none'
    document.querySelector('.add_div').style.display='block'

    readAll()
}

// update form show
function edit(id) {
    document.querySelector('.update_form').style.display="block"
    var obj=data.find(rec => rec.id === id)
    document.querySelector('.uname').value=obj.name 
    document.querySelector('.uemail').value=obj.email
    document.querySelector('.id').value=obj.id 
}

// data update
function update(){
    var id=parseInt(document.querySelector('.id').value)
    var name=document.querySelector('.uname').value
    var email=document.querySelector('.uemail').value
    
    var index=data.findIndex(rec => rec.id===id)
     data[index]={id,name,email}
     document.querySelector('.update_form').style.display="none"

     readAll()
}

// delete data
function delete_data(id){
     data=data.filter(rec => rec.id !== id )
    readAll()
}

