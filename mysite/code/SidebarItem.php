<?php 

	class SidebarItem extends DataObject {
		
		public static $db = array(
			"Title" => "Text",
			"Content" => "HTMLText",
			
		);
		
		public static $has_one = array (
			"Image" => "Image",
		);
		
		
		public static $belongs_many_many = array (
			"Pages" => "Page"
		
		);
		
		
		public static $summary_fields = array (
			"Title",
		//	'SortOrder'
	
		);
		
		
		function getCMSFields() { 
			$fields = new FieldList(); 
			
			$fields->push( new TextField( 'Title', 'Title' ));
			//$fields->push( new TextField( 'SortOrder', 'SortOrder' ));
			
			$fields->push( new HTMLEditorField( 'Content', 'Content' ));
			$fields->push( new UploadField( 'Image', 'Image' ));

			return $fields; 
		}
		
	}