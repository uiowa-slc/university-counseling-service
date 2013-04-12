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

<aside>
	<% if InheritSidebarItems %>
		<% if inheritedSidebarItems %>
			<% loop inheritedSidebarItems %>
				<% include SidebarItem %>
			<% end_loop %>
			
		<% end_if %>
	<% end_if %>
	
	<% if SidebarItems %>
		<% loop SidebarItems %>
			<% include SidebarItem %>
		<% end_loop %>
	<% end_if %>
</aside>