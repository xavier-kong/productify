# Productify Design Document

This document will be used to plan the vision and development road map for the project. I will be discussing the different layers/components of the project as well as the rationale behind choosing certain technologies for accomplishing the development of said layers.

-   [Overview](#overview)
-   [Context](#context)
-   [Goals and Non-Goals](#goals)
-   [Milestones](#milestones)
-   [Proposed Solutions and Technical Architecture](#solutions)
    -   [Front End](#front-end)
    -   [Back End](#back-end)
    -   [Database and storage (persistance)](#db-and-storage)
    -   [Hosting/Infrastructure](#hosting/infra)
    -   [Testing](#testing)
    -   [CI/CD Pipelines](#pipelines)
    -   [System context diagram](#system-context-diagram)
    -   [Formatting and rules](#formatting)

## <a name="overview"></a>Overview

To be added later

## <a name="context"></a>Context

The productivity management software market is very saturated, there are so many solutions out there that <a href="https://www.keepproductive.com/">someone</a> has built their career out of reviewing productivity management software. Despite the multitude of solutions out there, I have never been able to find an adequate solution for my own system. I believe strongly in the value of timeboxing, however the method is inherently static while our lives are dynamic and it does not make sense to have to manually update my entire calender just because a meeting overuns by 15 minutes.

Modular solutions like Notion offer flexibility to create a system customized for your own workflow and philosophy but I found the time and effort required to maintain the system as well as the lack of the weekly calendar view made it a non viable option. Other solutions based around to-do lists/task management, such as Trello, Todoist, TickTick offer fantastic high quality solutions but I could not justify paying for a solution where I would still have to put in effort to maintain for my workflow.

This is where Productify comes in.

Productify seeks to leverage the power of dynamic timeboxing to provide a modern productivity management solution.

Key features include:

-   Automatic scheduling/rescheduling of tasks based on progress of current tasks and priority
-   Easy capture and planning of future tasks.
-   Unified to-do list and calender view (daily/weekly/monthly/yearly) options

## <a name="goals"></a>Goals and Non-Goals

Goals:

-   Initial time under 5 seconds
-   Each component will be developed with Test Driven Development principles
-   Serverless architechture will be used for the project

Non Goals:

-   Using AI

Future Goals:

-   Google (Calendar, Gmail, etc) API integration

## <a name="milestones"></a>Milestones

Start Date: 3rd December 2021

Milestone 1 - Complete Design Document: 26th December 2021

Milestone 2 -

## <a name="solutions"></a>Proposed Solutions and Technical Architecture

## <a name="front-end"></a>Front End

The core product consists of a central dashboard containing a task list (to-do list) and a calendar next to it. Users will be able to add, update, delete tasks and changes will be reflected in the calendar view. What sets this apart from other productivity apps is the dashboard automatically updating based on how fast or slow users complete tasks. Life/work is never static and always dynamic so why should your productivty manager be any different.

I plan to also be able to open indivdual tasks in a seperate view to add notes or create sub tasks.

-   Javascript Frameworks/Libraries

I will be using the React.js JavaScript library to code the front end as I think it offers the right tools for the job and I am most familiar with it compared to frameworks like Vue, Angular or Svelte. In terms of React frameworks/solutions, the 3 most common are the Create-React-App, Gatsby and Next.js frameworks. To decide which framwork to use, I explored a few key factors.

The app itself does not have the need for SEO as it is designed for personal use i.e. only users should be able to access their own content and no one else. Furthermore, the "gated" nature of the app would greatly reduce the need for any server side rendering. As there are no static content such as blogs and articles, using a static site generator such as Gatsby might not be the best option. Furthermore, there does not seem to be a clear reason to prefer a server side rendering solution rather than using client side rendering, which would also make deployment and hosting easier. Therefore, a React bootstrapping tool like Create-React-App would most likely be used for the project.

-   UI Frameworks

I plan to use a UI framework for the project rather than creating custom components and designs from scratch. My previous projects have been completely lacking in any form of UI design and so I understand there is a clear need for "beautiful" and user friendly front-end design. Using a front-end UI framework would allow me to use prebuilt components, which would speed up development time and provide better design out of the box.

Much like the Javascript ecosystem, the UI framework ecosystem is full of different solutions such as Material UI, Bootstrap, Ant Design, Storybook, Blueprint JS, Semantic UI. For this project, I will most likely use Material UI as I am familiar with it and I think Material Design principles would work well with the needs of the project. Furthermore, Material UI, compared to frameworks like Bootstrap, offer more customizablility and less "bulk".

-   Remote Client-Server Communications API calls

For the project, the most common operations will be reading tasks, adding tasks and editing tasks. As the data could be nested, there could be advantages of using GraphQL. For example, the initial render might need the tasks and all the other fields, using a tradational REST API might cause an underfetching issue which means multiple trips might be needed to fetch all the required data for the initial render. Using GraphQL might be able to more efficiently query the data needed. However, it is also possible to set up logic on the backend to get all the data needed in a single call.

    -   GraphQL and Schema

-   Authentication
-   State Management
    -   Redux

## <a name="back-end"></a>Back End

-   Server vs Serverless
-   Infrastructure

## <a name="db-and-storage"></a>Database and storage (persistance)

-   SQL vs NoSQL
-   Images and files
-   Schema design
-   Caching

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
