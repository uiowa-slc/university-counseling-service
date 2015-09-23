  		<section class="padding hide-print">
            <div class="container">
                <div class="colgroup">
                    <div class="col-1-2 mod">
                        <h3 class="mod-title">Self-help articles</h3>
                        <ul class="grid-justify">
                        	<% with Page("self-help") %>
	                        	<% loop $BlogPosts.Limit(8) %>
	                        		<li><a href="$Link">$MenuTitle</a></li>
	                            <% end_loop %>
                            <% end_with %>
                            <li><hr /><a href="$Link">View all self-help articles &rarr;</a></li>

                        </ul>
                    </div>
                    <div class="col-1-4 mod mod-news">
                    	<% with Page(news) %>
							<% if $BlogPosts %>
						        <h3 class="mod-title">Latest news &amp; events</h3>
						        <ul class="unstyled">
						        	<% loop $BlogPosts.Limit(3) %>
						        	<li><a href="$Link">$MenuTitle</a>
						        		<% if $Date %><small>$Date.Format('M. j')</small><% end_if %>
						        	</li>
						        	<% end_loop %>
						        	<li><hr /><a href="$Link">View all news &amp; events &rarr;</a></li>

						        </ul>
							<% end_if %>
						<% end_with %>
                    </div>
                </div>
            </div>
        </section>
