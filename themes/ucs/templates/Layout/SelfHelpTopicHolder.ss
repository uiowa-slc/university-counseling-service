    <div class="main-bg">
        
        <section class="container content-wrapper clearfix">
            $Breadcrumbs
            <section class="main-content">

            <h1>$Title</h1>
					<% if SelectedTag %>
						<div class="selectedTag">
							<em>
							<% _t('VIEWINGTAGGED', 'Viewing entries tagged with') %> '$SelectedTag' test
							</em>
						</div>
					<% else_if SelectedDate %>
						<div class="selectedTag">
							<em>
							<% _t('VIEWINGPOSTEDIN', 'Viewing entries posted in') %> $SelectedNiceDate test
							</em>
						</div>
					<% end_if %>
					
					<% if BlogEntries %>
						<% loop BlogEntries %>
							<% include SelfHelpTopicSummary %>
						<% end_loop %>
					<% else %>
						<h2><% _t('NOENTRIES', 'There are no blog entries with this tag.') %></h2>
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