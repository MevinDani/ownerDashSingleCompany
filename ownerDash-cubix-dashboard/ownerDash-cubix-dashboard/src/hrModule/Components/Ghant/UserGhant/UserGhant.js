import React from 'react'
import './UserGhant.css'

const UserGhant = () => {
    return (
        <div class="gantt">
            <div class="gantt__lines">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

            {/* <!-- Header --> */}
            <div class="gantt__period">
                <div></div>
                <div>Mon</div>
                <div>Tue</div>
                <div>Wed</div>
                <div>Thu</div>
                <div>Fri</div>
            </div>

            <div className="gantt__row">
                <div className="gantt__assign">John</div>
                <div className="gantt__tasks">
                    <div className="gantt__task gantt__task--done" style={{ gridColumn: "2 / 5" }}></div>
                    <div className="gantt__task gantt__task--overdue" style={{ gridColumn: "1 / 3" }}></div>
                </div>
            </div>

            <div className="gantt__row">
                <div className="gantt__assign">Smith</div>
                <div className="gantt__tasks">
                    <div className="gantt__task gantt__task--done" style={{ gridColumn: "2 / 4" }}></div>
                    <div className="gantt__task gantt__task--todo" style={{ gridColumn: "3 / 5" }}></div>
                    <div className="gantt__task gantt__task--todo" style={{ gridColumn: "3 / 6" }}></div>
                </div>
            </div>

            <div className="gantt__row">
                <div className="gantt__assign">Foo</div>
                <div className="gantt__tasks">
                    <div className="gantt__task gantt__task--overdue" style={{ gridColumn: "1 / 2" }}></div>
                    <div className="gantt__task gantt__task--done" style={{ gridColumn: "3 / 5" }}></div>
                    <div className="gantt__task gantt__task--todo" style={{ gridColumn: "2 / 4" }}></div>
                    <div className="gantt__task gantt__task--todo" style={{ gridColumn: "2 / 5" }}></div>
                </div>
            </div>

            <div className="gantt__row">
                <div className="gantt__assign">Bar</div>
                <div className="gantt__tasks">
                    <div className="gantt__task gantt__task--overdue" style={{ gridColumn: "1 / 4" }}></div>
                    <div className="gantt__task gantt__task--done" style={{ gridColumn: "2 / 4" }}></div>
                    <div className="gantt__task gantt__task--todo" style={{ gridColumn: "3 / 5" }}></div>
                </div>
            </div>
        </div>
    )
}

export default UserGhant