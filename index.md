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
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            min-height: 100vh;
            padding: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .container {
            max-width: 800px;
            width: 100%;
            background: white;
            border-radius: 16px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            padding: 40px;
            position: relative;
            overflow: hidden;
        }
        
        .container::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 5px;
            background: linear-gradient(90deg, #3498db, #9b59b6);
        }
        
        /* 头部样式 */
        header {
            margin-bottom: 30px;
            text-align: center;
        }
        
        h1 {
            font-size: 2.5rem;
            color: #2c3e50;
            margin-bottom: 10px;
            position: relative;
            display: inline-block;
        }
        
        h1::after {
            content: "";
            position: absolute;
            bottom: -8px;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 4px;
            background: #3498db;
            border-radius: 2px;
        }
        
        .intro {
            margin-top: 20px;
            font-size: 1.1rem;
            color: #495057;
            line-height: 1.8;
        }
        
        /* 内容区域样式 */
        .section {
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 1px solid #e9ecef;
        }
        
        .section:last-child {
            border-bottom: none;
            margin-bottom: 0;
            padding-bottom: 0;
        }
        
        h2 {
            font-size: 1.6rem;
            color: #2c3e50;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
        }
        
        h2 i {
            margin-right: 10px;
            color: #3498db;
        }
        
        .badge {
            display: inline-block;
            background: #e3f2fd;
            border-radius: 20px;
            padding: 4px 12px;
            font-size: 0.85rem;
            margin-left: 12px;
            color: #2980b9;
            font-weight: 600;
        }
        
        ul {
            list-style: none;
            padding-left: 0;
        }
        
        li {
            margin: 15px 0;
            padding-left: 28px;
            position: relative;
        }
        
        li::before {
            content: "•";
            position: absolute;
            left: 0;
            color: #3498db;
            font-size: 1.8rem;
            top: -8px;
        }
        
        .contact-info {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }
        
        .contact-item {
            display: flex;
            align-items: center;
        }
        
        .contact-icon {
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #e3f2fd;
            border-radius: 50%;
            margin-right: 12px;
            color: #3498db;
            font-weight: bold;
        }
        
        /* 技能卡片样式 */
        .skills-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-top: 15px;
        }
        
        .skill-card {
            background: #f8f9fa;
            border-radius: 10px;
            padding: 20px;
            border-left: 4px solid #3498db;
            transition: all 0.3s ease;
        }
        
        .skill-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
        }
        
        .skill-title {
            font-weight: 600;
            color: #2c3e50;
            margin-bottom: 10px;
            display: flex;
            align-items: center;
        }
        
        .skill-title i {
            margin-right: 8px;
            color: #3498db;
        }
        
        /* 响应式设计 */
        @media (max-width: 768px) {
            .container {
                padding: 30px 20px;
            }
            
            h1 {
                font-size: 2rem;
            }
            
            h2 {
                font-size: 1.4rem;
            }
            
            .skills-container {
                grid-template-columns: 1fr;
            }
        }
        
        /* 动画效果 */
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .fade-in {
            animation: fadeIn 0.8s ease forwards;
        }
    </style>
</head>
<body>
    <div class="container">
        <header class="fade-in">
            <h1>Jiayue Yang (杨家越) 🔍</h1>
            <div class="intro">
                <p>I'm <strong>Jiayue Yang</strong>, a second-year Computer Science major at <a href="https://www.ustc.edu.cn/">USTC</a>. Exploring the intersection of programming and AI fundamentals. I'm fortunate to be supervised by Prof. <a href="https://saids.ustc.edu.cn/2024/1105/c36363a686123/page.htm">Yan Xia</a> at <a href="https://spin-ustc.cn/">SPIN-Lab</a>, with research interests in computer vision and spatial intelligence.</p>
            </div>
        </header>

        <div class="section fade-in">
            <div class="contact-info">
                <div class="contact-item">
                    <span class="contact-icon">🏫</span>
                    <strong>School of Computer Science and Technology</strong>
                </div>
                <div class="contact-item">
                    <span class="contact-icon">🎓</span>
                    University of Science and Technology of China
                </div>
                <div class="contact-item">
                    <span class="contact-icon">📌</span>
                    Hefei, Anhui, China
                </div>
            </div>
        </div>

        <div class="section fade-in">
            <h2><i class="fas fa-rocket"></i> Research Interests <span class="badge">updated</span></h2>
            <ul>
                <li>Computer Vision</li>
                <li>Spatial Intelligence</li>
            </ul>
        </div>

        <div class="section fade-in">
            <h2><i class="fas fa-laptop-code"></i> Current Focus</h2>
            <div class="skills-container">
                <div class="skill-card">
                    <div class="skill-title"><i class="fas fa-code"></i> Core Skills</div>
                    <p>Python • C</p>
                </div>
                
                <div class="skill-card">
                    <div class="skill-title"><i class="fas fa-book"></i> Coursework</div>
                    <p>CS61A (Structure & Interpretation)<br>
                    CS221 (AI Fundamentals)</p>
                </div>
                
                <div class="skill-card">
                    <div class="skill-title"><i class="fas fa-tools"></i> Tools</div>
                    <p>Git • Linux</p>
                </div>
            </div>
        </div>

        <div class="section fade-in">
            <h2><i class="fas fa-tasks"></i> In Progress</h2>
            <ul>
                <li>Implementing basic algorithms in Python</li>
                <li>Studying AI theory through course projects</li>
            </ul>
        </div>

        <div class="section fade-in">
            <h2><i class="fas fa-envelope"></i> Contact</h2>
            <div class="contact-info">
                <div class="contact-item">
                    <span class="contact-icon">📧</span>
                    <strong>Academic</strong>: <a href="mailto:jiayueyang@mail.ustc.edu.cn">jiayueyang@mail.ustc.edu.cn</a>
                </div>
                <div class="contact-item">
                    <span class="contact-icon">📧</span>
                    <strong>Gmail</strong>: <a href="mailto:jiangjiayue06@gmail.com">jiangjiayue06@gmail.com</a>
                </div>
                <div class="contact-item">
                    <span class="contact-icon">🐱</span>
                    <strong>GitHub</strong>: <a href="https://github.com/jryyangjy">jryyangjy</a>
                </div>
            </div>
        </div>
    </div>

    <script>
        // 添加简单的动画效果
        document.addEventListener('DOMContentLoaded', function() {
            const elements = document.querySelectorAll('.fade-in');
            elements.forEach((el, index) => {
                setTimeout(() => {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }, 150 * index);
            });
        });
    </script>
</body>
</html>
