window.onscroll = function () {
   const header = document.getElementById('header');
   const btnSection = document.getElementById('btnSection');
        if(document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50){
            header.classList.remove('bg-[#F9F7F3]')
            btnSection.classList.remove('bg-white')
            
        }
        else{
            header.classList.add('bg-[#F9F7F3]')
            btnSection.classList.add('bg-white')

        }
 
}