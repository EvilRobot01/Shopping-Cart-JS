const courses = document.querySelector('#courses-list');

loadEventListener();

function loadEventListener(){
    courses.addEventListener('click', buyCourse);
}

function buyCourse(e){
    e.preventDefault();

    if(e.target.classList.contain('add-to-cart')){
        const course = e.target.parentElement.parentElement;

        getCourseInfo(course);
    }
}

funtion getCourseInfo(course){

}