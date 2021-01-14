










    
    
    
    
        








<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta content="width=device-width,initial-scale=0.8, minimum-scale=0.8, maximum-scale=3"
          name="viewport"/>
    <meta name="renderer" content="webkit"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <meta property="qc:admins" content="754034015366713545637571540352652"/>
    <meta property="wb:webmaster" content="1ad39047f32b5b6b"/>
    <title>统一身份认证</title>
</head>
<script>
    

</script>


<link href="/authserver/custom/css/login.css;jsessionid=THQBdr0hMGI9qOXLI7E-vzsnytL9qZcvWZLUwnoHEeQZECTH7ARg!1029644804" rel="stylesheet">
<link href="/authserver/custom/css/iCheck/custom.css;jsessionid=THQBdr0hMGI9qOXLI7E-vzsnytL9qZcvWZLUwnoHEeQZECTH7ARg!1029644804" rel="stylesheet">




<script type="text/javascript">
var secure = "true";
var pwdDefaultEncryptSalt = "5mByJCbd295ILeas";
</script>

<body onload="loadFresh();">
<!--<div class="auth_bg">
    <img src="/authserver/custom/images/login-bg-autumn.jpg;jsessionid=THQBdr0hMGI9qOXLI7E-vzsnytL9qZcvWZLUwnoHEeQZECTH7ARg!1029644804" alt="">
</div>-->

<div class="auth_page_wrapper">
<div class="auth_logo">
    <img src="/authserver/custom/picture/logo.png;jsessionid=THQBdr0hMGI9qOXLI7E-vzsnytL9qZcvWZLUwnoHEeQZECTH7ARg!1029644804" alt="logo"/>
	<div class="auth-language">Language:
    <div class="auth-language-select">
        <select id="language" onchange="changeLanguage()">
            <option value="zh_CN">简体中文</option>
            <option value="en">English</option>
        </select>
    </div>
    </div>
	<div class="top-bar">
	    <a href="#" onclick="javascript:SetHome(this,'http://auth.sziit.edu.cn/authserver/login');return false;">设为首页</a> | <a href="#" onclick="javascript:browserEvent(this, 'http://auth.sziit.edu.cn/authserver/login','深圳信息职业技术学院信息IDS登录'); return false;">加入收藏</a>

	</div>
