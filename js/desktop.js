//======================================
// Magic OS Desktop.js  V2
//======================================


//=========================
// 时钟
//=========================

function updateClock(){

    const now = new Date();

    const hour = String(now.getHours()).padStart(2,"0");
    const minute = String(now.getMinutes()).padStart(2,"0");

    document.getElementById("clock").innerHTML =
        hour + ":" + minute;

}

updateClock();

setInterval(updateClock,1000);


//=========================
// 登录
//=========================

const loginWindow = document.getElementById("wechat-login");

const loginBtn = document.getElementById("login-btn");

const loginError = document.getElementById("login-error");

const phone = document.getElementById("phone");

const password = document.getElementById("password");

const loginAvatar = document.getElementById("login-avatar");

//=========================
// 登录头像切换
//=========================

const loginDefault =
document.getElementById("login-default");


const loginName =
document.getElementById("login-name");

phone.addEventListener("input",function(){

    if(phone.value=="79536"){

        loginAvatar.src="images/avatar/magictouxiang.jpg";
        loginName.innerHTML="Magic";

    }

    else if(phone.value=="62548548"){

        loginAvatar.src="images/avatar/sirentouxiang.jpg";
        loginName.innerHTML="马杰";

    }

    else{

        loginAvatar.src="images/icons/wechat.png";
        loginName.innerHTML="微信";

    }

});

//=========================
// 两个微信窗口
//=========================

const workWechat = document.getElementById("wechat-window");

const privateWechat = document.getElementById("wechat-private-window");


//=========================
// 登录判断
//=========================

loginBtn.onclick = function(){

    // 工作微信
    if(
        phone.value=="79536"
        &&
        password.value=="19880709"
    ){

        loginError.innerHTML="";

        loginWindow.classList.add("hidden");

        workWechat.classList.remove("hidden");

        return;

    }


    // 私人微信
    if(
        phone.value=="62548548"
        &&
        password.value=="20150923"
    ){

        loginError.innerHTML="";

        loginWindow.classList.add("hidden");

        privateWechat.classList.remove("hidden");

        return;

    }


    // 密码错误
    if(
        phone.value=="79536"
        ||
        phone.value=="62548548"
    ){

        loginError.innerHTML="密码错误";

    }

    else{

        loginError.innerHTML="账号不存在";

    }

};



//=========================
// 工作微信关闭
//=========================

const workClose =
document.getElementById("wechat-close");

workClose.onclick = function(){

    workWechat.classList.add("hidden");

    loginWindow.classList.remove("hidden");

};



//=========================
// 私人微信关闭
//=========================

const privateClose =
document.getElementById("wechat-private-close");

privateClose.onclick = function(){

    privateWechat.classList.add("hidden");

    loginWindow.classList.remove("hidden");

};
//=========================
// 工作微信菜单
//=========================

const menuBtn = document.getElementById("menu-btn");

const userMenu = document.getElementById("user-menu");

menuBtn.onclick = function(){

    userMenu.classList.toggle("hidden");

};


//=========================
// 私人微信菜单
//=========================

const privateMenuBtn =
document.getElementById("private-menu-btn");

const privateUserMenu =
document.getElementById("private-user-menu");

privateMenuBtn.onclick = function(){

    privateUserMenu.classList.toggle("hidden");

};


//=========================
// 工作微信退出登录
//=========================

const logout =
document.getElementById("logout");

logout.onclick = function(){

    workWechat.classList.add("hidden");

    loginWindow.classList.remove("hidden");

    phone.value="";

    password.value="";

};


//=========================
// 私人微信退出登录
//=========================

const privateLogout =
document.getElementById("private-logout");

privateLogout.onclick = function(){

    privateWechat.classList.add("hidden");

    loginWindow.classList.remove("hidden");

    phone.value="";

    password.value="";

};


//=========================
// 工作微信聊天
//=========================

const contactFile =
document.getElementById("contact-file");
const contactCoffee =
document.getElementById("contact-coffee");

const chatCoffee =
document.getElementById("chat-coffee");
const chatFile =
document.getElementById("chat-file");

chatFile.classList.add("active");

