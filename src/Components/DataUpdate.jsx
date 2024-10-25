// // datepiker import componnent start
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
// // datepiker import componnent end

// const DataUpdate = () => {



//   const busData = (event) =>{
//       event.preventDefault();
//   const form = event.target;
//   const BusName = form.busName.value;
//   const superVisorNum = form.superVisorNum.value;
//   const parSeatPrice = form.seatPrice.value;
//   const busRegNum = form.busRegNum.value;
//   const destinationFrom = form.destinationFrom.value;
//   const destinationTo = form.destinationTo.value;
//   const seatType = form.seatType.value;
//   const availableSeat = form.availableSeat.value;
//   const ImgUrl = form.busUrl.value;
//   const journeyStartDayDate = form.selaectedDateTimeFrom.value;
//   const journeyEndDayDate = form.selaectedDateTimeTo.value;
// const busDatas = {
//   BusName,
//   superVisorNum,
//   parSeatPrice,
//   busRegNum,
//   destinationFrom,
//   destinationTo,
//   seatType,
//   availableSeat,
//   ImgUrl,
//   journeyStartDayDate,
//   journeyEndDayDate

//   }

// console.log(busDatas)

//   }
//   return (
//     <div>
//       <div className="hero ">
//         <div className="hero-content ">

//           <div className="bg-base-100 shadow-2xl">
//             <p>BUS INFORMATION</p>
//             <form onSubmit={busData} className="card-body">
//               <div className="form-control">

//                 <div className='flex gap-2'>
//                   <div>
//                     <label className="label">
//                       <span className="label-text">BUS NAME</span>
//                     </label>
//                     <input name='busName' type="BusName" placeholder="BUS NAME" className="input input-bordered" required />
//                   </div>
//                   <div>
//                     <label className="label">
//                       <span className="label-text">SUPER VISOR NUMBER</span>
//                     </label>
//                     <input name='superVisorNum' type="number" placeholder="SUPER VISOR NUMBER" className="input input-bordered" required />
//                   </div>
//                 </div>

//               </div>
//               <div className="form-control">
//                 <div className='flex gap-2'>
//                   <div>
//                     <label className="label">
//                       <span className="label-text">SEAT PRICE</span>
//                     </label>
//                     <input type="number" name='seatPrice' placeholder="SEAT PRICE" className="input input-bordered" required />
//                   </div>
//                   <div>
//                     <label className="label">
//                       <span className="label-text">BUS REG NUM</span>
//                     </label>
//                     <input name='busRegNum' type="text" placeholder="BUS REG NUM" className="input input-bordered" required />

//                   </div>


//                 </div>


//               </div>


//               <div className="form-control">
//                 <div className='flex gap-2'>
//                   <div>
//                     <label className="label">
//                       <span className="label-text">DESTINATION FROM</span>
//                     </label>
//                     <select value={destinationFrom} onChange={desChangeFrom} className="select select-bordered w-full max-w-xs">
//                       <option disabled selected>STARTING DESTINATION</option>
//                       <option value="DHAKA">DHAKA</option>
//                       <option value="COMILLA">COMILLA</option>
//                       <option value="CHITTAGONG">CHITTAGONG</option>
//                       <option value="COXBAZZAR">COXBAZZAR</option>
//                     </select>
//                   </div>
//                   <div>
//                     <label className="label">
//                       <span className="label-text">DESTINATION TO</span>
//                     </label>
//                     <select value={destinationTo} className="select select-bordered ">
//                       <option disabled selected>ENDING DESTINATION</option>
//                       <option value="DHAKA">DHAKA</option>
//                       <option value="COMILLA">COMILLA</option>
//                       <option value="CHITTAGONG">CHITTAGONG</option>
//                       <option value="COXBAZZAR">COXBAZZAR</option>
//                     </select>
//                   </div>



//                 </div>


//               </div>


//               <div className="form-control">
//                 <div className='flex gap-2'>
//                   <div>
//                     <label className="label">
//                       <span className="label-text">SEAT TYPE</span>
//                     </label>
//                     <select value={seatType} className="select select-bordered w-full max-w-xs">
//                       <option disabled selected>SEAT TYPE</option>
//                       <option value="AC">AC</option>
//                       <option value="NON-AC">NON-AC</option>
//                     </select>
//                   </div>
//                   <div>
//                     <label className="label">
//                       <span className="label-text">BUS SEAT AVAILABLE</span>
//                     </label>
//                     <input name='availableSeat' type="number" placeholder="BUS SEAT AVAILABLE" className="input input-bordered" required />
//                   </div>
//                   <div>
//                     <label className="label">
//                       <span className="label-text">BUS URL</span>
//                     </label>
//                     <input name='busUrl' type="text" placeholder="BUS IMAGE URL" className="input input-bordered" required />
//                   </div>



//                 </div>


//               </div>


//               {/* time */}
//               <div className="form-control">
//                 <div className='flex gap-2'>
//                   <div>
//                     <label className="label">
//                       <span className="label-text">JOURNEY START DATE & TIME</span>
//                     </label>
//                     <LocalizationProvider dateAdapter={AdapterDayjs}>
//                       <DemoContainer components={['DateTimePicker']}>
//                         <DateTimePicker value={selaectedDateTimeFrom} label="Basic date time picker" />
//                       </DemoContainer>
//                     </LocalizationProvider>
//                   </div>
//                   <div>
//                     <label className="label">
//                       <span className="label-text">JOURNEY START DATE & TIME</span>
//                     </label>
//                     <LocalizationProvider dateAdapter={AdapterDayjs}>
//                       <DemoContainer components={['DateTimePicker']}>
//                         <DateTimePicker value={selaectedDateTimeTo} label="Basic date time picker" />
//                       </DemoContainer>
//                     </LocalizationProvider>
//                   </div>



