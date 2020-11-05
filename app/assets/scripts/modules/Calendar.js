class Calendar {
  constructor() {
      this.icon = document.querySelectorAll('.fa-calendar')
      this.calendar = document.querySelectorAll('.datepicker')      
      this.events()
  }

  events() {
      this.icon.forEach(box => box.addEventListener('click', () => this.showCalendar(box)))
  }

  showCalendar(n) {
    console.log("was click",$(n.previousElementSibling).datepicker({
      dateFormat: "dd M yy",
      changeMonth: true,
      changeYear: true,
    }).focus())    
  }
}

export default Calendar;