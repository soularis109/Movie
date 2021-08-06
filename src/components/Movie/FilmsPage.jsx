import React, {useEffect, useState} from 'react';
import './filmsPage.css'
import {useParams} from "react-router-dom";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {setMoviesDetails} from "../redux/films-reducer";
import {logDOM} from "@testing-library/react";

const FilmsPage = () => {
    const dispatch = useDispatch()
    const details = useSelector(state => state.movies.details)
    const {id} = useParams();


    useEffect(() => {
            axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=2`)
                .then(response => {
                    dispatch(setMoviesDetails(response.data.data.movie))
                    console.log(response.data.data.movie)
                })
    },[])

    if (details < 1) {
        return <h1>wait</h1>
    }
    console.log(details)
    return (
        <div>
            {/*{details.map(detail => <div>{detail.title}</div>)}*/}
        </div>
    );
};

export default FilmsPage;