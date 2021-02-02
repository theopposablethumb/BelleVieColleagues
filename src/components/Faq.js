import React from 'react';

let Faq = () => {
    return (
        <div>
            <h1>Frequently asked questions</h1>
            <p>Not sure what you can claim as expenses or need some help logging your overtime? Hopefully we have the answer here.</p>
            
            <h2>Overtime</h2>
            <p>Overtime is work logged outside of your agreed shifts.</p>
            <ul>
                <li>Overtime is recorded from the start of the first visit until the end of the last visit (+travel time if applicable), <strong>not from the start-end of the shift you have covered.</strong></li>
                <li>When recording overtime please include a reason for any overtime in the notes column of the reporting hours spreadsheet</li>
                <li>You should include travel time (and mileage) from home to first visit and from end of visits to your home <strong>if the overtime shift is less than 2 hours</strong></li>
                <li>If you have completed any training outside your agreed shifts this can be recorded as “overtime training”. 
                    <ul>
                        <li>Please try to arrange all training/e-learning using any free time during your agreed shifts where possible.</li>
                        <li>If you have shifts which are not full and you choose to do e-learning at another time for your own convenience please declare this as “training” and NOT “overtime training”</li>
                    </ul>
                </li>
                <li>If you are swapping shifts with someone else and it is the same shift length then this is not classed as overtime and should be recorded as a normal shift.</li>
            </ul>
            <h3>Missing hours and Overtime</h3>
            <p>You may have noticed in the agreed shift tab on your rota that there is an area called “missing hours” This shows any hours that you are contracted to that vary from the total hours of your agreed shifts.</p>
            <h4>My missing hours are “0”</h4>
            <p>This means that you are on shift for your contracted hours (taking into account 2 hrs/week for team meeting) so you don’t need to worry about this.</p>
            <h4>My missing hours are a negative number</h4>
            <p>This means your agreed shifts add up to more than your contracted hours and you will be paid overtime for this</p>
            <h4>My missing hours are a positive number</h4>
            <p>This means that you have less hours on shift than you are contracted to. You are expected to be proactive about picking up overtime shifts. The missing hours will be deducted from your total overtime.</p>

            <h2>Team and buddy meetings</h2>
            <p>You will be paid to attend 2 hours/week for your team/buddy meetings so you must attend these. Buddy meetings are an oppurtunity for you and your buddy to reflect on your working week and support each other prioritising what you feel is important for BelleVie and the people you support. You can select “Team meeting” as shift type.</p>
            <p>If you miss a team meeting due to absence this should be recorded (eg sick leave/annual leave)</p>

            <h2>Expenses</h2>
            <p>You can claim for any purchases you have made that are directly related to your work or in the case where you have had to purchase something for someone we support. Where possible, the person we support should be paying for their own purchases however sometimes this cannot be avoided.</p>
            <p>Please keep a copy of all receipts for any expenses. <strong>If you do not send a copy of the receipt for any purchases you have made then we cannot reimburse you.</strong> You can send all receipts to Jessica by Slack, <a href="https://bellevie-for-all.slack.com/team/U01DL1P2797">@Jessica Aldred</a> or email <a href="mailto: jessica.aldred@belleviecare.co.uk">jessica.aldred@belleviecare.co.uk</a> (In the case of Jessica’s absence please forward to Violaine)</p>

            <h2>Mileage</h2>
            <p>You will be reimbursed for any mileage completed between visits whilst on shift. If it is a normal shift you will not be paid for the mileage from your home to first visit and from your last visit to home unless agreed otherwise or if it is an overtime shift of less than 2 hours.</p>

            <h2>Holiday and leave</h2>
            <p>You are entitled to 6 weeks (pro-rata) annual leave per tax year (April-April) Your annual leave balances will be available to see on HR Partner. As part of a self-managing team you are responsible for managing your own annual leave. Please look to take your annual leave when there is cover available and you have agreed with your team on the annual leave channel in Slack. You should talk to your rota champion about annual leave.</p>
            <p>You will calculate the amount of annual leave taken using the hours on shift you would normally work on the rota. If you are off for a whole week it will be taken as your weekly contracted hours.</p>
            
            <h2>Sickness and absence</h2>
            <p>Once you have passed probation you are entitled to one week paid sick leave. After this period, if you have received a sick note from your doctor, you will receive statutory sick pay (SSP) or if agreed in advance you may take this as unpaid/annual leave.</p>
            <p>Please record sick leave in the same way as annual leave but identify this as sick leave. You can enter the total amount of hours taken off sick in the area marked “number of hours sickness” and again please record any missed team/buddy meetings</p>
            <p>Any unpaid leave should be agreed in advance</p>
        </div>
    )
}

export default Faq;