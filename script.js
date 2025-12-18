// --- DATA SECTION ---
const skillsData = [
    // Skills with descriptive knowledge points (info)
    { category: "Programming", name: "Core Java", info: "Mastery of OOPs, Collections, Exception Handling, Access Specifiers, and Typecasting.", icon: "fab fa-java" },
    { category: "Database/SQL", name: "DBMS/RDBMS/SQL", info: "Fluent in DDL/DML/DQL/TCL, Joins, Subqueries, Stored Procedures, Views, Functions, and MySQL.", icon: "fas fa-table" },
    { category: "Web Technologies", name: "HTML, CSS, DOM", info: "Strong foundation in semantic HTML5, CSS for responsive design, and DOM/BOM manipulation.", icon: "fab fa-html5" },
    { category: "Web/Async JS", name: "JavaScript/Async", info: "Experience with Hoisting, Promises, Async/Await, and local/session storage.", icon: "fab fa-js" },
    { category: "Frameworks/ORM", name: "JDBC & Hibernate", info: "Proficient in CRUD operations using JDBC and ORM principles with Hibernate/JPA mapping.", icon: "fas fa-database" },
    { category: "AI/Tools", name: "Python / Deep Learning", info: "Applied Python fundamentals for Deep Learning classification and image preprocessing.", icon: "fas fa-brain" },
];

document.addEventListener('DOMContentLoaded', () => {

    // --- THEME TOGGLE LOGIC ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;

    function loadTheme() {
        // Retrieve theme from localStorage or default to 'dark-theme'
        const savedTheme = localStorage.getItem('theme') || 'dark-theme';
        body.classList.remove('dark-theme', 'light-theme');
        body.classList.add(savedTheme);
        updateThemeIcon(savedTheme);
    }

    function updateThemeIcon(theme) {
        if (theme === 'light-theme') {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        } else {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = body.classList.contains('light-theme') ? 'light-theme' : 'dark-theme';
            const newTheme = currentTheme === 'dark-theme' ? 'light-theme' : 'dark-theme';

            body.classList.remove(currentTheme);
            body.classList.add(newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });
    }

    // --- MOBILE MENU LOGIC ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Hide mobile menu after clicking a link
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }


    // --- SKILLS RENDERING LOGIC ---
    const skillsGrid = document.getElementById('skills-grid');

    function renderSkills() {
        if (!skillsGrid) return;
        
        skillsGrid.innerHTML = skillsData.map(skill => `
            <div class="neon-card p-6 rounded-xl transition duration-300 hover:scale-[1.03] hover:shadow-2xl">
                <div class="flex items-center space-x-4 mb-3">
                    <i class="${skill.icon} text-2xl neon-text"></i>
                    <h4 class="text-xl font-semibold">${skill.name}</h4>
                </div>
                <p class="text-sm text-gray-500">${skill.category}</p>
                <p class="text-sm mt-3 text-gray-400 leading-relaxed">
                    <i class="fas fa-check-circle text-xs mr-2 text-green-400"></i>
                    ${skill.info}
                </p>
            </div>
        `).join('');
    }

    // --- INITIALIZATION ---
    loadTheme();
    renderSkills();

    // Simple smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});