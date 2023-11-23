const Listen = (doc) => {
    return {
        on: (type, selector, callback) => {
            doc.addEventListener(type, (event)=>{
                if(!event.target.matches(selector)) return;
                callback.call(event.target, event);
            }, false);
        }
    }
};        
Listen(document).on('click', '.card-exp-toggle-btn', function (e) {
    let id = e.target.id;
    let btnId = 'btn-' + id;
    let button = document.getElementById(btnId);
    let parent = e.target.parentNode;
    parent.classList.toggle('active-expandable');
    button.classList.toggle('active-exp-button');
});