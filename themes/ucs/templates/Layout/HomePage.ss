    <div class="hero">
        <div class="container clearfix">
            <div class="hero-article-wrapper">
				<div class="hero-article clearfix">
					<img src="{$ThemeDir}/images/article-img.jpg" alt="">
					<h3 class="hero-title"><a href="#">How to Prepare for Exams</a></h3>
					<p class="hero-content">Whether the examination is to be the essay type or the objective type, there are certain common practices employed by the good students which may be helpful to you.</p>
					<a href="#" class="hero-link">Read More</a>
				</div>
				<hr class="hr">
				<div class="hero-article clearfix">
					<h3 class="hero-title"><a href="#">Big 10 Counseling Centers Conference 2013</a></h3>
					<p class="hero-content">The University of Iowa's University Counseling Service is pleased to announce the 2013 Annual Big Ten Counseling Centers Conference.</p>
					<a href="#" class="hero-link">Read More</a>
				</div>
	        </div>
	        <div class="hero-text">
                <h2 class="blocktext">We offer a variety of counseling services, outreach, and training for University of Iowa students and staff.</h2>
                <ul>
                    <li><a href="services/counseling">Counseling</a></li>
                    <li><a href="services/outreach">Outreach</a></li>
                    <li><a href="services/training">Training</a></li>
                </ul>
            </div>
        </div>
        
    </div>
	<section class="home-highlights padding">
        <div class="container clearfix">
	        <% loop HomePageFeatures %>
	            <div class="module">
	                <div class="media">
	                <% if $YouTubeEmbed %>  
	                	$YouTubeEmbed      
	                <% else %>
	                    <a href="$AssociatedPage.Link">
	                        <img src="$Image.CroppedImage(350,197).URL" alt="$Title">
	                    </a>
	                <% end_if %>
	                </div>
	                <div class="inner">
	                    <h3><a href="$AssociatedPage.Link">$Title</a></h3>
	                    	$Content
	                </div>
	            </div>
	         <% end_loop %>
         </div><!-- end .container -->
    </section>

    <% include TopicsAndNews %>
    