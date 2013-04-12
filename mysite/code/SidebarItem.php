<?php 

	class SidebarItem extends DataObject {
		
		public static $db = array(
			"Title" => "Text",
			"Content" => "HTMLText",
			"SortOrder" => "Int"

		);
		
		public static $has_one = array (
			"Image" => "Image",
			"Page" => "Page",
			
		);
		public static $summary_fields = array (
			"Title"
		);
		public static $default_sort = "SortOrder";
		
		function getCMSFields() { 
			$fields = new FieldList(); 
			
			$fields->push( new TextField( 'Title', 'Title' ));
			$fields->push( new HTMLEditorField( 'Content', 'Content' ));
			$fields->push( new UploadField( 'Image', 'Image' ));

			return $fields; 
		}
		
	}