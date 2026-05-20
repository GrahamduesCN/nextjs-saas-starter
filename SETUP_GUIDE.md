
# 手动配置指南 - nextjs-saas-starter

## 1. 认证 GitHub CLI
```bash
"C:/Program Files/GitHub CLI/gh.exe" auth login
```

## 2. 创建仓库
```bash
cd "C:/Users/21761/WorkBuddy/2026-05-20-12-52-38/github-automation/projects/nextjs-saas-starter"
"C:/Program Files/GitHub CLI/gh.exe" repo create "GrahamduesCN/nextjs-saas-starter" --public --source=. --push
```

## 3. 或手动在 GitHub 创建
1. 访问 https://github.com/new
2. 仓库名: nextjs-saas-starter
3. 设为 Public
4. 不要勾选 "Initialize with README"
5. 创建后运行:
```bash
cd "C:/Users/21761/WorkBuddy/2026-05-20-12-52-38/github-automation/projects/nextjs-saas-starter"
git init
git add .
git commit -m "🎉 Initial commit"
git remote add origin https://github.com/GrahamduesCN/nextjs-saas-starter.git
git push -u origin main
```

## 4. 配置 Sponsors
1. 访问 https://github.com/sponsors/GrahamduesCN
2. 设置赞助档位: $5 / $25 / $100
