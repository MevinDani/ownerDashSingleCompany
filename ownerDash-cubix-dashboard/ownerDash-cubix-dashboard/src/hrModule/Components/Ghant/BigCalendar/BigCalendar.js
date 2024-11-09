import React, { useEffect, useRef, useState } from 'react'
import './BigCalendar.css'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const locales = {
    'en-US': enUS,
}

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
})

const events = [
    {
        title: "Design",
        start: new Date(2024, 0, 10, 9, 0), // Set the specific start time, e.g., 9:00 AM
        end: new Date(2024, 0, 12, 17, 0), // Set the specific end time, e.g., 5:00 PM
        color: 'green',
        allDay: false,
    },
    {
        title: "Meeting",
        allDay: true,
        start: new Date(2024, 0, 2, 9, 0),
        end: new Date(2024, 0, 2, 17, 0),
        color: 'blue',
        allDay: false,
    },
    {
        title: "Conference",
        start: new Date(2024, 0, 16, 9, 0),
        end: new Date(2024, 0, 19, 17, 0),
        color: 'red',
        allDay: false,
    },
    {
        title: "Implementation",
        start: new Date(2024, 0, 21, 9, 0),
        end: new Date(2024, 0, 24, 17, 0),
        color: 'orange',
        allDay: false,
    },
    {
        title: "Test",
        start: new Date(2024, 0, 26, 9, 0),
        end: new Date(2024, 0, 29, 17, 0),
        color: 'purple',
        allDay: false,
    },
    {
        title: "Leave",
        employee: 'John Smith',
        start: new Date(2024, 0, 30, 9, 0),
        end: new Date(2024, 0, 31, 17, 0),
        color: '#ff7070',
        allDay: false,
    },
    {
        title: "Leave",
        employee: 'Alice Brown',
        start: new Date(2024, 1, 22, 9, 0),
        end: new Date(2024, 1, 24, 17, 0),
        color: '#ff7070',
        allDay: false,
    }
];

const onSelectEvent = () => {
    alert('selected event')
}

const BigCalendar = () => {

    const [selectedEvent, setSelectedEvent] = useState(null);
    const popupRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            // console.log('scroll activated');
            // Update the top position of the popup based on the scroll position
            if (selectedEvent && popupRef.current) {
                const { top, left } = popupRef.current.getBoundingClientRect();
                const initialTop = selectedEvent.y - top; // Store the initial top relative to the window
                const initialLeft = selectedEvent.x - left; // Store the initial left relative to the window
                const updatedTop = selectedEvent.y + window.scrollY; // Update the top position based on the scroll
                const updatedLeft = selectedEvent.x + window.scrollX; // Update the left position based on the scroll

                popupRef.current.style.top = `${updatedTop}px`;
                popupRef.current.style.left = `${updatedLeft}px`;

                // You may need to adjust the x and y properties depending on which one is the correct coordinate
                setSelectedEvent({ ...selectedEvent, x: updatedLeft, y: updatedTop });
            }
        };

        const scrollContainer = document.getElementsByClassName('NewDashBody')[0];

        // console.log(scrollContainer)
        scrollContainer.addEventListener('scroll', handleScroll);

        return () => {
            scrollContainer.removeEventListener('scroll', handleScroll);
        };
    }, [selectedEvent]);


    const handleSelectEvent = (event, e) => {
        // Set the selected event in state
        setSelectedEvent({ ...event, x: e.clientX + 20, y: e.clientY - 80 });
    };

    const handlePopupClose = () => {
        // Clear the selected event when the popup is closed
        setSelectedEvent(null);
    };

    const eventStyleGetter = (event, start, end, isSelected) => {
        const style = {
            backgroundColor: event.color, // Use the color specified in the event
            borderRadius: '5px',
            opacity: 0.8,
            color: 'white',
            border: '0',
            display: 'block',
            boxShadow: '0 1px 1px 0 rgba(0,0,0,0.1)',
            // position: 'relative'
        };
        return {
            style,
            'data-tip': `${event.title} - ${format(start, 'yyyy-MM-dd')}`, // Tooltip content
        };
    };

    return (
        <div className='BigCalendarWrapper'>
            <Calendar
                localizer={localizer}
                events={events}
                // events={events.map(event => ({
                //     ...event,
                //     title: `${event.title} - ${format(event.start, 'yyyy-MM-dd')}`, // Tooltip content
                // }))}
                startAccessor="start"
                endAccessor="end"
                defaultView={'month'}
                views={['month']}
                style={{ height: 500, backgroundColor: "white", padding: "12px" }}
                eventPropGetter={eventStyleGetter}
                // onSelectEvent={onSelectEvent}
                onSelectEvent={handleSelectEvent}
            // popup
            />

            {selectedEvent && (
                // Render your popup/modal here
                // <div ref={popupRef} className="rbc-overlay" style={{ position: "absolute", top: selectedEvent.y, left: selectedEvent.x }}>
                <div ref={popupRef} className="rbc-overlay" style={{ position: "absolute", top: '10%', left: '50%' }}>
                    <div className="popup-content">
                        <h5 className='rbc-overlay-header' style={{ color: selectedEvent.color }}>{selectedEvent.title}</h5>
                        {
                            selectedEvent.title === 'Leave' &&
                            <p>Employee: <span className='LeaveEmployee'>{selectedEvent.employee}</span></p>
                        }
                        <p>Start: {format(selectedEvent.start, 'MMMM do yyyy, h:mm a')}</p>
                        <p>End: {format(selectedEvent.end, 'MMMM do yyyy, h:mm a')}</p>
                        <button className='popCloseBtn' onClick={handlePopupClose}>Close</button>
                    </div>
                </div>
            )}
            {/* <div className='clickPop'>
                testpopup
            </div> */}
            {/* <Tooltip
                html={<div>testPpopup</div>}
                position="top"
                trigger="mouseenter"
                interactive
                theme="light"
            /> */}
        </div>
    )
}

export default BigCalendar