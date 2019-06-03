"use strict"
const help = document.getElementsByClassName("help")[0];
const chatpart = document.getElementsByClassName('chatpart')[0];
const input = document.getElementById('text');
const clearSelectedButton = document.getElementsByClassName('my-btn')[0];



help.addEventListener("click", function () {
    chatpart.classList.toggle("d-none");
    input.classList.toggle("d-none");
});
function ToggleRemoveSelectedButton() {
    const activeListItems = document.querySelectorAll(".chatpart  div.active");
    if (activeListItems.length > 0) {
      clearSelectedButton.classList.remove("d-none");
    } else {
      clearSelectedButton.classList.add("d-none");
    }
  };

  clearSelectedButton.onclick = function() {
    const activeItems = Array.from(document.querySelectorAll(".chatpart div.active"));
    activeItems.forEach(function(item) {
      item.remove();
    });
    ToggleRemoveSelectedButton();
  };
  




input.onkeydown = function (e) {
    if (e.keyCode === 13) {
        const adminMessage = input.value;
        if (adminMessage.length) {
            if (adminMessage[0].toUpperCase() === adminMessage[0]) {
               const newDiw = document.createElement('div')
                newDiw.classList.add('admin');
                const image = document.createElement('img');
                image.src = "img/call.jpg";
                const hr = document.createElement('hr');
                hr.classList.add("separator");
                const span = document.createElement('span');
                span.innerText = adminMessage;
                newDiw.appendChild(image);
                newDiw.appendChild(span);
                newDiw.appendChild(hr);
                chatpart.appendChild(newDiw);
                newDiw.addEventListener("click", function(){
                    newDiw.classList.toggle('active');
                    ToggleRemoveSelectedButton();

                    
                })


                input.value = "";
              
            }
            else{
                const newDiw = document.createElement('div')
                newDiw.classList.add('user-message');
                const span = document.createElement('span');
                span.innerText = adminMessage;
                const image = document.createElement('img');
                image.src = "img/man.png";
                const hr = document.createElement('hr');
                hr.classList.add("separator");
                newDiw.appendChild(span);
                newDiw.appendChild(image);
                newDiw.appendChild(hr);
                chatpart.appendChild(newDiw);
                newDiw.addEventListener("click", function(){
                    newDiw.classList.toggle('active');
                    ToggleRemoveSelectedButton();

                    
                })
                input.value = "";
            

            }
        }
    }
}





















