
function PaymentHistoryTable(){
    const payment=[
        {
         month:"August 2026",
         billNo:"Jn-2026-08-123",
         amount:100,
         date:"10 Aug 2026",
         method:"UPi",
         status:"Paid"
        },
        {
         month:"July 2026",
         billNo:"Jn-2026-07-123",
         amount:130,
         date:"23 Aug 2026",
         method:"UPi",
         status:"Paid"
        },
        {
         month:"June 2026",
         billNo:"Jn-2026-06-123",
         amount:100,
         date:"15 Jun 2026",
         method:"UPi",
         status:"Paid"
        },
    ]
    return(
        <>
            {payment.map((payment,index)=>(
                <tr key={index}>
                    <td className="p-5">{payment.month}</td>
                    <td className="p-5">{payment.billNo}</td>
                    <td className="p-5">{payment.amount}</td>
                    <td className="p-5">{payment.date}</td>
                    <td className="p-5">{payment.method}</td>
                    <td className="p-5">{payment.status}</td>
                    <td>DownLoad</td>
                </tr>
            ))}
        </>
    )
}

export default PaymentHistoryTable;