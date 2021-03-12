import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import MealDetail from '../MealDetail/MealDetail';

const Meal = () => {
    const [search, setSearch] = useState();
    const [meals, setMeals] = useState();
    const handleChange = (event) => {
        setSearch(event.target.value);
    }
    useEffect( () => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    }, [search])
    return (
        <div style={{textAlign: 'center'}}>
            <h2>Meal</h2>
            <input type="text" onChange={handleChange} placeholder="Search Meal"/>
            <Container>
                <Row>
                {
                    meals?.map(meal => <MealDetail meal={meal}></MealDetail>)
                }
                </Row>
            </Container>
        </div>
    );
};

export default Meal;