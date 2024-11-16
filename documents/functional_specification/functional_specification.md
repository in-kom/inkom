# Inkom - Functional Specification


<details>
<summary>Table of Contents</summary>

- [Inkom - Functional Specification](#inkom---functional-specification)
  - [1. Introduction](#1-introduction)
    - [1.1. Glossary](#11-glossary)
    - [1.2. Project Overview](#12-project-overview)
    - [1.3. Project Definition](#13-project-definition)
      - [1.3.1. Vision](#131-vision)
      - [1.3.2. Objectives](#132-objectives)
      - [1.3.3. Scope](#133-scope)
      - [1.3.4 Target Audience](#134-target-audience)
      - [1.3.5. Deliverables](#135-deliverables)
    - [1.4. Project Plan](#14-project-plan)
      - [1.4.1. Retroplanning](#141-retroplanning)
      - [1.4.2. Milestones](#142-milestones)
      - [1.4.3. Dependencies](#143-dependencies)
      - [1.4.4. Assumptions/Constraints](#144-assumptionsconstraints)
      - [1.4.5. Risks/Mitigation](#145-risksmitigation)
  - [2. Personas and Use Cases](#2-personas-and-use-cases)
    - [2.1. Personas](#21-personas)
      - [2.1.1. Persona 1 - William Anderson](#211-persona-1---william-anderson)
      - [2.1.2. Persona 2 - Emily Roberts](#212-persona-2---emily-roberts)
      - [2.1.3. Persona 3 - Jonathan Mitchell](#213-persona-3---jonathan-mitchell)
      - [2.1.4. Persona 4 - Sarah Thompson](#214-persona-4---sarah-thompson)
    - [2.2. Use Cases](#22-use-cases)
  - [3. Functional requirements](#3-functional-requirements)
    - [3.1. Backend](#31-backend)
      - [3.1.1. Overview](#311-overview)
      - [3.1.2. Supported API Services](#312-supported-api-services)
      - [3.1.3. Authentication requirements](#313-authentication-requirements)
    - [3.2. Frontend](#32-frontend)
      - [3.2.1. Overview](#321-overview)
      - [3.2.2. Target Platforms](#322-target-platforms)
      - [3.2.3. Graphical Charter \& Assets](#323-graphical-charter--assets)
      - [3.2.4 Mockups](#324-mockups)
      - [3.2.5. All pages to add here](#325-all-pages-to-add-here)
      - [3.2.X. User Flow](#32x-user-flow)
    - [3.3. Artificial Intelligence Model](#33-artificial-intelligence-model)
      - [3.3.1. Overview](#331-overview)
      - [3.3.2. Dataset](#332-dataset)
      - [3.3.3. Input](#333-input)
      - [3.3.4. Output](#334-output)
  - [4. Non-functional Requirements](#4-non-functional-requirements)
    - [4.1. Performance](#41-performance)
    - [4.2. Scalability](#42-scalability)
    - [4.3. Reliability](#43-reliability)
    - [4.4. Availability](#44-availability)
</details>

## 1. Introduction

### 1.1. Glossary

| Term | Definition |
| ---- | ---------- |
| SaaS |            |

### 1.2. Project Overview

This project aims to create a SaaS-format cross-platform application to help professionals to create a more impactful communication thanks to Artificial Intelligence (AI) and social media platforms centralization.

This project is the end-of-cursus project of [Antoine PREVOST](https://linkedin.com/in/antoine-prevost-dev), but also aims to create a company to sell this SaaS.

### 1.3. Project Definition

#### 1.3.1. Vision

Inkom empowers entrepreneurs to focus on their core business by streamlining and automating communication workflows. It creates opportunities for those lacking expertise or resources to communicate effectively, offering a comprehensive suite of tools to help them communicate with confidence.

Inkom transforms the communication value chain by supporting entrepreneurs at every stage of their communication processes, including the following:

- Defining a Communication Strategy
- Linking Social Network Platforms
- Generating Content Ideas
- Publishing Content Centrally
- Analyzing Content Centrally
- Tailoring Strategies Based on Analytics
- Encouraging Interactions

The vision of Inkom is to bring actionnable and concrete facts users can leverage to make their communication more impactful whie spending less time on creating content.

#### 1.3.2. Objectives

- **API Linking:** A unified endpoint streamlines interaction with all social media features, ensuring seamless integration and simplicity.
- **Turnkey Intuitive Application:** Designed for efficiency, the application prioritizes essential functions, eliminating unnecessary complexity.
- **Cross-Platform Usage and Support:** Offered as a SaaS solution, the platform includes both a web application and a mobile app, delivering core functionalities across devices.


#### 1.3.3. Scope

The scope of the Inkom project is to develop a centralized communication platform as a SaaS solution that empowers entrepreneurs by streamlining and automating communication workflows. The platform will enable users to manage their social media presence efficiently, regardless of their level of expertise, through an intuitive interface and advanced tools.

#### 1.3.4 Target Audience

- **Entrepreneurs:** Empower individuals to focus on their core business by automating communication tasks, providing an intuitive platform to create, publish, and analyze content effortlessly, even without prior expertise.

- **Small-to-Medium Businesses:** Enhance team efficiency and scalability with centralized social media management, enabling streamlined workflows, consistent branding, and data-driven strategies tailored to business growth.

- **Consultants:** Offer a professional-grade tool to optimize client services by simplifying social media integrations, generating tailored content ideas, and delivering insightful analytics to demonstrate measurable results.
- 
#### 1.3.5. Deliverables

- Functional Specification Document
- Technical Specification Document
- Test Plan & Test Cases
- Test Bed for the app
- Mock-ups of the application
- Source Code and AI model for content strategies
- Source Code for the website and mobile application
- User Manual
- Final presentation of the project

### 1.4. Project Plan

#### 1.4.1. Retroplanning

#### 1.4.2. Milestones

#### 1.4.3. Dependencies

**Task dependencies:**

- Core Feature Development cannot start before the completion of the mock-ups.
- Nice-to-have Features Development cannot start until Core Feature Development have not been completed.
- Testing phase cannot start until Core Feature Development have not been completed.

#### 1.4.4. Assumptions/Constraints

**Assumptions:**

- 

#### 1.4.5. Risks/Mitigation

| ID  | Description                                                                  | Consequence                                            | Impact | Likelihood | Mitigation/Avoidance                                                 |
| --- | ---------------------------------------------------------------------------- | ------------------------------------------------------ | ------ | ---------- | -------------------------------------------------------------------- |
| 1   | A similar solution is released                                               | Check for any possible infringed patent                | High   | Medium     | Monitor technology development in communication field                |
| 2   | Used social media platforms evolved                                          | Add a support for newly popular social media platforms | Medium | Medium     | Monitor trending social media platforms usage (mainly for consumers) |
| 3   | New features are released on existing social media platforms                 | Add a support for the newly added features             | Medium | High       | Monitor new features added to social media platforms                 |
| 4   | End of support / breaking changes of APIs for certain social media platforms | Switch to the newest API version or find alternatives  | High   | Low        | Monitor and anticipate API version switching                         |

## 2. Personas and Use Cases

### 2.1. Personas

#### 2.1.1. Persona 1 - William Anderson

Age: 53
Location: Paris, Île-de-France
Profession: Restaurateur

**Goals:**

- Make his posts more engaging to convince people following him on the social networks to come to his restaurant.
- Keep his followers updated of the latest courses he prepares.

**Frustrations:**

- He has a limited knowledge about social networks management.
- He wants to get engaging post propositions linked to his business.

#### 2.1.2. Persona 2 - Emily Roberts

Age: 32
Location: Compiègne, Hauts-de-France
Profession: Shoe store owner

**Goals:**

- Keep her followers updated about her stores new products and discounts.
- Make people discover her store on multiple platforms.

**Frustrations:**

- She only knows how to efficiently target her users on a single platform, and is consequently posting on this sole one.
- She has a lot of struggles finding innovative ideas for her business.

#### 2.1.3. Persona 3 - Jonathan Mitchell

Age: 32
Location: Berlin, Germany
Profession: Freelance in design

**Goals:**

- Create posts reaching a wider audience to promote his services.
- Plan in advance his content publication on multiple social media platforms.

**Frustrations:**

- He needs to post his content on each platform individually, making him lose a lot of time.
- He feels only a few people can identify to his publications.
- He doesn't understand anything about the analytics provided in the platforms and has difficulty having an overview of them.

#### 2.1.4. Persona 4 - Sarah Thompson

Age: 23
Location: San Francisco, California
Profession: Software Engineer & Collective Director

**Goals:**

- Initiate people about software development and break the existing clichés.
- Inspire people to start their software development journey.

**Frustrations:**

- She has struggles to find ideas to post on a daily basis.
- She wants a defined strategy she can easily refine depending on the performance of her posts and current trends.

### 2.2. Use Cases

## 3. Functional requirements

### 3.1. Backend

#### 3.1.1. Overview

The backend of Inkom application is designed to handle social media API requests. It also aims to handle all the user interactions with the app, such as login, file uploading for a scheduled posts and AI model requests.

This part of the application will be the core of all the interactions between each of the project's components.

#### 3.1.2. Supported API Services

As an initial version (MVP), the application is only going to support a limited number of API Services to provide a glance of the capabilities of the app in the future. The list of supported social media platforms is the following:

- YouTube
- TikTok
- Instagram
- LinkedIn
- Twitter
- Facebook

#### 3.1.3. Authentication requirements

Being connected to users' social medias means we need to match high standard security. Consequently, as of the creation of the MVP, we will require every user to have at least A2F activated to connect their social media.

### 3.2. Frontend

#### 3.2.1. Overview

The frontend is the project component which will be visible to all users, and needs therefore to have a seamless integration with him.

#### 3.2.2. Target Platforms

This application in a SaaS format will be used on multiple platforms to allow users to use it whenever and wherever they want:

- Mobile Application (IOS & Android)
- Desktop Application (Windows and Mac)
- Website

The integration of Linux and wider platforms will be done in future updates.

#### 3.2.3. Graphical Charter & Assets

#### 3.2.4 Mockups

#### 3.2.5. All pages to add here

#### 3.2.X. User Flow

### 3.3. Artificial Intelligence Model

#### 3.3.1. Overview

#### 3.3.2. Dataset

#### 3.3.3. Input

#### 3.3.4. Output

## 4. Non-functional Requirements

### 4.1. Performance

### 4.2. Scalability

### 4.3. Reliability

### 4.4. Availability