// JavaScript Document

var nid; // global node id variable

$('#page_dashboard').live('pageshow',function(){
  try {
    $.ajax({
    //  url: "http://10.0.2.2/my_drupal_site/?q=my_services/system/connect.json",
	url: "http://www.m.reisandirvys.com/drupalgap/system/connect.json",
      type: 'post',
      dataType: 'json',
      error: function (XMLHttpRequest, textStatus, errorThrown) {
        alert('page_dashboard - failed to system connect');
        console.log(JSON.stringify(XMLHttpRequest));
        console.log(JSON.stringify(textStatus));
        console.log(JSON.stringify(errorThrown));
      },
      success: function (data) {
        var drupal_user = data.user;
        if (drupal_user.uid == 0) { // user is not logged in, show the login button, hide the logout button
          $('#button_login').show();
          $('#button_logout').hide();
        }
        else { // user is logged in, hide the login button, show the logout button
          $('#button_login').hide();
          $('#button_logout').show();
        }
      }
    });
  }
  catch (error) { alert("page_dashboard - " + error); }
});


$('#button_logout').live("click",function(){
try {
 $.ajax({
     //url: "http://10.0.2.2/my_drupal_site/?q=my_services/user/logout.json",
	 url: "http://www.m.reisandirvys.com/drupalgap/user/logout.json",
     type: 'post',
     dataType: 'json',
     error: function (XMLHttpRequest, textStatus, errorThrown) {
       alert('button_logout - failed to logout');
       console.log(JSON.stringify(XMLHttpRequest));
       console.log(JSON.stringify(textStatus));
       console.log(JSON.stringify(errorThrown));
     },
     success: function (data) {
       alert("You have been logged out.");
       $.mobile.changePage("index.html",{reloadPage:true},{allowSamePageTranstion:true},{transition:'none'});
     }
 });
}
catch (error) { alert("button_logout - " + error); }
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