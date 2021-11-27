import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {postNewTweet} from "../../services/tweetService";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();

    const tweetClickHandler = () => {
        postNewTweet(dispatch, {
            tweet: whatsHappening
        });
    }

    return(
        <div>
            <div className='row'>
                    <div className='col-1 ps-1 '>
                        <img className="ms-4 wd-image-circular2 " src={"/a5/images/potrait.png"} alt=''/>
                    </div>
                    <div className='col-11 ps-2 '>
                        <div>
                            <div className="ps-4 ">
                                <textarea className="wd-twitter-space wd-tweet-box wd-black border-0" 
                                   rows="3"
                                   placeholder="What's happening?"
                                   value = {whatsHappening}
                                   onChange={(event) =>
                                    setWhatsHappening(event.target.value)}>
                                </textarea>
                            </div>
                            <div className=" ps-4 mt-4 ">
                                <i className="far fa-image wd-twitter-color"></i>
                                <i className="ms-3 fas fa-chart-line wd-twitter-color"></i>
                                <i className="ms-3 far fa-smile wd-twitter-color"></i>
                                <i className="ms-3 far fa-calendar wd-twitter-color"></i> 
                            <button onClick={tweetClickHandler} className="btn btn-primary rounded-pill float-end mb-2 ">
                                    Tweet
                            </button>
                            </div>
                        </div>
                        
                    </div>
            </div>
            
        </div>
    );
}
export default WhatsHappening;
