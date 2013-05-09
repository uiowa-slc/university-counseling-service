	<nav class="sec-nav">
	    <ul>
	    <% loop TagsCollection %>
	        <li><a href="$Link">$Tag ($Count)</a></li>
	    <% end_loop %>
	    </ul>
	</nav>