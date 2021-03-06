import { Component } from 'react'
import foodsFromJason from '../../foods.json'
import FoodForm from '../food-form/FoodForm';




const foods = foodsFromJason

class FoodBox extends Component {

    state = {
        foods: foods,
        foodForm: null
    }

    showForm = () =>  {
        const foodForm = !this.state.foodForm
        this.setState({foodForm})
    }


    addFood = (food) => {
        foods.push(food)
        this.setState((prev) => {
            return {
                foods: [food, ...prev.foods]
            }
        })
        this.setState.saved = true
    this.showForm()
        console.log(foods.length)
    }
    render() {
        return (
            <>
                {!this.state.foodForm &&

                    <button
                        className="button is-link my-3"
                        onClick={this.showForm}
                    >
                        Add new food
                        </button>
                }

                {this.state.foodForm === true &&
                    <FoodForm
                        addFood={this.addFood} />}

                {
                    foods.map((food, i) => (

                        <div key={i} className="box">
                            <article className="media">
                                <div className="media-left">
                                    <figure className="image is-64x64">
                                        <img src={food.image} />
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <div className="content">
                                        <p>
                                            <strong>{food.name}</strong> <br />
                                            <small>{food.calories} Cal</small>
                                        </p>
                                    </div>
                                </div>
                                <div className="media-right">
                                    <div className="field has-addons">
                                        <div className="control">
                                            <input className="input" type="number" value="1" />
                                        </div>
                                        <div className="control">
                                            <button className="button is-info">
                                                +
          </button>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    ))
                }
            </>
        )
    }
}
export default FoodBox
