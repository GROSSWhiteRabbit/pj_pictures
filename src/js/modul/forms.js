import {closeAllModal} from './modal';
import {postData} from '../services/requests';

 const forms  = ()=>{
    function bindForm(form) {
        const massegeStatus = {
            loading: 'Loading...',
            success: 'OK!!',
            failure: 'Oops!! Failed!!',
            ok: 'assets/img/ok.png',
            fail: 'assets/img/fail.png',
            spinner: 'assets/img/spinner.gif'

        },
            upload = document.querySelectorAll('[name="upload"]');

        // form.user_phone.addEventListener('input', ()=>{
        //     form.user_phone.value =  form.user_phone.value.replace(/\D/g, '');
        // });
        console.log(upload);
        upload.forEach((item)=>{
            item.addEventListener('input', ()=>{
                let  name = item.files[0].name;
                console.log(name.length);
                if(name.length > 9) {
                  name = name.replace(/(?<=\w{7})\w+/ig, '..') ;
                }
                item.previousElementSibling.textContent = name;
                
            });
        });

        form.addEventListener('submit', (e)=> {
            e.preventDefault();
                const data = new FormData(form),
                textStatus = document.createElement('img'),
                path = {design:'assets/server.php', question:'assets/server.php'};
                textStatus.style.margin = 'auto';
                textStatus.style.display = 'block';
                textStatus.classList.add('status');
                form.parentNode.append(textStatus);
                textStatus.src =  massegeStatus.spinner;

                let api;

                form.closest('.popup-consultation') ? api = path.question: api = path.design;
                postData(api, data)
                .then(function(res) {
                    console.log(res);
                    form.classList.add('animated', 'fadeOutUp');
                    setTimeout(()=>{
                        form.style.display = 'none';
                    },400);
                    textStatus.classList.add ('animated', 'fadeInUp');
                    textStatus.src =  massegeStatus.ok;
                })
                .catch(()=> {
                    form.classList.add('animated', 'fadeOutUp');
                    setTimeout(()=>{
                        form.style.display = 'none';
                    },1000);
                    textStatus.classList.add ('animated', 'fadeInUp');
                    textStatus.src =  massegeStatus.fail;
                })
                .finally(()=>{
                    form.reset();
                    upload.forEach((item)=> {
                        item.previousElementSibling.textContent = 'Файл не выбран';
                    });

                    setTimeout(()=>{
                        form.classList.remove('fadeOutUp');
                        form.classList.add('animated', 'fadeInUp');
                        form.style.display = 'block';
                        setTimeout(()=>{
                            form.classList.remove('fadeInUp');
                        },1000);
                        textStatus.remove();
                        closeAllModal();
                    }, 5000);
                    
                    // form.user_phone.style.border = '';
                });
            
            
        });
        
    





    }
    const forms = document.querySelectorAll('form');
    forms.forEach(form => bindForm(form));

 }; 
   

export default forms;