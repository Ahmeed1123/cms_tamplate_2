document.addEventListener("DOMContentLoaded", function() {
    // اضافة معالج الحدث click لكل عنصر في النافبار
    document.querySelectorAll('.custom-navbar-nav .custom-nav-item').forEach(function(item) {
      item.addEventListener('click', function() {
        // ازالة العنصر المحدد من الكلاسات المفعلة
        document.querySelectorAll('.custom-navbar-nav .custom-nav-item').forEach(function(item) {
          item.classList.remove('activ');
        });
        // ازالة العنصر المحدد من الكلاسات المفعلة
        document.querySelectorAll('.custom-section').forEach(function(section) {
          section.classList.remove('activ');
        });
        // اضافة الكلاس المفعل للعنصر المحدد
        this.classList.add('activ');
        // احضار الهدف المراد وتنشيطه
        var target = this.querySelector('.custom-nav-link').getAttribute('href').substr(1);
        document.getElementById(target).classList.add('activ');
      });
    });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.question').forEach(function(question) {
        question.addEventListener('click', function() {
            var answer = this.nextElementSibling;
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        });
    });
});

// profile page script

    // تحديد الأزرار والمحتوى
    const buttons = document.querySelectorAll('.toggle-button-profil');
    const contents = document.querySelectorAll('.toggle-content-profil');

    // إضافة معالج الحدث لكل زرار
    buttons.forEach((button, index) => {
      button.addEventListener('click', () => {
        // إزالة النشاط من جميع الأزرار والمحتوى
        buttons.forEach(button => button.classList.remove('active-profil'));
        contents.forEach(content => content.classList.remove('active-profil'));
        
        // إضافة النشاط للزرار والمحتوى المناسبين
        button.classList.add('active-profil');
        contents[index].classList.add('active-profil');
      });
    });

// ////////////////////////////////////

document.addEventListener("DOMContentLoaded", function() {
  const loginButton = document.getElementById("loginButton");
  const profileButton = document.getElementById("profileButton");
  const loginPopup = document.getElementById("loginPopup");
  const form = loginPopup.querySelector("form");

  loginButton.addEventListener("click", function() {
    loginPopup.style.display = "block";
  });

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    // تغيير نص زر "تسجيل الدخول" إلى "تسجيل الخروج"
    loginButton.textContent = "تسجيل الخروج";
    loginButton.classList.add("logged-in"); // إضافة السمة لتغيير لون الزر
    // إظهار زر الصفحة الشخصية بعد تسجيل الدخول
    profileButton.style.display = "inline";
    loginPopup.style.display = "none";
  });

  loginButton.addEventListener("click", function() {
    if (loginButton.textContent === "تسجيل الخروج") {
      // إعادة تعيين الزر إلى "تسجيل الدخول" عند النقر عليه
      loginButton.textContent = "تسجيل الدخول";
      loginButton.classList.remove("logged-in"); // إزالة السمة للعودة إلى لون الزر الأصلي
      // إخفاء زر الصفحة الشخصية بعد تسجيل الخروج
      profileButton.style.display = "none";
      // إعادة تحميل الصفحة
      location.reload();
    }
  });

  profileButton.addEventListener("click", function() {
    // افتح الصفحة الرئيسية
    window.location.href = "الصفحة الرئيسية"; // قم بتغيير هذا الرابط برابط الصفحة الرئيسية الفعلي
  });
});

function closePopup() {
  document.getElementById("loginPopup").style.display = "none";
}