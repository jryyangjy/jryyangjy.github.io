#!/bin/bash

# Jiayue Yang's Website Deployment Script
# Usage: ./deploy.sh "Your commit message"

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Starting deployment of Jiayue Yang's website...${NC}"

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo -e "${RED}❌ Error: Not a git repository. Please run 'git init' first.${NC}"
    exit 1
fi

# Check if there are any changes to commit
if [ -z "$(git status --porcelain)" ]; then
    echo -e "${YELLOW}⚠️  No changes to commit. Everything is up to date.${NC}"
    exit 0
fi

# Get commit message
COMMIT_MESSAGE="$1"
if [ -z "$COMMIT_MESSAGE" ]; then
    COMMIT_MESSAGE="Update website content"
fi

echo -e "${BLUE}📝 Commit message: ${COMMIT_MESSAGE}${NC}"

# Add all files
echo -e "${BLUE}📦 Adding files to git...${NC}"
git add .

# Commit changes
echo -e "${BLUE}💾 Committing changes...${NC}"
git commit -m "$COMMIT_MESSAGE"

# Push to remote
echo -e "${BLUE}⬆️  Pushing to GitHub...${NC}"
git push origin main 2>/dev/null || git push origin master 2>/dev/null || {
    echo -e "${RED}❌ Error: Failed to push. Please check your remote configuration.${NC}"
    echo -e "${YELLOW}💡 Tip: Make sure you have added a remote origin:${NC}"
    echo -e "${YELLOW}   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git${NC}"
    exit 1
}

echo -e "${GREEN}✅ Deployment successful!${NC}"
echo -e "${GREEN}🌐 Your website should be live at: https://jryyangjy.github.io${NC}"

# Optional: Run Jekyll build if Jekyll is available
if command -v jekyll &> /dev/null; then
    echo -e "${BLUE}🔨 Building with Jekyll...${NC}"
    jekyll build --quiet
    echo -e "${GREEN}✅ Jekyll build completed${NC}"
fi

echo -e "${GREEN}🎉 All done! Your website has been deployed successfully.${NC}"