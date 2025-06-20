<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jiayue Yang</title>
    <style>
        /* 核心布局样式 */
        body {
            max-width: 800px;
            margin: 0 auto;
            padding: 100px 20px 40px; /* 顶部空间增加到100px */
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
            line-height: 1.7;
            color: #000;
            background-color: #fff;
        }
        
        h1 { 
            color: #000;
            margin-bottom: 0.5rem;
            margin-top: 0; /* 确保标题顶部无额外间距 */
        }
        
        .intro {
            margin-bottom: 1.5rem;
            line-height: 1.8;
            color: #000;
        }
        
        a { 
            color: #0066cc;
            text-decoration: none;
            transition: all 0.3s ease;
        }
        
        a:hover {
            text-decoration: underline;
            color: #004080;
        }
        
        hr { 
            border: 0; 
            height: 1px; 
            background: #e0e0e0;
            margin: 2.5rem 0; /* 增加分隔线间距 */
        }
        
        ul { 
            padding-left: 1.5rem; 
            margin-top: 0.5rem;
            margin-bottom: 1.5rem; /* 增加列表底部空间 */
        }
        
        li { 
            margin: 1rem 0; /* 增加列表项间距 */
            list-style-type: none;
            position: relative;
            padding-left: 1.5rem;
            color: #000;
        }
        
        li:before {
            content: "•";
            position: absolute;
            left: 0;
            color: #0066cc;
            font-size: 1.2rem;
        }
        
        .contact-info {
            line-height: 1.8;
            color: #000;
            margin-bottom: 0.5rem; /* 增加联系信息底部空间 */
        }
        
        .contact-icon {
            display: inline-block;
            width: 24px;
            text-align: center;
            margin-right: 8px; /* 增加图标右侧间距 */
        }
        
        .section {
            margin-bottom: 2rem; /* 增加区域底部空间 */
        }
        
        .section-title {
            margin-bottom: 1.2rem; /* 增加标题底部空间 */
            color: #000;
        }
        
        .badge {
            display: inline-block;
            background: #f0f7ff;
            border: 1px solid #0066cc;
            border-radius: 4px;
            padding: 2px 8px;
            font-size: 0.85em;
            margin-left: 8px;
            color: #0066cc;
        }
        
        /* 新增顶部空间控制 */
        .top-spacer {
            height: 20px; /* 额外的顶部空间 */
        }
    </style>
</head>
<body>
    <!-- 添加额外的顶部空间 -->
    <div class="top-spacer"></div>
    
    <div class="intro">
        <h1>Jiayue Yang (杨家越) 🔍</h1>
        <p>I'm <strong>Jiayue Yang</strong>, a first-year Cybersecurity undergrad at <a href="https://www.ustc.edu.cn/">USTC</a> (中国科学技术大学). Exploring the intersection of programming and AI fundamentals. I'm also a member of <a href="https://spin-ustc.cn/">SPIN-Lab</a>, supervised by prof. <a href="https://saids.ustc.edu.cn/2024/1105/c36363a686123/page.htm">Yan Xia</a> (夏彦).</p>
    </div>

    <div class="section">
        <div class="contact-info">
            <span class="contact-icon">🏫</span> <strong>School of Cyber Science and Technology</strong><br>
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
            <li>🧠 Multimodal Large Models</li>
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
</body>
</html>
