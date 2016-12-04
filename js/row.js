//Draw a row
jviz.modules.editableList.prototype.row = function(index, edit)
{
  //Check for edit mode
  if(typeof edit === 'undefined'){ var edit = false; }

  //Save this
  var self = this;

  //Get the element
  var el = this._data.src[index];

  //Get the row id
  var row_id = this._row.id.replace('{index}', index);

  //Clear the row
  jviz.dom.html(row_id, '');

  //Check the info column
  if(this._info.visible === true)
  {
    //Get the info cell id
    var info_id = this._cell.id.replace('{index}', index).replace('{column}', 'info');

    //Get the title ID
    var title_id = this._title.id.replace('{index}', index);

    //Get the title
    var title_text = (typeof this._info.title === 'function') ? this._info.title(el, index) : this._info.title.toString();

    //Get the detail ID
    var detail_id = this._detail.id.replace('{index}', index);

    //Get the detail
    var detail_text = (typeof this._info.detail === 'function') ? this._info.detail(el, index) : this._info.detail.toString();

    //Add the info cell
    jviz.dom.append(row_id, { id: info_id, class: this._cell.class });

    //Add the title element
    jviz.dom.append(info_id, { id: title_id, class: this._title.class, _html: title_text });

    //Add the detail element
    jviz.dom.append(info_id, { id: detail_id, class: this._detail.class, _html: detail_text });
  }

  //Read all the columns
  for(var i = 0; i < this._columns.src.length; i++)
  {
    //Get the column
    var col = this._columns.src[i];

    //Generate the cell id
    var cell_id = this._cell.id.replace('{index}', index).replace('{column}', i);

    //Generate the new cell
    jviz.dom.append(row_id, { id: cell_id, class: this._cell.class });

    //Check if is editable
    if(edit === true && col.editable === true)
    {
      //Get the input id
      var input_id = this._input.id.replace('{index}', index).replace('{column}', i);

      //Check for select input
      if(col.type === 'select')
      {
        //Add the select
        jviz.dom.append(cell_id, { _tag: 'select', id: input_id, class: this._input.class });

        //Add the options
        for(var j = 0; j < col.options.length; j++)
        {
          //Get the option id
          var opt_id = this._input.option.id.replace('{index}', index).replace('{column}', i).replace('{option}', j);

          //Get the option value
          var opt_value = col.options[j].value;

          //Get the option name
          var opt_name = col.options[j].name;

          //Append the option
          jviz.dom.append(input_id, { _tag: 'option', id: opt_id, value: opt_value, _html: opt_name });
        }
      }
      else
      {
        //Add the input
        jviz.dom.append(cell_id, { _tag: 'input', type: col.type, id: input_id, class: this._input.class });
      }
    }
    else
    {
      //Get the cell value
      var value_id = this._value.id.replace('{index}', index).replace('{column}', i)

      //Get the value text
      var value_text = el[col.key];

      //Add the cell value
      jviz.dom.append(cell_id, { id: value_id, class: this._value.class, _html: value_text });
    }

    //Get the helper id
    var helper_id = this._helper.id.replace('{index}', index).replace('{column}', i);

    //Get the helper text
    var helper_text = col.helper;

    //Add the helper
    jviz.dom.append(cell_id, { id: helper_id, class: this._helper.class, _html: helper_text });
  }

  //Check if is editable
  if(this._editable === false){ return this; }

  //Get the last cell id
  var btn_id = this._cell.id.replace('{index}', index).replace('{column}', 'last');

  //Add the last cell
  jviz.dom.append(row_id, { id: btn_id, class: this._cell.class });

  //Check the edit mode
  if(edit === true)
  {
    //Get the cancel button id
    var btn_cancel_id = this._btn.cancel.id.replace('{index}', index);

    //Get the cancel button class
    var btn_cancel_class = this._btn.class + ' ' + this._btn.cancel.class;

    //Add the save button
    jviz.dom.append(btn_id, { id: btn_cancel_id, class: btn_cancel_class, title: this._btn.cancel.text });
    
    //Get the save button id
    var btn_save_id = this._btn.save.id.replace('{index}', index);

    //Get the save button class
    var btn_save_class = this._btn.class + ' ' + this._btn.save.class;

    //Add the save button
    jviz.dom.append(btn_id, { id: btn_save_id, class: btn_save_class, title: this._btn.save.text });
  }
  else
  {
    //Get the delete button id
    var btn_delete_id = this._btn.delete.id.replace('{index}', index);

    //Get the delete button class
    var btn_delete_class = this._btn.class + ' ' + this._btn.delete.class;

    //Add the save button
    jviz.dom.append(btn_id, { id: btn_delete_id, class: btn_delete_class, title: this._btn.delete.text });

    //Get the edit button id
    var btn_edit_id = this._btn.edit.id.replace('{index}', index);

    //Get the cancel button class
    var btn_edit_class = this._btn.class + ' ' + this._btn.edit.class;

    //Add the save button
    jviz.dom.append(btn_id, { id: btn_edit_id, class: btn_edit_class, title: this._btn.edit.text });
  }

  //Add the button events
  this.events(index, edit);

  //Set this row as active
  this._data.active[index] = edit;

  //Return this
  return this;
};
