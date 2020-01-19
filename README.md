# Software-Service-Portfolio-HTML-Bootstrap
Maida Software Service HTML Bootstrap

Maida - Software Services HTML Template
Contact Me

    created: 12/15/2019
    latest update: 12/15/2019
    by: Maida Themes
    email: maidathemes@gmail.com

Maida Themes Where comes quality
<a href="https://blog.helpyea.com/maidasoftwareservice/">demo Link here</a>
#Installing Template

    After unzip the download pack, you'll found a Template Folder with all the files.
    You can view this Template in any browser, you can display or edit the Template without an internet connection.(May not wotrk fonts).
    The only section that will not work is the Contact Section which is not dynamic
    Now go to your cpanel or open your FTP Client (like Filezilla) and upload the content of the Template on your server's root directory.
    Once the files are done uploading go to www.yourdomainname.com/index.html

Template Structure

All information within the main content area is nested within a body tag. The general template structure is pretty the same throughout the template. Here is the general structure of main page (index.html).

<!--Pre loader Start-->
<div class="spinner-wrapper"></div>
<!--Pre loader End-->

<!--Header starting-->
<header>
</header>
<!--Header ending-->

<!--slider section starting-->
<section>
</section>
<!--slider section ending-->

<!--Services section Starting-->
<section class="p-5">
</section>
<!--Services section ending-->

<!--Counter section Starting-->
<section class="section bg-counter pt-5  pb-5 position-relative"
         style="background: url('assets/img/slider/marvin-meyer-SYTO3xs06fU-unsplash.jpg') center center;">
</section>
<!--Counter section ending-->

<!--portfolio section start-->

<section id="portfolio" class="p-5">

</section>

<!--portfolio section ending-->

<!--Team section Start-->
<section id="team" class="p-5">

</section>

<!--Team section ending-->

<!--Latest Post section start-->

<section id="letestpost" class="p-5">
</section>

<!--Latest Post section ending-->

<!--Testimonial section ending-->
<section id="testimonial" class="p-5 testimonial-wrapper">

</section>
<!--Testimonial section ending-->

<!--Clients logos section strat-->
<section id="clientlogos" class="p-5 testimonial-wrapper">

</section>
<!--Clients logos section ending-->

<!--Contact section Start-->

<section id="Contact" class="p-5 testimonial-wrapper">

</section>

<!--Contact section ending-->

<!--Footer section starting-->

<footer class="mainfooter">

</footer>

<!--Footer section ending-->

<!--start scroll up-->
<a href="#" class="scrollup" style="display: block;"><i class="fa-angle-up fa"></i></a>
<!--end scroll up-->

 

 

 

 
CSS files
These are the css files that are loaded into templates in Head Section.

<!--Css Fonts and favicon Files start-->
<!-- favicon icon -->
<link rel="icon" href="assets/img/fav.png" type="image/gif" sizes="16x16">
<!-- Google Font -->
<link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet">
<!-- Bootstrap CSS -->
<link href="assets/css/bootstrap.min.css" rel="stylesheet">
<!-- Fontawesome CSS -->
<link href="assets/css/all.css" rel="stylesheet">
<!-- Owl Carousal CSS -->
<link href="assets/css/owl.css" rel="stylesheet">
<!-- Custom CSS -->
<link href="assets/css/main.css" rel="stylesheet">
<!-- Custom Responsive CSS -->
<link href="assets/css/responsive.css" rel="stylesheet">
<!--Css Fonts and favicon Files end-->

 

 

 

 
Google Web Fonts

By default, the template loads this font from Google Web Font Services, you can change the font with the one that suits you best.

<!-- Google Font -->
<link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet">

Remember to change the font into main.css
Javascript Files and Structure
These are the list of Javascript files that are loaded into templates in end of the Body Section.

    <!--scripts including start-->
    <!-- jquery include -->
    <script src="assets/js/vendor/jquery-3.4.1.min.js"></script>
    <!-- Owl Carousal include -->
    <script src="assets/js/vendor/owl.js"></script>
    <!-- Bootstrap include -->
    <script src="assets/js/vendor/bootstrap.min.js"></script>
    <!-- Custom Js include -->
    <script src="assets/js/main.js"></script>
    <!--scripts including end-->

Main.js File Structure

This is a js file to activate different animations and functionality of this template

/*setting consoles clearing start*/
/* end setting consoles clearing*/

/*preloader start*/
/*preloader end*/

/*menu start*/
/*end menu*/

/*slider start */
/*main slider end*/

/*feature slider Start*/
/*feature slider end*/

/*feature slider about page Start*/
/*feature slider about page end*/

/*counter slider start*/
/*counter slider end*/

/*start client logos*/
/*end client logos*/

/*fancy box*/
/*end fancy box*/

/*start scroll to top */
/*end scroll to top */

 
 

 
Template Customization

You can customize this template with your own content. Here are some basic changes you need.
Logo Change

Just replace the image with your own image and replace the file name in the code

 

<!--logo-->
<a class="navbar-brand" href="index.html">
    <img src="assets/img/logo.png" alt="logo" class="max-width-60px">
</a>
<!--end logo-->

 
Menu Items Customize

You need to change the menu items text in the code to change the menu. Change the text home, about, work, expertise, blog, contact (if you want)

<!--menu start-->
<div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="nav navbar-nav ml-auto">
        <li class="nav-item">
            <a class="nav-link" href="index.html">Home
                <span class="sr-only">(current)</span>
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="about.html">About Us</a>
        </li>
        <li class="nav-item dropdown">
            <a href="#" data-toggle="dropdown" aria-haspopup="true"
               aria-expanded="false"
               class="nav-link dropdown-toggle">Pages </a>
            <ul class="dropdown-menu border-0 shadow">
                <li><a href="404.html" class="dropdown-item">404 </a></li>
                <li><a href="services.html" class="dropdown-item">Services </a></li>

            </ul>
        </li>

        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="blog.html" data-toggle="dropdown" aria-haspopup="true"
               aria-expanded="false">Blog Pages</a>
            <ul class="dropdown-menu border-0 shadow">
                <li><a href="blog.html" class="dropdown-item">Blog</a></li>
                <li><a href="blog-detail.html" class="dropdown-item">Blog Detail</a></li>

            </ul>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="pricing.html">Pricing</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="contact.html">Contact</a>
        </li>
        <li class="nav-item  bordering">
            <a class="nav-link" href="contact.html">Free Quote</a>
        </li>
    </ul>
</div>
<!--menu end-->

 
Footer Copyright Change

Just change the copyright text in the code

<!-- copyright -->
<div class="col-lg-6 col-md-6 col-sm-6">
    <p>Copyright 2019 <a href="javascript:void(0)">Maida</a>. All Rights Reserved. Made with <i
            class="fa fa-heart"></i>
        <a href="javascript:void(0)" class="greens">Maida</a>
    </p>
</div>
<!--end copyright -->

 

 

 

 
Source & Credits
Source and Credit

    pixabay
    unsplash
    Pexels
    FontAwesome
    Bootstrap Framework
    jQuery
    Fancybox.
    Owl Carousel
    Google fonts

Note:

    While images and illustration are only for demo purpose– but if you need the any help please feel free to contact with us.
    This Template is not WordPress Theme, and can’t be installed in WordPress.
    
<p>if you find some issue please report contact us <a href="https://helpyea.com" rel="nofollow">Here</a></p>



