	<section class="container content-wrapper clearfix">
            $Breadcrumbs
            <section class="main-content">
            	$Form
            	$Content
            	
            	<% loop StaffTeams %>
            	<h2>$Title</h2>
            		<% loop $StaffPages %>
            			<p>$FirstName $LastName</p>
            		<% end_loop %>
            	<% end_loop %>
            	
            </section>
            <section class="sec-content">
            	<% include SideNav %>
            </section>
        </section>
      <% include TopicsAndNews %>
    </div>