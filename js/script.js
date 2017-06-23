 <script type="text/javascript">
    function verif()
    {
    var a=document.forms["Form"]["answer_a"].value;
    var b=document.forms["Form"]["answer_b"].value;
    var c=document.forms["Form"]["answer_c"].value;
    var d=document.forms["Form"]["answer_d"].value;
    var e=document.forms["Form"]["answer_e"].value;
    var f=document.forms["Form"]["answer_f"].value;
    var g=document.forms["Form"]["answer_g"].value;
    if (a==null || a=="",b==null || b=="",c==null || c=="",d==null || d=="",e==null || e=="",f==null || f=="",g==null || g=="")
      {
      alert("Merci de remplir les champs obligatoires");    
      return false;
      }
    return true;
    }
</script>