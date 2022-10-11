import React,{useEffect,useState} from "react";
import ForceGraph3D from "react-force-graph-3d";
import test from "./block.json";

const initialData = {
  nodes: [ { id: "id1", name: "Dummy data 1", val: 10, }, { id: "id2", name: "Dummy data 2", val: 9, }, ],
  links: [ { source: "id1", target: "id2"  },],
};


const Graph = ()=>{
  const [graphData, setGraphData] = useState(initialData);
  useEffect(() => {
    setGraphData(test);
  }, []);
    return (
      <div>
        <ForceGraph3D
          graphData={graphData}
          nodeId="id"
          linkCurvature={0.1}
          // nodeLabel="id"
          nodeAutoColorBy="group"
        />
      </div>
    );
}

export default Graph;
