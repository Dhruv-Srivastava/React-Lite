const formForElement=`<form id="form--element">
<div class="elementContainer">
  <label for="element-select">Choose the type of element:</label>
  <select name="element" id="element-select">
    <option value="div">div</option>
    <option value="h1">h1</option>
    <option value="p">p</option>
    <option value="a">a</option>
    <option value="button">button</option>
  </select>
</div>
<div class="attributeContainer">
  <fieldset>
    <legend>Choose attributes:</legend>
    <div>
      <input type="checkbox" name="bg-red" id="bg-red" value="bg-red">
      <label for="bg-red">Red Background</label>
    </div>
    <div>
      <input type="checkbox" name="border" id="border" value="border">
      <label for="bg-red">Solid Border</label>
    </div>
    <div>
      <input type="checkbox" name="margin" id="margin" value="margin">
      <label for="margin">Margin</label>
    </div>
  </fieldset>
</div>
<div class="textContainer">
  <div>
    <label for="element-text">Text for element</label>
    <input type="text" id="element-text">
  </div>
  <div>
    <label for="a-href">href for anchor element</label>
    <input type="text" id="a-href">
  </div>
</div>
<button>Submit</button>
</form>`


const formForNumber=`<form id="form--number">
<input type="number" placeholder="Enter the number of elements you want for current level." class="input--number" min=1>
<button>Submit</button> 
</form>`

export {formForElement,formForNumber};