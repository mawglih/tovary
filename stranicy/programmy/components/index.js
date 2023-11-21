// let cardsExpandable = document.getElementsByTagName('.card-expandable');
// let buttonsExpandable = document.getElementsByTagName('.card-exp-toggle-btn');
// const buttonId = e => {
//     console.log('card', e.target.id);
// }

// for(let button of buttonsExpandable) {
//     button.addEventListener('click', buttonId);

// }

function getId (event) {
    let id = event.srcElement.id;
    console.log('id',id);
}
document.addEventListener('DOMContentLoaded', () => {
    let cardsExpandable = document.getElementsByTagName('.card-expandable');
    // var buttonsCount = buttons.length;
    for (let button of cardsExpandable) {
        console.log('button', button);
        button.onclick = () => {
            console.log('id', this.id);
        }
    }
    // for (let i = 0; i < buttonsCount; i++) {
    //   buttons[i].onclick = function(e) {
    //     alert(this.id);
    //   };
    // }
  });


// let toggleExpandable = document.querySelector('.card-exp-toggle-btn');
// toggleExpandable.addEventListener('click', (e) => {
//     let id = e.target.id;
//     console.log('card', id);
//     setTimeout(() => {
//         let elem = document.getElementById(id);
//         console.log('elem', elem);
//         let toggleElem = elem.classList;
//         toggleElem.toggle('active-expandable');
//     }, 500);
// });
// toggleExpandable.addEventListener('click', () => {
//     cardExpandable.classList.toggle('active-expandable')
// });


// const buttons = document.getElementsByTagName("button");

// const buttonPressed = e => {
//   console.log(e.target.id);  // Get ID of Clicked Element
// }

// for (let button of buttons) {
//   button.addEventListener("click", buttonPressed);
// }


// jQuery(document).ready(function($) {
//     $(".accordion-title").click(function(){
//         var self = this;
//         setTimeout(function() {
//             theOffset = $(self).offset();
//             $('body.html').animate({ scrollTop: theOffset.top - 100 });
//         }, 100);
//     });
// });