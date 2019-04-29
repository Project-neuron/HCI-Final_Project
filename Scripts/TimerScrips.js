document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        document.getElementById("buttons").innerHTML=` `
        document.getElementById("controls").innerHTML=`
    <div class="col-sm">
        <div class=timeInput>
          <div class="col">
              <label class="inputLabel2">Color transition every </label>
              <input type="text" class=" timeHolder" placeholder="HH">
              <label >:</label>
              <input type="text" class="timeHolder" placeholder="MM">
              <label >:</label>
              <input type="text" class="timeHolder" placeholder="SS">
          </div>
      </div>
    </div>
    <div class="btn-control">
        <button type="button" class="btn btn-warning">Pause</button>
        <button type="button" class="btn btn-success">Start</button> 
        <button type="button" class="btn btn-danger">Stop</button>
    </div>`
    } else {
        
        document.getElementById("buttons").innerHTML=` 
        <button type="button" class="btn btn-warning">Pause</button>
        <button type="button" class="btn btn-success">Start</button> 
        <button type="button" class="btn btn-danger">Stop</button>`
        document.getElementById("controls").innerHTML=`
        <div class="col-sm">
        <div class=timeInput>
          <div class="row">
              <label class="inputLabel">Work</label>
              <input type="text" class="timeHolder timeHolder1" placeholder="HH">
              <label class="colon" >:</label>
              <input type="text" class="timeHolder" placeholder="MM">
              <label class="colon">:</label>
              <input type="text" class="timeHolder" placeholder="SS">
          </div>
      </div>
    </div>
    <div class="col-sm">
        <div class=timeInput>
          <div class="row">
              <label class="inputLabel2">Break</label>
              <input type="text" class=" timeHolder" placeholder="HH">
              <label >:</label>
              <input type="text" class="timeHolder" placeholder="MM">
              <label >:</label>
              <input type="text" class="timeHolder" placeholder="SS">
          </div>
      </div>
    </div>
    <div class="col-sm">
      <button type="button" class="btn btn-success submit">Submit</button> 
    </div>`;
      }
    });
  });