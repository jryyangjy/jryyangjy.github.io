

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jiayue Yang - Computer Science Student</title>
    <style>
        /* 核心布局样式 */
        body {
            max-width: 800px;
            margin: 0 auto;
            padding: 100px 20px 40px;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
            line-height: 1.7;
            color: #000;
            background-color: #fff;
            background-image: linear-gradient(135deg, #f5f7fa 0%, #e4e7f1 100%);
        }
        
        .container {
            background: white;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
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
        
        h1 { 
            color: #2c3e50;
            margin-bottom: 0.5rem;
            margin-top: 0;
            font-size: 2.5rem;
            position: relative;
            display: inline-block;
        }
        
        h1::after {
            content: "";
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 60px;
            height: 4px;
            background: #3498db;
            border-radius: 2px;
        }
        
        .intro {
            margin-bottom: 1.5rem;
            line-height: 1.8;
            color: #34495e;
            font-size: 1.1rem;
        }
        
        a { 
            color: #2980b9;
            text-decoration: none;
            transition: all 0.3s ease;
            font-weight: 500;
        }
        
        a:hover {
            text-decoration: underline;
            color: #1a5276;
        }
        
        hr { 
            border: 0; 
            height: 1px; 
            background: linear-gradient(90deg, transparent, #e0e0e0, transparent);
            margin: 2.5rem 0;
        }
        
        ul { 
            padding-left: 1.5rem; 
            margin-top: 0.5rem;
            margin-bottom: 1.5rem;
        }
        
        li { 
            margin: 1rem 0;
            list-style-type: none;
            position: relative;
            padding-left: 1.5rem;
            color: #2c3e50;
        }
        
        li:before {
            content: "•";
            position: absolute;
            left: 0;
            color: #3498db;
            font-size: 1.2rem;
        }
        
        .contact-info {
            line-height: 1.8;
            color: #34495e;
            margin-bottom: 0.5rem;
        }
        
        .contact-icon {
            display: inline-block;
            width: 24px;
            text-align: center;
            margin-right: 8px;
            color: #3498db;
        }
        
        .section {
            margin-bottom: 2.5rem;
            position: relative;
        }
        
        .section-title {
            margin-bottom: 1.2rem;
            color: #2c3e50;
            font-size: 1.5rem;
            display: flex;
            align-items: center;
        }
        
        .badge {
            display: inline-block;
            background: #e3f2fd;
            border-radius: 20px;
            padding: 4px 12px;
            font-size: 0.8em;
            margin-left: 12px;
            color: #2980b9;
            font-weight: 600;
        }
        
        .top-spacer {
            height: 20px;
        }
        
        .skills-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-top: 1rem;
        }
        
        .skill-box {
            background: #f8f9fa;
            border-radius: 8px;
            padding: 15px;
            border-left: 3px solid #3498db;
            transition: transform 0.3s ease;
        }
        
        .skill-box:hover {
            transform: translateY(-5px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        }
        
        .skill-title {
            font-weight: 600;
            color: #2c3e50;
            margin-bottom: 8px;
            display: flex;
            align-items: center;
        }
        
        .skill-title i {
            margin-right: 8px;
            color: #3498db;
        }
        
        .header-container {
            display: flex;
            align-items: center;
            margin-bottom: 20px;
        }
        
        .profile-img {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            object-fit: cover;
            margin-right: 30px;
            border: 4px solid white;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        .header-text {
            flex: 1;
        }
        
        .university-logo {
            width: 40px;
            vertical-align: middle;
            margin-right: 10px;
        }
        
        @media (max-width: 768px) {
            .header-container {
                flex-direction: column;
                text-align: center;
            }
            
            .profile-img {
                margin-right: 0;
                margin-bottom: 20px;
            }
            
            .skills-container {
                grid-template-columns: 1fr;
            }
            
            .container {
                padding: 30px 20px;
            }
        }
    </style>
</head>
<body>
    <!-- 添加额外的顶部空间 -->
    <div class="top-spacer"></div>
    
    <div class="container">
        <div class="header-container">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" alt="Profile" class="profile-img">
            <div class="header-text">
                <h1>Jiayue Yang (杨家越) 🔍</h1>
                <div class="intro">
                    <p>I'm <strong>Jiayue Yang</strong>, a second-year Computer Science major at <a href="https://www.ustc.edu.cn/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/University_of_Science_and_Technology_of_China_logo.svg/240px-University_of_Science_and_Technology_of_China_logo.svg.png" alt="USTC Logo" class="university-logo">USTC</a>. Exploring the intersection of programming and AI fundamentals. I'm fortunate to be supervised by Prof. <a href="https://saids.ustc.edu.cn/2024/1105/c36363a686123/page.htm">Yan Xia</a> (夏彦) at <a href="https://spin-ustc.cn/">SPIN-Lab</a>, with research interests in computer vision and spatial intelligence.</p>
                </div>
            </div>
        </div>

        <div class="section">
            <div class="contact-info">
                <span class="contact-icon">🏫</span> <strong>School of Computer Science and Technology</strong><br>
                <span class="contact-icon">🎓</span> University of Science and Technology of China<br>
                <span class="contact-icon">📌</span> Hefei, Anhui, China
            </div>
        </div>

        <hr>

        <div class="section">
            <h2 class="section-title">🚀 Research Interests <span class="badge">updated</span></h2>
            <ul>
                <li>👁️ Computer Vision</li>
                <li>🌐 Spatial Intelligence</li>
            </ul>
        </div>

        <hr>

        <div class="section">
            <h2 class="section-title">💻 Current Focus</h2>
            <div class="skills-container">
                <div class="skill-box">
                    <div class="skill-title"><i class="contact-icon">🖥️</i> Core Skills</div>
                    <div class="contact-info">
                        Python • C
                    </div>
                </div>
                
                <div class="skill-box">
                    <div class="skill-title"><i class="contact-icon">📖</i> Coursework</div>
                    <div class="contact-info">
                        CS61A (Structure & Interpretation)<br>
                        CS221 (AI Fundamentals)
                    </div>
                </div>
                
                <div class="skill-box">
                    <div class="skill-title"><i class="contact-icon">🔧</i> Tools</div>
                    <div class="contact-info">
                        Git • Linux
                    </div>
                </div>
            </div>
        </div>

        <hr>

        <div class="section">
            <h2 class="section-title">🚧 In Progress</h2>
            <ul>
                <li>Implementing basic algorithms in Python</li>
                <li>Studying AI theory through course projects</li>
            </ul>
        </div>

        <hr>

        <div class="section">
            <h2 class="section-title">📬 Contact</h2>
            <div class="contact-info">
                <span class="contact-icon">📧</span> <strong>Academic</strong>: 
                <a href="mailto:jiayueyang@mail.ustc.edu.cn">jiayueyang@mail.ustc.edu.cn</a><br>
                
                <span class="contact-icon">📧</span> <strong>Gmail</strong>: 
                <a href="mailto:jiangjiayue06@gmail.com">jiangjiayue06@gmail.com</a><br>
                
                <span class="contact-icon">🐱</span> <strong>GitHub</strong>: 
                <a href="https://github.com/jryyangjy">jryyangjy</a>
            </div>
        </div>
    </div>
    
    <script>
        // 添加简单的动画效果
        document.addEventListener('DOMContentLoaded', function() {
            const sections = document.querySelectorAll('.section');
            
            sections.forEach((section, index) => {
                setTimeout(() => {
                    section.style.opacity = '0';
                    section.style.transform = 'translateY(20px)';
                    section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                    
                    setTimeout(() => {
                        section.style.opacity = '1';
                        section.style.transform = 'translateY(0)';
                    }, 100);
                }, index * 100);
            });
        });
    </script>
</body>
</html>
