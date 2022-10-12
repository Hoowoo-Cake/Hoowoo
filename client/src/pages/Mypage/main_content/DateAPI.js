import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import styled from "styled-components";


export default function DateAPI() {
    const [startDate, setStartDate] = useState(new Date());

    return (
      <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} className="dateBox"/>
    );
}
