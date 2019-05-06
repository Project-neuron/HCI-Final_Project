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

    var timer =  new Timer();
    

    
    $('.values').html(timer.getTimeValues().toString());
    $('.btn-success').click(function () {
    var hours = $('#workHH').val()
    var mins = $('#workMM').val()
    var secs = $('#workSS').val()
    
    
    if(hours == ""){
      hours = 0;
    }
    if(mins == ""){
      mins = 0;
    }
    if(secs == ""){
      secs = 0;
    }
    var totalSeconds = parseInt(hours) * 3600 +parseInt(mins) * 60 + parseInt(secs);
    timer.start({countdown: true, startValues: {seconds: totalSeconds}});
    });

    $('.btn-warning').click(function () {
      timer.pause();
    });
    $('.btn-danger').click(function () {
      timer.reset();
    });
    timer.addEventListener('secondsUpdated', function (e) {
    $('.values').html(timer.getTimeValues().toString());
    });
    timer.addEventListener('started', function (e) {
     $('.values').html(timer.getTimeValues().toString());
    });
    timer.addEventListener('reset', function (e) {
      $('.values').html(timer.getTimeValues().toString());
  });

    timer.addEventListener('targetAchieved', function (e) {
    var bhours = $('#breakkHH').val()
    var bmins = $('#breakMM').val()
    var bsecs = $('#breakSS').val()
    if(bhours == ""){
      hours = 0;
    }
    if(bmins == ""){
      mins = 0;
    }
    if(bsecs == ""){
      secs = 0;
    }
    var totalSeconds = parseInt(bhours) * 3600 +parseInt(bmins) * 60 + parseInt(bsecs);
    timer.start({countdown: true, startValues: {seconds: totalSeconds}});
    timer.pause();
     
  });



});


              