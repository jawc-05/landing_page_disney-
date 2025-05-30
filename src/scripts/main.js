document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector('.hero');
    const heroHeight = heroSection.clientHeight;

    window.addEventListener('scroll', function(){
        const scrollPosition = window.scrollY;
        
        if(scrollPosition < heroHeight){
            hideHeader();
        }else{
            showHeader();
        }
    })

    //Sections shows, tabs programming
    for (let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(btn){
            const tabTarget = btn.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${tabTarget}]`);
            hideAllTabs();
            tab.classList.add('shows__list--is-active');
            removeActiveBtn();
            btn.target.classList.add('shows__tabs__button--is-active');
        })
    }

    //FAQ section, accordion
    for (let i = 0; i < questions.length; i++){
        questions[i].addEventListener('click', openOrCloseQuestion);
    }
})

function hideHeader(){
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function showHeader(){
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

function openOrCloseQuestion(element){
    const classes = 'faq__questions__item--is-open';
    const elementDad = element.target.parentNode;

    elementDad.classList.toggle(classes);
}

function removeActiveBtn(){
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function hideAllTabs(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for(let i = 0; i < tabsContainer.length; i++){
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}