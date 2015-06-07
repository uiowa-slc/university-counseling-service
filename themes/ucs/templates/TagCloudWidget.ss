	<nav class="sec-nav">
	    <ul class="tag-nav">
	    <% loop TagsCollection %>
	        <li><a href="$Link">$Tag&nbsp;<span>($Count)</span></a></li>&nbsp;
	    <% end_loop %>
	    </ul>
	</nav>