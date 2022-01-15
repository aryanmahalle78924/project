const search = document.getElementById("search");
const matchList = document.getElementById("match-list");



const searchPatients = async searchText=>{
    const res = await fetch('../patient.json');
    const patients = await res.json();


     let matches = patients.filter(patient=>{
         const reg = new RegExp(`^${searchText}`,'gi');
         return patient.name.match(reg) || patient.type.match(reg);
     })

     if(searchText===0){
        matches=[];
       }

       const type = patients.id===0?'warning':'sucess';
outputHtml(matches);
    };




const outputHtml = matches =>{
 

    if(matches.length>0){


        const html = matches.map(match=>`
        <div class="card card-body mb-1">
          <h4>${match.name} 
          
          <span class="text-primary mr-0">${match.type}</span>
          
          </h4>
          <small>Age: ${match.age} / Gender: ${match.gender}</small>
          <small>Contact: ${match.contact} / City: ${match.city}</small>
        </div>
        `).join('');
        matchList.innerHTML = html; 
    }

}



searchPatients();


search.addEventListener('input',()=>searchPatients(search.value));