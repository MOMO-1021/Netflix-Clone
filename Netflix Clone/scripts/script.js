document.addEventListener('DOMContentLoaded', function(){
    const faqBoxes = document.querySelectorAll('.faq__box');
    faqBoxes.forEach((faqBox) =>{
        const question = faqBox.querySelector('.faq__box--question');
        const faq_Answer = faqBox.querySelector('.faq__box--answer');
        const hr = faqBox.querySelector('.faq__box--hr');
        const svg1 = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none">
            <path d="M12 4V20" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M4 12H20" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        `
        const svg2 = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"color="#000000" fill="none">
            <path d="M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        `
        // State variable to track the current svg:
        let isFirstSvg = true;
        question.addEventListener('click',function(){
        // Dynamically selecting the svg element to be changed:
        const currentSvg = question.querySelector('svg');
        const newSvg = document.createRange().createContextualFragment(isFirstSvg ? svg2 : svg1);
        if(currentSvg)
            question.replaceChild(newSvg,currentSvg);
        // Update the State:
        isFirstSvg = !isFirstSvg;
        // ========================================================================
        // Now, Toggling the display of faq__answer:
        });
        question.addEventListener('click',()=>{
            if(hr.style.display == 'none' || hr.style.display == '') { 
                hr.style.display = 'block';
                faq_Answer.style.display = 'block';
            }else{
                hr.style.display = 'none';
                faq_Answer.style.display = 'none';
            }
        })
    })
})