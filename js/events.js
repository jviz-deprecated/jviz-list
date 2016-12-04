//Add the events
jviz.modules.editableList.prototype.events = function(index, edit)
{
  //Save this
  var self = this;

  //Check if edit is active
  if(edit === true)
  {
    //Add the save button event
    jviz.dom.on(this._btn.save.id.replace('{index}', index), 'click', function(e){ return self.eventSave(e, index); });

    //Add the cancel button event
    jviz.dom.on(this._btn.cancel.id.replace('{index}', index), 'click', function(e){ return self.eventCancel(e, index); });
  }
  else
  {
    //Add the edit button event
    jviz.dom.on(this._btn.edit.id.replace('{index}', index), 'click', function(e){ return self.eventEdit(e, index); });

    //Add the delete button event
    jviz.dom.on(this._btn.delete.id.replace('{index}', index), 'click', function(e){ return self.eventDelete(e, index); });
  }

  //Return this
  return this;
};

//Click edit button
jviz.modules.editableList.prototype.eventEdit = function(e, index)
{
  //Call the click event
  var response = this._events.emit('click:edit', this._data.src[index], index);

  //Check the response
  if(response === false){ return; }

  //Edit the element
  this.edit(index);
};

//Click delete button
jviz.modules.editableList.prototype.eventDelete = function(e, index)
{
  //Call the delete event
  var response = this._events.emit('click:delete', this._data.src[index], index);

  //Check the response
  if(response === false){ return; }

  //Delete the element
  this.delete(index);
};

//Click save button
jviz.modules.editableList.prototype.eventSave = function(e, index)
{
  //Clone the object with the data
  var obj = jviz.object.clone(this._data.src[index]);

  //Read all the columns
  for(var i = 0; i < this._columns.src.length; i++)
  {
    //Get the column
    var col = this._columns.src[i];

    //Check for editable
    if(col.editable === false){ continue; }

    //Update the value
    obj[col.key] = jviz.dom.val(this._input.id.replace('{index}', index).replace('{column}', i));
  }

  //Call the save event
  var response = this._events.emit('click:save', obj, index);

  //Check the response
  if(response === false){ return; }

  //Save the element
  this.save(index, obj);
};

//Click cancel button
jviz.modules.editableList.prototype.eventCancel = function(e, index)
{
  //Call the cancel event
  var response = this._events.emit('click:cancel', index);

  //Check the response
  if(response === false){ return; }

  //Cancel the edition of the element
  this.cancel(index);
};
