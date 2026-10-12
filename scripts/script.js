document.addEventListener('DOMContentLoaded', ()=> {
    const mobileMenuBtn=document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks=document.querySelectorAll('.mobile-link');

    if (mobileMenuBtn && mobileMenu){
        mobileMenuBtn.addEventListener('click', ()=> {
            mobileMenu.classList.toggle('hidden');
        });
        mobileLinks.forEach(link => {
            link.addEventListener('click', ()=>{
                mobileMenu.classList.add('hidden');
        });
    });
    
}
    document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
        anchor.addEventListener('click', function(e){
            e.preventDefault();
            const targetId=this.getAttribute('href');
            if (targetId=== '#') return;

            const targetElement = document.querySelector(targetId);
            if(targetElement){
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
});
});