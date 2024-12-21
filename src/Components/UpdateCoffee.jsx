import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {

    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;
    const handleUpdateCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updatedCoffee = { name, quantity, supplier, taste, category, details, photo };
        console.log(updatedCoffee);

        //send data to the server
        fetch(`https://coffee-store-server-hlh4wyzk3-rahid-amins-projects.vercel.app/coffee/${_id}`, {

            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)


        }).then(res => res.json()).then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee updated sussessfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
            }
        })
    }

    return (
        <div className='bg-[#F4F3F0] p-24'>
            <h4 className='text-3xl font-extrabold'>Update coffee:{name}</h4>
            <form onSubmit={handleUpdateCoffee}>
                {/* form name and quantity row */}
                <div className='md:flex mb-8'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='name' defaultValue={name} placeholder="coffee name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='quantity' defaultValue={quantity} placeholder="available quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form supplier and taste row */}
                <div className='md:flex mb-8'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='supplier' defaultValue={supplier} placeholder="supplier" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='taste' defaultValue={taste} placeholder="taste" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form category and details row */}
                <div className='md:flex mb-8'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='category' defaultValue={category} placeholder="category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='details' defaultValue={details} placeholder="details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form photo url row */}
                <div className='mb-8'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='photo' defaultValue={photo} placeholder="photo" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>

                <input type="submit" value="Update Coffee" className='btn btn-block bg-white ' />
            </form>
        </div>
    );
};

export default UpdateCoffee;