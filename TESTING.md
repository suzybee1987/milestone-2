README file [here](README.md)


# Testing

## Contents 


- [**Functionality Testing**](#functionality-testing)
  - [**On all pages**](#on-all-pages)
  - [**index.html**](#home-page)
  - [**game.html**](#game-page)
  - [**contact.html**](#contact-page)
- [**User Story Testing**](#user-story-testing)
- [**Performance Testing**](#performance-testing)
- [**Responsive**](#responsive)
- [**W3C Validator**](#w3c-validator)
- [**JSHint**](#jshint)
- [**Bugs**](#bugs)



### **Functionality Testing**

Browsers tested: Google Chrome, Mozilla Firefox, Microsoft EDGE and Safari.

The devices used in this testing include Acer Swift 3, iPad Mini 2, Huawei P30 lite v.Android 10, Samsung S8 v.Android 10, Samsung S10 v.Android 10 iPhone X, iPhone 7.

#### **On all pages**

**Navigation Bar**
  - **Home button**
    1. - Expected: clicking on 'home' button takes user to index.html
       - Testing: tested by clicking 'home' 
       - Result: link takes user to index.html

    2. - Expected: when hovering over 'home' button the icon spins
       - Testing: tested by hovering over item
       - Result: icon spins when hovered over

  - **Play button**
    1. - Expected: clicking on button takes user to game.html
       - Testing: tested by clicking 'play' button
       - Result: link takes user to game.html

    2. - Expected: hovering over link increases font size and underlines
       - Testing: tested by hovering over 'play' button
       - Result: hovering over causes font size to increase and link is underlined

  - **Help button**
    1. - Expected: clicking on button takes user to help modal
       - Testing: tested by clicking 'help' button
       - Result: link takes user to help modal

    2. - Expected: hovering over link increases font size and underlines
       - Testing: tested by hovering over 'help' button
       - Result: hovering over causes font size to increase and link is underlined

  - **Contact button**
    1. - Expected: clicking on button takes user to contact.html
       - Testing: tested by clicking 'contact' button
       - Result: link takes user to contact.html

    2. - Expected: hovering over link increases font size and underlines
       - Testing: tested by hovering over 'contact' button
       - Result: hovering over causes font size to increase and link is underlined


  - **Collapse on small devices**
    - Expected: navbar menu items on right side to collapse on devices 576px and below
    - Testing: tested by reducing window size
    - Result: this acted normally by collapsing menu items into hamburger menu

**Footer**
  - **GitHub link**
    1. - Expected: clicking on GitHub icon takes user to GitHub repo in new tab
       - Testing: tested by clicking GitHub icon
       - Result: link takes user to [GitHub Repo](https://github.com/suzybee1987)

    2. - Expected: hovering over link increases icon size and border shadow appears
       - Testing: tested by hovering over GitHub icon button
       - Result: hovering over ion increases icon size and link is in box shadow

  - **Instagram link**
    1. - Expected: clicking on Instagram icon takes user to Instagram in new tab
       - Testing: tested by clicking Instagram icon
       - Result: link takes user to [Instagram](https://www.instagram.com/)

    2. - Expected: hovering over link increases icon size and border shadow appears
       - Testing: tested by hovering over Instagram icon button
       - Result: hovering over ion increases icon size and link is in box shadow


#### **Home page**

**Modal**
 1. - Expected: is expected to launch when index.html loads
    - Testing: tested by clicking link to open site 
    - Result: the modal acted normally and showed on page load

 2. - Expected: if clicking away from modal should close modal
    - Testing: tested by clicking the background outside of modal
    - Result: modal closes and index.html is displayed

 . **Modal Buttons** 
  - **Play**
    - Expected: clicking play button expect to be directed to game.html
    - Testing: tested by clicking the button to go to game.html
    - Result: link takes the user to game.html
  - **Help**
    - Expected: clicking help button expect to see new modal with helpful information
    - Testing: tested by clicking help button
    - Result: link takes the user to Help Modal
  - **Help Modal Button**
    - Expected: should take user to game.html
    - Testing: click play button 
    - Result: link takes the user to game.html
  

#### **Game page**

**Questions and Answers**
  1. - Expected: questions and answers loaded on window load
     - Testing: Loading window by clicking game.html link
     - Result: questions and answers loaded when link clicked
  
  2. - Expected: when answer clicked next question shows
     - Testing: click answer to question
     - Result: next question displayed as expected

**Volume button**
  - Expected: clicking button changes state of audio (off to on, on to off)
  - Testing: tested by clicking button and then clicking an answer to prompt audio
  - Result: clicking button successfully changes state of the audio 

**Answer value linked to character**
  - Expected: value of answer clicked show on Dev Tools - Elements when clicked
  - Testing: click answers and checked Dev Tools
  - Result: values of answers shows in Dev Tools correctly. 

**Responsiveness**
  - **Answers**
    - Expect: when window size reduced to small size quiz answers to stack
    - Testing: reduce window size
    - Result: works normally by stacking the answers at small screen size


#### **Contact page**
**Submit**
  1. - Expected: form should not submit without all fields completed
     - Testing: tested by trying to submit with empty fields individually
     - Result: form only sent when all fields filled. 
  
  2. - Expected: alert to user that form has been completed
     - Testing: tested by sending feedback
     - Result: alert shows 'Thanks for your feedback!'

**Reset**
  - Expected: should empty all fields of information
  - Testing: filled all fields and then clicked reset
  - Result: all fields emptied as expected

**Submit and Reset Hover**
  - Expected: should change color on hover
  - Testing: hover over form buttons
  - Fix: I added hover properties in CSS  

**Form validation**
  - Expected: email address field should only allow email addresses
  - Testing: typed with spaces and no @ symbol
  - Result: field validation feedback 'Please include an @ in the email address'

**emailJS** 
  - Expected: when user sends feedback it is received to email address
  - Testing: sent feedback form on contact.html
  - Result: feedback form received to [email](assets/readme_imgs/testing/testing_emailjs.PNG)

**Form reset after feedback sent**
  - Expected: form resets after form submitted
  - Testing: send form to test it resets
  - Fix: I used jQuery on submit event to correct this


### **User Story Testing**

Testing was completed to make sure the user goals were completed

- As a user visiting the site for the first time:
  - [x]I want to be able to see social media links so that I can keep up to date through Facebook, Instagram and Twitter.
    -Social media links open in new tabs
  - [x]I want to click the navigation links to be taken to the correct section and also back to home for a better user experience.
    -Navigation links work correctly to direct to the right part of the site.
  - [x]I want the page to be in a predictable layout so that I can navigate it easily.  
    -The layout is colour coordinated to make it easy to see where each section starts and ends.
  - [x]I want to see a map of the location so that I can determine how close it is to my location and navigate there easily.  
    -Google Map with the local area featured in Find Me section. 
  - [x]I want to easily understand the main purpose of the site and learn more about the business.
  - [x]I want to see testimonials to understand what previous users think of them and see if they are trusted.

- As a user returning to the site:
  - [x]I want to be able to access the site easily on my chosen device
    -Site is responsive on all devices tested and Google Dev Tools
  - [x]I want to easily be able to navigate to different parts of the site
    -Fixed navigation at top of page and scroll spy allows for easy navigation
  - [x]I want to be able to contact the business owner as I wish through social media or contact form
    -Contact form available and social media links to keep in touch with business owner.

- As a user who has never had a Shiatsu Shin Tai Massage before:
   - [x]I want to use the site to learn more about Shiatsu Shin Tai and how to contact the business owner so that I can ask questions.
    -Information provided about Shiatsu and Shin Tai to help the user learn more and contact form included.
   - [x]I want to see a demonstration of what to expect when receiving a Shiatsu Shin Tai massage.
    -YouTube video included and description of what to expect for users who can't view the video.
   - [x]I want some information about the price and time required per session
    -Pricing information available on request due to individual needs. Time of session provided in pricing section
   - [x]I want some information about the business owner's qualifications.
    -About Me section communicates to the user the qualification held through Shiatsu Society and link to their website where the business owner can be verified. 

### **Performance Testing**
- Testing completed at [WebPageTest](https://www.webpagetest.org/), location London, browser Chrome. The site suggested to improve security and cache which is outside the scope of this course so far. 
  -[index.html](https://www.webpagetest.org/result/210502_AiDc9H_54970e9720a3e3a7effb48b06e5a3eeb/)
    -[Security Score](assets/images/readme-images/webpagetest-index)
  -[contact.html](https://www.webpagetest.org/result/210502_AiDcYW_b5066f465ced9a2a821f8e4138e48c1b/)
    -[Security Score](assets/images/readme-images/webpagetest-contact)
  
- [Lighthouse Report Result](assets/images/readme-imgs/lighthouse-report.PNG)
  -Main issues to bring down the performance score were things outwith my control - eg. Bootstrap links (error unused CSS) and caching issues (requesting http cache-control)


### **Responsive**
The site is responsive on all browsers and mobile through bootstrap framework and media queries and was tested using [Chrome Dev Tools](https://developer.chrome.com/docs/devtools/). 
The live site address was given to family and friends as well as the business owner to confirm the links work as expected and is responsive on all devices. 


### **W3C Validator**

**W3C tests completed for html and css pages**

![index.html](assets/images/readme-imgs/html-validator.PNG)
See [bugs](#bugs), below

![contact.html](assets/images/readme-imgs/html-validator-contact.PNG))

![css](assets/images/readme-imgs/css-validator.PNG)

[Back to contents](#contents)


## **Bugs**

- iframe bug
  - During testing the [W3C Validator](#w3c-validator) flagged the usage of <p> within the iframe which would be displayed if the youtube video would not load. This was learned on the course and there doesn't seem to be an alternative from my research. 

- navbar toggler
  - During coding process navbar toggle menu background was transparent and required a fix by setting background color to the links.

- Overlapping content
  - During coding process some elements were overlapping but fixed by assigning max-width 100vh to the background images.

- Gutter issue
  - During coding there was a horizontal scroll bar discovered and through some troubleshooting I discovered an extra div row class so fixed soon after discovery. 


[Back to contents](#contents)

