import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;
    const handleDelate = (_id) => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://coffee-store-server-hlh4wyzk3-rahid-amins-projects.vercel.app/coffee/${_id}`, {
                    method: 'DELETE'

                }).then(res => res.json()).then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        }
                        );
                        const remaining = coffees.filter(cof => cof._id !== _id);
                        setCoffees(remaining);
                    }
                })
            }
        });
    }

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure>
                <img
                    src={photo}
                    alt="Movie" />
            </figure>
            <div className="flex justify-between w-full p-4">
                <div>
                    <h2 className="card-title">{name}</h2>

                    <p>{quantity}</p>
                    <p>{supplier}</p>
                    <p>{taste}</p>
                    <p>{category}</p>
                    <p>{details}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="join join-vertical space-y-4">
                        <button className="btn join-item">View</button>
                        <Link to={`updateCoffee/${_id}`}>
                            <button className="btn">Edit</button>
                        </Link>
                        <button className="btn join-item bg-red-400" onClick={() => { handleDelate(_id) }}>Delete</button>
                    </div>
                    {/* <button className="btn btn-primary">Watch</button> */}
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;