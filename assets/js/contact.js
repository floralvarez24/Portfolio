const contactForm=document.getElementById('contact-form'),
    contactMessage=document.getElementById('contact-message')

const sendEmail=(e)=>{
    e.preventDefault()
    //serviceID, templateID, #form, publicKey
    emailjs.sendForm('service_9ntjw1n','template_zq9xeif','#contact-form','Gm-X5SXjBN-EAfgga')
    .then(()=>{
        contactMessage.textContent='Message sent successfully'
        setTimeout(()=>{
            contactMessage.textContent=''
        
        }, 5000)

        contactForm.reset()
    },() => {
        contactMessage.textContent='An error occurred, please try again'
    })  
}
contactForm.addEventListener('submit', sendEmail)
