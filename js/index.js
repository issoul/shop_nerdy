
// 헤더 메뉴 드롭다운 //

const ddup = document.querySelectorAll('.drop_up');
const ddown = document.querySelectorAll('.drop_body');
const dpopen = document.querySelectorAll('.drop_body.open')


    ddup[0].addEventListener('mouseover', ()=> {
        ddown[0].classList.add('open');
    })
    ddup[0].addEventListener('mouseout', ()=> {
        ddown[0].classList.remove('open');
    })

    ddup[1].addEventListener('mouseover', ()=> {
        ddown[1].classList.add('open');
    })
    ddup[1].addEventListener('mouseout', ()=> {
        ddown[1].classList.remove('open');
    })

    ddup[2].addEventListener('mouseover', ()=> {
        ddown[2].classList.add('open');
    })
    ddup[2].addEventListener('mouseout', ()=> {
        ddown[2].classList.remove('open');
    })


    ddup[3].addEventListener('mouseover', ()=> {
        ddown[3].classList.add('open');
    })
    ddup[3].addEventListener('mouseout', ()=> {
        ddown[3].classList.remove('open');
    })


    ddup[4].addEventListener('mouseover', ()=> {
        ddown[4].classList.add('open');
    })
    ddup[4].addEventListener('mouseout', ()=> {
        ddown[4].classList.remove('open');
    })

