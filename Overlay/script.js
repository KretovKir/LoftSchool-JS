

function createModal(content){
    const openBtn = document.querySelector('#openOverlay');
    const body = document.body;
    openBtn.addEventListener('click', function(event){
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');
        
    
        overlay.addEventListener('click', function(event){
            if (event.target === overlay){
                closeElement.click();
            } 
        })
    
        const containerElement = document.createElement('div');
        containerElement.classList.add('modal-container');
        
    
        const contentElement = document.createElement('div');
        contentElement.classList.add('content');
        contentElement.innerHTML=`${content}`;
    
       
    
        const closeElement = document.createElement('a');
        closeElement.classList.add('close');
        closeElement.textContent ='x';
        
    
        closeElement.addEventListener('click', function(event){
            event.preventDefault();
            body.removeChild(overlay);
        })

        body.appendChild(overlay);
        overlay.appendChild(containerElement);
        containerElement.appendChild(contentElement);
        containerElement.appendChild(closeElement);
    })
}

createModal('Lalalala')