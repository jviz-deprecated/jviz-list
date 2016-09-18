//Draw the list
jviz.modules.editableList.prototype.draw = function()
{
  //Reset the container
  jviz.dom.html(this._table.id, '');

  //Display all data
  for(var i = 0; i < this._data.src.length; i++)
  {
    //Get the element
    var el = this._data.src[i];

    //Get the id
    var id = this._row.id + '-' + i;

    //Add the row
    jviz.dom.append(this._table.id, { _tag: 'div', id: id, class: this._row.class });

    //Display the new element
    this.display(el, i, false);
  }

  //Add the events
  for(var i = 0; i < this._data.src.length; i++)
  {
    //Add the events
    this.btnEvents(i, false);
  }
};