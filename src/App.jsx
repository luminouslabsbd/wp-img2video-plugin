import React ,{useState,useEffect}from 'react';
import axios from "axios";

import {Toaster , toast} from "sonner";

const App = () => {
    const products = [
        {
            "id": 1,
            "productName": "Wireless Headphones",
            "category": "Audio",
            "tags": ["electronics", "headphones", "audio"],
            "description": "Wireless headphones with noise-cancellation, providing a premium sound experience.",
            "imageURL": "https://placehold.co/600x400/png"
        },
        {
            "id": 2,
            "productName": "Smartphone Case",
            "category": "Accessories",
            "tags": ["electronics", "smartphone", "accessories"],
            "description": "Protective case for smartphones, with a sleek design and easy access to all ports.",
            "imageURL": "https://placehold.co/600x400/png"
        },
        {
            "id": 3,
            "productName": "Bluetooth Speaker",
            "category": "Audio",
            "tags": ["audio", "bluetooth", "speaker"],
            "description": "Portable Bluetooth speaker with excellent sound quality and a rugged design.",
            "imageURL": "https://placehold.co/600x400/png"
        },
        {
            "id": 4,
            "productName": "Laptop Stand",
            "category": "Accessories",
            "tags": ["office", "laptop", "ergonomics"],
            "description": "An adjustable laptop stand for ergonomic comfort during long working hours.",
            "imageURL": "https://placehold.co/600x400/png"
        },
        {
            "id": 5,
            "productName": "Portable Charger",
            "category": "Electronics",
            "tags": ["accessory", "powerbank", "charger"],
            "description": "A portable power bank that keeps your devices charged on the go.",
            "imageURL": "https://placehold.co/600x400/png"
        },
        {
            "id": 6,
            "productName": "LED Desk Lamp",
            "category": "Home Decor",
            "tags": ["lighting", "lamp", "desk"],
            "description": "Energy-efficient LED desk lamp with adjustable brightness.",
            "imageURL": "https://placehold.co/600x400/png"
        },
        {
            "id": 7,
            "productName": "Gaming Mouse",
            "category": "Accessories",
            "tags": ["gaming", "mouse", "electronics"],
            "description": "Precision gaming mouse with customizable buttons and RGB lighting.",
            "imageURL": "https://placehold.co/600x400/png"
        },
        {
            "id": 8,
            "productName": "Ergonomic Chair",
            "category": "Furniture",
            "tags": ["furniture", "office", "ergonomics"],
            "description": "Ergonomic office chair designed for comfort and support during long hours of work.",
            "imageURL": "https://placehold.co/600x400/png"
        },
        {
            "id": 9,
            "productName": "Smart Watch",
            "category": "Wearables",
            "tags": ["electronics", "watch", "fitness"],
            "description": "Smartwatch with fitness tracking and seamless integration with your smartphone.",
            "imageURL": "https://placehold.co/600x400/png"
        },
        {
            "id": 10,
            "productName": "Fitness Tracker",
            "category": "Wearables",
            "tags": ["fitness", "health", "tracker"],
            "description": "Track your fitness goals with a sleek and durable fitness tracker.",
            "imageURL": "https://placehold.co/600x400/png"
        },
        {
            "id": 11,
            "productName": "Wireless Keyboard",
            "category": "Accessories",
            "tags": ["keyboard", "wireless", "technology"],
            "description": "Sleek and quiet wireless keyboard for a clutter-free workspace.",
            "imageURL": "https://placehold.co/600x400/png"
        },
        {
            "id": 12,
            "productName": "Tablet Sleeve",
            "category": "Accessories",
            "tags": ["tablet", "case", "protective"],
            "description": "A stylish and protective sleeve for your tablet, keeping it safe from scratches.",
            "imageURL": "https://placehold.co/600x400/png"
        },
        {
            "id": 13,
            "productName": "Phone Screen Protector",
            "category": "Accessories",
            "tags": ["accessory", "phone", "screen protector"],
            "description": "Durable screen protector for your phone to prevent scratches and cracks.",
            "imageURL": "https://placehold.co/600x400/png"
        },
        {
            "id": 14,
            "productName": "USB Flash Drive",
            "category": "Electronics",
            "tags": ["electronics", "storage", "usb"],
            "description": "Portable USB flash drive with high-speed data transfer and large storage capacity.",
            "imageURL": "https://placehold.co/600x400/png"
        },
        {
            "id": 15,
            "productName": "External Hard Drive",
            "category": "Electronics",
            "tags": ["electronics", "storage", "hard drive"],
            "description": "External hard drive with high capacity for backing up your important data.",
            "imageURL": "https://placehold.co/600x400/png"
        },
        {
            "id": 16,
            "productName": "Smartphone Tripod",
            "category": "Accessories",
            "tags": ["photography", "tripod", "smartphone"],
            "description": "Compact and lightweight tripod for stabilizing your smartphone during photos and videos.",
            "imageURL": "https://placehold.co/600x400/png"
        },
        {
            "id": 17,
            "productName": "Noise Cancelling Earbuds",
            "category": "Audio",
            "tags": ["electronics", "audio", "earbuds"],
            "description": "Noise-cancelling wireless earbuds for an immersive music experience.",
            "imageURL": "https://placehold.co/600x400/png"
        },
        {
            "id": 18,
            "productName": "Action Camera",
            "category": "Cameras",
            "tags": ["camera", "action", "adventure"],
            "description": "Rugged action camera for capturing your outdoor adventures in high resolution.",
            "imageURL": "https://placehold.co/600x400/png"
        },
        {
            "id": 19,
            "productName": "Smart Home Assistant",
            "category": "Smart Home",
            "tags": ["smart home", "assistant", "AI"],
            "description": "Voice-controlled smart assistant to help manage your home and daily tasks.",
            "imageURL": "https://placehold.co/600x400/png"
        },
        {
            "id": 20,
            "productName": "Bluetooth Earphones",
            "category": "Audio",
            "tags": ["audio", "earphones", "bluetooth"],
            "description": "Compact Bluetooth earphones for music and calls with excellent sound quality.",
            "imageURL": "https://placehold.co/600x400/png"
        },
        {
            "id": 21,
            "productName": "VR Headset",
            "category": "Gaming",
            "tags": ["gaming", "VR", "virtual reality"],
            "description": "Immersive virtual reality headset for a next-level gaming experience.",
            "imageURL": "https://placehold.co/600x400/png"
        },
        {
            "id": 22,
            "productName": "Digital Camera",
            "category": "Cameras",
            "tags": ["camera", "photography", "digital"],
            "description": "High-resolution digital camera for professional-level photography.",
            "imageURL": "https://placehold.co/600x400/png"
        },
        {
            "id": 23,
            "productName": "Smart Thermostat",
            "category": "Smart Home",
            "tags": ["smart home", "thermostat", "temperature"],
            "description": "A smart thermostat that learns your preferences and saves energy.",
            "imageURL": "https://placehold.co/600x400/png"
        },
        {
            "id": 24,
            "productName": "Car Phone Mount",
            "category": "Accessories",
            "tags": ["car", "accessories", "mount"],
            "description": "A secure mount for your phone while driving, providing easy hands-free access.",
            "imageURL": "https://placehold.co/600x400/png"
        }
    ];
    const btn = {
        marginTop: '15px',
        padding: '10px 15px',
        fontSize: '14px',
        backgroundColor: '#FF6347',
        border: 'none',
        color: '#fff',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    };

    const [selectedProducts, setSelectedProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [videoData, setVideoData] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [allProducts,setAllProducts] = useState([]);

    const [paginationLinks, setPaginationLinks] = useState({
        next: null,
        prev: null,
    });

    const getAllProducts = async (url = 'https://eshop.luminousdemo.com/api/all-products') => {
        try {
            setIsLoading(true);
            const response = await axios.get(url);
            console.log(response.data);

            setAllProducts(response.data);
            setPaginationLinks({
                next: response.data.links.next,
                prev: response.data.links.prev,
            });
            setIsLoading(false);
        } catch (e) {
            console.log('Error - ', e);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getAllProducts();
    }, []);

    const toggleProductSelection = (image) => {
        if (selectedProducts.includes(image)) {
            setSelectedProducts(selectedProducts.filter(item => item !== image));
        } else {
            setSelectedProducts([...selectedProducts, image]);
        }
    };


    const generateVideo = async () => {
        setIsLoading(true);
        setError(null);

        if(! (selectedProducts?.length > 2)){
            toast.error("Please select minimum 3 products");
            setIsLoading(false);
            return ;
        }

        const requestData = {
            image_urls: selectedProducts,
            tts_text: "Even a small lamp can light up a dark room, reminding us that even the tiniest light holds the power to guide us through the darkness. Let your light shine bright."
        };

        try {
            const response = await axios.post('https://img2vdo.voiceerp.com/generate-video', requestData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response?.data?.video_path) {
                toast.success('Video generated successfully.!');
                setVideoData(response);
                setModalVisible(true);
                setIsLoading(false);
            }

            setVideoData(response.data);
            setSelectedProducts([]);
            setIsLoading(false);

        } catch (err) {
            setError('Error generating video');
            setIsLoading(false);
            console.error('Error:', err);
        }
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const handlePaginationClick = (url) => {
        if (!url) return;
        getAllProducts(url);
    };

    return (
        <>
            <div className="flex items-center justify-center h-screen bg-blue-100">
                <div className="" style={{display: 'flex', justifyContent: 'space-between'}}>
                    <h1 className="text-4xl font-bold text-center text-red-700">
                        Here all products are available for video generation. Use the AI.
                    </h1>
                    <button
                        style={btn}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#e55347'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = '#FF6347'}
                        onClick={generateVideo}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Generation Video ...' : 'Generate Video'}
                    </button>
                </div>

                <div className="mt-5">
                    <div className="row" style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                        {
                            allProducts?.data?.map((product, key) => (
                                <div
                                    className="col-md-4"
                                    key={key}
                                    style={{
                                        cursor: 'pointer',
                                        margin: '10px',
                                        backgroundColor: '#fff',
                                        borderRadius: '8px',
                                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                        padding: '20px',
                                        width: '250px',
                                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                        border: selectedProducts.includes(product.image)
                                            ? '2px solid #FF6347'
                                            : '2px solid transparent',
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                    onClick={() => toggleProductSelection(product?.image)}
                                >
                                    {/* Product Image */}
                                    <img
                                        src={product?.image}
                                        alt={product?.title}
                                        style={{
                                            width: '100%',
                                            height: '150px',
                                            objectFit: 'cover',
                                            borderRadius: '8px',
                                        }}
                                    />

                                    <h4 style={{
                                        fontSize: '18px',
                                        fontWeight: 'bold',
                                        color: '#333',
                                        marginTop: '15px'
                                    }}>
                                        {product?.title}
                                    </h4>
                                    {/*<p style={{fontSize: '14px', color: '#555', marginTop: '10px'}}>*/}
                                    {/*    {product?.description}*/}
                                    {/*</p>*/}
                                    <button
                                        style={{
                                            marginTop: '15px',
                                            padding: '10px 15px',
                                            fontSize: '14px',
                                            backgroundColor: '#FF6347',
                                            color: '#fff',
                                            border: 'none',
                                            borderRadius: '5px',
                                            cursor: 'pointer',
                                            transition: 'background-color 0.3s',
                                        }}
                                        onMouseEnter={(e) => e.target.style.backgroundColor = '#e55347'}
                                        onMouseLeave={(e) => e.target.style.backgroundColor = '#FF6347'}
                                    >
                                        Show Details
                                    </button>
                                </div>
                            ))
                        }
                    </div>
                    <div style={{display: 'flex', justifyContent: "end"}}>
                        <div className="">
                            {paginationLinks.prev && (
                                <a
                                    style={btn}
                                    href="#"
                                    onClick={() => handlePaginationClick(paginationLinks.prev)}
                                >
                                    Prev
                                </a>
                            )}
                            {paginationLinks.next && (
                                <a
                                    style={btn}
                                    href="#"
                                    onClick={() => handlePaginationClick(paginationLinks.next)}
                                >
                                    Next
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {modalVisible && (
                <div
                    style={{
                        position: 'fixed',
                        top: '0',
                        left: '0',
                        right: '0',
                        bottom: '0',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <div
                        style={{
                            backgroundColor: '#fff',
                            padding: '20px',
                            borderRadius: '8px',
                            width: '300px',
                            textAlign: 'center',
                        }}
                    >
                        <div>
                            <h3 style={{color: '#FF6347'}}>Video Generated Successfully!</h3>
                            <video src={videoData?.video_path} controls width="100%" height="auto">
                                Your browser does not support the video tag.
                            </video>
                        </div>

                        <a href={videoData?.download_url}>
                            <button
                                style={{
                                    marginTop: '20px',
                                    padding: '10px 15px',
                                    backgroundColor: '#FF6347',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                    transition: 'background-color 0.3s',
                                }}
                                onMouseEnter={(e) => e.target.style.backgroundColor = '#FF6347'}
                                onMouseLeave={(e) => e.target.style.backgroundColor = '#FF6347'}
                            >
                                Download
                            </button>
                        </a>

                        &nbsp;&nbsp;

                        <button
                            style={{
                                marginTop: '20px',
                                padding: '10px 15px',
                                backgroundColor: '#FF6347',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                transition: 'background-color 0.3s',
                            }}
                            onMouseEnter={(e) => e.target.style.backgroundColor = '#FF6347'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = '#FF6347'}
                            onClick={closeModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            <Toaster />
        </>
    );
};

export default App;