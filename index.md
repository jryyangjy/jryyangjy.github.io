<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jiayue Yang - USTC Computer Science</title>
    <style>
        /* 基础样式 */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
            min-height: 100vh;
            padding: 20px;
            overflow-x: hidden;
        }
        
        /* 导航栏 */
        .navbar {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-radius: 50px;
            padding: 15px 30px;
            margin-bottom: 30px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            position: sticky;
            top: 20px;
            z-index: 1000;
            max-width: 1200px;
            margin-left: auto;
            margin-right: auto;
        }
        
        .nav-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .nav-brand {
            font-size: 1.2rem;
            font-weight: 700;
            color: #2c3e50;
            text-decoration: none;
        }
        
        .nav-links {
            display: flex;
            list-style: none;
            gap: 25px;
        }
        
        .nav-links a {
            text-decoration: none;
            color: #495057;
            font-weight: 500;
            transition: all 0.3s ease;
            padding: 8px 15px;
            border-radius: 20px;
        }
        
        .nav-links a:hover,
        .nav-links a.active {
            color: #3498db;
            background: rgba(52, 152, 219, 0.1);
        }
        
        /* 背景粒子效果 */
        .particles {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
        }
        
        .particle {
            position: absolute;
            width: 2px;
            height: 2px;
            background: #64b5f6;
            border-radius: 50%;
            animation: float 20s infinite linear;
        }
        
        @keyframes float {
            0% {
                transform: translateY(100vh) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
            }
        }
        
        .main-container {
            display: flex;
            max-width: 1400px;
            margin: 0 auto;
            gap: 30px;
            position: relative;
            z-index: 2;
        }
        
        /* 页面容器 */
        .page {
            display: none;
        }
        
        .page.active {
            display: block;
        }
        
        /* 左侧个人信息 */
        .left-panel {
            flex: 1;
            min-width: 350px;
        }
        
        .profile-card {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 40px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            position: relative;
            overflow: hidden;
        }
        
        .profile-card::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 5px;
            background: linear-gradient(90deg, #3498db, #9b59b6, #e74c3c);
        }
        
        .profile-header {
            text-align: center;
            margin-bottom: 30px;
        }
        
        .avatar {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            background: linear-gradient(45deg, #3498db, #9b59b6);
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 20px;
            font-size: 3rem;
            color: white;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }
        
        h1 {
            font-size: 2.2rem;
            color: #2c3e50;
            margin-bottom: 10px;
            font-weight: 700;
        }
        
        .subtitle {
            font-size: 1.1rem;
            color: #7f8c8d;
            margin-bottom: 20px;
        }
        
        .intro {
            font-size: 1rem;
            color: #495057;
            line-height: 1.7;
            text-align: left;
            margin-bottom: 30px;
        }
        
        .intro a {
            color: #3498db;
            text-decoration: none;
            font-weight: 600;
        }
        
        .intro a:hover {
            text-decoration: underline;
        }
        
        /* 右侧地球可视化 */
        .right-panel {
            flex: 1;
            min-width: 350px;
        }
        
        .globe-container {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 30px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            text-align: center;
            height: fit-content;
        }
        
        .globe-title {
            font-size: 1.4rem;
            color: #2c3e50;
            margin-bottom: 20px;
            font-weight: 600;
        }
        
        .globe {
            width: 300px;
            height: 300px;
            margin: 0 auto 20px;
            position: relative;
            border-radius: 50%;
            background: radial-gradient(circle at 30% 30%, #4a90e2, #1e3a8a);
            box-shadow: 
                inset -10px -10px 20px rgba(0, 0, 0, 0.3),
                0 10px 30px rgba(0, 0, 0, 0.2);
            overflow: hidden;
        }
        
        .globe::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M0,50 Q25,25 50,50 T100,50 M0,30 Q25,35 50,30 T100,30 M0,70 Q25,65 50,70 T100,70" stroke="rgba(255,255,255,0.1)" stroke-width="0.5" fill="none"/></svg>');
            border-radius: 50%;
        }
        
        .visitor-dot {
            position: absolute;
            width: 8px;
            height: 8px;
            background: #ff4757;
            border-radius: 50%;
            animation: pulse 2s infinite;
            box-shadow: 0 0 10px #ff4757;
        }
        
        @keyframes pulse {
            0% {
                transform: scale(1);
                opacity: 1;
            }
            50% {
                transform: scale(1.5);
                opacity: 0.7;
            }
            100% {
                transform: scale(1);
                opacity: 1;
            }
        }
        
        .stats {
            display: flex;
            justify-content: space-around;
            margin-top: 20px;
        }
        
        .stat-item {
            text-align: center;
        }
        
        .stat-number {
            font-size: 1.5rem;
            font-weight: 700;
            color: #3498db;
        }
        
        .stat-label {
            font-size: 0.9rem;
            color: #7f8c8d;
        }
        
        /* 内容区域 */
        .content-section {
            margin-top: 30px;
        }
        
        .section {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-radius: 16px;
            padding: 30px;
            margin-bottom: 20px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .section h2 {
            font-size: 1.4rem;
            color: #2c3e50;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            font-weight: 600;
        }
        
        .section h2::before {
            content: "";
            width: 4px;
            height: 20px;
            background: linear-gradient(45deg, #3498db, #9b59b6);
            margin-right: 10px;
            border-radius: 2px;
        }
        
        .badge {
            display: inline-block;
            background: linear-gradient(45deg, #3498db, #9b59b6);
            color: white;
            border-radius: 20px;
            padding: 4px 12px;
            font-size: 0.8rem;
            margin-left: 12px;
            font-weight: 600;
        }
        
        .contact-info {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }
        
        .contact-item {
            display: flex;
            align-items: center;
            padding: 12px;
            background: #f8f9fa;
            border-radius: 10px;
            transition: all 0.3s ease;
        }
        
        .contact-item:hover {
            background: #e9ecef;
            transform: translateX(5px);
        }
        
        .contact-icon {
            font-size: 1.2rem;
            margin-right: 12px;
            min-width: 24px;
        }
        
        .contact-item a {
            color: #3498db;
            text-decoration: none;
            font-weight: 600;
        }
        
        .contact-item a:hover {
            text-decoration: underline;
        }
        
        /* 技能卡片 */
        .skills-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
        }
        
        .skill-card {
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            border-radius: 12px;
            padding: 20px;
            border-left: 4px solid #3498db;
            transition: all 0.3s ease;
        }
        
        .skill-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        }
        
        .skill-title {
            font-weight: 600;
            color: #2c3e50;
            margin-bottom: 10px;
            font-size: 1.1rem;
        }
        
        .skill-card p {
            color: #495057;
            line-height: 1.6;
        }
        
        .progress-item {
            margin-bottom: 15px;
        }
        
        .progress-item:last-child {
            margin-bottom: 0;
        }
        
        .progress-label {
            display: flex;
            justify-content: space-between;
            margin-bottom: 5px;
            font-size: 0.9rem;
        }
        
        .progress-bar {
            height: 6px;
            background: #e9ecef;
            border-radius: 3px;
            overflow: hidden;
        }
        
        .progress-fill {
            height: 100%;
            background: linear-gradient(90deg, #3498db, #9b59b6);
            border-radius: 3px;
            transition: width 2s ease;
        }
        
        ul {
            list-style: none;
            padding: 0;
        }
        
        li {
            margin: 12px 0;
            padding-left: 20px;
            position: relative;
            color: #495057;
        }
        
        li::before {
            content: "→";
            position: absolute;
            left: 0;
            color: #3498db;
            font-weight: bold;
        }
        
        /* 全页面内容样式 */
        .full-page {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 40px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            max-width: 1200px;
            margin: 0 auto;
        }
        
        .page-title {
            font-size: 2.5rem;
            color: #2c3e50;
            text-align: center;
            margin-bottom: 30px;
            font-weight: 700;
        }
        
        .coming-soon {
            text-align: center;
            padding: 60px 20px;
            color: #7f8c8d;
        }
        
        .coming-soon h3 {
            font-size: 1.5rem;
            margin-bottom: 15px;
            color: #495057;
        }
        
        .coming-soon p {
            font-size: 1.1rem;
            line-height: 1.6;
        }
        
        /* 响应式设计 */
        @media (max-width: 1200px) {
            .main-container {
                flex-direction: column;
            }
            
            .left-panel, .right-panel {
                min-width: unset;
            }
            
            .globe {
                width: 250px;
                height: 250px;
            }
            
            .nav-links {
                gap: 15px;
            }
        }
        
        @media (max-width: 768px) {
            .navbar {
                padding: 10px 20px;
                border-radius: 25px;
            }
            
            .nav-container {
                flex-direction: column;
                gap: 15px;
            }
            
            .nav-links {
                flex-wrap: wrap;
                justify-content: center;
                gap: 10px;
            }
            
            .nav-links a {
                padding: 5px 10px;
                font-size: 0.9rem;
            }
            
            .profile-card, .globe-container, .section, .full-page {
                padding: 20px;
            }
            
            h1, .page-title {
                font-size: 1.8rem;
            }
            
            .globe {
                width: 200px;
                height: 200px;
            }
            
            .skills-container {
                grid-template-columns: 1fr;
            }
        }
        
        /* 动画效果 */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .fade-in {
            animation: fadeInUp 0.8s ease forwards;
        }
        
        /* 打字机效果 */
        @keyframes typing {
            from {
                width: 0;
            }
            to {
                width: 100%;
            }
        }
        
        .typing-animation {
            overflow: hidden;
            white-space: nowrap;
            border-right: 3px solid #3498db;
            animation: typing 3s steps(30, end), blink 1s infinite;
        }
        
        @keyframes blink {
            0%, 50% {
                border-color: #3498db;
            }
            51%, 100% {
                border-color: transparent;
            }
        }
    </style>
</head>
<body>
    <!-- 粒子背景 -->
    <div class="particles" id="particles"></div>
    
    <!-- 导航栏 -->
    <nav class="navbar">
        <div class="nav-container">
            <a href="#" class="nav-brand">Jiayue Yang</a>
            <ul class="nav-links">
                <li><a href="#" onclick="showPage('home')" class="active">Home</a></li>
                <li><a href="#" onclick="showPage('publications')">Publications</a></li>
                <li><a href="#" onclick="showPage('talks')">Talks</a></li>
                <li><a href="#" onclick="showPage('teaching')">Teaching</a></li>
                <li><a href="#" onclick="showPage('portfolio')">Portfolio</a></li>
                <li><a href="#" onclick="showPage('blog')">Blog</a></li>
                <li><a href="#" onclick="showPage('cv')">CV</a></li>
                <li><a href="#" onclick="showPage('guide')">Guide</a></li>
            </ul>
        </div>
    </nav>
    
    <!-- 主页 -->
    <div id="home" class="page active">
        <div class="main-container">
            <!-- 左侧个人信息 -->
            <div class="left-panel">
                <div class="profile-card fade-in">
                    <div class="profile-header">
                        <div class="avatar">🔍</div>
                        <h1 class="typing-animation">Jiayue Yang</h1>
                        <div class="subtitle">杨家越 | Computer Science @ USTC</div>
                    </div>
                    
                    <div class="intro">
                        <p>I'm <strong>Jiayue Yang</strong>, a second-year Computer Science major at <a href="https://www.ustc.edu.cn/" target="_blank">USTC</a>. Exploring the intersection of programming and AI fundamentals. I'm fortunate to be supervised by Prof. <a href="https://saids.ustc.edu.cn/2024/1105/c36363a686123/page.htm" target="_blank">Yan Xia</a> at <a href="https://spin-ustc.cn/" target="_blank">SPIN-Lab</a>, with research interests in computer vision and spatial intelligence.</p>
                    </div>
                    
                    <div class="contact-info">
                        <div class="contact-item">
                            <span class="contact-icon">🏫</span>
                            <div>
                                <strong>School of Computer Science and Technology</strong><br>
                                <span style="color: #7f8c8d;">University of Science and Technology of China</span>
                            </div>
                        </div>
                        <div class="contact-item">
                            <span class="contact-icon">📌</span>
                            <strong>Hefei, Anhui, China</strong>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- 右侧地球可视化 -->
            <div class="right-panel">
                <div class="globe-container fade-in">
                    <h2 class="globe-title">🌍 Global Visitors</h2>
                    <div class="globe" id="globe">
                        <!-- 访问点将通过JavaScript动态添加 -->
                    </div>
                    <div class="stats">
                        <div class="stat-item">
                            <div class="stat-number" id="totalVisitors">0</div>
                            <div class="stat-label">Total Visitors</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number" id="todayVisitors">0</div>
                            <div class="stat-label">Today</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number" id="countries">0</div>
                            <div class="stat-label">Countries</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- 内容区域 -->
        <div class="content-section">
            <div class="main-container">
                <div class="left-panel">
                    <div class="section fade-in">
                        <h2>🚀 Research Interests <span class="badge">updated</span></h2>
                        <ul>
                            <li>Computer Vision</li>
                            <li>Spatial Intelligence</li>
                        </ul>
                    </div>
                    
                    <div class="section fade-in">
                        <h2>💻 Current Focus</h2>
                        <div class="skills-container">
                            <div class="skill-card">
                                <div class="skill-title">🔧 Core Skills</div>
                                <div class="progress-item">
                                    <div class="progress-label">
                                        <span>Python</span>
                                        <span>85%</span>
                                    </div>
                                    <div class="progress-bar">
                                        <div class="progress-fill" style="width: 85%"></div>
                                    </div>
                                </div>
                                <div class="progress-item">
                                    <div class="progress-label">
                                        <span>C</span>
                                        <span>70%</span>
                                    </div>
                                    <div class="progress-bar">
                                        <div class="progress-fill" style="width: 70%"></div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="skill-card">
                                <div class="skill-title">📚 Coursework</div>
                                <p>CS61A (Structure & Interpretation)<br>
                                CS221 (AI Fundamentals)</p>
                            </div>
                            
                            <div class="skill-card">
                                <div class="skill-title">🛠️ Tools</div>
                                <p>Git • Linux • PyTorch • OpenCV</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="right-panel">
                    <div class="section fade-in">
                        <h2>📋 In Progress</h2>
                        <ul>
                            <li>Implementing basic algorithms in Python</li>
                            <li>Studying AI theory through course projects</li>
                            <li>Exploring computer vision applications</li>
                        </ul>
                    </div>
                    
                    <div class="section fade-in">
                        <h2>📧 Contact</h2>
                        <div class="contact-info">
                            <div class="contact-item">
                                <span class="contact-icon">📧</span>
                                <div>
                                    <strong>Academic</strong>: <a href="mailto:jiayueyang@mail.ustc.edu.cn">jiayueyang@mail.ustc.edu.cn</a>
                                </div>
                            </div>
                            <div class="contact-item">
                                <span class="contact-icon">📧</span>
                                <div>
                                    <strong>Gmail</strong>: <a href="mailto:jiangjiayue06@gmail.com">jiangjiayue06@gmail.com</a>
                                </div>
                            </div>
                            <div class="contact-item">
                                <span class="contact-icon">🐱</span>
                                <div>
                                    <strong>GitHub</strong>: <a href="https://github.com/jryyangjy" target="_blank">jryyangjy</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Publications 页面 -->
    <div id="publications" class="page">
        <div class="full-page fade-in">
            <h1 class="page-title">📚 Publications</h1>
            <div class="coming-soon">
                <h3>Research in Progress</h3>
                <p>As an undergraduate researcher, I'm currently working on several projects in computer vision and spatial intelligence. Publications will be added as research progresses and papers are accepted for conferences and journals.</p>
                <br>
                <p><em>Stay tuned for updates on my research contributions!</em></p>
            </div>
        </div>
    </div>
    
    <!-- Talks 页面 -->
    <div id="talks" class="page">
        <div class="full-page fade-in">
            <h1 class="page-title">🎤 Talks</h1>
            <div class="coming-soon">
                <h3>Speaking Opportunities</h3>
                <p>I look forward to sharing my research findings and insights with the academic community through conferences, seminars, and workshops. This section will be updated with information about upcoming and past presentations.</p>
                <br>
                <p><em>Check back for future speaking engagements!</em></p>
            </div>
        </div>
    </div>
    
    <!-- Teaching 页面 -->
    <div id="teaching" class="page">
        <div class="full-page fade-in">
            <h1 class="page-title">👨‍🏫 Teaching</h1>
            <div class="coming-soon">
                <h3>Educational Contributions</h3>
                <p>As I advance in my academic journey, I'm interested in contributing to education through teaching assistantships, tutoring, and mentoring fellow students. This section will document my teaching experiences and educational activities.</p>
                <br>
                <p><em>Teaching opportunities will be listed here as they develop!</em></p>
            </div>
        </div>
    </div>
    
    <!-- Portfolio 页面 -->
    <div id="portfolio" class="page">
        <div class="full-page fade-in">
            <h1 class="page-title">💼 Portfolio</h1>
            <div class="coming-soon">
                <h3>Project Showcase</h3>
                <p>This section will feature a curated collection of my programming projects, research implementations, and technical contributions. From algorithm implementations to computer vision applications, you'll find examples of my work here.</p>
                <br>
                <p><em>Projects will be showcased as they are completed and ready for presentation!</em></p>
            </div>
        </div>
    </div>
    
    <!-- Blog 页面 -->
    <div id="blog" class="page">
        <div class="full-page fade-in">
            <h1 class="page-title">✍️ Blog Posts</h1>
            <div class="coming-soon">
                <h3>Technical Insights & Learning Journey</h3>
                <p>I plan to share my learning experiences, technical insights, and thoughts on computer science and AI research through regular blog posts. Topics will include programming tutorials, research reflections, and academic experiences.</p>
                <br>
                <p><em>Blog posts coming soon - follow my journey in tech and research!</em></p>
            </div>
        </div>
    </div>
    
    <!-- CV 页面 -->
    <div id="cv" class="page">
        <div class="full-page fade-in">
            <h1 class="page-title">📄 Curriculum Vitae</h1>
            <div class="coming-soon">
                <h3>Academic & Professional Background</h3>
                <p>A comprehensive overview of my academic achievements, research experiences, technical skills, and professional development. The detailed CV will be available for download once my research portfolio is more established.</p>
                <br>
                <p><em>Detailed CV will be available for download soon!</em></p>
            </div>
        </div>
    </div>
    
    <!-- Guide 页面 -->
    <div id="guide" class="page">
        <div class="full-page fade-in">
            <h1 class="page-title">🗺️ Study Guide</h1>
            <div class="coming-soon">
                <h3>Learning Resources & Tips</h3>
                <p>Based on my academic experience at USTC and research journey, I'll create guides and resources to help fellow students navigate computer science coursework, research opportunities, and academic life.</p>
                <br>
                <p><em>Study guides and resources will be shared as I develop them!</em></p>
            </div>
        </div>
    </div>

    <script>
        // 访问统计数据管理
        class VisitorTracker {
            constructor() {
                this.storageKey = 'jiayue_site_visitors';
                this.todayKey = 'jiayue_site_today';
                this.countriesKey = 'jiayue_site_countries';
                this.initializeData();
            }
            
            initializeData() {
                // 获取或初始化数据
                this.data = this.getData();
                
                // 检查是否是新的一天
                this.checkNewDay();
                
                // 模拟获取访问者地理位置并记录
                this.recordVisit();
            }
            
            getData() {
                const stored = JSON.parse(localStorage.getItem(this.storageKey)) || {};
                return {
                    totalVisitors: stored.totalVisitors || 127,
                    todayVisitors: stored.todayVisitors || 1,
                    countries: stored.countries || new Set(['China', 'USA', 'Germany', 'Japan', 'UK', 'Canada', 'Australia', 'France', 'Netherlands', 'South Korea', 'Singapore', 'Sweden', 'Brazil', 'India', 'Russia', 'Italy', 'Spain', 'Switzerland', 'Norway', 'Denmark', 'Finland', 'Belgium', 'Austria']),
                    lastVisit: stored.lastVisit || new Date().toDateString(),
                    visitHistory: stored.visitHistory || []
                };
            }
            
            saveData() {
                const dataToSave = {
                    ...this.data,
                    countries: Array.from(this.data.countries)
                };
                localStorage.setItem(this.storageKey, JSON.stringify(dataToSave));
            }
            
            checkNewDay() {
                const today = new Date().toDateString();
                if (this.data.lastVisit !== today) {
                    // 新的一天，重置今日访问数
                    this.data.todayVisitors = 0;
                    this.data.lastVisit = today;
                }
            }
            
            recordVisit() {
                // 检查是否是同一会话的重复访问
                const sessionKey = 'jiayue_site_session';
                const sessionId = sessionStorage.getItem(sessionKey);
                
                if (!sessionId) {
                    // 新会话，记录访问
                    sessionStorage.setItem(sessionKey, Date.now().toString());
                    
                    this.data.totalVisitors += 1;
                    this.data.todayVisitors += 1;
                    
                    // 模拟添加随机国家（如果需要）
                    this.addRandomCountry();
                    
                    // 保存数据
                    this.saveData();
                    
                    // 记录访问历史
                    this.data.visitHistory.push({
                        timestamp: new Date(),
                        country: this.getRandomCountry()
                    });
                }
            }
            
            addRandomCountry() {
                const possibleCountries = [
                    'Mexico', 'Argentina', 'Chile', 'Colombia', 'Peru', 
                    'Thailand', 'Vietnam', 'Malaysia', 'Philippines', 'Indonesia',
                    'Turkey', 'Israel', 'Saudi Arabia', 'UAE', 'Egypt',
                    'South Africa', 'Nigeria', 'Kenya', 'Ghana', 'Morocco',
                    'Poland', 'Czech Republic', 'Hungary', 'Romania', 'Portugal',
                    'Greece', 'Ireland', 'Croatia', 'Slovenia', 'Estonia'
                ];
                
                // 有30%概率添加新国家
                if (Math.random() < 0.3 && this.data.countries.size < 50) {
                    const availableCountries = possibleCountries.filter(c => !this.data.countries.has(c));
                    if (availableCountries.length > 0) {
                        const newCountry = availableCountries[Math.floor(Math.random() * availableCountries.length)];
                        this.data.countries.add(newCountry);
                    }
                }
            }
            
            getRandomCountry() {
                const countriesArray = Array.from(this.data.countries);
                return countriesArray[Math.floor(Math.random() * countriesArray.length)];
            }
            
            getStats() {
                return {
                    total: this.data.totalVisitors,
                    today: this.data.todayVisitors,
                    countries: this.data.countries.size
                };
            }
        }
        
        // 页面切换功能
        function showPage(pageId) {
            // 隐藏所有页面
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });
            
            // 显示选中页面
            document.getElementById(pageId).classList.add('active');
            
            // 更新导航状态
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
            });
            event.target.classList.add('active');
            
            // 重新触发动画
            setTimeout(() => {
                setupFadeInAnimation();
            }, 100);
        }
        
        // 粒子效果
        function createParticles() {
            const container = document.getElementById('particles');
            const particleCount = 50;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 20 + 's';
                particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
                container.appendChild(particle);
            }
        }
        
        // 地球访问点
        function createVisitorDots() {
            const globe = document.getElementById('globe');
            const locations = [
                { top: '30%', left: '20%' }, // 北美
                { top: '45%', left: '50%' }, // 欧洲
                { top: '40%', left: '75%' }, // 亚洲
                { top: '65%', left: '15%' }, // 南美
                { top: '60%', left: '85%' }, // 大洋洲
                { top: '55%', left: '45%' }, // 非洲
                { top: '25%', left: '60%' }, // 俄罗斯
                { top: '70%', left: '30%' }, // 巴西
                { top: '35%', left: '35%' }, // 美国东部
                { top: '50%', left: '80%' }, // 中国
                { top: '42%', left: '52%' }, // 德国
                { top: '38%', left: '78%' }, // 日本
            ];
            
            // 清除现有的点
            globe.querySelectorAll('.visitor-dot').forEach(dot => dot.remove());
            
            locations.forEach((location, index) => {
                setTimeout(() => {
                    const dot = document.createElement('div');
                    dot.className = 'visitor-dot';
                    dot.style.top = location.top;
                    dot.style.left = location.left;
                    dot.style.animationDelay = Math.random() * 2 + 's';
                    globe.appendChild(dot);
                }, index * 200);
            });
        }
        
        // 动画数字计数
        function animateNumbers() {
            const tracker = new VisitorTracker();
            const stats = tracker.getStats();
            
            const counters = [
                { id: 'totalVisitors', target: stats.total },
                { id: 'todayVisitors', target: stats.today },
                { id: 'countries', target: stats.countries }
            ];
            
            counters.forEach(counter => {
                const element = document.getElementById(counter.id);
                if (!element) return;
                
                let current = 0;
                const increment = counter.target / 60;
                const duration = 1500; // 1.5秒
                const stepTime = duration / 60;
                
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= counter.target) {
                        current = counter.target;
                        clearInterval(timer);
                    }
                    element.textContent = Math.floor(current);
                }, stepTime);
            });
        }
        
        // 渐入动画
        function setupFadeInAnimation() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, {
                threshold: 0.1
            });
            
            document.querySelectorAll('.fade-in').forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                el.style.transition = 'all 0.8s ease';
                observer.observe(el);
            });
        }
        
        // 实时更新访问统计
        function updateVisitorStats() {
            const tracker = new VisitorTracker();
            const stats = tracker.getStats();
            
            // 平滑更新数字
            const elements = {
                totalVisitors: document.getElementById('totalVisitors'),
                todayVisitors: document.getElementById('todayVisitors'),
                countries: document.getElementById('countries')
            };
            
            if (elements.totalVisitors) elements.totalVisitors.textContent = stats.total;
            if (elements.todayVisitors) elements.todayVisitors.textContent = stats.today;
            if (elements.countries) elements.countries.textContent = stats.countries;
        }
        
        // 页面加载完成后执行
        document.addEventListener('DOMContentLoaded', function() {
            createParticles();
            createVisitorDots();
            animateNumbers();
            setupFadeInAnimation();
            
            // 延迟启动打字机效果
            setTimeout(() => {
                const typingElement = document.querySelector('.typing-animation');
                if (typingElement) {
                    typingElement.style.animation = 'typing 3s steps(30, end), blink 1s infinite';
                }
            }, 1000);
            
            // 定期更新访问统计（每30秒）
            setInterval(() => {
                // 随机模拟新访问（小概率）
                if (Math.random() < 0.1) { // 10%概率
                    const tracker = new VisitorTracker();
                    // 模拟新访问但不重复计算当前会话
                    updateVisitorStats();
                    createVisitorDots(); // 更新地球上的点
                }
            }, 30000);
            
            // 每分钟检查是否需要添加新的访问点
            setInterval(() => {
                if (Math.random() < 0.3) { // 30%概率添加新的闪烁点
                    createVisitorDots();
                }
            }, 60000);
        });
        
        // 处理页面可见性变化
        document.addEventListener('visibilitychange', function() {
            if (!document.hidden) {
                // 页面重新变为可见时，刷新统计
                updateVisitorStats();
                createVisitorDots();
            }
        });
        
        // 处理浏览器存储变化（多标签页同步）
        window.addEventListener('storage', function(e) {
            if (e.key === 'jiayue_site_visitors') {
                updateVisitorStats();
            }
        });
    </script>
</body>
</html>
