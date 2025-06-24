![page image](readme-images/main.png)<div align="center">
<h1 align="center">☀️ Weather Web App ❄️</h1>
<p align="center">☀️❄️☁️🌦️💧🌤️⚡


---
<div align="center">
Welcome to the readme for the ‘Weather Web App', a collaborative project for the 1st Hackathon at the end of the JavaScript module for the Code Institutes Full Stack Software Developer Bootcamp. <br>
‘Our Awesome Weather App' is a responsive and accessible web application that provides users with real-time weather information. 
</div>
<br>

---

<div align="center"> 
The live project can be found here: <a target="_blank" href="https://ekennard.github.io/Our-Awesome-Weather-App/"><em>Our Awesome Weather App<em></a>
</div>
<br>

---

## ☀️ Creators
<div align="center">
**Abduaziz Ahmed**  <br>
**Elizabeth Kennard** <br>
**Fatima Stacpoole**

---

## ☀️ Contents

[Introduction](#introduction)<br>
[Brief](#brief)<br>
[User Stories](#user-stories)<br>
[Project Planning](#project-planning)<br>
[Features](#features)<br>
[Navigation](#navigation)<br>
[Main content](#main-content)<br>
[AI Utilisation](#ai-utilisation)<br>
[Deployment](#deployment)<br>
[Technologies Used](#️technologies-used)<br>
[Testing and Debugging](#testing-and-debugging)<br>
[Validation](#validation)<br>
[Future Enhancements](#️future-enhancements)<br>
[Resources, Credits and Acknowledgements](#resources,-credits-and-acknowledgements)<br>

---

## ☀️ Introduction

‘Our Awesome Weather App' is a responsive and accessible web application that provides users with real-time weather information created for our first collaborative project for the end of the JavaScript module for the Code Institutes Full Stack Software Developer Bootcamp. The Aim of the project is to show what we have learnt on this module, and the preceeding HTML and CSS modules. 

---

## ☀️ Brief

The Code Institutes learning objectives for this project were as follows:

☁️ O1: Learners will be able to design and implement a one-page interactive Front-End web application using HTML, CSS, and JavaScript focusing on user experience design, accessibility, and responsive DOM manipulation.<br>
<br>
☁️ O2: Learners will be able to test and validate a one-page web application through development, implementation, and deployment stages.<br>
<br>
☁️ O3: Learners will be able to deploy a one-page web application to a Cloud platform ensuring functionality and security.<br>
<br>
☁️ O4: Learners will be able to maximize future maintainability through thorough documentation, clear code structure, and organization.<br>
<br>
☁️ O5: Learners will be able to implement and document front-end interactivity using core JavaScript, JavaScript libraries, or frameworks with a focus on DOM manipulation for a one-page web application.<br>
<br>
☁️ O6: Learners will be able to leverage AI tools to orchestrate the software development process.

---

## ☀️ User Stories

Several user stories were created at the start on the project and kept track of on Githubs project board. Certain user stories have different outcomes that what we initially want due to the constraints we encountered with APIs, but where possible we kept as true to these goals as possible (i.e we had to change the 7 day forcast for a 5 day). <br><br>
The user stories were as follows:


### ❄️ Must haves
☁️ As a user, I want to view the current weather for my location, so I can decide what to wear or whether to bring an umbrella.<br>
☁️ As a planner, I want to view a 7-day weather forecast, so I can view a 7-day weather forecast<br>
☁️ As a user, I want to search for weather in different cities, so I can check conditions for places I plan to travel.<br>
☁️ As a mobile user, I want the weather page to adjust neatly to my screen size, so I can easily use it on the go.<br>
☁️ As a visually impaired user, I want to navigate the site using screen readers and keyboard shortcuts, so the experience is inclusive.<br>

### ❄️ Should Haves
☁️ As a commuter, I want to see a live rain radar map, so I can plan my walk or drive accordingly.<br>
☁️ As a curious user, I want to toggle between Celsius and Fahrenheit, so I can view temperatures in my preferred format.<br>
☁️ As a weather enthusiast, I want to see animated transitions (like clouds or droplets) based on live conditions, so the site feels dynamic and engaging.<br>

### ❄️ Could Haves
☁️ As a user, I want to receive an alert when air quality reaches a poor level, so I can take precautions.<br>
☁️ As a health-conscious user, I want to see the local air quality index (AQI) with colour-coded warnings, so I can avoid going outside during unsafe conditions.<br>

---

## ☀️ Project Planning

### ❄️ API selction
The process of choosing which AP to use turned into a little bit of an arduous ordeal, and was not as straight forward as we would have hoped. Initially we had some solid ideas about how we wanted out site to look, and what data we wanted to present. However, we were 


### ❄️ Wireframes

Landing Page Wireframe
![wireframe landing page](readme-images/wireframe-landing-page.png)<div align="center"><br>

Main Page Wireframe
![wireframe main page](readme-images/wireframe-main-page.png)<div align="center">

### ❄️ Colour Palette
![colour-pallette](readme-images/colour-pallette.jpg)<div align="center">

### ❄️ Font Typography
![fonts](readme-images/fonts.png)<div align="center">

Using these this colout pallette and fonts we created these root variables in the CSS to control all aspects of the site.

![colour-pallette](readme-images/css-root-variables.png)<div align="center">

---

## ☀️ Features

The basic feature on the site were designed so that it wasnt cluttered, and that the user could easily and quickly look up the weather in an given city globaly.

These featurees include:
☁️ Current weather
☁️ 3 Hourly forcast
☁️ 5-day forecast;<br>
☁️ City search functionality;<br>
☁️ Mobile-first, fully responsive layout<br>
☁️ Accessible with keyboard and screen reader support<br>

---

## ☀️ Navigation

As we did not end up having more than one page on the site, navigation was unnessesary. 

---

## ☀️ Main content

The main aspect of the the page is taken up by the weather data. Two APis were used to generate the weather data. Initially we had wanted to have a current weather forcast, an hourly forcast and a 7 day forcast, however we quickly discovered the limitations with using certain APIs and opted for two which allowed us to access data for current daily weather conditions, a 3 hourly forcast, and a 5 day forcast.

The APIs are activated by an input box and a search button at the top of the page.

![image](readme-images/search.png)<div align="center">

This initiates the function to create divs within the main area of the page, and to populate the page with the weather data for the city which was search for.

![image](readme-images/daily.png)<div align="center">

Once the weather information has been retrieved from the API the daily forcast in displayed within a `<div>` with the following information:<br>
☁️ The name of the city, <br>
☁️ An icon for the prominant weather type, <br>
☁️ The date for the city,<br>
☁️ The local time of the city,<br>
☁️ The actual temperature,<br>
☁️ The 'Feels Like' temperature,<br>
☁️ The weather type,<br>
☁️ Humidity percentage,<br>
☁️ And the wind speed.<br>

![image](readme-images/5-daily.png)<div align="center">

Below the daily forcast `<div>`, the 5 day forcast is displayed within a rolling carousel, shoing the following information:<br>
☁️ 5 Day Forcast title,<br>
☁️ the date,<br>
☁️ An icon for the prominant weather type,<br>
☁️ The temperature,<br>
☁️ The weather type.<br>


The background of the site is dynamic and switches between a night and day colour scheme, as well as displaying animations for rain and clouds depending, on which weather type is dominant at the search location.<br>

Day theme:
![image](readme-images/main.png)<div align="center">

Day theme with clouds:
![image](readme-images/day-clouds.png)<div align="center">

Night theme:
![image](readme-images/night.png)<div align="center">

Night theme with rain:
![image](readme-images/night-rain.png)<div align="center">

----

## ☀️ AI Utilisation
During the planning stage, AI was utilised with setting out our user stories and aiding us with the general concept design. 
During the creation of the project Copilot was used for debugging and suggesting fixes for trickier issues.

---

## ☀️ Deployment
Our project was deployed straight away when the repo was created so that we could debug and test out code after each merge into the main branch.

---

## ☀️ Technologies Used
The site was created using HTML5, CSS, JavaScript, with Bootstrap elements, and two APIs from openweathermap.org. Our coding spaces were Visual Studio Code, and our version control and were don eusing Git & GitHub.

---

## ☀️ Testing and Debugging
Testing and debugging was a constant process throughout the project, and was made infinatly easier with the early deployment. Chrome developer tools were our first port of call for debugging and testing features, and for trickier bugs we utilised Copliot and the CI coding-coach chennel on Slack.

---

## ☀️ Validation




### ❄️ HTML
![image](readme-images/html-validation.png)<div align="center">

The code was validated using the W3 validator tools and in general was pretty clean. Our HTML file had a couple of issues but these were caused by an image source which was empty in the HTML as it was being populated using JavaScript based on the type of weather fo any given location. As such, it was decided that due to the time constraintes, we were not going to be able to fix this, as it would likely require rewriting some of the JS code. The same for the empty heading.<br>

### ❄️ CSS 

<p>
    <a href="https://jigsaw.w3.org/css-validator/check/referer">
        <img style="border:0;width:88px;height:31px"
            src="https://jigsaw.w3.org/css-validator/images/vcss"
            alt="Valid CSS!" />
    </a>
</p>

The CSS validation was very easy and returned no issues on the first pass.

### ❄️ Lighthouse
![image](readme-images/lighthouse.png)<div align="center">
Lighthouse scores were also optimal on the first pass.

---

## ☀️ Future Enhancements

In the future, it would be nice to try and build in all the features from our user stories, for example: <br>
☁️ Hourly forcast<br>
☁️ 7 Day forcast<br>
☁️ Rain radar<br>


As well as implementing more features that would further enhance the user experience, for example:<br>
☁️ User preferences stored in local storage<br>
☁️ More dynamic animations for weather types (mist/fog, lightning, wind etc)<br>

---





## ☀️ Resources, Credits and Acknowledgements

Thanks to the API providers - openweathermap.org, our instructors, and the open-source community for tools and guidance!

---

https://getbootstrap.com/<br>
https://fontawesome.com/<br>
https://coolors.co/<br>
https://www.w3.org/developers/tools/<br>
https://www.markdownguide.org/basic-syntax/<br>
https://www.w3schools.com/<br>
https://developer.mozilla.org/<br>
https://stackoverflow.com/<br>
https://www.diffchecker.com/<br>
https://www.unixtimestamp.com/<br>
https://getemoji.com/<br>
