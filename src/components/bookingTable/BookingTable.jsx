
// eslint-disable-next-line react/prop-types
const BookingTable = ({ siBook, handleDelete, handleBookingConfirm, status }) => {
    // eslint-disable-next-line react/prop-types, no-unused-vars
    const { _id, img, customerName, date, price, service } = siBook;
    
    
    return (
        <div className="overflow-x-auto">
            <table className="table">
                <tbody>
                    {/* row 1 */}
                    <tr>
                        <th>
                            <button onClick={() => handleDelete(_id)} className="btn btn-circle bg-black">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </th>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={img} alt="" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">{customerName}</div>
                                    <div className="text-sm opacity-50">{service}</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <span className="badge badge-ghost badge-sm">{date}</span>
                        </td>
                        <td>{price}</td>
                        <th>
                            {
                                status === 'confirm' ? <span className="font-bold text-blue-500">Confirmed</span>
                                :
                                <button onClick={() => handleBookingConfirm(_id)} className="btn btn-ghost">Confirm</button>
                            }
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default BookingTable;