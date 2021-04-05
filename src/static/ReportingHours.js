let ReportingHours = () => {
    return (
        <div className="section offwhitebg">
            <div className="content">
                <h1>Reporting your monthly hours</h1>
                <p>Reporting your monthly hours ensures you get paid. Currently this is a manual process but we are working on improving this with the new rota tool.</p>

                <h2>Contents</h2>
                <ul>
                    <li><a href="#when">When to report your monthly hours</a></li>
                    <li><a href="#getPaid">When you will get paid and how much</a></li>
                    <li><a href="#hoursSpreadSheet">Where are hours reported?</a></li>
                    <li><a href="#recordingShift">How to record a shift</a></li>
                    <li><a href="#recordingOt">Recording overtime</a></li>
                    <li><a href="#meetings">Team / buddy meetings</a> </li>
                    <li><a href="#mileage">Mileage</a></li>
                    <li><a href="#expenses">Expenses</a></li>
                </ul>

                <h2 id="when">When to report your monthly hours</h2>
                <p>Please complete your reporting hours by end of day on the 21st to give us plenty of time to make sure you get paid correctly and on time</p>
                <p>Hours worked should be reported for the preiod starting on the 21st of each month until the 20th of the following month. We will post reminders in Slack. However it may be easier to report your hours throughout the month, instead of leaving it to the 20th.</p>

                <h2 id="getPaid">When you will get paid and how much</h2>
                <p>You will be paid on the 25th of each month by the end of the day.</p>
                <p>Your pay will include any acceptable expenses + overtime you have declared on your spreadsheet between the 21st of the previous month - 20th of the current month.</p>
                <p>Everyone at BelleVie is paid an annual fixed salary based on their contracted hours, so your monthly pay will reflect a 12th of your annual salary.</p>

                <h2 id="hoursSpreadSheet">Where are hours reported?</h2>
                <p>Each team has a "Reporting Hours" spreadsheet in their team folder on <a href="https://drive.google.com/">Google Drive</a>. Please make sure you are logged n to Google Drive using your @belleviecare.co.uk email, and not a personal email address.</p>
                <h3>Finding the Reporting Hours spreadsheet in Google Drive</h3>
                <p>First you'll need to find your team folder. Your team folder is where your rota is stored, and any other documents which are shared and used within your team.</p>
                <ol>
                    <li>Once logged into Google Drive, click "Shared with me" on the left hand side</li>
                    <li>Find the folder "Care Teams"</li>
                    <li>Open the folder "Team Folders</li>
                    <li>Open your team folder</li>
                </ol>
                <p>Once inside your team folder... </p>
                <ol>
                    <li>Open the folder "Reporting Hours / Holiday"</li>
                    <li>You'll find a list of spreadsheets with the naming convention "MonthYear_ReportingTime & Expenses_TeamName" </li>
                    <li>Open the spreadsheet for the current month - for example "April 2021_Reporting Time & Expenses_Oxford"</li>
                </ol> 
                <p>You can also search for the name of the spreadsheet in Drive. Enter "Reporting Time & Expenses", and select your teams spreadsheet from the list</p> 
                <p>There will also be a link to the reporting hours spreadsheet in Slack, in the channel #reporting_hours</p>

                <h2 id="recordingShift">How to record a shift</h2>
                <p>Along the bottom of the spreadsheet you'll see some tabs with each colleagues name. Click on your name, this will be where you enter your own hours.</p>
                <p>You can find all the shifts you've worked by looking at your team’s rota and clicking on the “agreed shift” tab. You will work off a two-week rolling rota so you will need to know if the date falls within week 1 or week 2. Shifts are usually AM or PM and are normally 5 hours in duration. </p>
                <ol>
                    <li>Enter the date of each shift you worked in column B under the heading "Date"</li>
                    <li>Enter the type of work in column C under the heading "Shift"
                        <ol>
                            <li>If you worked a scheduled shift select "Shift"</li>
                            <li>You can also record your buddy meetings and team meetings here, as well as any holiday</li>
                        </ol>
                    </li>
                    <li>Record the start time of your first visit on the shift in Column E under the heading "Start Time", <strong>please make sure you use the 24h format eg: 14:00 NOT 2:00pm</strong></li>
                    <li>Record the end time of your last visit on the shift in Column F under the heading "End Time"</li>
                    <li>Your start time may be earlier than the agreed shift start time, and the end time may be earlier than the agreed shift end time.
                        <ol>
                            <li>All agreed shifts are 5 hours in length and this will be calculated for you.</li>
                            <li>Even if the start and end time of your visits don't equate to 5 hours you will still be paid for a 5 hour shift.</li>
                            <li>An earlier start time or a later end time don't qualify as Overtime if they fall outside of your agreed shift time, as the duration of time spent on visits may still be under the agreed 5 hour shift duration.</li>
                            <li>Any visits that fall outside of the 5 hour shift duration will be automatically recorded as overtime.</li>
                        </ol>
                    </li>
                    <li>Add any notes regarding the shift in Column G under "Notes", for example initials of people visited, or the reason for doing overtime (eg covering for a colleague)</li>
                    <li>Record your mileage in Column K under the heading "Mileage". For a normal shift your mileage is the distance travelled between visits, but not from your home to your first visit or your last visit to your home. <strong>Please read the section below on Mileage for more detail on recording Mileage correctly</strong></li>
                    <li>Record your expenses in Column M under the heading "Expenses". Please note Expenses must be a justifiable expense. Please familiarise yourself with the rules on Expenses in the Expenses section</li>
                    <li>All other fields you can leave alone, as these will be calculated automatically</li>
                </ol>

                <h2 id="recordingOt">Recording Overtime</h2>
                <p>Any visits or hours you have worked in addition to your agreed shifts is overtime. Please note if an agreed shift overruns or is lnoger than 5 hours any overtime is calculated automatically.</p>
                <p>You can enter your overtime into the reporting hours spreadsheet following the same process as your normal shift by selecting “Overtime” from the drop down menu in column B (type)</p>
                <ol>
                    <li>Enter the date of the overtime you worked in column B under the heading "Date"</li>
                    <li>Enter the type of work in column C under the heading "Shift", but select "Overtime"</li>
                    <li>For Overtime, the starting time will be the start of your first visit, <strong>if the overtime is less than 2 hours.</strong> Please record this in Column E under the heading "Start Time"</li>
                    <li>The end time for overtime will end time of your last shift <strong>if the overtime is less than 2 hours.</strong> Record this in Column F under the heading "End Time"</li>
                    <li>Add any notes regarding the shift in Column G under "Notes", for example initials of people visited, or the reason for doing overtime (eg covering for a colleague)</li>
                    <li>Record your mileage in Column K under the heading "Mileage". For a normal shift your mileage is the distance travelled between visits, but not from your home to your first visit or your last visit to your home. <strong>Please read the section below on Mileage for more detail on recording Mileage correctly</strong></li>
                    <li>Record your expenses in Column M under the heading "Expenses". Please note Expenses must be a justifiable expense. Please familiarise yourself with the rules on Expenses in the Expenses section</li>
                    <li>All other fields you can leave alone, as these will be calculated automatically</li>
                </ol>
                <h3>Other types of Overtime</h3>
                <ol>
                    <li>Overtime training: Any training completed outside of your agreed shift/contracted hours (including e-learning). Please try to complete eLearning during any free time you have on agreed shifts</li>
                    <li>Overtime shadowing: Any shadowing you have completed outside of your agreed shift/contracted hours (including e-learning). If you want to record shadowing done within your usual hours, record as a shift and write details of the shadowing in “notes”</li>
                </ol>
                <h2 id="meetings">Team / buddy meetings</h2> 
                <p>All colleagues are paid to attend 2 hours of meetings each week. These are your weekly team meetings (1.5 hours) and your 30 minute buddy meeting which is your opportunity to reflect on how your week has gone. Please record all of these in the reporting hours spreadsheet. </p>
                <ol>
                    <li>Enter the date of the meeting column B under the heading "Date"</li>
                    <li>For Team Meetings select "Team Meeting" in column C under the heading "Shift"</li>
                    <li>For Buddy Meetings select "Buddy Meeting" in column C under the heading "Shift"</li>
                    <li>Enter the start time for the meeting in Column E under the heading "Start Time"</li>
                    <li>Enter the end time of the meeting in Column F under the heading "End Time"</li>
                </ol>
                <p>If you miss a team meeting due to absence this should be recorded (as either sick leave or annual leave. All colleagues are expected to attend Team Meetings and Buddy Meetings weekly</p>

                <h2 id="mileage">Mileage</h2>
                <p>You will be reimbursed for any mileage completed between visits whilst on shift. If it is a normal shift you will not be paid for the mileage from your home to first visit and from your last visit to home unless agreed otherwise or if it is an overtime shift of less than 2 hours. </p>
                <ol>
                    <li>For each shift enter the total amount of mileage you are able to claim in column K under the heading “Mileage”. This will automatically calculate total mileage and total amount you will be reimbursed</li>
                    <li>Please enter any notes about your mileage in column L - For example if there is a reason your mileage may be particularly high or you have had to make an extra trip</li>
                </ol>

                <h2 id="expenses">Expenses</h2>
                <p>You can also claim for any purchases you have made that are directly related to your work or in the case where you have had to purchase something for someone we support. Where possible, the person we support should be paying for their own purchases however sometimes this cannot be avoided.</p>
                <p>You must provide a receipt for expenses to be able to claim them. Unfortunately if you re unable to present a receipt we are unable to reimburse you. You can send all receipts to Jessica by Slack or email jessica.aldred@belleviecare.co.uk (In the case of Jessica’s absence please forward to Violaine)</p>
                <ol>
                    <li>For each shift where you incurred an expense enter the amount in Column M under the heading "Expenses"</li>
                    <li>Please add a note stating what the expense was for and the intials of the person you support who the expense was for</li>
                    <li><strong>Please make sure you keep all VAT Receipts for expenses, otherwise we are unable to reimburse you</strong></li>
                </ol>
            </div>
        </div>
    )
}

export default ReportingHours;