<script type="text/javascript"> 
  
function verif(){   
 if(Form.answer_a.value == '' ) {   
   alert('Merci de saisir votre nom');
  Form.answer_a.focus(); 
  return false; 
 }   



 if(Form.answer_b.value == '') {   
  Form.answer_b.focus();   
  return false;   
 }   
      

 if(Form.answer_c.value == '' ) {   
   alert('Merci de saisir votre nom');
  Form.answer_c.focus(); 
  return false; 
 }   



 if(Form.answer_d.value == '') {   
  Form.answer_d.focus();   
  return false;   
 }   


 if(Form.answer_e.value == '' ) {   
   alert('Merci de saisir votre nom');
  Form.answer_e.focus(); 
  return false; 
 }   



 if(Form.answer_g.value == '') {   
  Form.answer_g.focus();   
  return false;   
 }   




 var c_postal = Form.answer_f.value;   

     if ( c_postal == "" ){   
  Form.answer_f.focus();   
 return false;   
 } else{  
    var chiffres = new String(c_postal);    
 chiffres = chiffres.replace(/[^0-9]/g, '');   
 compteur = chiffres.length;   
    
 if (chiffres.length != 10){   
  alert("Assurez-vous de rentrer un numéro à 10 chiffres (xxx-xxx-xxxx)");   
  Form.answer_f.focus();   
 return false;   
 }   
}  
 return true;
}   
  
</script>

