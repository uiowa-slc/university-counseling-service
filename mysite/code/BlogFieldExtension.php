<?php



class BlogFieldExtension extends DataExtension {

    public function getCMSFields() {

      $this->extend('updateCMSFields', $fields);
      return $fields;
    }


    public function updateCMSFields(FieldList $fields) {
      $fields->removeByName("Author");

      if($this->owner->ClassName == "BlogEntry"){
        $fields->removeByName("Date");
        $fields->addFieldToTab("Root.Main", new LiteralField("TagNotice", "<p>Note: You must tag news entries with <strong>news</strong> to display them on most pages.</p>"), "Content");
      }else {

        $fields->renameField("Date", "Published Date");
      }

  }



}