//                 </div>


//               </div>
//               {/* time */}


//               <div className="form-control mt-6">

//                 <input className="btn btn-error aab" type="submit" value="SUBMIT" />
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default DataUpdate


//------------------------------------------------------------------------------------------------------


import React, { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';

function BusInfoForm() {
  // State management for form inputs
  const [formData, setFormData] = useState({
    busName: '',
    superVisorNum: '',
    seatPrice: '',
    busRegNum: '',
    availableSeat: '',
    busUrl: '',
    destinationFrom: '',
    destinationTo: '',
    seatType: '',
    journeyStart: null,
    journeyEnd: null,
  });

  // Handle change for all inputs
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle DateTime change
  const handleDateTimeChange = (name, newValue) => {
    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

console.log(formData)

  // Form submission handler
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    console.log('Form Data:', formData); // Log form data
    // Here, you can send data to the backend or perform further actions
  };

  return (
    <div className="hero">
      <div className="hero-content">
        <div className="bg-base-100 shadow-2xl p-6">
          <p>BUS INFORMATION</p>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <div className="flex gap-2">
                <div>
                  <label className="label">
                    <span className="label-text">BUS NAME</span>
                  </label>
                  <input
                    name="busName"
                    type="text"
                    placeholder="BUS NAME"
                    className="input input-bordered"
                    value={formData.busName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text">SUPER VISOR NUMBER</span>
                  </label>
                  <input
                    name="superVisorNum"
                    type="number"
                    placeholder="SUPERVISOR NUMBER"
                    className="input input-bordered"
                    value={formData.superVisorNum}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="form-control">
              <div className="flex gap-2">
                <div>
                  <label className="label">
                    <span className="label-text">SEAT PRICE</span>
                  </label>
                  <input
                    type="number"
                    name="seatPrice"
                    placeholder="SEAT PRICE"
                    className="input input-bordered"
                    value={formData.seatPrice}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text">BUS REG NUM</span>
                  </label>
                  <input
                    name="busRegNum"
                    type="text"
                    placeholder="BUS REG NUM"
                    className="input input-bordered"
                    value={formData.busRegNum}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="form-control">
              <div className="flex gap-2">
                <div>
                  <label className="label">
                    <span className="label-text">DESTINATION FROM</span>
                  </label>
                  <select
                    name="destinationFrom"
                    className="select select-bordered"
                    value={formData.destinationFrom}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="" disabled>STARTING DESTINATION</option>
                    <option value="DHAKA">DHAKA</option>
                    <option value="COMILLA">COMILLA</option>
                    <option value="CHITTAGONG">CHITTAGONG</option>
                    <option value="COXBAZZAR">COXBAZZAR</option>
                  </select>
                </div>
                <div>
                  <label className="label">
                    <span className="label-text">DESTINATION TO</span>
                  </label>
                  <select
                    name="destinationTo"
                    className="select select-bordered"
                    value={formData.destinationTo}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="" disabled>ENDING DESTINATION</option>
                    <option value="DHAKA">DHAKA</option>
                    <option value="COMILLA">COMILLA</option>
                    <option value="CHITTAGONG">CHITTAGONG</option>
                    <option value="COXBAZZAR">COXBAZZAR</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="form-control">
              <div className="flex gap-2">
                <div>
                  <label className="label">
                    <span className="label-text">SEAT TYPE</span>
                  </label>
                  <select
                    name="seatType"
                    className="select select-bordered"
                    value={formData.seatType}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="" disabled>SEAT TYPE</option>
                    <option value="AC">AC</option>
                    <option value="NON-AC">NON-AC</option>
                  </select>
                </div>
                <div>
                  <label className="label">
                    <span className="label-text">BUS SEAT AVAILABLE</span>
                  </label>
                  <input
                    name="availableSeat"
                    type="number"
                    placeholder="BUS SEAT AVAILABLE"
                    className="input input-bordered"
                    value={formData.availableSeat}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text">BUS URL</span>
                  </label>
                  <input
                    name="busUrl"
                    type="text"
                    placeholder="BUS IMAGE URL"
                    className="input input-bordered"
                    value={formData.busUrl}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="form-control">
              <div className="flex gap-2">
                <div>
                  <label className="label">
                    <span className="label-text">JOURNEY START DATE & TIME</span>
                  </label>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DateTimePicker']}>
                      <DateTimePicker
                        value={formData.journeyStart}
                        onChange={(newValue) => handleDateTimeChange('journeyStart', newValue)}
                        label="Start Date & Time"
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </div>
                <div>
                  <label className="label">
                    <span className="label-text">JOURNEY END DATE & TIME</span>
                  </label>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DateTimePicker']}>
                      <DateTimePicker
                        value={formData.journeyEnd}
                        onChange={(newValue) => handleDateTimeChange('journeyEnd', newValue)}
                        label="End Date & Time"
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </div>
              </div>
            </div>

            <div className="form-control mt-6">
              <input type="submit" className="btn btn-error" value="SUBMIT" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BusInfoForm;















