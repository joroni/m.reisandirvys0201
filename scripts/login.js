// JavaScript Document
$('#tf_page_login').live('pageshow',function(){
  try {
    // do some stuff when the page is ready, if you want...
  }
  catch (error) { alert("tf_page_login - " + error); }
});

$('#tf_page_login_submit').live('click',function(){
  
  var name = $('#tf_page_login_name').val();
  if (!name) { alert('Please enter your user name.'); return false; }
  
  var pass = $('#tf_page_login_pass').val();
  if (!pass) { alert('Please enter your password.'); return false; }
  
  // BEGIN: drupal services user login (warning: don't use https if you don't have ssl setup)
  $.ajax({
      //url: "https://www.tylerfrankenstein.com/my_services_path/user/login.json",
	  url: "http://www.m.reisandirvys.com/drupalgap/user/login.json",
      type: 'post',
      data: 'username=' + name + '&password=' + pass,
      dataType: 'json',
      error: function(XMLHttpRequest, textStatus, errorThrown) {
        alert('tf_page_login_submit - failed to login');
        console.log(JSON.stringify(XMLHttpRequest));
        console.log(JSON.stringify(textStatus));
        console.log(JSON.stringify(errorThrown));
      },
      success: function (data) {
        document.location.href="../index.html#tf_page_dashboard";
      }
  });
  // END: drupal services user login
  return false;
});





// Obtain session token.
/*$.ajax({
  url:"?q=services/session/token",
  type:"get",
  dataType:"text",
  error:function (jqXHR, textStatus, errorThrown) {
    alert(errorThrown);
  },
  success: function (token) {
    // Call system connect with session token.
    $.ajax({
      url: '?q=my_services_endpoint/system/connect.json',
      type: "post",
      dataType: "json",
      beforeSend: function (request) {
        request.setRequestHeader("X-CSRF-Token", token);
      },
      error: function (jqXHR, textStatus, errorThrown) {
        alert(errorThrown);
      },
      success: function (data) {
        alert('Hello user #' + data.user.uid);
      }
    });
  }
});*/