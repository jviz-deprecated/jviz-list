//Add the button events
jviz.modules.editableList.prototype.btnEvents = function(index, edit)
{
  //Check the edit mode
  if(typeof edit !== 'boolean'){ var edit = false; }
  //Save this
  var self = this;

  //Check the editable mode
  if(edit === true)
  {
    //Add the save button event
    $('#' + this._btn.save.id + '-' + index).on('click', function(e){ return self.clickSave(e, index); });

    //Add the cancel button event
    $('#' + this._btn.cancel.id + '-' + index).on('click', function(e){ return self.clickCancel(e, index); });

    //Exit
    return;
  }

  //Add the edit button event
  $('#' + this._btn.edit.id + '-' + index).on('click', function(e){ return self.clickEdit(e, index); });

  //Add the delete button event
  $('#' + this._btn.delete.id + '-' + index).on('click', function(e){ return self.clickDelete(e, index); });
};

//Click edit button
jviz.modules.editableList.prototype.clickEdit = function(e, index)
{
  //Call the click event
  var response = this._events.emit('click:edit', this._data.src[index], index);

  //Check the response
  if(response === false){ return; }

  //Edit the element
  this.edit(index);
};

//Click delete button
jviz.modules.editableList.prototype.clickDelete = function(e, index)
{
  //Call the delete event
  var response = this._events.emit('click:delete', this._data.src[index], index);

  //Check the response
  if(response === false){ return; }

  //Delete the element
  this.delete(index);
};

//Click save button
jviz.modules.editableList.prototype.clickSave = function(e, index)
{
  //Clone the object with the data
  var obj = jviz.utils.clone(this._data.src[index]);

  //Read all the columns
  for(var i = 0; i < this._columns.src.length; i++)
  {
    //Get the column
    var col = this._columns.src[i];

    //Check for editable
    if(col.editable === false){ continue; }

    //Update the value
    obj[col.key] = $('#' + this._input.id + '-' + index + '-' + i).val();
  }

  //Call the save event
  var response = this._events.emit('click:save', obj, index);

  //Check the response
  if(response === false){ return; }

  //Save the element
  this.save(index, obj);
};

//Click cancel button
jviz.modules.editableList.prototype.clickCancel = function(e, index)
{
  //Call the cancel event
  var response = this._events.emit('click:cancel', index);

  //Check the response
  if(response === false){ return; }

  //Cancel the edition of the element
  this.cancel(index);
};
