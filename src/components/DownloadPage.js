import {jsPDF} from 'jspdf';
import React from 'react'
import html2canvas from "html2canvas";
import { HiDownload } from 'react-icons/hi';

const DownloadPage = ({rootElementId, downloadFileName}) => {
    const downloadFileDocument = ()=> {
        const input = document.getElementById(rootElementId);
        html2canvas(input).then((canvas)=>{
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF("p", "pt", "a3");
            pdf.addImage(imgData, "JPEG", 0, 0);
            pdf.save(`${downloadFileName}`);
        })
    }
  return (
    <div>
      <div className='mt-4 '>
	<div className='button w-32 h-8 bg-blue-500 rounded-lg cursor-pointer select-none
    active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
    active:border-b-[0px]
    transition-all duration-150 [box-shadow:0_10px_0_0_#1b6ff8,0_15px_0_0_#1b70f841]
    border-b-[1px] border-blue-400
  '>
		<span HiDownload onClick={downloadFileDocument}  className='flex flex-col justify-center items-center h-full text-white font-bold text-lg '>Download</span>
	</div>
  </div>
        
        
    </div>
  )
}

export default DownloadPage