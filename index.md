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
        }
        
        @media (max-width: 768px) {
            .profile-card, .globe-container, .section {
                padding: 20px;
            }
            
            h1 {
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
                        <div class="stat-number" id="totalVisitors">127</div>
                        <div class="stat-label">Total Visitors</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number" id="todayVisitors">8</div>
                        <div class="stat-label">Today</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number" id="countries">23</div>
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

    <script>
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
            ];
            
            locations.forEach((location, index) => {
                setTimeout(() => {
                    const dot = document.createElement('div');
                    dot.className = 'visitor-dot';
                    dot.style.top = location.top;
                    dot.style.left = location.left;
                    dot.style.animationDelay = Math.random() * 2 + 's';
                    globe.appendChild(dot);
                }, index * 500);
            });
        }
        
        // 动画数字计数
        function animateNumbers() {
            const counters = [
                { id: 'totalVisitors', target: 127 },
                { id: 'todayVisitors', target: 8 },
                { id: 'countries', target: 23 }
            ];
            
            counters.forEach(counter => {
                const element = document.getElementById(counter.id);
                let current = 0;
                const increment = counter.target / 100;
                
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= counter.target) {
                        current = counter.target;
                        clearInterval(timer);
                    }
                    element.textContent = Math.floor(current);
                }, 20);
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
            });
            
            document.querySelectorAll('.fade-in').forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                el.style.transition = 'all 0.8s ease';
                observer.observe(el);
            });
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
        });
    </script>
</body>
</html>
