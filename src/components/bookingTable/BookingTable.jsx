
const BookingTable = ({ siBook }) => {
    const { img, customerName, date, price, service } = siBook;
    return (
        <div className="overflow-x-auto">
            <table className="table">

                <tbody>
                    {/* row 1 */}
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
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
                                    <div className="text-sm opacity-50">Bangladesh</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <span className="badge badge-ghost badge-sm">{date}</span>
                        </td>
                        <td>{price}</td>
                        <th>
                            <button className="btn btn-ghost ">Pending</button>
                        </th>
                    </tr>


                </tbody>


            </table>
        </div>
    );
};

export default BookingTable;