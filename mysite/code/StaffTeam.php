<?php
class StaffTeam extends DataObject {

	public static $db = array(
		"Name" => "Text"
	
	);

	public static $has_many = array(
		"StaffPages" => "StaffPage"
	);
	
	
	public static $summary_fields = array( 
	  'Name' => 'Name',
   );

}