contactFile.onclick=function(){

    chatFile.classList.add("active");

};


//=========================
// 工作微信通讯录
//=========================

const chatBtn =
document.getElementById("chat-btn");

const contactBtn =
document.getElementById("contact-btn");

const chatList =
document.querySelector(".chat-list");

const contactPage =
document.getElementById("contact-page");


contactBtn.onclick = function(){

    chatList.style.display = "none";

    contactPage.classList.remove("hidden");   // 新增

    contactPage.classList.add("active");

    chatFile.classList.remove("active");

    chatBtn.classList.remove("active");

    contactBtn.classList.add("active");

};


chatBtn.onclick = function(){

    chatList.style.display = "block";

    contactPage.classList.remove("active");

    contactPage.classList.add("hidden");      // 新增

    chatFile.classList.add("active");

    chatBtn.classList.add("active");

    contactBtn.classList.remove("active");

};
//=========================
// 隐藏所有工作聊天
//=========================

function hideChats(){

    chatFile.classList.remove("active");

    chatCoffee.classList.remove("active");

}

//=========================
// 点击咖啡
//=========================
contactCoffee.onclick=function(){

    hideChats();

    chatCoffee.classList.add("active");

    document
        .querySelectorAll(".chat-item")
        .forEach(item=>item.classList.remove("active"));

    contactCoffee.classList.add("active");

};
//=========================
// 点击文件
//=========================
contactFile.onclick=function(){

    hideChats();

    chatFile.classList.add("active");

    document
        .querySelectorAll(".chat-item")
        .forEach(item=>item.classList.remove("active"));

    contactFile.classList.add("active");

};

//=========================
// 私人微信聊天
//=========================

const privateContactLiuliu =
document.getElementById("private-contact-liuliu");

const privateContactPanni =
document.getElementById("private-contact-panni");

const privateContactXuyunfeng =
document.getElementById("private-contact-xuyunfeng");

const privateChatLiuliu =
document.getElementById("private-chat-liuliu");

const privateChatPanni =
document.getElementById("private-chat-panni");

const privateChatXuyunfeng =
document.getElementById("private-chat-xuyunfeng");


// 默认显示溜溜

privateChatLiuliu.classList.add("active");
privateContactLiuliu.classList.add("active");

privateChatPanni.classList.remove("active");
privateContactPanni.classList.remove("active");

privateChatXuyunfeng.classList.remove("active");
privateContactXuyunfeng.classList.remove("active");

//=========================
// 隐藏所有私人聊天
//=========================

function hidePrivateChats(){

    privateChatLiuliu.classList.remove("active");

    privateChatPanni.classList.remove("active");

    privateChatXuyunfeng.classList.remove("active");

}
//=========================
// 隐藏所有联系人高亮
//=========================

function hidePrivateContacts(){

    privateContactLiuliu.classList.remove("active");

    privateContactPanni.classList.remove("active");

    privateContactXuyunfeng.classList.remove("active");

}


//=========================
// 点击溜溜
//=========================

privateContactLiuliu.onclick=function(){

    hidePrivateChats();

    hidePrivateContacts();

    privateChatLiuliu.classList.add("active");

    privateContactLiuliu.classList.add("active");

};

//=========================
// 点击潘妮
//=========================

privateContactPanni.onclick=function(){

    hidePrivateChats();

    hidePrivateContacts();

    privateChatPanni.classList.add("active");

    privateContactPanni.classList.add("active");

};

//=========================
// 点击徐云峰
//=========================

privateContactXuyunfeng.onclick=function(){

    hidePrivateChats();

    hidePrivateContacts();

    privateChatXuyunfeng.classList.add("active");

    privateContactXuyunfeng.classList.add("active");

};

//=========================
// 私人微信通讯录
//=========================

const privateChatBtn =
document.getElementById("private-chat-btn");

const privateContactBtn =
document.getElementById("private-contact-btn");

const privateChatList =
document.getElementById("private-chat-list");

const privateContactPage =
document.getElementById("private-contact-page");



privateContactBtn.onclick=function(){

    privateChatList.style.display="none";

    privateContactPage.classList.remove("hidden"); // 新增

    privateContactPage.classList.add("active");

    privateContactBtn.classList.add("active");

    privateChatBtn.classList.remove("active");

};



