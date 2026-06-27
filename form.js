let profile={
    name:"",
    email:"",
    status:"active",
    gender:"male"
};

let nameEl=document.getElementById('name');
let emailEl=document.getElementById('email');
let paranameEl=document.getElementById('nameErrMsg');
let paraemailEl=document.getElementById('emailErrMsg');
let buttonEl=document.getElementById('submitbtn');
let maleradioEl=document.getElementById('genderMale');
let femaleradioEl=document.getElementById('genderFemale');
let workstatusEl=document.getElementById('status');
let linkEl=document.getElementById('linkID');


nameEl.addEventListener('blur',function(){
    if(nameEl.value===''){
        paranameEl.textContent='Required*';
    }else{
        paranameEl.textContent="";
    }
    profile['name']=nameEl.value;
});


emailEl.addEventListener('blur',function(){
    if(emailEl.value===''){
        paraemailEl.textContent='Required*';
    }else{
        paraemailEl.textContent="";
    }
    profile['email']=emailEl.value;
});



maleradioEl.addEventListener('change',function(event){
    profile['gender']=event.target.value;
});



femaleradioEl.addEventListener('change',function(event){
    profile['gender']=event.target.value;
});

workstatusEl.addEventListener('change',function(event){
    profile['status']=event.target.value;
})


buttonEl.addEventListener('click',function(event){
    event.preventDefault();
    if(nameEl.value===''){
        paranameEl.textContent='Required*';
    }else{
        paranameEl.textContent="";
    }
    if(emailEl.value===''){
        paraemailEl.textContent='Required*';
    }else{
        paraemailEl.textContent="";
    }
    let data=JSON.stringify(profile);
    let option={
    method:"POST",
    headers:{
        "Content-Type":"application/json",
        Authorization:"Bearer 68a1d309bae6f5e45851fa7893ab2cc1cec50822429c73c9ea4799e2aad6917d"
    },
    body:data
};
    if(paranameEl.textContent!=='Required*'&&paraemailEl.textContent!=='Required*'){
        fetch('https://gorest.co.in/public/v2/users',option)
        .then(function(response){
            if(response.status===422){
                paraemailEl.textContent="Already Exit";
            }else{
                paraemailEl.textContent="";
                linkEl.textContent="Check Your Data :" + response.url;
            }
            return response.json();
        })
        
    }
});

