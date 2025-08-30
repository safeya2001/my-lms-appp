import React from 'react';

const Footer = ({ setCurrentPage }) => (
  <footer className="bg-gray-800 text-white p-6 sm:p-12 mt-12">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        https://wpdemothemes.com/edusion/wp-content/themes/edusion/assets/images/all-img/logo.png
        <p className="text-sm text-gray-400 mt-2">
        
        </p>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-4"></h4>
        <ul className="space-y-2">
          <li>
            <a href="#" onClick={() => setCurrentPage('home')} className="text-gray-400 hover:text-white">
        
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setCurrentPage('about')} className="text-gray-400 hover:text-white">
              عنّا
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setCurrentPage('courses')} className="text-gray-400 hover:text-white">
              الدورات
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setCurrentPage('contact')} className="text-gray-400 hover:text-white">
              الاتصال
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-4">الدعم</h4>
        <ul className="space-y-2">
          <li>
            <a href="#" className="text-gray-400 hover:text-white">الأسئلة الشائعة</a>
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-white">سياسة الخصوصية</a>
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-white">شروط الاستخدام</a>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-4">تابعنا</h4>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">فيسبوك</a>
          <a href="#" className="text-gray-400 hover:text-white">تويتر</a>
          <a href="#" className="text-gray-400 hover:text-white">لينكدإن</a>
        </div>
      </div>
    </div>

    <div className="mt-8 text-center text-sm text-gray-400">
      &copy; 2024 Edusion. جميع الحقوق محفوظة.
    </div>
  </footer>
);

export default Footer;