privateChatBtn.onclick=function(){

    privateChatList.style.display="block";

    privateContactPage.classList.remove("active");

    privateContactPage.classList.add("hidden"); // 新增

    privateChatBtn.classList.add("active");

    privateContactBtn.classList.remove("active");

};

//=========================
// 桌面微信图标
//=========================

const wechatIcon =
document.getElementById("wechat-icon");

wechatIcon.onclick = function(){

    loginWindow.classList.remove("hidden");

};



//=========================
// 登录窗口关闭按钮
//=========================

const loginClose =
document.querySelector(".close-btn");

if(loginClose){

    loginClose.onclick = function(){

        loginWindow.classList.add("hidden");

        loginError.innerHTML="";

        phone.value="";

        password.value="";

    };

}



//=========================
// 回车登录
//=========================

password.addEventListener("keydown",function(e){

    if(e.key==="Enter"){

        loginBtn.click();

    }

});

phone.addEventListener("keydown",function(e){

    if(e.key==="Enter"){

        loginBtn.click();

    }

});



//=========================
// 页面初始化
//=========================

// 登录窗口默认隐藏

loginWindow.classList.add("hidden");

// 两个微信默认隐藏

workWechat.classList.add("hidden");

privateWechat.classList.add("hidden");


// 工作通讯录默认隐藏

contactPage.classList.add("hidden");


// 私人通讯录默认隐藏

privateContactPage.classList.add("hidden");


// 默认聊天按钮高亮

chatBtn.classList.add("active");

contactBtn.classList.remove("active");

privateChatBtn.classList.add("active");

privateContactBtn.classList.remove("active");


// 默认聊天窗口

chatFile.classList.add("active");

privateChatLiuliu.classList.add("active");

privateChatPanni.classList.remove("active");



//=========================
// 防止菜单一直开着
//=========================

document.addEventListener("click",function(e){

    if(menuBtn && userMenu){

        if(
            !menuBtn.contains(e.target)
            &&
            !userMenu.contains(e.target)
        ){

            userMenu.classList.add("hidden");

        }

    }


    if(privateMenuBtn && privateUserMenu){

        if(
            !privateMenuBtn.contains(e.target)
            &&
            !privateUserMenu.contains(e.target)
        ){

            privateUserMenu.classList.add("hidden");

        }

    }

});



//=========================
// End
//=========================

console.log("Magic OS Desktop Loaded.");
//=========================
// 朋友圈
//=========================

const momentsBtn =
document.getElementById("moments-btn");

const momentsWindow =
document.getElementById("moments-window");

const momentsClose =
document.getElementById("moments-close");


// 打开朋友圈
momentsBtn.onclick = function(){

    momentsWindow.classList.remove("hidden");

}


// 关闭朋友圈
momentsClose.onclick = function(){

    momentsWindow.classList.add("hidden");

}
momentsBtn.onclick=function(){

    momentsWindow.classList.remove("hidden");

    momentsWindow.style.zIndex=9999;

}

// 私人朋友圈
const privateMomentsBtn =
document.getElementById("private-moments-btn");

const privateMomentsWindow =
document.getElementById("private-moments-window");

const privateMomentsClose =
document.getElementById("private-moments-close");

privateMomentsBtn.onclick=function(){

    privateMomentsWindow.classList.remove("hidden");

}

privateMomentsClose.onclick=function(){

    privateMomentsWindow.classList.add("hidden");

}
//短信界面
/*==================================
            Messages
==================================*/

const messagesBtn =
document.getElementById("messages-btn");

const messagesWindow =
document.getElementById("messages-window");

const messagesClose =
document.getElementById("messages-close");

messagesBtn.onclick=function(){

    messagesWindow.classList.remove("hidden");

    messagesWindow.style.zIndex=9999;

}

messagesClose.onclick=function(){

    messagesWindow.classList.add("hidden");

}

/*==================================
        Messages 联系人切换
==================================*/

const contacts =
document.querySelectorAll(".message-contact");

const chats =
document.querySelectorAll(".chat-page");

