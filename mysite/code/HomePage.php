<?php
class HomePage extends Page {

	public static $db = array(
		"Feature1Title" => "Varchar(155)",
		"Feature1Content" => "HTMLText",
		"Feature1YouTubeEmbed" => "HTMLText",

		"Feature2Title" => "Varchar(155)",
		"Feature2Content" => "HTMLText",
		"Feature2YouTubeEmbed" => "HTMLText",
		
		"Feature3Title" => "Varchar(155)",
		"Feature3Content" => "HTMLText",
		"Feature3YouTubeEmbed" => "HTMLText"
	);

	public static $has_one = array(
	
		"Feature1Link" => "SiteTree",
		"Feature2Link" => "SiteTree",
		"Feature3Link" => "SiteTree",
	
		"Feature1Image" => "Image",
		"Feature2Image" => "Image",
		"Feature3Image" => "Image",
	);

	public static $has_many = array(
	);

	public static $allowed_children = array("StaffPage");
	
	public function getCMSFields(){
		$f = parent::getCMSFields();
		$f->removeByName("Content");
		
		$f->addFieldToTab("Root.Feature1", new TextField("Feature1Title", "Title"));
		$f->addFieldToTab("Root.Feature1", new TreeDropdownField("Feature1LinkID", "Link to this page", "SiteTree"));
		$f->addFieldToTab("Root.Feature1", new HTMLEditorField("Feature1Content", "Content Preview"));
		$f->addFieldToTab("Root.Feature1", new UploadField("Feature1Image", "Image (350 x 180 pixels)"));
		$f->addFieldToTab("Root.Feature1", new TextField("Feature1YouTubeEmbed", "Use a YouTube embed code instead of an image:"));
		
		$f->addFieldToTab("Root.Feature2", new TextField("Feature2Title", "Title"));
		$f->addFieldToTab("Root.Feature2", new TreeDropdownField("Feature2LinkID", "Link to this page", "SiteTree"));
		$f->addFieldToTab("Root.Feature2", new HTMLEditorField("Feature2Content", "Content Preview"));
		$f->addFieldToTab("Root.Feature2", new UploadField("Feature2Image", "Image (350 x 180 pixels)"));
		$f->addFieldToTab("Root.Feature2", new TextField("Feature2YouTubeEmbed", "Use a YouTube embed code instead of an image:"));
		
		$f->addFieldToTab("Root.Feature3", new TextField("Feature3Title", "Title"));
		$f->addFieldToTab("Root.Feature3", new TreeDropdownField("Feature3LinkID", "Link to this page", "SiteTree"));
		$f->addFieldToTab("Root.Feature3", new HTMLEditorField("Feature3Content", "Content Preview"));
		$f->addFieldToTab("Root.Feature3", new UploadField("Feature3Image", "Image (350 x 180 pixels)"));		
		$f->addFieldToTab("Root.Feature3", new TextField("Feature3YouTubeEmbed", "Use a YouTube embed code instead of an image:"));
		
		//$gridFieldConfig = GridFieldConfig_RecordEditor::create();
		//$gridFieldConfig->addComponent(new GridFieldSortableRows('SortOrder'));
		
		
		/*$gridField = new GridField("StaffTeam", "Staff Teams", StaffTeam::get(), GridFieldConfig_RecordEditor::create());
		$f->addFieldToTab("Root.Main", $gridField); // add the grid field to a tab in the CMS	*/
		return $f;
	}
}
class HomePage_Controller extends Page_Controller {

	/**
	 * An array of actions that can be accessed via a request. Each array element should be an action name, and the
	 * permissions or conditions required to allow the user to access it.
	 *
	 * <code>
	 * array (
	 *     'action', // anyone can access this action
	 *     'action' => true, // same as above
	 *     'action' => 'ADMIN', // you must have ADMIN permissions to access this action
	 *     'action' => '->checkAction' // you can only access this action if $this->checkAction() returns true
	 * );
	 * </code>
	 *
	 * @var array
	 */
	public static $allowed_actions = array (
	);

	public function init() {
		parent::init();

	}

}