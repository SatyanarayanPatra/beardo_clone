function allDiv() {

    return `<div id="container">
    <div id="row1">
    <h2 id="getCount" style="color: red; font-weight: bolder"></h2>
      <div id="divRight">
        <select name="" id="selectOrder">
          <option value="select" style="font-weight: lighter">
            RCOMENDED
          </option>
          <option value="low to high" style="font-weight: lighter">
            LOW TO HIGH
          </option>
          <option value="high to low" style="font-weight: lighter">
            HIGH TO LOW
          </option>
        </select>
      </div>
    </div>
    <div id="row2"></div>
  </div>`
}

export default allDiv;