contacts.forEach(contact=>{

    contact.onclick=function(){

        contacts.forEach(c=>{

            c.classList.remove("active");

        });

        chats.forEach(chat=>{

            chat.classList.remove("active");

        });

        contact.classList.add("active");

        const chatId=
        contact.dataset.chat;

        document
        .getElementById(chatId)
        .classList.add("active");

    }

});

//baidu
const input = document.getElementById("browser-search");
const button = document.getElementById("browser-search-btn");

button.onclick = search;

input.addEventListener("keydown",function(e){

    if(e.key==="Enter"){
        search();
    }

});

function search(){

    const text = input.value.trim();

    if(text.includes("年会")){


        document.getElementById("meeting-window").classList.remove("hidden");

    }

}
//=========================
// Browser
//=========================

const browserBtn =
document.getElementById("browser-btn");

const browserWindow =
document.getElementById("browser-window");

const browserClose =
document.getElementById("browser-close");

browserBtn.onclick = function(){

    browserWindow.classList.remove("hidden");

    browserWindow.style.zIndex = 9999;

}

browserClose.onclick = function(){

    browserWindow.classList.add("hidden");

}
//=========================
// Meeting
//=========================

const meetingWindow =
document.getElementById("meeting-window");

const meetingClose =
document.getElementById("meeting-close");

const meetingBack =
document.getElementById("meeting-back");

// 关闭
meetingClose.onclick = function(){

    meetingWindow.classList.add("hidden");

}

// 返回浏览器
meetingBack.onclick = function(){

    meetingWindow.classList.add("hidden");

    browserWindow.classList.remove("hidden");

}

//=========================
// Forum
//=========================

const forumBtn =
document.getElementById("forum-btn");

const forumWindow =
document.getElementById("forum-window");

const forumClose =
document.getElementById("forum-close");

forumBtn.onclick = function(){

    forumWindow.classList.remove("hidden");

    forumWindow.style.zIndex = 9999;

}

forumClose.onclick = function(){

    forumWindow.classList.add("hidden");

}

//=========================
// Forum Post2
//=========================

const post2Window =
document.getElementById("post2-window");

const post2Close =
document.getElementById("post2-close");

const post2Back =
document.getElementById("post2-back");

post2Close.onclick=function(){

    post2Window.classList.add("hidden");

}

post2Back.onclick=function(){

    post2Window.classList.add("hidden");

    forumWindow.classList.remove("hidden");

}
//=========================
// Forum Posts
//=========================

const posts =
document.querySelectorAll(".forum-post");

posts.forEach(post=>{

    post.onclick=function(){

        const target = this.dataset.target;

        // 没有 data-target，什么都不做
        if(!target){
            return;
        }

        // 隐藏论坛首页
        forumWindow.classList.add("hidden");

        // 打开对应帖子
        document
        .getElementById(target)
        .classList.remove("hidden");

    }

});
const signinBtn =
document.getElementById("signin-btn");

const signinScreen =
document.getElementById("signin-screen");

const desktop =
document.getElementById("desktop");

const userXiaoa =
document.getElementById("user-xiaoa");

const userMagic =
document.getElementById("user-magic");

const signinAvatar =
document.getElementById("signin-avatar");

const signinName =
document.getElementById("signin-name");

const signinPassword =
document.getElementById("signin-password");

let currentUser="xiaoa";

userMagic.onclick=function(){

    currentUser="magic";

    signinAvatar.src="images/avatar/magictouxiang.jpg";

    signinName.innerText="Magic";

    signinPassword.classList.remove("hidden");

    userMagic.classList.add("active");

    userXiaoa.classList.remove("active");

}
userXiaoa.onclick=function(){

    currentUser="xiaoa";

    signinAvatar.src="images/avatar/xiaoatouxiang.jpg";

    signinName.innerText="小A";

    signinPassword.classList.add("hidden");

    userXiaoa.classList.add("active");

    userMagic.classList.remove("active");

}
signinBtn.onclick=function(){

    if(currentUser==="magic"){

        signinScreen.classList.add("hidden");

        desktop.classList.remove("hidden");

    }

}