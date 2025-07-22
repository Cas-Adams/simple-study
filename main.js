const monthYearElement = document.getElementById('monthYear');
const datesElement = document.getElementById('dates');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

//Date() is based off computers time and location
let currentDate = new Date();

// updates the calendar constant, use of the constant is to maintain identity as opossed to function
const updateCalendar = () => {
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    const firstDay = new Date(currentYear, currentMonth, 0);
    const lastDay = new Date(currentYear, currentMonth + 1, 0); //setting to 0 give last day of previous month, month starts at 1
    const totalDays = lastDay.getDate(); //getdDate gets total days
    const firstDayIndex = firstDay.getDay(); // Gets the weekday as a number (0 sunday, 6 saturday)
    const lastDayIndex = lastDay.getDay();

    const monthYearString = currentDate.toLocaleString('default', {month: 'long', year: 'numeric'});
    monthYearElement.textContent = monthYearString;
    //displays the current month and year, used at the top of the calendar.

    let datesHTML = ''; //let must be defined before use.
    
    //fills in the previous months dates so that the calendar is full
    for(let i = firstDayIndex; i > 0; i--) {
        const prevDate = new Date(currentYear, currentMonth, 0 - i + 1);
        datesHTML += `<div class="date inactive">${prevDate.getDate()}</div>`;
    };

    //fills in all the days of the current month, adds the class active so that it can be manipulated with css
    for(let i = 1; i <= totalDays; i++) {
        const date = new Date(currentYear, currentMonth, i);
        const activeClass = date.toDateString() === new Date().toDateString() ? 'active ' : ''; 
        datesHTML += `<div class="date ${activeClass}">${i}</div>`;
        
    };

    //ensures the last row is fully populated, e.g. if 31 is on thursday it fills with numbers through until sunday
    for(let i = 1; i <= 7 - lastDayIndex; i++) {
        const nextDate = new Date(currentYear, currentMonth + 1, i);
        datesHTML += `<div class="date inactive">${nextDate.getDate()}</div>`;

    };

    //note use of innerHTML fine as not user manipulated
    datesElement.innerHTML = datesHTML;
}

//event listeners for each of the months, changes the index by 1 each way.
prevBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    updateCalendar();
})  

nextBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    updateCalendar();
})

//calls the function again so that it refreshes on load.
updateCalendar();