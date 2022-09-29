// Function to format 1 in 01
const zeroFill = (n) => {
  return ("0" + n).slice(-2);
};

// Creates interval
const interval = setInterval(() => {
  // Get current time
  const now = new Date();

  //dayName
  const day = now.getDay();
  const weekdays = new Array(7);
  weekdays[0] = "Sunday";
  weekdays[1] = "Monday";
  weekdays[2] = "Tuesday";
  weekdays[3] = "Wednesday";
  weekdays[4] = "Thursday";
  weekdays[5] = "Friday";
  weekdays[6] = "Saturday";

  // Format date as in mm/dd/aaaa hh:ii:ss
  const dateTime = `

            <div class="date-one">
                <span class="dateV day"> ${weekdays[day]}</span>
            </div>

            <div class="date-two">
                <span class="dateV date"> ${zeroFill(now.getUTCDate())}-</span>

                <span class="dateV montth"> ${zeroFill(now.getMonth() + 1)}-</span>

                <span class="dateV year"> ${zeroFill(now.getFullYear())}</span>
            </div>


            <div class="date-tree">
                <span class="dateV hours"> ${zeroFill(now.getHours())}:</span>

                <span class="dateV minutes">${zeroFill(now.getMinutes())}:</span>
                
                <span class="dateV seconds"> ${zeroFill(now.getSeconds())}</span>
            </div>
            `;

  // Display the date and time on the screen using span#date-time
  document.getElementById("date-time").innerHTML = dateTime;
}, 1000);
