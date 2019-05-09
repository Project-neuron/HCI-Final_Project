document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.querySelector('input[type="checkbox"]');
    if(checkbox.checked == false){
    var timer =  new Timer();
    var breakTime = false;
    var totalSeconds = 0;
    var timeIncrement = 0;
    var shiftTime = 0;
    var colorIndex = 0;
    var revrseColorIndex = 9;
    
    

    
    $('.values').html(timer.getTimeValues().toString());
    $('.btn-success').click(function () {
    
    if(breakTime == false){
      var hours = $('#workHH').val()
      var mins = $('#workMM').val()
      var secs = $('#workSS').val()
    }
    else{
    var hours = $('#breakHH').val()
    var mins = $('#breakMM').val()
    var secs = $('#breakSS').val()
    

    }
    
    
    if(hours == ""){
      hours = 0;
    }
    if(mins == ""){
      mins = 0;
    }
    if(secs == ""){
      secs = 0;
    }
    totalSeconds = parseInt(hours) * 3600 +parseInt(mins) * 60 + parseInt(secs);
    timeIncrement = Math.floor(totalSeconds / 10);
    shiftTime = totalSeconds - timeIncrement;
    timer.start({countdown: true, startValues: {seconds: totalSeconds}});
    });

    $('.btn-warning').click(function () {
      timer.pause();
    });

   
    $('.close').click(function(){
      var status = $('.close').attr("aria-expanded")
      if(status == "true"){
        $('.symbol').html(`&xwedge;`)
      }
      else{
        $('.symbol').html(`&xvee;`)

      }
    })
    $('.btn-danger').click(function () {
      timer.stop();
      $('.values').html(`00:00:00`)

    });
    timer.addEventListener('secondsUpdated', function (e) {
        $('.values').html(timer.getTimeValues().toString());
       if(breakTime == false && totalSeconds >= 10){
          var csecs = timer.getTotalTimeValues().seconds  
          var currentTime = csecs; 
          var colors = ["#fff7f9","#ffd6df", "##ffc4bc", "#ffb0a5","#ffa79b","#ff9789","#ff9082", "#ff8475", "#ff7666", "#ff6856"]
          if(currentTime == shiftTime ){
            $(".overlay").css({"backgroundColor": colors[colorIndex]});
            colorIndex++;
            shiftTime = shiftTime - timeIncrement;


          }
        }
          else if(breakTime == true && totalSeconds>=10){ 
          var csecs = timer.getTotalTimeValues().seconds  
          var currentTime = csecs; 
          var colors = ["#fff7f9","#ffd6df", "##ffc4bc", "#ffb0a5","#ffa79b","#ff9789","#ff9082", "#ff8475", "#ff7666", "#ff6856"]
          if(currentTime == shiftTime ){
            $(".overlay").css({"backgroundColor": colors[revrseColorIndex]});
            revrseColorIndex--;
            shiftTime = shiftTime - timeIncrement;

          }
          
       }
    });
    timer.addEventListener('started', function (e) {
     $('.values').html(timer.getTimeValues().toString());
    });
    

    timer.addEventListener('targetAchieved', function (e) {
      if(breakTime == false){
        breakTime = true;
      }
      else{
        breakTime = false;
      }
      
      if(breakTime == true){
        var bhours = $('#breakHH').val()
        var bmins = $('#breakMM').val()
        var bsecs = $('#breakSS').val()
        if(bhours == ""){
          bhours = 0;
        }
        if(bmins == ""){
          bmins = 0;
        }
        if(bsecs == ""){
          bsecs = 0;
        }

        if(bhours == 0){
          var stringHours = "00"; 
        }
        else{
          stringHours = bhours.toString();
          if(stringHours.length < 2){
            stringHours = "0".concat(stringHours)
          }
        }
        if(bmins==0){
          var stringMins = "00"
        }
        else{
          stringMins = bmins.toString();
          if(stringMins.length < 2){
            stringMins = "0".concat(stringMins)
          }
        }
        if(bsecs ==0){
          var stringSecs = "00"
        }
        else{
          stringSecs = bsecs.toString();
          if(stringSecs.length < 2){
            stringSecs = "0".concat(stringSecs)
          }
        }
        $('.values').html(stringHours.concat(":", stringMins,":", stringSecs))
        revrseColorIndex = 9;
  }
  else{
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

    if(hours == 0){
      var stringHours = "00"; 
    }
    else{
      stringHours = hours.toString();
      if(stringHours.length < 2){
        stringHours = "0".concat(stringHours)
      }
    }
    if(mins==0){
      var stringMins = "00"
    }
    else{
      stringMins = mins.toString();
      if(stringMins.length < 2){
        stringMins = "0".concat(stringMins)
      }
    }
    if(secs ==0){
      var stringSecs = "00"
    }
    else{
      stringSecs = secs.toString();
      if(stringSecs.length < 2){
        stringSecs = "0".concat(stringSecs)
      }
    }
    $('.values').html(stringHours.concat(":", stringMins,":", stringSecs))
    colorIndex = 0;

  }
 
  
    
     
  });
}
else{
  var timer =  new Timer();
  var totalSeconds = 0;
  var timeIncrement = 0;
  var shiftTime = 0;
  var colorIndex = 0;

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
    totalSeconds = parseInt(hours) * 3600 +parseInt(mins) * 60 + parseInt(secs);
    timeIncrement = Math.floor(totalSeconds / 10);
    shiftTime = totalSeconds - timeIncrement;
    timer.start();
    });

    $('.btn-warning').click(function () {
      timer.pause();
    });
    $('.btn-danger').click(function () {
      timer.stop();
      $('.values').html(`00:00:00`)

    });
    timer.addEventListener('secondsUpdated', function (e) {
        $('.values').html(timer.getTimeValues().toString());
       if(breakTime == false && totalSeconds >= 10){ 
          var csecs = timer.getTotalTimeValues().seconds  
          var currentTime =  csecs; 
          var colors = ["#fff7f9","#ffd6df", "##ffc4bc", "#ffb0a5","#ffa79b","#ff9789","#ff9082", "#ff8475", "#ff7666", "#ff6856"]
          if(currentTime == shiftTime ){
            $(".overlay").css({"backgroundColor": colors[colorIndex]});
            colorIndex++;
            shiftTime = shiftTime - timeIncrement;


          }
        }
          else if(breakTime == true && totalSeconds>=10){ 
          var csecs = timer.getTotalTimeValues().seconds  
          var currentTime = csecs; 
          var colors = ["#fff7f9","#ffd6df", "##ffc4bc", "#ffb0a5","#ffa79b","#ff9789","#ff9082", "#ff8475", "#ff7666", "#ff6856"]
          if(currentTime == shiftTime ){
            $(".overlay").css({"backgroundColor": colors[revrseColorIndex]});
            revrseColorIndex--;
            shiftTime = shiftTime - timeIncrement;

          }
          
       }
    });
    timer.addEventListener('started', function (e) {
     $('.values').html(timer.getTimeValues().toString());
    });
    

    timer.addEventListener('targetAchieved', function (e) {
      if(breakTime == false){
        breakTime = true;
      }
      else{
        breakTime = false;
      }
      
      if(breakTime == true){
        var bhours = $('#breakHH').val()
        var bmins = $('#breakMM').val()
        var bsecs = $('#breakSS').val()
        if(bhours == ""){
          bhours = 0;
        }
        if(bmins == ""){
          bmins = 0;
        }
        if(bsecs == ""){
          bsecs = 0;
        }

        if(bhours == 0){
          var stringHours = "00"; 
        }
        else{
          stringHours = bhours.toString();
          if(stringHours.length < 2){
            stringHours = "0".concat(stringHours)
          }
        }
        if(bmins==0){
          var stringMins = "00"
        }
        else{
          stringMins = bmins.toString();
          if(stringMins.length < 2){
            stringMins = "0".concat(stringMins)
          }
        }
        if(bsecs ==0){
          var stringSecs = "00"
        }
        else{
          stringSecs = bsecs.toString();
          if(stringSecs.length < 2){
            stringSecs = "0".concat(stringSecs)
          }
        }
        $('.values').html(stringHours.concat(":", stringMins,":", stringSecs))
        revrseColorIndex = 9;
  }
  else{
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

    if(hours == 0){
      var stringHours = "00"; 
    }
    else{
      stringHours = hours.toString();
      if(stringHours.length < 2){
        stringHours = "0".concat(stringHours)
      }
    }
    if(mins==0){
      var stringMins = "00"
    }
    else{
      stringMins = mins.toString();
      if(stringMins.length < 2){
        stringMins = "0".concat(stringMins)
      }
    }
    if(secs ==0){
      var stringSecs = "00"
    }
    else{
      stringSecs = secs.toString();
      if(stringSecs.length < 2){
        stringSecs = "0".concat(stringSecs)
      }
    }
    $('.values').html(stringHours.concat(":", stringMins,":", stringSecs))
    colorIndex = 0;

  }
 
  
    
     
  });

  


  
}

