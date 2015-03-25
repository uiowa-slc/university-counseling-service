<div class="main-bg"></div>	
<section class="container content-wrapper clearfix">
      $Breadcrumbs
      <section class="staff-content main-content">
      	$Form
      	$Content
      	<% loop Teams %>
                  
      	     <h2 class="staff-title">$Title</h2>

                  <ul class="staff-list">
                  <% loop $SortedStaffPages %>
                        <% include StaffPageListItem %>
                  <% end_loop %>
                        <li class="filler"></li>
                        <li class="filler"></li>
                  </ul>
                  
      	<% end_loop %>
      	
      </section>
      <section class="sec-content">
            <% include SideNav %>
      </section>
</section>
<% include TopicsAndNews %>