</div>
<div class="auth_login_content">
	<img class="mainbg" src="/authserver/custom/images/main-bg.jpg;jsessionid=THQBdr0hMGI9qOXLI7E-vzsnytL9qZcvWZLUwnoHEeQZECTH7ARg!1029644804" alt="">
    <div class="auth_login_left">
        <div class="auth_others">
            
                <h4>您还可以使用以下方式登录</h4>
                <ul>
                    
                        <li>
                            <a href="combinedLogin.do?type=qq&success=https://auth.sziit.edu.cn/authserver/login?service=https%3A%2F%2Fehall.sziit.edu.cn%3A443%2Fqljfwapp%2Fsys%2Fitpub%2Fcommon%2FheadPic.do%3Fid%3D1901010107"
                               style="display: inline-block;">
                                    <span class="auth_icon_bg">
                                        <i class="auth_icon_qq"></i>
                                    </span>
                                <span class="auth_icon_text">使用腾讯QQ登录</span>
                            </a>
                            

                        </li>
                    
                        <li>
                            <a href="combinedLogin.do?type=weixin&success=https://auth.sziit.edu.cn/authserver/login?service=https%3A%2F%2Fehall.sziit.edu.cn%3A443%2Fqljfwapp%2Fsys%2Fitpub%2Fcommon%2FheadPic.do%3Fid%3D1901010107"
                               style="display: inline-block;">
                                    <span class="auth_icon_bg">
                                        <i class="auth_icon_weixin"></i>
                                    </span>
                                <span class="auth_icon_text">使用微信登录</span>
                            </a>
                            

                        </li>
                    
                </ul>
            
        </div>
    </div>
    
        
        
        
            
        
    
    <div class="auth_login_right">
        <div class="auth_tab">
            <div class="auth_tab_links">
                <ul>
                    <li id="accountLogin" style="width:50%;" class="selected" tabid="01">
					    <img src="/authserver/custom/picture/title.png;jsessionid=THQBdr0hMGI9qOXLI7E-vzsnytL9qZcvWZLUwnoHEeQZECTH7ARg!1029644804" alt="title"/>
					</li>
                    
                        <li style="width:50%;" id="dyLogin" tabid="02"><i></i><span>动态码登录</span></li>
                    
					


                </ul>
            </div>
            <div class="clearfloat"></div>
            <div class="auth_tab_content">
                <div tabid="01" class="auth_tab_content_item">
                    <form id="casLoginForm" class="fm-v clearfix amp-login-form" role="form" action="/authserver/login?service=https%3A%2F%2Fehall.sziit.edu.cn%3A443%2Fqljfwapp%2Fsys%2Fitpub%2Fcommon%2FheadPic.do%3Fid%3D1901010107" method="post">
                        

                        <p>
                            <i class="auth_icon auth_icon_user"></i>
                            <input id="username" name="username" placeholder="用户名" class="auth_input" type="text" value=""/>
                            <span id="usernameError" style="display:none;" class="auth_error">请输入用户名</span>
                        </p>

                        <p>
                            <i class="auth_icon auth_icon_pwd"></i>
                            <input id="password" placeholder="密码" class="auth_input" type="password" value="" autocomplete="off"/>
						   <input id="passwordEncrypt" name="password" style="display:none;" type="text" value=""/>
                            <span id="passwordError" style="display:none;" class="auth_error">请输入密码</span>
                        </p>

                        <p id="cpatchaDiv">

                        </p>

                        
                            <p>
                                <input type="checkbox" name="rememberMe" id="rememberMe"/> <label
                                    onmousedown="javascript:$('.iCheck-helper').click();">一周内免登录</label>
                            </p>
                        

                        <p>
                            <button type="submit" class="auth_login_btn primary full_width">登录
                            </button>
                        </p>
						<div class="other_denglu">
							
                				<ul>
                    				
                            				<a href="combinedLogin.do?type=qq&success=https://auth.sziit.edu.cn/authserver/login?service=https%3A%2F%2Fehall.sziit.edu.cn%3A443%2Fqljfwapp%2Fsys%2Fitpub%2Fcommon%2FheadPic.do%3Fid%3D1901010107" style="display: inline-block;">
							       				<img src="/authserver/custom/picture/qq.png;jsessionid=THQBdr0hMGI9qOXLI7E-vzsnytL9qZcvWZLUwnoHEeQZECTH7ARg!1029644804" alt="title"/>
                            				</a>
                    				
                            				<a href="combinedLogin.do?type=weixin&success=https://auth.sziit.edu.cn/authserver/login?service=https%3A%2F%2Fehall.sziit.edu.cn%3A443%2Fqljfwapp%2Fsys%2Fitpub%2Fcommon%2FheadPic.do%3Fid%3D1901010107" style="display: inline-block;">
							       				<img src="/authserver/custom/picture/weixin.png;jsessionid=THQBdr0hMGI9qOXLI7E-vzsnytL9qZcvWZLUwnoHEeQZECTH7ARg!1029644804" alt="title"/>
                            				</a>
                    				
                				</ul>
            				
						</div>
                        <a id="getBackPasswordMainPage" href="getBackPasswordMainPage.do" class="auth_login_forgetp">
                            <small>忘记密码？</small>
                        </a>

                        <input type="hidden" name="lt" value="LT-1451215-Ah6F6WlA1Xb12yaEUyZqunh4DSDxXp1610637294880-e6ub-cas"/>
                        <input type="hidden" name="dllt" value="userNamePasswordLogin"/>
                        <input type="hidden" name="execution" value="e1s1"/>
                        <input type="hidden" name="_eventId" value="submit"/>
                        <input type="hidden" name="rmShown" value="1">
						<input type="hidden" id="pwdDefaultEncryptSalt" value="5mByJCbd295ILeas"/>
                    </form>
                </div>
                
                    <div tabid="02" class="auth_tab_content_item" style="display:none;">
                        <form id="casDynamicLoginForm" class="fm-v clearfix amp-login-form" action="/authserver/login?service=https%3A%2F%2Fehall.sziit.edu.cn%3A443%2Fqljfwapp%2Fsys%2Fitpub%2Fcommon%2FheadPic.do%3Fid%3D1901010107" method="post">

                            

                            <p>
                                <i class="auth_icon auth_icon_user"></i>
                                <input id="username" name="username" placeholder="用户名" class="auth_input" type="text" value=""/>
                                <span id="dynamicNameError" style="display:none;" class="auth_error">请输入用户名</span>
                            </p>

							<p>
							<i class="auth_icon auth_icon_bar"></i>
							<input type="text" placeholder="验证码" id="dynamicCodeCaptchaResponse" name="captchaResponse"
							class="auth_input captcha-input" style="width:95px;"/>
							<img id="dynamicCodeCaptchaImg" class="captcha-img abs_right" alt="验证码" title="验证码"/>
							<span style="cursor: pointer;color: #1dadff;margin-left: 2px;" id="dynamicCodeChangeCaptcha"
							class="chk_text"></span>
							<span id="dyCpatchaError" style="display:none;" class="auth_error">请输入验证码</span>
							</p>


                            <p>
                                <i class="auth_icon auth_icon_pwd"></i>
                                <input type="text" class="auth_input" id="dynamicCode" name="dynamicCode"
                                       placeholder="动态码" style="width:95px;"/>
                                <input type="button" id="getDynamicCode" value="获取动态码"
                                       class="auth_login_btn warning abs_right dynamicCode"/>
                                <span id="dynamicCodeError" style="display:none;"
                                      class="auth_error">请输入动态码</span>
                            </p>

                            <p style="min-height: 25px;margin-bottom: 15px;">
                                 <span id="sendCodeWarnMessage"
                                       style="font-size: 12px;color: rgb(230, 142, 142);margin: 14px;"></span>
                            </p>

                            <p style="margin-bottom: 34px;margin-bottom: 37px\9;">
                                <button type="submit" class="auth_login_btn primary full_width">登录
                                </button>
                            </p>

                            <input type="hidden" name="lt" value="LT-1451215-Ah6F6WlA1Xb12yaEUyZqunh4DSDxXp1610637294880-e6ub-cas"/>
                            <input type="hidden" name="dllt" value="dynamicLogin"/>
                            <input type="hidden" name="execution" value="e1s1"/>
                            <input type="hidden" name="_eventId" value="submit"/>
                            <input type="hidden" name="rmShown" value="1">
							<input type="hidden" id="dynamicPwdEncryptSalt" value="oNCd7iJtLlYJmciW"/>
                        </form>
                    </div>
                
                   

                
                
            </div>
        </div>
    </div>
