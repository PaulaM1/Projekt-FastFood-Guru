import React from 'react';
import ReactStars from 'react-stars';
import { render } from 'react-dom';
require('./component.css');

class Review extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            text:"",
            text2: "",
            posts: [],
            stars: [],
            stars1: 0,
            stars2: 0,
            stars3: 0,
            stars4: 0,

        }
    }

    handleChange = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            text2: this.state.text,
            posts: [...this.state.posts, this.state.text],
            stars: [...this.state.stars, [this.state.stars1, this.state.stars2, this.state.stars3, this.state.stars4]],

        }, () => {
            this.setState({
                stars1: 0,
                stars2: 0,
                stars3: 0,
                stars4: 0,
            })
        })
    }

    ratingChanged1 = (newRating1) => {
        const counter = 0;
        const arr = [];
        console.log(newRating1)
        this.setState({
            stars1: newRating1
        })
    }

    ratingChanged2 = (newRating2) => {
        console.log(newRating2)
        this.setState({
            stars2: newRating2
        })
    }

    ratingChanged3 = (newRating3) => {
        this.setState({
            stars3: newRating3
        })
    }

    ratingChanged4 = (newRating4) => {
        console.log(newRating4)
        this.setState({
            stars4: newRating4
        })
    }

    ratingSum = () => {
        const array = [newRating1, newRating2, newRating3, newRating4];
        console.log(array);
    }


    render(){
        const styleButton = {
            height:"50px",
            width: "220px",
            fontSize: "20px",
            color: "white",
            fontWeight: "bold",
            backgroundColor: "red",
            border: "none",
            borderRadius: "15px",
            margin: "15px"
        }

        const styleInput ={
            marginTop: "20px",
            width: "350px",
            height: "350px",
            backgroundColor: "rgb(235, 235, 224)",
            fontSize: "20px"

        }

        const styleList ={
            listStyleType: "none",
            fontSize: "25px"
        }

        const styleListElement ={
            padding: "10px"
        }
        console.log(this.state.text2);

        let posts = this.state.posts.map((e,i)=> {
            return <li style={styleListElement} key={i}>
                {e}
                <ReactStars count={5} value={Math.round(this.state.stars[i].reduce((p,n) => p+n) / this.state.stars[i].length)} onChange={this.state.stars[i]} size={18} color2={'red'} color1={'grey'} half={false}/>
                </li>
        })

        return(

            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="Review">
                        <div className="WriteReview_Component">
                            <textarea style={styleInput} className="review_input"  onChange={this.handleChange} placeholder="Your review helps others learn about great fastfood locals" value={this.state.text}/>
                        </div>
                        <div className="Stars_Component">
                            <div>
                                <h3>Bathroom Quality:</h3>
                                <ReactStars data-id="starsFirst" count={5} onChange={this.ratingChanged1} size={35} color2={'red'} color1={'grey'} half={false}/>
                            </div>
                            <div>
                                <h3>Staff:</h3>
                                <ReactStars data-id="starsSecond" count={5} onChange={this.ratingChanged2} size={35} color2={'red'} color1={'grey'} half={false}/>
                            </div>
                            <div>
                                <h3>Cleanliness:</h3>
                                <ReactStars data-id="starsThird" count={5} onChange={this.ratingChanged3} size={35} color2={'red'} color1={'grey'} half={false}/>
                            </div>
                            <div>
                                <h3>Delivery Speed:</h3>
                                <ReactStars data-id="starsFour" count={5} onChange={this.ratingChanged4} size={35} color2={'red'} color1={'grey'} half={false}/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <input style={styleButton} type="submit" value="Post Review"/>
                    </div>
                </form>
                <div>
                    <ul style={styleList} className="list_review">
                        {posts}
                    </ul>
                </div>
            </div>

        );
    }

}
document.getElementById('where-to-render')

export {Review}