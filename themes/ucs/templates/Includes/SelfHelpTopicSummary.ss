<div class="blogSummary">
	<h2 class="postTitle"><a href="$Link" title="<% _t('VIEWFULL', 'View full post titled -') %> '$Title'">$MenuTitle</a></h2>

	<% if BlogHolder.ShowFullEntry %>
		$Content
	<% else %> 
		$Content.FirstParagraph(html)
	<% end_if %>
	
	<p class="blogVitals"><a href="$Link" class="readmore" title="Read Full Post">Read the full post</a></p>

	<% if TagsCollection %>
		<p class="tags-summary">
			Tags:
			<% loop TagsCollection %>
				<a href="$Link" title="View all posts tagged '$Tag'" rel="tag">$Tag</a><% if not Last %>,<% end_if %>
			<% end_loop %>
		</p>
	<% end_if %>
</div>
<hr>