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

  - **Social Media link**
    1. - Expected: clicking on Instagram icon takes user to Instagram in new tab and clicking on Facebook icon takes user to Facebook site in new tab 
       - Testing: tested by clicking Instagram and Facebook icon
       - Result: link takes user to the individual social media link

    2. - Expected: hovering over link increases icon size and border shadow appears
       - Testing: tested by hovering over Instagram icon button
       - Result: hovering over icon increases icon size and link is in box shadow

[Back to contents](#contents)

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
  
[Back to contents](#contents)

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

[Back to contents](#contents)
#### **Contact page**
**Submit**
  1. - Expected: form should not submit without all fields completed
     - Testing: tested by trying to submit with empty fields individually
     - Result: The code ran as expected and does not submit with empty fields
  
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
  - Testing: typed with no @ symbol
  - Result: field validation feedback 'Please include an @ in the email address'

**emailJS** 
  - Expected: when user sends feedback it is received to email address
  - Testing: sent feedback form on contact.html
  - Result: feedback form received to [email](assets/readme_docs/testing/testing_emailjs.PNG)

**Form reset after feedback sent**
  - Expected: form resets after form submitted
  - Testing: send form to test it resets
  - Fix: I used jQuery on submit event to correct this

[Back to contents](#contents)

### **User Story Testing**

Testing was completed to make sure the user goals were completed
- As a Terry Pratchett fan 
    - Expectation 1: I want to play the game to find out which character I am most like and to see a picture of them with a brief description
    - Testing: I played the game to get to descriptions
    - Result: see [screenshot](assets/readme_docs/testing/userStory1.PNG)

    - Expectation 2: I want to be able to share on social media to share with friends and other Discworld lovers
    - Testing: check footer to see links to social media included to open in new tab easily
    - Result: see [screenshot](assets/readme_docs/testing/userStory2.PNG)

    - Expectation 3: I want to see a link to the Discworld site
    - Testing: check footer for link to Discworld site in new tab
    - Fix: no link added so I included a new <li> element for [Discworld Emporium](assets/readme_docs/testing/userStory3.PNG)

    - Expectation 4: I want the site to have images from the books showing the different characters on the main screen
    - Testing: open index.html to see picture of Discworld behind modal
    - Restult: see [screenshot 1](assets/readme_docs/testing/userStory4.PNG) and [2](assets/readme_docs/testing/userStory4b.PNG)

    - Expectation 5: I want to see quotes from my favourite books in the series as part of the questions
    - Testing: play the game to see quotes from the books
    - Result: see [1](assets/readme_docs/testing/userStory5.PNG), [2](assets/readme_docs/testing/userStory5b.PNG), [3](assets/readme_docs/testing/userStory5c.PNG), [4](assets/readme_docs/testing/userStory5d.PNG)

    - Expectation 6: I want the quiz to follow the Discworld theme of colours
    - Testing: Open Discworld Emporium site to compare colour scheme
    - Result: see [1](assets/readme_docs/testing/userStory6.PNG) to see screenshot from website

- As a user returning to the site:
    - Expectation 7: I want to be able to do the quiz multiple times to get different answers and see the descriptions of different characters and which books they appear in
    - Testing: Play the game and try again to get different character 
    - Result: [Try again](assets/readme_docs/testing/userStory7.PNG) button available to obtain [different character](assets/readme_docs/testing/userStory7b.PNG)

- As a user who does not know the Terry Pratchett Discworld series
    - Expectation 8: I want an explanation of each character when I complete the quiz
    - Testing: complete quiz to see each character description
    - Fix: Upon testing I noticed Lord Vetinari answer wasn't available and discovered an issue with the answer Map in script.js so amended this to include him. 
    Result now: All characters available [Gaspode](assets/readme_docs/testing/gaspode.PNG), [Vimes](assets/readme_docs/testing/vimes.PNG), [Death](assets/readme_docs/testing/death.PNG), [Nanny](assets/readme_docs/testing/nanny.PNG), [Rob](assets/readme_docs/testing/rob.PNG), [Vetinari](assets/readme_docs/testing/vetinari.PNG)

    - Expectation 9: I want to see a picture representing the character to give me an idea of their personality
    - Testing: check all answers for image of character
    - Result: all characters available, see screenshots for Expectation 8.

    - Expectation 10: I want to see a help section to get information on how to play the game
    - Testing: Trigger help modal from each page
    - Result: help modal [triggers](assets/readme_docs/testing/help.PNG) as expected on each page

- All users
    - Expectation 11: I want the site to be easy to navigate on mobile primarily so I can complete it on the go and this also makes it easier to share with others
    - Testing: test all pages on different mobiles
    - Fix: Some padding-top added to ensure good spacing on all [devices](assets/readme_docs/testing/userStory11.PNG), [2](assets/readme_docs/testing/userStory11b.PNG), [3](assets/readme_docs/testing/userStory11c.PNG)

    - Expectation 12: I want the ability to turn on and off noises 
    - Testing: test volume button to make sure there is ability to turn off noises
    - Result: volume can be muted on the game as [expected](assets/readme_docs/testing/userStory12.PNG)

    - Expectation 13: I want the quiz to be slick and the questions and answers to appear in turn rather than a long list
    - Testing: click through game to ensure pagination works
    - Result: pagination works, no long list of questions as [expected](assets/readme_docs/testing/userStory13.PNG)

    - Expectation 14: I want to be able to contact the site owner with feedback
    - Testing: Navigate to contact page to feedback to site owner
    - Result: Contact page has feedback [form](assets/readme_docs/testing/userstory14.PNG)

[Back to contents](#contents)

### **Performance Testing**
 
- [Lighthouse Report Result](assets/images/readme-imgs/lighthouse-report.PNG)
  -Main issues to bring down the performance score were things outwith my control - eg. Bootstrap links (error unused CSS) and caching issues (requesting http cache-control)

[Back to contents](#contents)

### **Responsive**
The site is responsive on all browsers and mobile through bootstrap framework and media queries and was tested using [Chrome Dev Tools](https://developer.chrome.com/docs/devtools/). 
The live site address was given to family and friends to confirm the links work as expected and is responsive on all devices. 

[Back to contents](#contents)

### **W3C Validator**

**W3C tests completed for html and css pages**
- W3C testing completed for:
  - [index.html](assets/readme_docs/testing/w3ctesting/testingw3c.PNG)
  - [game.html](assets/readme_docs/testing/w3ctesting/testinggamehtml.PNG)
  and
  - [contact.html](assets/readme_docs/testing/w3ctesting/testcontacthtml.PNG)

- [JSHint](assets/readme_docs/testing/jshintReport.txt) which was configured to ES6 showed one warning to wrap the body of a 'for in' in an if statement. 

- [style.css](assets/readme_docs/testing/w3ctesting/csstesting.png) testing completed with issues regarding the webkit vendor extensions which are to be expected and it also warns about using the same background colour and borders for buttons. There is enough of a contract between the text and background for this not to be an issue. I attempted to save this as a PDF but GitPod wouldn't accept it so saved as PNG and assessor should zoom in to see all the information, thanks. 

[Back to contents](#contents)


## **Bugs**

- **game.html** 
  - when first creating the game there were issues with the questions overlapping the footer on certain devices and since the footer is transparent it wasn't a traditional fix of adding it to the end of the content. This meant the size of some of the buttons was reduced and the hero image viewport height just a bit higher than full screen in case the user had to scroll. 
  - padding-top amended for the best mobile experience and media queries added
  - issue within script.js where Vetinari score was omitted so this was added in later.
  - some minor styling with font sizes and margin amended. 

- **index.html**
  - Modal launch on page load stopped working after running Lighthouse test because it detected unused code (jQuery CDN link) which was removed and then resolved on next commit. 

[Back to contents](#contents)

[Back to README](README.md)
