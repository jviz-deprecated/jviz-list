//Edit an element
jviz.modules.editableList.prototype.edit = function(index)
{
  //Check the index
  if(typeof index === 'undefined'){ return; }

  //Display the element for edit
  this.display(this._data.src[index], index, true);

  //Add the events
  this.btnEvents(index, true);
};
