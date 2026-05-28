document.addEventListener('DOMContentLoaded', () => {
    const shutterBtn = document.querySelector('.button');
    const flashElement = document.querySelector('.flash');

    // بررسی وجود المنت‌ها برای جلوگیری از خطا در کنسول
    if (!shutterBtn || !flashElement) {
        console.warn('المنت‌های .button یا .flash در صفحه یافت نشدند.');
        return;
    }

    shutterBtn.addEventListener('click', () => {
        // جلوگیری از کلیک‌های رگباری هنگام اجرای انیمیشن
        if (flashElement.classList.contains('active')) return;

        // فعال‌سازی کلاس انیمیشن
        flashElement.classList.add('active');

        // پس از اتمام انیمیشن (250ms)، کلاس را حذف می‌کنیم تا برای کلیک بعدی آماده شود
        setTimeout(() => {
            flashElement.classList.remove('active');
        }, 250);
    });
});