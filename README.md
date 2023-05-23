### Prerequisites (Your own machine)
This playground uses the following technology so you will need to check they are installed:

-   Web Browser
-   Code IDE (we use VS Code)
-   Terminal (We use Bash)
-   Node.js

_**Network**_  The following ports will be used for the application and testing:
-   3000 -> React application
-   3001 -> Next.js application


# Getting Started

The playground uses React 18 and Next.js 13. Although no existing knowledge of either will be needed for this playground it would be beneficial to have basic knowledge of Javascript.

# Introduction

In this playground, we'll explore React Server Components using Next.js, a leading framework for server-side web application development.

In the first part of our session, we'll dive into the emerging trend in Front-End Development, focusing on the migration of logic from the client to the server. This strategic shift addresses common challenges such as slow load times and Search Engine Optimization concerns, offering potential solutions.

In the second part, we'll delve into React Server Components and their pivotal role in transforming React into a comprehensive full-stack framework. We'll unlock the possibilities offered by Server-Side Rendering and React Server Components, showcasing how this approach enables developers to tackle the aforementioned challenges in web development.

# Part 1 

In this section, we will explore the inner workings of a traditional React application. Our focus will narrow down to a specific timeframe within the application's lifecycle, specifically the events that unfold between a user entering a URL into the browser and the moment they witness meaningful content on the page.

<img width="668" alt="Screenshot 2023-05-23 at 10 06 27" src="https://github.com/DevOpsPlayground/DPG-Meetups-Next.js/assets/101208108/9db157cc-5d35-4171-8ebe-b741d77ec4d5">

We will conclude that... 

# Part 2 

In this part, we will transform a traditional React application from being client-side rendered to being server-side rendered using Next.js.

##  Setting up the infrastructure:

### Step 1
Go to: https://lab.devopsplayground.org/ 

This should bring up the following page:

<img width="581" alt="Screenshot 2023-05-23 at 11 29 42" src="https://github.com/DevOpsPlayground/DPG-Meetups-Next.js/assets/101208108/431705d0-fabd-4ee9-83d5-a4b8ec9c1257">


### Step 2
Enter YOUR OWN NAME AND SURNAME in the username box like in the following example. Make sure to use capital letters as per the example below:  

<img width="640" alt="Screenshot 2023-05-23 at 11 31 32" src="https://github.com/DevOpsPlayground/DPG-Meetups-Next.js/assets/101208108/dd37b03c-2e64-46f0-917a-fdd00ac923bd">

Once done, click submit.


### Step 3
The submit button should take you to a page that looks like this:

<img width="544" alt="Screenshot 2023-05-23 at 11 33 12" src="https://github.com/DevOpsPlayground/DPG-Meetups-Next.js/assets/101208108/a8e6b536-6926-4ae6-a72a-5c19e7f4d207">

 Essentially, you should have access to a terminal and a IDE (VS Code) links. 
 
 
### Step 4
Copy and paste the terminal link into the address bar of your browser. This should take you to the terminal that looks something like this:

<img width="687" alt="Screenshot 2023-05-23 at 11 35 57" src="https://github.com/DevOpsPlayground/DPG-Meetups-Next.js/assets/101208108/7076d659-525e-4f96-a9c4-839c740bd6f7">


### Step 5
As prompted, enter the following password: 

> Next23


*Please be aware that when entering your password, it will not be visibly displayed on the screen as you type it. If you made a mistake, just refresh the page and try again.*

If you have successfully logged in, your terminal should display the following message:

<img width="675" alt="Screenshot 2023-05-23 at 11 41 04" src="https://github.com/DevOpsPlayground/DPG-Meetups-Next.js/assets/101208108/7fc373ff-4bb2-434d-ba7b-7a1e96a4327c">

### Step 6
Run the following commands in the terminal in the following order:

 1. > cd workdir
  2.  > cd DPG-Meetups-Next.js
   3. > npm i
    4. > npm run dev

If all of your commands executed correctly, your terminal should display the following outputs:

<img width="1113" alt="Screenshot 2023-05-23 at 11 51 57" src="https://github.com/DevOpsPlayground/DPG-Meetups-Next.js/assets/101208108/15dfee9f-7797-4d2a-b0a6-1c4c1f5431f2">


### Step 7
**KEEPT THE TERMINAL PAGE RUNNING** and open a new browser tab. 


### Step 8
Go back to your terminal page and copy the terminal page URL. The URL should be a link ending in "devopsplayground.org:5050/wetty". For example:

<img width="517" alt="Screenshot 2023-05-23 at 11 53 44" src="https://github.com/DevOpsPlayground/DPG-Meetups-Next.js/assets/101208108/46b41768-de12-461b-8e6c-dc2ad5779c92">


### Step 9
In the new tab that you have opened as part of step 7 above, paste the terminal page URL that you have just copied as part of step 8. **DO NOT PRESS ENTER**.


### Step 10
Edit the URL that you have just copied into the new browser tab as part of step 9 by replacing "5050/wetty" with "3001". Your edited URL should look something like this:

<img width="424" alt="Screenshot 2023-05-23 at 11 57 33" src="https://github.com/DevOpsPlayground/DPG-Meetups-Next.js/assets/101208108/7dbea636-4365-4d91-844a-112eb432169d">


### Step 11
Press enter and check your application is running correctly. If it is running correctly, it should look like this:

<img width="1697" alt="Screenshot 2023-05-23 at 11 58 33" src="https://github.com/DevOpsPlayground/DPG-Meetups-Next.js/assets/101208108/f97b0bfa-5204-44bb-9dad-72a29ad3b4ae">

If you are having any issues, please ask for help 😊. 
