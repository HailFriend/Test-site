// const dropdowns = document.querySelectorAll ('.dropdown')


// dropdowns.forEach(dropdown => {
//     const select = dropdown.querySelector ('.select');
//     const selected = dropdown.querySelector ('.selected');
//     const menu = dropdown.querySelector ('.menu');
//     const options = dropdown.querySelectorAll('.menu li');
//     const caret = dropdown.querySelector('.caret')
// });

// select.addEventListener('click', () => {
//     select.classList.toggle('select-clicked')
//     caret.classList.toggle('caret-rotate')
//     menu.classList.toggle('menu-open')
// });

// options.forEach(option => {
//     option.addEventListener('click', () => {
//         selected.innerText = option.innerText
//         select.classList.remove('select-clicked');
//         caret.classList.remove('caret-rotate')
//         menu.classList.remove('menu-open');
//         options.forEach(option => {
//             option.classList.remove('active');
//         });
//         option.classListAdd('active');
        
//     });
// });

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})