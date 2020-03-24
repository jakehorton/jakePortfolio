import React from 'react';
import './App.scss';


document.addEventListener('DOMContentLoaded', function() {
window.onscroll = function() {myFunction()};

        var nav = document.getElementById("nav");
        var sticky = nav.offsetTop;

        function myFunction() {
          if (window.pageYOffset > sticky) {
            nav.classList.add("sticky");
          } else {
            nav.classList.remove("sticky");
          }
        }
      })

function App() {
  return (
    
    <div classNameName="App">
<link src="https://use.fontawesome.com/releases/v5.12.1/css/all.css" crossorigin="anonymous"></link>      <div className="landing">
      <div className="colorBlock slideRight"> </div>
      <div className="helloWorld">
      <div className="hello">Hello</div>
      <div className="world">World.</div>
      </div>
      <div className="intro">
      <span><span className="iAm"> I am </span><span className="jake"><span class="token">&lt;</span><span class="jakeWord">Jake</span><span class="token">/&gt;</span></span> </span>
        <div className="secondaryText"><span className="ima">I'm a </span><span className="frontEnd">front-end </span> <span className="developer">developer.</span> </div>
        <div className="viewButton"><p className="pulse"><a className="viewMy" href="#about">View my work <i class="fas fa-arrow-down"></i></a></p></div>
      </div>
         </div>
         
          

      

      

      <nav id="nav" className="nav">
		    <a href="#" >HORTON <i id="cat" class="fas fa-cat"></i></a>
		    <div  className="navLinks">
            <a href="#" >Home</a>
            <a href="#about" >About</a>
            <a href="#portfolio" >Portfolio</a>
            <a href="#contact" >Contact</a>
		    </div>
	    </nav>

      <div id="about" className="largeSection1">
        <i class="fas fa-graduation-cap"></i>
      <div className="aboutMe">
      <h1 > <span>What makes</span> <span>my wheels turn</span>
</h1>
<h2>About Me</h2>
<div className="text">
      <span> My name is Jake Horton BSc MSc, and I'm a trainee Software Developer.</span>
      <span> As a recent graduate of an intensive 12-week software-development bootcamp, I have been trained in many of the latest technologies used including: <strong>Javascript</strong>, <strong>Java</strong>, <strong>PostgreSQL/mySQL</strong> and have experience with frameworks and libraries including: <strong>React</strong>, <strong>Spring </strong>and <strong>Bootstrap</strong>. </span>
      <span> </span>
      </div>
      </div>

      <div className="images">
        <div className="imageContainer">
        <div className="imageMe"></div>

        </div>

      <div className="allSkills">
      <div className="skill">
        <div className="skillName">HTML</div>
        <div className="skillMeter">
        <div className="meter"></div>
        <div className="fillHTML"></div>
        </div>
        </div>

        <div className="skill">
        <div className="skillName">CSS/SASS</div>
        <div className="skillMeter">
        <div className="meter"></div>
        <div className="fillSASS"></div>
        </div>
        </div>

        <div className="skill">
        <div className="skillName">JavaScript</div>
        <div className="skillMeter">
        <div className="meter"></div>
        <div className="fillJs"></div>
        </div>
        </div>

        <div className="skill">
        <div className="skillName">React</div>
        <div className="skillMeter">
        <div className="meter"></div>
        <div className="fillReact"></div>
        </div>
        </div>

        <div className="skill">
        <div className="skillName">Java</div>
        <div className="skillMeter">
        <div className="meter"></div>
        <div className="fillJava"></div>
        </div>
        </div>
        
      </div>
      </div>
      

      </div>


      <div id="portfolio" className="largeSection2">
      <div className="projectList">
      <h1 > <span>Take a look</span> <span>at some of my projects</span>
</h1>
<h2>Latest Work</h2>
</div>
<div className="projectGrid">

  <a href="#calsy"><div className="item0"></div></a>

  <div className="twoProjects">
  <a href="#yelp"><div className="item1"></div></a>
<a href="#catch"><div className="item2"></div></a>
  </div>
<div >
  <a href="#games" className="threeProjects">
<div className="item3"></div>
<div className="item4"></div>
<div className="item5"></div>
</a>
</div>

<div className="twoProjects">
<a href="#jtBlogs"><div className="item6"></div></a>
<a href="#rachels"><div className="item7"></div></a>
</div>
</div>


</div>
<a href="https://frosty-murdock-09a07e.netlify.com/">

<div className="largeSection3">
      
<div className="section">
<div  id="calsy" className="leftSection">

      <h1 > <span>Calsy</span> <span>Stickers Signs Designs</span>
</h1>
<h2>Client Website</h2>
<div className="text">
Calsy Stickers Signs Designs are a Designs and Signage company with a strong brand identity. 
The client brief was to build a fully-responsive site that focused on UX/customer journey and that could be edited in-house as and when required, all whilst retaining the company aesthetic. I decided to build the site using <strong>Gatsby</strong> alongside <strong>Netlify CMS</strong> in order for snappy page loading, quick hosting, and and easy to use CMS for programmatically adding pages.
</div>
</div>

<div className="RightSection">
<div className="projectImages">
<div className="desktopTablet">

<div className="desktop1 calsy1"></div>
  <div className="tablet calsy3"></div>
  </div>
  <div className="desktopPhone">
  <div className="phone calsy4"></div>
  <div className="desktop2 calsy2"></div>
  </div>

</div>
</div>
</div>
</div>
</a>
<a href="https://nameless-shore-68047.herokuapp.com/">
<div id="yelp" className="largeSection4">
      
<div className="section">

<div className="leftSectionYelp1">
<div className="projectImages">
<div className="yelp1"></div>
<div className="yelp2"></div>
<div className="yelp3"></div>

</div>
</div>
  
<div className="rightSection">

      <h1 > <span>YelpCamp</span> <span></span>
</h1>
<h2>Full -stack Campsite Database</h2>
<div className="text2">
YelpCamp is a camping database built using <strong>Node.js</strong>, <strong>Express</strong> and <strong>MongoDB</strong>. The application uses RESTful routing and features user authentication and authorisation, as well as a Google Maps API. Users can create an account, login, and then go on to create and (with the right permissions) edit their own campsites!
</div>
</div>

<div className="leftSectionYelp2">
<div className="projectImages">
<div className="yelp1"></div>
<div className="yelp2"></div>
<div className="yelp3"></div> 

</div>
</div>


</div>
</div>
</a>

<a href="https://5d309200141560017cf109ef--catchoftheday-jakehorton.netlify.com/">
<div id="catch" className="largeSection3">
      
<div className="section">
<div className="leftSection">

      <h1 > <span>Catch of the day</span> 
</h1>
<h2>Interactive Fish Market</h2>
<div className="text">
Catch Of The Day is a <strong>React</strong> app in the form of an interactive Fish Market - which is obviously just what you came here for!

User authentication is required via either <strong>Github</strong> or <strong>Facebook</strong> logins, whereby users can then add/remove fish from their order or even add/remove entirely new fish from the database. The UI is made even firendlier with a rolling total and a few animations.
</div>
</div>

<div className="RightSection">
<div className="projectImages">
<div className="catchOf1"></div>
<div className="catchOf2"></div>


</div>
</div>
</div>
</div>
</a>


<a href="https://thejtblogs.wordpress.com/">
<div id="jtBlogs" className="largeSection4">
      
<div className="section">

<div className="leftSectionYelp1">
<div className="projectImages">
<div className="desktopTablet">

<div className="desktop1 jtBlogs1"></div>
  <div className="tablet jtBlogs2"></div>
  </div>
  <div className="desktopPhone">
  <div className="phone jtBlogs3"></div>
  <div className="desktop2 jtBlogs4"></div>
  </div>

</div>
</div>
  
<div className="rightSection">

      <h1 > <span>The JT Blogs</span> <span></span>
</h1>
<h2>Food, Beauty and Travel Blog</h2>
<div className="text2">

My girlfriend is great at making anything look good. But she also loves to talk about food.

We worked together on this <strong>WordPress</strong> blog site in order to showcase her design portfolio alongside her food, beauty and travel blog. The clean, minimalistic design suits her aesthetic down to a T and the updated blog feeds keep visitors up-to-date with all the latest posts.</div>
</div>

<div className="leftSectionYelp2">
<div className="projectImages">
<div className="desktopTablet">

<div className="desktop1 jtBlogs1"></div>
  <div className="tablet jtBlogs2"></div>
  </div>
  <div className="desktopPhone">
  <div className="phone jtBlogs3"></div>
  <div className="desktop2 jtBlogs4"></div>
  </div>

</div>
</div>


</div>
</div>
</a>

<a href="https://rachelscakesdotblog.wordpress.com/">

<div id="rachels" className="largeSection3">
      
<div className="section">
<div className="leftSection">

      <h1 > <span>Rachel's Cakes</span>
</h1>
<h2>Home-Baking Business</h2>
<div className="text">
Baking cakes is a tasty business. But when it comes to effectively showcasing your products, what's the best approach?

Whilst this <strong>WordPress</strong> site is simplistic in its design, essential information is easily digestible and user-friendly. Customers can easily navigate between categories of previous work, price lists and contact information. Instagram and Facebook widgets ensure the very latest social media posts are always visible and that no cake is left unseen!
</div>
</div>

<div className="RightSection">
<div className="projectImages">
<div className="desktopTablet">

<div className="desktop1 rachel1"></div>
  <div className="tablet rachel2"></div>
  </div>
  <div className="desktopPhone">
  <div className="phone rachel3"></div>
  <div className="desktop2 rachel4"></div>
  </div>

</div>
</div>
</div>
</div>
</a>


<div id="games" className="largeSection4">
      
<div className="section">

<div className="leftSectionYelp1">
<div className="projectImages">
<div className="games1"></div>
<div className="games2"></div>
<div className="games3"></div> 

</div>
</div>
  
<div className="rightSection">

      <h1 > <span>Have Fun!</span> <span></span>
</h1>
<h2>Interactive Apps and Games</h2>
<div className="text2">
<a href="https://jakehorton.github.io/colourgame/">
  <h3>The Great RGB Colour Game</h3>
  <p>It's like Bake Off, but without the Cakes. Or Paul Hollywood.

This <strong>Vanilla JS</strong> interactive app generates random RGB colour squares that users must match with that of the RGB code on-screen. If six choices is too hard for you, switch to easy mode and you'll only have to deal with three!</p>
</a>
<a href="https://jakehorton.github.io/patatap/">
<div>
  <h3>Patatap(ish)</h3>
  <p>Remember the keyboards at school that had the DJ function? Imagine that, but at home. Whenever you like. All day.

This <strong>jQuery</strong> app is built using two different libraries (Paper.js and Howler.js) to bind animations and sounds to every key press you make. Useful stuff.</p>
</div>
</a>
<a href="https://jakehorton.github.io/todolist">
<div>
<h3>Henry Pooter's To-Do List</h3>
  <p>Everyone's second (or third (or maybe even fourth)) favourite wizard needs a way of remembering what he needs to do! This interactive Todo List app is built using <strong>jQuery</strong> and allows users to cross-through completed tasks, add new tasks, and delete tasks they're 100% definitely sure they've probably done.</p>
</div>
</a>
</div>
</div>

<div className="leftSectionYelp2">
<div className="projectImages">
<div className="games1"></div>
<div className="games2"></div>
<div className="games3"></div> 

</div>
</div>


</div>
</div>   

<div id="contact"className="footer">

<div  className="viewButton"><p className="pulse2"><a className="viewMy2" href="#">Back to top<i class="fas fa-arrow-down"></i></a></p></div>
  <div> <h2>Get in touch</h2></div>
  <div className="contactMethod">
    <div className="linkedIn">
    <div><h4>Linkedin</h4></div>
    www.linkedin.com/in/jake-horton-dev
    </div>
    <div className="email">
      <div><h4>Email</h4></div>
    jake.horton94@hotmail.co.uk
    </div>
    <div className="phone">
    <div><h4>Phone</h4></div>
    07472811900
    </div>
  </div>
</div>

    </div>
  );
}

export default App;
