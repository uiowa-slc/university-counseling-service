    <div class="main-bg">
        
        <section class="container content-wrapper clearfix">
            $Breadcrumbs
            <section class="main-content">
				<% if SelectedTag %>
					<h1>Self-Help/$SelectedTag</h1>
				<% else %>
					<h1>$Title</h1>
				<% end_if %>
					
				<% if BlogEntries %>
					<% loop BlogEntries %>
						<% include SelfHelpTopicSummary %>
					<% end_loop %>
				<% else %>
					<h2><% _t('NOENTRIES', 'There are no entries with this tag.') %></h2>
				<% end_if %>
				
				<% include BlogPagination %>
            </section>
            <section class="sec-content">
            	<%-- include SideNav --%>
            	<% include BlogSideBar %>
            </section>
        </section>
        <% include TopicsAndNews %>
        
    </div>