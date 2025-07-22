<h1 align="center">Space Station - Interactive Frontend Development Milestone Project</h1>

[View the live project here.](https://fabioadearaujo.github.io/spacestation_mp2/)

This is the International Space Station unofficial fan website to demonstrate the power of APIs. It is designed to be "Mobile First", responsibe and accessible on a range of devices, making it easy to navigate and visually pleasant, also easy to obtain information about the spaceship and see it in action.

<h2 align="center"><img src="https://fabioaraujo76.github.io/spacestation_mp2/assets/img/mobileandlaptop.png"></h2>


 ## User Experience (UX)

-   ### User stories

    -   #### First Time Visitor Goals

        1. As a First Time Visitor, I want to easily understand the main purpose of the site and learn more about the International Space Station.
        2. As a First Time Visitor, I want to be able to easily navigate throughout the site to find content.
        3. As a First Time Visitor, I want to have option to see the content in a Dark or Light mode.

    -   #### Returning Visitor Goals

        1. As a Returning Visitor, I want to find where the International Space Station is traveling at this moment.
        2. As a Returning Visitor, I want to see the live video from the International Space Station.
        3. As a Returning Visitor, I want to see the new picture of the day.

    -   #### Frequent User Goals
        1. As a Frequent User, I want to know the location of the International Space Station.
        2. As a Frequent User, I want to watch and see if I catch the astronauts space walking around the Space Station.
        3. As a Frequent User, I want to download the picture of the day to use as workspace background in my laptop.

-   ### Design

    -   #### General
        -   This webpage was created as a mobile first, giving the appearence of an app with cards containing the content. If opened in devices with larger screen, the cards are going to be resized and be shown in 2 columns, this make the site easier to mantain if necessary to include or remove cards.

    -   #### Colour Scheme
        -   The approach to give the user the option of a Dark or a Light mode was taking in consideration when developing this website. It will always start in the Dark Mode as default to be reminded of the night sky and space, in this mode there is a black background and dark grey cards. Switching to Light mode the background will be a bright pastel blue and light grey cards.

    -   #### Typography
        -   The Roboto font is the main font used throughout the whole website with Sans Serif as the fallback font in case for any reason the font isn't being imported into the site correctly. Roboto is a clean font used frequently in Google ecosystem, so it is both attractive, appropriate and memorable.For the Logo the font was Orbitro that its futuristic look is similar to the fonts used in a sci-fi movie, making it very appropriated to this website, in the case of it not being supported by the browser used, Sans Serif will fallback.

    -   #### Imagery
        -   Imagery is important. The main card brings the International Space Station location in the map with a marker shaped like itself. A live streem of the Space Station will also autostart showing amazing imagery into the user's screen. Also the Astronomy Picture of the Day will catch the attention of the user with pictures of the space straight from NASA.

       ### Wireframes

    -   Home Page Wireframe - [View](https://drive.google.com/file/d/1ImHxpkpQ5OTSVJzXGB-Z9g_JXOTMM2qf/view?usp=sharing)


## Features

-   Mobile First approach

-   Responsive on all device sizes

-   Dark and Light Mode

-   Interactive elements

-   Live updated content


## Technologies Used

### Languages Used

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
-   [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks, Libraries, APIs & Programs Used

1. [Bootstrap 4.4.1:](https://getbootstrap.com/docs/4.4/getting-started/introduction/)
    - Bootstrap was used to assist with the responsiveness and styling of the cards.
1. [Bootstrap Toggle](https://www.bootstraptoggle.com/)
    - Bootstrap Toggle was used to create the Dark/Light Mode Toggle.
1. [Google Fonts:](https://fonts.google.com/)
    - Google fonts were used to import the 'Roboto' and 'Orbitron' fonts into the style.css file which is used on throughout the project.
1. [Font Awesome:](https://fontawesome.com/)
    - Font Awesome was used on the card buttons to add icons for aesthetic and UX purposes.
1. [jQuery:](https://jquery.com/)
    - jQuery was used to create Dark/Light Mode changing the color of the elements on the screen and also to display/create elements fetched from the API's source.
1. [Leaflet JS](https://leafletjs.com/)
    - Leaflet is a JavaScript Library for mobile-friendly interactive maps, it was used to create the map on the first card.    
1. [OpenStreetMap](https://wiki.openstreetmap.org/wiki/API_v0.6)
    - Open Street Maps API was used to collect the tiles and build the map on top of Leaflet JS.    
1. [Leaflet.Terminator](https://github.com/joergdietrich/Leaflet.Terminator)
    - Leaflet.Terminator is a Leaflet plugin add on to create a overlay layer to show day and night regions on the Leaflet Earth Map.
1. [Where the ISS at?](https://wheretheiss.at/w/developer)
    - Where the ISS at? provides a REST API used to get the International Space Station Location and some more live information.
1. [NASA API](https://api.nasa.gov/)
    - NASA provides data and imagery available to all, it is used to get the Astronomy Picture of the Day.
1. [YouTube - Space Official](https://www.youtube.com/channel/UCIR_LPmEQ9QHR0yB2lxgaxQ)
    - This is the official channel of Space Official where it the Live Video from the International Space Station is streammed.
1. [Git](https://git-scm.com/)
    - Git was used for version control by utilizing the Git Bash terminal to commit to Git and Push to GitHub.
1. [GitHub:](https://github.com/)
    - GitHub is used to store the projects code after being pushed from Git.
1. [Visual Studio Code:](https://code.visualstudio.com/)
    - Visual Studio Code was used to write the code.
1. [Balsamiq:](https://balsamiq.com/)
    - Balsamiq was used to create the wireframes during the design process.


## Testing

The W3C Markup Validator and W3C CSS Validator Services were used to validate the page of the project to ensure there were no syntax errors.

-   [W3C Markup Validator](https://jigsaw.w3.org/css-validator/#validate_by_input)
-   [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input)
    <p>
    <a href="http://jigsaw.w3.org/css-validator/check/referer">
        <img style="border:0;width:88px;height:31px"
            src="http://jigsaw.w3.org/css-validator/images/vcss-blue"
            alt="Valid CSS!" />
        </a>
    </p>


### Further Testing

-   The Website was tested on Google Chrome, Internet Explorer, Microsoft Edge and Firefox browsers.
-   The website was viewed on a variety of devices such as Desktop, Laptop, various Android phones of different resolutions and also iPhones.
-   A large amount of testing was done to ensure that all features were working correctly.
-   Friends and family members were asked to review the site and documentation to point out any bugs and/or user experience issues.

### Testing FeedBack and Improvement

-   One user pointed the fact of the Dark Mode toggle not being placed on the usual location making the visual not pleasant. 
    After researching the toggle button was moved to the top right side of the page out of the way and following a design language more usual and easy on the eyes of the visitor.

-   Most of the people testing the website were happy with the content and design of the website. No errors were reported.


### Known Bugs

-   Once it returned error 500 when trying to fetch the picture from NASA, after researching it, that means it reached the limit of API requests. The API not always return a code so I am waiting the issue happen again to be able to work on a solution.
-   This website is not recommended to be used with Internet Explorer, most of its functionality didn't load.

### Issues tracker

- Issues encontered after the project was deployed are being registered at [GitHub Issues Tab](https://github.com/fabioaraujo76/spacestation_mp2/issues).

## Deployment

### GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/fabioaraujo76/spacestation_mp2)
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site [link](https://fabioaraujo76.github.io/spacestation_mp2/) in the "GitHub Pages" section.


## Collaboration

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) for more informatino about Cloning repositories.

Click [Here](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests) for more informatino about Collaboration.


## Credits

### Code

-   [Code Institute](https://codeinstitute.net/) - The course gave me the hability to improve my knowledge and was very important on the HTML, CSS and JQuery part of this project.

-   [Bootstrap Toggle](https://www.bootstraptoggle.com/#usage) - The documentation part was important to understand and be agle to implement the toggle for Dark/Light mode.

-   [dcode Youtube](https://www.youtube.com/watch?v=5VCY9yCZnlc&t=135s) - It was important to reforce and help me to create the functions to fetch data from the APIs.

-   [Leaflet Js](https://leafletjs.com/examples.html) - The Tutorial part of the website was very useful helping me to succesfully use their library.

-   [Where the ISS is at?](https://wheretheiss.at/w/developer) - The documentation was important to understand the data returned so I could display using JQuery.

-   Other Sources - Not less important, but also helpful, W3 Schools, Stack Overflow and Libraries/API documentation.


### Content

-   The content was gathered from Where the ISS is at?, Nasa, SpaceX and Space Official Youtube channel.

-   The about section was written by the developer.

### Media

-   Live Video . [Space Official Youtube Channel](https://www.youtube.com/watch?v=5_rLJNq7Rw8)

-   Astronomy Photo of the Day . [NASA](https://www.nasa.gov/)

### Acknowledgements

-   My Mentor for continuous helpful feedback.

-   All friends and family that helped me to test and gave me valuable feedback.
