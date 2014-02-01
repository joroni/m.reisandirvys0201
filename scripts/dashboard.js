// JavaScript Document

$('#tf_page_dashboard').live('pageshow',function(){
  try {
    // BEGIN: drupal services system connect (warning: don't use https if you don't have ssl setup)
	
	// Obtain session token.
$.ajax({
  url:"http://www.m.reisandirvys.com/?q=services/session/token",
  type:"get",
  dataType:"text",
  error:function (jqXHR, textStatus, errorThrown) {
    alert(errorThrown);
  },
  success: function (token) {
    // Call system connect with session token.
    $.ajax({
      url: 'http://www.m.reisandirvys.com/?q=drupalgap/system/connect.json',
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
});
    /*$.ajax({
      //url: "https://www.tylerfrankenstein.com/my_services_path/system/connect.json",
	  	url: "http://www.m.reisandirvys.com/drupalgap/system/connect.json",
        type: 'post',
        dataType: 'json',
        error: function (XMLHttpRequest, textStatus, errorThrown) {
          alert('tf_page_login_submit - failed to login');
          console.log(JSON.stringify(XMLHttpRequest));
          console.log(JSON.stringify(textStatus));
          console.log(JSON.stringify(errorThrown));
        },
        success: function (data) {
          var tf_user = data.user;
          if (tf_user.uid == 0) { // user is not logged in, show the login button, hide the logout button
            $('#tf_login_button').show();
            $('#tf_logout_button').hide();
          }
          else { // user is logged in, hide the login button, show the logout button
            $('#tf_login_button').hide();
            $('#tf_logout_button').show();
          }
       }
    });*/
    // END: drupal services system connect
  }
  catch (error) { alert("tf_page_dashboard - " + error); }
});

$('#tf_logout_button').live("click",function(){
try {
  // BEGIN: drupal services user logout (warning: don't use https if you don't have ssl setup)
  $.ajax({
      //url: "https://www.tylerfrankenstein.com/my_services_path/user/logout.json",
	  url: "http://www.m.reisandirvys.com/drupalgap/user/logout.json",
      type: 'post',
      dataType: 'json',
      error: function (XMLHttpRequest, textStatus, errorThrown) {
        alert('tf_logout_button - failed to logout');
        console.log(JSON.stringify(XMLHttpRequest));
        console.log(JSON.stringify(textStatus));
        console.log(JSON.stringify(errorThrown));
      },
      success: function (data) {
        alert("You have been logged out.");
        document.location.href = "../index.html#tf_page_dashboard";
      }
  });
  // END: drupal services system connect
}
catch (error) { alert("tf_logout_button - " + error); }
return false;
});




// Obtain session token.
/*$.ajax({
  url:"http://www.m.reisandirvys.com/?q=services/session/token",
  type:"get",
  dataType:"text",
  error:function (jqXHR, textStatus, errorThrown) {
    alert(errorThrown);
  },
  success: function (token) {
    // Call system connect with session token.
    $.ajax({
      url: 'http://www.m.reisandirvys.com/?q=drupalgap/system/connect.json',
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