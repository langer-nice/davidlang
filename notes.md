SCSS compile : npx sass --watch scss:css

# Github : 
https://github.com/langer-nice/davidlang

# Vercel
https://vercel.com/david-lang/
https://vercel.com/david-lang/davidlangdesign

# Domain name
https://ap.www.namecheap.com/

z

# Start prompt 

Before making any changes to this project, I want you to fully analyze the existing website and codebase first.

Your goal is to understand the structure, architecture, dependencies, design system, and potential risks before editing anything.

Please perform the following analysis:

1. Project Structure

* Identify the framework and technologies used
* Explain the folder structure
* Identify entry points and main layout files
* Detect reusable components and shared styles

2. Front-End Architecture

* Analyze how pages are rendered
* Identify routing/navigation structure
* Detect state management if present
* Identify API calls and external services

3. Styling System

* Detect whether the project uses CSS, SCSS, Tailwind, styled-components, Bootstrap, etc.
* Identify global styles and component-level styles
* Detect typography system, spacing system, colors, and responsive breakpoints

4. UX/UI Review

* Analyze visual consistency
* Identify outdated UI patterns
* Detect accessibility issues
* Analyze mobile responsiveness
* Identify possible UX friction points

5. Performance & Technical Risks

* Detect duplicated code
* Identify overly complex components
* Detect unused files/assets/dependencies
* Analyze loading performance and large assets
* Identify technical debt or fragile areas

6. Modification Safety
   Before modifying anything:

* Explain which files are safe to edit
* Warn about files/components that are reused globally
* Identify dependencies between components
* Explain potential side effects of changes

7. Documentation Output
   Create a concise technical summary including:

* Project architecture overview
* Important components/pages
* Styling system overview
* Key UX issues
* Technical risks
* Recommended strategy before starting modifications

Do NOT modify code yet.
Do NOT refactor yet.
Do NOT install packages yet.

First focus only on understanding and documenting the existing project.


<!-- -----------------  -->

1. Work locally

Dans VSCode :

git checkout dev

Faire :

design changes
responsive fixes
JS/CSS updates
2. Save + Commit
git add .
git commit -m "Fix mobile navigation"
3. Push vers branche test
git push origin dev
4. Vercel crée automatiquement un Preview

Vercel génère :

preview URL

Exemple :

davidlangdesign-git-dev.vercel.app
5. Tester

Toujours vérifier :

Desktop
grand écran
medium
small desktop
Mobile
iPhone Safari
Chrome mobile
menu
scroll
overlays
FR / EN
Important

Tester :

navigation
responsive
scroll locking
animations
buttons
typography wrap
6. Si problème

Retour :

git commit
git push

→ nouveau preview automatiquement.

7. Quand tout est validé

Merge vers production :

git checkout main
git merge dev
git push origin main
8. Production Deploy

Vercel :

déploie automatiquement
OU
tu fais “Promote to Production”
9. Vérification finale live

Tester :

davidlangdesign.com

Vérifier :

mobile
desktop
SSL
navigation
performance
Recommended Branch Structure
Production
main
Development
dev
Experimental fixes
feature/mobile-menu-fix
Important Rule
Never test directly on main

Toujours :

dev → preview → validate → main