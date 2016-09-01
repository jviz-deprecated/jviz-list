//Cancel the element edit
jviz.modules.editableList.prototype.cancel = function(index)
{
  //Check the index
  if(typeof index === 'undefined'){ return; }

  //Display the normal element
  this.display(this._data.src[index], index, false);

  //Add the events
  this.btnEvents(index, false);
};
