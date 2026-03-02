/* ═══════════════════════════════════════════════════════
   GitHub Profile README Generator v4 — Application Logic
   Wotfard font, all social platforms with icons,
   drag splitters, closable preview, font sizing
   ═══════════════════════════════════════════════════════ */
; (function () {
    'use strict';

    /* ── TECH STACK ── */
    const TECH_CATEGORIES = {
        'Frontend': {
            color: '#3b82f6', items: [
                { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
                { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
                { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
                { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
                { name: 'Svelte', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg' },
                { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
                { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
                { name: 'Sass', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' },
                { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
                { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
                { name: 'jQuery', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg' },
                { name: 'Nuxt.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg' },
            ]
        },
        'Backend': {
            color: '#22c55e', items: [
                { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
                { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
                { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
                { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
                { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
                { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
                { name: 'Rails', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg' },
                { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
                { name: 'NestJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg' },
                { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
            ]
        },
        'Database': {
            color: '#f59e0b', items: [
                { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
                { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
                { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
                { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
                { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
                { name: 'SQLite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg' },
                { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg' },
            ]
        },
        'Languages': {
            color: '#06b6d4', items: [
                { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
                { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
                { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
                { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
                { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
                { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
                { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
                { name: 'Go', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' },
                { name: 'Rust', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg' },
                { name: 'Swift', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg' },
                { name: 'Kotlin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
                { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
                { name: 'Ruby', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg' },
                { name: 'Dart', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg' },
                { name: 'Scala', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scala/scala-original.svg' },
                { name: 'R', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg' },
                { name: 'Lua', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-original.svg' },
            ]
        },
        'DevOps & Cloud': {
            color: '#ef4444', items: [
                { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
                { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg' },
                { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
                { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
                { name: 'GCP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
                { name: 'Nginx', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg' },
                { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
                { name: 'GitHub Actions', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg' },
                { name: 'Terraform', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg' },
                { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' },
                { name: 'Netlify', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg' },
                { name: 'Heroku', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg' },
            ]
        },
        'Mobile': {
            color: '#8b5cf6', items: [
                { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
                { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
                { name: 'Android', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg' },
                { name: 'iOS/Swift', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg' },
            ]
        },
        'Tools': {
            color: '#ec4899', items: [
                { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
                { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
                { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
                { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
                { name: 'Webpack', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg' },
                { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
                { name: 'npm', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg' },
                { name: 'Yarn', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg' },
            ]
        },
        'Testing': {
            color: '#14b8a6', items: [
                { name: 'Jest', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg' },
                { name: 'Mocha', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg' },
                { name: 'Pytest', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original.svg' },
                { name: 'Selenium', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg' },
                { name: 'Cypress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cypressio/cypressio-original.svg' },
            ]
        },
        'AI / ML': {
            color: '#a855f7', items: [
                { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
                { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
                { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
                { name: 'NumPy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
                { name: 'Jupyter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg' },
                { name: 'Scikit-learn', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg' },
                { name: 'OpenCV', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },
                { name: 'Keras', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg' },
                { name: 'Matplotlib', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg' },
                { name: 'Anaconda', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/anaconda/anaconda-original.svg' },
            ]
        },
        'Framework': {
            color: '#0ea5e9', items: [
                { name: 'Electron', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg' },
                { name: '.NET', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg' },
                { name: 'Qt', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/qt/qt-original.svg' },
                { name: 'Quasar', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/quasar/quasar-original.svg' },
            ]
        },
        'Data Visualization': {
            color: '#f97316', items: [
                { name: 'D3.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/d3js/d3js-original.svg' },
                { name: 'Grafana', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg' },
            ]
        },
        'Game Engines': {
            color: '#84cc16', items: [
                { name: 'Unity', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg' },
                { name: 'Unreal Engine', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg' },
                { name: 'Godot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/godot/godot-original.svg' },
            ]
        },
        'Static Site Generators': {
            color: '#e879f9', items: [
                { name: 'Gatsby', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gatsby/gatsby-original.svg' },
                { name: 'Hugo', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hugo/hugo-original.svg' },
                { name: 'Jekyll', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jekyll/jekyll-original.svg' },
                { name: 'Eleventy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eleventy/eleventy-original.svg' },
            ]
        },
        'Automation': {
            color: '#fb923c', items: [
                { name: 'Ansible', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg' },
                { name: 'Jenkins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
                { name: 'CircleCI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/circleci/circleci-plain.svg' },
                { name: 'Gradle', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gradle/gradle-original.svg' },
            ]
        },
        'BaaS': {
            color: '#fbbf24', items: [
                { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
                { name: 'Appwrite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/appwrite/appwrite-original.svg' },
                { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg' },
            ]
        },
        'Software': {
            color: '#64748b', items: [
                { name: 'Photoshop', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg' },
                { name: 'Illustrator', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg' },
                { name: 'Blender', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg' },
                { name: 'Canva', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg' },
                { name: 'Sketch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg' },
            ]
        },
    };

    /* ── ALL SOCIAL PLATFORMS with icons ── */
    const SOCIAL_PLATFORMS = [
        { key: 'github', label: 'GitHub', icon: 'https://cdn.simpleicons.org/github/fff', placeholder: 'username', url: 'https://github.com/{v}' },
        { key: 'linkedin', label: 'LinkedIn', icon: 'https://cdn.simpleicons.org/linkedin/0077B5', placeholder: 'username', url: 'https://linkedin.com/in/{v}' },
        { key: 'twitter', label: 'Twitter', icon: 'https://cdn.simpleicons.org/x/fff', placeholder: 'username', url: 'https://twitter.com/{v}' },
        { key: 'devto', label: 'Dev.to', icon: 'https://cdn.simpleicons.org/devdotto/fff', placeholder: 'username', url: 'https://dev.to/{v}' },
        { key: 'stackoverflow', label: 'Stack Overflow', icon: 'https://cdn.simpleicons.org/stackoverflow/F58025', placeholder: 'userid/username', url: 'https://stackoverflow.com/users/{v}' },
        { key: 'medium', label: 'Medium', icon: 'https://cdn.simpleicons.org/medium/fff', placeholder: '@username', url: 'https://medium.com/@{v}' },
        { key: 'youtube', label: 'YouTube', icon: 'https://cdn.simpleicons.org/youtube/FF0000', placeholder: 'channel-name', url: 'https://youtube.com/@{v}' },
        { key: 'instagram', label: 'Instagram', icon: 'https://cdn.simpleicons.org/instagram/E4405F', placeholder: 'username', url: 'https://instagram.com/{v}' },
        { key: 'facebook', label: 'Facebook', icon: 'https://cdn.simpleicons.org/facebook/1877F2', placeholder: 'username', url: 'https://facebook.com/{v}' },
        { key: 'codepen', label: 'CodePen', icon: 'https://cdn.simpleicons.org/codepen/fff', placeholder: 'username', url: 'https://codepen.io/{v}' },
        { key: 'codesandbox', label: 'CodeSandbox', icon: 'https://cdn.simpleicons.org/codesandbox/fff', placeholder: 'username', url: 'https://codesandbox.io/u/{v}' },
        { key: 'kaggle', label: 'Kaggle', icon: 'https://cdn.simpleicons.org/kaggle/20BEFF', placeholder: 'username', url: 'https://kaggle.com/{v}' },
        { key: 'dribbble', label: 'Dribbble', icon: 'https://cdn.simpleicons.org/dribbble/EA4C89', placeholder: 'username', url: 'https://dribbble.com/{v}' },
        { key: 'behance', label: 'Behance', icon: 'https://cdn.simpleicons.org/behance/1769FF', placeholder: 'username', url: 'https://behance.net/{v}' },
        { key: 'hashnode', label: 'Hashnode', icon: 'https://cdn.simpleicons.org/hashnode/2962FF', placeholder: 'username', url: 'https://{v}.hashnode.dev' },
        { key: 'discord', label: 'Discord', icon: 'https://cdn.simpleicons.org/discord/5865F2', placeholder: 'invite-code', url: 'https://discord.gg/{v}' },
        { key: 'twitch', label: 'Twitch', icon: 'https://cdn.simpleicons.org/twitch/9146FF', placeholder: 'username', url: 'https://twitch.tv/{v}' },
        { key: 'leetcode', label: 'LeetCode', icon: 'https://cdn.simpleicons.org/leetcode/FFA116', placeholder: 'username', url: 'https://leetcode.com/{v}' },
        { key: 'hackerrank', label: 'HackerRank', icon: 'https://cdn.simpleicons.org/hackerrank/00EA64', placeholder: 'username', url: 'https://hackerrank.com/{v}' },
        { key: 'email', label: 'Email', icon: 'https://cdn.simpleicons.org/gmail/EA4335', placeholder: 'you@email.com', url: 'mailto:{v}' },
        { key: 'microsoftoutlook', label: 'Outlook', icon: 'https://cdn.simpleicons.org/microsoftoutlook/0078D4', placeholder: 'you@outlook.com', url: 'mailto:{v}' },
        { key: 'reddit', label: 'Reddit', icon: 'https://cdn.simpleicons.org/reddit/FF4500', placeholder: 'username', url: 'https://reddit.com/user/{v}' },
        { key: 'pinterest', label: 'Pinterest', icon: 'https://cdn.simpleicons.org/pinterest/E60023', placeholder: 'username', url: 'https://pinterest.com/{v}' },
        { key: 'tiktok', label: 'TikTok', icon: 'https://cdn.simpleicons.org/tiktok/fff', placeholder: '@username', url: 'https://tiktok.com/@{v}' },
    ];

    const LICENSE_OPTIONS = ['MIT', 'Apache-2.0', 'GPL-3.0', 'GPL-2.0', 'BSD-2-Clause', 'BSD-3-Clause', 'ISC', 'MPL-2.0', 'Other'];
    const BADGE_STYLES = ['flat', 'flat-square', 'plastic', 'for-the-badge', 'social'];
    const BADGE_COLORS = ['brightgreen', 'green', 'yellow', 'orange', 'red', 'blue', 'lightgrey', 'blueviolet', 'ff69b4', '9cf'];
    const GITHUB_THEMES = ['default', 'dark', 'radical', 'merko', 'gruvbox', 'tokyonight', 'onedark', 'cobalt', 'synthwave', 'highcontrast', 'dracula', 'prussian', 'monokai', 'vue', 'vue-dark', 'shades-of-purple', 'nightowl', 'buefy', 'blue-green', 'algolia', 'great-gatsby', 'darcula', 'bear', 'solarized-dark', 'solarized-light', 'chartreuse-dark', 'nord', 'gotham', 'material-palenight', 'graywhite', 'vision-friendly-dark', 'aura-dark', 'jolly', 'noctis-minimus', 'rose-pine'];
    const CAT_CSS = ['frontend', 'backend', 'database', 'language', 'devops', 'mobile', 'tools', 'testing', 'aiml', 'framework', 'dataviz', 'gameengine', 'ssg', 'automation', 'baas', 'software'];

    /* ── STATE ── */
    let currentMode = 'project';
    let currentProjectLayout = 'classic';
    let currentProfileLayout = 'standard';
    let sections = defaultSections();
    let profileData = defaultProfileData();
    let activeSectionIndex = 0;
    let donutChart = null, barChart = null;
    let selectedFont = 'default';
    let fontSize = 'medium';

    function defaultProfileData() {
        const socials = {};
        SOCIAL_PLATFORMS.forEach(p => { socials[p.key] = ''; });
        return {
            name: '', username: '', role: '', bio: '', location: '', company: '', website: '', bannerUrl: '',
            resumeLink: '', blogLink: '', customLinks: [],
            socials, currentWork: '', learning: '', askMe: '', funFact: '', pronouns: '',
            techStack: [],
            statsTheme: 'radical',
            showStats: true, showStreak: true, showLangs: true, showTrophies: true, showActivity: true, showVisitors: true
        };
    }
    function defaultSections() {
        return [
            { id: 'title', label: 'Title & Badges', removable: false, fields: { title: '', description_short: '', banner_url: '', badges: [] } },
            { id: 'description', label: 'Description', removable: false, fields: { description: '', features: '' } },
            { id: 'tech_stack', label: 'Tech Stack', removable: false, fields: { selected: [] } },
            { id: 'screenshots', label: 'Screenshots', removable: true, fields: { screenshots: '', demo_url: '' } },
            { id: 'installation', label: 'Installation', removable: true, fields: { prerequisites: '', steps: '' } },
            { id: 'usage', label: 'Usage', removable: true, fields: { usage: '' } },
            { id: 'api', label: 'API Reference', removable: true, fields: { api: '' } },
            { id: 'contributing', label: 'Contributing', removable: true, fields: { contributing: '' } },
            { id: 'license', label: 'License', removable: true, fields: { license: 'MIT' } },
            { id: 'authors', label: 'Authors', removable: true, fields: { authors: '' } },
            { id: 'acknowledgements', label: 'Acknowledgements', removable: true, fields: { acknowledgements: '' } },
        ];
    }
    const TEMPLATES = { minimal: ['title', 'description', 'installation', 'usage', 'license'], standard: ['title', 'description', 'tech_stack', 'installation', 'usage', 'contributing', 'license', 'authors'], full: null };
    const PROFILE_SECTIONS = [
        { id: 'profile_intro', label: 'Introduction' },
        { id: 'profile_about', label: 'About Me' },
        { id: 'profile_tech', label: 'Tech Stack' },
        { id: 'profile_stats', label: 'GitHub Stats' },
        { id: 'profile_socials', label: 'Social Links' },
    ];

    /* ── DOM ── */
    const $nav = document.getElementById('section-nav');
    const $editor = document.getElementById('editor-sections');
    const $preview = document.getElementById('preview-content');
    const $mdRaw = document.getElementById('markdown-raw');
    const $mdRawCode = document.getElementById('markdown-raw-code');
    const $toc = document.getElementById('preview-toc');
    const $pct = document.getElementById('completeness-pct');
    const $compBar = document.getElementById('completeness-bar');
    const $tplSelect = document.getElementById('template-select');
    const $layoutSelect = document.getElementById('layout-select');
    const $fontSelect = document.getElementById('font-select');
    const $fontSizeSelect = document.getElementById('fontsize-select');
    const $sidebar = document.getElementById('sidebar');
    const $mobileToggle = document.getElementById('mobile-sidebar-toggle');
    const $previewPanel = document.getElementById('preview-panel');
    const $editorPanel = document.getElementById('editor-panel');
    const $reopenBtn = document.getElementById('btn-reopen-preview');
    let currentPreviewTab = 'preview'; // 'preview' or 'markdown'

    /* ── THEME ── */
    (function () {
        const saved = localStorage.getItem('readme-gen-theme');
        if (saved) document.documentElement.setAttribute('data-theme', saved);
        document.getElementById('theme-toggle').addEventListener('click', () => {
            const c = document.documentElement.getAttribute('data-theme');
            const n = c === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', n);
            localStorage.setItem('readme-gen-theme', n);
            updateCharts();
        });
    })();

    /* ── MODE SWITCH ── */
    document.getElementById('mode-project-btn').addEventListener('click', () => switchMode('project'));
    document.getElementById('mode-profile-btn').addEventListener('click', () => switchMode('profile'));
    function switchMode(mode) {
        currentMode = mode;
        document.querySelectorAll('.mode-btn').forEach(b => b.classList.toggle('active', b.dataset.mode === mode));
        activeSectionIndex = 0;

        // Update laytout options
        if (mode === 'project') {
            $layoutSelect.innerHTML = '<option value="classic">Classic</option><option value="centered">Centered</option><option value="minimal">Minimal</option>';
            $layoutSelect.value = currentProjectLayout;
        } else {
            $layoutSelect.innerHTML = '<option value="standard">Standard</option><option value="compact">Compact</option><option value="card">Card</option>';
            $layoutSelect.value = currentProfileLayout;
        }

        renderNav(); renderEditorSections(); updateAll();
    }

    // Layout change
    $layoutSelect.addEventListener('change', e => {
        if (currentMode === 'project') currentProjectLayout = e.target.value;
        else currentProfileLayout = e.target.value;
        debouncedUpdate();
    });

    /* ── FONT SELECT ── */
    $fontSelect.addEventListener('change', () => { selectedFont = $fontSelect.value; debouncedUpdate(); });

    /* ── FONT SIZE ── */
    $fontSizeSelect.addEventListener('change', () => {
        fontSize = $fontSizeSelect.value;
        document.documentElement.classList.remove('font-small', 'font-large');
        if (fontSize === 'small') document.documentElement.classList.add('font-small');
        if (fontSize === 'large') document.documentElement.classList.add('font-large');
    });

    /* ── CLOSE / REOPEN PANELS ── */
    function updateSplitters() {
        const sidebarOpen = !$sidebar.classList.contains('closed');
        const editorOpen = !$editorPanel.classList.contains('closed');
        const previewOpen = !$previewPanel.classList.contains('closed');

        document.getElementById('splitter-left').style.display = (sidebarOpen && (editorOpen || previewOpen)) ? '' : 'none';
        document.getElementById('splitter-right').style.display = (editorOpen && previewOpen) ? '' : 'none';

        if (!sidebarOpen && !editorOpen) {
            $previewPanel.classList.add('fullscreen');
        } else {
            $previewPanel.classList.remove('fullscreen');
        }
    }

    document.getElementById('btn-close-preview').addEventListener('click', () => {
        $previewPanel.classList.add('closed');
        $reopenBtn.hidden = false;
        updateSplitters();
    });
    $reopenBtn.addEventListener('click', () => {
        $previewPanel.classList.remove('closed');
        $reopenBtn.hidden = true;
        updateSplitters();
    });

    const $btnCloseSidebar = document.getElementById('btn-close-sidebar');
    const $btnReopenSidebar = document.getElementById('btn-reopen-sidebar');
    const $btnCloseEditor = document.getElementById('btn-close-editor');
    const $btnReopenEditor = document.getElementById('btn-reopen-editor');

    if ($btnCloseSidebar) {
        $btnCloseSidebar.addEventListener('click', () => {
            $sidebar.classList.add('closed');
            $btnReopenSidebar.hidden = false;
            updateSplitters();
        });
        $btnReopenSidebar.addEventListener('click', () => {
            $sidebar.classList.remove('closed');
            $btnReopenSidebar.hidden = true;
            updateSplitters();
        });
    }

    if ($btnCloseEditor) {
        $btnCloseEditor.addEventListener('click', () => {
            $editorPanel.classList.add('closed');
            $btnReopenEditor.hidden = false;
            updateSplitters();
        });
        $btnReopenEditor.addEventListener('click', () => {
            $editorPanel.classList.remove('closed');
            $btnReopenEditor.hidden = true;
            updateSplitters();
        });
    }

    /* ── DRAG SPLITTERS ── */
    function initSplitter(splitterId, leftEl, rightEl) {
        const splitter = document.getElementById(splitterId);
        if (!splitter) return;
        let startX, startLeftW, startRightW, leftTarget, rightTarget;
        splitter.addEventListener('mousedown', e => {
            e.preventDefault();
            leftTarget = typeof leftEl === 'string' ? document.getElementById(leftEl) : leftEl;
            rightTarget = typeof rightEl === 'string' ? document.getElementById(rightEl) : rightEl;
            startX = e.clientX;
            startLeftW = leftTarget.getBoundingClientRect().width;
            if (rightTarget) startRightW = rightTarget.getBoundingClientRect().width;
            splitter.classList.add('active');
            document.body.style.cursor = 'col-resize';
            document.body.style.userSelect = 'none';
            document.addEventListener('mousemove', onMove);
            document.addEventListener('mouseup', onUp);
        });
        function onMove(e) {
            const dx = e.clientX - startX;
            const newLeft = Math.max(140, startLeftW + dx);
            leftTarget.style.width = newLeft + 'px';
            leftTarget.style.flex = 'none';
            if (rightTarget) {
                const newRight = Math.max(200, startRightW - dx);
                rightTarget.style.flex = 'none';
                rightTarget.style.width = newRight + 'px';
            }
        }
        function onUp() {
            splitter.classList.remove('active');
            document.body.style.cursor = '';
            document.body.style.userSelect = '';
            document.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseup', onUp);
        }
    }
    initSplitter('splitter-left', 'sidebar', 'editor-panel');
    initSplitter('splitter-right', 'editor-panel', 'preview-panel');

    /* ── MOBILE SIDEBAR ── */
    let sidebarOverlay = null;
    $mobileToggle.addEventListener('click', toggleMobileSidebar);
    function toggleMobileSidebar() {
        const isOpen = $sidebar.classList.toggle('open');
        if (isOpen) {
            $sidebar.classList.remove('closed'); // Ensure it's not hidden by desktop close state
            $mobileToggle.classList.add('hidden');
            if (!sidebarOverlay) {
                sidebarOverlay = document.createElement('div');
                sidebarOverlay.className = 'sidebar-overlay';
                sidebarOverlay.addEventListener('click', closeMobileSidebar);
                document.body.appendChild(sidebarOverlay);
            }
            // Small delay to allow CSS transition
            setTimeout(() => sidebarOverlay.classList.add('open'), 10);
        } else {
            closeMobileSidebar();
        }
    }
    function closeMobileSidebar() {
        $sidebar.classList.remove('open');
        $mobileToggle.classList.remove('hidden');
        if (sidebarOverlay) {
            sidebarOverlay.classList.remove('open');
            // Wait for transition before hiding completely
            setTimeout(() => {
                if (!$sidebar.classList.contains('open') && sidebarOverlay.parentNode) {
                    sidebarOverlay.parentNode.removeChild(sidebarOverlay);
                    sidebarOverlay = null;
                }
            }, 300);
        }
    }

    /* ── MOBILE TABS ── */
    document.querySelectorAll('.mobile-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.mobile-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            if (tab.dataset.panel === 'editor') { $editorPanel.classList.remove('mobile-hidden'); $previewPanel.classList.remove('mobile-active'); }
            else { $editorPanel.classList.add('mobile-hidden'); $previewPanel.classList.add('mobile-active'); }
        });
    });

    /* ── RENDER NAV (Wizard) ── */
    function renderNav() {
        $nav.innerHTML = '';
        const list = currentMode === 'project' ? sections : PROFILE_SECTIONS;
        list.forEach((sec, i) => {
            const item = document.createElement('div');
            item.className = 'nav-item';
            if (i === activeSectionIndex) item.classList.add('active');
            if (currentMode === 'project' && sectionCompleteness(sec) >= 100) item.classList.add('completed');
            const circle = document.createElement('span');
            circle.className = 'nav-step-circle';
            if (currentMode === 'project' && sectionCompleteness(sec) >= 100 && i !== activeSectionIndex) circle.innerHTML = '✓';
            else circle.textContent = i + 1;
            item.appendChild(circle);
            const label = document.createElement('span');
            label.className = 'nav-step-label'; label.textContent = sec.label;
            item.appendChild(label);
            item.addEventListener('click', () => { activeSectionIndex = i; renderNav(); renderEditorSections(); updateNavButtons(); closeMobileSidebar(); });
            $nav.appendChild(item);
        });
    }

    /* ── RENDER EDITOR ── */
    function renderEditorSections() {
        $editor.innerHTML = '';
        if (currentMode === 'project') {
            sections.forEach((sec, i) => { const w = document.createElement('div'); w.className = 'editor-section' + (i === activeSectionIndex ? ' active' : ''); w.innerHTML = buildProjectSectionHTML(sec, i); $editor.appendChild(w); });
        } else {
            PROFILE_SECTIONS.forEach((sec, i) => { const w = document.createElement('div'); w.className = 'editor-section' + (i === activeSectionIndex ? ' active' : ''); w.innerHTML = buildProfileSectionHTML(sec.id); $editor.appendChild(w); });
        }
        attachEditorListeners();
        // scroll editor to top
        $editorPanel.scrollTop = 0;
    }

    function esc(s) { return s ? s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;') : ''; }

    /* ── PROJECT SECTION HTML ── */
    function buildProjectSectionHTML(sec, idx) {
        const rm = sec.removable ? `<button class="remove-btn" data-index="${idx}">✕ Remove</button>` : '';
        switch (sec.id) {
            case 'title': return `<div class="section-header"><h2>📝 ${sec.label}</h2>${rm}</div>
            <div class="field-group"><label>Banner Image URL</label><input class="input" data-section="${idx}" data-field="banner_url" value="${esc(sec.fields.banner_url || '')}" placeholder="https://example.com/banner.png"></div>
            <div class="field-group"><label>Project Title</label><input class="input" data-section="${idx}" data-field="title" value="${esc(sec.fields.title)}" placeholder="My Awesome Project"></div>
            <div class="field-group"><label>Short Tagline</label><input class="input" data-section="${idx}" data-field="description_short" value="${esc(sec.fields.description_short)}" placeholder="A brief one-line description"></div>
            <div class="field-group"><label>Badges</label><div class="hint">Add shields.io badges</div>
                <div class="badge-row"><input class="input" id="badge-label" placeholder="Label"><input class="input" id="badge-message" placeholder="Message">
                <select id="badge-color">${BADGE_COLORS.map(c => `<option value="${c}">${c}</option>`).join('')}</select>
                <select id="badge-style">${BADGE_STYLES.map(s => `<option value="${s}">${s}</option>`).join('')}</select>
                <button class="btn btn-primary btn-sm" id="add-badge-btn">+ Add</button></div>
                <div class="badge-list" id="badge-list">${(sec.fields.badges || []).map((b, i) => badgeChip(b, i)).join('')}</div></div>`;
            case 'description': return `<div class="section-header"><h2>📋 ${sec.label}</h2>${rm}</div>
            <div class="field-group"><label>Full Description</label><textarea class="textarea" data-section="${idx}" data-field="description" placeholder="Describe your project…">${esc(sec.fields.description)}</textarea></div>
            <div class="field-group"><label>Key Features</label><div class="hint">One per line</div><textarea class="textarea" data-section="${idx}" data-field="features" placeholder="Blazing fast\nEasy to use">${esc(sec.fields.features)}</textarea></div>`;
            case 'tech_stack': return `<div class="section-header"><h2>🛠️ ${sec.label}</h2>${rm}</div>
            <div class="field-group"><label>Select Technologies by Category</label><div class="hint">Click to toggle</div>${buildTechGridHTML(sec.fields.selected)}</div>`;
            case 'screenshots': return `<div class="section-header"><h2>🖼️ ${sec.label}</h2>${rm}</div>
            <div class="field-group"><label>Screenshot URLs</label><div class="hint">One URL per line</div><textarea class="textarea" data-section="${idx}" data-field="screenshots" placeholder="https://example.com/shot.png">${esc(sec.fields.screenshots)}</textarea></div>
            <div class="field-group"><label>Live Demo URL</label><input class="input" data-section="${idx}" data-field="demo_url" value="${esc(sec.fields.demo_url)}" placeholder="https://demo.example.com"></div>`;
            case 'installation': return `<div class="section-header"><h2>⚙️ ${sec.label}</h2>${rm}</div>
            <div class="field-group"><label>Prerequisites</label><textarea class="textarea" data-section="${idx}" data-field="prerequisites" placeholder="- Node.js >= 18">${esc(sec.fields.prerequisites)}</textarea></div>
            <div class="field-group"><label>Steps</label><textarea class="textarea" data-section="${idx}" data-field="steps" placeholder="git clone ...">${esc(sec.fields.steps)}</textarea></div>`;
            case 'usage': return `<div class="section-header"><h2>🚀 ${sec.label}</h2>${rm}</div>
            <div class="field-group"><label>Usage</label><textarea class="textarea" data-section="${idx}" data-field="usage" placeholder="npm start">${esc(sec.fields.usage)}</textarea></div>`;
            case 'api': return `<div class="section-header"><h2>📡 ${sec.label}</h2>${rm}</div>
            <div class="field-group"><label>API Docs</label><textarea class="textarea" data-section="${idx}" data-field="api" placeholder="| Method | Endpoint |">${esc(sec.fields.api)}</textarea></div>`;
            case 'contributing': return `<div class="section-header"><h2>🤝 ${sec.label}</h2>${rm}</div>
            <div class="field-group"><label>Guidelines</label><textarea class="textarea" data-section="${idx}" data-field="contributing" placeholder="1. Fork the repo">${esc(sec.fields.contributing)}</textarea></div>`;
            case 'license': return `<div class="section-header"><h2>📄 ${sec.label}</h2>${rm}</div>
            <div class="field-group"><label>License</label><select class="input" data-section="${idx}" data-field="license">${LICENSE_OPTIONS.map(l => `<option value="${l}" ${sec.fields.license === l ? 'selected' : ''}>${l}</option>`).join('')}</select></div>`;
            case 'authors': return `<div class="section-header"><h2>👤 ${sec.label}</h2>${rm}</div>
            <div class="field-group"><label>Authors</label><div class="hint">One per line</div><textarea class="textarea" data-section="${idx}" data-field="authors" placeholder="Jane — @jane">${esc(sec.fields.authors)}</textarea></div>`;
            case 'acknowledgements': return `<div class="section-header"><h2>🙏 ${sec.label}</h2>${rm}</div>
            <div class="field-group"><label>Acknowledgements</label><textarea class="textarea" data-section="${idx}" data-field="acknowledgements" placeholder="- [Link](url)">${esc(sec.fields.acknowledgements)}</textarea></div>`;
            default: return `<div class="section-header"><h2>📎 ${esc(sec.label)}</h2>${rm}</div>
            <div class="field-group"><label>Content</label><textarea class="textarea" data-section="${idx}" data-field="content" placeholder="Markdown…">${esc(sec.fields.content || '')}</textarea></div>`;
        }
    }

    function buildTechGridHTML(selected) {
        let html = '';
        Object.keys(TECH_CATEGORIES).forEach((catName, ci) => {
            const cat = TECH_CATEGORIES[catName]; const cssName = CAT_CSS[ci] || 'tools';
            const selCnt = cat.items.filter(t => selected.includes(t.name)).length;
            html += `<div class="tech-category" data-category="${cssName}"><div class="tech-category-header"><span class="tech-cat-dot ${cssName}"></span><h3>${esc(catName)}</h3><span class="tech-cat-count">${selCnt}/${cat.items.length}</span></div><div class="tech-grid">`;
            cat.items.forEach(t => { const sel = selected.includes(t.name) ? 'selected' : ''; html += `<div class="tech-chip ${sel}" data-tech="${esc(t.name)}"><img src="${t.icon}" alt="${esc(t.name)}" onerror="this.style.display='none'"><span>${esc(t.name)}</span></div>`; });
            html += '</div></div>';
        });
        return html;
    }

    function badgeChip(b, i) {
        const u = `https://img.shields.io/badge/${encodeURIComponent(b.label)}-${encodeURIComponent(b.message)}-${b.color}?style=${b.style}`;
        return `<span class="badge-chip"><img src="${u}" alt="${esc(b.label)}"><button data-badge-index="${i}" class="remove-badge-btn">&times;</button></span>`;
    }

    /* ── PROFILE SECTION HTML ── */
    function buildProfileSectionHTML(id) {
        const d = profileData;
        switch (id) {
            case 'profile_intro': return `<div class="section-header"><h2>👋 Introduction</h2></div>
            <div class="inline-fields"><div class="field-group"><label>Display Name</label><input class="input" data-profile="name" value="${esc(d.name)}" placeholder="John Doe"></div><div class="field-group"><label>GitHub Username</label><input class="input" data-profile="username" value="${esc(d.username)}" placeholder="johndoe"></div></div>
            <div class="field-group"><label>Bio / Tagline</label><input class="input" data-profile="bio" value="${esc(d.bio)}" placeholder="Passionate developer building cool stuff"></div>
            <div class="inline-fields"><div class="field-group"><label>Location</label><input class="input" data-profile="location" value="${esc(d.location)}" placeholder="San Francisco, CA"></div><div class="field-group"><label>Company</label><input class="input" data-profile="company" value="${esc(d.company)}" placeholder="@mycompany"></div></div>
            <div class="field-group"><label>Website / Portfolio</label><input class="input" data-profile="website" value="${esc(d.website)}" placeholder="https://johndoe.dev"></div>
            <div class="inline-fields"><div class="field-group"><label>📄 Resume / CV Link</label><input class="input" data-profile="resumeLink" value="${esc(d.resumeLink)}" placeholder="https://drive.google.com/..."></div><div class="field-group"><label>✍️ Blog Link</label><input class="input" data-profile="blogLink" value="${esc(d.blogLink)}" placeholder="https://myblog.dev"></div></div>
            <div class="field-group"><label>🔗 Custom Links</label><div class="hint">Add portfolio, projects, or any custom link</div>
                <div id="custom-links-list">${(d.customLinks || []).map((l, i) => `<div class="inline-fields custom-link-row"><div class="field-group"><input class="input" data-custom-link-label="${i}" value="${esc(l.label)}" placeholder="Label"></div><div class="field-group"><input class="input" data-custom-link-url="${i}" value="${esc(l.url)}" placeholder="https://..."></div><button class="btn btn-ghost btn-sm remove-custom-link" data-link-index="${i}">✕</button></div>`).join('')}</div>
                <button class="btn btn-accent btn-sm" id="add-custom-link-btn">+ Add Link</button>
            </div>`;
            case 'profile_about': return `<div class="section-header"><h2>💡 About Me</h2></div>
            <div class="field-group"><label>🎓 Current Role / Status</label><input class="input" data-profile="role" value="${esc(d.role)}" placeholder="e.g. Student, Full Stack Developer"></div>
            <div class="field-group"><label>🔭 Currently working on</label><input class="input" data-profile="currentWork" value="${esc(d.currentWork)}" placeholder="An open-source project"></div>
            <div class="field-group"><label>🌱 Currently learning</label><input class="input" data-profile="learning" value="${esc(d.learning)}" placeholder="Rust & WASM"></div>
            <div class="field-group"><label>💬 Ask me about</label><input class="input" data-profile="askMe" value="${esc(d.askMe)}" placeholder="React, System Design"></div>
            <div class="field-group"><label>⚡ Fun fact</label><input class="input" data-profile="funFact" value="${esc(d.funFact)}" placeholder="I type 120 WPM"></div>
            <div class="field-group"><label>😄 Pronouns</label><input class="input" data-profile="pronouns" value="${esc(d.pronouns)}" placeholder="he/him"></div>`;
            case 'profile_tech': return `<div class="section-header"><h2>🛠️ Tech Stack</h2></div>
            <div class="field-group"><label>Skills & Technologies</label><div class="hint">Select by category</div>${buildTechGridHTML(d.techStack)}</div>`;
            case 'profile_stats': return `<div class="section-header"><h2>📊 GitHub Stats</h2></div>
            <div class="field-group"><label>Theme</label><select class="input" data-profile="statsTheme">${GITHUB_THEMES.map(t => `<option value="${t}" ${d.statsTheme === t ? 'selected' : ''}>${t}</option>`).join('')}</select></div>
            <div class="field-group"><label>Stats to display</label><div class="stats-preview-grid">
                <label><input type="checkbox" data-stat="showStats" ${d.showStats ? 'checked' : ''}> Stats Card</label>
                <label><input type="checkbox" data-stat="showStreak" ${d.showStreak ? 'checked' : ''}> Streak</label>
                <label><input type="checkbox" data-stat="showLangs" ${d.showLangs ? 'checked' : ''}> Top Langs</label>
                <label><input type="checkbox" data-stat="showTrophies" ${d.showTrophies ? 'checked' : ''}> Trophies</label>
                <label><input type="checkbox" data-stat="showActivity" ${d.showActivity ? 'checked' : ''}> Activity</label>
                <label><input type="checkbox" data-stat="showVisitors" ${d.showVisitors ? 'checked' : ''}> Visitors</label>
            </div></div>`;
            case 'profile_socials': return buildSocialSectionHTML();
            default: return '';
        }
    }

    /* ── SOCIAL SECTION: individual fields with icons ── */
    function buildSocialSectionHTML() {
        const d = profileData;
        let html = `<div class="section-header"><h2>🔗 Social Links</h2></div>`;
        html += `<div class="social-info-box"><strong>ℹ️ Enter usernames only, not full URLs.</strong>Just provide your username or handle for each platform. We'll automatically generate the correct URLs.<br><span class="ok">✓ Correct: johndoe</span><br><span class="bad">✗ Incorrect: https://twitter.com/johndoe</span></div>`;
        html += '<div class="social-grid">';
        SOCIAL_PLATFORMS.forEach(p => {
            const val = d.socials[p.key] || '';
            html += `<div class="social-field">
            <div class="social-field-label"><img src="${p.icon}" alt="${esc(p.label)}" onerror="this.style.display='none'">${esc(p.label)}</div>
            <input class="input" data-social="${p.key}" value="${esc(val)}" placeholder="${esc(p.placeholder)}">
        </div>`;
        });
        html += '</div>';
        return html;
    }

    /* ── ATTACH LISTENERS ── */
    function attachEditorListeners() {
        document.querySelectorAll('[data-section][data-field]').forEach(el => {
            el.addEventListener(el.tagName === 'SELECT' ? 'change' : 'input', e => {
                sections[parseInt(e.target.dataset.section)].fields[e.target.dataset.field] = e.target.value; debouncedUpdate();
            });
        });
        document.querySelectorAll('[data-profile]').forEach(el => {
            el.addEventListener(el.tagName === 'SELECT' ? 'change' : 'input', e => {
                profileData[e.target.dataset.profile] = e.target.value; debouncedUpdate();
            });
        });
        document.querySelectorAll('[data-stat]').forEach(el => {
            el.addEventListener('change', e => { profileData[e.target.dataset.stat] = e.target.checked; debouncedUpdate(); });
        });
        document.querySelectorAll('[data-social]').forEach(el => {
            el.addEventListener('input', e => { profileData.socials[e.target.dataset.social] = e.target.value; debouncedUpdate(); });
        });
        const ab = document.getElementById('add-badge-btn');
        if (ab) ab.addEventListener('click', () => {
            const l = document.getElementById('badge-label').value.trim(), m = document.getElementById('badge-message').value.trim();
            if (!l || !m) { showToast('Fill label & message'); return; }
            sections[0].fields.badges.push({ label: l, message: m, color: document.getElementById('badge-color').value, style: document.getElementById('badge-style').value });
            renderEditorSections(); updateAll();
        });
        document.querySelectorAll('.remove-badge-btn').forEach(b => b.addEventListener('click', e => {
            sections[0].fields.badges.splice(parseInt(e.target.dataset.badgeIndex), 1); renderEditorSections(); updateAll();
        }));
        document.querySelectorAll('.tech-chip').forEach(chip => chip.addEventListener('click', () => {
            const name = chip.dataset.tech;
            let arr = currentMode === 'project' ? sections.find(s => s.id === 'tech_stack').fields.selected : profileData.techStack;
            const idx = arr.indexOf(name); if (idx >= 0) arr.splice(idx, 1); else arr.push(name);
            chip.classList.toggle('selected'); debouncedUpdate();
            const catWrap = chip.closest('.tech-category');
            if (catWrap) { const cnt = catWrap.querySelectorAll('.tech-chip.selected').length; const total = catWrap.querySelectorAll('.tech-chip').length; const cEl = catWrap.querySelector('.tech-cat-count'); if (cEl) cEl.textContent = cnt + '/' + total; }
        }));
        document.querySelectorAll('.remove-btn').forEach(b => b.addEventListener('click', e => {
            sections.splice(parseInt(e.target.dataset.index), 1);
            if (activeSectionIndex >= sections.length) activeSectionIndex = sections.length - 1;
            renderNav(); renderEditorSections(); updateAll();
        }));

        // Custom Links
        const addLnk = document.getElementById('add-custom-link-btn');
        if (addLnk) addLnk.addEventListener('click', () => { profileData.customLinks.push({ label: '', url: '' }); renderEditorSections(); updateAll(); });
        document.querySelectorAll('.remove-custom-link').forEach(b => b.addEventListener('click', e => {
            profileData.customLinks.splice(parseInt(e.target.dataset.linkIndex), 1); renderEditorSections(); updateAll();
        }));
        document.querySelectorAll('[data-custom-link-label]').forEach(input => input.addEventListener('input', e => {
            profileData.customLinks[parseInt(e.target.dataset.customLinkLabel)].label = e.target.value; debouncedUpdate();
        }));
        document.querySelectorAll('[data-custom-link-url]').forEach(input => input.addEventListener('input', e => {
            profileData.customLinks[parseInt(e.target.dataset.customLinkUrl)].url = e.target.value; debouncedUpdate();
        }));
    }

    /* ── MARKDOWN ── */
    function generateMarkdown() {
        if (currentMode === 'project') {
            if (currentProjectLayout === 'minimal') return generateProjectMinimalMD();
            if (currentProjectLayout === 'centered') return generateProjectCenteredMD();
            return generateProjectClassicMD();
        } else {
            if (currentProfileLayout === 'compact') return generateProfileCompactMD();
            if (currentProfileLayout === 'card') return generateProfileCardMD();
            return generateProfileStandardMD();
        }
    }

    function generateProjectClassicMD() {
        let md = '';
        sections.forEach((sec, idx) => {
            const f = sec.fields;
            if (idx > 0 && f && Object.keys(f).some(k => (typeof f[k] === 'string' && f[k].trim()) || (Array.isArray(f[k]) && f[k].length))) {
                md += '---\n\n';
            }
            switch (sec.id) {
                case 'title':
                    if (f.banner_url) md += `<img src="${f.banner_url}" alt="Banner" width="100%">\n\n`;
                    md += `# ${f.title || 'Project Title'}\n\n`;
                    if (f.description_short) md += `> ${f.description_short}\n\n`;
                    if (f.badges && f.badges.length) md += f.badges.map(b => `<img src="https://img.shields.io/badge/${encodeURIComponent(b.label)}-${encodeURIComponent(b.message)}-${b.color}?style=for-the-badge" alt="${b.label}" />`).join(' ') + '\n\n';
                    break;
                case 'description':
                    if (f.description) md += `## 📋 About\n\n${f.description}\n\n`;
                    if (f.features) {
                        md += `## ✨ Features\n\n`;
                        f.features.split('\n').filter(l => l.trim()).forEach(l => {
                            const txt = l.trim();
                            const parts = txt.split(':');
                            if (parts.length > 1) {
                                md += `- **${parts[0].trim()}:** ${parts.slice(1).join(':').trim()}\n`;
                            } else {
                                md += `- ${txt}\n`;
                            }
                        });
                        md += '\n';
                    }
                    break;
                case 'tech_stack': if (f.selected.length) md += genCatTechMD(f.selected, 'classic'); break;
                case 'screenshots': if ((f.screenshots || '').trim() || f.demo_url) { md += `## 🖼️ Screenshots\n\n`; if (f.demo_url) md += `🔗 **[Live Demo](${f.demo_url})**\n\n`; (f.screenshots || '').split('\n').filter(l => l.trim()).forEach((u, i) => { md += `<img src="${u.trim()}" alt="Screenshot ${i + 1}" width="100%">\n\n` }); } break;
                case 'installation': if (f.prerequisites || f.steps) { md += `## ⚙️ Installation\n\n`; if (f.prerequisites) md += `### Prerequisites\n\n${f.prerequisites}\n\n`; if (f.steps) md += `### Steps\n\n\`\`\`bash\n${f.steps}\n\`\`\`\n\n`; } break;
                case 'usage': if (f.usage) md += `## 🚀 Usage\n\n\`\`\`javascript\n${f.usage}\n\`\`\`\n\n`; break;
                case 'api': if (f.api) md += `## 📡 API Reference\n\n${f.api}\n\n`; break;
                case 'contributing': if (f.contributing) md += `## 🤝 Contributing\n\n${f.contributing}\n\n`; break;
                case 'license': if (f.license) md += `## 📄 License\n\n> This project is licensed under the **${f.license}** License.\n\n`; break;
                case 'authors': if (f.authors) { md += `## 👤 Authors\n\n`; f.authors.split('\n').filter(l => l.trim()).forEach(l => { md += `- ${l.trim()}\n` }); md += '\n'; } break;
                case 'acknowledgements': if (f.acknowledgements) md += `## 🙏 Acknowledgements\n\n${f.acknowledgements}\n\n`; break;
                default: if (f.content) md += `## ${sec.label}\n\n${f.content}\n\n`; break;
            }
        });
        md += '---\n<p align="center">Made with ❤️ using <a href="https://samrattheprogrammer.github.io/Github-ReadMe-Generator/">README Generator</a></p>\n'; return md;
    }

    function generateProjectCenteredMD() {
        let md = '<div align="center">\n\n';
        sections.forEach(sec => {
            const f = sec.fields;
            switch (sec.id) {
                case 'title':
                    md += `# ${f.title || 'Project Title'}\n\n`;
                    if (f.description_short) md += `${f.description_short}\n\n`;
                    if (f.badges && f.badges.length) md += `<p>\n${f.badges.map(b => `  <img src="https://img.shields.io/badge/${encodeURIComponent(b.label)}-${encodeURIComponent(b.message)}-${b.color}?style=${b.style}" alt="${b.label}" />`).join('\n')}\n</p>\n\n`;
                    break;
                case 'description':
                    if (f.description) md += `## 📋 About\n\n${f.description}\n\n`;
                    if (f.features) { md += `### ✨ Features\n\n`; f.features.split('\n').filter(l => l.trim()).forEach(l => { md += `- ${l.trim()}\n` }); md += '\n'; }
                    break;
                case 'tech_stack': if (f.selected.length) md += genCatTechMD(f.selected, 'centered'); break;
                case 'screenshots':
                    if ((f.screenshots || '').trim() || f.demo_url) {
                        md += `## 🖼️ Screenshots\n\n`;
                        if (f.demo_url) md += `🔗 **[Live Demo](${f.demo_url})**\n\n`;
                        (f.screenshots || '').split('\n').filter(l => l.trim()).forEach((u, i) => { md += `<img src="${u.trim()}" alt="Screenshot ${i + 1}" width="80%">\n\n` });
                    }
                    break;
                case 'installation':
                    if (f.prerequisites || f.steps) { md += `## ⚙️ Installation\n\n`; if (f.prerequisites) md += `**Prerequisites:** ${f.prerequisites.replace(/\n/g, ', ')}\n\n`; if (f.steps) md += `\`\`\`bash\n${f.steps}\n\`\`\`\n\n`; }
                    break;
                case 'usage': if (f.usage) md += `## 🚀 Usage\n\n${f.usage}\n\n`; break;
                case 'api': if (f.api) md += `## 📡 API Reference\n\n${f.api}\n\n`; break;
                case 'contributing': if (f.contributing) md += `## 🤝 Contributing\n\n${f.contributing}\n\n`; break;
                case 'license': if (f.license) md += `## 📄 License\n\nDistributed under the **${f.license}** License.\n\n`; break;
                case 'authors': if (f.authors) { md += `## 👤 Authors\n\n`; f.authors.split('\n').filter(l => l.trim()).forEach(l => { md += `- ${l.trim()}\n` }); md += '\n'; } break;
                case 'acknowledgements': if (f.acknowledgements) md += `## 🙏 Acknowledgements\n\n${f.acknowledgements}\n\n`; break;
                default: if (f.content) md += `## ${sec.label}\n\n${f.content}\n\n`; break;
            }
        });
        md += '</div>\n\n---\n<p align="center">Made with ❤️ using <a href="https://samrattheprogrammer.github.io/Github-ReadMe-Generator/">README Generator</a></p>\n'; return md;
    }

    function generateProjectMinimalMD() {
        let md = '';
        sections.forEach(sec => {
            const f = sec.fields;
            switch (sec.id) {
                case 'title': md += `# ${f.title || 'Project Title'}\n\n`; if (f.description_short) md += `${f.description_short}\n\n`; break;
                case 'description': if (f.description) md += `## About\n\n${f.description}\n\n`; if (f.features) { md += `### Features\n\n`; f.features.split('\n').filter(l => l.trim()).forEach(l => { md += `- ${l.trim()}\n` }); md += '\n'; } break;
                case 'tech_stack': if (f.selected.length) { md += `## Tech Stack\n\n`; md += f.selected.join(', ') + '\n\n'; } break;
                case 'screenshots': if ((f.screenshots || '').trim() || f.demo_url) { md += `## Screenshots\n\n`; if (f.demo_url) md += `[Live Demo](${f.demo_url})\n\n`; (f.screenshots || '').split('\n').filter(l => l.trim()).forEach((u, i) => { md += `![Screenshot ${i + 1}](${u.trim()})\n\n` }); } break;
                case 'installation': if (f.prerequisites || f.steps) { md += `## Installation\n\n`; if (f.prerequisites) md += `### Prerequisites\n\n${f.prerequisites}\n\n`; if (f.steps) md += `### Steps\n\n\`\`\`bash\n${f.steps}\n\`\`\`\n\n`; } break;
                case 'usage': if (f.usage) md += `## Usage\n\n${f.usage}\n\n`; break;
                case 'api': if (f.api) md += `## API\n\n${f.api}\n\n`; break;
                case 'contributing': if (f.contributing) md += `## Contributing\n\n${f.contributing}\n\n`; break;
                case 'license': if (f.license) md += `## License\n\n${f.license}\n\n`; break;
                case 'authors': if (f.authors) { md += `## Authors\n\n`; f.authors.split('\n').filter(l => l.trim()).forEach(l => { md += `- ${l.trim()}\n` }); md += '\n'; } break;
                case 'acknowledgements': if (f.acknowledgements) md += `## Acknowledgements\n\n${f.acknowledgements}\n\n`; break;
                default: if (f.content) md += `## ${sec.label}\n\n${f.content}\n\n`; break;
            }
        });
        return md;
    }

    function genCatTechMD(selected, layout) {
        if (layout === 'minimal') return `## Tech Stack\n\n${selected.join(', ')}\n\n`;
        let md = `## 🛠️ Tech Stack\n\n`;
        Object.keys(TECH_CATEGORIES).forEach(catName => {
            const cat = TECH_CATEGORIES[catName]; const items = cat.items.filter(t => selected.includes(t.name));
            if (!items.length) return;
            md += `### ${catName}\n\n<p${layout === 'centered' ? ' align="center"' : ''}>\n`; items.forEach(t => { md += `  <img src="${t.icon}" alt="${t.name}" width="40" height="40" title="${t.name}"/>\n`; }); md += '</p>\n\n';
        });
        return md;
    }

    function generateProfileStandardMD() {
        const d = profileData; let md = '';
        if (d.bannerUrl) md += `<img src="${d.bannerUrl}" alt="Banner" width="100%">\n\n`;

        if (d.name || d.username) {
            md += `<h1 align="center">Hi 👋, I'm ${d.name || d.username}</h1>\n`;
            if (d.bio) md += `<h3 align="center">${d.bio}</h3>\n`;
            if (d.showVisitors && d.username) md += `\n<p align="center"><img src="https://komarev.com/ghpvc/?username=${encodeURIComponent(d.username)}&label=Profile%20views&color=blueviolet&style=flat" alt="views"/></p>\n`;
            md += '\n';
        }

        const about = [];
        if (d.role) about.push(`🎓 I'm currently a **${d.role}**`);
        if (d.currentWork) about.push(`🔭 Working on **${d.currentWork}**`);
        if (d.learning) about.push(`🌱 Learning **${d.learning}**`);
        if (d.askMe) about.push(`💬 Ask me about **${d.askMe}**`);
        if (d.location) about.push(`🌍 Based in **${d.location}**`);
        if (d.company) about.push(`🏢 Working at **${d.company}**`);
        if (d.website) about.push(`🌐 Portfolio: **[${d.website}](${d.website})**`);
        if (d.resumeLink) about.push(`📄 Resume: **[View Resume](${d.resumeLink})**`);
        if (d.blogLink) about.push(`✍️ Blog: **[Read Blog](${d.blogLink})**`);
        if (d.customLinks && d.customLinks.length) {
            d.customLinks.filter(l => l.label && l.url).forEach(l => {
                about.push(`🔗 ${l.label}: **[${l.url}](${l.url})**`);
            });
        }
        if (d.pronouns) about.push(`😄 Pronouns: **${d.pronouns}**`);
        if (d.funFact) about.push(`⚡ Fun fact: **${d.funFact}**`);

        if (about.length) {
            if (d.name || d.bannerUrl) md += '---\n\n';
            md += `## 💡 About Me\n\n`; about.forEach(l => { md += `- ${l}\n` }); md += '\n';
        }

        if (d.techStack.length) {
            if (about.length || d.name || d.bannerUrl) md += '---\n\n';
            md += genCatTechMD(d.techStack, 'classic');
        }

        if (d.username && (d.showStats || d.showStreak || d.showLangs || d.showTrophies || d.showActivity)) {
            if (d.techStack.length || about.length || d.name || d.bannerUrl) md += '---\n\n';
            const u = encodeURIComponent(d.username), th = d.statsTheme;
            md += `## 📊 GitHub Stats\n\n`;
            if (d.showStats) md += `<p align="center"><img src="https://github-readme-stats.vercel.app/api?username=${u}&show_icons=true&theme=${th}&hide_border=true&count_private=true"/></p>\n\n`;
            if (d.showStreak) md += `<p align="center"><img src="https://github-readme-streak-stats.herokuapp.com/?user=${u}&theme=${th}&hide_border=true"/></p>\n\n`;
            if (d.showLangs) md += `<p align="center"><img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${u}&layout=compact&theme=${th}&hide_border=true"/></p>\n\n`;
            if (d.showTrophies) md += `<p align="center"><img src="https://github-profile-trophy.vercel.app/?username=${u}&theme=${th}&no-frame=true&margin-w=10"/></p>\n\n`;
            if (d.showActivity) md += `<p align="center"><img src="https://github-readme-activity-graph.vercel.app/graph?username=${u}&theme=${th}&hide_border=true&area=true"/></p>\n\n`;
        }
        // Social links from individual fields
        const filledSocials = SOCIAL_PLATFORMS.filter(p => d.socials[p.key]);
        if (filledSocials.length) {
            if (md.length > 50) md += '---\n\n';
            md += `## 🔗 Connect With Me\n\n<p align="center">\n`;
            filledSocials.forEach(p => {
                const val = d.socials[p.key];
                const url = p.url.replace('{v}', encodeURIComponent(val));
                md += `  <a href="${url}"><img src="https://img.shields.io/badge/${encodeURIComponent(p.label)}-000?style=for-the-badge&logo=${p.key}&logoColor=white"/></a>\n`;
            });
            md += `</p>\n\n`;
        }
        md += '---\n<p align="center">Generated with \u2764\ufe0f using <a href="https://samrattheprogrammer.github.io/Github-ReadMe-Generator/">README Generator</a></p>\n';
        return md;
    }

    function generateProfileCompactMD() {
        const d = profileData; let md = '';
        if (d.name || d.username) {
            md += `# ${d.name || d.username}\n\n`;
            if (d.bio) md += `>${d.bio}\n\n`;
        }
        const about = [];
        if (d.role) about.push(`🎓 I'm a [${d.role}]()`);
        if (d.currentWork) about.push(`🔭 Working on [${d.currentWork}]()`);
        if (d.learning) about.push(`🌱 Learning [${d.learning}]()`);
        if (d.askMe) about.push(`💬 Ask me about [${d.askMe}]()`);
        if (d.location) about.push(`🌍 Based in ${d.location}`);
        if (d.company) about.push(`🏢 Working at ${d.company}`);
        if (d.website) about.push(`🌐 [Portfolio](${d.website})`);
        if (d.resumeLink) about.push(`📄 [Resume](${d.resumeLink})`);
        if (d.blogLink) about.push(`✍️ [Blog](${d.blogLink})`);
        if (d.customLinks && d.customLinks.length) {
            d.customLinks.filter(l => l.label && l.url).forEach(l => {
                about.push(`🔗 [${l.label}](${l.url})`);
            });
        }
        if (d.pronouns) about.push(`😄 Pronouns: ${d.pronouns}`);
        if (d.funFact) about.push(`⚡ Fun fact: ${d.funFact}`);
        if (about.length) { md += `${about.join(' | ')}\n\n`; }
        if (d.techStack.length) md += `**Tech Stack:** ` + d.techStack.join(', ') + '\n\n';

        const filledSocials = SOCIAL_PLATFORMS.filter(p => d.socials[p.key]);
        if (filledSocials.length) {
            md += `**Connect with me:** `;
            const links = filledSocials.map(p => {
                const val = d.socials[p.key];
                const url = p.url.replace('{v}', encodeURIComponent(val));
                return `[${p.label}](${url})`;
            });
            md += links.join(' • ') + `\n\n`;
        }

        if (d.username) {
            const u = encodeURIComponent(d.username), th = d.statsTheme;
            md += `## Stats\n\n`;
            const stats = [];
            if (d.showStats) stats.push(`<img src="https://github-readme-stats.vercel.app/api?username=${u}&show_icons=true&theme=${th}&hide_border=true&count_private=true" width="48%">`);
            if (d.showLangs) stats.push(`<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${u}&layout=compact&theme=${th}&hide_border=true" width="48%">`);
            if (stats.length) md += `<p>\n  ${stats.join('\n  ')}\n</p>\n\n`;

            if (d.showStreak) md += `<p><img src="https://github-readme-streak-stats.herokuapp.com/?user=${u}&theme=${th}&hide_border=true" width="100%"></p>\n\n`;
            if (d.showActivity) md += `<p><img src="https://github-readme-activity-graph.vercel.app/graph?username=${u}&theme=${th}&hide_border=true&area=true" width="100%"></p>\n\n`;
        }

        md += '---\nGenerated using [README Generator](https://samrattheprogrammer.github.io/Github-ReadMe-Generator/)\n'; return md;
    }

    function generateProfileCardMD() {
        const d = profileData; let md = '';
        if (d.name || d.username) {
            md += `<h1 align="center">${d.name || d.username}</h1>\n`;
            if (d.bio) md += `<p align="center"><i>${d.bio}</i></p>\n\n`;
        }

        let cols = '';

        const about = [];
        if (d.role) about.push(`<li>🎓 I'm currently a **${d.role}**</li>`);
        if (d.currentWork) about.push(`<li>🔭 Working on **${d.currentWork}**</li>`);
        if (d.learning) about.push(`<li>🌱 Learning **${d.learning}**</li>`);
        if (d.askMe) about.push(`<li>💬 Ask me about **${d.askMe}**</li>`);
        if (d.location) about.push(`<li>🌍 Based in **${d.location}**</li>`);
        if (d.company) about.push(`<li>🏢 Working at **${d.company}**</li>`);
        if (d.website) about.push(`<li>🌐 Portfolio: <a href="${d.website}">${d.website}</a></li>`);
        if (d.resumeLink) about.push(`<li>📄 <a href="${d.resumeLink}">Resume</a></li>`);
        if (d.blogLink) about.push(`<li>✍️ <a href="${d.blogLink}">Blog</a></li>`);
        if (d.customLinks && d.customLinks.length) {
            d.customLinks.filter(l => l.label && l.url).forEach(l => {
                about.push(`<li>🔗 <a href="${l.url}">${l.label}</a></li>`);
            });
        }
        if (d.pronouns) about.push(`<li>😄 Pronouns: ${d.pronouns}</li>`);

        if (about.length) {
            cols += `<td>\n  <h2>💡 About Me</h2>\n  <ul>\n    ${about.join('\n    ')}\n  </ul>\n</td>\n`;
        }

        if (d.techStack.length) {
            let tList = '';
            const cats = Object.keys(TECH_CATEGORIES).map(catName => {
                const items = TECH_CATEGORIES[catName].items.filter(t => d.techStack.includes(t.name));
                if (!items.length) return '';
                return `<b>${catName}</b><br/>` + items.map(t => `<img src="${t.icon}" alt="${t.name}" width="30" height="30" title="${t.name}"/>`).join(' ');
            }).filter(Boolean);
            tList = cats.join('<br/><br/>');

            cols += `<td valign="top">\n  <h2>🛠 Tech Stack</h2>\n  ${tList}\n</td>\n`;
        }

        if (cols) md += `<table width="100%">\n<tr>\n${cols}</tr>\n</table>\n\n`;

        // Social links
        const filledSocials = SOCIAL_PLATFORMS.filter(p => d.socials[p.key]);
        if (filledSocials.length) {
            md += `<p align="center">\n`;
            filledSocials.forEach(p => {
                const val = d.socials[p.key];
                const url = p.url.replace('{v}', encodeURIComponent(val));
                md += `  <a href="${url}"><img src="https://img.shields.io/badge/${encodeURIComponent(p.label)}-000?style=for-the-badge&logo=${p.key}&logoColor=white"/></a>\n`;
            });
            md += `</p>\n\n`;
        }

        // Stats
        if (d.username) {
            const u = encodeURIComponent(d.username), th = d.statsTheme;
            if (d.showStats && d.showLangs) {
                md += `<table width="100%"><tr>\n`;
                md += `  <td width="50%"><img src="https://github-readme-stats.vercel.app/api?username=${u}&show_icons=true&theme=${th}&hide_border=true&count_private=true" width="100%"/></td>\n`;
                md += `  <td width="50%"><img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${u}&layout=compact&theme=${th}&hide_border=true" width="100%"/></td>\n`;
                md += `</tr></table>\n\n`;
            } else if (d.showStats) {
                md += `<p align="center"><img src="https://github-readme-stats.vercel.app/api?username=${u}&show_icons=true&theme=${th}&hide_border=true&count_private=true"/></p>\n\n`;
            } else if (d.showLangs) {
                md += `<p align="center"><img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${u}&layout=compact&theme=${th}&hide_border=true"/></p>\n\n`;
            }
            if (d.showStreak) md += `<p align="center"><img src="https://github-readme-streak-stats.herokuapp.com/?user=${u}&theme=${th}&hide_border=true"/></p>\n\n`;
            if (d.showTrophies) md += `<p align="center"><img src="https://github-profile-trophy.vercel.app/?username=${u}&theme=${th}&no-frame=true&margin-w=10"/></p>\n\n`;
            if (d.showActivity) md += `<p align="center"><img src="https://github-readme-activity-graph.vercel.app/graph?username=${u}&theme=${th}&hide_border=true&area=true"/></p>\n\n`;
            if (d.showVisitors) md += `\n<p align="center"><img src="https://komarev.com/ghpvc/?username=${u}&label=Profile%20views&color=blueviolet&style=flat" alt="views"/></p>\n`;
        }
        md += '---\n<p align="center">Generated with \u2764\ufe0f using <a href="https://samrattheprogrammer.github.io/Github-ReadMe-Generator/">README Generator</a></p>\n'; return md;
    }

    /* ── PREVIEW + TOC ── */
    function updatePreview() {
        const md = generateMarkdown();
        // Rendered preview
        if (typeof marked !== 'undefined') { marked.setOptions({ breaks: true, gfm: true }); $preview.innerHTML = marked.parse(md); }
        else $preview.textContent = md;
        if (selectedFont !== 'default') $preview.style.fontFamily = `'${selectedFont}', var(--font-sans)`;
        else $preview.style.fontFamily = '';
        // Raw markdown view
        if ($mdRawCode) $mdRawCode.textContent = md;
        // Show/hide based on active tab
        syncPreviewTab();
        updateTOC();
    }

    /* ── PREVIEW / MARKDOWN TAB SWITCH ── */
    function syncPreviewTab() {
        const hideToC = currentMode === 'profile' || currentPreviewTab === 'markdown';
        if (currentPreviewTab === 'preview') {
            $preview.hidden = false;
            if ($mdRaw) $mdRaw.hidden = true;
        } else {
            $preview.hidden = true;
            if ($mdRaw) $mdRaw.hidden = false;
        }
        $toc.style.display = hideToC ? 'none' : '';
    }
    document.querySelectorAll('.preview-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            if (tab.tagName === 'SELECT') return; // ignore dropdown clicks
            document.querySelectorAll('.preview-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentPreviewTab = tab.dataset.view;
            syncPreviewTab();
        });
    });

    const $previewThemeSelect = document.getElementById('preview-theme-select');
    if ($previewThemeSelect) {
        $previewThemeSelect.addEventListener('change', (e) => {
            const theme = e.target.value;
            $preview.className = 'markdown-body'; // reset
            if (theme === 'github-light') $preview.classList.add('theme-light');
            if (theme === 'github-dimmed') $preview.classList.add('theme-dimmed');
        });
    }
    function updateTOC() {
        const headings = $preview.querySelectorAll('h1, h2, h3');
        let html = '<div class="toc-title">Contents</div>';
        headings.forEach((h, i) => {
            const id = 'toc-h-' + i; h.id = id;
            const lv = parseInt(h.tagName[1]);
            const pad = lv > 1 ? 'style="padding-left:' + (lv * 6) + 'px"' : '';
            html += `<a class="toc-item" data-toc="${id}" ${pad}>${h.textContent}</a>`;
        });
        $toc.innerHTML = html;
        $toc.querySelectorAll('.toc-item').forEach(item => {
            item.addEventListener('click', () => {
                const t = document.getElementById(item.dataset.toc);
                if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
                $toc.querySelectorAll('.toc-item').forEach(i => i.classList.remove('active'));
                item.classList.add('active');
            });
        });
        const first = $toc.querySelector('.toc-item'); if (first) first.classList.add('active');
    }

    /* ── COMPLETENESS ── */
    function sectionCompleteness(sec) {
        if (!sec.fields) return 0;
        const f = sec.fields; let filled = 0, total = 0;
        Object.keys(f).forEach(k => { total++; const v = f[k]; if (Array.isArray(v)) { if (v.length) filled++ } else if (typeof v === 'string' && v.trim()) filled++ });
        return total === 0 ? 0 : Math.round(filled / total * 100);
    }
    function overallCompleteness() {
        if (currentMode === 'profile') return 0;
        if (!sections.length) return 0;
        return Math.round(sections.reduce((a, s) => a + sectionCompleteness(s), 0) / sections.length);
    }

    /* ── CHARTS (completeness bar + bar chart modal) ── */
    function updateCharts() {
        const ov = overallCompleteness(); $pct.textContent = ov + '%';
        if ($compBar) $compBar.style.width = ov + '%';
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const tc = isDark ? '#8892a8' : '#515a70'; const gc = isDark ? 'rgba(255,255,255,.04)' : 'rgba(0,0,0,.04)';
        const bc = document.getElementById('bar-chart'); if (typeof Chart === 'undefined' || !bc) return;
        if (barChart) barChart.destroy();
        const lst = currentMode === 'project' ? sections : PROFILE_SECTIONS;
        barChart = new Chart(bc, { type: 'bar', data: { labels: lst.map(s => s.label), datasets: [{ label: '%', data: lst.map(s => currentMode === 'project' ? sectionCompleteness(s) : 50), backgroundColor: lst.map((_, i) => `hsla(${(i / lst.length) * 140 + 200},65%,55%,0.7)`), borderRadius: 5, borderSkipped: false }] }, options: { indexAxis: 'y', responsive: true, maintainAspectRatio: false, scales: { x: { min: 0, max: 100, ticks: { color: tc, callback: v => v + '%' }, grid: { color: gc } }, y: { ticks: { color: tc, font: { size: 11 } }, grid: { display: false } } }, plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => c.parsed.x + '%' } } }, animation: { duration: 400 } } });
    }

    /* ── UPDATE ── */
    let ut = null;
    function debouncedUpdate() { clearTimeout(ut); ut = setTimeout(() => updateAll(), 200); }
    function updateAll() { updatePreview(); renderNav(); updateCharts(); }

    /* ── EXPORT ── */
    function downloadFile(c, f, t) { const b = new Blob([c], { type: t }), u = URL.createObjectURL(b), a = document.createElement('a'); a.href = u; a.download = f; document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(u); }
    document.getElementById('btn-export-md').addEventListener('click', () => { downloadFile(generateMarkdown(), 'README.md', 'text/markdown'); showToast('✅ README.md downloaded!'); });
    document.getElementById('btn-export-json').addEventListener('click', () => {
        const data = { generatedAt: new Date().toISOString(), version: '4.0', mode: currentMode, font: selectedFont, fontSize };
        if (currentMode === 'project') { data.sections = sections.map(s => ({ id: s.id, label: s.label, fields: s.fields })); data.completeness = overallCompleteness() + '%'; }
        else data.profileData = profileData;
        data.markdown = generateMarkdown();
        downloadFile(JSON.stringify(data, null, 2), 'readme-data.json', 'application/json'); showToast('✅ JSON downloaded!');
    });
    document.getElementById('btn-copy').addEventListener('click', () => { navigator.clipboard.writeText(generateMarkdown()).then(() => showToast('📋 Copied!')).catch(() => showToast('❌ Failed')); });

    /* ── TEMPLATES ── */
    $tplSelect.addEventListener('change', () => {
        const t = $tplSelect.value, all = defaultSections();
        sections = t === 'full' || !TEMPLATES[t] ? all : all.filter(s => TEMPLATES[t].includes(s.id));
        activeSectionIndex = 0; renderNav(); renderEditorSections(); updateAll(); showToast(`Template "${t}" applied`);
    });

    /* ── CUSTOM SECTION ── */
    const $cm = document.getElementById('custom-section-modal'), $cn = document.getElementById('custom-section-name');
    document.getElementById('add-section-btn').addEventListener('click', () => { $cm.hidden = false; $cn.value = ''; $cn.focus(); });
    document.getElementById('close-custom-modal').addEventListener('click', () => { $cm.hidden = true; });
    $cm.addEventListener('click', e => { if (e.target === $cm) $cm.hidden = true; });
    document.getElementById('confirm-add-section').addEventListener('click', () => {
        const n = $cn.value.trim(); if (!n) { showToast('Enter a name'); return; }
        sections.push({ id: 'custom_' + Date.now(), label: n, removable: true, fields: { content: '' } });
        $cm.hidden = true; activeSectionIndex = sections.length - 1; renderNav(); renderEditorSections(); updateAll(); showToast(`"${n}" added`);
    });
    $cn.addEventListener('keydown', e => { if (e.key === 'Enter') document.getElementById('confirm-add-section').click(); });

    /* ── CHART MODAL ── */
    const $chm = document.getElementById('chart-modal');
    document.getElementById('open-chart-modal').addEventListener('click', () => { $chm.hidden = false; updateCharts(); });
    document.getElementById('close-chart-modal').addEventListener('click', () => { $chm.hidden = true; });
    $chm.addEventListener('click', e => { if (e.target === $chm) $chm.hidden = true; });

    /* ── TOAST ── */
    const $toast = document.getElementById('toast'); let tt = null;
    function showToast(m) { clearTimeout(tt); $toast.textContent = m; $toast.hidden = false; tt = setTimeout(() => { $toast.hidden = true }, 2500); }

    /* ── NEXT / PREV BUTTONS ── */
    const $btnPrev = document.getElementById('btn-prev-section');
    const $btnNext = document.getElementById('btn-next-section');
    function updateNavButtons() {
        const list = currentMode === 'project' ? sections : PROFILE_SECTIONS;
        const max = list.length - 1;
        if ($btnPrev) $btnPrev.hidden = (activeSectionIndex <= 0);
        if ($btnNext) {
            $btnNext.hidden = false;
            if (activeSectionIndex >= max) {
                $btnNext.textContent = '✓ Done';
            } else {
                $btnNext.textContent = 'Next →';
            }
        }
    }
    if ($btnNext) $btnNext.addEventListener('click', () => {
        const list = currentMode === 'project' ? sections : PROFILE_SECTIONS;
        if (activeSectionIndex < list.length - 1) {
            activeSectionIndex++;
            renderNav(); renderEditorSections(); updateAll(); updateNavButtons();
        } else {
            showToast('🎉 All sections done!');
        }
    });
    if ($btnPrev) $btnPrev.addEventListener('click', () => {
        if (activeSectionIndex > 0) {
            activeSectionIndex--;
            renderNav(); renderEditorSections(); updateAll(); updateNavButtons();
        }
    });

    /* ── INIT ── */
    function init() {
        renderNav(); renderEditorSections(); updateNavButtons();
        const w = setInterval(() => { if (typeof marked !== 'undefined' && typeof Chart !== 'undefined') { clearInterval(w); updateAll(); } }, 100);
        setTimeout(() => { clearInterval(w); updateAll(); }, 3000);
    }
    init();
})();
