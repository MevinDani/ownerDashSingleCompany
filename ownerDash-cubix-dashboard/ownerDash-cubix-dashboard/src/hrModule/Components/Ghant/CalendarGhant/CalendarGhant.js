import React, { useEffect, useState } from 'react'
import './CalendarGhant.css'

const CalendarGhant = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [daysInMonth, setDaysInMonth] = useState([]);

    useEffect(() => {
        // Function to get an array of days in the month
        const getDaysInMonth = (month, year) => {
            const daysInMonth = new Date(year, month + 1, 0).getDate();
            return Array.from({ length: daysInMonth }, (_, i) => i + 1);
        };

        // Get the days for the current month
        const daysInCurrentMonth = getDaysInMonth(
            currentMonth.getMonth(),
            currentMonth.getFullYear()
        );

        // Set the state with the days
        setDaysInMonth(daysInCurrentMonth);
    }, [currentMonth]);

    const renderWeeks = () => {
        const weeks = [];
        let days = daysInMonth.slice(); // Copy the array

        while (days.length > 0) {
            weeks.push(days.splice(0, 7));
        }

        return weeks.map((week, index) => (
            <>
                {renderDays(week)}
            </>
        ));
    };

    const renderDays = (week) => {
        return week.map((day, index) => (
            <div key={index} className="calendar__day">
                {day}
            </div>
        ));
    };
    return (
        <div class="calendar">
            <div class="calendar__weekday">Sun</div>
            <div class="calendar__weekday">Mon</div>
            <div class="calendar__weekday">Tue</div>
            <div class="calendar__weekday">Wed</div>
            <div class="calendar__weekday">Thu</div>
            <div class="calendar__weekday">Fri</div>
            <div class="calendar__weekday">Sat</div>

            {/* {renderWeeks()} */}

            {/* <!-- Week 1 --> */}
            <div class="calendar__day">29</div>
            <div class="calendar__day">30</div>
            <div class="calendar__day">31</div>
            <div class="calendar__day">1</div>
            <div class="calendar__day">2</div>
            <div class="calendar__day">3</div>
            <div class="calendar__day">4</div>

            {/* <!-- Week 2 --> */}
            <div class="calendar__day">5</div>
            <div class="calendar__day">6</div>
            <div class="calendar__day">7</div>
            <div class="calendar__day">8</div>
            <div class="calendar__day">9</div>
            <div class="calendar__day">10</div>
            <div class="calendar__day">11</div>

            {/* <!-- Week 3 --> */}
            <div class="calendar__day">12</div>
            <div class="calendar__day">13</div>
            <div class="calendar__day">14</div>
            <div class="calendar__day">15</div>
            <div class="calendar__day">16</div>
            <div class="calendar__day">17</div>
            <div class="calendar__day">18</div>

            {/* <!-- Week 4 --> */}
            <div class="calendar__day">19</div>
            <div class="calendar__day">20</div>
            <div class="calendar__day">21</div>
            <div class="calendar__day">22</div>
            <div class="calendar__day">23</div>
            <div class="calendar__day">24</div>
            <div class="calendar__day">25</div>

            {/* <!-- Week 5 --> */}
            <div class="calendar__day">26</div>
            <div class="calendar__day">27</div>
            <div class="calendar__day">28</div>
            <div class="calendar__day">29</div>
            <div class="calendar__day">30</div>
            <div class="calendar__day">1</div>
            <div class="calendar__day">2</div>

            {/* <!-- Events --> */}
            <div
                className="calendar__event calendar__event--done"
                style={{ gridColumn: "2 / 5", gridRow: "2", marginTop: "2rem" }}
            >
                Metting
            </div>
            <div
                className="calendar__event calendar__event--todo"
                style={{ gridColumn: "2 / 6", gridRow: "3", marginTop: "2rem" }}
            >
                Design
            </div>
            <div
                className="calendar__event calendar__event--overdue"
                style={{ gridColumn: "3 / 8", gridRow: "3", marginTop: "4rem" }}
            >
                Implementation (1)
            </div>
            <div
                className="calendar__event calendar__event--overdue"
                style={{ gridColumn: "1 / 6", gridRow: "4", marginTop: "2rem" }}
            >
                Implementation (2)
            </div>
            <div
                className="calendar__event calendar__event--todo"
                style={{ gridColumn: "1 / 6", gridRow: "5", marginTop: "2rem" }}
            >
                Test
            </div>
            <div
                className="calendar__event calendar__event--todo"
                style={{ gridColumn: "2 / 7", gridRow: "5", marginTop: "4rem" }}
            >
                Fix bugs
            </div>

        </div >
    )
}

export default CalendarGhant