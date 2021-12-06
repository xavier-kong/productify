# Planning

This document will be used to plan the vision and development road map for the project. I will be discussing the different layers/components of the project as well as the rationale behind choosing certain technologies for accomplishing the development of said layers.

-   [Front End](#front-end)
-   [Back End](#back-end)
-   [Database and storage](#db-and-storage)
-   [Hosting/Infrastructure](#hosting/infra)
-   [Testing](#testing)
-   [CI/CD Pipelines](#pipelines)
-   [System context diagram](#system-context-diagram)
-   [Formatting and rules](#formatting)

## <a name="front-end"></a>Front End

The core product consists of a central dashboard containing a task list (to-do list) and a calendar next to it. Users will be able to add, update, delete tasks and changes will be reflected in the calendar view. What sets this apart from other productivity apps is the dashboard automatically updating based on how fast or slow users complete tasks. Life/work is never static and always dynamic so why should your productivty manager be any different.

I plan to also be able to open indivdual tasks in a seperate view to add notes or create sub tasks.

-   Library/Framework
    -   CRA vs Gatsby vs Next.js
-   UI Frameworks
    -   Material UI
-   API calls
    -   GraphQL and Schema
-   Authentication
-   State Management

## <a name="back-end"></a>Back End

-   Server vs Serverless

## <a name="db-and-storage"></a>Database and storage

-   SQL vs NoSQL
-   Images and files
-   Schema design

## <a name="hosting/infra"></a>Hosting/Infrastructure

-   AWS
-   Terraform

## <a name="testing"></a>Testing

-   Testing
    -   Unit testing
    -   E2E integration tests
    -   Jest, Cypress, Storybook etc

## <a name="pipelines"></a>CI/CD Pipelines

-   GitHub Actions vs TravisCI vs CircleCI vs Jenkins

## <a name="system-context-diagram"></a>System context diagram

## <a name="formatting"></a>Formatting and rules

-   Linting
-   Prettier