</div>

<div id="hidenCaptchaDiv" style="display: none;">
    <i class="auth_icon auth_icon_bar"></i>
    <input type="text" placeholder="验证码" id="captchaResponse" name="captchaResponse"
           class="auth_input captcha-input"/>
    <img id="captchaImg" class="captcha-img" src="captcha.html" alt="验证码" title="验证码"/>
            <span style="cursor: pointer;color: #1dadff;margin-left: 2px;" id="changeCaptcha"
                  class="chk_text"></span>
    <span id="cpatchaError" style="display:none;" class="auth_error">请输入验证码</span>
</div>


<div class="clearfloat"></div>
<div class="auth_login_footer">
    <div class="foot-left">
	    <div class="foot-pic"><img src="/authserver/custom/picture/service.png;jsessionid=THQBdr0hMGI9qOXLI7E-vzsnytL9qZcvWZLUwnoHEeQZECTH7ARg!1029644804" alt="title"/></div>
	    <div class="foot-list">
		    <ul>
			    <li>1.浏览器建议采用IE8-10版本。</li>
			    <li>2.登录账号为工号（教工）或学号（学生），初始密码为身份证号后6位。</li>
			    <li><a href="https://www.sziit.edu.cn/file/OA.rar">3.OA系统辅助程序安装包。</a></li>
			</ul>
		</div>
	</div>
	<div class="foot-right">
	    <p align="right"><span style="font-family:arial;">深圳信息职业技术学院  All Rights Reserved. </span></p>
	    <p align="right" style="text-indent:100px;">技术支持部门：信息中心   办公地点：科技楼402   电话：89226524</p>
	</div>
</div>
</div>

<script type="text/javascript" src="/authserver/custom/js/jquery.min.js;jsessionid=THQBdr0hMGI9qOXLI7E-vzsnytL9qZcvWZLUwnoHEeQZECTH7ARg!1029644804"></script>
<script type="text/javascript" src="/authserver/custom/js/login-language.js;jsessionid=THQBdr0hMGI9qOXLI7E-vzsnytL9qZcvWZLUwnoHEeQZECTH7ARg!1029644804"></script>
<script type="text/javascript" src="/authserver/custom/js/icheck.min.js;jsessionid=THQBdr0hMGI9qOXLI7E-vzsnytL9qZcvWZLUwnoHEeQZECTH7ARg!1029644804"></script>

<script type="text/javascript" src="/authserver/custom/js/login.js;jsessionid=THQBdr0hMGI9qOXLI7E-vzsnytL9qZcvWZLUwnoHEeQZECTH7ARg!1029644804?v=1.0"></script>
<script type="text/javascript" src="/authserver/custom/js/login-wisedu_v1.0.js;jsessionid=THQBdr0hMGI9qOXLI7E-vzsnytL9qZcvWZLUwnoHEeQZECTH7ARg!1029644804?v=1.0"></script>
<script type="text/javascript" src="/authserver/custom/js/encrypt.js;jsessionid=THQBdr0hMGI9qOXLI7E-vzsnytL9qZcvWZLUwnoHEeQZECTH7ARg!1029644804"></script>

<script type="text/javascript">

    // 选中tab框
    var dllt = '';
	   if (dllt != '' &&dllt == 'dynamicLogin') {
selectLi($("#dyLogin"));
} else if (dllt != '' &&dllt == 'qrLogin'){
getQrCode();
countDown();
selectLi($("#qrLogin"));
    } else {
selectLi($("#accountLogin"));
    }


    $(document).ready(function () {
if (dllt != '' && dllt == 'dynamicLogin') {
}else{
   $("#captchaImg").attr("src","captcha.html?ts=" + new Date().getMilliseconds());
}
        

        var service = GetQueryString("service");
        if (service) {
            $("#getBackPasswordMainPage").attr("href", "getBackPasswordMainPage.do?service=" + encodeURIComponent(service));
        }
    });


</script>
</body>

</html>
    

