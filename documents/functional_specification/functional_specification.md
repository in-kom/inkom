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
  - [3. Functional Requirements](#3-functional-requirements)
    - [3.1. Backend](#31-backend)
      - [3.1.1. Overview](#311-overview)
      - [3.1.2. API Linking](#312-api-linking)
      - [3.1.3. API Script Testing](#313-api-script-testing)
      - [3.1.4. Authentication](#314-authentication)
      - [3.1.5. Scheduled Content Upload](#315-scheduled-content-upload)
      - [3.1.6. Billing](#316-billing)
    - [3.2. Frontend](#32-frontend)
      - [3.2.1. Overview](#321-overview)
      - [3.2.2. Target Platforms](#322-target-platforms)
      - [3.2.3. Graphical Charter \& Assets](#323-graphical-charter--assets)
        - [3.2.3.1. Color Palette](#3231-color-palette)
        - [3.2.3.2. Font](#3232-font)
        - [3.2.3.3. Image Assets](#3233-image-assets)
        - [3.2.3.4. Icons Library](#3234-icons-library)
      - [3.2.4 Mockups](#324-mockups)
      - [3.2.5. All pages to add here](#325-all-pages-to-add-here)
      - [3.2.6. User Workflow](#326-user-workflow)
  - [3. Non-functional Requirements](#3-non-functional-requirements)
    - [3.1. Performance](#31-performance)
    - [3.2. Scalability](#32-scalability)
    - [3.3. Reliability](#33-reliability)
    - [3.4. Availability](#34-availability)
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

- *Basic Knowledge of Users:* Users will already have basic knowledge about social media.
- *Solution Trust:* The solution is trusted by the user not to use their data without their consent.
- *Internet Access:* Users will have stable internet access to utilize the app, as social media API interactions require connectivity.
- *Social Media Accounts:* Users already have social media accounts they intend to link to the platform.
- *Content Approval:* Users are responsible for approving all content before publishing.
- *API Stability:* Social media platform APIs will remain relatively stable during the development and initial deployment of the MVP.

**Constraints:**

- *Authentication:* Usage of 2FA will be mandatory as we will gather all platforms all in one.
- *Platform Compatibility:* The application must be compatible with iOS, Android, Windows, Linux, and MacOS. It should also be available on the web.
- *Security:* Robustness will be key to prevent the user from any data leak which could affect their social media accounts.
- *API Rate Limits:* Integration with social media platforms will be subject to their API rate limits, which could affect the frequency of operations like posting or analytics retrieval.
- *Data Privacy Regulations:* Compliance with regulations like GDPR, CCPA, or similar laws must be ensured, particularly for users in affected regions.
- *Latency:* The system should maintain acceptable latency for key user actions, such as retrieving analytics, despite the potential complexity of cross-platform API interactions. AI-generated content should be generated fast enough for a smooth intergration.
- *Cost Constraints:* Cloud infrastructure costs for AI model processing and API interactions should be controlled to maintain a sustainable business model.

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

## 3. Functional Requirements

### 3.1. Backend

#### 3.1.1. Overview

The backend of Inkom is the core component of the application, designed to centralize and streamline complex social media tasks. It handles the following:

- **Interactions with Social Media APIs**  
  - Publishing content across platforms from a single interface.  
  - Retrieving analytics data to help users evaluate their performance.

- **Analytics Data Analysis**  
  - Processing retrieved analytics to present actionable insights.

- **Authentication Systems & OAuth 2.0 Portal**  
  - Ensuring secure user connections to their social media accounts.

- **Billing Services**  
  - Managing subscription payments using Stripe.

- **File Management System**  
  - Supporting content uploads, storage, and processing for posts or videos.

- **Social Media API Testing Scripts**  
  - Ensuring reliability by monitoring platform interactions.

These features are designed to save users time and provide a seamless, secure experience managing their online presence.

---

#### 3.1.2. API Linking

To provide a proof of concept in the Minimum Viable Product (MVP), the application initially supports a limited number of social media platforms:

- **YouTube**: Video publishing and analytics.  
- **TikTok**: Short-form video sharing and performance tracking.  
- **Instagram**: Post scheduling, story analytics, and reel uploads.  
- **LinkedIn**: Professional content sharing and engagement tracking.  
- **Twitter**: Real-time tweet scheduling and analytics.  
- **Facebook**: Page and group post management.

As Inkom evolves, this list will expand, enabling broader compatibility with other platforms.

---

#### 3.1.3. API Script Testing

To ensure uninterrupted service, external monitoring scripts will track all interactions with social media APIs. This process minimizes downtime and ensures reliability. These scripts check:

- **Content Publishing**: Verifies successful posts across platforms.  
- **Analytics Retrieval**: Ensures accuracy and timeliness of performance data.  
- **Comments Retrieval**: Captures feedback for users to engage with their audience.  
- **Content Retrieval for AI Analysis**: Prepares content for future AI-driven insights.  

By continuously testing these critical components, we aim to maintain a high-quality user experience.

---

#### 3.1.4. Authentication

Given Inkom's role as a centralized hub for managing multiple social media accounts, user security is paramount. 

**Mandatory Security Measures**  
- Users must provide a recovery email or phone number for account retrieval.  
- Two-factor authentication (2FA) is required, using an app such as Google Authenticator.  

**Optional Advanced Security Features**  
- Users can enable a **24-word private key** to sign in, with prompts to input parts of it during login.  
- Desktop users can opt for a **physical security key** (e.g., USB token) for additional protection.

These measures are designed to safeguard accounts from unauthorized access and maintain user trust.

---

#### 3.1.5. Scheduled Content Upload

Inkom will leverage cloud storage and server optimization to ensure scalable, reliable content scheduling. Key features include:

- **Load Balancing**: Scripts distribute server load to optimize performance, moving resources between cold (long-term, less accessible) and active (frequently accessed) storage.  
- **Scheduled Publishing**: Users can schedule posts to go live at specific times, ensuring consistent social media activity without manual intervention.

This approach guarantees efficient resource usage and scalability as Inkom grows.

---

#### 3.1.6. Billing

To support seamless subscription management, Inkom will integrate payment processing via Stripe. This will enable:

- **Flexible Payment Plans**: Users can choose from various subscription tiers to fit their needs.  
- **Automatic Invoicing**: Simplified record-keeping for users with automated billing and receipts.  
- **Secure Transactions**: Stripe ensures high levels of payment security, meeting industry standards.

With these systems, users can easily manage their subscriptions and payments.

### 3.2. Frontend

#### 3.2.1. Overview

The frontend of Inkom serves as the user-facing interface, ensuring an intuitive and seamless experience across all supported devices. It is designed to provide the following key functionalities:

- **Unified Dashboard**  
  - A central hub for managing all connected social media accounts, displaying essential metrics, scheduled posts, and recent activity at a glance.

- **Content Creation and Scheduling**  
  - User-friendly tools for drafting, editing, and scheduling posts across multiple platforms with real-time previews for each platform's format.

- **Analytics Visualization**  
  - Interactive charts and graphs to display performance metrics, trends, and engagement statistics in an easily digestible format.

- **Account Management**  
  - Intuitive settings for linking social media accounts, updating user profiles, and managing subscription plans.

- **Cross-Platform Compatibility**  
  - A responsive web application designed for use on desktops, tablets, and smartphones, ensuring consistency regardless of device.

This frontend architecture prioritizes accessibility, usability, and scalability, delivering a seamless experience for users managing their social media presence.

#### 3.2.2. Target Platforms

- **Web Application:** Compatible with modern browsers like Chrome, Firefox, Safari, and Edge.
- **Desktop Applications:** Dedicated apps for MacOS and Windows, with support for physical security keys.
- **Mobile Applications:** Native apps for iOS and Android, built with React Native for optimized performance and consistent functionality.

#### 3.2.3. Graphical Charter & Assets

##### 3.2.3.1. Color Palette

| Color Name                | Hexadecimal Code | Color Preview                                                | Usage                          | Description                          |
| ------------------------- | ---------------- | ------------------------------------------------------------ | ------------------------------ | ------------------------------------ |
| Deep Blue (Primary Color) | #2E6BF5          | ![#2E6BF5](https://via.placeholder.com/15/2E6BF5/2E6BF5.png) | Main elements                  | Buttons, links, and key UI elements. |
| Black (Secondary Color)   | #000000          | ![#000000](https://via.placeholder.com/15/000000/000000.png) | Text and essential highlights  | Used for headings and body text.     |
| Light Gray                | #F9FAFB          | ![#F9FAFB](https://via.placeholder.com/15/F9FAFB/F9FAFB.png) | Background Color (White theme) | Subtle background for contrast.      |

##### 3.2.3.2. Font

The primary font used is ***Inter*** with the following specifications:  

![Fonts specifications](./images/font_specifications.png)

##### 3.2.3.3. Image Assets

The assets directory contains all visual elements used in the application, such as logos, illustrations, and background images. This ensures consistency across the app's design. 

<!-- ⚠️ To add -->

##### 3.2.3.4. Icons Library

The project uses ***Iconoir*** for its modern and lightweight icon set, offering over 1,000 customizable icons that align with the app's graphical charter.

#### 3.2.4 Mockups

The app mockups can be accessed [here](https://www.figma.com/design/DByZwH8OgEuzHOefwmxteJ/InKom?node-id=22-4&t=GPUplvLvprAhO1Ha-1).

#### 3.2.5. All pages to add here

#### 3.2.6. User Workflow

```mermaid
graph TD
    A[Login Page] --> |Email + Password + 2FA codes| C[Home page]
    B[Registration page] --> |Helllo| C
    C --> D[The development team creates a fix]
    D --> E[Does this fix pass the new testing session?]
    E --> |Yes| F[Merge the fix in dev branch]
    E --> |No| G[Notify the dev team the fix is not successful]
    G --> D
```

<!-- ### 3.3. Artificial Intelligence Model

#### 3.3.1. Overview

#### 3.3.2. Dataset

#### 3.3.3. Input

#### 3.3.4. Output -->

## 3. Non-functional Requirements

### 3.1. Performance

| Aspect                      | Requirement                                                              |
| --------------------------- | ------------------------------------------------------------------------ |
| **Response Time**           | API requests (e.g., publishing, analytics retrieval) within 1–2 seconds. |
| **Frontend Responsiveness** | Smooth interface operation under normal and peak load conditions.        |
| **File Uploads**            | Support for large files (up to 1 GB) with minimal delay.                 |
| **Background Tasks**        | Scheduled tasks must execute within allocated time slots.                |

---

### 3.2. Scalability

- **Backend**: Supports horizontal scaling to handle increased traffic by adding servers.  
- **Cloud Storage**: Dynamically adjusts to accommodate larger files and growing media assets.  
- **APIs**: Processes thousands of concurrent requests without performance degradation.  

---

### 3.3. Reliability

| Aspect               | Requirement                                                                    |
| -------------------- | ------------------------------------------------------------------------------ |
| **API Interactions** | Implement error detection and automated retries.                               |
| **Processes**        | Ensure consistent execution of uploads, scheduling, and analytics retrieval.   |
| **Testing**          | Regular automated testing for critical components to prevent bugs or downtime. |

---

### 3.4. Availability

| Aspect                | Requirement                                                                             |
| --------------------- | --------------------------------------------------------------------------------------- |
| **Uptime**            | Guarantee 99.9% uptime.                                                                 |
| **Redundancy**        | Implement failover servers and load balancers for continuity during failures.           |
| **Maintenance**       | Minimize scheduled maintenance periods and provide advance communication.               |
| **Critical Services** | Keep key functions (authentication, content publishing) operational during maintenance. |
