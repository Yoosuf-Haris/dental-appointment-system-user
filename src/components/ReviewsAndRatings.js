import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const ReviewsAndRatings = () => {
    const [services, setServices] = useState([
        { id: 1, date: '2024-11-01', treatment: 'Dental Cleaning', doctor: 'Dr. Smith', reviewed: false },
        { id: 2, date: '2024-11-05', treatment: 'Tooth Extraction', doctor: 'Dr. Patel', reviewed: false },
        { id: 3, date: '2024-11-10', treatment: 'Orthodontic Consultation', doctor: 'Dr. Lee', reviewed: false },
    ]);

    const [selectedService, setSelectedService] = useState(null);
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(null);

    // Handle service selection
    const handleSelectService = (service) => {
        setSelectedService(service);
    };

    // Handle review input change
    const handleReviewChange = (e) => setReview(e.target.value);

    // Submit review and rating
    const handleReviewSubmit = (e) => {
        e.preventDefault();

        setServices((prevServices) =>
            prevServices.map((service) =>
                service.id === selectedService.id
                    ? { ...service, reviewed: true }
                    : service
            )
        );

        alert(`Thank you for your review of ${selectedService.treatment}!`);
        setSelectedService(null);
        setReview('');
        setRating(0);
    };

    return (
        <div className="p-4 max-w-lg mx-auto bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-4">Reviews and Ratings</h2>

            {!selectedService ? (
                <>
                    <h3 className="text-lg font-semibold mb-2">Select a Service to Review:</h3>
                    <ul className="space-y-2 mb-4">
                        {services.map((service) => (
                            <li
                                key={service.id}
                                className={`flex justify-between items-center p-2 border rounded-lg ${service.reviewed ? 'bg-green-100' : ''}`}
                            >
                                <div>
                                    <p><strong>Date:</strong> {service.date}</p>
                                    <p><strong>Treatment:</strong> {service.treatment}</p>
                                    <p><strong>Doctor:</strong> {service.doctor}</p>
                                    <p><strong>Reviewed:</strong> {service.reviewed ? 'Yes' : 'No'}</p>
                                </div>
                                {!service.reviewed && (
                                    <button
                                        onClick={() => handleSelectService(service)}
                                        className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                                    >
                                        Select
                                    </button>
                                )}
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                <>
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold mb-2">Selected Service</h3>
                        <div className="p-3 border rounded-lg bg-gray-100">
                            <p><strong>Date:</strong> {selectedService.date}</p>
                            <p><strong>Treatment:</strong> {selectedService.treatment}</p>
                            <p><strong>Doctor:</strong> {selectedService.doctor}</p>
                        </div>
                    </div>

                    <form onSubmit={handleReviewSubmit} className="space-y-4">
                        <h3 className="text-lg font-semibold mb-2">Your Review</h3>
                        <textarea
                            value={review}
                            onChange={handleReviewChange}
                            className="w-full p-2 border rounded"
                            placeholder="Write your review here..."
                            required
                        />

                        <div>
                            <label className="block font-semibold mb-1">Rating</label>
                            <div className="flex space-x-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <FaStar
                                        key={star}
                                        size={24}
                                        className={`cursor-pointer ${
                                            star <= (hover || rating) ? 'text-yellow-400' : 'text-gray-300'
                                        }`}
                                        onClick={() => setRating(star)}
                                        onMouseEnter={() => setHover(star)}
                                        onMouseLeave={() => setHover(null)}
                                    />
                                ))}
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2 bg-green-500 text-white rounded mt-4 hover:bg-green-600"
                        >
                            Submit Review
                        </button>
                    </form>
                </>
            )}
        </div>
    );
};

export default ReviewsAndRatings;
