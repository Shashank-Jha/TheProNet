import React from 'react'
import { Link } from 'react-router-dom';
import Graph from './Graph/Graph';
import './landing.css';

const Landing = () => {
    return (
        
        <div className="landing-body">
            <div className='graph'>
            <Graph/>
            </div>
            <div className='hero'>
                <div className='title'>🧪ProNet</div>
                <div className='sub-title'>A protien-protien based network visualizer and analyser system.</div>
            </div>
            <div className='content'>
                <div className='content-container'>
                    <div>
                    <span className='grad-text'> P R O N E T </span>
                    <span className='card-text'>
                        is Social Network anaylis concept used with data science to analyse and visualise Protien-Protien Interaction Networks.
                    </span>

                    </div>
                    <div className="btn-container">
                        <Link to="/LargeNetwork">
                            <button className='btn-grad'>Demo</button>
                        </Link>
                        <Link to="/AnalyzeNetwork">
                            <button className='btn-grad'>Analyse ➡</button>
                        </Link>   
                    </div>
                    
                </div>
            </div>
            
        </div>
        
    )
}

export default Landing
