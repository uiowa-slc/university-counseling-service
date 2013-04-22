<div class="main-bg">	
<section class="container content-wrapper clearfix">
            $Breadcrumbs
            <section class="staff-content">
            	$Form
            	$Content
            	<% loop StaffTeams %>
                        
            	     <h2 class="staff-title">$Title</h2>
                       <ul class="staff-list clearfix">
            		<% loop $StaffPages %>
                              <li>
                                    <a href="$Link" class="staff-link">
                                          <% if $Photo %><img src="$Photo.SetWidth(235).URL" alt="$FirstName $LastName"><% end_if %>
                                          <span class="staff-name">$FirstName $LastName</span>
                                    </a>
                              </li>
            		<% end_loop %>
                        </ul>
                        <% if $Title == "Practicum Doctoral Trainees" %>
                              <p>test</p>
                        <% end_if %>
            	<% end_loop %>
            	
            </section>
        </section>
      <% include TopicsAndNews %>
</div>