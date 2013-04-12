<div class="mod <% if $Image %>photo<% end_if %>">
    <div>
        <h3>$Title</h3>
        <% if $Image %>
        	<img src="$Image.URL" alt="$Title - Image">
        <% end_if %>
    </div>
    $Content
</div>
