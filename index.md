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
        
        /* 右侧统计信息 */
        .right-panel {
            flex: 1;
            min-width: 350px;
        }
        
        .stats-container {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 30px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            text-align: center;
            height: fit-content;
        }
        
        .stats-title {
            font-size: 1.4rem;
            color: #2c3e50;
            margin-bottom: 20px;
            font-weight: 600;
        }
        
        .simple-chart {
            width: 300px;
            height: 200px;
            margin: 0 auto 20px;
            position: relative;
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            border-radius: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 4rem;
            color: #3498db;
            border: 2px solid rgba(52, 152, 219, 0.1);
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
        
        /* CV特定样式 */
        .cv-section {
            margin-bottom: 30px;
            padding: 25px;
            background: #f8f9fa;
            border-radius: 12px;
            border-left: 4px solid #3498db;
        }
        
        .cv-section h3 {
            color: #2c3e50;
            font-size: 1.3rem;
            margin-bottom: 15px;
        }
        
        .timeline-item {
            margin-bottom: 20px;
            padding-bottom: 20px;
            border-bottom: 1px solid #e9ecef;
        }
        
        .timeline-item:last-child {
            border-bottom: none;
            margin-bottom: 0;
        }
        
        .timeline-period {
            font-weight: 600;
            color: #3498db;
            margin-bottom: 5px;
        }
        
        .timeline-title {
            font-weight: 600;
            color: #2c3e50;
            margin-bottom: 5px;
        }
        
        .timeline-subtitle {
            color: #7f8c8d;
            font-size: 0.95rem;
            margin-bottom: 8px;
        }
        
        .timeline-description {
            color: #495057;
            line-height: 1.6;
        }
        
        /* CV技能卡片样式 */
        .skills-list {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 10px;
            margin-top: 10px;
        }
        
        .skill-item {
            background: #e3f2fd;
            padding: 8px 12px;
            border-radius: 8px;
            font-size: 0.9rem;
            color: #1976d2;
            font-weight: 500;
        }
        
        .achievement-item {
            margin-bottom: 10px;
            padding-left: 20px;
            position: relative;
        }
        
        .achievement-item::before {
            content: "🏆";
            position: absolute;
            left: 0;
            top: 0;
        }
        
        /* 响应式设计 */
        @media (max-width: 1200px) {
            .main-container {
                flex-direction: column;
            }
            
            .left-panel, .right-panel {
                min-width: unset;
            }
            
            .simple-chart {
                width: 250px;
                height: 180px;
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
            
            .profile-card, .stats-container, .section, .full-page {
                padding: 20px;
            }
            
            h1, .page-title {
                font-size: 1.8rem;
            }
            
            .simple-chart {
                width: 200px;
                height: 150px;
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
                <li><a href="/" onclick="showPage('home'); return false;" class="active">Home</a></li>
                <li><a href="/publications" onclick="showPage('publications'); return false;">Publications</a></li>
                <li><a href="/talks" onclick="showPage('talks'); return false;">Talks</a></li>
                <li><a href="/teaching" onclick="showPage('teaching'); return false;">Teaching</a></li>
                <li><a href="/portfolio" onclick="showPage('portfolio'); return false;">Portfolio</a></li>
                <li><a href="/year-archive" onclick="showPage('blog'); return false;">Blog</a></li>
                <li><a href="/cv" onclick="showPage('cv'); return false;">CV</a></li>
                <li><a href="/markdown" onclick="showPage('guide'); return false;">Guide</a></li>
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
            
            <!-- 右侧简单统计 -->
            <div class="right-panel">
                <div class="stats-container fade-in">
                    <h2 class="stats-title">📊 Site Statistics</h2>
                    <div class="simple-chart">
                        📈
                    </div>
                    <div class="stats">
                        <div class="stat-item">
                            <div class="stat-number" id="totalViews">0</div>
                            <div class="stat-label">Total Views</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number" id="todayViews">0</div>
                            <div class="stat-label">Today</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number" id="lastUpdate">Jan 25</div>
                            <div class="stat-label">Last Update</div>
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
            <h1 class="page-title">📝 Year Archive</h1>
            <div class="coming-soon">
                <h3>Academic Journey & Timeline</h3>
                <p>This section will contain a chronological archive of my academic and research journey. 
                You'll find yearly summaries of my projects, achievements, coursework, and personal growth in computer science and research.</p>
                <br>
                <p><em>Year-by-year archive coming soon - documenting my path in tech and academia!</em></p>
            </div>
        </div>
    </div>
    
    <!-- CV 页面 -->
    <div id="cv" class="page">
        <div class="full-page fade-in">
            <h1 class="page-title">📄 Curriculum Vitae</h1>
            
            <div class="cv-section">
                <h3>🎓 Education</h3>
                <div class="timeline-item">
                    <div class="timeline-period">September 2025 - June 2028 (Expected)</div>
                    <div class="timeline-title">University of Science and Technology of China (USTC)</div>
                    <div class="timeline-subtitle">School of Computer Science and Technology, Elite Class in Computer Science</div>
                    <div class="timeline-description">
                        Bachelor's degree in Computer Science and Technology, specializing in Computer Vision and Spatial Intelligence. 
                        Conducting research under the supervision of Prof. Yan Xia at SPIN Lab (Spatial Intelligence Lab).
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-period">September 2024 - June 2025</div>
                    <div class="timeline-title">University of Science and Technology of China (USTC)</div>
                    <div class="timeline-subtitle">School of Cyber Science and Technology, Wang Xiaomo Cyber Security Elite Class</div>
                    <div class="timeline-description">
                        Foundation year in Cyber Security program before transferring to Computer Science. 
                        Built strong fundamentals in programming, mathematics, and computer systems.
                    </div>
                </div>
            </div>
            
            <div class="cv-section">
                <h3>🔬 Research Experience</h3>
                <div class="timeline-item">
                    <div class="timeline-period">January 2025 - Present</div>
                    <div class="timeline-title">Undergraduate Researcher</div>
                    <div class="timeline-subtitle">SPIN Lab (Spatial Intelligence Lab), USTC</div>
                    <div class="timeline-description">
                        Working under Prof. Yan Xia on computer vision and spatial intelligence projects. 
                        Focus areas include 3D scene understanding, point cloud processing, and spatial reasoning algorithms.
                    </div>
                </div>
            </div>
            
            <div class="cv-section">
                <h3>💻 Technical Skills</h3>
                <div class="skills-container">
                    <div class="skill-card">
                        <div class="skill-title">Programming Languages</div>
                        <p>Python, C/C++, JavaScript</p>
                    </div>
                    <div class="skill-card">
                        <div class="skill-title">AI/ML Frameworks</div>
                        <p>PyTorch, OpenCV, PDAL</p>
                    </div>
                    <div class="skill-card">
                        <div class="skill-title">Tools & Technologies</div>
                        <p>Git/GitHub, Linux, Point Cloud Processing</p>
                    </div>
                    <div class="skill-card">
                        <div class="skill-title">Specializations</div>
                        <p>Computer Vision, Machine Learning, Algorithm Design</p>
                    </div>
                </div>
            </div>
            
            <div class="cv-section">
                <h3>📚 Relevant Coursework</h3>
                <div class="timeline-description">
                    <strong>Computer Science Fundamentals:</strong> Data Structures and Algorithms, Computer Organization, 
                    Operating Systems, Computer Networks<br><br>
                    <strong>Mathematics:</strong> Linear Algebra, Calculus, Discrete Mathematics, Probability and Statistics<br><br>
                    <strong>AI/ML:</strong> Introduction to Artificial Intelligence (CS221), Machine Learning Fundamentals<br><br>
                    <strong>Programming:</strong> Structure and Interpretation of Computer Programs (CS61A), 
                    Object-Oriented Programming, Software Engineering
                </div>
            </div>
            
            <div class="cv-section">
                <h3>🏆 Academic Achievements</h3>
                <ul>
                    <li>Selected for Elite Class in Computer Science (华夏计算机科技英才班) at USTC</li>
                    <li>Successful transfer from Cyber Security to Computer Science program</li>
                    <li>Undergraduate research position at SPIN Lab under Prof. Yan Xia</li>
                </ul>
            </div>
            
            <div class="cv-section">
                <h3>💼 Projects</h3>
                <div class="timeline-item">
                    <div class="timeline-period">2025</div>
                    <div class="timeline-title">Point Cloud Processing System</div>
                    <div class="timeline-subtitle">Research Project - SPIN Lab</div>
                    <div class="timeline-description">
                        Developed an intelligent point cloud segmentation system for large-scale LiDAR data processing. 
                        Implemented multi-radius analysis (25m, 50m, 100m) with smart conflict detection and parallel processing capabilities.
                        Technologies: Python, PDAL, concurrent processing, file system optimization.
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-period">2024-2025</div>
                    <div class="timeline-title">Algorithm Implementation Portfolio</div>
                    <div class="timeline-subtitle">Coursework Projects</div>
                    <div class="timeline-description">
                        Implemented fundamental algorithms and data structures in Python and C. 
                        Projects include sorting algorithms, graph traversal, dynamic programming solutions, and basic AI algorithms.
                    </div>
                </div>
            </div>
            
            <div class="cv-section">
                <h3>📈 Research Interests</h3>
                <div class="timeline-description">
                    <strong>Computer Vision:</strong> 3D scene understanding, object detection and recognition, 
                    image processing and analysis<br><br>
                    <strong>Spatial Intelligence:</strong> Spatial reasoning, 3D geometry processing, 
                    point cloud analysis, scene reconstruction<br><br>
                    <strong>Machine Learning:</strong> Deep learning applications in computer vision, 
                    neural network architectures for spatial data
                </div>
            </div>
            
            <div class="cv-section">
                <h3>🌐 Languages</h3>
                <div class="timeline-description">
                    <strong>Chinese:</strong> Native<br>
                    <strong>English:</strong> Proficient (Academic and Technical)
                </div>
            </div>
            
            <div class="cv-section">
                <h3>📧 Contact Information</h3>
                <div class="contact-info">
                    <div class="contact-item">
                        <span class="contact-icon">📧</span>
                        <div>
                            <strong>Academic Email:</strong> <a href="mailto:jiayueyang@mail.ustc.edu.cn">jiayueyang@mail.ustc.edu.cn</a>
                        </div>
                    </div>
                    <div class="contact-item">
                        <span class="contact-icon">📧</span>
                        <div>
                            <strong>Personal Email:</strong> <a href="mailto:jiangjiayue06@gmail.com">jiangjiayue06@gmail.com</a>
                        </div>
                    </div>
                    <div class="contact-item">
                        <span class="contact-icon">🐱</span>
                        <div>
                            <strong>GitHub:</strong> <a href="https://github.com/jryyangjy" target="_blank">github.com/jryyangjy</a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div style="text-align: center; margin-top: 30px; color: #7f8c8d; font-size: 0.9rem;">
                <p><em>Last Updated: July 2025</em></p>
            </div>
        </div>
    </div>
    
    <!-- Guide 页面 -->
    <div id="guide" class="page">
        <div class="full-page fade-in">
            <h1 class="page-title">📖 Markdown Guide</h1>
            <div class="coming-soon">
                <h3>Markdown Documentation & Tutorials</h3>
                <p>This section will contain comprehensive Markdown guides, syntax references, and documentation tips. 
                Perfect for students and researchers looking to improve their technical writing and documentation skills.</p>
                <br>
                <p><em>Markdown guides and tutorials coming soon!</em></p>
            </div>
        </div>
    </div>
    
    <script>
        // URL路由管理
        const routes = {
            '/': 'home',
            '/home': 'home',
            '/publications': 'publications',
            '/talks': 'talks',
            '/teaching': 'teaching',
            '/portfolio': 'portfolio',
            '/year-archive': 'blog',
            '/cv': 'cv',
            '/markdown': 'guide'
        };

        // JavaScript for page navigation and interactive elements
        function showPage(pageId, updateUrl = true) {
            // Hide all pages
            const pages = document.querySelectorAll('.page');
            pages.forEach(page => page.classList.remove('active'));
            
            // Show selected page
            const targetPage = document.getElementById(pageId);
            if (targetPage) {
                targetPage.classList.add('active');
            }
            
            // Update navigation
            const navLinks = document.querySelectorAll('.nav-links a');
            navLinks.forEach(link => link.classList.remove('active'));
            
            // Find and activate the correct nav link
            const activeLink = document.querySelector(`[onclick*="${pageId}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
            
            // Update URL if needed
            if (updateUrl) {
                const newPath = Object.keys(routes).find(key => routes[key] === pageId) || '/';
                if (window.location.pathname !== newPath) {
                    history.pushState({page: pageId}, '', newPath);
                }
            }
            
            // Update page title
            updatePageTitle(pageId);
        }
        
        // Update page title based on current page
        function updatePageTitle(pageId) {
            const titles = {
                'home': 'Jiayue Yang - USTC Computer Science',
                'publications': 'Publications - Jiayue Yang',
                'talks': 'Talks - Jiayue Yang',
                'teaching': 'Teaching - Jiayue Yang',
                'portfolio': 'Portfolio - Jiayue Yang',
                'blog': 'Blog Posts - Jiayue Yang',
                'cv': 'CV - Jiayue Yang',
                'guide': 'Guide - Jiayue Yang'
            };
            document.title = titles[pageId] || 'Jiayue Yang - USTC Computer Science';
        }
        
        // Handle browser back/forward buttons
        window.addEventListener('popstate', function(event) {
            const pageId = event.state ? event.state.page : getPageFromPath();
            showPage(pageId, false);
        });
        
        // Get page ID from current path
        function getPageFromPath() {
            const path = window.location.pathname;
            return routes[path] || 'home';
        }
        
        // Initialize routing on page load
        function initializeRouting() {
            const pageId = getPageFromPath();
            showPage(pageId, false);
            
            // Set initial state
            history.replaceState({page: pageId}, '', window.location.pathname);
        }
        
        // Create floating particles background
        function createParticles() {
            const particles = document.getElementById('particles');
            const particleCount = 50;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 20 + 's';
                particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
                particles.appendChild(particle);
            }
        }
        
        // Animate statistics counters
        function animateCounters() {
            const totalViews = document.getElementById('totalViews');
            const todayViews = document.getElementById('todayViews');
            
            if (totalViews && todayViews) {
                let total = 0;
                let today = 0;
                const totalTarget = 1247;
                const todayTarget = 23;
                
                const interval = setInterval(() => {
                    if (total < totalTarget) {
                        total += Math.ceil(totalTarget / 100);
                        totalViews.textContent = Math.min(total, totalTarget);
                    }
                    if (today < todayTarget) {
                        today += 1;
                        todayViews.textContent = Math.min(today, todayTarget);
                    }
                    if (total >= totalTarget && today >= todayTarget) {
                        clearInterval(interval);
                    }
                }, 50);
            }
        }
        
        // Initialize page
        document.addEventListener('DOMContentLoaded', function() {
            // Initialize routing first
            initializeRouting();
            
            createParticles();
            animateCounters();
            
            // Add fade-in animation to elements
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in');
                    }
                });
            }, observerOptions);
            
            document.querySelectorAll('.section, .skill-card, .timeline-item').forEach(el => {
                observer.observe(el);
            });
        });
    </script>
</body>
</html>