checkbox.addEventListener('change', function () {
  if (checkbox.checked) {
    document.getElementById("values").html=`00:00:00`
    document.getElementById("buttons").innerHTML=` `
    document.getElementById("controls").innerHTML=`
<div class="col-sm">
    <div class=timeInput>
      <div class="col">
          <label class="transition Label2">Color transition time </label>
          <input type="text" class=" timeHolder" id="workHH" placeholder="HH">
          <label >:</label>
          <input type="text" class="timeHolder" id="workMM" placeholder="MM">
          <label >:</label>
          <input type="text" class="timeHolder" id="workSS" placeholder="SS">
      </div>
  </div>
</div>
<div class="btn-control">
    <button type="button" class="btn btn-warning">Pause</button>
    <button type="button" class="btn btn-success">Start</button> 
    <button type="button" class="btn btn-danger">Reset</button>
</div>`



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
        totalSeconds = parseInt(hours) * 3600 +parseInt(mins) * 60 + parseInt(secs);
        timeIncrement = totalSeconds;
        shiftTime = timeIncrement;
        timer.start();
        });
    
        $('.btn-warning').click(function () {
          timer.pause();
        });
        $('.btn-danger').click(function () {
          timer.stop();
          $('.values').html(`00:00:00`)
    
        });

        timer.addEventListener('secondsUpdated', function (e) {
          $('.values').html(timer.getTimeValues().toString());
            var csecs = timer.getTotalTimeValues().seconds  
            var currentTime = csecs; 
            var colors = ["#fff7f9","#ffd6df", "##ffc4bc", "#ffb0a5","#ffa79b","#ff9789","#ff9082", "#ff8475", "#ff7666", "#ff6856"]
            var shiftTime = timeIncrement;
            if(currentTime == shiftTime ){
              $(".overlay").css({"backgroundColor": colors[colorIndex]});
              colorIndex++;
              timeIncrement = timeIncrement + totalSeconds;
  
  
            }
            });

         


} else {
    
    document.getElementById("buttons").innerHTML=` 
    <button type="button" class="btn btn-warning">Pause</button>
    <button type="button" class="btn btn-success">Start</button> 
    <button type="button" class="btn btn-danger">Reset</button>`
    document.getElementById("controls").innerHTML=`
    <div class="col-sm">
            <div class=timeInput>
              <div class="row">
                  <label class="inputLabel">Work</label>
                  <input type="text" class="timeHolder timeHolder1" id="workHH" placeholder="HH">
                  <label >:</label>
                  <input type="text" class="timeHolder" id="workMM" placeholder="MM">
                  <label >:</label>
                  <input type="text" class="timeHolder" id="workSS" placeholder="SS">
              </div>
          </div>
        </div>
        <div class="col-sm">
            <div class=timeInput>
              <div class="row">
                  <label class="inputLabel2">Break</label>
                  <input type="text" class=" timeHolder" id="breakHH" placeholder="HH">
                  <label >:</label>
                  <input type="text" class="timeHolder" id="breakMM" placeholder="MM">
                  <label >:</label>
                  <input type="text" class="timeHolder" id="breakSS" placeholder="SS">
              </div>
          </div>
        </div>`;

        $('.values').html(timer.getTimeValues().toString());
        $('.btn-success').click(function () {
        
        if(breakTime == false){
          var hours = $('#workHH').val()
          var mins = $('#workMM').val()
          var secs = $('#workSS').val()
        }
        else{
        var hours = $('#breakHH').val()
        var mins = $('#breakMM').val()
        var secs = $('#breakSS').val()
        
    
        }
        
        
        if(hours == ""){
          hours = 0;
        }
        if(mins == ""){
          mins = 0;
        }
        if(secs == ""){
          secs = 0;
        }
        totalSeconds = parseInt(hours) * 3600 +parseInt(mins) * 60 + parseInt(secs);
        timeIncrement = Math.floor(totalSeconds / 10);
        shiftTime = Math.floor(totalSeconds - timeIncrement);
        timer.start({countdown: true, startValues: {seconds: totalSeconds}});
        });
    
        $('.btn-warning').click(function () {
          timer.pause();
        });
        $('.btn-danger').click(function () {
          timer.stop();
          $('.values').html(`00:00:00`)
    
        });

        timer.addEventListener('secondsUpdated', function (e) {
          $('.values').html(timer.getTimeValues().toString());
         if(breakTime == false && totalSeconds >= 10){ 
            var csecs = timer.getTotalTimeValues().seconds  
            var currentTime =  csecs; 
            var colors = ["#ffe8ed","#ffd6df", "##ffc4bc", "#ffb0a5","#ffa79b","#ff9789","#ff9082", "#ff8475", "#ff7666", "#ff6856"]
            if(currentTime == shiftTime ){
              $(".overlay").css({"backgroundColor": colors[colorIndex]});
              colorIndex++;
              shiftTime = shiftTime - timeIncrement;
  
  
            }
          }
            else if(breakTime == true && totalSeconds>=10){
            var csecs = timer.getTotalTimeValues().seconds  
            var currentTime =  csecs; 
            var colors = ["#ffeaef","#ffd6df", "##ffc4bc", "#ffb0a5","#ffa79b","#ff9789","#ff9082", "#ff8475", "#ff7666", "#ff6856"]
            if(currentTime == shiftTime ){
              $(".overlay").css({"backgroundColor": colors[revrseColorIndex]});
              revrseColorIndex--;
              shiftTime = shiftTime - timeIncrement;
  
            }
            
         }
      });

        timer.addEventListener('started', function (e) {
          $('.values').html(timer.getTimeValues().toString());
         });

         $()
         
     

  }
});





});


              