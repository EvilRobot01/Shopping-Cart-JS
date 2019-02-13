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
const courseInfo = {
    image: course.querySelector('img').src,
    title: course.querySelector('h4').textContent,
    price: course.querySelector('.price span').textContent,
    id: course.querySelector('a').getAttribute('data-id')
}
addIntoCart(courseInfo);
}

function addIntoCart(course){
    const row = document.createElement('tr');

    row.innerHTML = `
    
    `;
}