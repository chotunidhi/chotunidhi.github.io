var Dribbble=Dribbble||{};Dribbble.FacebookLogin={initialized:!1,setup:function(){if(!this.initialized){this.initialized=!0,window.fbAsyncInit=function(){FB.init({appId:"811749452338490",cookie:!0,xfbml:!0,version:"v2.10"})};try{e=document,i="script",n="facebook-jssdk",o=e.getElementsByTagName(i)[0],e.getElementById(n)||((t=e.createElement(i)).id=n,t.src="https://connect.facebook.net/en_US/sdk.js",o.parentNode.insertBefore(t,o))}catch(c){}var e,i,n,t,o;$(".auth-facebook").on("click",function(i){i.preventDefault(),FB.login(function(e){e.authResponse&&(window.location=i.currentTarget.href)},{scope:"public_profile,email,user_friends"})})}}};