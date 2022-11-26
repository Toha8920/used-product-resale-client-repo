import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

const AddAProduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const imgKey = process.env.REACT_APP_img_HOST_key;
    const navigate = useNavigate()
    const handleLogin = (values) => {
        console.log(values);

        const image = values.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        }).then(res => res.json()).then(imgData => {
            const imgUrl = imgData.data.url;
            values.imgURL = imgUrl;
            values.date = moment().format('LL')
            axios.post('http://localhost:5000/products', values).then(data => {
                if (data?.data.acknowledged === true) {
                    toast.success('Upload success')
                    navigate('/dashboard/my-products')
                }
            })


        })

    }

    return (
        <div className=' flex justify-center items-center'>
            <div className='w-96 p-7'>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Product Category</span></label>
                        <select className="select w-full max-w-xs select-bordered" defaultValue='Bedroom Furniture'  {...register("category", {
                            required: "Product Category is required"
                        })}>
                            <option value="bedroom">Bedroom Furniture</option>
                            <option value="kitchen">Kitchen Furniture</option>
                            <option value="dinning">Dinning Furniture</option>
                        </select>
                        {errors.category && <p className='text-red-600'>{errors.category?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Product Name</span></label>
                        <input type="text"
                            {...register("productName", {
                                required: "Product Name is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.productName && <p className='text-red-600'>{errors.productName?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs mt-5">
                        <input type="file" className="file-input file-input-bordered w-full max-w-xs" {...register("image", {
                            required: "Product Name is required"
                        })} />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Resale Price</span></label>
                        <input type="number"
                            {...register("resalePrice", {
                                required: "Price is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.resalePrice && <p className='text-red-600'>{errors.resalePrice?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Condition Type</span></label>
                        <input type="text"
                            {...register("condition", {
                                required: "Condition is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.condition && <p className='text-red-600'>{errors.condition?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Years Of Use</span></label>
                        <input type="Number"
                            {...register("yearsOfUse", {
                                required: "Condition is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.yearsOfUse && <p className='text-red-600'>{errors.yearsOfUse?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Mobile Number</span></label>
                        <input type="number"
                            {...register("mobile", {
                                required: "Mobile Number is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.mobile && <p className='text-red-600'>{errors.mobile?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Location</span></label>
                        <input type="text"
                            {...register("location", {
                                required: "Location is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.location && <p className='text-red-600'>{errors.location?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Description</span></label>
                        <input type="text"
                            {...register("description", {
                                required: " is required",
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.description && <p className='text-red-600'>{errors.description?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Original Price</span></label>
                        <input type="number"
                            {...register("originalPrice", {
                                required: " is required",
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.originalPrice && <p className='text-red-600'>{errors.originalPrice?.message}</p>}
                    </div>
                    <input className='btn btn-accent w-full' value="Submit" type="submit" />
                </form>

            </div>
        </div>
    );
};

export default AddAProduct;