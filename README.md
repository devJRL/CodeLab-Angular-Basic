# CodeLab-Angular

Here is code-snippet on **Angular** Study.

## INSTALL

### Prepare Node.js Environment

Install [**NVM** (Node Version Manager)](https://github.com/nvm-sh/nvm#install--update-script): for set-up multiple version of node.js

```bash
# CHECK
nvm -v

# INSTALL (VERSION WOULD BE DIFFRENT)
nvm install 12.16.2

# CHECK
node -v
```

### Install Angular

When running on your environment, you will need to **Angular/CLI**.

```bash
# INSTALL
npm install -g @angular/cli@latest

# BELOW COMMAND IS METHOD FOR NEW ANGULAR PROJECT
ng new {project-name}

# RUN ANGULAR WITH COMPLING
cd {project-name} && ng serve
```

## Commands

### Add Bootstrap in project

Install with npm

```bash
# --save : install locally (not globally)
npm install --save bootstrap@3
```

**Involve module when build** using add below to "angular.json"

```json
{
  // ...
  "project": {
    // ...
    "architect": {
      // ...
      "build": {
        // ...
          "styles": [
            "node_modules/bootstrap/dist/css/bootstrap.min.css",
            "src/styles.css"
          ],
      }
    }
  }
}
```