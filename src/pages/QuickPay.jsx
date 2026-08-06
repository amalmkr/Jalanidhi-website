import QP_hero from "../sections/QP/QP-hero";
import Search_bill from "../sections/QP/Search-bill";
import Bill_details from "../sections/QP/Bill-details";
import { useState} from "react";

function QuickPay(){
  const [showBill,setShowBill]=useState(false);
  return(
    <>
    <QP_hero/>
    <Search_bill/>
    <Bill_details/>
    </>
  )
}



export default QuickPay;