const courses = document.querySelector('#courses-list');
      shoppingCartContent = document.querySelector('#cart-content tbody');
      clearCarBtn = document.querySelector('#clear-cart');

loadEventListener();

function loadEventListener(){
    courses.addEventListener('click', buyCourse);

    shoppingCartContent.addEventListener('click', removeCourse);

    clearCarBtn.addEventListener('click', clearCart);
}

function buyCourse(e){
    e.preventDefault();

    if(e.target.classList.contains('add-to-cart')){
        const course = e.target.parentElement.parentElement;

        getCourseInfo(course);
    }
}

function getCourseInfo(course){
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
    <tr>
        <td>
            <img src="${course.image}" width=100>
        </td>
        <td>
            ${course.tittle}
        </td>
        <td>
            ${course.price}
        </td>
        <td>
            <a href="#" class="remove" data-id="${course.id}">X</a>
        </td>

    </tr>
    `;

    shoppingCartContent.appendChild(row);

    saveIntoStorage(course);
}

function saveIntoStorage(course){
    let courses = getCourseFromStorage();

    courses.push(course);

    localStorage.setItem('courses', JSON.stringify(courses));



}

function getCourseFromStorage(){
    let courses;

    if(localStorage.getItem('courses')===null){
        courses = [];
    }else{
        course = JSON.parse(localStorage.getItem('courses'));
    }
    return courses;

}

function removeCourse(e){
    if(e.target.classList.contains('remove')){
        e.target.parentElement.parentElement.remove();
    }
}

function clearCart(){
   while(shoppingCartContent.firstChild){
       shoppingCartContent.removeChild(shoppingCartContent.firstChild);
   }
}