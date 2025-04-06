# NoWechatOnPropertyWeb

我不要在微信打开总务处报修！！！

当我使用微信访问总务处公众号报修的时候，我发现这玩意就是一个网页，于是我使用了浏览器打开，结果发现它要求我用微信打开，看了看网页源代码就发现了端倪

访问 [http://hqgl.gdut.edu.cn/wechat/bind/](http://hqgl.gdut.edu.cn/wechat/bind/) 就可以去到总务处的登录页面（需要校园网）

```html
<script type="text/javascript">  
function isWeiXin(){
  //window.navigator.userAgent属性包含了浏览器类型、版本、操作系统类型、浏览器引擎类型等信息，这个属性可以用来判断浏览器类型
  var ua = window.navigator.userAgent.toLowerCase();
  //通过正则表达式匹配ua中是否含有MicroMessenger字符串
  if(ua.match(/MicroMessenger/i) == 'micromessenger'){
  return true;
  }else{
  return false;
  }
}
if(!isWeiXin()){
    alert("请在微信内访问");
    window.location.href="http://hqgl.gdut.edu.cn";
}

var openid = '';
if(openid != '')
{
   window.localStorage['openid']=openid;
}
else
{
   if( window.localStorage['openid'] != '')
   {
       openid=window.localStorage['openid'];
	//   alert(openid);
   }
}

</script>
```

没错，它是直接判断你的 UA 里面是否存在微信的字段来判断你是否在微信打开的，但是问题是你没有用到微信的 openid 的功能啊……那我何必用微信打开呢？？？

所以就写了这么一个脚本，你可以直接在油叉安装，也可以通过 Github 直接下载到此脚本，安装完毕后直接访问上面提到的那个链接登录后报修就行了

- 油叉链接：https://greasyfork.org/zh-CN/scripts/531974-%E6%88%91%E4%B8%8D%E8%A6%81%E7%94%A8%E5%BE%AE%E4%BF%A1%E6%89%93%E5%BC%80-gdut-%E6%80%BB%E5%8A%A1%E5%A4%84
- Github 文件直链：https://github.com/GDUTMeow/NoWechatOnPropertyWeb/raw/refs/heads/master/NoWechatOnPropertyWeb.user.js