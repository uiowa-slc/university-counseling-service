    <div class="main-bg">
        
        <section class="container content-wrapper clearfix">
            <!--<ul class="breadcrumbs">
                <li><a href="#">Home</a></li>
                <li><a href="#">Self Help</a></li>
                <li>How To Prepare For Exams</li>
            </ul>-->
            $Breadcrumbs
            <section class="main-content">
  
				<h2 class="postTitle">$Title</h2>
				<p class="authorDate"><% _t('POSTEDBY', 'Posted by') %> $Author.XML <% _t('POSTEDON', 'on') %> $Date.Long | $Comments.Count <% _t('COMMENTS', 'Comments') %></p>
				<% if TagsCollection %>
					<p class="tags">
						 <% _t('TAGS', 'Tags:') %> 
						<% control TagsCollection %>
							<a href="$Link" title="<% _t('VIEWALLPOSTTAGGED', 'View all posts tagged') %> '$Tag'" rel="tag">$Tag</a><% if not Last %>,<% end_if %>
						<% end_control %>
					</p>
				<% end_if %>		
				$Content		
				<% if IsOwner %><p class="edit-post"><a href="$EditURL" id="editpost" title="<% _t('EDITTHIS', 'Edit this post') %>"><% _t('EDITTHIS', 'Edit this post') %></a> | <a href="$Link(unpublishPost)" id="unpublishpost"><% _t('UNPUBLISHTHIS', 'Unpublish this post') %></a></p><% end_if %>
            </section>
            
            <section class="sec-content">
            	<% include SideNav %>
            	<% include BlogSideBar %>
                <aside>
                    <div class="mod photo">
                        <div>
                            <h3>Outreach Programs</h3>
                            <img src="{$ThemeDir}/images/home_outreach.jpg" alt="">
                        </div>
                        <p>Defining a nascent field of study with potential for broad impact. <a href="#">Read More</a></p>
                    </div>

                     <div class="mod">
                        <h3>Module Name</h3>
                        <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                    </div>
                </aside>
            </section>
        </section>

        <section class="padding">
            <div class="container">
                <div class="row-fluid">
                    <div class="span6 mod">
                        <h3 class="mod-title">Self-Help Topics</h3>
                        <ul class="unstyled two-col">
                            <li><a href="#">Lorem ipsum dolor sit amet.</a></li>
                            <li><a href="#">Laborum distinctio magni dolore recusandae?</a></li>
                            <li><a href="#">Perferendis distinctio enim nisi magnam!</a></li>
                            <li><a href="#">Aut perferendis nesciunt molestias in.</a></li>
                            <li><a href="#">Nisi sunt vitae officia at.</a></li>
                            <li><a href="#">Nihil provident eos quos earum.</a></li>
                            <li><a href="#">Dolorum autem ab similique quaerat!</a></li>
                            <li><a href="#">Quibusdam totam ad maxime repellat.</a></li>
                        </ul>
                    </div>
                    <div class="span3 mod mod-news">
                        <h3 class="mod-title">Latest News</h3>
                        <ul class="unstyled">
                            <li>
                                <a href="#">Eating Disorder Peer Education Program for Student Volunteers</a>
                                <small>Feb. 26</small>
                            </li>
                            <li>
                                <a href="#">Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</a>
                                <small>Feb. 13</small>
                            </li>
                        </ul>
                    </div>
                    <div class="span3 mod">
                        <h3 class="mod-title">Upcoming Events</h3>
                        <ul class="unstyled">
                            <li><a href="#">Big 10 Counseling Centers Conference 2013</a></li>
                            <li><a href="#">Lorem ipsum dolor sit amet, consectetur</a></li>
                            <li><a href="#">Lorem ipsum dolor sit amet</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

    </div>


