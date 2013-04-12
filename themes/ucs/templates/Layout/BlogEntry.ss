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
            	<%-- include SideNav --%>
            	<% include BlogSideBar %>
           </section>
        </section>

        <% include TopicsAndNews %>
    </div>


