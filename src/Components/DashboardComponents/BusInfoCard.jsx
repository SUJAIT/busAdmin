import './BusInfoCard.css'

const BusInfoCard = ({data}) => {
  const {
    _id,
    busName,
    superVisorNum,
    seatPrice,
    busRegNum,
    availableSeat,
    busUrl,
    destinationFrom,
    destinationTo,
    seatType,
    journeyStart,
    journeyEnd} = data
  return (
    <div>
      <div className="card cardW bg-base-100  shadow-xl">
  <div className="card-body">
    <div className='flex'>
       {/* img */}
    <div className="avatar">
  <div className="w-24 rounded">
    <img src={busUrl} />
  </div>
</div>
    {/* img end */}
    <div>
  <h2 className="card-title">Bus Name : {busName}</h2>
    <p>Phone Number : {superVisorNum}</p>
    <span>Available Seat : <div className="badge badge-secondary">{availableSeat}</div></span>
    <p>Seat Type : {seatType}</p>   
    <p>Seat Price : {seatPrice}</p>  
    <p>Bus Registration Number : {busRegNum}</p>
    </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default BusInfoCard
