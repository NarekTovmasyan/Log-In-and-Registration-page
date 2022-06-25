(async ()=>{
    const response = await fetch('http://localhost:5000/contacts', {
        method:'GET',
    })
    const body =await response.json();

    console.log('body', body);
})();

