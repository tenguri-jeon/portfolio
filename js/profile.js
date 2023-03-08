searching();
function searching() {
    
    const search = ['Searching'];
    const searchtext = search[0].split("")
    const searchP = document.getElementsByClassName('searching');
    
    setInterval(()=>{
        searchP[0].innerHTML = ''; 
        for (let i = 0; i < searchtext.length; i++) {
            setTimeout(()=>{
                searchP[0].innerHTML += searchtext[i];
            },100*i)
        }
    }, 5000);
}
