import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import data from './dataset.json';
import './LargeGraph.css';
import ForceGraph3D from 'react-force-graph-3d';

const initialData = {
  nodes: [ { id: "id1", name: "Dummy data 1", val: 10, }, { id: "id2", name: "Dummy data 2", val: 9, }, ],
  links: [ { source: "id1", target: "id2"  },],
};


const LargeGraph = () => {
    
  const [graphData, setGraphData] = useState(initialData);
  useEffect(() => {
    setGraphData(data);
  }, []);

    return (
      <>
      <div className='nav'>
        <div className='logo'>🧪ProNet</div>
        <Link to="/"><button className='back'>⬅ back</button></Link>
      </div>
        <div className="bg-graph">
            <ForceGraph3D
          graphData={graphData}
          linkCurvature={0.1}
          nodeLabel="id"
          nodeAutoColorBy="user"/>
        </div>
      </>
    )
}

export default LargeGraph;