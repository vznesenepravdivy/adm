window.onload=function(){$(document).ready(function(){document.getElementsByName("newpassword");document.getElementsByName("newpasswordd");$(".cpass_ajax").keyup(function(){var c=$(this).val(),d=$(this).attr("addon"),a=$(this).attr("name"),e=d+"_notify",f=$(this).attr("iden");cat=document.getElementById(e);""!==c&&(cat.innerHTML="<img src='http://project.dlzip.in/files/images/snake.gif'>");"newpasswordd"!==a?$.post("http://project.dlzip.in/ajax/cpass.php",{search_term:c,addon:d,iden:f},function(b){if(b===
"valid"){cat.innerHTML="<img src='http://project.dlzip.in/files/images/accepted.png'>";if(a=="oldpassword"){document.getElementsByName(a)[0].setAttribute("readonly","readonly");b=document.getElementsByName("newpassword")[0];b.removeAttribute("readonly")}else if(a=="newpassword"){b=document.getElementsByName("newpasswordd")[0];b.removeAttribute("readonly");if(b.value!==""){mickey=document.getElementsByName("newpassword")[0].value;mouse=document.getElementsByName("newpasswordd")[0].value;b=document.getElementById("newpasswordd_notify");
if(mickey===mouse){b.innerHTML="<img src='http://project.dlzip.in/files/images/accepted.png'>";$("#c_p").removeAttr("disabled")}else{b.innerHTML="<img src='http://project.dlzip.in/files/images/rejected.png'>";$("#c_p").attr("disabled","disabled")}}}}else if(b==="invalid"){if(a=="newpassword"){b=document.getElementsByName("newpasswordd")[0];b.value="";b.setAttribute("readonly","readonly");document.getElementById("newpasswordd_notify").innerHTML=""}cat.innerHTML="<img src='http://project.dlzip.in/files/images/rejected.png'>";
$("#c_p").attr("disabled","disabled")}}):"newpasswordd"===a&&(mickey=document.getElementsByName("newpassword")[0].value,mouse=document.getElementsByName("newpasswordd")[0].value,c=document.getElementById("newpasswordd_notify"),mickey===mouse?(c.innerHTML="<img src='http://project.dlzip.in/files/images/accepted.png'>",$("#c_p").removeAttr("disabled")):(c.innerHTML="<img src='http://project.dlzip.in/files/images/rejected.png'>",$("#c_p").attr("disabled","disabled")))});$("#c_p").attr("disabled","disabled");
$("#c_p").click(function(){var c=document.getElementsByName("newpassword")[0],d=document.getElementsByName("newpasswordd")[0],a=document.getElementsByName("oldpassword")[0];""!==c.value&&""!==d.value&&""!==a.value?(a=a.value,c=c.value,d=d.value,iden=document.getElementsByName("oldpassword")[0].getAttribute("iden"),$("#p_c_n").html("<img src='http://project.dlzip.in/files/images/snake.gif'>"),$.post("http://project.dlzip.in/ajax/cpass.php",{iden:iden,old:a,ne:c,neww:d},function(a){"valid"===a?$("#p_c_n").html("Password Changed Successfully"):
($("#p_c_n").html("Something Went Wrong!!"),alert(":("))})):alert("please fill the form Properly!!")})})};