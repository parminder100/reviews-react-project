import "../Reviews/Reviews.css";
import user_image_1 from "../../asset/img/user_image_1.jpg";
import user_image_2 from "../../asset/img/user_image_2.jpg";
import user_image_3 from "../../asset/img/user_image_3.jpg";
import user_image_4 from "../../asset/img/user_image_4.jpg";
import { useState } from "react";

const Reviews = () =>{
    const [count, setCount] = useState(1);
    const [selectedRandomUser, setSelectedRandomUser] = useState({
        userImage: user_image_1,
        userName: "Bill Anderson",
        userDesignation: 'THE BOSS',
        userInfo: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.'
    });
    const UserData = [
        {
            id: 1,
            userImage: user_image_1,
            userName: 'Bill Anderson',
            userDesignation: 'THE BOSS',
            userInfo: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.',
        },
        {
            id: 2,
            userImage: user_image_2,
            userName: 'Susan Smith',
            userDesignation: 'WEB DEVELOPER',
            userInfo: `I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry`,
        },
        {
            id: 3,
            userImage: user_image_3,
            userName: 'Anna Johnson',
            userDesignation: 'WEB DESIGNER',
            userInfo: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
        },
        {
            id: 4,
            userImage: user_image_4,
            userName: 'Peter Jones',
            userDesignation: 'INTERN',
            userInfo: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
        },
    ]

    const handleSurpriseMeBtn = () =>{
        const randomUser = Math.floor(Math.random() * UserData.length);
        const selectedUser = UserData[randomUser];
        setSelectedRandomUser(selectedUser);
        console.log(selectedRandomUser);
    }

    const handleRightBtn = () =>{
        if(count < UserData.length){
            setCount(count + 1);
            console.log(count);
            const updatedUser = UserData[count];
            setSelectedRandomUser(updatedUser);
        }
        if(count === 3){
            setCount(0);
        }
    }

    const handleLeftBtn = () =>{
        if(count > 0){
            setCount(count - 1);
            console.log(count);
            const updatedUser = UserData[count - 1];
            setSelectedRandomUser(updatedUser);
        }
        else if (count === 0) {
            const lastUserIndex = UserData.length - 1;
            const updatedCount = lastUserIndex;
            const updatedUser = UserData[updatedCount];
            setCount(updatedCount);
            setSelectedRandomUser(updatedUser);
    
            console.log(updatedCount);
        }
    }
    return(
        <>
            <main className="reviews-main">
                <section className="reviews-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="reviews-heading-container">
                                    <div className="reviews-heading">our reviews</div>
                                    <div className="reviews-heading-underline"></div>
                                </div>
                                <div className="review-card-wrapper">
                                    <div className="reviews-card">
                                        <div className="reviews-image-container">
                                            <img className="reviews-img" src={selectedRandomUser.userImage} alt="user_reviews_1" />
                                        </div>
                                        <div className="user-name">{selectedRandomUser.userName}</div>
                                        <div className="user-designation">{selectedRandomUser.userDesignation}</div>
                                        <div className="user-info">
                                            {selectedRandomUser.userInfo}
                                        </div>
                                        <div className="navigation-btn">
                                            <button className="left-btn" onClick={handleLeftBtn}>
                                                <i className="fa fa-angle-left"></i>
                                            </button>
                                            <button className="right-btn" onClick={handleRightBtn}>
                                                <i className="fa fa-angle-right"></i>
                                            </button>
                                        </div>
                                        <button className="surprise-me-btn" onClick={handleSurpriseMeBtn}>Surprise Me</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
export default Reviews;