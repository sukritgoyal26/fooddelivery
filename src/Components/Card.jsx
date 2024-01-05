import React from 'react'

export default function Card() {
    return (
        <div>
            <div className="card mt-3" style={{ "width": "18rem", "Height": "360px" }}>
                <img className="card-img-top" style={{ "maxHeight": "180px" }} src="https://img.freepik.com/free-photo/vertical-shot-traditional-indian-paneer-butter-masala-cheese-cottage-curry-black-surface_181624-32001.jpg?w=740&t=st=1704351129~exp=1704351729~hmac=ef0c8080858b94de79db506e08749a5d1725e34edb4c8d3d10c50ddac16bdfdd" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">this is some imp text</p>
                    <div className="container w-100">
                        <select className="m-2 h-100 bg-sucess rounded">
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })}
                        </select>

                        <select className="m-2 h-100 bg-sucess rounded">
                            <option value="Half">Half</option>
                            <option value="Full">Full</option>
                        </select>

                        <div className="d-inline h-100 fs-5">
                            Total Price
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
