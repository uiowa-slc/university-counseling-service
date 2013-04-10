               <!-- <h3 class="section-title">Self-Help</h3>
                <nav class="sec-nav">
                    <ul>
                        <li><a href="#">Anxiety</a></li>
                        <li><a href="#">Assertiveness</a></li>
                        <li class="active"><a href="#">Career</a></li>
                        <li><a href="#">Change</a></li>
                        <li><a href="#">Confidentiality</a></li>
                        <li><a href="#">Conflict</a></li>
                        <li><a href="#">Counseling</a></li>
                        <li><a href="#">Disability</a></li>
                        <li><a href="#">Education</a></li>
                        <li><a href="#">Grief and Loss</a></li>
                    </ul>
                </nav>-->


<% if Menu(2) %>
	<% with Level(1) %>
		<h3 class="section-title"><% if $LinkOrCurrent = "current" %>$MenuTitle<% else %><a href="$Link">$MenuTitle</a><% end_if %></h2>
	<% end_with %>
<% end_if %>
<nav class="sec-nav">
	<ul>
		<% if Menu(2) %>
			<% loop Menu(2) %>
				<li <% if $LinkOrCurrent = "current" %>class="active"<% end_if %>><a href="$Link">$MenuTitle</a></li>
			<% end_loop %>
		<% end_if %>
	</ul>
</nav>