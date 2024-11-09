import React from 'react'
import './TaskManagementGhant.css'
import { Calendar, Views, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import startOfWeek from 'date-fns/startOfWeek';
import addDays from 'date-fns/addDays';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const locales = {
    'en-US': require('date-fns/locale/en-US'),
};

const localizer = dateFnsLocalizer({
    format,
    parse: (str, formatStr) => format(str, formatStr, { locale: locales['en-US'] }),
    startOfWeek,
    getDay: (date) => new Date(date).getDay(),
    locales,
});

const events = [
    {
        title: "Design",
        start: new Date(2024, 0, 10),
        end: new Date(2024, 0, 12),
        color: 'green', // Specify the color for this event
    },
    {
        title: "Meeting",
        allDay: true,
        start: new Date(2024, 0, 2),
        end: new Date(2024, 0, 2),
        color: 'blue', // Specify the color for this event
    },
    {
        title: "Conference",
        start: new Date(2024, 0, 16),
        end: new Date(2024, 0, 19),
        color: 'red', // Specify the color for this event
    },
    {
        title: "Implementation",
        start: new Date(2024, 0, 21),
        end: new Date(2024, 0, 24),
        color: 'orange', // Specify the color for this event
    },
    {
        title: "Test",
        start: new Date(2024, 0, 26),
        end: new Date(2024, 0, 29),
        color: 'purple', // Specify the color for this event
    }
];
const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Smith' },
    // Add more users as needed
];

const CustomToolbar = ({ label, localizer: { messages } }) => {
    return (
        <div>
            <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                <h4>{label}</h4>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                {users.map((user) => (
                    <div key={user.id} style={{ marginBottom: '10px', marginLeft: '10px' }}>
                        {user.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

const TaskManagementGhant = () => {
    return (
        <div>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                // defaultView={Views.MONTH}
                // views={[Views.MONTH]}
                style={{ height: 500, backgroundColor: "white", padding: "12px" }}
                components={{
                    toolbar: (props) => <CustomToolbar {...props} />,
                }}
            />
        </div>
    )
}

export default TaskManagementGhant